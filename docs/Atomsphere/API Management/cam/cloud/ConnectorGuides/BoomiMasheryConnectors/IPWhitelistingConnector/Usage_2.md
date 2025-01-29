---
sidebar_position: 2
---

# Usage

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-671e94344-87ca-48ba-9828-66bc0399de6f"/>
</head>

The connector performs IP Whitelisting as follows: 

- Whitelisting by IP range - 123.45.67.0-123.45.67.128

- Whitelisting by IP list - 123.45.67.0,123.45.67.128 

- Whitelisting by Subnet - 123.45.0.0/16

- whitelisted\_ip\_range and whitelisted\_ip\_list are optional and don't need to be configured together. 

- When only whitelisted\_ip\_range is configured, then incoming user client IP address must be present in the range specified. 

- When only whitelisted\_ip\_list is configured, then incoming user client IP address must be present in the IP list specified. 

- When both whitelisted\_ip\_range and whitelisted\_ip\_list are configured, then client IP address must be present in either whitelisted\_ip\_range and whitelisted\_ip\_list. 

- Introduced new Pre-input configuration keep\_client\_ip\_as\_source, which is a boolean flag that is optional. 

- When keep\_client\_ip\_as\_source is true, then it returns the IP Address of originating client; and if it is false, then it returns the IP address of nearest proxy to API Management. Whatever IP address it returns depends on this flag; this IP address must be present either in whitelisted\_ip\_range or in whitelisted\_ip\_list. 

  The current sequence of identifying client IP address is applicable if keep\_client\_ip\_as\_source is set as true. 

- IP address configured must be a publicly-recognized IP address (for example: `<https://whatismyipaddress.com/>`) that is recognized by API Management proxy. 

- Best practice for IP whitelisting (when third-party proxy server is in front of API Management in the API call flow) is to configure the IP address of proxy (for example, Intermediate Node 2) that is closest to API Management stack. 

  For example: `client/WWW --> Intermediate Node 1 --> Intermediate Node 2 --> Cloud API Management --> Resource API`

  For more details on how `X-Forwarded-For` directive compiles client IP address while traversing through various load balancer and or proxy server, see [https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For](https://developer.mozilla.org/EN-US/DOCS/WEB/HTTP/HEADERS/X-FORWARDED-FOR). 

## Current Sequence of Identifying Client IP Address

The priority sequence logic (shown below) currently supported in this Connector achieves the following: 

- Accurately identifies client IP address in data flow across various systems before it reaches to API Management stack.
 
- Designed to identify various factors that might get involved in storing client IP address which may involve chaining. 

The current sequence of identifying client IP address is applicable if `keep_client_ip_as_source` is set as true. 
