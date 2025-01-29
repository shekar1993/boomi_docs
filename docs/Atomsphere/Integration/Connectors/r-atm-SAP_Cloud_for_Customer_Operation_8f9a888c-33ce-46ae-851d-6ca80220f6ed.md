import TrackingDir from './_TrackObject.md'
import ReturnErrRes from './_ReturnResponse.md'
import RequestProfile from './_RequestProfile.md'
import ResponseProfile from './_ResponseProfile.md'
import OperationEnd from './_operationEnd.md'
import TrackingDirection from './_TrackingDirection.md'
import ReqRes from './_ReqRes.md'

# SAP Business ByDesign operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-8f9a888c-33ce-46ae-851d-6ca80220f6ed"/>
</head>


The SAP Business ByDesign operation defines how to interact with the SAP application.

Each connector action corresponds to a SAP Business ByDesign service. The connector operation supports the following actions that are conducted through SOAP-based web services:

-   Inbound

    -   Get works the same as SAP’s Query service except that you query by ID. For more information, see the SAP Business ByDesign operation’s inbound actions topic.

    -   Query works the same as SAP’s Query service.

-   Outbound

    -   Create works the same as SAP’s Create operation in Manage service.

    -   Delete works the same as SAP’s Delete and Remove operations in Manage service.

    -   Update works the same as SAP's Update operation in Manage service and also provides No\_Action operations.

    -   Upsert works the same as SAP’s Save operation in Manage service.

    -   Execute is used for custom services.


After selecting a connector action, select an object with which to interact. The object is always a root object \(an SAP “node element”\). Each object corresponds to a method on a WSDL. The Import Wizard makes it easy to browse the objects available in SAP Business ByDesign. The wizard generates the request and response XML profiles for the object. You need to create a separate operation for each service/object combination required for your integration.

See the SAP Business ByDesign operation’s inbound and outbound actions topics linked below for more information about each action.

## Options tab 

Click **Import Operation**, then use the Import wizard to select the object with which you want to integrate. The following table describes the default field definitions for each action type:



**Connector Action** - 
 Used to select an action, which corresponds to an SAP Business ByDesign service.

<TrackingDir />

<ReqRes />

<ReturnErrRes />

**Batch Size** \(Create, Delete, Update, Upsert only\)  
  Used to set the number of records per batch to send to SAP Business ByDesign. The default is 0, which sends the maximum number of records.

**Do Remove** \(Delete only\)  
  When selected, Do Remove is like the SAP “Remove” operation. The system does not return an error message if the object does not exist.

**Query Page Size** \(Query only\)  
  Used to set the number of results to return per page. The default is 0, which returns all results.

**No Action** \(Update only\)  
 When selected, the Update action is like the SAP “No\_Action” operation. Update does not modify the root object. Select No Action when you want to modify child objects but not their root object.

<OperationEnd />