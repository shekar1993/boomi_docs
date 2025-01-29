import OperationEnd from './_operationEnd.md'
import TrackingDir from './_TrackObject.md'
import ReturnErrRes from './_ReturnResponse.md'

# Radius by Campus Management operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-60f70fbb-2f99-4771-9f11-28e2dfcc4ebd"/>
</head>


The Radius by Campus Management operation \(formerly, Hobsons Radius\) defines how to interact with the Radius by Campus Management service and represents a specific action \(Query, Create, etc.\) to perform against a specific Radius by Campus Management service and object type \(Appointment, Contact, Invoice, etc.\).

You must create a separate operation component for each object required for your integration.

The operation supports the following actions:

-   Inbound

    -   Get

    -   Query — Returns zero to many documents from a single Query request based on zero or more filters. After selecting the Query connector action and using the Import Wizard, you can select fields and add query filters. The bottom half of the Operation component page contains tabs on which you can configure these options. See the linked topic about the Operation component’s query definition tabs.

    -   Execute — Provides the ability to create a single query filter by combining the OR operator with the AND filters created from individual documents. Each input document is considered a group of attributes that are combined using the AND operator. You can specify a relation operator for each attribute using one of these values: contains \(default\), equals, startswith, endswith.

-   Outbound

    -   Create

    -   Delete

    -   Update

    -   Upsert


## Options tab 

Click **Import Operation**, then use the Import wizard to select the object with which you want to integrate. The following table describes the default field definitions for each action type:



<TrackingDir />

**Request Profile** \(Create, Delete, Update, Upsert only\)  
  The XML profile definition that represents the XML structure that is being sent by the connector.

**Response Profile** \(Get, Query, Create, Update, Upsert only\)  
 The XML profile definition that represents the XML structure that is being received by the connector.

<ReturnErrRes />

**Max Results** \(Query only\)  
 Sets the maximum number of records to retrieve per batch. Use 0 or -1 \(the default\) for unlimited returns; use numbers greater than zero to set maximum limits.

<OperationEnd />