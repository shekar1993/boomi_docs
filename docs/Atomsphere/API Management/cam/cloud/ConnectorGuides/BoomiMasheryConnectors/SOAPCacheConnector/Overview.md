---
sidebar_position: 1
---

# Overview of SOAP Cache Connector

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-ce3473fd-457b-4737-b6ec-45f476ef9c46"/>
</head>

## Release Notes

|**API Management Release Date** |**Release Type** |**Release Description** |
| ---- | --- | ---- |
|October 6, 2021 |Improvement |When defining cache\_ttl at the service level or endpoint level, then the regular cache is coming into play and it is overriding the Soap Cache connector. Now, **cache\_ttl** will be defined in pre input and not at the service level or endpoint level. |
|April 2, 2020 |Improvement |Support accurate caching of POST request having XML payload with namespace. |
|February 27, 2020 |New Feature |Support caching of SOAP with POST requests, which allows requests that have the same payload and configured headers value to be served from the cache. |

## Description

The SOAP Cache Connector supports caching of SOAP service response, and augments the URL-based API Management Caching feature. This connector makes it possible to enable caching for SOAP service (where the URL for all requests are the same) for customers who are using SOAP with POST messages. 

The SOAP Cache Connector: 

- Supports caching of SOAP with POST requests, which allows requests that have the same payload and configured headers value to be served from the cache, instead of the back-end server. 

- Supports the SOAP POST request calls that match the unique content cache key, which are served from the API Management cache. These calls support only pre-processing of API requests. For more information, see [Content Cache Key Formation](../RESTCacheConnector/Design_and_implementation.md) 

- Checks the cache\_ttl parameter as a pre input. This value must be in minutes. 

- Supports SOAP POST calls only. 

- Caches original server HTTP responses and HTTP headers, and is compliant with [tools.ietf.org/html/rfc2616#section-13.5.1](https://tools.ietf.org/html/rfc2616#section-13.5.1)

## Related Links

- [Usage](Usage_8.md)

- [Design and Implementation](Design_and_implementation_20.md)

- [Configuring Endpoint Call Processing](Configuring_endpoint_call_processing_22.md)

- [Local Edition Porting and Chaining](../OIDCTokenAuthenticatorConnector/Porting_and_chaining.md)


