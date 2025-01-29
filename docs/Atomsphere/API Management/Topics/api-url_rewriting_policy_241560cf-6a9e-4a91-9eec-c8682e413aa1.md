# URL Rewriting Policy


<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-985749fa-49f4-46c8-alda-86d1ac46d260"/>
</head>


URL Rewriting policy allows you to rewrite URLs from HTTP response headers and / or HTTP response body.

## Timing


| On Request | On Response | On Request Content | On Response Content|
|---|---|---|---|
|   | X  |  |X|

## Configuration

| Property  |Required   |Description   | Type  | Default |
|---|---|---|---|---|
|  `rewriteResponseHeaders` |  no |Rewrite the value of HTTP response headers.   |boolean |true|
|`rewriteResponseBody`| no| Rewrite the HTTP response body. |boolean|true|
|`fromRegex`|yes|The regex pattern for matching URLs.| string (regex)|true|
|`toReplacement`|yes|The value used to replace matching URLs (supports [EL](docs/Atomsphere/API%20Management/Topics/api-expression_language.md)).|string|true|

## Example
```
"url-rewriting": {
    "rewriteResponseHeaders": true,
    "rewriteResponseBody": true,
    "fromRegex": "https?://[^\/]*\/((.*|\/*))",
    "toReplacement": "https://apis.company.io/{#group[1]}"
}
```
