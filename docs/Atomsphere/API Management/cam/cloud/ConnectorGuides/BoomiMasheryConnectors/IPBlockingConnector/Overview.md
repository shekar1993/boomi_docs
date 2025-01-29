---
sidebar_position: 1
---

# Overview of IP Blocking Connector

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-9d468c7f-815f-457a-bf81-688fe9d0b8ba"/>
</head>

The IP Blocking connector provides the ability to block API requests according to the configured Subnet, IP list or IP range. 

- Supports IPs in the following formats: 

  - CIDR (for example - a.b.c.d/x) 

  - List of IPs 

  - IP range 

- Fetches the blacklisted IP from pre-input to authenticate the requesting IP. 

- If blacklisted IPs are configured in pre-inputs then the connector blocks only those requests where the IPs match the configured blacklisted IPs. 

- The configured IP (IPv4) addresses are entered in CIDR notation or comma delimited.

- Supports only pre-processing of API request. 

- Supports IP blacklisting of resource endpoint only configured in API Management. 

  - Blacklisting by IP address for customer backend servers behind API Management. 

  - API Management token endpoints are not blacklisted by IP address. 

## Related Links

- [Usage](Usage_13.md)

- [Design and Implementation](Design_and_implementation_16.md)

- [Configuring Endpoint Call Processing](Configuring_endpoint_call_processing_7.md)

- [Local Edition Porting and Chaining](../OIDCTokenAuthenticatorConnector/Porting_and_chaining.md)

