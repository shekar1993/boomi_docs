---
sidebar_position: 1
---

# Overview of OAuth2JWT Authentication Connector

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-8cf29af1-7136-414e-97f7-990dbe860d95"/>
</head>

## Release Notes

|**API Management Release Date** |**Release Type** |**Release Description** |
| --- | ---- | --- |
|May 11, 2020 |New Feature |Support match policy to allow additional validation based on JWT claims value. |

## Description

- This connector authenticates API requests coming from the client using API Management OAuth2 access token as well as third-party JWT on the same service endpoint. 

- Connector supports embedded API Key (client\_id) passed in JWT payload claim through API request to perform authentication. 

- Connector enforces existence and validity of a JWT specified in HTTP Authorization header. 

- Connector supports injecting claims value in request to enrich HTTP headers which are specified in pre-input configuration.

- Connector provides configurable capability to block/forward HTTP Authorization header to backend/origin server. 

- Natively supports chaining of API Management customer processors and Connectors.

- Supports JSONPath expression to locate claim value for non-standard JWT claims. 

- Support match policy to allow additional validation based on JWT claims value. 

- Supports pre-processing of API request. 

## Related Links

- [Usage](Usage_19.md)

- [Design and Implementation](Design_and_implementation_22.md)

- [Configuring Endpoint Call Processing](Configuring_endpoint_call_processing_24.md)

- [Local Edition Porting and Chaining](Porting_and_chaining_2.md)


