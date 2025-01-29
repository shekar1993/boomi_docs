# Expression Language Request

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-11372a98-093c-416e-a07a-5bc01f9978f9"/>
</head>

EL can be used to access request properties and attributes as described below.

## Request object properties

The object properties you can access from the `{#request}` root-level object property and use for API requests are listed below.

|Object Property|Description|Type|Example|
|---|---|---|---|
|`content`|Body content|string||
|`contextPath`|Context path. `{#request.content}` is only available for policies bound to an `on-request-content` phase.|string|`/v2/`|
|`headers`|Headers|key / value|`X-Custom → myvalue`|
|`host`|The host of the request. This is preferable to using the Host header of the request because HTTP2 requests do not provide this header.|string|  `boomi.example.com`|
|`id`|Identifier|string|`12345678-90ab-cdef-1234-567890ab`|
|`localAddress`|Local address|string|`0:0:0:0:0:0:0:1`|
|`method`|HTTP method|string|`GET`|
|`params`|Query parameters|key/value|`order → 100`|
|`path`|Path|string|`/v2/store/MyStore`|
|`pathInfo`||Path info|string|`/store/MyStore`|
|`pathInfos`|Path info parts|array of strings|`[,store,MyStore]`|
|pathParams|Path parameters|key / value||`storeId → MyStore (see Warning for details)`|
|`pathParamsRaw`|Path parameters|string|`/something/:id/**`|
|`paths`|Path parts|array of strings|`[,v2,store,MyStore]`|
|`remoteAddress`|Remote address|string|`0:0:0:0:0:0:0:1`|
scheme|The scheme of the request (either HTTP or HTTPS)|string|`http`|
|`host`||string||||
|`ssl`|SSL session information|SSL object|||
|`timestamp`|Timestamp|long|`1602781000267`|
|`transactionId`|Transaction identifier|string|`cd123456-7890-abcd-ef12-34567890`|
|`uri`|URI|string|`/v2/store/MyStore?order=100`|
|`version`|HTTP version|string|HTTP_1_1|

### Examples
- Get the value of the Content-Type header for an incoming HTTP request using `{#request.headers['content-type']}`

- Get the second part of the request path using `{#request.paths[1]}`


## Request context attributes

When APIM Gateway handles an incoming API request, some object properties are automatically created or added during the execution phase through the [Assign Attributes policy](/docs/Atomsphere/API%20Management/Topics/api-assign_attributes_policy.md). These object properties are known as attributes. Attributes can be accessed from the `{#context.attributes}` root-level object property.

Request context attributes and examples are listed below.

|Object Property|Description|Type|Nullable|
|---|---|---|---|
|api|Called API|string||
|api-key|The API key used (for an API Key plan)|string|X (for no API Key plan).|
|application|The authenticated application making incoming HTTP requests.|string|X (for Keyless plan)|
|context-path|Context path|string||
plan|Plan used to manage incoming HTTP requests.|string|||
|resolved-path|The path defined in policies.|string|||
|user-id|The user identifier of an incoming HTTP request: - The subscription ID for an API Key plan - The remote IP for a Keyless plan|string||

**Examples**
- Get the value of the user-id attribute for an incoming HTTP request using `{#context.attributes['user-id']}`

- Get the value of the plan attribute for an incoming HTTP request using `{#context.attributes['plan']}`

