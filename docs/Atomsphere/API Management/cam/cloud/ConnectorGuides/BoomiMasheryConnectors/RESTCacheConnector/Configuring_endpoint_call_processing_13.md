---
sidebar_position: 4
---

# Configuring Endpoint Call Processing

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-a476059f-a6e3-4b72-abba-1c197ca59691"/>
</head>

This section describes how to configure endpoint call processing for the REST Cache Connector. 

1. **Processing Adapter:** com.mashery.proxy.customer.generic.rest-cache-connector

2. **Perform Pre-Processing:** Enabled 

3. **Data to make available for pre-processing:** Pre-input data as shown in table below. 

4. **Perform post-processing:** Enabled 

|**Data** |**Example** |**Notes** |
| ---- | --- | ---- |
|cache\_ttl : `<Cache TTL In Minutes>`|`cache\_ttl : 10`|<p>Required </p><p>If cache\_ttl is non-numeric or its value is not between 0 and 60 minutes, then cache expiry time will be set as 5 minutes. </p>|
|headers : `{"<header\_name>", ...}` |headers : `{"API\_Key", ...}` |<p>Optional </p><p>Best practice is to limit the number of headers to mitigate the risk of additional latency. </p>|

