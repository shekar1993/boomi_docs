---
sidebar_position: 1
---

# Overview

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-f5c11dba-61e1-43bd-b511-a4da99885793"/>
</head>

Boomi Cloud API Management - Local Edition is a cloud-native API gateway that can be deployed within a customer's datacenter or on Cloud platforms. Boomi Cloud API Management - Local Edition supports two deployment modes - Untethered, without any external dependencies, or hybrid in conjunction with Boomi Cloud™ API Management. These two deployment modes are mutually exclusive.

In hybrid mode, Boomi Cloud API Management - Local Edition includes the cloud-hosted Developer Portal, Administration Dashboard, and API Reporting and Analytics. In untethered mode, Boomi Cloud API Management - Local Edition includes a local Developer Portal and Configuration Manager. It also includes the ability to update policies using the Boomi Cloud API Management - Local Edition API. Boomi Cloud API Management - Local Edition Configuration Manager and API may be used together for configuration management. In untethered mode, logs from Boomi Cloud API Management - Local Edition can be collected and forwarded for downstream reporting and analytics via other externally-available tools. Boomi Cloud API Management - Local Edition is available to customers for installation in container-based environments. 

The **Local** tab on the Dashboard displays the sync history and cluster related information.

When Boomi Cloud API Management - Local Edition is installed, the API settings are still configured from the Portal, and saved in the cloud. These settings then can be synced with the local network where the Local is set up. For example, the API setting, OAuth settings, and settings related to applications are saved in the cloud. These settings get reflected in the local servers when the settings are synced with the local instance. As the Traffic Manager manages the traffic locally, the traffic data is then synced with the cloud for further processing. 

:::note

The **Local** tab appears on the Dashboard when Boomi Cloud API Management - Local Edition is installed. 

:::

Only the **Administrator** user role can access the Local tab.
