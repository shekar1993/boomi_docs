# Boomi Master Data Hub (legacy) operation

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-71101945-2dc4-47b3-ad0e-df45536be9e8"/>
</head>

The Boomi Master Data Hub (legacy) operation defines how to interact with the Hub.

:::info

This connector is available only for existing integrations. For new integrations, use the [Boomi DataHub connector](docs/Atomsphere/Integration/Connectors/int-Boomi_Data_Hub_connector.md), which offers more operations and an improved experience.

:::

The operation represents a specific action — Get, Query, Delete (end-date) or Upsert — to perform against a specific golden record. You must create a separate operation component for each action and object combination required for your integration. Not all actions are available for every object.

The reusability of Boomi Master Data Hub operation components is limited in that each is bound to a particular version of a model hosted by a specific repository.

## Options tab 

Standard Get fields. For inbound action types the default field definitions are as follows:



**Connector Action** - 
  Action specified in the **Import Wizard**.

**Object** - 
 The Boomi DataHub domain, selected in the **Import Wizard**, is attached to the target **Source** system.

**Tracking Direction** - 

Select the document tracking direction for the operation, either **Input Documents** or **Output Documents**. This setting enables you to choose which document appears in **Process Reporting. Start** steps always track output documents regardless of your selection.

:::note

If the tracking direction is read-only, the feature to change the direction is either unavailable or the developer set the configuration to read-only. The default value you see shows you which document appears in **Process Reporting**.

:::

**Return Application Error Responses** - 
 This setting controls whether an application error prevents an operation from completing:

 -   If cleared, the process stops and reports the error on the **Process Reporting** page.
 -   If selected, processing continues and passes the error response to the next component processed as the connection output.


**Source** - 
 Unique ID specified for the target source system in the domain configuration in Boomi DataHub.

 You must specify the target source system for a Query action. For a Get action, if you do not specify a target source system, it interprets the ID parameter passed to the connector as the ID of the golden record to retrieve. Otherwise, it interprets the ID parameter as the source entity ID of the linked golden record to retrieve.

**Manually Acknowledge** - 
 (Query action only) If selected, it enables manual acknowledgment of the delivery of batches of source record update requests. This setting is off by default.

**Fetch Single Update Request** - 
 (Query action only) If selected and you also select **Manually Acknowledge**, it limits deliveries to one source record update request for each successful operation.

Standard Send Fields. For outbound actions the default field definitions are as follows:


  

**Connector Action** - 
 Action specified in the **Import Wizard**.

**Object** - 
 The domain, selected in the **Import Wizard**, is attached to the contributing **Source** system.

**Request Profile** - 
  Select or add an XML profile component that represents the structure sent by the connector.

**Source** - 
  Unique ID specified for the contributing source system in the domain configuration in .

**Staging Area ID** - 
 \(Batch staging operations only\) Unique ID specified for the destination staging area in the attachment configuration for the contributing source system. Leave this field blank if you configure an operation for ordinary batch submission.

