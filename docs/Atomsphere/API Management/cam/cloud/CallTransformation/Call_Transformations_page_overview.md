---
sidebar_position: 2
---

# Call Transformations Page Overview

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-45b3876a-43db-46f1-b389-8bdc7e3788e8"/>
</head>

To view the **Call Transformations** page, click on the name of an existing endpoint on the **Endpoints** page (**API Definitions > Endpoints**).

The following table describes the fields on the **Call Transformations** page for an endpoint. Note that when enabling call transformation for an endpoint for the first time, the fields and options are slightly different, depending on if you select **Manual entry** or **TIBCO Cloud Mesh Service (default)** in the **Select a Call Transformation Processor Type** field.

|**Field**|**Description**|
| ------ | ------- |
|**Select a Call Transformation Processor Type**|**Select TIBCO Cloud Mesh Service (default) to apply a Call Transformation Processor, or select Manual entry to manually provide details.**|
|Processing Adapter|Class file of custom logic that the Traffic Manager uses to perform pre- or post-processing of an API call.|
|Perform Pre-processing|<p>Configures the Traffic Manager to process the API request before it is sent to the client API server. </p><p>When enabled, the Traffic Manager is configured to apply custom processing logic to an API call before the request is sent to the client API servers.</p>|
|Data to make available for pre-processing|Configures the Traffic Manager to add new values or modify the existing values within the incoming API call before passing it to the client API servers.|
|Select a Service|Browse available applications to be used as a Call Transformation Processor.|
|Stop of Error|When enabled, stops the call transformation if an error occurs.|
|Timeout|<p>The amount of seconds to wait for a response from the Call Transformation Processor. If no response is received within the defined timeout, an error will be thrown to the client and the request will not be routed to the defined back-end API.</p><p>:::note</p><p>The total timeout values defined (the sum of the values for both pre- and post-processing configuration) for the Call Transformation Processor should not exceed the timeout defined at the API Endpoint level.</p><p>:::</p>|
|API Request Elements|Select which elements from the API request should be forwarded to the Call Transformation Processor.|
|Pre-Processing Extended Attribute Value data|<p>Use the **Configure EAVs** link to define the Extended Attribute Values to add to the API Request:</p><p>- **Application fields** - data related to Applications</p><p>- **Member fields** - data related to registered Users</p><p>- **Plan fields** - data related to Plans</p><p>- **Package fields** - data related to Packages</p><p>- **Package key fields** - data related to the Package Key used for requesting the API</p>|
|Perform Post-processing|<p>Configures the Traffic Manager to process the API call before it is sent to the client API server.</p><p>When enabled, the Traffic Manager is configured to apply custom processing logic to the response received from the client API servers.</p>|
|Post-Processing Extended Attribute Value data   |<p>Use the **Configure EAVs** link to define the Extended Attribute Values to add to the API Response:</p><p>- **Application fields** - data related to Applications</p><p>- **Member fields** - data related to registered Users</p><p>- **Plan fields** - data related to Plans</p><p>- **Package fields** - data related to Packages</p><p>- **Package key fields** - data related to the Package Key used for requesting the API</p>|
|Select a Service|Browse available applications to be used as a Call Transformation Processor.|
|Timeout|The amount of seconds to wait for a response from the Call Transformation Processor. If no response is received within the defined timeout, the Call Transformation Processor will be bypassed, and the request will be routed to the defined back-end API.|
|API Request Elements|Select which elements from the API request should be forwarded to the Call Transformation Processor.|
|Pre-Processing Extended Attribute Value data|<p>Use the **Configure EAVs** link to define the Extended Attribute Values to add to the API Request:</p><p>- **Application fields** - data related to Applications</p><p>- **Member fields** - data related to registered Users</p><p>- **Plan fields** - data related to Plans</p><p>- **Package fields** - data related to Packages</p><p>- **Package key fields** - data related to the Package Key used for requesting the API</p>|
|Data to make available for post-processing|Configures the Traffic Manager to add new values or modify the existing values within the incoming API request before passing it to the consumer.|

