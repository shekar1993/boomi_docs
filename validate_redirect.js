const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cliProgress = require('cli-progress');
const NodeCache = require('node-cache');
const dns = require('dns');
const { promisify } = require('util');

// Parse command line arguments
const args = process.argv.slice(2);
const BASE_URL = args[0] || 'https://staging.dev.help.boomi.com';

const MAX_CONCURRENT_REQUESTS = 25;
const cache = new NodeCache({ stdTTL: 600 });
const dnsLookup = promisify(dns.lookup);

function validateRedirect(line) {
    const parts = line.trim().split(/\s+/);

    if (parts.length !== 3) {
        return { isValid: false, message: "Line does not have exactly 3 components" };
    }

    const [source, target, rule] = parts;

    if (!/^(\/|https?:)/.test(source)) {
        return { isValid: false, message: "Source path does not start with '/', 'http:', or 'https:'" };
    }

    if (!/^(\/|https?:)/.test(target)) {
        return { isValid: false, message: "Target does not start with '/', 'http:', or 'https:'" };
    }

    if (rule !== '301!') {
        return { isValid: false, message: "Redirection rule is not '301!'" };
    }

    return { isValid: true, message: "Valid redirect" };
}

async function checkUrl(url) {
    const cachedResult = cache.get(url);
    if (cachedResult) return cachedResult;

    try {
        await dnsLookup(new URL(url).hostname);
        const response = await axios.get(url, {
            maxRedirects: 5,
            timeout: 10000,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });

        if (response.status >= 200 && response.status < 300) {
            return handleSuccessfulResponse(url, response);
        } else {
            return cacheAndReturn(url, { success: false, message: `Unexpected status code: ${response.status}`, status: response.status });
        }
    } catch (error) {
        return handleError(url, error);
    }
}

function handleSuccessfulResponse(url, response) {
    if (response.data.includes('Page Not Found')) {
        return cacheAndReturn(url, { success: false, message: 'Page contains "Page Not Found"', status: 'Content Error' });
    }
    return cacheAndReturn(url, { success: true, message: 'Success', status: 'OK' });
}

function handleError(url, error) {
    if (error.code === 'ENOTFOUND') {
        return cacheAndReturn(url, { success: false, message: 'DNS lookup failed', status: 'DNS Error' });
    } else if (error.code === 'ETIMEDOUT') {
        return cacheAndReturn(url, { success: false, message: 'Request timed out', status: 'Timeout Error' });
    } else if (error.response) {
        return cacheAndReturn(url, { success: false, message: error.message, status: error.response.status });
    } else {
        return cacheAndReturn(url, { success: false, message: error.message, status: 'Network Error' });
    }
}

function cacheAndReturn(url, result) {
    cache.set(url, result);
    return result;
}

async function processInBatches(items, batchSize, processItem, progressBar) {
    const results = [];
    for (let i = 0; i < items.length; i += batchSize) {
        const batch = items.slice(i, i + batchSize);
        const batchResults = await Promise.all(batch.map(processItem));
        results.push(...batchResults);
        progressBar.update(results.length);
    }
    return results;
}

function generateHtmlReport(invalidRedirects, notFoundErrors, dnsErrors, timeoutErrors, otherErrors) {
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Redirect Validation Report</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; }
            h1 { color: #333; }
            table { border-collapse: collapse; width: 100%; margin-bottom: 20px; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; }
            .summary { font-weight: bold; margin-top: 20px; }
        </style>
    </head>
    <body>
        <h1>Redirect Validation Report</h1>
        
        ${invalidRedirects.length > 0 ? `
        <h2>Invalid Redirects</h2>
        <table>
            <tr><th>Line</th><th>Content</th><th>Error</th></tr>
            ${invalidRedirects.map(item => `<tr><td>${item.line}</td><td>${item.content}</td><td>${item.error}</td></tr>`).join('')}
        </table>
        ` : ''}

        ${notFoundErrors.length > 0 ? `
        <h2>404 Not Found Errors</h2>
        <table>
            <tr><th>Line</th><th>URL</th></tr>
            ${notFoundErrors.map(item => `<tr><td>${item.line}</td><td>${item.url}</td></tr>`).join('')}
        </table>
        ` : ''}

        ${dnsErrors.length > 0 ? `
        <h2>DNS Errors</h2>
        <table>
            <tr><th>Line</th><th>URL</th></tr>
            ${dnsErrors.map(item => `<tr><td>${item.line}</td><td>${item.url}</td></tr>`).join('')}
        </table>
        ` : ''}

        ${timeoutErrors.length > 0 ? `
        <h2>Timeout Errors</h2>
        <table>
            <tr><th>Line</th><th>URL</th></tr>
            ${timeoutErrors.map(item => `<tr><td>${item.line}</td><td>${item.url}</td></tr>`).join('')}
        </table>
        ` : ''}

        ${otherErrors.length > 0 ? `
        <h2>Other Errors</h2>
        <table>
            <tr><th>Line</th><th>URL</th><th>Message</th></tr>
            ${otherErrors.map(item => `<tr><td>${item.line}</td><td>${item.url}</td><td>${item.message}</td></tr>`).join('')}
        </table>
        ` : ''}

        <div class="summary">
            <h2>Summary</h2>
            <p>Invalid Redirects: ${invalidRedirects.length}</p>
            <p>404 Errors: ${notFoundErrors.length}</p>
            <p>DNS Errors: ${dnsErrors.length}</p>
            <p>Timeout Errors: ${timeoutErrors.length}</p>
            <p>Other Errors: ${otherErrors.length}</p>
            <p>Total Issues: ${invalidRedirects.length + notFoundErrors.length + dnsErrors.length + timeoutErrors.length + otherErrors.length}</p>
        </div>
    </body>
    </html>
    `;

    return html;
}

async function testRedirectsFile(filename) {
    const fileContent = readFile(filename);
    if (!fileContent) return;

    const lines = fileContent.split('\n').filter(line => line.trim() !== '');
    const { invalidRedirects, urlChecks } = validateLines(lines);

    if (urlChecks.length === 0) {
        console.log('No valid URLs to check. Exiting.');
        return;
    }

    const urlResults = await checkUrls(urlChecks);
    const errors = categorizeErrors(urlResults);

    generateAndSaveReport(invalidRedirects, errors);
    printConsoleReport(invalidRedirects, errors);
}

function readFile(filename) {
    try {
        return fs.readFileSync(filename, 'utf8');
    } catch (error) {
        console.error(`Error reading file: ${error.message}`);
        return null;
    }
}

function validateLines(lines) {
    const invalidRedirects = [];
    const urlChecks = [];

    lines.forEach((line, index) => {
        const validationResult = validateRedirect(line);
        if (!validationResult.isValid) {
            invalidRedirects.push({ line: index + 1, content: line, error: validationResult.message });
        } else {
            const [source] = line.split(/\s+/);
            const fullUrl = source.startsWith('http') ? source : `${BASE_URL}${source}`;
            urlChecks.push({ line: index + 1, url: fullUrl });
        }
    });

    return { invalidRedirects, urlChecks };
}

async function checkUrls(urlChecks) {
    console.log('Checking URLs...');
    const progressBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
    progressBar.start(urlChecks.length, 0);

    const urlResults = await processInBatches(urlChecks, MAX_CONCURRENT_REQUESTS, async (item) => {
        const result = await checkUrl(item.url);
        return { ...item, ...result };
    }, progressBar);

    progressBar.stop();
    return urlResults;
}

function categorizeErrors(urlResults) {
    return {
        notFoundErrors: urlResults.filter(result => result.status === 404),
        dnsErrors: urlResults.filter(result => result.status === 'DNS Error'),
        timeoutErrors: urlResults.filter(result => result.status === 'Timeout Error'),
        otherErrors: urlResults.filter(result => !result.success && result.status !== 404 && result.status !== 'DNS Error' && result.status !== 'Timeout Error')
    };
}

function generateAndSaveReport(invalidRedirects, errors) {
    const html = generateHtmlReport(invalidRedirects, errors.notFoundErrors, errors.dnsErrors, errors.timeoutErrors, errors.otherErrors);
    const reportPath = path.join(__dirname, 'redirect_validation_report.html');
    fs.writeFileSync(reportPath, html);
    console.log(`HTML report saved to: ${reportPath}`);
}

function printConsoleReport(invalidRedirects, errors) {
    console.log('\n--- Redirect Validation Report ---\n');

    if (Object.values(errors).every(arr => arr.length === 0) && invalidRedirects.length === 0) {
        console.log('All redirects are valid and URLs are accessible.');
        return;
    }

    printErrorSection('Invalid Redirects', invalidRedirects);
    printErrorSection('404 Not Found Errors', errors.notFoundErrors);
    printErrorSection('DNS Errors', errors.dnsErrors);
    printErrorSection('Timeout Errors', errors.timeoutErrors);
    printErrorSection('Other Errors', errors.otherErrors);

    printSummary(invalidRedirects, errors);
}

function printErrorSection(title, errors) {
    if (errors.length > 0) {
        console.log(`${title}:`);
        console.table(errors);
        console.log('\n');
    }
}

function printSummary(invalidRedirects, errors) {
    console.log('Summary:');
    console.table({
        'Invalid Redirects': invalidRedirects.length,
        '404 Errors': errors.notFoundErrors.length,
        'DNS Errors': errors.dnsErrors.length,
        'Timeout Errors': errors.timeoutErrors.length,
        'Other Errors': errors.otherErrors.length,
        'Total Issues': invalidRedirects.length + Object.values(errors).reduce((sum, arr) => sum + arr.length, 0)
    });
}

const redirectsFile = path.join(__dirname, 'static/_redirects');
testRedirectsFile(redirectsFile).catch(error => {
    console.error('An error occurred while running the script:', error);
});