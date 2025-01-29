---
sidebar_position: 1
---

# Overview of SOAP - REST Transformation Connector

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-2a23376b-400d-47b9-a9f0-7d9a3d6bd935"/>
</head>

## Release Notes

|**Release Date** |**Release Type** |**Release Description** |
| --- | ---- | ---- |
|April 2, 2020 |Improvement |Support accurate caching of POST request having XML payload with namespace. |
| |Improvement |Support overriding default Connector error messages with Control Center configured custom error messages using an optional flag 'override\_custom\_error\_message'. |
|January 9, 2020 |New Feature |Support transforming API request payload from SOAP message to REST(JSON) and vice versa. |

## Description

- The SOAP - REST Transformation connector transforms API request payload from a SOAP message to REST (JSON), and vice versa. 

- As part of pre-processing, the connector processes an incoming SOAP request and transforms it into REST (JSON). 

- As part of post-processing, the connector processes a customer back-end REST(JSON) response and transforms it into a SOAP response before returning to the user client. 

## Related Links

- [Usage](Usage_15.md)

- [Design and Implementation](Design_and_implementation_18.md)

- [Configuring Endpoint Call Processing](Configuring_endpoint_call_processing_18.md)

- [Local Edition Porting and Chaining](../OIDCTokenAuthenticatorConnector/Porting_and_chaining.md)


