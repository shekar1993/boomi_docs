---
sidebar_position: 3
---

# Creating an Endpoint using TIBCO Cloud Mesh

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-2b05cdea-91a4-4aca-ad23-c328e4741677"/>
</head>

**TIBCO Cloud Mesh** allows you to discover any private REST endpoint exposed within Boomi Cloud domains, within your organization or related organizations. 

Authentication and authorization for these private endpoints is provided automatically. You can browse available services and select one, rather than copying and pasting a URL. 

:::note 
For more information on TIBCO Cloud Mesh, refer to the *TIBCO Cloud Mesh* topic in the Boomi Subscriber Cloud documentation.

:::

The following table summarizes how using TIBCO Cloud Mesh for the endpoint affects the following endpoint-related configuration pages in API Management Control Center. 

|**Configuration Page** |**What changes when TIBCO Cloud Mesh is used as the endpoint** |
| ------ | ------ |
|Domains & Traffic Routing|<p>- The **Your Endpoint Domain** field is not displayed at the top of the page. </p><p>- The **Your Endpoint** field is where you select **TIBCO Cloud Mesh** as your endpoint. When **TIBCO Cloud Mesh** is selected, you will then need to select a service and path for the endpoint. </p><p>- The **Your Endpoint Address** field is not displayed at the bottom of the page. </p><p>For more information, see [Domains & Traffic Routing](../Endpointmethods/Domains_and_traffic_routing.md). </p>|
|Key & Method Detection|<p>In the Supported Http Methods field, the supported HTTP methods are automatically selected according to the Swagger definitions returned. </p><p>For more information, see [Key & Method Detection](../Endpointmethods/Endpoint_key_and_method_detection.md). </p>|
|Security Settings|No configuration is needed on this page. For more information, see [Security Settings](../Endpointmethods/Endpoint_security_settings.md). |
|Load Balancing & Domains|Configuration for **System Endpoint Addresses** is not displayed on this page. For more information, see [Load Balancing & Domains](../Endpointmethods/Endpoint_load_balancing_and_domains.md). |

