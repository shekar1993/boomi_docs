import RequestProfile from './_RequestProfile.md'
import ResponseProfile from './_ResponseProfile.md'
import OperationEnd from './_operationEnd.md'
import TrackingDirection from './_TrackingDirection.md'
import ReturnErrRes from './_ReturnResponse.md'
import ReqRes from './_ReqRes.md'
import TrackingDir from './_TrackObject.md'


# Zuora operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-719985f9-fd0c-4561-b2ea-8cfa2e98c3a9"/>
</head>


The Zuora operation defines how to interact with your Zuora account and represents a specific action \(Query, Create, etc.\) performed against a specific Zuora object type \(such as Account, Invoice, Payment.\).

Create a separate Operation component for each object required for your integration.

## Get 

The inbound Get action, available in versions 59 and 69, returns these objects:

-   The Amend Response object, which generates a profile to map the Amend Response document. This object matches the response to a specific profile.

-   The Invoice Split Execute object, which works in conjunction with several objects:

    1.  Create the individual InvoiceSplit object.
    2.  Create an InvoiceSplitItem object for each split invoice you want to create from the original invoice.
    3.  Execute the InvoiceSplit object to split the original invoice into multiple invoices.

## Query 

The inbound Query action returns zero-to-many object record documents from a single request. You can add query filters, located on the bottom half of the Operation component page, to limit results and speed up processing. Filters use logical operators \(AND and OR\) and operators \(Equal To, Not Equal To, Greater Than Or Equal, Greater Than, Less Than Or Equal, Less Than, Like, Is Null, Is Not Null\). Because SQL cannot test for null values using comparison values, query for fields that have no values using Is Null \(does not have\) or Is Not Null \(does have\).

Query supports the following object types:

-   Account Full
-   Billing Preview Run \(WSDL version 69\)
-   Bill Run \(WSDL version 69\)
-   Invoice Full
-   Invoice Split Full \(WSDL versions 59 and 69\)
-   Payment Full
-   Account \(WSDL versions 59 and 69\)
-   Accounting Code \(WSDL versions 59 and 69\)
-   Amendment
-   Communication Profile
-   Contact
-   Credit Balance Adjustment
-   Feature \(WSDL version 69\)
-   Invoice
-   Invoice Adjustment
-   InvoiceFile \(WSDL version 69\)
-   Invoice Item
-   Invoice Item Adjustment
-   Invoice Payment
-   Invoice Payment Refund
-   Invoice Split \(WSDL versions 59 and 69\)
-   Invoice Split Item \(WSDL versions 59 and 69\)
-   Payment
-   Payment Method
-   Payment Method Snapshot \(WSDL version 69\)
-   Product
-   Product Feature \(WSDL version 69\)
-   Product Rate Plan
-   Product Rate Plan Charge
-   Product Rate Plan Charge Tier
-   Rate Plan
-   Rate Plan Charge
-   Rate Plan Charge Tier
-   Refund
-   Subscription
-   Subscription Product Feature \(WSDL version 69\)
-   Taxation Item
-   Unit Of Measure \(WSDL version 69\)
-   Usage

Object types that have the word “Full” in their name \(Account Full, Invoice Full, Invoice Split Full, and Payment Full\) are custom Integration object types. When you query these objects, the connector performs some joins to build complex objects. For example, the regular Account object type has a BillToId field that contains a Contact Id field. When you use the Account Full object type, BillToId is replaced by BillToContact that has all the Contact fields. When you query the Account Full object type, Integration performs a join based on the Contact Id and then populates the BillToContact fields.

## Querying custom and mutually-exclusive fields 

The Zuora API WSDL is static and does not have account-specific customizations. Therefore, you cannot import custom fields in the automatically-generated request and response profiles. To extract custom fields using the Query action, enter the custom API field names in the Extra Query Fields field on the Zuora operation. Use only top-level fields separating API field names with commas. Add custom fields as elements on the Query action’s response profile. You then add the API field name to the Element Name field and configure and set the Zuora namespace. You cannot filter by custom fields.

The following is an example:

-   The custom field’s API field name is `NS__BillAddrIntegrationId__c`.

-   The XML element is `<NS_BillAddrIntegrationID__c>1234</NS_BillAddrIntegrationID__c>`.

-   Add an element to the response profile named `NS__BillAddrIntegrationId__c` whose data type is Character, then set the Zuora namespace.


:::note

An alternative to extracting custom fields using Query is using the Execute action’s export function to extract related objects in a single query.

:::

The Zuora API prevents including mutually-exclusive fields on some objects when querying data from Zuora. To extract one of these fields in a query, include the API field name to the Extra Query Fields field on the Zuora operation. Separate API field names with a comma. To return records containing a specified field, enter the field in the operation’s Extra Query Fields.

RatePlanChargeOne, a commonly used object, has the following mutually exclusive fields: OveragePrice, Price, IncludedUnits, DiscountAmount or DiscountPercentage. Specify the desired field in the Extra Query Fields field on the operation to return records containing that field.

## Create 

The outbound Create action creates new records in the Zuora object defined in the operation.

The Zuora API WSDL is static and does not contain account-specific customizations. You cannot import custom fields in the automatically-generated request profile. If you use custom fields, add them manually as elements on the Create action’s request profile, add their API field name to the Element Name field, then configure and set the Zuora namespace.

Create supports the following object types:

-   Account
-   Accounting Code \(WSDL versions 59 and 69\)
-   Amendment
-   Amendment Request \(WSDL versions 59 and 69\)
-   Billing Preview Run
-   Contact
-   Credit Balance Adjustment
-   Invoice \(WSDL versions 59 and 69\)
-   Invoice Adjustment
-   Invoice Generator \(version 39 WSDL only\)
-   Invoice Item Adjustment
-   Invoice Payment
-   Invoice Split \(WSDL versions 59 and 69\)
-   Invoice Split Item \(WSDL versions 59 and 69\)
-   Payment
-   Payment Method
-   Product \(WSDL version 69 only\)
-   Product Rate Plan \(WSDL version 69 only\)
-   Product Rate Plan Charge \(WSDL version 69 only\)
-   Rate Plan \(WSDL version 69 only\)
-   Refund
-   Subscribe
-   Taxation Item
-   Unit Of Measure \(WSDL version 69 only\)
-   Usage

## Using the Create action for bulk import 

Use these objects in the Create action to leverage Zuora's bulk import API:

-   Import – Payment — Used to import payments and apply them to invoices in Zuora. The invoices must exist and the invoice number is a required input field.

-   Import – Quote — Used to import a payment towards a purchase of a sale which the customer has been quoted. The quote is converted to an invoice and the payment specified in the import is applied to the invoice created. This object requires Zuora/Salesforce integration because looking up a quote is a Salesforce feature. To enable that integration, a Z-Force 360 must be installed into a Salesforce account. The quote must exist in Salesforce and the quote number is a required input field.

-   Import – Usage — Used to import usage records for subscription services in Zuora.


When you use the Zuora connector to import high volumes of payment, quote, or usage data, follow these rules:

-   Import only one object type \(payment, quote or usage\) at a time into Zuora.

-   Keep input batches to a maximum of 10,000 records in each document for all three types of imports. If an input document contains 10,001 records, there are two output documents: one containing 10,000 records and one containing one record. This is an inefficient way to use this connector.

-   Bring the records from the source system into a Boomi Integration process first. The incoming records can be in any format but must be mapped to an XML profile by using the Map step.

-   Add static fields to the XML profile. Each object has eight to 10 static fields that are valid for all clients. The fields are added when you click the Import button on the Zuora connector’s operation component.

-   Import custom fields by manually adding the fields to the XML profile:

    -   Make sure that the **XML profile’s Options tab** \> **Respect Min Occurs** check box is on.

    -   Use the Zuora ID for the custom field’s name.

    -   Mark each custom field as required. On the XML profile’s Data Elements tab, set the element’s Min Occurs field to “1”.

    -   Do *not* set a namespace \(including the Zuora namespace\) for the custom field.

-   Use the yyyy-MM-dd'T'HH:mm:ss format for Payment and Quote objects’ date fields. For Usage objects, use the MM/dd/yyyy format for start dates and end dates.

-   Use the XML profile in a Map step. The Map step ensures that the first record contains placeholder elements for columns it might not have data for. This ensures that data is not truncated from subsequent records.

-   Send the XML data from the Map step to the Zuora connector. The Zuora connector converts the XML data to CSV, as required by Zuora.


:::note

Zuora changes affect importing payments and quotes. In the request profile the `external_unique_key` field has been renamed `order_id`. The response profile has new fields: `amount_applied_to_invoice` and `amount_applied_to_credit_balance`. To get these changes into Zuora operation request and response profiles *created before the 6 March 2013 release*, use the Zuora Import Wizard to browse and select the object. You must also update previously created maps and static data to include the changed and new fields.

:::

## Delete 

The inbound Delete action removes records from the Zuora object as defined in the operation. You must supply the Zuora ID for the record.

The Zuora operation’s Delete action supports the following object types:

-   Account
-   Amendment \(WSDL versions 59 and 69\)
-   Contact
-   Invoice \(WSDL version 69 only\)
-   Invoice Adjustment \(WSDL version 69 only\)
-   Invoice Item Adjustment \(WSDL version 69 only\)
-   Payment
-   Payment Method \(WSDL version 69 only\)
-   Product \(WSDL version 69 only\)
-   Product Rate Plan \(WSDL version 69 only\)
-   Product Rate Plan Change \(WSDL version 69 only\)
-   Refund \(WSDL version 69 only\)
-   Subscription
-   Unit Of Measure \(WSDL version 69 only\)
-   Usage \(WSDL version 39\)

## Execute 

The outbound Execute action uses the Zuora Export ZOQL \(Zuora Object Query Language\) to create exports with the Z-Commerce API. Zuora Export ZOQL is similar to Z-Commerce API ZOQL, with a few differences. The biggest difference is that with Zuora Export ZOQL you query a data source, not a Z-Commerce API object.

The Export API enables you to extract fields from a parent object in a single query instead of having to perform subsequent connector calls to retrieve related information. For example, in one query you can retrieve an Invoice, its InvoiceItems, the associated Product Rate Plan Charges, the Account, and the account’s Bill To Contact. The Export API is highly recommended for use with any transaction record types.

The Zuora Export ZOQL query is constructed from the Zuora Operation component. \(See the Zuora Operation topic for information about the fields that are used by the connector’s Execute action: Fields to Select, Table to Select From, Where Clause, Grouping Fields, Order By Field and Sort By.\) The Zuora connector creates an export record, queries the Zuora database, retrieves the data, parses the data into an XML structure in the response profile and returns a document for each logical record. The data is returned in a flattened structure unless you use the Operation component’s Grouping Fields field to enter field\(s\) to group details under their header. For example, you can group invoice line items under their invoice header.

:::note

To use the Execute action’s Export function, you should be familiar with Zuora Export ZOQL \(Zuora Object Query Language\), the query language used to create exports with Zuora SOAP API. You can read about Export ZOQL at [Zuora’s Knowledge Center](https://knowledgecenter.zuora.com/DC_Developers/SOAP_API/M_Zuora_Object_Query_Language/Export_ZOQL) as well as data sources and pre-joined objects.

:::

## Update 

The outbound Update action updates existing records in the Zuora object defined in the operation.

The Zuora API WSDL is static and does not contain tenant-specific customizations. Therefore, custom fields cannot be imported in the automatically generated request profile. If you are using custom fields, manually add them as elements on the Update action’s request profile. Add their API field name to the Element Name field and configure and set the Zuora namespace.

Update supports the following object types:

-   Account
-   Accounting Code \(WSDL versions 59 and 69\)
-   Contact
-   Credit Balance Adjustment
-   Invoice
-   Invoice Adjustment
-   Invoice Item \(Removed in WSDL version 69 only\)
-   Invoice Item Adjustment
-   Invoice Payment \(Removed in WSDL version 69 only\)
-   Invoice Payment Refund
-   Payment
-   Payment Method
-   Product
-   Product Rate Plan
-   Product Rate Plan Charge
-   Product Rate Plan Charge Tier \(Removed in WSDL version 69 only\)
-   Rate Plan Charge \(WSDL version 69\)
-   Refund
-   Subscription
-   Unit Of Measure \(WSDL version 69 only\)
-   Usage

## Options tab 

Select a connector action, then after filling in the fields, use the Import Wizard to select the object with which you want to integrate. The following table describes the default field definitions for each action type:


<TrackingDir />

<RequestProfile />

<ResponseProfile />

<ReturnErrRes />

**Import Operation Timeout** \(Create only, and only when using Import objects\)  
  Sets the maximum time \(in minutes\) to wait for import file processing. The default is 10 minutes.

**Fields to Select** \(Execute only\)  
  Enter the fields to be selected. Reference fields by their table and field name separated by a period. Separate field names with commas. For example, `Invoice.InvoiceNumber,InvoiceItem.Id`. For more information, including others fields used by the Execute action, see the linked Zuora Operation’s Outbound Actions topic.

**Table to Select From** \(Execute only\)  
  Enter the table from which to select fields. For example, `InvoiceItem`.

**Where Clause** \(Execute only\)  
 Enter a WHERE clause to be used when searching. Reference the field by its table and field name separated by a period. For example, `Invoice.InvoiceNumber`.

You can insert dynamic filter values into a WHERE clause using the request profile. The special syntax to use is: `Table.FieldName='${arbitraryFilterName}'`. For example, `Invoice.InvoiceNumber='${invoiceNumber}'`.

**Grouping Fields** \(Execute only\)  
 Data is returned in a flattened structure unless you enter field\(s\) to group the results. Grouping fields tells the Zuora connector to group the data to make mapping easier, for example to group invoices by invoice number, row, item, quantity, etc. Reference fields by their table and field name separated by a period. Separate field names with a comma. For example, `Invoice.InvoiceNumber`.

**Order By Field** \(Execute only\)  
 Enter a field to order by when executing the ZOQL \(Zuora Object Query Language\) query. The field must be referenced by its table and field name separated by a period. For example, `Invoice.InvoiceNumber`.

**Sort Order** \(Execute only\)  
  Select ascending or descending order of results in Order By Field.

**Export Operation Timeout** \(Execute only\)  
 Sets the maximum time \(in minutes\) to wait for export file preparation. The default is 10 minutes.

**Extra Query Fields** \(Query only\)  
 Enter additional fields to query that are not included in the import results, such as custom fields and mutually exclusive fields. Only top-level fields can be used. Use the API field names and separate them with a comma. For more information see the linked Zuora Operation’s Inbound Action topic.


<OperationEnd />