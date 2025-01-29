---
sidebar_position: 1
---

# Overview of REST - SOAP Transformation Connector

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-f3806861-7693-44a2-8b7f-bf089c368a60"/>
</head>

## Release Notes

| API Management Release Date | Release Type | Release Description |
| --- | --- | --- |
| August 27, 2020 | Enhancement | Supports handling of JSON payload with namespace in the transformation. |
| June 11, 2020 | New Feature | Supports transforming API request payload from REST(JSON) to SOAP and transforming backend SOAP response into REST(JSON). |
| | New Feature | Supports RESTful POST messages only for transformation. |

## Description

- The **REST - SOAP Transformation** connector transforms API request payload from REST(JSON) POST message to SOAP and vice versa. 
- As part of pre-processing, the connector processes an incoming REST(JSON) POST request and transforms it into SOAP before forwarding to backend server. 
- As part of post-processing, the connector processes a customer back-end SOAP response and transforms it into REST(JSON) response before returning to user client. 

## Related Links

- [Usage](Usage_23.md)

- [Design and Implementation](Design_and_implementation_15.md)

- [Configuring Endpoint Call Processing](Configuring_endpoint_call_processing_11.md)

- [Local Edition Porting and Chaining](../OIDCTokenAuthenticatorConnector/Porting_and_chaining.md)


