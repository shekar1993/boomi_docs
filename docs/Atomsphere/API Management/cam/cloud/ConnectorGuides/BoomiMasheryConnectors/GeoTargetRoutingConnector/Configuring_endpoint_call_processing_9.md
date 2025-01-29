---
sidebar_position: 4
---

# Configuring Endpoint Call Processing

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-15dd57af-b08d-4d14-b800-9b72ad388e71"/>
</head>

- **Processing Adapter** 
  - `com.mashery.proxy.customer.generic.GenericHttpHeaderRouterProcessor` 

- **Perform Pre-Processing**: Yes 

- **Data to make available for pre-processing (one per line)**

|**Data** |**Example** |**Notes** |
| ---- | ---- | ---- |
|`regioncodeheader: <HTTP header name that holds the API request region code>` |`regioncodeheader:HTTP-REQUEST-REGION-KEY` |Optional. |
|`targetdefaulturi:<Contains the default target URI>` |`targetdefaulturi: https://uki.acme-travel.com/en/userinfo` |Optional. |
|`params:{<HeaderName>:applications.<EavName>, ...}` |`params:{"X-Mso-Partner":"applications.partner"}`|Optional. |
|`headername:<static header name>` |`X-Gateway-Name` |Optional. |
|`params:{<HeaderName>:applications.<EavName>, ...}` |`<p>params:{"X-Mso-Partner":"applications.partner" </p><p>} </p>`|Optional. |
|`headervalue:<corresponding static header value>` |Boomi-API Management|Optional. |





