# Events

<head>
  <meta name="guidename" content="Boomi for SAP"/>
  <meta name="context" content="GUID-84b63f92-30dc-4af3-ba54-9c544b30331b"/>
</head>

The Event feature allows users to create subscriptions for Business Object events and Change Pointers in SAP.
The Events feature offers a range of potential use cases. For example, 

- **Subscribing to a Business Object Event:** Identify the data object you want to associate the events with. The business objects must be related to either change pointer events or business events.
- **Identify event and subscribe:** Choose the relevant event for the business object (Created, Changed, Deleted) or select the appropriate changepointer.
- **Defining the Subscription Type:** Specify whether the event includes payload, metadata, or an event. If the event includes a payload, you must select a table service. Also, specify if this subscription is for batch processing or real-time processing. In other words, will this information be sent whenever events are generated from SAP using the normal event framework, or will it initiate the transfer of events whenever they occurs? 

:::note 
Real-time subscription is not possible for Change Pointers.
:::

- **Defining the Receiver Type:** Starting from release 1.6.0, the Receiver Framework lets you send events exactly where you want, in any desired format. 
- **Specifying the Topic:** Define the topic that needs to be sent as a path (such as Solace or Boomi). The topic can include both static and dynamic fields, where the topic can be written in the UI or associated with fields in the payload structure, if available. 

### Accessing Events

To access the Boomi for SAP UI, navigate to the **Events** tab under the **CREATE** section. Clicking on this tab will take you to the canvas of our event creation site. Here you have two primary options to select from: 'Business Objects' or 'Change Pointers'.

### Prerequisites

Before proceeding, ensure that you meet the following prerequisites:

- Workflow user - To send events from SAP, the Workflow batch user must be created and active. Typically, this user is named WF-batch.
- Additionally, the RFC Destination needs to be configured.

