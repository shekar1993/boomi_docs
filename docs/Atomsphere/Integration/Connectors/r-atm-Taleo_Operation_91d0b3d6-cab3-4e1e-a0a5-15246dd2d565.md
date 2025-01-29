import ReturnErrRes from './_ReturnResponse.md'
import OperationEnd from './_operationEnd.md'
import TrackingDir from './_TrackObject.md'

# Taleo operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-91d0b3d6-cab3-4e1e-a0a5-15246dd2d565"/>
</head>


The Taleo operation defines how to interact with your Taleo account instance and represents a specific action \(Query, Create, etc.\) to be performed against a specific Taleo object type \(Requisition, Candidate, Employee, etc.\).

Not all objects are available for each action. Create a separate operation component for each action/object combination required for your integration.

The Taleo operation supports the following actions:

-   Inbound: Get, Query

    You can configure the Taleo operation’s inbound actions to retrieve document records from a Taleo account. Unique parameters are required at run-time to request data for all inbound operations. To understand how to statically or dynamically define values in a process for run-time, review the topic about parameter values.

-   Outbound: Create, Update, Upsert, Delete

    You can configure the Taleo operation’s outbound actions to send data to a Taleo account. For all outbound operations, send request XML data into the connector that corresponds with the defined XML profile. Most often, request documents are the destination output of a map. However, you can also set parameters on the outbound connector's Parameter tab within the process to supply static or dynamic request values.


:::note 

Contact your Taleo representative to learn more about the API requirements for Taleo and how to access resources in the Taleo user community for field definitions.

:::

## Options tab 

Click **Import Operation**, then use the Import wizard to select the object with which you want to integrate. The following table describes the default field definitions for each action type:



<TrackingDir />


**Request Profile** \(Create, Delete, Update, Upsert only\)  
 The XML profile definition that represents the XML structure that is being sent by the connector.


<ReturnErrRes />

## Get 

Get is an inbound action that requires a single internal ID for the object record you want to retrieve. You can retrieve more Taleo object types using the Get action than with the Query action. Supplying one internal ID returns one object record document. To retrieve records dynamically with a Get ID, use a Query action to retrieve a list of IDs, then use that as a dynamic input parameter for the Get action.

If the Get action requires more than a single input parameter, the parameters are supplied in a specific order separated by a pipe symbol "\|" \(for example, CandidateRequisition GET\).

## Query

Query is an inbound action that returns zero to many documents for a single Query request. Query requests require static or dynamic request parameters \(filters\) to control the object records selected in Taleo. After selecting the Query connector action and using the Import Wizard, you can add these query filters:

-   Equals or Contains — The specified string is anywhere in the field value \(contains\) for text fields or equal to for other fields.
-   Greater Than or Equal — A record's field value is greater than or equal to the specified filter parameter value.

-   Less Than or Equal — A record's field value is less than or equal to the specified filter parameter value.

-   Between — A record's field value is between two specified filter parameter values.


## Create 

Create is an outbound action that creates new records in the Taleo object defined in the Create operation. The internal ID field is generated automatically per each document sent to the operation. Upon successful record creation, the operation automatically returns an XML response with the newly-generated internal ID, creation date, etc.

## Update 

Update is an outbound action that updates existing records in the Taleo object defined in the Update operation. Supply the internal ID field in the request to update the existing object record. If the internal ID is not readily available in your source data, consider using a connector call function to query data based on a value \(Example: Candidate - Last Name\).

Populate all object fields in the request to ensure that the record data is maintained. If you do not include all data in the request, then populated fields in Taleo are overwritten with `<BLANK>`. A common workaround is to perform a Get or Query action to retrieve all object/record fields then map them directly back to the final Update request.

## Upsert 

Upsert is an outbound action that provides a convenient way to do common insert-new-or-update-existing integrations. Instead of doing a lookup against Taleo, the destination system, to determine if a given record exists and then performing separate insert/update mapped requests accordingly, set up one action to perform an Upsert request and let Taleo determine whether it does an Insert or Update.

Refer to the [Taleo API Guide](http://www.taleo.com/solutions/taleo-business-edition-web-integration-api) to determine the requirements for making these specific requests.

## Delete 

Delete is an outbound action that deletes an existing record from the Taleo object defined in the delete operation. You must supply the internal ID field in the request to delete the existing object record. If this internal ID is not readily available in your source data, consider using a Connector Call function to Query data based on another record value.

:::note 

If the Delete action requires more than a single input parameter, the parameters are supplied in a specific order separated by a Pipe symbol "\|" \(for example: CandidateRequisition DELETE\). Refer to the [Taleo API Guide](http://www.taleo.com/solutions/taleo-business-edition-web-integration-api) to determine the field order of the request.

:::

<OperationEnd />