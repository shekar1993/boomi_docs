---
sidebar_position: 2
---

# Creating an Endpoint Manually

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-853eb293-7308-48d9-ac22-1c7845d31df4"/>
</head>

An endpoint is a mapped location of a public host name/request path and the origin host server/endpoint path. In other words, it can be both the URI that is accessed by developers and the URI used by the Traffic Manager to send API calls to. Each endpoint contains a unique combination of request and endpoint paths, protocols, rules, accessible methods, and other settings that differentiate one endpoint from the other within an API. 

:::note

To create an endpoint using TIBCO Cloud Mesh, see [Creating an Endpoint using TIBCO Cloud Mesh](./Creating_an_endpoint_using_Boomi_cloud_mesh.md).

:::

The following table describes the fields on the **Endpoint Create: New Endpoint Definition** page. 

|**Field** |**Description** |
| ----- | ----- |
|Your Public Endpoint Domain|Public domain name that developer application or widget uses to make an API call. It can be defined in the **Customize your Public Endpoint Address** field. |
|Your Public Traffic Manager Domain|<p>The API Management internal host name (domain name) to which the requested public domain name is CNAMED. </p><p>The Traffic Manager domain name can be modified by clicking the Edit link in the top ribbon. However, you must consult API Management before modifying the API Management internal domain name.</p>|
|Your Endpoint Domain|The URI path of the host server that the Traffic Manager uses to send an API call. The Traffic Manager performs call logging, and applies the configured rules before sending an API call. |
|Name for your Endpoint|The endpoint name which is reflected wherever this endpoint is mentioned. |
|Require Enhanced Security|<p>Allows you to define whether an SSL certificate is required for the endpoint. If enabled, all calls made to this endpoint are required to be made using SSL. Consult API Management Support to enable this setting if not visible on the page. Note that this field cannot be disabled once enabled. </p><p>:::note</p><p>After the **Require Enhanced Security** field is enabled, the transport protocol field is modified to **https** for both the internal and external URIs. These fields cannot be changed to http or other protocols.</p><p>::: </p>|
|Customize your Public Endpoint Address|<p>Allows you to define the public domain name and path for the endpoint. This path is used by developers when they make calls to this endpoint by using curl or other applications. </p><p>:::note</p><p>To create endpoints, you must set up root domains. To add a domain, click the **here** link.</p><p>::: </p>|
|Your Endpoint Address|<p>Allows you to define the URI path of the host server that the Traffic Manager uses to send an API call. The Traffic Manager performs call logging, and applies the configured rules before sending an API call. </p><p>The domain name, path, and parameters can be defined for the endpoint in this field. </p><p>To create endpoints, you must set up root domains. To add a domain, click the here link. </p>|
|Select HTTPS Client Profile|Allows you to specify an HTTPS Client Profile for the endpoint. For more information, see [HTTPS Client Profiles](../../../ManageControls/HTTPSclientprofiles/HTTPS_client_profiles.md). |

