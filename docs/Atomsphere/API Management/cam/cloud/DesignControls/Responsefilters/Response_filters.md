---
sidebar_position: 1
---

# Response Filters

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-7d29d641-b824-4230-b12e-f150f8f70b54"/>
</head>

Response Filters are created to get customized responses from specific methods. Filtering is the process of excluding elements from the responses before being returned to the calling developers. The elements that are selected from a sample response schema for a particular method are excluded from the responses. Filters are applied when they are added to methods while defining a Plan. 

Response filters will only work if the Content-Type header is set to application/json (for JSON responses) or application/xml (for XML responses). 

:::note

Response Filters are available only in the Advanced-Packager-enabled Portals. Please contact API Management Support for more information. 

:::

The following table describes the fields on the **Response Filters** page. 

|**Field**|**Description**|
| --------- | -------- |
|Filter|Filter name. |
|Fields Excluded|Number of elements in the schema that are excluded from the response. |
|Methods Using Filter|Number of methods to which the filter is applied. |
|Created|Date and time when the filter was created. |
|Last Modified|Date and time when the filter was last updated. |

