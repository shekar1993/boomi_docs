# HTTP Callout Policy

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-150a8ec3-2a3f-4ec2-b4a9-2f624304dd34"/>
</head>

The `callout-http` policy invokes an HTTP(S) URL and places a subset or all of the content in one or more variables of the request execution context.

This can be useful if you need some data from an external service and want to inject it during request processing.

The result of the callout is placed in the `calloutResponse` variable and is only available during policy execution. If a variable is not configured, the result of the callout is no longer available.

## Timing

| On Request | On Response|  
|---|---|
| X  | X  |

## Configuration

| Property  |Required   |Description   | Type  | Default |
|---|---|---|---|---|
|`method`|yes|HTTP Method used to invoke URL. Options are: `CONNECT`, `DELETE`, `GET`, `HEAD`, `OPTIONS`, `PATCH`, `POST`, `PUT`, `TRACE` |HTTP method|`GET`|
|`url`|yes|URL invoked by the HTTP client (supports [EL](docs/Atomsphere/API%20Management/Topics/api-expression_language.md)).|URL||
|`headers`|no|List of HTTP headers used to invoke the URL (supports [EL](docs/Atomsphere/API%20Management/Topics/api-expression_language.md)).|HTTP headers||
|`body`|no|The body content send when calling the URL (supports [EL](docs/Atomsphere/API%20Management/Topics/api-expression_language.md)).|string||
|`fireAndForget`|no|Make the HTTP call without expecting any response. When activating this mode, context variables and exit on error are ignored.|boolean|false|
|`variables`|no|The variables to set in the execution context when retrieving content of HTTP call (supports [EL](docs/Atomsphere/API%20Management/Topics/api-expression_language.md)).|List of variables||
|`exitOnError`|yes|Terminate the request if the error condition is true.|boolean|false|
|`errorCondition`|no|The condition that will be verified to end the request (supports [EL](docs/Atomsphere/API%20Management/Topics/api-expression_language.md)). |string|`{#calloutResponse.status >= 400` and `#calloutResponse.status ⇐ 599}`|
|`errorStatusCode`|no|HTTP Status Code sent to the consumer if the condition is true.|int|500|
|`errorContent`|no|The body response of the error if the condition is true (supports [EL](docs/Atomsphere/API%20Management/Topics/api-expression_language.md)). |string||

## Example

``` json
"policy-http-callout": {
    "method": "GET",
    "url": "https://api.boomi.io/echo",
    "headers": [ {
        "name": "X-Boomi-Request-Id",
        "value": "{#request.id}"
    }],
    "variables": [{
        "name": "my-server",
        "value": "{#jsonPath(#calloutResponse.content, '$.headers.X-Forwarded-Server')}"
    }]
}

```







