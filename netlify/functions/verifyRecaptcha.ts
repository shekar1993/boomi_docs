import { Handler } from '@netlify/functions';
import fetch from 'node-fetch';

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
const VERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify';

interface RecaptchaVerifyResponse {
    success: boolean;
    score: number;
    action: string;
    challenge_ts: string;
    hostname: string;
    "error-codes"?: string[];
}

export const handler: Handler = async (event) => {
    // Handle OPTIONS request for CORS
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 204,
            headers: {
                'Access-Control-Allow-Origin': '*.help.boomi.com', // Allow all origins in development
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Max-Age': '86400'
            },
            body: ''
        };
    }

    // Only allow POST for actual verification
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' }),
        };
    }

    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*.help.boomi.com', // Allow all origins in development
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
    };

    try {
        // Get the token from the request body
        const { token } = JSON.parse(event.body || '{}');

        console.log('Received token length:', token?.length);
        console.log('Request headers:', event.headers);
        console.log('Request origin:', event.headers.origin || event.headers.referer);

        if (!token) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Token is required' }),
            };
        }

        if (!RECAPTCHA_SECRET_KEY) {
            console.error('RECAPTCHA_SECRET_KEY is not configured');
            return {
                statusCode: 500,
                headers,
                body: JSON.stringify({ error: 'reCAPTCHA verification is not configured' }),
            };
        }

        // Log the verification URL (without exposing the secret key)
        console.log('Verifying token with Google reCAPTCHA API...');
        console.log('Token length:', token.length);

        // Verify the token with Google's reCAPTCHA API
        const verifyResponse = await fetch(
            `${VERIFY_URL}?secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        );

        const verifyResult: RecaptchaVerifyResponse = await verifyResponse.json();

        // Log verification result (excluding the secret key)
        console.log('reCAPTCHA verification result:', {
            success: verifyResult.success,
            score: verifyResult.score,
            action: verifyResult.action,
            timestamp: verifyResult.challenge_ts,
            hostname: verifyResult.hostname,
            errors: verifyResult["error-codes"],
        });

        if (!verifyResult.success) {
            console.error('Verification failed with errors:', verifyResult["error-codes"]);
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({
                    success: false,
                    error: 'reCAPTCHA verification failed',
                    details: verifyResult["error-codes"],
                }),
            };
        }

        // Return the verification result
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                success: true,
                score: verifyResult.score,
                action: verifyResult.action,
            }),
        };
    } catch (error) {
        console.error('Error verifying reCAPTCHA:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Internal server error during verification' }),
        };
    }
};