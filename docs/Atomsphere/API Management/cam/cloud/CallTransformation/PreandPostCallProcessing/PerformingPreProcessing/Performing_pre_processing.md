---
sidebar_position: 1
---

# Performing Pre-Processing

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="2daca710-f3a5-49ee-8055-32ac1a630a4a"/>
</head>

## Transformer Request

The request for transformation service is created as follows:

- URL for transformation service is retrieved from the transformation attribute - "url" present in TIBCO Cloud Mesh Service under preInputs.

- HTTP Method for this request is retrieved from the transformation attribute - "method" present in TIBCO Cloud Mesh Service under preInputs.

- The following HTTP headers will be added in the request:

  - Content-Type: application/json

  - Content-Transfer-Encoding: base64

  - Accepts: base64

- The request payload is created by converting JSON (mentioned in section below) into base64-encoded format.

## Transformer Request Payload Attributes

|**Attribute key**|**Type**|**Required (Y/N)**|**Notes**|
| ---- | ---- | ---- |------ |
|headers|Array|Y||<p>Contains headers sent in the request from client.</p><p>This will be sent only if transformation attribute - "include" contains value - "headers".</p><p>If transformation attribute - "include" contains value - "body", then "Content-Type" header for the request will be sent irrespective of "include" value.</p>|

**Example:**

```xml
"headers": [{
 "name": "Content-Type",
 "value": "application/json"
 },
{
"name": "Authorization",
"value": "Basic XXXXXX"
 }
]
```

|**Attribute key**|**Type**|**Required (Y/N)**|**Notes**|
| ---- | ---- | ---- |------ |
|queryParameters|Array |N|<p>Contains query parameters sent in the request from client.</p><p>This will be sent only if transformation attribute - "include" contains value - "queryParams".</p>|

**Example:**

```xml
"queryParameters": [{
"name": "Query Param 2",
"value": ["Query Param 2
Value"]
},
{
"name": "Query Param 2",
 "value": ["Query Param 2
Value1", "Query Param 2 Value2"]
}
]
```

|**Attribute key**|**Type**|**Required (Y/N)**|**Notes**|
| ---- | ---- | ---- |------ |
|bodyContent|Map|N|<p>It contains below two attributes. Both are of type String.</p><p>- encoding: By default, this is "base64".</p><p>- content: Base64 encoded request payload which is received from client.</p><p>This will be sent only if transformation attribute - "include" contains value - "body". </p><p>Max size of body content could be up to 1MB.</p>|

**Example:**

```xml
"bodyContent": {
"encoding": "base64",
"content": "base64 encoded
payload"
}
```

|**Attribute key**|**Type**|**Required (Y/N)**|**Notes**|
| ---- | ---- | ---- |------ |
|applicationFields|Array|N|<p>Contains values of application fields defined in pre-input configuration.</p><p>This field will be sent only if transformation attribute - "applicationFields" is present under pre-inputs in  TIBCO Cloud Mesh Service.</p>|

**Example:**

```xml
"applicationFields": [{
 "name": "name",
 "value": "ASR Service
Application"
 },
{
"name": "eav1",
"value": "Application EAV Value"
 }
]
```

|**Attribute key**|**Type**|**Required (Y/N)**|**Notes**|
| ---- | ---- | ---- |------ |
|memberFields|Array|N|<p>Contains values of member fields defined in pre-input configuration.</p><p>This field will be sent only if transformation attribute - "memberFields" is present under pre-inputs in TIBCO Cloud Mesh Service.</p>|

**Example:**

```xml
"memberFields": [{
  "name": "first_name",
 "value": "Test User"
 },
{
"name": "eav1",
"value": "Member EAV Value"
 }
]
```

|**Attribute key**|**Type**|**Required (Y/N)**|**Notes**|
| ---- | ---- | ---- |------ |
|planFields|Array|N|<p>Plan fields will contain values of planFields defined in pre-input configuration.</p><p>This field will be sent only if transformation attribute - "planFields" is present under pre-inputs in TIBCO Cloud Mesh Service.</p>|

**Example:**

```xml
"planFields": [{
 "name": "name",
 "value": "ASR Service Plan"
 },
{
"name": "eav1",
"value": "Plan EAV Value"
 }
]
```

|**Attribute key**|**Type**|**Required (Y/N)**|**Notes**|
| ---- | ---- | ---- |------ |
|packageFields|Array|N|<p>Contains values of package fields defined in pre-input configuration.</p><p>This field will be sent only if transformation attribute - "packageFields" is present under pre-inputs in the TIBCO Cloud Mesh Service.</p>|

**Example:**

```xml
"packageFields": [{
 "name": "name",
 "value": "ASR Service Package"
 },
{
"name": "eav1",
"value": "Package EAV Value"
 }
]
```

|**Attribute key**|**Type**|**Required (Y/N)**|**Notes**|
| ---- | ---- | ---- |------ |
|packageKeyFields|Array|N|<p>Contains values of package key fields defined in pre-input configuration.</p><p>This field will be sent only if transformation attribute - "packageKeyFields" is present under pre-inputs in the TIBCO Cloud Mesh Service.</p>|

**Example:**

```xml
"packageKeyFields": [{
 "name": "name",
 "value": "ASR Service Package
Key"
 },
{
"name": "eav1",
"value": "Package Key EAV
Value"
 }
]
```

|**Attribute key**|**Type**|**Required (Y/N)**|**Example**|**Notes**|
| ---- | ---- | ---- | ---- | ------ |
|detectedMethod|String|N|`"detectedMethod": "getUsers"`|<p>Contains method definition for that endpoint. This is configured in the Methods page under API definitions in the API Management Control Center. </p><p>This is always sent to ASR service.</p>|
|requestMethod|String|Y|`"requestMethod": "GET"`|<p>HTTP method which is sent in the request from client. </p><p>This is always sent to ASR service.</p>|
|url|String|Y|`"url":"calypso.mashery.com/users/1/address"`|<p>Public API Management Endpoint URL received in the request from client. </p><p>This will be always sent to ASR service.</p>|

## Transformer Request Payload Example

```xml
{
"headers": [{
"name": "Content-Type",
"value": "application/json" },
{
"name": "Authorization",
"value": "Basic XXXXXX" }
],
"queryParameters": [{
"name": "Query Param 1",
"value": ["Query Param 2 Value"]
},
{
"name": "Query Param 2",
"value": ["Query Param 2 Value1", "Query Param
2 Value2"]
}
],
"applicationFields": [{
"name": "name",
"value": "ASR Service Application"
 },
{
"name": "eav1",
"value": "Application EAV Value"
}],
"memberFields": [{
"name": "first_name",
"value": "Test User"
 },
{
"name": "eav1",
"value": "Member EAV Value"
}],
"planFields": [{
"name": "name",
"value": "ASR Service Plan"
 },
{
"name": "eav1",
"value": "Plan EAV Value"
}],
"packageFields": [{
"name": "name",
"value": "ASR Service Package"
},
{
"name": "eav1",
"value": "Package EAV Value"
}],
"packageKeyFields": [{
"name": "name",
"value": "ASR Service Package Key"
},
{
"name": "eav1",
"value": "Package Key EAV Value"
}],
"bodyContent": {
"encoding": "base64",
"content": "base64 encoded payload"
},
"requestMethod": "GET",
"detectedMethod": "getUsers",
"url": "calypso.mashery.com/users/1/address"
}
```

## Transformer Response

The response from the Transformer is processed as follows:

- If HTTP status code is in 2xx series, then it will be considered as successful response. For any other HTTP status code, the response will be considered as an error response.

- The following HTTP headers are expected in the response:

  - Content-Type: application/json

  - Content-Transfer-Encoding: base64

  - Content-Length

- Response payload is expected in base64-encoded format. After decoding response payload, JSON should be retrieved which will contain attributes mentioned in the Transformer Response Payload Attributes section below. Those attributes will be handled as mentioned in the Notes section in below table.

## Transformer Response Payload Attributes

|**Attribute key**|**Type**|**Required (Y/N)**|**Notes**|
| ---- | ---- | ---- |------ |
|includedHeaders|Array|N|<p>These headers will be added in the target request. So target request headers will be a union of HTTP headers coming in the request from client and headers present under this attribute.</p><p>If bodyContent is present in the response JSON, then it's compulsory that "Content-Type" header should be present under includedHeaders. </p><p>If "Content-Encoding" header is present in the "includedHeaders" and "bodyContent" is also present in the JSON, then the connector needs to honor "Content-Encoding" header. In this case, the connector first will decode the "bodyContent" according to value of "Content-Encoding" header and then will send it the target backend request.</p>|

**Example:**

```xml
"included": {
"headers": [{
"name": "X-AcmeLevel",
"value": "44"
},
{
 "name": "X-Acme_
Bearing",
 "value": "326 degree
of inner turbulence"
 }
 ]
}
```

|**Attribute key**|**Type**|**Required (Y/N)**|**Notes**|
| ---- | ---- | ---- |------ |
|excludedHeaders|Array|N|<p>These headers will be dropped from target request headers if present. It means that target request header will be an intersection of HTTP headers coming in the request and headers present under this attribute.</p><p>For creating a complete list of target request headers, first the union of HTTP headers coming in the request from client and headers present under includedHeaders attribute will be done. Then intersection of headers present under this attribute will be done.</p>|

**Example:**

```xml
excluded": {
"headers": [{
"name":
"Authorization"
 },
{
 "name": "X-AcmeMarket"
 }
]
}
```

|**Attribute key**|**Type**|**Required (Y/N)**|**Notes**|
| ---- | ---- | ---- |------ |
|includedQueryParameters|Map |N|<p>These query Parameters will be added in the target request. It means that the queryParameter which will be sent to the target backend point will be the union of queryParameters coming in the request from client and queryParameters present under this attribute.</p><p></p>|

**Example:**

```xml
"included": {
"queryParameters": [{
"name": "Query
Param 3",
"value": ["Query
Param 3 Value"]
},
{
 "name": "Query
Param 4",
 "value": ["Query
Param 4 Value1", "Query
Param 4 Value2"]
 }
 ]
}
```

|**Attribute key**|**Type**|**Required (Y/N)**|**Notes**|
| ---- | ---- | ---- |------ |
|excludedQueryParameters|Array|N|<p>These query parameters will be dropped from request which will be sent to target backend point if present. It means that the target request query parameters will be an intersection of queryParameters coming in the request and queryParameters present under this attribute. </p><p>For a creating complete list of target request query parameters, first the union of queryParameters coming in the request from client and queryParameters present under includedQueryParameters attribute will be done. Then intersection of queryParameters present under this attribute will be done.</p>|

**Example:**

```xml
excluded": {
"queryParameters": [{
"name": "Query
Param 1"
 },
{
 "name": "Query
Param 2"
 }
]
}
```

|**Attribute key**|**Type**|**Required (Y/N)**|**Notes**|
| ---- | ---- | ---- |------ |
|bodyContent|Map|N|<p>Contains the following attributes that are type String. If bodyContent present in the response, then it will replace request payload received from client and will be sent to the target backend point.</p><p>- encoding: By default, this is "base64".</p><p>- content: Base64 encoded request payload which will be sent to target backend point.</p><p>Max size of bodyContent received from ASR service could be 1MB. This size will be calculated using "Content-Length" HTTP Header from ASR service response.</p>|

**Example:**

```xml
"included": {
 "bodyContent": {
 "encoding": "base64",
"content": "base64
encoded payload"
 }
}
```

|**Attribute key**|**Type**|**Required (Y/N)**|**Example**|**Notes**|
| ---- | ---- | ---- | ---- | ------ |
|requestMethod|String|N|`"requestMethod": "GET"`|If requestMethod is present in the response JSON, then the request to the target backend point will be sent through this HTTP method.|
|url|String|N|`"url":" https://content.mock.acme.com/stest/test/AJ-1168_SuccessResp1.json "`|If the URL is present in the response JSON, then the target request will be sent to this endpoint URL.|

## Transformer Response Payload Example

```xml
{
"included": {
"headers": [{
"name": "X-Acme-Level",
"value": "44"
},
{
"name": "X-Acme_Bearing",
"value": "326 degree of inner turbulence" }
],
"queryParameter": [{
"name": "Query Param 3",
"value": ["Query Param 3 Value"]
},
{
"name": "Query Param 4",
"value": ["Query Param 4 Value1", "Query Param 4 Value2"]
}
],
"bodyContent": {
"encoding": "base64",
"content": "base64 encoded payload"
}
},
"excluded": {
"headers": [{
"name": "Authorization"
}, {
"name": "X-Acme-Market"
}],
"queryParameters": [{
"name": "Query Param 1"
}, {
"name": "Query Param 2"
}]
},
"url": "https://content.mock.mashery.com/stest/test/AJ-1168_SuccessResp1.json",
"requestMethod": "POST"
}
```