---
sidebar_position: 1
---

# Configuration Manager

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-eb6e60c8-85d0-487a-aac9-dd8c6ea0648f"/>
</head>

Configuration Manager is a browser-based utility that allows administrators to easily import and manage new or existing configurations in Boomi Cloud API Management - Local Edition.

Un-tethered mode creates and maintains its data in isolation with no connection to Boomi Cloud API Management. All configuration data and logs are maintained in the cluster locally.

Configuration Manager is bundled inside of the Local Edition deployment. The Configuration Manager runs and exists within the cluster itself. This means that you do not need to manually download the binary and run or install it on your computer. The mlconfig binary talks directly to the V3 API inside of the cluster, so data state changes are reflective of the actual state of the cluster.

To use Configuration Manager, log in to the cluster IP address or hostname for the configuration manager at an HTTPS port with the following URL format:

`https://<admin-configuration-url>/admin`

:::note

The port is also determined by the configuration and may be the standard 443 if the load balancer for the deployment is configured as such. 

:::

Once there, log in and use Configuration Manager just like any other web application, (for example, the current Boomi Cloud API Management Control Center dashboard).

By default, the credentials are as follows:

Username: admin

Password: Ap1Us3rPasswd

Access to application and access logs is provided through an observability stack. However, the observability stack capability is not available out-of-the-box. For more information on how to set it up, see the [GitHub repository] (https://github.com/TIBCOSoftware/tcapim-samples/).
