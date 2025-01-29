import TrackingDirection from './_TrackingDirection.md'
import ReturnErrRes from './_ReturnResponse.md'

# Shopify operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-ce72a7e0-5193-44db-8b7f-228b7543f319"/>
</head>


The Shopify operation defines how to interact with your Shopify account.

The operation represents a specific action \(Query, Create, Update, etc.\) to be performed against a specific Shopify object type \(customer, fulfillment, order, location, etc.\). Create a separate operation component for each action/object combination required for your integration.  

To update your process to the latest supported version, re-import the schemas. Once the schemas are re-imported, your process will be updated to the latest version. Additionally, a new read-only field, "API Version," will be added as a single-option button under the Operation property to support the updated design of the Shopify API version update.

**Note:** The connector supports the API version listed in the Shopify connector topic.

The Shopify operations use JSON format and support the following actions:

-   Inbound: Advanced Query, Get, Query
-   Outbound: Calculate, Cancel, Close, Complete, Create, Delete, Execute, Open, Update, Hold, Move, Release Hold, Reschedule

## Operation permissions 

To ensure that the connection, browsing, and the actions are successful, verify that you have specified the appropriate scope in the connection's **Scope** field. You can ask for any of the scopes defined in Shopify's API access scopes article.

:::note

-   Shopify occasionally changes their APIs and resources to help your business improve. As a result, you may need to change your apps to take advantage of new features and adjust for changed or retired features. For more information, see the [Shopify Developer changelog](https://shopify.dev/changelog).

:::

## Outbound Requests 

These operations are outbound requests that perform an action on a record on the Shopify platform. Input documents must contain an ID field specifying *the ID of the order* where the operation is to be executed. Input documents for fulfillment operations must also contain *the ID of the fulfillment*where the operation will be executed.

-   Calculate — calculates refunds for a line item and shipping or for a partial amount of shipping.
-   Cancel — cancels an order or a fulfillment or a fulfillment order.
-   Close — marks a fulfillment order as incomplete.
-   Complete — completes a fulfillment order.
-   Open — marks the fulfillment order as open.
-   Move — moves a fulfillment order to a new location.
-   Hold — applies a fulfillment hold on an open fulfillment order.
-   Release Hold — releases the fulfillment hold on a fulfillment order.
-   Reschedule — reschedules the `fulfill_at` time of a scheduled fulfillment order.

## Create 

Create is an outbound action that uses JSON for input to create order, customer, custom collection, product \(list, count, new\), product variant, refund, fulfillment - for one or multiple fulfillment orders \(list, count, new\), or transaction \(authorization, sales, capture, void, refund\) records on the Shopify platform.

## Delete 

Delete is an outbound action that uses the ID of a record as input to delete a customer, custom collection, inventory level, order, product, or product variant record from the Shopify platform.

## Execute 

Execute is an outbound action that sets, adjusts, or connects the inventory level of an inventory item at a single fulfillment service location on the Shopify platform.

## Get 

Get is an inbound action that uses the ID of a record to obtain a customer, custom collection, fulfillment, inventory item, location, order, product, product variant, refund, or transaction record from the Shopify platform.

## Update 

Update is an outbound action that takes a JSON document as input and updates the related information for a customer, custom collection, inventory item, order, product, or product variant record, and tracking information for a fulfillment on the Shopify platform. The input document must contain an ID field specifying the ID of the record to be updated. You can update customers, fulfillments, inventory items, orders, products, and product variants.

## Query and Advanced Query 

Query is an outbound action operation that searches all object types. Advanced Query is an outbound operation that searches customer records. Both Query and Advanced Query return JSON documents, support AND filters, support field selection up to one level below the root object, but do not support sorting.

Cursor-based pagination

Both Query and Advanced Query support cursor-based pagination for all object types the connector supports, introduced in the Shopify API release 2019-07 for the Product object type and continuing in the 2019-10 API for the other object types. With this feature, the operations use the Next link provided by the API internally to navigate through multi-page results. See the Making requests to paginated REST Admin API endpoints additional resource for more information.

## Options tab 

Click **Import Operation**, then use the Import wizard to select the object with which you want to integrate. The following table describes the fields for each action type:


 Description

<TrackingDirection />

<ReturnErrRes />

**Query Page Size \(Query\)** - 
Set the number of results to return for each page. Use this setting when querying large data sets to maximize performance and reduce the number of requests required to retrieve a full data set from the service. The service accepts values between 1 and 250 \(the default and upper limit\), but the operation accepts values outside this range.

 -   If you enter a value less than 1, the service returns 1 result for each page.
 -   If you enter a value greater than 250, the service returns an error.