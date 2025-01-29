import OperationEnd from './_operationEnd.md'

import TrackingDir from './_TrackObject.md'

import ReturnErrRes from './_ReturnResponse.md'


# Great Plains operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-23302457-d6c7-4c91-8c53-9ead62ca18c4"/>
</head>


The Great Plains operation defines how to interact with your Great Plains data and represents a specific action \(Query and Upsert\) to perform against a specific Great Plains record type or object \(Customers, Sales Transactions, Purchase Orders, and so on\).

Not all actions are available for every object. Create a separate operation component for each action and object combination required for your integration.

The Great Plains operation supports two types of actions:

-   Get \(Query\) — Used to retrieve data from Great Plains.

-   Send \(Upsert\) — Used to send data to Great Plains.


:::note

 Use the Great Plains connector with Microsoft Great Plains 9.x and 10.x only. If you are using Microsoft Dynamics GP 2010 or 2013, use the Microsoft Dynamics GP connector instead.
 
:::
## **Options** tab 

Click **Import Operation**, then use the Import wizard to select the object you want to integrate. The following table describes the default field definitions for each action type:



<TrackingDir />

**Request Profile** \(Upsert only\)  
 Auto-generated XML profile for the request message.

<ReturnErrRes />

<OperationEnd />