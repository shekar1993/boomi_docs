---
sidebar_position: 4
---

# Configuring Endpoint Call Processing

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-0a56fe8c-b18f-4a5d-ae7e-6ef74e14d116"/>
</head>

On the Call **Transformations** page , specify the following information in these fields: 

1. **Processing Adapter:** com.mashery.proxy.customer.generic.json-schema-validator 

2. **Perform Pre-Processing:** Enabled 

3. **Perform Post-Processing:** Enabled 

4. **Data to make available for pre-processing** (one per line) 

   |**Data** |**Examples** |**Notes** |
   | -- | --- | --- |
   |`max_payload_size: <size in kb>` |max\_payload\_size : 600 |Optional. |
   |`fail_safe: <flag>` |fail\_safe : true |Optional. Default is 'false'. Any value besides 'true' is treated as 'false'. |
   |`override_custom_error_message : <flag>` |override\_custom\_error\_message : true |Optional. Default is 'false'. For enabling API service endpoint supported static custom messages to override Connector runtime message. |

5. Data to make available for post-processing (one per line) 

   |**Data** |**Example** |**Notes** |
   | --- |--- | --- |
   |m`ax_payload_size: <size in kb>`|max\_payload\_size : 600 |Optional. |
   |`fail_safe: <flag>` |fail\_safe : true |Optional. Default is 'false'. Any value besides 'true' is treated as 'false'. |
   |`override_custom_error_message : <flag>` |override\_custom\_error\_message : true |Optional. Default is 'false'. For enabling API service endpoint supported static custom messages to override Connector runtime message. |

