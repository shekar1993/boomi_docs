---
sidebar_position: 6
---

# Endpoint Security Settings

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-af00e798-d960-4900-bfc6-0dc4ae798761"/>
</head>

The **Endpoint Security Settings** page allows you to configure System Domain Authentication. You can provide basic HTTP Authentication or Secured Certificate Authentication by selecting one of these options from the drop-down. 

:::note

If TIBCO Cloud Mesh is used for the endpoint, it's not necessary to set up security settings on this page. 

:::

The following table describes the fields on the Endpoint Security Settings page. 

|**Field** |**Description** |
| ----- | ---- |
|System Domain Authentication Type|<p>Defines whether an SSL certificate to be required for authentication: </p><p>- **HTTP Basic Authentication:** Indicates that the SSL certificate is not required. </p><p>- **SSL Certificate Required:** Indicates that the SSL certificate is required. </p>|
|Username|Identifier of the credentials to be passed to the system domain authenticator. This option is visible on selection of **HTTP Basic Authentication as System Domain Authentication Type**. |
|Certificate|Username for SSL certificate authentication. This option is visible on selection of **SSL Certificate Required** as **System Domain Authentication Type**. |
|Password|Password to send to the system domain authenticator. |

