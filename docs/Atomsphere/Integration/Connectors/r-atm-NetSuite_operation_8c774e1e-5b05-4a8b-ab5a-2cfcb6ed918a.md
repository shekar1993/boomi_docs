import OperationEnd from './_operationEnd.md'
import TrackingDir from './_TrackObject.md'
import ReturnErrRes from './_ReturnResponse.md'

# NetSuite operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-8c774e1e-5b05-4a8b-ab5a-2cfcb6ed918a"/>
</head>


The NetSuite operation defines how to interact with your NetSuite account.

The operation represents a specific action \(Create, Delete, Get, and so on\) to perform against a specific NetSuite record type or object. Not all actions are available for every object. You must create a separate operation component for each action and object combination that your integration requires.

The NetSuite operation supports the following actions:

-   **Inbound** — Get and Query. The operation requires unique parameters at runtime for all inbound operations to request data. To learn how to statically or dynamically define values in a process, read the Parameter Values help topic.
-   **Outbound** — Create, Delete, Execute, Update, and Upsert. For all outbound operations, send request XML data into the connector that corresponds with the defined XML profile. Usually, request documents are the destination output of a map. You can set parameters on the outbound connector's **Parameters** tab within the process to supply static or dynamic request values.

:::note

Contact your NetSuite representative to learn about the API requirements for your account and how to access the integration guides in the User Community for field definitions.

:::

## Get 

The inbound Get action looks up data based on the NetSuite internal ID, which is a key column that uniquely identifies a row of data. The internal ID also links a data record to corresponding records across objects. You can retrieve more NetSuite object types using the Get action than the Query action. Each internal ID returns one object record document.

:::note

To retrieve records dynamically with a Get ID, you can perform a Search to retrieve a list of IDs, then use the list as a dynamic input parameter for the Get action.

:::

## Query 

The inbound Query action looks up object records based on specific search criteria. The following describes Query functionality:

-   You can add query filters after you select a Query connector action and run the **Import Wizard**.
-   A single Query request can return zero or more object record documents.
-   You can use static or dynamic request parameters \(filters\) to select object records.
-   You can query the Currency object in all versions of the connector.
-   You can use NetSuite’s search criteria for objects \(lists, records and multi-select customizations\) by referencing custom fields. These searches use a new Join type called CustomSearchJoin.

#### Query filters

NetSuite’s Get action has an implicitly-defined query filter. That means you do not need to configure the filter because the operation automatically creates an internalID.

#### RecordRef/List/Multi-select search filters

The NetSuite connector provides convenience functionality for the query filters for RecordRef or List fields, including CustomLists and Multi-select fields.

For the parameter value, use either the NetSuite internal ID \(do not use the external ID\) or the text name of the record. When you provide a text name, before preparing a search request, the connector automatically looks up the internal ID from NetSuite. If the connector does not find a valid internal ID, the search fails with an INVALID\_KEY\_OR\_REF error.

How search works:

-   If the field type is **CustomList**, the connector attempts to retrieve the internal ID by calling get-customList and tries to match the connector operation parameter value to the list’s customValue.
-   If the field type is **RecordRef** or **List**, the connector attempts to retrieve the internal ID by calling getSelectValue and tries to match the connector operation parameter to the NetSuite record field’s value.
-   If the connector finds a match, the connector uses the internal ID in the search request.
-   If the connector does not find a match, the connector uses the original operation parameter in the search request.

The following are important points about search filters:

-   You can list values on which to filter.
-   The available operators for **RecordRef** and **List** field types are anyOf and noneOf.
-   Your values must be a comma-separated list of text values or internal IDs \(with or without spaces\). Examples are Value 1, Value 2, Value 3 or 10,11,12.
-   The connector generates the proper request structure.

#### Multi-select filter operators

Two sets of Query filter operators are available \(Any Of \[Value\], None Of \[Value\]\), and \(Any Of \[ID\], None Of \[ID\]\) to account for multi-select search fields where either the name or internal ID of the object is the same as or contains another object's name. Both sets accept multiple values separated by a comma.

-   When using the Any Of \[Value\], None Of \[Value\]\) filter operators, specify the name of the object. Query attempts to find the appropriate internal ID for the name of the object provided.
-   When using the \(Any Of \[ID\], None Of \[ID\]\) filter operators, specify the internal ID of the object. Use these filter operators if you already have the internal ID of the object or if you experience time-out issues with the value operators while attempting to look up the internal ID.

For example, you use the Any Of \[Value\] filter operator to query against a File object’s folder using the value of 12 \(the folder’s internalId\) to return all files contained inside that folder and another folder named *12test* exists. Instead of your query returning files from the folder having the internal ID of 12 as expected, it returns the folder named *12test*.

To refine your query, you use the Any Of \[ID\] filter operator with a parameter and set a static value of 12 \(the folder’s internalId\). As a result, the query successfully returns all of the files contained inside folder 12.

## Create 

The inbound Create action enables you to insert data into your NetSuite account. It generates the `internalID` field automatically for each request sent to the operation. Then, when you create the record successfully, the operation automatically returns an XML response with the newly-generated internal ID.

## Delete 

The outbound Delete action enables you to delete existing data within your NetSuite account. You must supply the `internalID` or `externalID` field in the request to delete the existing object record.

**Note:** If the IDs are not available in your source data, use a Connector Call function to search data based on a field value, such as CompanyName.

## Execute 

The outbound Execute action includes the following functions:



**Initialize** - 
  Initialize enables the NetSuite connector to more easily build outbound NetSuite transactions based on values from a related object record. For example, the connector can initialize an invoice by referencing an existing sales order transaction. You can initialize many transaction types from existing record references.

**Attach** and **Attach Contact** - 
 Attach defines a relationship between two records or attaches a file document. You supply the internal ID and record types when building the request. Usually, there are two valid **Attach** functions to attach a file to a record and a contact to a record.

**Detach** - 
  Detach removes a relationship between two records or detaches a file document. You supply the internal ID and record types when building the request.

**Get Currency Rate** - 
  Get Currency Rate retrieves an exchange rate between two currencies on a specified effective date. The exchange rate values appear in the **Exchange Rate** column of the **Currency Exchange Rates** table.

**Get Deleted** - 
 Get Deleted retrieves a list of deleted records of a given type during a specified period.

**Get Select Value** - 
 Get Select Value lists the available values in the NetSuite’s drop-down selection.

**Get Posting Transaction Summary** - 
  Get Posting Transaction Summary retrieves a summary of the data posted to the general ledger in an account.

NetSuite supports transaction links between purchase orders and vendor bills, which allows you to populate a vendor bill with the items and expenses from one or more purchase orders. There are two ways to do this:

-   **Create action** — Use the newly added purchaseOrderList in a vendor bill Create action. When you include the purchase order internalID or externalID value\(s\) in thepurchaseOrderList, it adds all of the items and expenses from the purchase order\(s\) to the vendor bill’s itemList and expenseList. Use this method when you want a vendor bill to contain all of the line items from linked purchase orders.
-   **Execute action’s Initialize function** — Send a vendor bill Initialize request that references one or more purchase orders by ID. The Initialize response returns itemList and expenseList data from the referenced purchase order\(s\). This data includes orderDoc and orderLine field values that together provide a unique identifier for each line item. You can then send a vendor bill Create request setting values for the bill’s itemList and expenseList with data copied from the response. You can copy only the data from the specific purchase order items and expenses that you want to include in the vendor bill. This method allows you to select a subset of line items from each linked purchase order, rather than including all linked purchase order line items in a vendor bill.

The Initialize function updates to support multiple purchase orders per vendor, and it adds the `orderDoc` and `orderLine` fields to the vendor bill itemList and expenseList.

The Execute action supports attaching Contacts to many types of transactions. To detach a Contact from an object, use the Detach function for that object and set `ObjectNameDetachBasicReference/detachedRecord/@type` to `contact`.

## Update 

The outbound Update action updates existing data within your NetSuite account when you supply the internalID or externalID field in the request.

## Upsert

The outbound Upsert action either updates an existing record or, if the record does not exist, creates a new record.

## Options tab 

Click **Import Operation**, then use the Import wizard to select the object with which you want to integrate.

|Field|Create|Delete|Execute|Get|Query|Update|Upsert|
|-----|------|------|-------|---|-----|------|------|
|Request Profile|X|X|X| | |X|X|
|Response Profile| | | | | |X| |
|Request/Response Profile| | |X| | | | |
|Return Application Error Responses|X|X|X|X|X|X|X|
|Use Conditional Defaults|X| | | | |X|X|
|Warning as Error|X| | | | |X|X|
|Ignore Read Only Fields|X| |X| | |X|X|
|Disable Mandatory Custom Field Validation|X| | | | |X|X|
|Disable System Notes for Custom Fields|X| | | | |X|X|
|Run Server SuiteScript and Trigger Workflows|X| | | | |X|X|
|Batch Size|X| | | | |X|X|
|Include List Fields| | | | |X| | |
|Batch Results| | | | |X| | |
|Use Advanced Search| | | | |X| | |



<TrackingDir />

**Request Profile** - 
 An XML profile component that represents the XML structure sent by the connector.

**Response Profile** - 
  An XML profile component that represents the XML structure received by the connector.

**Request and Response Profile** - 
  The XML profile components that represent the XML structures sent or received by the connector.

<ReturnErrRes />

**Use Conditional Defaults** - 
   If selected, it automatically populates related fields with default values when you enter a value when you Create, Update, or Upsert a record.

 If cleared, it does not submit default values for conditional fields. This prevents overriding existing values you do not want to change.

The options are: True, False, Not Set.

**Warning as Error** - 
 If selected, it treats warning messages as errors causing an exception that results in rejection of the request. The options are: True, False, Not Set.

**Ignore Read Only Fields** - 
 If selected, the operation does not set values for read-only fields to which it cannot write when saving the object. The options are: True, False, Not Set.

**Disable Mandatory Custom Field Validation** - 
 If selected, data for a custom field required for NetSuite UI submissions are not required when submitting a Web services request.

If cleared, missing data for a required custom field results in an error.

Boomi Integration recommends that you enable this setting when values for a required custom field may not be provided, such as when integrating with an application that does not include equivalent fields.

 The options are: True, False, Not Set.

**Disable System Notes for Custom Fields**   
  Disabling system notes when importing data from custom fields can significantly increase performance for large imports. This option is available at the request level only.

The options are: True, False, Not Set.

**Run Server SuiteScript and Trigger Workflows** - 
 The true and false preferences override the NetSuite setting, which enables server SuiteScripts and activates workflows:

 -   Not set — uses the setting in NetSuite and is the default.
 -   True — runs SuiteScript scripts and activates workflows.
 -   False — disables SuiteScript scripts that otherwise would have been triggered by web services requests and disables workflows that otherwise would have been activated by web services requests.

:::note

This field is operational only with NetSuite 2017.1 and higher connections.

:::

**Batch Size** \(Create, Update, Upsert\)  
 Used to specify the number of documents to include per batch. The default is 0, which means it uses the maximum number of documents allowed in the batch. You can enter any number from 0 to the maximum number, which are:

 -   Create — 100
 -   Update — 50
  -   Upsert — 50

For Delete actions, the batch size is set to 100 documents and you cannot change this value.

**Include List Fields** \(Query\)  
 If selected, the operation controls the return of any list detail records associated with the object being searched. Additionally, selecting this check box changes the `<platformMsg:bodyFieldsOnly>` element in the profile request that the connector sends to `<platformMsg:bodyFieldsOnly>false</platformMsg:bodyFieldsOnly>`.

If cleared, it retrieves the base data for the object only. For example, when searching for customer records, select this check box to include the Contact List. Additionally, clearing this check box changes the `<platformMsg:bodyFieldsOnly>` element in the profile request that the connector sends to `<platformMsg:bodyFieldsOnly>true</platformMsg:bodyFieldsOnly>`.

**Batch Results** \(Query\)  
 If selected, combines results into a single list document. If you use this feature, there is an additional step you need to take. The connector combines the results by adding an element above the top level of the incoming document elements. As a result, your profile no longer matches downstream components. To amend this mismatch, either manually edit your profile adding the element or use the inbound document to create a new profile.

**Use Advanced Search** \(Query\)  
 Leave blank. To do advanced searches, select **Use Advanced Search** in the **Import Wizard**. For more information about advanced searches, see [Using an operation component's Import Wizard](../Process%20building/t-atm-Using_an_operation_components_Import_Wizard_06a221cf-becb-485b-8067-fae1f8aeeed0.md).

<OperationEnd />

## Request/Response XML format 

The imported XML profile contains an unbounded \(repeating\) `<value>` element. For example, in the profile’s **Data Elements** tab, a value element appears with secondary elements of internalID, externalID, typeID, and Name. Each value element has a **Max Occurs** setting of unbounded.

The following document data snippet illustrates this format:

```
        <platformCore:Super_Awesome_Multiselect
xmlns:platformCore="urn:core_2014_2.platform.webservices.netsuite.com
" internalId="465" scriptId="custentity23"
xsi:type="platformCore:MultiSelectCustomFieldRef">
             <platformCore:value internalId="2" typeId="124"> 
                 <platformCore:name>Batch2</platformCore:name>
             </platformCore:value>
             <platformCore:value internalId="12" typeId="124"> 
                 <platformCore:name>Batch12</platformCore:name>
           </platformCore:value> 
           <platformCore:value internalId="18" typeId="124"> 
               <platformCore:name>Batch18</platformCore:name> 
           </platformCore:value> 
          <platformCore:value internalId="20" typeId="124"> 
               <platformCore:name>Batch20</platformCore:name> 
             </platformCore:value> 
        </platformCore:Super_Awesome_Multiselect> 
```