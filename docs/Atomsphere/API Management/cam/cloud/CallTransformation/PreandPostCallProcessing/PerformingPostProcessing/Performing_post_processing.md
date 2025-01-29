---
sidebar_position: 1
---

# Performing Post-Processing

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-86e415bb-6f74-4e63-b011-a6cb334de131"/>
</head>

## Transformer Request

The request for transformation service is created as follows:

- URL for transformation service will be retrieved from transformation attribute - "url" present TIBCO in Cloud Mesh Service under postInputs.

- HTTP Method for this request will be retrieved from transformation attribute - "method" present in TIBCO Cloud Mesh Service under postInputs.

- The following HTTP headers will be added in the request:

  - Content-Type: application/json

  - Content-Transfer-Encoding: base64

  - Accepts: base64

- The request payload will be created by converting JSON (mentioned in the **Transformer Request Payload Attributes** section below) into base64-encoded format.

## Transformer Request Payload Attributes

|**Attribute key**|**Type**|**Required (Y/N)**|**Notes**|
| --- | --- | ---- | ----|
|headers| Array| N|Contains headersreceived in the response from target backend point. This will be sent only if transformation attribute - "include" contains value "headers".|

Example:

```xml

"headers": [{
"name": "ContentType",
"value":
"application/json"
},
{
"name":
"Authorization",
 "value": "Basic
XXXX"
}]

```
|**Attribute key**|**Type**|**Required (Y/N)**|**Notes**|
| --- | --- | ---- | ----|
|bodyContent| Map| N|<p>Body Content will contain below two attributes. All two attributes will be of type String.</p><p>- **encoding:** By default, this is "base64".</p><p>- **content:** Base64 encoded request payload which is received from client.</p><p>This will be sent only if transformation attribute - "include" contains value - "body". </p><p>Max size of body content could be up to 1MB. Max size of body content is configured in mashery-proxy-config.json.</p>|

Example:

```xml

"bodyContent": {
"encoding": "base64",
"content": "base64
encoded payload"
}

```
|**Attribute key**|**Type**|**Required (Y/N)**|**Example**|**Notes**|
| --- |--- | ---- | ---- | ---- |
|statusCode|Integer|Y|"statusCode": 200|<p>HTTP status code received from target backend point. </p><p>This will be always sent to ASR service.</p>|
|statusMessage|String|Y|"statusMessage":"Success"|<p>HTTP status message received from target backend point.</p><p>This will be always sent to ASR service.</p>|

|**Attribute key**|**Type**|**Required (Y/N)**|**Notes**|
| --- | --- | ---- | ----|
|applicationFields|Array|N|<p>Contains values of applicationFields defined in post-input configuration. </p><p>This field will be sent only if transformation attribute - "applicationFields" is present under post-inputs in TIBCO Cloud Mesh Service.</p>|

**Example:**

```xml

"applicationFields": [{
 "name": "name",
 "value": "ASR Service
Application"
 },
{
"name": "eav1",
"value": "Application
EAV Value"
 }
]

```

|**Attribute key**|**Type**|**Required (Y/N)**|**Notes**|
| --- | --- | ---- | ----|
|memberFields|Array|N|<p>Contains values of memberFields defined in post-input configuration. </p><p>This field will be sent only if transformation attribute - "memberFields" is present under post-inputs in TIBCO Cloud Mesh Service.</p>|

**Example:**

```xml
"memberFields": [{
 "name": "first_name",
 "value": "Test User"
 },
{
"name": "eav1",
"value": "Member
EAV Value"
 }
]
```

|**Attribute key**|**Type**|**Required (Y/N)**|**Notes**|
| --- | --- | ---- | ----|
|planFields|Array|N|<p>Contains values of planFields defined in post-input configuration. </p><p>This field will be sent only if transformation attribute - "planFields" is present under post-inputs in TIBCO Cloud Mesh Service.</p>|

```xml
"planFields": [{
 "name": "name",
 "value": "ASR Service
Plan"
 },
{
"name": "eav1",
"value": "Plan EAV
Value"
 }
]
```

|**Attribute key**|**Type**|**Required (Y/N)**|**Notes**|
| --- | --- | ---- | ----|
|packageFields|Array|N|<p>Contains values of packageFields defined in post-input configuration. </p><p>This field will be sent only if transformation attribute - "packageFields" is present under post-inputs in TIBCO Cloud Mesh Service.</p>|

**Example:**
```xml
"packageFields": [{
 "name": "name",
 "value": "ASR Service
Package"
 },
{
"name": "eav1",
"value": "Package
EAV Value"
 }
]
```

|**Attribute key**|**Type**|**Required (Y/N)**|**Notes**|
| --- | --- | ---- | ----|
|packageKeyFields|Array|N|<p>Contains values of packageKeyFields defined in post-input configuration. </p><p>This field will be sent only if transformation attribute - "packageKeyFields" is present under post-inputs in TIBCO Cloud Mesh Service.</p>|

**Example:**
```xml
"packageKeyFields": [{
 "name": "name",
 "value": "ASR Service
Package Key"
 },
{
"name": "eav1",
"value": "Package
Key EAV Value"
 }
]
```

## Transformer Request Payload Example

```xml

{
"headers": [{
"name": "Content-Type",
"value": "application/json"
},
{
"name": "Authorization",
"value": "Basic XXXX"
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
"statusCode": 200,
"statusMessage": "Success"
}
```

## Transformer Response Payload

The response from the Transformer is processed as follows:

- If HTTP status code is in 2xx series, then it will be considered as success response. For any other HTTP status code, the response will be considered as an error response.

- The following HTTP headers are expected in the response:

  - *Content-Type*: application/json

  - *Content-Transfer-Encoding*: base64

  - *Content-Length*

- Response payload is expected in base64-encoded format. After decoding response payload, JSON should be retrieved which will contain attributes mentioned in the **Transformer Response Payload Attributes** section. Those attributes will be handled as mentioned in the Notes section in the following table.

## Transformer Response Payload Attributes

|**Attribute key**|**Type**|**Required (Y/N)**|**Notes**|
| --- | --- | ---- | ----|
|includedHeaders|Array|N|<p>These headers will be added in target response headers. So target response headers will be a union of HTTP headers coming from target endpoint and headers present under this attribute.</p><p>If bodyContent is present in the response JSON, then it's compulsory that "Content-Type" header should be present under includedHeaders.</p><p>If "Content-Encoding" header is present in the "includedHeaders" and "bodyContent" is also present in the JSON, then the connector needs to honor "Content-Encoding" header. In this case, the connector first will decode the "bodyContent" according to value of "Content-Encoding" header and then will send it back to the client.</p>|

**Example:**
```xml
"included": {
"headers": [{
"name": "X
Acme-Level",
"value": "44"
},
{
 "name": "XAcme_Bearing",
 "value": "326
degree of inner
turbulence"
 }
 ]
}
```

|**Attribute key**|**Type**|**Required (Y/N)**|**Notes**|
| --- | --- | ---- | ----|
|excludedHeaders|Array|N|<p>These headers will be dropped from target response headers if present. It means that target response header will be intersection of HTTP headers coming from target backend point and headers present under this attribute. </p><p>For creating a complete list of target response headers, first the union of HTTP headers coming in the response from target backend point and headers present under includedHeaders attribute will be done. Then intersection of headers present under this attribute will be done.</p>|

**Example:**
```xml
excluded": {
"headers": [{
"name":
"Authorization"
 },
{
 "name": "XAcme-Market"
 }
]
}
```

|**Attribute key**|**Type**|**Required (Y/N)**|**Notes**|
| --- | --- | ---- | ----|
|bodyContent|Map|N|<p>Contains the following attributes that are type String. If bodyContent present in the response, then it will replace request payload received from client and will be sent to the target backend point.</p><p>- encoding: By default, this is "base64".</p><p>- content: Base64 encoded request payload which will be sent to the client.</p><p>Max size of bodyContent received from ASR service could be 1MB. This size will be calculated using "Content-Length" HTTP Header from ASR service response.</p>|


**Example:**
```xml
"bodyContent": {
"encoding":
"base64",
"content": "base64
encoded payload"
}
```

|**Attribute key**|**Type**|**Required (Y/N)**|**Example**|**Notes**|
| --- |--- | ---- | ---- | ---- |
|statusCode|Integer|N|"statusCode": 400|If statusCode present in the response JSON, then this HTTP status code will replace HTTP status code received from target backend point.|
|statusMessage|String|N|"statusMessage":"Bad Request"|If statusMessage present in the response JSON, then this HTTP status message will replace HTTP status message received from target backend point.|

## Transformer Response Payload Example

```xml
{
"included": {
"headers": [{
"name": "X-Acme-Level",
"value": "44"
}, {
"name": "x-acme-bearing",
"value": "326 degrees of inner turbulence"
}],
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
}]
},
"statusCode": 400,
"statusMessage": "Bad Request"
}
```