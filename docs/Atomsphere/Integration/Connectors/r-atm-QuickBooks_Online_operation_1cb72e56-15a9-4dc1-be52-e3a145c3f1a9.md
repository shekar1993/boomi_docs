import RequestProfile from './_RequestProfile.md'
import ResponseProfile from './_ResponseProfile.md'
import OperationEnd from './_operationEnd.md'
import TrackingDir from './_TrackObject.md'
import ReturnErrRes from './_ReturnResponse.md'
import TrackingDirection from './_TrackingDirection.md'

# QuickBooks Online operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-1cb72e56-15a9-4dc1-be52-e3a145c3f1a9"/>
</head>


The QuickBooks Online operation defines how to interact with your QuickBooks Online account and represents a specific action to perform against a specific QuickBooks Online object.

Create a separate operation component for each action and object combination that your integration requires.

The QuickBooks Online operations use XML format and support the following actions:

-   Inbound: Get, Query, Advanced Query.

-   Outbound: Create, Delete, Update, Report.


## Options tab 

Click **Import Operation**, then use the Import wizard to select the object to integrate. The following table describes the fields for each action type:



**Object** - 
 Displays the object type that you selected in the **Import Wizard**.

<TrackingDirection />

<RequestProfile />

<ResponseProfile />

<ReturnErrRes />



## Get 

Get is an inbound action to look up data based on the ID of an object, which uniquely identifies an instance of the object in QuickBooks Online. For example, you can look up an Account, Department, Invoice, Purchase Order, Tax Code, and so on.

Verify that you set the ID in the operation, or that you do not include blank spaces in the ID. Otherwise, the operation returns an error.

When successful, the operation takes the object ID and returns an XML document describing the object type selected when browsing. For example, the response document for an Account contains the account number, current balance, default tax code used by the account, etc. In addition, it returns the object’s status, which can be Deleted, Voided, Draft, Pending, InTransit, Synchronized, and SyncError.

## Query 

Query is an inbound action to look up object records based on specific search criteria. For example, you can query an Account, Customer, Vendor, Journal Entry, and so on. You can only query a single object at a time.

The bottom half of the **Operation component** page contains configuration options so you can add query filters for the selected object by specific criteria. For example, you can create a filter and query a customer based on their first name, middle name, last name, and so on.

:::info Important

At least one parameter value for a filter is required to query the records. For more information on adding parameter values to your filter, see [Adding Filters to an operation and passing in parameters](../Process%20building/t-atm-Adding_filters_to_operation_and_passing_parameters_b194bd5e-9caf-47e5-bfd7-e2652fae5877.md).

:::

The QuickBooks Online Query action:

-   Supports any number of filters grouped by the AND operator.
-   Supports the following operators:
    -   EQUAL TO

    -   GREATER\_THAN

    -   GREATER\_THAN\_OR\_EQUAL

    -   LESS\_THAN

    -   LESS\_THAN\_OR\_EQUAL

    -   LIKE

-   Supports both Ascending and Descending sorting, but only by one field.
-   Automatically paginates and returns all records associated with the Query.
-   Does not support the Like operator for the Date data type.
-   Does not support the Like operator for the Number data type, that contains values with the wildcard character.
-   Does not support field selection. You can only query a single object at one time.

When successful, the operation returns a list of XML documents; one for each result of the query based on the object type selected when browsing. For example, the query response document for the Customer object type contains the default billing address, title, primary email address, and so on. In addition, it returns the object's status, which can be Deleted, Voided, Draft, Pending, InTransit, Synchronized, and SyncError.

## Advanced Query 

Advanced Query is an inbound action to look up object records based on a SQL sentence \(the SqlSentence element\) that you enter in the request's input document. Verify that you enter the SqlSentence element correctly in the request; otherwise the operation returns an error. For more information about how to write your SQL sentence, in addition to some QuickBooks Online limitations to be aware of, see the linked Data queries topic.

When browsing, you can determine how the operation behaves using the **Structured Response Profile** check box:

-   Clear the check box to indicate that the Response Profile is unstructured. The connector sends the SQL sentence to the API endpoint exactly as you enter it in the input document and does not change it. The connector returns the QUERY result from the API endpoint in a single document.
-   Select the check box to indicate that the Response Profile matches the selected object type. The connector automatically paginates the QUERY correctly and adds the STARTPOSITION and MAXRESULTS clauses in the SQL sentence. The connector returns the QUERY result with one document for each object it finds.

:::note

Advanced Query supports QuickBooks Online batch processing where it performs multiple operations in a single request. However, the QuickBooks Online batch service cannot guarantee that the batch items in the request will run in order. To preserve the order and sequence, use the Flow Control step in your process.

:::

## Create 

Create is an outbound action to insert data for an object into QuickBooks Online. When successful, the operation request takes an XML document containing the properties for a single object you select when browsing \(for example, a Vendor\) and returns an XML response containing the fully-populated object record.

:::note

Create supports QuickBooks Online batch processing where performs multiple operations in a single request. However, the QuickBooks Online batch service cannot guarantee that the batch items in the request will run in order. To preserve the order and sequence, use the **Flow Control** step in your process.

:::

## Delete 

Delete is an outbound action to delete an existing object and its data from QuickBooks Online. In the request, you must provide two elements:

-   ID - The ID of the object to delete.
-   SyncToken - The version number of the object to delete. The SyncToken locks the object so no other application can access it while the Delete action occurs. As soon as an application modifies an object, it increments the SyncToken element. If another application with an older SyncToken tries to modify the object, it fails. Data Services maintains only the latest version of the object's SyncToken.

When successful, the operation request takes an XML document containing the two elements \(ID and SyncToken\) for a single object type selected when browsing \(for example, a Payment\) and returns an XML response describing the selected object type.

:::note

Delete supports QuickBooks Online batch processing whereit performs multiple operations in a single request. However, the QuickBooks Online batch service cannot guarantee that the batch items in the request will run in order. To preserve the order and sequence, use the **Flow Control** step in your process.

:::

## Update 

Update is an outbound action to update existing data for an object in QuickBooks Online. When successful, the operation request takes an XML document containing the properties for a single object selected when browsing \(for example, a Sales Receipt\) and returns an XML response containing the fully-populated object record that is updated.

In the Update request:

-   The SyncToken element \(required\) contains the version number of the object. This element locks the object so no other application can access it while the Update action occurs. As soon as an application modifies an object, its increments the SyncToken element. If another application with an older SyncToken tries to modify the object, it fails. Data Services maintains only the latest version of the object's SyncToken.
-   The Sparse element updates a subset of elements of an existing object without clearing the omitted elements. The operation updates the writable elements specified in the request body and does not update missing elements. The object in the request body must include thesparse="true" attribute.

:::note

Update supports QuickBooks Online batch processing where it performs multiple operations in a single request. However, the QuickBooks Online batch service cannot guarantee that the batch items in the request will run in order. To preserve the order and sequence, use the **Flow Control** step in your process.

:::

## Report 

Report is an outbound action to query the Trial Balance report. In the request, you can provide five elements to customize the information to return:

-   accounting\_method - The accounting method used in the report \(Cash, Accrual\).
-   date\_macro - Predefined date range. Use this element if you want the report to cover a standard report range. Otherwise, use the start\_date and end\_date elements to cover an explicit date range.
-   start\_date - The start date of the report.
-   end\_date - The end date of the report.
-   summarize\_column\_by - The criteria by which to group the report results.

When successful, the operation request takes an XML document containing the five elements and returns an XML response document containing the data elements for the Trial Balance report. The data elements include the report header, columns, rows, column data, and summary values.

<OperationEnd />