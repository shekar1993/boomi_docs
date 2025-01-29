---
sidebar_position: 6
---

# API Plan Key Properties

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-fbfb65c9-4970-402c-80c6-1d003a42c2d9"/>
</head>

Package Plan keys can be generated both from the API Management Control Center and the Portal. These settings help you to allow or restrict the developers or administrators from generating keys for the Package Plan. For more information on key properties, see [API Package Key Properties](../API_package_key_properties.md).

The following table describes the fields on the **API Plan Key Properties** page. 

|**Field** |**Description** |
| ---- | ----- |
|Self-service Key Provisioning|Setting that allows developers to issue keys for themselves. Selecting this option results in this Package Plan being visible in the Application Registration pages in the Portal. |
|Admin Key Provisioning|Setting that makes the Package Plan available for key provisioning within the Administration Dashboard. This setting is not dependent on the selected Application Registration process for the Portal. |
|Maximum Allowable Keys|Maximum number of keys that can be generated for this Package Plan. |
|Number of Keys allowed until Moderation|Maximum number of keys that can be generated without moderation. When this limit is crossed, administrator's approval is needed for further usage of the generated key. |

