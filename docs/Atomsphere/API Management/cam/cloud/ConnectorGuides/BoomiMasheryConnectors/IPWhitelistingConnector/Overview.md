---
sidebar_position: 1
---

# Overview of IP Whitelisting Connector

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-6917273e-0fe6-495a-a946-f0869ff8bbed"/>
</head>

## Release Notes

|**API Management (Release Date)** |**Release Type** |**Release Description** |
| ------ | ---- | ---- |
|March 19, 2020 |Improvement |Improvement to identify Client IP addresses accurately, for whitelisting feature |
| |Improvement |Connectors now support overriding default behavior of X-FORWARDED-FOR header to pick client IP address using a configurable flag *keep\_client\_ip\_as\_source*. This flag overrides default selecting IP address of intermediaries like a load balancer or third party proxy that is closest to the API Management stack. |

## Description

The connector provides an ability to whitelist API requests according to the configured Subnet, IP list, or IP range. It supports IPs in the following format: 

- CIDR (for example - a.b.c.d/x) 

- List of IPs. 

- IP Range 

- Support for both Package Key & Service Key EAV ( Extended Attributes Value). 

- Connector will fetch the WhiteListed IP from pre-input or package keys EAV and will call the IP Whitelisting Service to authenticate the requesting IP. 

- When whitelisted IP's are configured either in pre-inputs or in package keys EAV then connector will allow only those requests whose IP's are same as per configured whitelisted IP's. 

- The configured IP (IPv4) addresses are entered in CIDR notation or comma-delimited. 

- Supports only pre-processing of API request. 

- Supports IP whitelisting of resource endpoint only configured in API Management. 

  - Whitelisting by IP address for customer backend servers behind API Management. 

  - API Management token endpoints are not whitelisted by IP address. 

## Related Links

- [Usage](Usage_2.md)

- [Design and Implementation](Design_and_implementation_5.md)

- [Configuring Endpoint Call Processing](Configuring_endpoint_call_processing_15.md) 

  - [Using the Connector as an Authenticator ](Configuring_endpoint_call_processing_15.md)

  - [Using the Connector as a Processor](Configuring_endpoint_call_processing_15.md)

- [Local Edition Porting and Chaining](../OIDCTokenAuthenticatorConnector/Porting_and_chaining.md)


