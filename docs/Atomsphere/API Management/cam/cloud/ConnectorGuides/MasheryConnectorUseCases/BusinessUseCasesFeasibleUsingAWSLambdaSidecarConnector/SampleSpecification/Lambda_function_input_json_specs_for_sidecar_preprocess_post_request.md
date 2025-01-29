---
sidebar_position: 5
---

# Lambda Function Input (JSON Specs) For Sidecar Preprocess POST Request Call

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-05bcd3b1-3076-43e5-b044-d370fa31adff"/>
</head>

The following section is not an extensive list of all scenarios of feasible use cases but a few are provided for reference. API Management Sidecar Connector creates a JSON object using user defined configurations that is sent as input to AWS Lambda Function. 

## Scenario 1

- Configure Sidecar pre-processor input as follows: 

  - synchronicity:request-response 

  - sidecar-param-parameter\_x:value\_x 

- User client sends post to this endpoint: 

```xml
curl -X POST \
'https://api.acme.com/my/op?api_key=abc123def456ghi789' \
-H 'Host: api.acme.com' \
-H 'cache-control: no-cache' \
-d ''
```

- Sidecar pre-processor builds the following JSON object that is sent to Lambda function: 

```xml
"masheryMessageId" : "7632924a-8d8d-4d35-8a77-b57c4bb450af",
"point" : "PreProcessor",
"synchronicity" : "RequestResponse",
"packageKey" : "abc123def456ghi789",
"serviceId" : "0123456789",
"endpointId" : "9876543210",
"params": {
"parameter_x": "value_x"
```

## Scenario 2

- Configure Sidecar pre-processor input as follows: 

  - synchronicity:request-response 

  - sidecar-param-parameter\_x:value\_x 

- User client sends post to this endpoint: 

```xml
curl -X POST \
'https://api.acme.com/my/op?api_key=abc123def456ghi789' \
-H 'Host: api.acme.com' \
-H 'Authorization: Bearer qwertyuiopasdfghjklzxcvbnm' \
-H 'cache-control: no-cache' \
-d ''
```

- Sidecar pre-processor builds the following JSON object that is sent to Lambda function: 

```xml
"masheryMessageId" : "7632924a-8d8d-4d35-8a77-b57c4bb450af",
"point" : "PreProcessor",
"synchronicity" : "RequestResponse",
"packageKey" : "abc123def456ghi789",
"serviceId" : "0123456789",
"endpointId" : "9876543210",
"request": {
"headers": {
"authorization": "qwertyuiopasdfghjklzxcvbnm"
```

## Scenario 3

- Configure Sidecar pre-processor input as follows: 

  - synchronicity:request-response 

  - include-request-headers: Authorization 

  - include-packageKey-eavs: pkg\_eav 

  - expand-input : remoteAddress 

- User client sends post to this endpoint: 

```xml
curl -X POST \
'https://api.acme.com/my/op?api_key=abc123def456ghi789' \
-H 'Host: api.acme.com' \
-H 'Authorization: Bearer qwertyuiopasdfghjklzxcvbnm' \
-H 'cache-control: no-cache' \
-d ''
```

- Sidecar pre-processor builds the following JSON object that is sent to Lambda function: 

```xml
"masheryMessageId" : "7632924a-8d8d-4d35-8a77-b57c4bb450af",
"point" : "PreProcessor",
"synchronicity" : "RequestResponse",
"packageKey" : "abc123def456ghi789",
"serviceId" : "0123456789",
"endpointId" : "9876543210",
"request": {
"headers": {
"authorization": "qwertyuiopasdfghjklzxcvbnm"
}
},
"remoteAddr": "123.456.789.012",
"packageKeyEAVs": {
"pkg_eav": "eav_value"
```

## Scenario 4

- Configure Sidecar pre-processor input as follows: 

  - synchronicity:request-response 

  - include-request-headers: Authorization 

  - include-packageKey-eavs: pkg\_eav 

  - include-eavs: eav1 

- User client sends post to this endpoint: 

```xml
curl -X POST \
'https://api.acme.com/my/op?api_key=abc123def456ghi789' \
-H 'Host: api.acme.com' \
-H 'Authorization: Bearer qwertyuiopasdfghjklzxcvbnm' \
-H 'cache-control: no-cache' \
-d ''
```

- Sidecar pre-processor builds the following JSON object that is sent to Lambda function: 

```
"masheryMessageId" : "7632924a-8d8d-4d35-8a77-b57c4bb450af",
"point" : "PreProcessor",
"synchronicity" : "RequestResponse",
"packageKey" : "abc123def456ghi789",
"serviceId" : "0123456789",
"endpointId" : "9876543210",
"request": {
"headers": {
"authorization": "qwertyuiopasdfghjklzxcvbnm"
}
},
"packageKeyEAVs": {"eav": "eav_value" },
"eavs": {"eav1": "eav_value"}
```

## Scenario 5

- Configure Sidecar pre-processor input as follows: 

  - synchronicity:event 

- User client sends post to this endpoint: 

```xml
curl -v -X 'GET' -H 'Host:cstest.api.cejetty1.mashspud.com' -H 'X-MasheryDebug:59fwcppy7fxhs7en23na5tyd'
'http://api.cejetty1.mashspud.com/aj1954/SyncSyncEvent_FailsafeFalse_
NoAdditionalConfig/?apikey=b8664brqffa5zbe47hg6p2b3'
```

- Sidecar pre-processor builds the following JSON object that is sent to Lambda function: 

  ```xml
  {

  "point":"PreProcessor",

  "masheryMessageId":"c3949ec1-b980-4ee1-b3c5-ce1599435950",

  "serviceId":"9yt9cgmu74rypb8stg5r67hh",

  "packageKey":"b8664brqffa5zbe47hg6p2b3",

  "endpointId":"4xk6dfdx95x7ycj77eeyj6ta",

  "synchronicity":"Event"

  }
  ``````
