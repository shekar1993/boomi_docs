import OperationEnd from './_operationEnd.md'
import TrackingDirection from './_TrackingDirection.md'
import ReturnErrRes from './_ReturnResponse.md'


# SugarCRM REST operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-84da8f02-d306-4f99-9b45-aa0bb455925c"/>
</head>


The SugarCRM operation defines how to interact with your SugarCRM account and represents a specific action performed against a specific SugarCRM record type or object.

Create a separate operation component for each action/object combination required for your integration.

The SugarCRM operation supports the following actions for Accounts, Contacts, Leads, Opportunities, and Cases:

-   Inbound: Get, Query

    You can configure the SugarCRM operation to retrieve object records from a SugarCRM account. For all inbound operations, unique parameters are required at runtime to request data. Review the topic about Parameter values to understand how to statically or dynamically define these values in a process for runtime.

-   Outbound: Create, Delete, Update

    You can configure the SugarCRM operation to send data to a SugarCRM account. For all outbound operations, send request JSON data into the connector that corresponds with the defined JSON profile. Usually, request documents are the destination output of a map. However, you can also set parameters on the outbound connector's Parameter tab within the process to supply static or dynamic request values.


## Importing profiles 

You can access custom \(dynamic\) fields that you created by accessing SugarCRM metadata REST endpoints. These endpoints provide module information that the connector uses to dynamically create a JSON schema.

## Custom fields 

You can access custom fields you created in Studio and Module Builder or that you extended in base modules. These fields display with a “\_c” suffix.

## Options tab 

Select a connector action, then use the Import Wizard to select the object with which you want to integrate. The following table describes the field definitions for each action type.

  
 

**Object** - 
  The object selected in the Import Wizard — Accounts, Cases, Contacts, Leads, or Opportunities.

<TrackingDirection />



**Request Profile** - 
 The JSON profile component that represents the JSON structure that is being sent by the connector.

**Response Profile** - 
 The JSON profile component that represents the JSON structure that is being received by the connector.

<ReturnErrRes />

**Maximum Records for Each Batch** - 
  Enter the maximum number of records each batch returns for each Query request. The default is 5000. To return an unlimited number of records, enter -1. If you enter another negative number such as -2, -20, etc. you receive an error when executing the Query operation.

To improve the performance and efficiency of the Query operation, use a higher number of records for each batch. By using larger batches, the connector makes fewer calls to the SugarCRM API. As a result, the time needed to return records decreases and the performance of your process increases.

## Get 

Get is an inbound action that calls the endpoint of one of the objects then gets a record from SugarCRM based on the record ID.

## Query

Query is an inbound action that calls either the GET REST operation endpoint or the POST /filter operation endpoint then queries records for one of the object types. You can look up object records based on specific search criteria. The Query action returns zero to many documents from a single Query request based on one or more filters. After you select the Query connector action and use the Import Wizard, you can select fields and add query filters. Query actions have only a response profile.

-  **Select fields** — The SugarCRM API limits field selection to the first level below the object root.
-   **Filters** — The SugarCRM API supports filtering results with an “any” grouping type, nested AND and OR filters, and the following operators: Equal To, Not Equal To, Starts With, Ends With, Contains, In, Not In, Is Null, Not Null, Less Than, Less Than Or Equal To, Greater Than, Greater Than Or Equal To.
-   **Sorting** — The SugarCRM API supports unbounded sorting with ascending and descending sort orders.

## Create 

Create is an outbound action that calls the endpoint of one of the objects then creates new records on SugarCRM.

## Delete 

Delete is an outbound action that calls the endpoint of one of the objects then deletes records from SugarCRM.

## Update

Update is an outbound action that calls the endpoint of one of the objects then updates records on SugarCRM.


<OperationEnd />