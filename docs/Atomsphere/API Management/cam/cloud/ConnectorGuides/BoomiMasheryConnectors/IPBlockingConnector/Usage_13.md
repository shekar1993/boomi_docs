---
sidebar_position: 2
---

# Usage

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-1469abd6-c23c-4dda-bd43-102f267d31f0"/>
</head>

- Blocking by IP range, for example: 123.45.67.0-123.45.67.128

- Blocking by IP list (comma de-limited), for example: 123.45.67.0,123.45.67.128

- Blocking by subnet, for example: 123.45.0.0/16

- blocked\_ip\_range and blocked\_ip\_list are optional and don't need to be configured together. 

- When only blocked\_ip\_range is configured, then incoming user client IP address must be present in the range specified. 

- When only blocked\_ip\_list is configured, then incoming user client IP address must be present in the IP list specified. 

- When both blocked\_ip\_range and blocked\_ip\_list are configured, then client IP address must be present in either blocked\_ip\_range or blocked\_ip\_list. 

- When keep\_client\_ip\_as\_source is true, then it will return the IP Address of originating client; if false, then it will return the IP address of nearest proxy to API Management. Whatever IP address it will return depends on this flag; this IP address must be present either in blocked\_ip\_range or blocked\_ip\_list. 

- Default value of keep\_client\_ip\_as\_source is false. 

- IP address configured must be a publicly-recognized IP address (for example: https://whatismyipaddress.com/) that is recognized by API Management proxy.

- Best practice for IP blacklisting (when third party proxy server is in front of API Management in the API call flow) is to configure the IP address of the proxy (for example, Intermediate Node 2) that is closest to API Management stack. 

  For example: **client/WWW --> Intermediate Node 1 --> Intermediate Node 2 --> Cloud API Management --> Resource API**

## Current Sequence of Identifying Client IP Address

The priority sequence logic (shown below) currently supported in this Connector achieves the following: 

- Accurately identifies client IP address in data flow across various systems before it reaches to API Management stack. 

- Designed to identify various factors that might get involved in storing client IP address which may involve chaining. 
