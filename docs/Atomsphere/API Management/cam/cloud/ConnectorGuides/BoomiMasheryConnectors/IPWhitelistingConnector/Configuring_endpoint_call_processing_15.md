---
sidebar_position: 4
---

# Configuring Endpoint Call Processing

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-1e804154-15c6-4617-a972-9f14f8d8044e"/>
</head>

## Using the Connector as an Authenticator

Contact your API Management CSM/SA/PSG for configuration of this connector as an authenticator. 

## Using the Connector as a Processor**

To configure IP whitelisting as a processor for an endpoint: 

1. From the **API Management Control Center** dashboard, navigate to Design > API Definitions, then click the desired API definition from the list.

2. Click an existing endpoint on the **Endpoints** page. 

3. Click **Call Transformations** in the left-hand menu.

4. On the Call Transformations page, specify the following information in these fields: 

   - **Processing Adapter:** com.mashery.proxy.customer.generic.ipwhitelist.processorV2

   - **Perform Pre-Processing:** Enabled

   - **Data to make available for pre-processing**

      |**Data** |**Example** |**Notes** |
      | ---- | ---- | --- |
      |whitelisted\_ip\_range: ``<comma separated IP ranges>``|whitelisted\_ip\_range: 123.45.67.0-123.45.67.128|Optional. |
      |whitelisted\_ip\_list: ``<comma separated value of IPs, CIDR format IPs>``|whitelisted\_ip\_list: 123.45.67.0, 123.45.67.1, 123.45.67.128|Optional. |
      |keep\_client\_ip\_as\_source: ``<true or false>``|keep\_client\_ip\_as\_source: false|<p>Optional. </p><p>When set 'true' this flag overrides default behavior to pick IP address of intermediaries like proxy server that is closest to API Management stack. </p>|

