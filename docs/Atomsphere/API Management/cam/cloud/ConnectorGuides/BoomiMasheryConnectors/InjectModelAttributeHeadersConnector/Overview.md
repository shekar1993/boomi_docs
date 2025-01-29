---
sidebar_position: 1
---

# Overview of Inject Model Attribute Headers Connector

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-7bff6a14-3a5c-43ea-b733-8bb97b76c670"/>
</head>

## Release Notes

|**API Management Release Date** |**Release Type** |**Release Description** |
| ---- | ---- | ---- |
|November 16, 2021 |Enhancement |Connector now supports UTF-8 encoding of the header value to be injected. In case the header and the value to be injected already exists, header will not get injected. |

## Description

- The Inject Model Attribute Headers Connector can inject API Management model (members, applications, plans, packages, keys, and package\_keys) fields as HTTP header(s) in the target API request or the response coming from backend server. 

- It also supports EAVs (Extended Attributes Value). 

- The Header value is UTF-8 encoded (special characters except . - \* \_ and space are converted into one or more bytes using UTF-8 encoding scheme.) 

- The Connector does not enrich/inject header if : 

  - Header data is empty 

  - Header data is unavailable 

  - The header and it's corresponding value to be added is already present in the request headers of pre-process and in the response headers of post-process. 

## Related Links

- [Usage](Usage_9.md)

- [Design and Implementation](Design_and_implementation_8.md)

- [Configuring Endpoint Call Processing as a Processor](Configuring_endpoint_call_processing_2.md)

- [Local Edition Porting and Chaining](../OIDCTokenAuthenticatorConnector/Porting_and_chaining.md)


