import OperationEnd from './_operationEnd.md'
import TrackingDir from './_TrackObject.md'
import ReturnErrRes from './_ReturnResponse.md'

# RightNow – Partner operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-22947a73-6001-49e7-af02-02676e42278e"/>
</head>


The RightNow – Partner operation defines how to interact with your RightNow CRM account.

For all inbound operations, unique parameters are required at run-time to request data. Outbound operations send request XML data to the connector that corresponds to the defined XML profile. Usually, request documents are the destination output of a map. Review the topic Parameter values to understand how to define these values statically or dynamically within a process for run-time.

## Get 

For this inbound action, supply a single internal ID for the object record you want to retrieve. Supplying one internal ID returns one object record document. To retrieve records dynamically with a Get ID, perform a Query action to retrieve a list of IDs that you can use as a dynamic input parameter for the Get action.

## Query 

For this inbound action, supply static or dynamic request parameters \(filters\) to control the object records selected from RightNow. A single Query request returns zero or more object record documents. After selecting the Query connector action and using the Import wizard, you can add query filters.

:::note

Your custom report may display only a limited set of output fields even though the Query action returns all available fields within the selected object based on the filters defined in the report.

:::

## Create 

This outbound action creates new records in the RightNow object defined in the Create operation. The internal ID field is generated automatically for each document sent to the operation. When the record is successfully created, the operation automatically returns an XML response with the newly-generated internal ID, creation date, etc.

## Delete 

This outbound action removes the existing record in the RightNow object defined in the delete operation. To delete the existing object record, supply the internal ID field in the request. When the record is successfully deleted, the operation automatically returns an XML response with the internal ID. If this internal ID is not available in your source data, you can use a connector call function to query data based on a report value such as Name.

## Execute 

This outbound action is used for all other procedural API calls.

## Update 

This outbound action updates existing records in the RightNow object defined in the Update operation. To update the existing object record, supply the internal ID field in the request. When the record is successfully updated, the operation automatically returns an XML response with the internal ID, updated date, etc. If this internal ID is not available in your source data, you can use a connector call function to query data based on a report value such as Name.

## Options tab 

The custom object acts as a workflow stage. In each stage, a list of fields needs to be tracked. A series of Visualforce pages read the workflow stages from the custom object and dynamically render the required fields on the fly. The Visualforce pages act as a wizard that guides you through the steps in the business flow.

Click **Import Operation**, then use the Import wizard to select the object with which you want to integrate. The following table describes the default field definitions for each action type:

<TrackingDir />

<ReturnErrRes />

**Report ID** \(Query\) - 
  The report ID in the RightNow service.

**Is Custom Object** \(Execute\) - 
  If selected, signifies the object used in the GetFileData operation is a custom object.

**Package Name** \(Execute\) - 
 Used to identify the package name of a custom object. Leave blank for standard objects for GetFileData operation.

**Object Name** \(Execute\) - 
 Displays the object type selected in the Import Wizard. This is the Oracle package and procedure name for the PL/SQL stored procedure.

**Include List** \(Get\) - 
  If selected, list objects are included in the response.

<OperationEnd />