---
sidebar_position: 3
---

# Configuring Call Transformation for an Endpoint using TIBCO Cloud Mesh Service

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-29361f6a-8a6a-48de-bb7a-f8814762d644"/>
</head>

To configure Call Transformation (Pre-processing, post-processing, or both) for an endpoint using TIBCO Cloud Mesh Service, perform the following steps:

## Procedure

1. From API Management Control Center, go to **API Definitions > Endpoints**.

2. Click on the name of an existing endpoint, the select **Call Transformations** from the left-hand navigation menu to open the **Call Transformations** page.

3. In the **Select a Call Transformation Processor Type** field, select **TIBCO Cloud Mesh Service**. This is the default option.

4. Configure pre-processing for the Call Transformation processor.

   a. In the **Perform Pre-processing** field, select **Enabled**.

   b. In the **Select a service** field, click **Browse available services**. Select an available service from Boomi Cloud Mesh.

   c. Specify the desired resource from the list, then click **Select**.

      The service is now added as the pre-processing Call Transformation Processor.

   d. In the **Stop on Error field**, select **Enabled** to stop call transformation if an error occurs.

   e. In the **Timeout** field, specify the number of seconds to wait for a response from the Call Transformation Processor. If no response is received within the defined timeout, the Call Transformation Processor will be bypassed, and the request will be routed to the defined back-end API.

      :::note
      
      The total timeout values defined (the sum of the values for both pre- and post- processing configuration) for the Call Transformation Processor should not exceed the timeout defined at the API Endpoint level.

      :::

   f. In the **API Request Elements** field, select which elements from the API request should be forwarded to the Call Transformation Processor.

   g. In the **Pre-Processing Extended Attribute Value Data** field, use the **Configure EAVs** link to define the Extended Attribute Values to add to the API Request:

      - **Application fields** - data related to Applications

         Supported fields: name, external\_id

      - **Member fields** - data related to registered Users

         Supported fields: name, email, external\_id

      - **Plan fields** - data related to Plans

         Supported fields: name, qps\_limit\_ceiling, qps\_limit\_exempt, rate\_limit\_ceiling, rate\_limit\_period, rate\_limit\_exempt, key\_qps\_limit\_ceiling, key\_qps\_limit\_exempt, key\_rate\_limit\_ceiling, key\_rate\_limit\_period, key\_rate\_limit\_exempt, effective\_qps\_limit\_ceiling, effective\_qps\_limit\_exempt, effective\_rate\_limit\_ceiling, effective\_rate\_limit\_period, effective\_rate\_limit\_exempt

      - **Package fields** - data related to Packages

         Supported field: name

      - **Package key fields** - data related to the Package Key used for requesting the API

         Supported fields: mapi, key\_qps\_limit\_ceiling, key\_qps\_limit\_exempt, key\_rate\_limit\_ceiling, key\_rate\_limit\_period, key\_rate\_limit\_exempt

:::note

In addition to these default EAVs, you can also configure custom EAVs. Refer to the tooltips for each of the field types for more information on how to configure custom EAVs.

:::

5. Configure post-processing for the Call Transformation Processor.

   a. In the **Perform Post-processing** field, select **Enabled**.

   b. In the **Select a service field**, click **Browse available services**. 

      Select an available service from Boomi Cloud Mesh.

   c. Specify the desired resource from the list, then click **Select.**

      The service is now added as the post-processing Call Transformation Processor.

   d. In the **Timeout** field, specify the number of seconds to wait for a response from the Call Transformation Processor. If no response is received within the defined timeout, the Call Transformation Processor will be bypassed, and the request will be routed to the defined back-end API.

      :::note
      
      The total timeout values defined (the sum of the values for both pre- and post-processing configuration) for the Call Transformation Processor should not exceed the timeout defined at the API Endpoint level.

      :::

   e. In the **API Request Elements** field, select which elements from the API request should be forwarded to the Call Transformation Processor.

   f. In the **Pre-Processing Extended Attribute Value Data field**, use the **Configure EAVs** link to define the Extended Attribute Values to add to the API Request:
      
      - **Application fields** - data related to Applications

         Supported fields: name, external\_id

      - **Member fields** - data related to registered Users

         Supported fields: name, email, external\_id

      - **Plan fields** - data related to Plans

         Supported fields: name, qps\_limit\_ceiling, qps\_limit\_exempt, rate\_limit\_ceiling, rate\_limit\_period, rate\_limit\_exempt, key\_qps\_limit\_ceiling, key\_qps\_limit\_exempt, key\_rate\_limit\_ceiling, key\_rate\_limit\_period, key\_rate\_limit\_exempt, effective\_qps\_limit\_ceiling, effective\_qps\_limit\_exempt, effective\_rate\_limit\_ceiling, effective\_rate\_limit\_period, effective\_rate\_limit\_exempt

      - Package fields - data related to Packages

         Supported field: name

      - Package key fields - data related to the Package Key used for requesting the API

         Supported fields: mapi, key\_qps\_limit\_ceiling, key\_qps\_limit\_exempt, key\_rate\_limit\_ceiling, key\_rate\_limit\_period, key\_rate\_limit\_exempt

:::note

In addition to these default EAVs, you can also configure custom EAVs. Refer to the tooltips for each of the field types for more information on how to configure custom EAVs.

:::

6. Click **Save**.
