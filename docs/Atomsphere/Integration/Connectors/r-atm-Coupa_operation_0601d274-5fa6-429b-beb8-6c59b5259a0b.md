import OperationEnd from './_operationEnd.md'

import TrackingDir from './_TrackObject.md'

import ReturnErrRes from './_ReturnResponse.md'

# Coupa operation

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-0601d274-5fa6-429b-beb8-6c59b5259a0b"/>
</head>


The Coupa operation defines how to interact with your Coupa account and represents a specific action, such as Search and Create to perform against a specific Coupa record type or object \(Suppliers, Items, Accounts, Users, and so on\).

## **Options** tab 

Not all actions are available for every object. Create a separate operation component for each action and object combination required for your integration.

Click **Import Operation**, then use the Import wizard to select the object with which you want to integrate. The following describes the default field definitions for each action type:




<TrackingDir />

**Request Profile \(Create and Update only\)** - 
The XML profile definition that represents the XML structure sent or received by the connector.

<ReturnErrRes />

**Use advanced query \(Query only\)** - 
 Determine whether or not key and value pairs are provided to the operation as custom filters.

 -   If cleared \(default value\), the connector only uses the standard filters for Query operation.

 -   If selected, a custom properties panel is available to enter a combination of key and value pairs. The connector uses these pairs as additional filters for Query operation.


**Custom Properties \(Query only\)** - 
This panel is visible only when you select **Use advanced query**. Enter the key and value pairs used as additional filters for the Query operation. When you configure the operation with standard query filters, the key and value pairs defined in this panel take precedence.

**Position \(Execute only after selecting object type Add an Approver for an Invoice** - 
 Indicates the position within the approver's chain to add the new approver. The following options are available: **Before Current Approver**, **After Current Approver**, **End of List** and **Watcher**.

**Approver Type \(Execute only after selecting object type Add an Approver for an Invoice** - 
Indicates whether the new approver is a single User or a User Group.

**User ID \(Execute only after selecting object type Add an Approver for an Invoice** - 
Indicates the User ID or the internal ID of the User Group.

**Current Approver ID \(Execute only after selecting object type Add an Approver for an Invoice** - 
 Indicates the User ID of the current approver.

After selecting the connector action and using the **Import Wizard**, you can add query filters.

:::note 

When the Query operation requests data from Coupa, it orders the data by Id. This operation prevents returning the same record by the Coupa API on more than one page.

:::

<OperationEnd />