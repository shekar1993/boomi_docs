import OperationEnd from './_operationEnd.md'

import TrackingDir from './_TrackObject.md'

import ReturnErrRes from './_ReturnResponse.md'

# Boomi AtomSphere Partner API operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-e5ce2e1d-9036-41c9-9a4d-3629f255b375"/>
</head>


The Boomi AtomSphere Partner API operation defines how to interact with and represents a specific action \(Get, Query, Create, Update, Delete, or Execute\) to be performed against a specific object \(such as Account, Role, Deployment\).

All inbound operations require statically- or dynamically-defined unique parameters at run-time to request data. The actions available in this connector are the same as those in the Boomi AtomSphere API. For all outbound operations, send request XML data to the connector that corresponds with the defined XML profile. You can set parameters on the outbound connector's **Parameter** tab within the process to supply static or dynamic request values.

## Get 

The inbound Get action retrieves a single record from the object defined in the Get operation.

## Query 

The inbound Query action returns zero-to-many object record documents from a single Query request based on zero or more filters. The bottom half of the operation component window contains configuration options that enable you to add filters to limit the results.

## Create 

The outbound Create action makes new records in the object defined in the Create operation. The internal ID value is generated automatically for each document sent to the operation.

## Delete 

The outbound Delete action deletes an existing record in the object defined in the Delete operation. You must supply the internal ID for the record. If the ID is not readily available in your source data, you can use a Query operation to retrieve data.

## **Options** tab 

Click **Import Operation**, then use the Import wizard to select the object with which you want to integrate or the action to run.




**Connector Action** - 
Action selected in the **Import Operation** wizard.

<TrackingDir />

**Response Profile** \(Create, Delete, Execute, Update only\)  
The XML profile component that represents the XML structure received by the connector.

<ReturnErrRes />

**Account ID** - 
he account in which the operation occurs. If this is not set, the operation occurs in the authenticating account specified in the **WSDL URL** in the AtomSphere Partner API connection component with which the operation is paired.


:::note

You can use the `boomiPartnerApi-overrideAccountId` dynamic process property to perform a request against a different account. The override value becomes the effective account in which the call is run. Set the property value in a **Set Properties** step, and then specify the property name in the **Account ID** field.

:::

<OperationEnd />