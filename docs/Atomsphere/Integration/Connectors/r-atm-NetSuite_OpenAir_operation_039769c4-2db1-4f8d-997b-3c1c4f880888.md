import OperationEnd from './_operationEnd.md'
import TrackingDir from './_TrackObject.md'
import ReturnErrRes from './_ReturnResponse.md'

# NetSuite OpenAir operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-039769c4-2db1-4f8d-997b-3c1c4f880888"/>
</head>


The NetSuite OpenAir operation defines how to interact with your NetSuite OpenAir instance.

The operation represents a specific action \(Create, Delete, Get, and so on\) performed against a specific NetSuite OpenAir object \(such as Project, Time Sheet, Proposal\). Not all actions are available for every object. Create a separate operation component for each action and object combination required for your integration.

The NetSuite OpenAir operation supports the following actions:

-   Inbound

    -   Get: looks up data based on a single internal ID for the NetSuite OpenAir object that you want to retrieve. The Get action retrieves a single record from the NetSuite OpenAir object defined in the Get operation. The bottom half of the operation component page contains configuration options to choose the fields to return.

    -   Query: looks up object records based on specific search criteria. Supply static or dynamic request parameters \(filters\) to control the selected object records. A single Query request can return zero or more object record documents. After selecting the Queryconnector action and using the **Import Wizard**, choose the fields to return and add filters to limit the results. Filters have four operators: Equal To, Not Equal To, Newer Than and Older Than \(for date fields\).

-   Outbound

    -   Create

    -   Delete

    -   Update


## Options tab 

Click **Import Operation**, then use the Import wizard to select the object with which you want to integrate. The following table describes the default field definitions for each action type:


  

<TrackingDir />

**Request Profile** \(Create, Delete, Update only\)  
  The XML profile definition that represents the XML structure that is being sent by the connector.

**Response Profile** \(Create, Get, Query, and Update only\)  
The XML profile definition that represents the XML structure received by the connector.

<ReturnErrRes />

<OperationEnd />