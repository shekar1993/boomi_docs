---
sidebar_position: 3
---

# Configuring Endpoint Call Processing

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-90bb86bf-c484-41d6-8bd0-15ed87b6c86b"/>
</head>


On the **Call Transformations** page, specify the following information in these fields: 

- **Processing Adapter:** `com.mashery.proxy.customer.generic.api-policy-connector` 

- **Perform Pre-Processing:** Enabled 

- **Data to make available for pre-processing** (one per line): Pre-Input Data as shown in the following table. 

  |**Data** |**Example** |**Notes** |
  | --- | ---- | --- |
  |`Policies: [[Policy 1, Policy2], [Policy 3]]`|`Policies: [ [{ "Name": "JWTSignatureVerificationPolicy", "JWKS\_URI": " http://content.mock.acme.com/stest/test/AJ-874\_MultiplePublicKeys.json ", "CacheTTL": 300 }] ]` |Mandatory |

