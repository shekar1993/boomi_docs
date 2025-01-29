#!/bin/bash
# Enable error handling and command printing
set -e  # Exit on error
set -u  # Exit on undefined variables

# Function to show usage
show_usage() {
    echo -e "\033[1mUsage: $0 -b <branch_name>\033[0m"
    echo "Options:"
    echo "  -b    Branch name (required)"
    echo "  -h    Show this help message"
    exit 1
}

# Parse command line arguments
while getopts "b:h" opt; do
    case $opt in
        b)
            BRANCH="$OPTARG"
            ;;
        h)
            show_usage
            ;;
        \?)
            echo "Invalid option: -$OPTARG" >&2
            show_usage
            ;;
        :)
            echo "Option -$OPTARG requires an argument." >&2
            show_usage
            ;;
    esac
done

# Check if branch parameter is provided
if [ -z "${BRANCH:-}" ]; then
    echo -e "\033[0;31mError: Branch name is required\033[0m" >&2
    show_usage
fi

# Configuration
SITE_ID="cbaa8465-98fc-4888-abe0-7d116de4664e"
POLL_INTERVAL=60  # 1 minute
MAX_ATTEMPTS=10   # 10 retries

# Progress spinner characters
SPINNER=('⠋' '⠙' '⠹' '⠸' '⠼' '⠴' '⠦' '⠧' '⠇' '⠏')

# Print formatted messages
print_header() {
    local separator="----------------------------------------"
    local start_msg="Starting new deployment at $(date '+%Y-%m-%d %H:%M:%S')"
    local branch_msg="Branch: $BRANCH"
    
    echo -e "\n\033[1;34m$separator\033[0m"
    echo -e "\033[1m$start_msg\033[0m"
    echo -e "\033[1m$branch_msg\033[0m"
    echo -e "\033[1;34m$separator\033[0m\n"
}

print_info() {
    echo -e "\033[0;32m[INFO] $1\033[0m"
}

print_error() {
    echo -e "\033[0;31m[ERROR] $1\033[0m" >&2
}

# API request wrapper with retry logic
make_api_request() {
    local url=$1
    local retries=3
    local attempt=0
    
    while [ $attempt -lt $retries ]; do
        attempt=$((attempt + 1))
        
        response=$(curl -s -w "\nHTTP_STATUS:%{http_code}" \
            -H "Authorization: Bearer $NETLIFY_ACCESS_TOKEN" \
            "$url")
        
        http_status=$(echo "$response" | sed -n 's/.*HTTP_STATUS:\([0-9]*\)/\1/p')
        body=$(echo "$response" | sed 's/HTTP_STATUS:.*//')
        
        if [ "$http_status" -eq 200 ]; then
            echo "$body"
            return 0
        elif [ "$http_status" -eq 429 ]; then
            print_error "Rate limit hit, waiting before retry..."
            sleep $((attempt * 5))
        else
            print_error "API request failed with status $http_status"
            if [ $attempt -eq $retries ]; then
                return 1
            fi
            sleep 2
        fi
    done
    return 1
}

# Get deploy information for a branch
get_branch_deploys() {
    local deploys
    deploys=$(make_api_request "https://api.netlify.com/api/v1/sites/$SITE_ID/deploys") || {
        print_error "Failed to fetch deploys"
        return 1
    }
    
    if [ -z "$deploys" ]; then
        print_error "Empty response from API"
        return 1
    fi
    
    # Filter deploys for the specific branch
    local branch_deploys
    branch_deploys=$(echo "$deploys" | jq -r "[.[] | select(.branch == \"$BRANCH\")] | sort_by(.created_at) | reverse")
    
    if [ -z "$branch_deploys" ] || [ "$branch_deploys" = "[]" ]; then
        print_error "No deploys found for branch: $BRANCH"
        return 1
    fi
    
    echo "$branch_deploys"
}


# Function to get build state with additional details
get_build_state() {
    local deploy_info=$1
    local state=$(echo "$deploy_info" | jq -r .state)
    local message=""
    
    case $state in
        "preparing")
            message="Preparing build environment"
            ;;
        "enqueued")
            message="Build is queued"
            ;;
        "building")
            message="Building site"
            ;;
        "ready")
            message="Build completed successfully"
            ;;
        "error")
            message="Build failed with error"
            ;;
        *)
            message="Current state: $state"
            ;;
    esac
    
    echo "$message"
}

# Modify the monitor_deploy_state function
monitor_deploy_state() {
    local deploy_info=$1
    local deploy_id=$(echo "$deploy_info" | jq -r .id)
    local start_time=$(date +%s)
    local spinner_index=0
    local attempts=0
    
    # Clear line for build progress
    echo ""
    
    while [ $attempts -lt $MAX_ATTEMPTS ]; do
        local current_deploy
        current_deploy=$(get_branch_deploys | jq -r ".[] | select(.id == \"$deploy_id\")")
        
        if [ -z "$current_deploy" ] || [ "$current_deploy" = "null" ]; then
            print_error "Deploy $deploy_id not found"
            return 1
        fi
        
        local state=$(echo "$current_deploy" | jq -r .state)
        local build_message=$(get_build_state "$current_deploy")
        local current_time=$(date +%s)
        local time_diff=$((current_time - start_time))
        
        # Format time difference
        local minutes=$((time_diff / 60))
        local seconds=$((time_diff % 60))
        local time_display
        if [ $minutes -gt 0 ]; then
            time_display="${minutes}m ${seconds}s"
        else
            time_display="${seconds}s"
        fi
        
        # Update spinner and message (clear line and move cursor up)
        printf "\033[A\r\033[K\033[0;33m${SPINNER[$spinner_index]} $build_message (Time: $time_display)\033[0m\n"
        
        # Modify the monitor_deploy_state function's ready case
        case $state in
            "ready")
                printf "\r\033[K\033[0;32m✓ Deploy completed successfully! (Total time: $time_display)\033[0m\n"
                preview_url=$(echo "$current_deploy" | jq -r .deploy_ssl_url)
                export_url "$preview_url"
                return 0
                ;;
            "error"|"failed")
                printf "\r\033[K\033[0;31m✗ Deploy failed! (Time elapsed: $time_display)\033[0m\n"
                return 1
                ;;
            *)
                # Update spinner more frequently for smooth animation
                spinner_index=$(( (spinner_index + 1) % ${#SPINNER[@]} ))
                sleep 0.2  # Short sleep for spinner animation
                ;;
        esac
        
        # Only increment attempts after full interval
        if [ $((time_diff % POLL_INTERVAL)) -eq 0 ] && [ $time_diff -ne 0 ]; then
            attempts=$((attempts + 1))
        fi
    done
    
    local final_time_diff=$(($(date +%s) - start_time))
    local final_minutes=$((final_time_diff / 60))
    local final_seconds=$((final_time_diff % 60))
    local final_time_display
    if [ $final_minutes -gt 0 ]; then
        final_time_display="${final_minutes}m ${final_seconds}s"
    else
        final_time_display="${final_seconds}s"
    fi
    
    print_error "✗ Monitoring timed out after $MAX_ATTEMPTS attempts (Time elapsed: $final_time_display)"
    return 1
}

# Modify the main function to handle the last successful deploy case
main() {
    if [ -z "${NETLIFY_ACCESS_TOKEN:-}" ]; then
        print_error "NETLIFY_ACCESS_TOKEN is not set"
        exit 1
    fi
    
    print_info "Starting Netlify deploy monitor"
    
    local deploy_info
    deploy_info=$(get_branch_deploys) || exit 1
    
    # Check for active build
    local active_deploy
    active_deploy=$(echo "$deploy_info" | jq -r '[.[] | select(.state != "ready" and .state != "error")] | .[0]')
    
    if [ "$active_deploy" != "null" ] && [ -n "$active_deploy" ]; then
        local deploy_id=$(echo "$active_deploy" | jq -r .id)
        print_info "Found active build for branch $BRANCH: $deploy_id"
        if ! monitor_deploy_state "$active_deploy"; then
            exit 1
        fi
        exit 0
    fi
    
    # Get last successful deploy if no active build
    local last_deploy
    last_deploy=$(echo "$deploy_info" | jq -r '[.[] | select(.state == "ready")] | .[0]')
    
    # Modify the main function's last deploy case
    if [ "$last_deploy" != "null" ] && [ -n "$last_deploy" ]; then
        preview_url=$(echo "$last_deploy" | jq -r .deploy_ssl_url)
        if [ -n "$preview_url" ] && [ "$preview_url" != "null" ]; then
            print_info "No active builds found. Using last successful deploy."
            export_url "$preview_url"
            exit 0
        fi
    fi
    
    print_error "No deployments found for branch: $BRANCH"
    exit 1
}

export_url() {
    local url=$1
    if [ -n "$url" ]; then
        # Create or truncate the output file
        echo "export NETLIFY_PREVIEW_URL='$url'" > netlify_preview_url.env
        echo -e "\nPreview URL: $url"
        echo -e "To export the URL in your shell, run:\nsource netlify_preview_url.env\n"
    fi
}

# Start execution
print_header
main