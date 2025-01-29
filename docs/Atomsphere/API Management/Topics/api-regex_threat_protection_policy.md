# Regex Threat Protection Policy

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-d2b31028-6c34-4047-b352-7f8ed89c002c"/>
</head>

 The `regex-threat-protection` policy extracts information from a request (headers, path, query parameters, body payload) and evaluates that content against pre-defined regular expressions. If any content matches the specified regular expression, the request is considered a threat and is rejected with a `400 BAD REQUEST`.

 ## Timing

 | On Request | On Request Content |
|---|---|
|  X | X  |

## Configuration

| Property  |Required   |Description   | Type  | Default |
|---|---|---|---|---|
|`regex`|yes|Regex is used to detect malicious injections. You can enable this regular expression on headers, path and body, or add multiple regex threat protection policies with a different regex.|string||
|`caseSensitive`|no|Perform case-sensitive matching. Note: Use with caution. Enabling case sensitive matching may miss some patterns such as DrOp TaBlE.|boolean|false|
|`checkHeaders`|no|Evaluate regex on request headers.|boolean|true|
|`checkPath`|no|Evaluate regex on request path and query parameters.|boolean|true|
|`checkBody`|no|Evaluate regex on request body content.|boolean|true|

## Errors

HTTP status code

| Code | Message|
|---|---|
|`400`|Applies to matching request headers, matching request path or query parameters, matching request bod.|