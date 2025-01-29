---
sidebar_position: 1
---

# Overview of JSON Schema And Payload Size Validation Connector

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-8c20e984-9501-4038-938e-c435a71efb54"/>
</head>

## Release Notes

|**API Management (Release Date)** |**Release Type** |**Release Description** |
| ---- | ---- | ---- |
|October 1, 2020 |New Feature |Support RESTful API request validation using JSON schema provided either in Content Type header or Link header. |
| | |Also supports RESTful API payload size validation. |
| | |Optionally supports fail-safe mode for payload size validation. In fail-safe true mode API calls are forwarded even it is more than configured max size but less than max allowed payload size. Refer to [Usage](Usage.md) section. |
| | |Support configuration 'override\_custom\_error\_message' for enabling API service endpoint supported static custom messages to override Connector runtime message. |

## Description

- The Connector blocks incoming RESTful API request that fails schema validation using given JSON schema. 

- The Connector also blocks incoming API request based on configured max payload size. If Incoming request payload size is more than configured payload-max-size value then API request is blocked; and the Connector responds to user client with error message. 

- The Connector validates JSON response against the JSON schema; and if fails, the Connector blocks the response and respond to the user client with error message. 

- The Connector also blocks the response from backend based on max payload size. If response payload size is more than configured payload-max-size value then the Connector responds to the user client with error message. 

- Supports pre-processing of API request and post-processing of backend server response. 

## Related Links

- [Usage](Usage.md)

- [Design and Implementation](Design_and_implementation_25.md)

- [Configuring Endpoint Call Processing](../APISchemaAndPayloadSizeValidationConnector/Configuring_endpoint_call_processing_8.md)

- [Local Edition Porting and Chaining](../OIDCTokenAuthenticatorConnector/Porting_and_chaining.md)
