# REST Client changelog

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-6b763b86-df6d-4f3a-86b5-5def2536e0a0"/>
</head>

## Changelog

**2024-09 (Version 10, Current)**

- Amazon IAM Roles Anywhere Authentication is now available for this connector.

- The AWS4 signature will not be miscalculated when a Port Number or semicolon is included in the connection URL.

**2023-11 (Version 9)**

- Overridable fields now include Access Token parameters, Authorization parameters, and Extended JWT Claims (if supported by the connector).

**2023-10**

- Supports choosing the document tracking direction for the operation, either **Input Documents** or **Output Documents**.