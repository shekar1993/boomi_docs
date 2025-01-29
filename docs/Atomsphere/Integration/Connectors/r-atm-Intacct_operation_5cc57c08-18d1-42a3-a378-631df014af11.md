
import OperationEnd from './_operationEnd.md'
import TrackingDir from './_TrackObject.md'
import ReturnErrRes from './_ReturnResponse.md'

# Intacct operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-5cc57c08-18d1-42a3-a378-631df014af11"/>
</head>


The Intacct operation defines how to interact with your Intacct company and represents a specific action performed against a specific Intacct record type or object \(GL Account, Bill, GL Entry, Customer, and so on\).

Not all actions are available for every object. Create a separate operation component for each action and object combination required for your integration.

The Intacct operation supports the following actions:

-   Inbound: Get, Query, Read Report

-   Outbound: Create, Delete, Update


## Query 

When an operation using the API 3.0 Query calls an object type with more than 1,000 elements, the operation’s support for paging returns all documents.

## Read Report 

The Read Report operation, available only on API 3.0, requires a report name and report format so that it can traverse through related objects. It returns the results in XML, JSON, or CSV format.

## **Options** tab 

Click **Import Operation**, then use the Import wizard to select the object you want to integrate. The following table describes the default field definitions for each action type:



<TrackingDir />

**Request Profile** - 
  \(Create, Update, Read Report\) The profile definition that represents the XML structure sent or received by the connector.

**Response Profile** - 
 \(Read Report\) The profile definition that represents the XML structure received by the connector.

<ReturnErrRes />

**Batch Size** - 
  \(Create and Update\) It sets the maximum number of documents to send in one request. For example, if you set this field to 100 for obtaining from the Employee interface, it extracts 100 employee records. If blank, all available records are retrieved.

**Use Transaction** - 
  \(Create and Update\) If selected and if one operation in the batch fails, the entire operation fails and it rolls back all changes.

**Use External Key** - 
  \(Delete and Get\) If selected, it uses the user-defined ID instead of the internal Intacct ID.

**Show Private** - 
 \(Query\) Some objects in multi-entity shared implementations can be owned by a subsidiary entity but are visible at the root:

-   If cleared, the list returns only the records owned by the current multi-entity context.

 -   If selected, the list returns all records visible in the current multi-entity context.


**Location ID** - 
 Specifies the location or entity ID to restrict an operation to a specific entity within Intacct. This option is only available when you choose API Session-based authentication in DTD version 3.0.

**Page Size** - 
  \(Query\) Specifies the number of records returned per page for a given Query to optimize performance. Only available when you choose API Session-based authentication in DTD version 3.0.

**Timeout** - 
 \(Read Report\) Sets the maximum amount of time in seconds for the server to wait before returning a report. The default is 300 seconds. The minimum is 30 seconds. There is no maximum.

After selecting the connector action and using the **Import Wizard**, you can add filters. Filters allow you to build a custom query to apply when extracting data from Intacct.

<OperationEnd />