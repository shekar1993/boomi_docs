---
sidebar_position: 1
---

# Overview of REST Cache Connector

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-ecf09a4e-2f3a-467e-8add-29121ab268d5"/>
</head>

## Release Notes

|**API Management Release Date** |**Release Type** |**Release Description** |
| --- |---- | ---- |
|October 6, 2021 |Improvement |When defining cache\_ttl at the service level or endpoint level, then the regular cache is coming into play and it is overriding the REST Cache connector. Now, **cache\_ttl** will be defined in pre input and not at the service level or endpoint level. |
|April 2, 2020 |Improvement |Support accurate caching of POST request having XML payload with namespace. |
|March 19, 2020 |New Feature |Supports caching of REST POST requests, which allows requests that have the same payload and configured headers value to be served from the cache. |

## Description

The REST Cache Connector supports caching of REST service response, and augments the URL-based v API Management Caching feature. This connector makes it possible to enable caching for REST service (where the URL for all requests are the same) for customers who are using REST with POST messages. 

The REST Cache Connector: 

- Supports caching of REST with POST requests, which allows requests that have the same payload and configured headers value to get served from the cache, instead of the back-end server. 

- Supports the REST POST request calls that match the unique content cache key, which are served from the API Management cache. For more information, see [Content Cache Key Formation](Design_and_implementation.md). 

- Checks the cache\_ttl parameter as a pre input. This value must be in minutes. 

- Supports REST POST calls only. 

- Caches origin or backend server HTTP responses and HTTP headers, and is compliant with [tools.ietf.org/html/rfc2616#section-13.5.1](https://datatracker.ietf.org/doc/html/rfc2616#section-13.5.1). 

## Related Links

- [Usage](Usage_21.md)

- [Design and Implementation](Design_and_implementation.md)

- [Configuring Endpoint Call Processing](Configuring_endpoint_call_processing_13.md)

- [Local Edition Porting and Chaining](../OIDCTokenAuthenticatorConnector/Porting_and_chaining.md)


