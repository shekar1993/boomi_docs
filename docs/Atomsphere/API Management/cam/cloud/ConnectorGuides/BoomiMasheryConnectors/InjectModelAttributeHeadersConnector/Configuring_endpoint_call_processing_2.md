---
sidebar_position: 4
---

# Configuring Endpoint Call Processing

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-ba19306c-2421-462d-b8b6-c740c98ea47e"/>
</head>

## For pre-processing

- **Processing Adapter:** `com.mashery.proxy.customer.generic.inject-modelattribute-header-connector`. 

- **Perform Pre-processing:** Yes. 

Data to make available for pre-processing (one per line)

|**Data** |**Example** |**Notes** |
| ----- | ---- | --- |
|`params:{"<header name>":"<model.fieldname>"}` |`<p>params:{ </p><p>"X-Mashery-Plan":"plans.name"`, `</p><p>"X-Mashery-Package-ID":"plans.package\_id"`, `</p><p>"X-Mashery-Package":"packages.name", </p><p>"X-Mashery-Application":"applications.name", </p><p>"X-Mso-Partner":"applications.partner" </p><p>} </p>`|<p>Optional. </p><p>- Plans standard field: 'name' </p><p>- Plans standard field: 'package\_id' </p><p>- Packages standard field: 'name' </p><p>- Applications standard field: 'name' </p><p>- Applications EAV: 'partner' </p>|

## For post-processing

- **Perform Post-processing**: Yes. 

**Data to make available for post-processing (one per line)**

|**Data** |**Example** |**Notes** |
| ----- | ---- | --- |
|`params:{"<header name>":"<model.fieldname>"}` | `params:{system:applications.name, SchemaVersion:applications.SchemaVersion}`| <p>Optional. </p><p>- Applications standard field: 'name' </p><p>- Applications EAV: 'SchemaVersion' </p>|