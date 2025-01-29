---
sidebar_position: 1
---

# Overview of XML - JSON Transformation Connector

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-860781f4-84fb-457a-b7fd-65b9c6e1e87f"/>
</head>


## Release Notes

|**API Management Release Date** |**Release Type** |**Release Description** |
| --- | --- | ---- |
|April 2, 2020 |Improvement |Support optional charset check in the application/json Content-Type header for accurate JSON → XML transformation. |
| |Improvement |Support overriding default Connector error messages with APICC configured custom error messages using an optional flag 'override\_custom\_error\_message'. |
|January 9, 2020 |New Feature |Support transforming an API request payload from XML to JSON and vice versa. |

## Description

- The XML - JSON Transformation connector transforms an API request payload from XML to JSON and vice versa. 

- This connector supports pre-processing, as well as post-processing. 

- As part of pre-processing, this connector processes incoming XML request and transforms it into JSON and vice versa.

- As part of post-processing, this connector processes customer back-end XML response and transforms it into JSON and vice versa. 

## Related Links

- [Usage](Usage_4.md)

- [Design and Implementation](Design_and_implementation_14.md)

- [Configuring Endpoint Call Processing](Configuring_endpoint_call_processing_14.md)

- [Local Edition Porting and Chaining](../OIDCTokenAuthenticatorConnector/Porting_and_chaining.md)


