---
sidebar_position: 3
---

# Design and Implementation

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-b48a3261-fce0-4bdc-9005-ee7e5053256b"/>
</head>

## Sequence Diagram

![](../../../Images/sequence_diagram_1.png)

## Implementation

- The Connector converts headers defined under "params" into a map. In the map, the key is a header name and the value is a model field defined for that header. 

- The Connector fetches prefix for that model field by splitting it through the dot. Prefix for the model field could be applications, plans, packages, package\_keys, members, and plans. 

- The header is added in request/response with header name as defined in pre-input configuration and header value as the actual value for the model attribute. In the case of pre-processing, a header will be added to the request. In the case of post-process, a header will be added to the response. 

- Model standard fields are retrieved from cache. If Model standard fields are not present in the cache, it is retrieved from persistent store and added in the cache.

- The Connector checks whether the configured model field is present in the standard fields. If the configured model field is present in standard fields, then the header is added in request/response with header name as configured in pre-input configuration and header value as the standard field value. In the case of pre-processing, a header is added to the request. In the case of post-process, a header is added in the response. 

- EAVs and their values for that model are retrieved from cache. If EAVs are not present in the cache, it is retrieved from persistent store and added in the cache. 

- The Connector checks whether the configured model field is present in the EAVs. If the configured model field is present in EAV, then the header is added in request/response with header name as defined in pre-input configuration and header value as EAV value. In case of pre-processing, a header is added to the request. In the case of post-process, a header is added in the response. 

- The connector compares if the header and it's value to be added, is present in the request headers for a pre-process, in the response headers for a post-process. If it matches, the connector does not inject the header and it's value. 
