import OperationEnd from './_operationEnd.md'

# QuickBooks operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-091c3d5a-8498-49ad-9c37-a6d97997c842"/>
</head>


The QuickBooks operation defines how to interact with the company file.

The operation represents a specific action to perform against a specific QuickBooks record type or object, such as Purchase Order, Item Receipt, Customer, and so on. Not all actions are available for every object. Create a separate operation component for each action and object combination needed for your integration.

The QuickBooks operation supports the following actions:

-   Inbound: Get \(Get/Read, Query\)

    The operation requires unique parameters at runtime to request data in all inbound operations.

    See the Parameter values topic to read about statically or dynamically defining values in a process at runtime.

-   Outbound: Send \(Create or Add, Delete, Update or Modify\)

    For all outbound operations send request XML data to the connector that corresponds with the defined XML profile. Usually, request documents are the destination output of a map, however you can set parameters on the outbound connector's **Parameters** tab in the process to supply static or dynamic request values.


## Options tab 

Click **Import Operation**, then use the Import wizard to select the object with which you want to integrate.

:::note

This connector does not support batch processing.

:::

The following list describes the default field definitions for each action type:



**Object** - 
Displays the object type that you selected in the **Import Operation** wizard.

**Request/Response Profile** - 
 The XML profile definition that represents the XML structure that is being sent or received by the connector.

The QuickBooks Online REST API request and response structure differs from the legacy online edition. In the Online REST API edition, the top-level element corresponds to the selected object \(for example, Customer\). In the legacy online edition, the top-level element corresponds to the selected action \(for example, CustomerAddRq\).

**XML Version** - 
 The version of the SDK or REST API that the request or response profile is using. The QuickBooks Online edition looks like: `110`. The QuickBooks Online REST API looks like: `/rest_v3/IntuitRestServiceDef.xsd`.

**Return Response?** \(Send only\)  
 If cleared \(the default\), the connector automatically interrogates the response messages from QuickBooks and marks individual documents and processes as a success or an error.

If selected, the connector does not interrogate the response and return the response message to the next step in the process. Then you need to interrogate the response \(using a Decision step in the process, for example\) and perform the desired actions, such as sending an email alert. For example, manually handling the response is often used to update another system with newly-created QuickBooks data such as the ListID or TxnID.

**Metadata** \(Query only, Online edition only  
 Queries for records can return optional metadata information such as the total number of records selected:

  -   No MetaData — Returns only the data records.

 -   MetaData Only — Returns only the record count and other metadata.

 -   MetaData and Response Data — Returns both.


## Get or Read 

Get is an inbound action that enables Boomi Integration to look up data based on the QuickBooks entity ID, which uniquely identifies an instance of an object. An object also has an `entityName` field. Supplying one entity ID returns one object record.

With support for QuickBooks Online REST API, you can perform Getoperations on Tax Code, Tax Rate, and Trial Balance objects.

Get returns an object’s status \(an attribute\) in the response profile. There are two statuses in the QuickBooks Online REST API:

-   Deleted — Deletes the object from the database. This action applies only to transactional objects.

-   Voided — Voids the object from an accounting perspective.


## Query 

Query is an inbound action that enables to look up object records based on specific search criteria. You can only query a single object at one time.

In the QuickBooks Online REST API, the Query action requires a single request element: `selectSQL`. This element is a SQL query SELECT statement that controls which object records to select. The SELECT statement in the request enables you to specify the selection criteria and entity properties.

With support for QuickBooks Online REST API, you can now perform Query operations on Tax Code and Tax Rate objects. You can filter responses for Get operations on Trial Balance objects.

The QuickBooks connector handles pagination automatically, therefore you cannot specify the Count, StartPosition, or MaxResults.

The entity in the SELECT statement must match the target entity of the request and response. A successful response body contains a `QueryResponse` element corresponding to the SELECT statement in the request. The `QueryResponse` element contains the entities that match the selection criteria of the SELECT statement in the request. The properties within the entity elements depend on the response subset specified in the SELECT statement of the request.

## Create or Add 

Create is an outbound action that inserts data into your QuickBooks company. The request profile contains the properties for a single object. Upon successful record creation, the operation returns an XML response containing the fully populated object record, including the unique entityID field that Data Services assigns to the object.

## Delete 

Delete is an outbound action that deletes existing data from your QuickBooks company. You must supply the entityID field in the request to delete the existing object record.

The QuickBooks Online REST API has two types of delete actions based on the type of object \(name list and transaction\):

-   Soft delete — Used to mark the object as inactive and available for name list objects only. It does not delete the object permanently, but it is hidden for display purposes. References to inactive objects are left intact. To perform a soft delete, you must use the `Update` operation for the object, with the `Active` element set to false.

-   Hard delete — Used to delete the object specified in the request body. Hard delete is available for transaction objects only — you cannot recover a deleted object.  To perform a hard delete, use the Delete action.


## Update or Modify 

Update is an outbound action that updates existing data within your QuickBooks company. You must supply the entityID field in the request to update the existing object record.

In QuickBooks Online REST API , the SyncToken field contains the version number of the object. You use this field to lock the object for use by one application at a time. As soon as an application modifies an object, it increments the SyncToken field. If another application with an older SyncToken tries to modify the object, it fails. Data Services maintains only the latest version of the object’s SyncToken. The Update action requires this field.

The QuickBooks Online REST API has two types of update actions:

-   Full — Used to update all writable elements of an existing object. If you omit a writable element from the request profile, then the Update action sets the element’s value to NULL.

-   Sparse — Used to update a subset of elements of an existing object without clearing the omitted elements. This operation updates the writable elements specified in the request body while missing elements are left untouched. The object in the request body must include the `sparse="true"` attribute.

<OperationEnd />