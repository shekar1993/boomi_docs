# Stripe operation

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-ec16fc43-99f6-4971-8c1b-5c070880dffe"/>
</head>

The Stripe operation defines how to interact with your Stripe account.

The operation represents a specific action to be performed against a specific Stripe object type. Create a separate operation component for each action/object combination required for your integration.

The Stripe operations use JSON format and support the following actions:

- **Inbound:** Get, List, Query, List Line Items, Retrieve.  
- **Outbound:** Create, Update, Delete, Execute, Update Lines.

**Stripe Objects supported**: Customers, Prices, Products, Payment Links, Invoices, Invoice Items, Payment Intents and Charges.

## Create​
The Create action is an outbound operation that accepts JSON input to generate new Stripe objects, returning a JSON response containing the details of the newly created object. 

## Delete​
The Delete action is an outbound operation that uses the ID of a record as input to remove a Stripe object from the Stripe platform. The ID can be provided either as a Connector parameter or through an XML input profile. The ID field is repetitive, allowing you to send multiple IDs for deletion in a single XML request. The response is a JSON object that indicates the success or failure of the deletion request for each of the IDs. 

## Get​
The Get action is an inbound operation used to retrieve an object from the Stripe platform by providing the record's ID. Pass the ID as a Connector Parameter field.

## Update​
The Update action is an outbound operation that takes a JSON document as input to modify information for an object on the Stripe platform. The input document must include an ID field that specifies the record to be updated.

## Update Lines
The Update Lines action is an outbound operation that takes a JSON document as input to modify information for an Invoice on the Stripe platform. The input document must include an ID and a Parent ID field that specifies the record to be updated.

## List
The List Line Items operation is an outbound action that filters specific objects on the Stripe platform by type. This action returns data in JSON format and supports the AND operator for filtering across available fields.
  
List action supports cursor-based pagination for all object types the connector supports.

**Array Type Parameters:** Use comma separated values to be passed to type `Array_<param name>`.  
**Example:** For field `Array_ids`, the values passed can be `prod_Qkd0xW63Sg8SCU,prod_Qkd0xW63Sg8SCV`. 

## List Line Items
The List Line Items operation is an outbound action that filters specific objects on the Stripe platform by type. This action returns data in JSON format and supports the AND operator for filtering across available fields. The filter criteria must include an ID field that specifies the parent record of the items to retrieve.

The List action supports cursor-based pagination across all object types compatible with the connector.

## Query
The Query action is an outbound operation designed to search for specific Stripe objects based on complex criteria, enabling the retrieval of objects that meet specified parameters.

This function supports targeted retrieval of Stripe objects — such as specific Customers, Products, or Invoices—that match defined filtering criteria.

The action uses cursor-based pagination to efficiently manage large result sets and supports the following operators: Equal To, Not Equal To, Like, Greater Than, Less Than, Greater Than or Equal, Less Than or Equal, and Is Null.

**Sample query options:**

- `status “Equal To” “draft” AND created “Greater Than” “1729598886”`
- `email “Is Null” OR name “Equal To” “The Sky and the Sea” OR created “Less Than” “1729598886”`

:::note

- Nested expressions are not supported for parameters. 
- The query action uses the Stripe Query language to build the API Query parameters.
- A combination of AND and OR operators is not supported.

:::

## Retrieve​
The Retrieve action is an inbound operation that retrieves a single object from the Stripe platform based on specified filter criteria. It returns a single Stripe object in response.
 
## Execute
The Execute action is an outbound operation that accepts a JSON document as input to perform a specified business transaction for an object on the Stripe platform. The input document must include an ID field identifying the record to be updated.

## Options tab​
Click Import Operation, then use the Import wizard to select the object with which you want to integrate. 

**Tracking Direction:** Select the document tracking direction for the operation, either Input Documents or Output Documents. This setting enables you to choose which document appears in Process Reporting. Start steps always track output documents regardless of your selection.

**Return Application Error Responses:** This setting controls whether an application error prevents an operation from completing:

- If you clear the setting, the process stops and reports the error on the Process Reporting page.
- If you select the setting, processing continues and passes the error response to the next component processed as the connection output.

**Page Size:** Available on List operation, sets the maximum number of records to be returned per API call. By default, 100 records will be returned per each API call. If a value greater than 100 is provided, the connector returns an exception. You can also override the value for this field via the Dynamic Operation Property. 

Maximum Number of Documents: The Maximum Number of Documents parameter limits the total number of records retrieved when using the Query action, This setting helps in controlling the volume of data processed in a single Boomi execution. By default, there is no limit on the total number of documents retrieved, so all matching records are retrieved across multiple API calls.

You can set a custom value for the maximum number of documents to be retrieved. Once this limit is reached, the connector stops making additional API calls, even if more records are available. This parameter can also be dynamically overridden in the Dynamic Operation Property within the Connector Shape dialog, under the Dynamic Operation Properties tab.

See the topic [Connector step dialog, Dynamic Operation Properties tab](../Process%20building/int-connector_shape_dialog_dynamic_operation_properties_tab_e473feba-b349-4b3b-8d82-2c3c9f94469b) for more details.  

**Logging:** All the API endpoints are logged into Process logs at **INFO** level for smooth debugging. In case of List Operation, if multiple pages are needed to be fetched, only the first page API call is at **INFO** level and the rest of the pages endpoints are recorded at **DEBUG** level.