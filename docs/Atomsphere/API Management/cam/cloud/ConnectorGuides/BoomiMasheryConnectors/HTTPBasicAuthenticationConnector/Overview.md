---
sidebar_position: 1
---

# Overview of HTTP Basic Authentication Connector

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-2188beda-e09f-4c38-a55a-ff3ad8a94cf4"/>
</head>


## Release Notes

|**API Management Release Date** |**Release Type** |**Release Description** |
| ---- | ---- | ---- |
|July 2, 2020 |Improvement |Support of 401 (Unauthorized) status code and WWW-Authenticate header field for an empty Authorization header in HTTP Basic Authentication Connector. Improvement is in compliance to [RFC](https://tools.ietf.org/html/rfc7617) for an empty authorization header in API request needed for HTTP Basic Authentication. |
| |Improvement |Optional configuration parameter to keep API Management proxy platform default response codes for backward compatibility. |

## Description

- Connector provides HTTP Basic Authentication support between call from user client and API Management gateway. 

- In the HTTP Basic Authentication, base64 encoded user ID and password separated by ":" and concatenated with "Basic" sent in "Authorization" header from client end and credentials are validated at API Management gateway. 

- Basic Auth credentials are configurable using API Management package key `(client\_id/username)` and secret ``(client\_secret/password)`.

## Related Links

- [Usage](Usage_10.md)

- [Design and Implementation](Design_and_implementation_4.md)

- [Configuring Endpoint Call Processing as a Processor](Configuring_endpoint_call_processing_processor.md)

- [Configuring Endpoint Call Processing as an Authenticator](Configuring_endpoint_call_processing_as_an_authenticator.md)

- [Local Edition Porting and Chaining](Porting_and_chaining_4.md)

