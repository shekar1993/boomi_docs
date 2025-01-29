---
sidebar_position: 1
---

# Overview of JWT Authentication Connector

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-d8853184-69c9-4cab-a9cc-b987f2bfbb56"/>
</head>

## Release Notes

|**API Management Release Date** |**Release Type** |**Release Description** |
| --- | --- | --- |
|May 17, 2022|Minor update|Support custom error message with connector configurations.|
|May 11, 2020 |New Feature |Support match policy to allow additional validation based on JWT claims value. |

## Description

- The Connector authenticates request calls coming from the client using third party JWT token. This provides authentication augmentation on top of API key which is used in API Management. 

- Connector enforces existence and validity of a JWT specified in HTTP Authorization header. 

- Connector supports injecting claims value in request to enrich http headers which can be specified in pre_input configuration.

- Connector provides configurable capability to block/forward http Authorization header to backend/origin server. 

- Supports JSONPath expression to locate claim value for non-standard JWT claims. 

- Support match policy to allow additional validation based on JWT claims value. 

- Supports pre-processing of API request.

- Supports custom error message with connector configurations.

## Related Links

- [Usage](Usage_20.md)

- [Design and Implementation](Design_and_implementation_13.md)

- [Configuring Endpoint Call Processing](Configuring_endpoint_call_processing_23.md)

- [Local Edition Porting and Chaining](Porting_and_chaining.md)

- [JWT Token Generation for HMAC using SHA Algorithm](JWT_token_generation_for_hmac_using_sha_algorithm.md)

- [JWT Token Generation for RSA using SHA Algorithm](JWT_token_generation_for_rsa_using_sha_algorithm.md)

- [JWT Token Generation Using ECDSA Algorithm](JWT_token_generation_using_ecdsa_algorithm.md)

- [Business Use Cases Feasible Using JWT Connector](../../MasheryConnectorUseCases/BusinessUseCasesFeasibleUsingJWTConnector/Overview.md)
