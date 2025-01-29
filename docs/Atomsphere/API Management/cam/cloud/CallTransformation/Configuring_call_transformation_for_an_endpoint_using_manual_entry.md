---
sidebar_position: 4
---

# Configuring Call Transformation for an Endpoint using Manual Entry

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-cc2cfe97-d9ca-439b-a4c4-15caee40a21f"/>
</head>

To configure Call Transformation (Pre-processing, post-processing, or both) for an endpoint using **Manual entry**, follow the steps below.

## Procedure

1. From API Management Control Center, go to **API Definitions > Endpoints**.

2. Click on the name of an existing endpoint, the select **Call Transformations** from the left-hand navigation menu to open the **Call Transformations** page.

3. In the **Select a Call Transformation Processor Type** field, select **Manual entry**.

4. The Processing Adapter will be used by the Traffic Manager to perform the pre- or post-processing of an API. The **Processing Adapter** field must be specified by an API Management Engineer. 

   a. Configure pre-processing for the Call Transformation Processor.

      - In the **Perform Pre-processing** field, select **Enabled**.

      - The **Data to make available for pre-processing** configures the Traffic Manager to add new values or modify the existing values within the incoming API call before passing it to the client API servers. This field must be changed by an API Management Engineer.

   b. Configure post-processing for the Call Transformation Processor.

      - In the **Perform Post-processing** field, select **Enabled**.

      - The **Data to make available for pre-processing** configures the Traffic Manager to add new values or modify the existing values within the incoming API call before passing it to the client API servers. This field must be changed by an API Management Engineer.

5. Click **Save**.
