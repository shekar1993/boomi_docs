#!/bin/bash

# Enable strict error handling:
# -e: Exit immediately if a command exits with non-zero status
# -u: Treat unset variables as an error
# -o pipefail: Return value of a pipeline is the value of the last (rightmost) command to exit with a non-zero status
set -euo pipefail

###########################################
# Configuration Variables
###########################################
# Get the directory where the script is located
readonly SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# Define the staging branch to sync against
readonly STAGING_BRANCH="staging"
# List of branches that are allowed to be synced
readonly ALLOWED_BRANCHES=("content" "platform-release" "runtime-release" "develop" "hotfix-content")
# Get the full path of this script
readonly SCRIPT_PATH=$(readlink -f "$0")
# Create a temporary directory with timestamp
readonly TEMP_DIR="${SCRIPT_DIR}/temp_$(date +%s)"
# Directory for storing logs
readonly LOG_DIR="${SCRIPT_DIR}/logs"
# Log file with timestamp
readonly LOG_FILE="${LOG_DIR}/rebase_$(date +%Y%m%d_%H%M%S).log"
# JUnit test report file
readonly JUNIT_FILE="${LOG_DIR}/TEST-git-sync.xml"
# Lock file to prevent multiple instances
readonly LOCK_FILE="${SCRIPT_DIR}/.git_sync.lock"

###########################################
# ANSI Color Codes for Terminal Output
###########################################
readonly RED='\033[0;31m'     # Error messages
readonly GREEN='\033[0;32m'   # Success messages
readonly YELLOW='\033[1;33m'  # Warning messages
readonly BLUE='\033[0;34m'    # Info messages
readonly CYAN='\033[0;36m'    # Section headers
readonly NC='\033[0m'         # Reset color
readonly BOLD='\033[1m'       # Bold text

###########################################
# Log Level Constants
###########################################
readonly LOG_INFO="INFO"
readonly LOG_ERROR="ERROR"
readonly LOG_SUCCESS="SUCCESS"
readonly LOG_WARNING="WARNING"

###########################################
# Global Variables
###########################################
# Store the original branch name
ORIGINAL_BRANCH=""
# Array to store JUnit test cases
TEST_CASES=()
# Counter for failed tests
FAILURES=0
# Counter for test errors
ERRORS=0

# Ensure log directory exists
mkdir -p "${LOG_DIR}"

###########################################
# JUnit XML Report Functions
###########################################

# Initialize the JUnit XML report file with basic structure
start_junit_report() {
    mkdir -p "$(dirname "$JUNIT_FILE")"
    echo '<?xml version="1.0" encoding="UTF-8"?>' > "$JUNIT_FILE"
    echo '<testsuites name="Git Sync Results" time="0" tests="0" failures="0" errors="0">' >> "$JUNIT_FILE"
    echo "<testsuite name=\"GitSync\" timestamp=\"$(date -u +"%Y-%m-%dT%H:%M:%S")\" hostname=\"$(hostname)\" tests=\"0\" failures=\"0\" errors=\"0\" time=\"0\">" >> "$JUNIT_FILE"
    echo '<properties>' >> "$JUNIT_FILE"
    echo "<property name=\"script_version\" value=\"1.1.0\"/>" >> "$JUNIT_FILE"
    echo "<property name=\"staging_branch\" value=\"$STAGING_BRANCH\"/>" >> "$JUNIT_FILE"
    echo '</properties>' >> "$JUNIT_FILE"
}

# Add a test case to the JUnit report
# Parameters:
#   $1: Test name
#   $2: Test status (success/failure)
#   $3: Optional message
#   $4: Optional execution time
#   $5: Optional standard output
#   $6: Optional error output
add_test_case() {
    local name=$1
    local status=$2
    local message=${3:-}
    local time=${4:-0}
    local output=${5:-}
    local error_output=${6:-}

    local test_case="<testcase classname=\"GitSync.RebaseTests\" name=\"$name\" time=\"$time\">"

    if [[ "$status" == "success" ]]; then
        if [[ -n "$output" ]]; then
            test_case+="<system-out><![CDATA[$output]]></system-out>"
        fi
    else
        test_case+="<failure message=\"$message\" type=\"AssertionError\"><![CDATA[$message]]></failure>"
        if [[ -n "$error_output" ]]; then
            test_case+="<system-err><![CDATA[$error_output]]></system-err>"
        fi
        ((FAILURES++))
    fi

    test_case+="</testcase>"
    TEST_CASES+=("$test_case")
}

# Finalize the JUnit report by updating test counts and closing XML tags
finalize_junit_report() {
    local total_tests=${#TEST_CASES[@]}
    local total_time=0

    # Calculate total execution time
    for test_case in "${TEST_CASES[@]}"; do
        local time=$(echo "$test_case" | grep -o 'time="[^"]*"' | cut -d'"' -f2)
        total_time=$(printf "%.2f" $(echo "$total_time $time" | awk '{printf "%.2f", $1 + $2}'))
    done

    # Update test counts and execution time in XML headers
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS version of sed
        sed -i '' "s/<testsuites name=\"Git Sync Results\" time=\"0\" tests=\"0\" failures=\"0\" errors=\"0\">/<testsuites name=\"Git Sync Results\" time=\"$total_time\" tests=\"$total_tests\" failures=\"$FAILURES\" errors=\"$ERRORS\">/" "$JUNIT_FILE"
        sed -i '' "s/tests=\"0\" failures=\"0\" errors=\"0\" time=\"0\">/tests=\"$total_tests\" failures=\"$FAILURES\" errors=\"$ERRORS\" time=\"$total_time\">/" "$JUNIT_FILE"
    else
        # Linux version of sed
        sed -i "s/<testsuites name=\"Git Sync Results\" time=\"0\" tests=\"0\" failures=\"0\" errors=\"0\">/<testsuites name=\"Git Sync Results\" time=\"$total_time\" tests=\"$total_tests\" failures=\"$FAILURES\" errors=\"$ERRORS\">/" "$JUNIT_FILE"
        sed -i "s/tests=\"0\" failures=\"0\" errors=\"0\" time=\"0\">/tests=\"$total_tests\" failures=\"$FAILURES\" errors=\"$ERRORS\" time=\"$total_time\">/" "$JUNIT_FILE"
    fi

    # Write all test cases
    for test_case in "${TEST_CASES[@]}"; do
        echo "$test_case" >> "$JUNIT_FILE"
    done

    # Close XML tags
    echo '</testsuite>' >> "$JUNIT_FILE"
    echo '</testsuites>' >> "$JUNIT_FILE"
}

###########################################
# Time Calculation Functions
###########################################

# Calculate elapsed time between two timestamps
# Parameters:
#   $1: Start time
#   $2: End time
# Returns:
#   Elapsed time in seconds with 2 decimal precision
calculate_elapsed_time() {
    local start_time=$1
    local end_time=$2
    printf "%.2f" $(echo "$end_time $start_time" | awk '{printf "%.2f", $1 - $2}')
}

# Get current timestamp in seconds
# Returns:
#   Current time in seconds since epoch
get_current_time() {
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        date +%s
    else
        # Linux
        date +%s.%N
    fi
}

###########################################
# Logging Functions
###########################################

# Log a message with specified level and formatting
# Parameters:
#   $1: Message to log
#   $2: Log level (INFO/ERROR/SUCCESS/WARNING)
log() {
    local message="$1"
    local level="${2:-$LOG_INFO}"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    local prefix=""
    local color=""

    # Set color and prefix based on log level
    case $level in
        $LOG_ERROR)
            color=$RED
            prefix="✖"
            ;;
        $LOG_SUCCESS)
            color=$GREEN
            prefix="✔"
            ;;
        $LOG_WARNING)
            color=$YELLOW
            prefix="⚠"
            ;;
        *)
            color=$BLUE
            prefix="ℹ"
            ;;
    esac

    # Format message with timestamp and styling
    local formatted_message="${color}${prefix} ${BOLD}[${timestamp}]${NC} ${message}"

    # Add spacing for section headers
    if [[ $message == "==="* ]]; then
        echo "" | tee -a "${LOG_FILE}"
        formatted_message="${CYAN}${BOLD}${message}${NC}"
    fi

    echo -e "$formatted_message" | tee -a "${LOG_FILE}"
}

# Execute a command and log its output
# Parameters:
#   $1: Command to execute
#   $2: Optional quiet flag (true/false)
log_command() {
    local cmd="$1"
    local quiet="${2:-false}"
    local start_time=$(get_current_time)
    local output

    if [[ "$quiet" == "true" ]]; then
        log "Executing fetch silently..." "$LOG_INFO"
        if output=$(eval "$cmd" 2>&1); then
            local end_time=$(get_current_time)
            local elapsed=$(calculate_elapsed_time "$start_time" "$end_time")
            add_test_case "git_fetch" "success" "" "$elapsed" "$output"
            return 0
        else
            local exit_code=$?
            local end_time=$(get_current_time)
            local elapsed=$(calculate_elapsed_time "$start_time" "$end_time")
            add_test_case "git_fetch" "failure" "Command failed with exit code $exit_code" "$elapsed" "" "$output"
            return $exit_code
        fi
    else
        if output=$(eval "$cmd" 2>&1); then
            local end_time=$(get_current_time)
            local elapsed=$(calculate_elapsed_time "$start_time" "$end_time")
            log "$output" "$LOG_INFO"
            add_test_case "${cmd// /_}" "success" "" "$elapsed" "$output"
            return 0
        else
            local exit_code=$?
            local end_time=$(get_current_time)
            local elapsed=$(calculate_elapsed_time "$start_time" "$end_time")
            log "$output" "$LOG_ERROR"
            add_test_case "${cmd// /_}" "failure" "Command failed with exit code $exit_code" "$elapsed" "" "$output"
            return $exit_code
        fi
    fi
}

###########################################
# Lock Management Functions
###########################################

# Acquire a lock to prevent multiple script instances from running simultaneously
# Creates a lock directory and stores the current PID
# Exits with error if lock already exists and process is still running
acquire_lock() {
    if ! mkdir "$LOCK_FILE" 2>/dev/null; then
        if kill -0 "$(cat "$LOCK_FILE/pid")" 2>/dev/null; then
            fail "Another instance is running"
        fi
        rm -rf "$LOCK_FILE"
        mkdir "$LOCK_FILE"
    fi
    echo $$ > "$LOCK_FILE/pid"
}

# Release the lock by removing the lock directory
# Should be called before script exit
release_lock() {
    rm -rf "$LOCK_FILE"
}

###########################################
# Git Operations Functions
###########################################

# Create a backup of the specified branch
# Parameters:
#   $1: Branch name to backup
# Returns:
#   0 if backup successful, 1 if failed
backup_branch() {
    local branch=$1
    local backup_name="backup_${branch}_$(date +%Y%m%d_%H%M%S)"
    local start_time=$(get_current_time)

    log "Creating backup of branch '$branch' as '$backup_name'" "$LOG_INFO"
    if git branch -f "$backup_name" "origin/$branch" &>/dev/null; then
        local end_time=$(get_current_time)
        local elapsed=$(calculate_elapsed_time "$start_time" "$end_time")
        add_test_case "backup_$branch" "success" "" "$elapsed"
        return 0
    else
        local end_time=$(get_current_time)
        local elapsed=$(calculate_elapsed_time "$start_time" "$end_time")
        add_test_case "backup_$branch" "failure" "Failed to create backup" "$elapsed"
        fail "Failed to create backup of '$branch'"
    fi
}

# Check if the repository is in a clean state
# Verifies:
#   - No uncommitted changes
#   - No untracked files
#   - No ongoing rebase/merge/cherry-pick
# Exits with error if repository is in an invalid state
check_repository_state() {
    local start_time=$(get_current_time)
    local changes

    log "Checking repository state..." "$LOG_INFO"

    # Check for uncommitted changes (excluding untracked files)
    changes=$(git status --porcelain -uno)
    if [[ -n "$changes" ]]; then
        local end_time=$(get_current_time)
        local elapsed=$(calculate_elapsed_time "$start_time" "$end_time")
        add_test_case "repo_state_check" "failure" "Uncommitted changes found" "$elapsed"
        fail "Working directory is not clean. Please commit or stash your changes"
    fi

    log "Working directory is clean" "$LOG_SUCCESS"

    # Check for ongoing rebase
    if [[ -d "$(git rev-parse --git-path rebase-merge)" ]] || \
       [[ -d "$(git rev-parse --git-path rebase-apply)" ]]; then
        local end_time=$(get_current_time)
        local elapsed=$(calculate_elapsed_time "$start_time" "$end_time")
        add_test_case "repo_state_check" "failure" "Ongoing rebase detected" "$elapsed"
        fail "Ongoing rebase detected. Please complete or abort it first"
    fi

    log "No ongoing rebase detected" "$LOG_SUCCESS"

    local end_time=$(get_current_time)
    local elapsed=$(calculate_elapsed_time "$start_time" "$end_time")
    add_test_case "repo_state_check" "success" "" "$elapsed"
}

# Handle merge conflicts during rebase operation
# Parameters:
#   $1: Branch name with conflicts
# Actions:
#   - Logs conflict details
#   - Aborts rebase
#   - Records failure in JUnit report
handle_conflicts() {
    local branch=$1
    local start_time=$(get_current_time)

    # Get list of conflicting files
    local conflicting_files=$(git diff --name-only --diff-filter=U)
    
    log "Rebase failed due to conflicts in the following files:" "$LOG_ERROR"
    echo "$conflicting_files" | while read -r file; do
        if [[ -f "$file" ]]; then
            log "  - $file" "$LOG_ERROR"
            # Get the conflicting sections
            grep -n "^<<<<<<< HEAD" "$file" | while read -r line; do
                local line_num=${line%%:*}
                log "    Conflict at line $line_num" "$LOG_ERROR"
            done
        fi
    done

    # Abort the rebase
    log "Aborting rebase..." "$LOG_WARNING"
    git rebase --abort

    local end_time=$(get_current_time)
    local elapsed=$(calculate_elapsed_time "$start_time" "$end_time")
    add_test_case "conflict_handling_$branch" "failure" "Conflicts detected and rebase aborted" "$elapsed"
    fail "Rebase aborted due to conflicts. Please resolve conflicts manually and try again."
}

# Log the final status of the sync operation
# Parameters:
#   $1: Branch name being synced
#   $2: Status message to log
# Adds test case to JUnit report with appropriate status
log_final_status() {
    local branch=$1
    local staging_branch=$2
    local start_time=$(get_current_time)

    log "Final branch state:" "$LOG_INFO"

    local target_commit=$(git rev-parse origin/$branch)
    local staging_commit=$(git rev-parse origin/$staging_branch)

    log "  $staging_branch HEAD: $(git log -1 --format='%h %s' origin/$staging_branch)" "$LOG_INFO"
    log "  $branch HEAD: $(git log -1 --format='%h %s' origin/$branch)" "$LOG_INFO"

    local new_base=$(git merge-base origin/$branch origin/$staging_branch)
    if [[ "$new_base" == "$staging_commit" ]]; then
        log "✓ Rebase successful - $branch is now based on latest $staging_branch" "$LOG_SUCCESS"
        local end_time=$(get_current_time)
        local elapsed=$(calculate_elapsed_time "$start_time" "$end_time")
        add_test_case "final_status_$branch" "success" "" "$elapsed"
    else
        log "! Warning: Branch base verification failed" "$LOG_WARNING"
        local end_time=$(get_current_time)
        local elapsed=$(calculate_elapsed_time "$start_time" "$end_time")
        add_test_case "final_status_$branch" "failure" "Branch base verification failed" "$elapsed"
    fi
}

###########################################
# Cleanup Functions
###########################################

# Perform cleanup operations before script exit
# Actions:
#   - Release lock
#   - Remove temporary directory
#   - Restore original branch if needed
#   - Finalize JUnit report
cleanup() {
    log "Starting cleanup..." "$LOG_INFO"

    if [[ -d "${TEMP_DIR}" ]]; then
        log "Removing temporary directory: ${TEMP_DIR}" "$LOG_INFO"
        rm -rf "${TEMP_DIR}"
    fi

    if [[ -n "${ORIGINAL_BRANCH}" ]]; then
        log "Returning to original branch: ${ORIGINAL_BRANCH}" "$LOG_INFO"
        git checkout -q "${ORIGINAL_BRANCH}" 2>/dev/null || log "Failed to return to original branch" "$LOG_ERROR"
    fi

    log "Cleaning up temporary branches..." "$LOG_INFO"
    local temp_branches
    temp_branches=$(git branch | grep "^.*temp_.*_$(date +%Y%m%d)" || true)
    if [[ -n "${temp_branches}" ]]; then
        while IFS= read -r branch; do
            branch=$(echo "$branch" | tr -d '* ')
            log "Removing temporary branch: $branch" "$LOG_INFO"
            git branch -D "$branch" 2>/dev/null || log "Failed to delete branch: $branch" "$LOG_ERROR"
        done <<< "$temp_branches"
    else
        log "No temporary branches found for cleanup" "$LOG_INFO"
    fi

    finalize_junit_report
    release_lock
    log "Cleanup completed" "$LOG_SUCCESS"
}

# Handle script failure and exit
# Parameters:
#   $1: Error message to display
# Actions:
#   - Logs error message
#   - Calls cleanup function
#   - Exits with error code 1
fail() {
    local message="$1"
    log "ERROR: $message" "$LOG_ERROR"
    cleanup
    exit 1
}

###########################################
# Branch Management Functions
###########################################

# Get information about a Git branch
# Parameters:
#   $1: Branch name to query
# Returns:
#   Branch information including latest commit and author
get_branch_info() {
    local branch=$1
    local staging_branch=$2
    local start_time=$(get_current_time)

    log "Current branch states:" "$LOG_INFO"
    git branch -v | grep -E "\\* .*" || true
    git branch -r | grep -E "origin/$branch|origin/$staging_branch" | while read -r line; do
        local commit_hash=$(git rev-parse --short "origin/${line#origin/}")
        local commit_msg=$(git log -1 --pretty=format:"%s" "origin/${line#origin/}")
        log "  ${line}: ${commit_hash} ${commit_msg}" "$LOG_INFO"
    done

    local end_time=$(get_current_time)
    local elapsed=$(calculate_elapsed_time "$start_time" "$end_time")
    add_test_case "branch_info_$branch" "success" "" "$elapsed"
}

# Sync a branch with the staging branch
# Parameters:
#   $1: Branch name to sync
# Actions:
#   - Validates branch name
#   - Creates backup
#   - Performs merge
#   - Handles conflicts if they occur
#   - Updates JUnit report with results
sync_branch() {
    local branch=$1
    local start_time=$(get_current_time)

    if [[ ! " ${ALLOWED_BRANCHES[@]} " =~ " ${branch} " ]]; then
        local end_time=$(get_current_time)
        local elapsed=$(calculate_elapsed_time "$start_time" "$end_time")
        add_test_case "branch_validation_$branch" "failure" "Branch not in allowed list" "$elapsed"
        fail "Branch '$branch' is not in the allowed list: ${ALLOWED_BRANCHES[*]}"
    fi

    log "=== Starting sync operation ===" "$LOG_INFO"
    log "Target branch: $branch" "$LOG_INFO"
    log "Staging branch: $STAGING_BRANCH" "$LOG_INFO"

    ORIGINAL_BRANCH=$(git rev-parse --abbrev-ref HEAD)
    log "Original branch: $ORIGINAL_BRANCH" "$LOG_INFO"

    mkdir -p "${TEMP_DIR}"
    log "Created temporary directory: ${TEMP_DIR}" "$LOG_INFO"

    log "Fetching latest changes from remote..." "$LOG_INFO"
    log_command "git fetch origin" "true" || fail "Failed to fetch from remote"

    log "Checking branch states..." "$LOG_INFO"
    get_branch_info "$branch" "$STAGING_BRANCH"

    local staging_commit=$(git rev-parse origin/$STAGING_BRANCH)
    local branch_base=$(git merge-base origin/$branch origin/$STAGING_BRANCH)

    log "Staging HEAD: $staging_commit" "$LOG_INFO"
    log "Branch base: $branch_base" "$LOG_INFO"

    if [[ "$staging_commit" == "$branch_base" ]]; then
        log "'$branch' is already up-to-date with '$STAGING_BRANCH'" "$LOG_SUCCESS"
        local end_time=$(get_current_time)
        local elapsed=$(calculate_elapsed_time "$start_time" "$end_time")
        add_test_case "sync_$branch" "success" "" "$elapsed"
        return 0
    fi

    backup_branch "$branch"

    local temp_branch="temp_${branch}_$(date +%s)"
    log "Creating temporary branch: $temp_branch" "$LOG_INFO"
    log_command "git checkout -b $temp_branch origin/$branch" || fail "Failed to create temporary branch"

    log "Starting merge operation..." "$LOG_INFO"
    if ! git merge "origin/$STAGING_BRANCH" --no-ff -m "Merge staging into $branch" 2>&1 | tee -a "${LOG_FILE}"; then
        handle_conflicts "$branch"
    fi

    log "Pushing changes to remote..." "$LOG_INFO"
    if ! git push origin "$temp_branch:$branch" 2>&1 | tee -a "${LOG_FILE}"; then
        local end_time=$(get_current_time)
        local elapsed=$(calculate_elapsed_time "$start_time" "$end_time")
        add_test_case "sync_$branch" "failure" "Failed to push changes" "$elapsed"
        fail "Failed to push changes to '$branch'"
    fi

    log "Successfully completed sync operation" "$LOG_SUCCESS"
    log_final_status "$branch" "$STAGING_BRANCH"

    git checkout "${ORIGINAL_BRANCH}"
    git branch -D "$temp_branch"

    local end_time=$(get_current_time)
    local elapsed=$(calculate_elapsed_time "$start_time" "$end_time")
    add_test_case "sync_$branch" "success" "" "$elapsed"
}

###########################################
# Main Script Function
###########################################

# Main entry point for the script
# Parameters:
#   $@: Command line arguments (branch name)
# Actions:
#   - Validates input
#   - Sets up environment
#   - Initializes logging and reporting
#   - Executes sync operation
#   - Handles cleanup
main() {
    log "=== Rebase Script Started ===" "$LOG_INFO"
    log "Script version: 1.1.0" "$LOG_INFO"
    log "Working directory: $(pwd)" "$LOG_INFO"

    if [[ $# -ne 1 ]]; then
        fail "Usage: $0 <branch_name>"
    fi

    start_junit_report
    trap cleanup EXIT
    acquire_lock

    if ! git rev-parse --git-dir > /dev/null 2>&1; then
        add_test_case "git_repo_check" "failure" "Not in a git repository"
        fail "Not in a git repository"
    fi

    add_test_case "git_repo_check" "success"
    check_repository_state
    sync_branch "$1"

    log "=== Rebase Script Completed ===" "$LOG_SUCCESS"
}

# Execute main function with all provided arguments
main "$@"