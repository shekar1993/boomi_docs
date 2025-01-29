---
sidebar_position: 2
---

# Usage

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-84950263-1586-4623-8ccc-120b8c8c5a02"/>
</head>

The following table describes the behavior of the Inject Conditional Header Connector based on the input configuration: 

|**Pre/ Post** |**Scenario** |**Input Configuration** |**Response Code** |**Expected Output** |
| --- | --- | --- | --- | --- |
|Pre/Post |Empty Request/Response Header |`RequestHeaders:` or `ResponseHeaders:`|NA |Request/Response is processed but no header is added in the request/response. |
|Pre/Post |Different Headers |`RequestHeaders:[{"header": "Accept: application/json"},{"header":"Cache-Control:no-cache"}]` or `ResponseHeaders:[{"header": "Accept: application/json"},{"header":"Cache-Control:no-cache"}]` |NA |<p>The following headers are added in the request/response: </p><p>- Accept=application/json</p><p>- Cache-Control=no-cache</p>|
|Pre/Post |Same Header with Different Values |`RequestHeaders:[{"header": "Accept: application/json"},{"header":"Accept: application/xml"}]` or `ResponseHeaders:[{"header": "Accept: application/json"},{"header":"Accept: application/xml"}]` |NA |<p>The following headers are added in the request/response: </p><p>- Accept=application/json </p><p>- Accept=application/xml </p>|
|Pre/Post |Same Header with Same Value |`RequestHeaders:[{"header": "Accept: application/json"},{"header":"Accept: application/json"}]` or `ResponseHeaders: [{"header": "Accept: application/json"},{"header":"Accept: application/json"}]` |NA |<p>The following header is added once in the request/response: </p><p>Accept=application/json</p>|
|Pre/Post |Invalid Json Input |`RequestHeaders:[{"header": "Accept: application/json"] or ResponseHeaders:[{"header": "Accept: application/json"]` |NA |Request is processed but no header is added in the request/response. |
|Pre/Post |Two semicolons are present in header value in place of one semicolon. |`RequestHeaders:[{"header": "Accept: application/json : application/xml"}] or ResponseHeaders:[{"header": "Accept: application/json : application/xml"}]` |NA |<p>The following header is added in the request/response: </p><p>Accept=application/json : application/xml</p>|
|Pre/Post |Header Value is not specified in the configuration |`RequestHeaders:[{"header": "Accept:"}] or ResponseHeaders:[{"header": "Accept:"}]` |NA |<p>The following header is added in the request/response: </p><p>Accept=</p>|
|Pre/Post |Empty Header tag is specified |`RequestHeaders:[{"header": ""}] or ResponseHeaders:[{"header": ""}]` |NA |Request/Response is processed but no header is added in the request/response. |
|Pre/Post |Invalid Header Format specified |`RequestHeaders:[{"header": "Accept=applicaton/json"}] or ResponseHeaders:[{"header": "Accept=applicaton/json"}]` |NA |Request/Response is processed but no header is added in the request/response. |
|Pre/Post |Incorrect Header tag name |`RequestHeaders:[{"header\_name": "Accept:applicaton/json"}] or ResponseHeaders:[{"header\_name": "Accept:applicaton/json"}]` |NA |Request/Response is processed but no header is added in the request/response. |
|Pre |Invalid tag present in configuration |`RequestHeaders:[{"header": "Accept:applicaton/json", "httpStatusCode\_1":"200,500"}]` |NA |<p>The following header is added in the request: </p><p>Accept=application/json</p>|
|Post |Status Code condition specified in post input and matched in the response. |`ResponseHeaders:[{"header": "X-Content-Type-Options: nosniff","httpStatusCode": "500,504"}]`|500 |<p>The following header is added in the response: </p><p>X-Content-Type-Options=nosniff</p>|
|Post |Status Code condition specified in post input and is not matched in the response. |`ResponseHeaders:[{"header": "X-Content-Type-Options: nosniff","httpStatusCode": "500,504"}]` |200 |No header is added in the response. |
|Post |Empty httpStatusCode is specified |`ResponseHeaders:[{"header": "X-Content-Type-Options: nosniff","httpStatusCode": ""}]`|400 |No header is added in the response irrespective of response code. |
|Post |Invalid httpStatusCode specified in post input. |`ResponseHeaders:[{"header": "X-Content-Type-Options: nosniff","httpStatusCode": "500,504,xxx"}]` |500 |<p>The header is added for response code 500 and 504: </p><p>X-Content-Type-Options=nosniff</p>|
|Post |Invalid httpStatusCode Tag Name |`ResponseHeaders:[{"header": "X-Content-Type-Options: nosniff","httpStatusCode\_1": "500,504"}]` |500 |No header is added in the response irrespective of response code. |
|Post |Invalid tag present in post-input |`ResponseHeaders:[{"header": "X-Content-Type-Options: nosniff","conditions": "{"httpStatusCode":"200"}"}]` |200 |No header is added in the response irrespective of response code. |
|Post |HttpStatusCode tag is not specified in the configuration. |`ResponseHeaders:[{"header": "X-Content-Type-Options: nosniff","":"200"}]` |200 |No header is added in the response irrespective of response code. |
|Post |HttpStatusCode range specified |`ResponseHeaders:[{"header": "X-Content-Type-Options: nosniff","httpStatusCode":"500,504,2xx"}]` |210 |<p>The following header is added for response code - 500, 504 and 2xx series: </p><p>X-Content-Type-Options=nosniff</p>|

