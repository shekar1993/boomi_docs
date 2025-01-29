import OperationEnd from './_operationEnd.md'

import TrackingDir from './_TrackObject.md'

import ReturnErrRes from './_ReturnResponse.md'

# Boomi AtomSphere API operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-4ef477d8-0cd5-4909-873f-09d1841e9e42"/>
</head>


The Boomi AtomSphere API operation defines how to interact with and represents a specific action \(Get, Query, Create, Update, Delete, Execute\) performed against a specific object \(such as Account, Role, and Deployment\).

For all inbound operations require statically- or dynamically-defined unique parameters at run-time to request data. The actions available in this connector are the same as those in the Boomi AtomSphere API. For all outbound operations, send request XML data to the connector that corresponds with the defined XML profile. You can set parameters on the outbound connector's **Parameter** tab within the process to supply static or dynamic request values.

## Get 

The inbound Get action retrieves a single record from the object defined in the Get operation.

## Query 

The inbound Query action returns zero to many object record documents from a single Query request based on zero or more filters. The bottom half of the operation component window contains configuration options that enable you to add filters to limit the results.

## Create 

The outbound Create action makes new records in the object defined in the Create operation. The internal ID value is generated automatically for each document sent to the operation.

## Delete 

The outbound Delete action deletes an existing record in the object defined in the Delete operation. You must supply the internal ID for the record. If the ID is not readily available in your source data, you can use a Query operation to retrieve data.

## Update 

The outbound Update action updates an existing record in the object defined in the Update operation. You must supply the internal ID for the record. If the ID is not readily available in your source data, you can use a Query operation to retrieve data. Update cannot be performed in bulk — it processes each Update individually.

## **Options** tab 

Click **Import Operation**, then use the Import wizard to select the object with which you want to integrate or the action to run.

**Connector Action** - 
Action selected in the **Import Operation** wizard.

<TrackingDir />

**Request Profile** - 
The XML profile component that represents the XML structure that is being sent by the connector.

**Response Profile** - \(Create, Delete, Execute, Update only\)  
The XML profile component that represents the XML structure received by the connector.

<ReturnErrRes />

<OperationEnd />