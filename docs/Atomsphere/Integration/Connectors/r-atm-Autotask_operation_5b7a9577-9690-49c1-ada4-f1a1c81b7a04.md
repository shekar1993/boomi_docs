import TrackingDir from './_TrackObject.md'
import ReturnErrRes from './_ReturnResponse.md'
import OperationEnd from './_operationEnd.md'

# Autotask operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-5b7a9577-9690-49c1-ada4-f1a1c81b7a04"/>
</head>


The Autotask operation defines how to interact with your Autotask account, and represents a specific action \(Query, Create and so on.\) to be performed against a specific Autotask object \(such as Contract, Account, and Invoice\).

You must create a separate operation component for each action and object combination required for your integration.

## **Options** tab 

Click **Import Operation**, then use the Import wizard to select the object with which you want to integrate. The following table describes the default field definitions for each action type:
 


<TrackingDir />

**Request Profile** \(Create and Update\)  
The XML profile definition that represents the XML structure sent to the connector.

After selecting the Query connector action and using the **Import Wizard**, you can add query filters.

<ReturnErrRes />

<OperationEnd />
