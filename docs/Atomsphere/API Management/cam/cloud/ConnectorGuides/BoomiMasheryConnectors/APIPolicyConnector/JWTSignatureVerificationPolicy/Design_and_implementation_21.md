---
sidebar_position: 2
---

# Design and Implementation

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-f048a360-7680-4607-b1c4-a8bab7573508"/>
</head>

## Policy Structure

Refer to the [API Policy Structure](../Design_and_implementation_7.md).

## Important Points about Policy Structure

Refer to the [API Policy Important Points about Policy Structure](../Design_and_implementation_7.md).

## Policy Usage

Refer to the [API Policy Policy Usage](../Usage_7.md). 

## JWT Signature Structure Under JWT Token Object

Example: eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiJ9.eyJzdWIiOiIxMjM0NTY3ODkiLCJleHAiOjE1ODczOTEyMjgsImlhdCI6MTU4NzM5MTEzOCwiaXNzIjoiezN9IiwiYXpwIjoiezR9In0=.w4HW+KOtcwl21z6uZ56Bbkt0NYhZKmnBYQpKfAj4kxOz9K0uOhar8PLVPQUfJVJT7O4KfYdQU+oxvLdgjkdF8jcigFTmqi6C304Bhazd7S7L++L8O44jrVaGLzPUYwx5nWWqIrIYKcMM/bJHujzgEoIgZHqu0FIyV7zVNL6jYlukIZ85NMefqo8heOultW4zG9tqbzzIGdOOkaKLTvvRheJs0604mdbocKPeMhjMvaxi+ahKgWaNsY+bKIRic0UpkAieKe6L+eXtrt851bJZ/OVJqqLeqfa3zrKNHvka5l9TwM7X5l9qzE4QG4+GrxqT5pC+Yaq53WwHF+n+nKJChVzLJP8heiZQPlEQzJD+CDiIDmPLeZ3K44J4XsITxjrHtyeVoHmywQMTCExZlyFDBIi0kxfN023j7Jlhesu/9/msxeELH12LRtnjIN6cpnrFeSzweV+6mKVEE9ae1Cc3rj8Ruzq6sDSgv34egFi1Q5S3HNCh+obMaTver/fhCIRm4e+PgBik02M+9zvmsusCnynhJVCmxBYwXXElGP/140amNOrVue9sDbddLHAoVCOUF9mEy9B46RsiSZozyrd58m8koci7ZLuwjAkwLlPJCejUtH08l4clo4PY6ySUfVKaBwpGN0Z2aqU/6usFhaGgXAkevWhMTvAKiMurJu13k+U=

=> 

```xml
RSASHA512(
base64UrlEncode(header) + "." +
base64UrlEncode(payload),Publick Key, Private Key,
)
```

## Error Messages

This section lists error messages that are specific to JWT Signature Validation Policy. For a complete list of error messages, refer to the [API Policy Connector Error Messages](../JWTClaimsVerificationPolicy/Design_and_implementation_12.md). 

|**Error Name** |**HTTP Status Code** |**Cause** |
| ---- |---| ---- |
|semiCorruptJSON|403 |JSON File with Invalid Characters. |
|InvalidExtensionFile|403 |JSON File with Invalid Extension. |
|SignatureInstanceAlgorithmUnavailable|403 |Signature Instance Algorithm Unavailable. |
|AlgorithmNotSupported|403 |Algorithm is not supported. |
|JsonWebKeyNotAvailable|403 |JSON Web Key is not available. |

