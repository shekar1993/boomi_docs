---
sidebar_position: 1
---

# Connectors and Adapters

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-bb657237-08ed-4349-bed2-2b867a258151"/>
</head>

Connectors are Boomi Cloud API Management's integration features that have been developed and provided ready to use for Cloud customers. Connectors have been carefully envisioned to address common use-cases, such as: content injection, content filtering, content transformation, call authentication using third-party IdP, IP-based call filtering, domain-based routing, geo-location based routing and HTTP header manipulation.

## Boomi Cloud API Management-built Connector vs Adapter

The following table explains the differences between Boomi Cloud API Managementbuilt connectors and Boomi Cloud API Management-built adapters.

|**Connector** |**Adapter** |
| :-: | :-: |
|Built-in features for Boomi Cloud API Management and Local Edition. |Built for both Boomi Cloud API Management and Local Edition. |
|Strategic integration feature generally available out-of-the-box for any Boomi Cloud API Management customer. |Custom in nature and tailored to fit a particular customer-specific need. |
|Available without additional cost to Boomi Cloud API Management customers. |<p>Customer may incur fees for engineering and development work done by Boomi. </p><p>:::note </p><p>Local Edition customers can use the SDK to build their own adapters. </p><p>:::</p>|
|By default, connectors are available out-of-the-box. |Needs to be engineered and developed for a Local Edition customer. |

## FAQs

**Does Boomi ship Boomi Cloud API Management Connectors out-of-the-box?**

Yes. Boomi Cloud API Management Connectors are available out-of-the-box for Boomi Cloud API Management customers.

**Can Boomi Cloud API Management Connectors be made available or ported to Local Edition customers**

Yes. Boomi Cloud API Management built connectors are available out-of-the-box with Local Edition.

**What are some best practices for a Local Edition customer who needs to migrate to a newer version of Local Edition and consumes Boomi Cloud API Management built adapters and/or connectors?**

Here are best practices and guidance for smoother migration to a newer version of Local Edition . 

:::note

Applies to customers who consume Boomi Cloud API Management
built connectors or adapters

:::

**Normal Flow**

1. It is always good practice and Boomi recommends releasing Boomi Cloud API Management built connectors or adapters certified for a particular Local Edition in a non-production area/environment first. Migration of Local Edition product and Boomi Cloud API Management built connectors or adapters that are needed for a particular Local Edition version must happen in lock step.

2. Customer should deploy adapters build once they are available in their nonproduction environment for a particular Local Edition. Connectors are available out-of-the-box with Local Edition.

3. Customer must perform UAT and confirms/sign off that Boomi Cloud API
Management built connectors or adapters are functioning as expected for Local Edition version.

4. Customer should update their support case once they sign off UAT. Boomi releases adapters to customer Local Edition production area.
