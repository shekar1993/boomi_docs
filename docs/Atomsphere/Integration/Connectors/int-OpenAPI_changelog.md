# OpenAPI changelog

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-1eae631f-1a66-4d5b-8f47-79064718d89d"/>
</head>

## Changelog

**2024-01 (Current)**

- Connection pooling is now supported.

**2023-11**

- Overridable fields now include Access Token parameters, Authorization parameters, and Extended JWT Claims (if supported by the connector).

**2023-09**

-   Additional authentication methods:
    - OAuth JWT Bearer Token
    - NTLM Authentication

-   An API Key authentication mechanism with the ability to specify API key location (Request Header, Query Parameter, Cookie).

-   Composed schema recursion is now calculated as a group rather than an individual schema.