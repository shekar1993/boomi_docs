import RequestProfile from './_RequestProfile.md'
import ResponseProfile from './_ResponseProfile.md'
import OperationEnd from './_operationEnd.md'
import TrackingDirection from './_TrackingDirection.md'
import ReturnErrRes from './_ReturnResponse.md'
import ReqRes from './_ReqRes.md'
import TrackingDir from './_TrackObject.md'

# ServiceNow REST operation

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-4d74d6eb-83f1-4921-8d27-813b35ac7843"/>
</head>


The ServiceNow REST operation defines how to interact with your ServiceNow account and represents a specific action to perform against a specific ServiceNow record type or object.

A record type or object can be a project, an account, a resource, etc. Create a separate operation component for each action/object combination that your integration requires.

The ServiceNow REST operations use JSON format for the request and response profiles, and support the following actions:

-   Get — retrieve a record from ServiceNow.

-   Create — create and insert a record in ServiceNow.

-   Update — update a record in ServiceNow.

-   Delete — remove and delete a record from ServiceNow.

-   Query, Advanced Query — look up ServiceNow records based on specific search criteria.


**Note:** If you receive an error when attempting to import a ServiceNow object \(such as a 403 Forbidden authentication error\), verify with ServiceNow which account permissions and roles you need. Read access to the sys\_db\_object system table may provide the required access.

## Options tab 

Click **Import Operation**, then use the Import wizard to select the object to integrate. The wizard imports the request and response profiles for the selected action. When you configure an action, the following fields appear on the Options tab:




**Object** - 
 Displays the object type that you selected in the Import Wizard.

<TrackingDirection />

<RequestProfile />

<ResponseProfile />

<ReturnErrRes />

## Get 

Get is an inbound action to retrieve a record \(for example, a company or incident record\) from a ServiceNow database table based on the ID \(sys\_id\) of the record from the specified table. When using Get, use the Import Wizard to browse your object definitions in real time to get any fields you have defined. After specifying the criteria, select the record to retrieve from the database. When successful, the connector retrieves information for the selected record. For example, information for a retrieved incident record includes category, cause, due date, impact, severity, and more.

## Create 

Create is an outbound action to create and insert a record \(for example, a problem record\) into a ServiceNow database table. When using Create, use the Import Wizard to browse your object definitions in real time to get any fields you have defined. After specifying the criteria, select the record to insert into the database. When successful, the connector inserts the record. For example, information for an inserted problem record includes who the record is assigned to, a description of the problem, due date, and more.

## Update 

Update is an outbound action to update an existing record \(for example, a problem record\) in a ServiceNow database table based on the ID \(sys\_id\) of the record from the specified table. When using Update, use the Import Wizard to browse your object definitions in real time to get any fields you have defined. Add specifying the criteria, select the record to update in the database. When successful, the connector updates the record. For example, information for an updated problem record includes work notes, the amount of time the problem was worked on, related incidents, and more.

## Delete 

Delete is an outbound action to remove and delete a record \(for example, a problem record\) from a ServiceNow database table. The ID \(sys\_id\) for the record to delete is required in the request profile.

When successful, the action deletes the selected record. No JSON document is returned.

## Query 

Query is an outbound operation to look up ServiceNow records \(for example, a problem record\) based on specific search criteria. Query returns zero-to-many object records from a single Query request based on zero or more filters. After you select the Query action and use the Import Wizard, the operation component page contains configuration options to select the fields to return, add filters to limit the results, and select sorting options.

The Import Wizard builds the object list. After you select an object, the Wizard logs into ServiceNow and creates an object tree. The Fields tab displays all of the fields for the selected table. You can select specific fields for a query, and you can also refine the query by clicking the Filters tab and define multiple expressions and group them into logical sub-groups \(up to 3\) to create sophisticated query logic. For example, you can query the problem table and use the AND and OR logical operators to look up problem records for when the assigned\_to field is empty, the active field is true, and the approval field is not requested. The operator at the logical group level defines how the multiple expressions and/or logical sub-groups with that logical group are evaluated. If you perform a Query operation without defining any filters, the operation returns all of the records in the selected table. You can sort the results of a query by specifying the field values on the Sorts tab. You can sort fields in an ascending or descending order.

## Advanced Query 

Advanced Query is an outbound operation to look up ServiceNow records \(for example, a problem record\) based on specific search criteria. Advanced Query returns zero-to-many records from a single request based on a single, simple expression. After you select the Advanced Query action and use the Import Wizard, you can select the fields to look up and return in the response and add a simple query filter expression. The bottom half of the Operation component page contains tabs on which you configure these options. If you do not select any fields to be returned by the query, the connector returns all fields. Advanced Query returns JSON documents, supports an "is" filter, and allows you to sort the results with the query expression.

Advanced Query supports a single filter \(\_query\_string\) that is used internally and is mapped to the sysparm\_query parameter to filter the query results. Do not add any other parameters, such as sysparm\_offset and sysparm\_limit, into the query string. Advanced Query correctly paginates the results and returns all records matching the criteria.

<OperationEnd />