---
sidebar_position: 4
---

# Configuring Endpoint Call Processing

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-9c94abb9-4e2a-4895-9b3f-786558f66c45"/>
</head>


On the Call Transformations page, specify the following information in these fields: 

- **Processing Adapter:** com.mashery.proxy.customer.generic.domain-route-processor 

- **Perform Pre-Processing:** Enabled 

- **Data to make available for pre-processing** (one per line and with any one value): Pre-Input Data as shown in the following table. 

  |**Data** |**Example** |**Notes** |
  | ------ | ---- | ----- |
  |`address:<URI with pattern placeholder>`|`address:www.{id}.com/v1/`|Optional |

