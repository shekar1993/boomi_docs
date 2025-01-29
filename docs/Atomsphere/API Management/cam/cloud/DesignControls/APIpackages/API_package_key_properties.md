---
sidebar_position: 6
---

# API Package Key Properties

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-a51026bc-5ab1-40e9-a2cd-188768c9d1ea"/>
</head>

The Package Key is generated for the developers to access a particular Package and the associated Plan. A key adapter and other key properties can be set on the **Key Properties** page. 

The following table describes the fields on the API Package Key Properties page. 

|**Field** |**Description** |
| ------- | ------- |
|Key Length|Number of characters that API Management key-generation algorithm uses to generate keys. The default setting is 24. |
|Generate Shared Secret|Generates a shared secret and enables the Shared Secret Length option. |
|Shared Secret Length|Number of characters that API Management's own algorithm uses to generate a shared secret for a key. This shared secret is a password that is known only to the developer. A shared secret can be used in a digital signature for more secure authentication of an API call. |
|Package Key Adapter|<p>Populated whenever a custom algorithm is required to generate a key. During the implementation phase of client service, a API Management Engineer writes this custom algorithm as per the client's requirements. </p><p>:::note</p><p>The information in the Package Key Adapter must only be changed by a API Management Engineer. Before making any changes, consult API Management Support.</p><p>::: </p>|

