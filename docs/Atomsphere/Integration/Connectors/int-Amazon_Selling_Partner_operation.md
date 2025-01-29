import OperationEnd from './_operationEnd.md'

# Amazon Selling Partner (Tech Preview) operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-771238b1-4ab8-43a1-9840-2394519a3ef0"/>
</head>

The Amazon Selling Partner operation defines how to interact with the SP-API.

The Amazon Selling Partner connector supports these actions:
- **Execute**
- **Get**
- **Query**

When you import an operation, you will see all the available APIs operations. After selecting an API, the object types dropdown will display the available operations.

## Execute 

The **Execute** operation includes any APIs and actions that allow you to edit data. The input and output document format is JSON. The following APIs are available under the **Amazon Selling Partner API** dropdown box. 

- Feeds 2021-06-30
- Fulfillment Inbound
- Fulfillment Outbound 2020-07-01
- Listings Items 2021-08-01
- Merchant Fulfillment
- Orders
- Reports 2021-06-30
- Shipment Invoicing
- Shipping

### Object Types for the Execute operation

**Object type**
  - **Operation fields**

- **createFeedDocument** (Feeds 2021-06-30) - Creates a feed document for the feed type that you specify. This operation returns a presigned URL for uploading the feed document contents.
- **cancelFeed** (Feeds 2021-06-30) - Cancels the feed that you specify. Only feeds with processingStatus=IN_QUEUE can be cancelled.

  - **Path feedId** - The identifier for the feed. This identifier is unique only in combination with a seller ID. 

- **createFeed** (Feeds 2021-06-30) - Creates a feed. Upload the contents of the feed document before calling this operation.

- **generatePackingOptions** (Fulfillment Inbound) - Generates available packing options for the inbound plan.
  - **Path inboundPlanId** - The identifier of an inbound plan.

- **updateShipmentSourceAddress** (Fulfillment Inbound) - Updates the source address of an existing shipment.
  - **Path inboundPlanId** - The identifier of an inbound plan.
  - **Path shipmentId** - The identifier of a shipment. A shipment contains the inbound boxes and units.

- **createInboundPlan** (Fulfillment Inbound) - Creates an inbound plan. An inbound plan contains all the necessary information to send shipments into Amazon's fulfillment network.
- **generateSelfShipAppointmentSlots** (Fulfillment Inbound) - Initiates the process of generating the appointment slots list.
  - **Path inboundPlanId** - The identifier of an inbound plan.
  - **Path shipmentId** - The identifier of a shipment. A shipment contains the inbound boxes and units.

- **generateShipmentContentUpdatePreviews** (Fulfillment Inbound) - Initiates the process of generating the appointment slots list.
  - **Path inboundPlanId** - The identifier of an inbound plan.
  - **Path shipmentId** - The identifier of a shipment. A shipment contains the inbound boxes and units.

- **updateItemComplianceDetails** (Fulfillment Inbound) - Update compliance details for a list of MSKUs.
  - **Query marketplaceId** - The Marketplace ID. Refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) in the Amazon developer docs for a list of possible values.

- **confirmPlacementOption** (Fulfillment Inbound) - Confirms the placement option for an inbound plan. 
  - **Path inboundPlanId** - The identifier of an inbound plan.
  - **Path placementOptionsId** - The identifier of a placement option. A placement option represents the shipment splits and destinations of SKUs.

- **confirmShipmentContentUpdatePreview** (Fulfillment Inbound) - Confirm a shipment content update preview and accept the changes in transportation cost.
  - **Path inboundPlanId** - The identifier of an inbound plan.
  - **Path shipmentId** - The identifier of a shipment. A shipment contains the inbound boxes and units.
  - **Path contentUpdatePreviewId** - The identifier of a content update preview.

- **updateShipmentTrackingDetails** (Fulfillment Inbound) - Updates a shipment's tracking details.
  - **Path inboundPlanId** - The identifier of an inbound plan.
  - **Path shipmentId** - The identifier of a shipment. A shipment contains the inbound boxes and units.

- **setPackingInformation** (Fulfillment Inbound) - Sets packing information for an inbound plan.
  - **Path inboundPlanId** - The identifier of an inbound plan.

- **generateTransportationOptions** (Fulfillment Inbound) - Generates available transportation options for a given placement option.
  - **Path inboundPlanId** - The identifier of an inbound plan.

- **updateShipmentName** (Fulfillment Inbound) - Update the shipment name.
  - **Path inboundPlanId** - The identifier of an inbound plan.
  - **Path shipmentId** - The identifier of a shipment. A shipment contains the inbound boxes and units.

- **updateInboundPlanName** (Fulfillment Inbound) - Updates the name of an existing inbound plan.
  - **Path inboundPlanId** - The identifier of an inbound plan.

- **confirmTransportationOptions** (Fulfillment Inbound) - Confirms all the transportation options for an inbound plan. A placement option must be confirmed prior to use of this API.
  - **Path inboundPlanId** - The identifier of an inbound plan.

- **scheduleSelfShipAppointment** (Fulfillment Inbound) - Confirms or reschedules a self-ship appointment slot against a shipment.
  - **Path inboundPlanId** - The identifier of an inbound plan.
  - **Path shipmentId** - The identifier of a shipment. A shipment contains the inbound boxes and units.
  - **Path slotId** - The an identifier to a self-ship appointment slot.

- **cancelSelfShipAppointment** (Fulfillment Inbound) - Cancels a self-ship appointment slot against a shipment.
  - **Path inboundPlanId** - The identifier of an inbound plan.
  - **Path shipmentId** - The identifier of a shipment. A shipment contains the inbound boxes and units.

- **generatePlacementOptions** (Fulfillment Inbound) - Generates placement options for the inbound plan.
  - **Path inboundPlanId** - The identifier of an inbound plan.

- **confirmDeliveryWindowOptions** (Fulfillment Inbound) - Confirms the delivery window option for chosen shipment within an inbound plan.
  - **Path inboundPlanId** - The identifier of an inbound plan.
  - **Path shipmentId** - The identifier of a shipment. A shipment contains the inbound boxes and units.
  - **Path deliveryWindowOptionsId** - The id of the delivery window option to be confirmed.

- **generateDeliveryWindowOptions** (Fulfillment Inbound) - Generates available delivery window options for a given shipment.
  - **Path inboundPlanId** - The identifier of an inbound plan.
  - **Path shipmentId** - The identifier of a shipment. A shipment contains the inbound boxes and units.
  
- **createMarketplaceltemLabels** (Fulfillment Inbound) - For a given marketplace - creates labels for a list of MSKUs.

- **confirmPackingOption** (Fulfillment Inbound) - Confirms the packing option for an inbound plan.
  - **Path inboundPlanId** - The identifier of an inbound plan.
  - **Path packingOptionId** - The identifier of a packing option.

- **cancelInboundPlan** (Fulfillment Inbound) - Cancels an Inbound Plan. Charges may apply in certain scenarios - to learn more, see the [cancelInboundPlan](https://developer-docs.amazon.com/sp-api/reference/cancelinboundplan) topic in the Amazon developer docs.
  - **Path inboundPlanId** - The identifier of an inbound plan.

- **cancelFulfillmentOrder** (Fulfillment Outbound 2020-07-01) - Requests that Amazon stop attempting to fulfill the fulfillment order indicated by the specified order identifier.
  - **Path sellerFulfillmentOrderId** - The identifier assigned to the item by the seller when the fulfillment order was created.

- **updateFulfillmentOrder** (Fulfillment Outbound 2020-07-01) - Updates and/or requests shipment for a fulfillment order with an order hold on it.
  - **Path sellerFulfillmentOrderId** - The identifier assigned to the item by the seller when the fulfillment order was created.

- **createFulfillmentReturn** (Fulfillment Outbound 2020-07-01) - Requests that Amazon ship items from the seller's inventory in Amazon's fulfillment network to a destination address.
  - **Path sellerFulfillmentOrderId** - The identifier assigned to the item by the seller when the fulfillment order was created.

- **submitFulfillmentOrderStatusUpdate** (Fulfillment Outbound 2020-07-01) - Requests that Amazon update the status of an order in the sandbox testing environment.
  - **Path sellerFulfillmentOrderId** - The identifier assigned to the item by the seller when the fulfillment order was created.

- **createFulfillmentOrder** (Fulfillment Outbound 2020-07-01) - Requests that Amazon ship items from the seller's inventory in Amazon's fulfillment network to a destination address.

- **patchListingsitem** (Listings Items 2021-08-01) - 
  - **Path sellerId** - A selling partner identifier, such as a merchant account or vendor code.
  - **Path sku** - A selling partner provided identifier for an Amazon listing.
  - **Query marketplaceIds** - A comma-delimited list of Amazon marketplace identifiers for the request.
  - **Query includedData** - A comma-delimited list of data sets to include in the response. The default value is issues.
  - **Query mode** - The mode of operation for the request.
  - **Query issuelocale** - A locale for localization of issues. When not provided, the default language code of the first marketplace is used.

- **deleteListingsitem** (Listings Items 2021-08-01) - Partially update (patch) a listings item for a selling partner. Only top-level listings item attributes can be patched.
  - **Path sellerId** - A selling partner identifier, such as a merchant account or vendor code.
  - **Path sku** - A selling partner provided identifier for an Amazon listing.
  - **Query marketplaceIds** - A comma-delimited list of Amazon marketplace identifiers for the request.
  - **Query includedData** - A comma-delimited list of data sets to include in the response. The default value is issues.
  - **Query issuelocale** - A locale for localization of issues. When not provided, the default language code of the first marketplace is used.

- **putListingsItem** (Listings Items 2021-08-01) - Creates or fully updates an existing listings item for a selling partner.
  - **Path sellerId** - A selling partner identifier, such as a merchant account or vendor code.
  - **Path sku** - A selling partner provided identifier for an Amazon listing.
  - **Query marketplaceIds** - A comma-delimited list of Amazon marketplace identifiers for the request.
  - **Query includedData** - A comma-delimited list of data sets to include in the response. The default value is issues.
  - **Query mode** - The mode of operation for the request.
  - **Query issuelocale** - A locale for localization of issues. When not provided, the default language code of the first marketplace is used.

- **cancelShipment** (Merchant Fulfillment) - Cancel the shipment indicated by the specified shipment identifier.
  - **Path shipmentId** - The Amazon-defined shipment identifier for the shipment to cancel.
  - **Restricted Data Access** - This operation displays a conditional dropdown box because it returns Personally Identifiable Information (PII). 
    - **None**: Avoids retrieving PII. This is the default value. 
    - **Specific PII**: The RDT works for an specific entity.
    - **Generic PII**: The RDT works for any entity. 
  - **Restricted Data Elements** - A conditional text field to provide a comma separated list of restricted data types granted to the RDT.

- **createShipment** (Merchant Fulfillment) - Create a shipment with the information provided.
  - **Restricted Data Access** - This operation displays a conditional dropdown box because it returns Personally Identifiable Information (PII). 
    - **None**: Avoids retrieving PII. This is the default value. 
    - **Specific PII**: The RDT works for an specific entity.
    - **Generic PII**: The RDT works for any entity. 
  - **Restricted Data Elements** - A conditional text field to provide a comma separated list of restricted data types granted to the RDT.

- **confirmShipment** (Orders) - Updates the shipment confirmation status for a specified order.
  - **Path orderId** - An Amazon-defined order identifier in 3-7-7 format.

- **updateVerificationStatus** (Orders) - Updates (approves or rejects) the verification status of an order containing regulated products.
  - **Path orderId** - An Amazon-defined order identifier in 3-7-7 format.

- **updateShipmentstatus** (Orders) - Update the shipment status for an order that you specify.
  - **Path orderId** - An Amazon-defined order identifier in 3-7-7 format.

- **cancelReport** (Reports 2021-06-30) - Cancels the report that you specify. 
  - **Path reportId** - The identifier for the report. This identifier is unique only in combination with a seller ID.

- **createReport** (Reports 2021-06-30) - Creates a report.
- **createReportSchedule** (Reports 2021-06-30) - Creates a report schedule.
- **cancelReportSchedule** (Reports 2021-06-30) - Cancels the report schedule that you specify.
  - **Path reportScheduleId** - The identifier for the report schedule. This identifier is unique only in combination with a seller ID.

- **submitInvoice** (Shipment Invoicing) - Submit new invoices to Amazon.
  - **Path shipmentId** - The identifier for the shipment.

- **oneClickShipment** (Shipping) - Submits new one click purchases to Amazon.
  - **Header x-amzn-shipping-business-id** - Amazon shipping business to assume for this request. The default value is `AmazonShipping_UK`.

- **directPurchaseShipment** (Shipping) - Purchases the shipping service for a shipment using the best fit service offering. Returns purchase related details and documents.
  - **Header x-amzn-IdempotencyKey** - A unique value which the server uses to recognize subsequent retries of the same request.
  - **Header locale** - The IETF Language Tag. 
  - **Header x-amzn-shipping-business-id** - Amazon shipping business to assume for this request. The default value is `AmazonShipping_UK`.

- **unlinkCarrierAccount** (Shipping) - Unlink an associated carrier account.
  - **Path carrierId** - The carrier Id to unlink with merchant.
  - **Header x-amzn-shipping-business-id** - Amazon shipping business to assume for this request. The default value is `AmazonShipping_UK`.

- **purchaseShipment** (Shipping) - Purchases a shipping service and returns purchase related details and documents.
  - **Header x-amzn-IdempotencyKey** - A unique value which the server uses to recognize subsequent retries of the same request.
  - **Header x-amzn-shipping-business-id** - Amazon shipping business to assume for this request. The default value is `AmazonShipping_UK`.

- **generateCollectionForm** (Shipping) - Generates a collection form.
  - **Header x-amzn-IdempotencyKey** - A unique value which the server uses to recognize subsequent retries of the same request.
  - **Header x-amzn-shipping-business-id** - Amazon shipping business to assume for this request. The default value is `AmazonShipping_UK`.

- **cancelShipment** (Shipping) - Cancels a purchased shipment. 
  - **Path shipmentId** - The identifier for the shipment.
  - **Header x-amzn-shipping-business-id** - Amazon shipping business to assume for this request. The default value is `AmazonShipping_UK`.
  - **Restricted Data Access** - This operation displays a conditional dropdown box because it returns Personally Identifiable Information (PII). 
    - **None**: Avoids retrieving PII. This is the default value. 
    - **Specific PII**: The RDT works for an specific entity.
    - **Generic PII**: The RDT works for any entity. 
    - **Restricted Data Elements** - A conditional text field to provide a comma separated list of restricted data types granted to the RDT.

- **linkCarrierAccount** (Shipping) - Link a new carrier account.
  - **Path carrierId** - The carrier Id to link with merchant.
  - **Header x-amzn-shipping-business-id** - Amazon shipping business to assume for this request. The default value is `AmazonShipping_UK`.


## Get 

The **Get** operation includes read-only actions, designed to retrieve a single document. The output document format is JSON for all object types, except **downloadReport** in the **Reports 2021-06-30** API.  The following APIs are available under the **Amazon Selling Partner API** dropdown box. 

- Catalog Items 2020-12-01
- Catalog Items 2022-04-01
- FBA Inbound Eligibility
- Feeds 2021-06-30
- Fulfillment Inbound
- Fulfillment Outbound 2020-07-01
- Listings Items 2021-08-01
- Merchant Fulfillment
- Orders
- Reports 2021-06-30 
- Shipment Invoicing
- Shipping

### Object Types for the Get operation

**Object type**
  - **Operation fields**

- **getCatalogItem** (Catalog Items 2020-12-01, Catalog Items 2022-04-01) - Retrieves details for an item in the Amazon catalog.
  - **Path asin** - The Amazon Standard Identification Number (ASIN) of the item.

  - **Query marketplaceIds** - A comma-delimited list of Amazon marketplace identifiers. Data sets in the response contain data only for the specified marketplaces.

  - **Query includedData** - A comma-delimited list of data sets to include in the response. The default value is summaries.

  - **Query locale** - Locale for retrieving localized summaries. Defaults to the primary locale of the marketplace.

- **getItemEligibilityPreview** (FBA Inbound Eligibility) - Gets an eligibility preview for an item that you specify.
  - **Query marketplaceIds** - The identifier for the marketplace in which you want to determine eligibility. Required only when you chose **INBOUND** in **Query program**.

  - **Query asin** - The ASIN of the item for which you want an eligibility preview.

  - **Query program** - The program that you want to check eligibility against. The default value is **INBOUND**.

- **getFeed** (Feeds 2021-06-30) - Returns feed details for the feed that you specify.
  - **Path feedId** - The identifier for the feed. This identifier is unique only in combination with a seller ID.

- **getFeedDocument** (Feeds 2021-06-30) - Returns the information required for retrieving a feed document's contents.
  - **Path feedDocumentId** - The identifier of the feed document.

- **getShipment** (Fulfillment Inbound) - Provides the full details for a specific shipment within an inbound plan. 
  - **Path inboundPlanId** - The identifier of an inbound plan.
  - **Path shipmentId** - The identifier of a shipment. A shipment contains the boxes and units being inbound.
  - **Restricted Data Access** - This operation displays a conditional dropdown box because it returns Personally Identifiable Information (PII). 
    - **None**: Avoids retrieving PII. This is the default value. 
    - **Specific PII**: The RDT works for an specific entity.
    - **Generic PII**: The RDT works for any entity. 
- **Restricted Data Elements** - A conditional text field to provide a comma separated list of restricted data types granted to the RDT.

- **getInboundOperationStatus** (Fulfillment Inbound) - Gets the status of the processing of an asynchronous API call.
  - **Path operationId** - The identifier of an asynchronous operation.
  - **Path shipmentId** - The identifier of a shipment. A shipment contains the boxes and units being inbound.

- **getDeliveryChallanDocument** (Fulfillment Inbound) - Provides delivery challan document for PCP transportation in IN marketplace.
  - **Path inboundPlanId** - The identifier of an inbound plan.
  - **Path shipmentId** - The identifier of a shipment. A shipment contains the boxes and units being inbound.

- **getInboundPlan** (Fulfillment Inbound) - Fetches the top level information about an inbound plan.
  - **Path inboundPlanId** - The identifier of an inbound plan.

- **getShipmentContentUpdatePreview** (Fulfillment Inbound) - Retrieve a shipment content update preview which provides a summary of the requested shipment content changes along with the transportation cost implications of the change that can only be confirmed prior to the expiry date specified.
  - **Path inboundPlanId** - The identifier of an inbound plan.
  - **Path shipmentId** - The identifier of a shipment. A shipment contains the boxes and units being inbound.
  - **Path contentUpdatePreviewId** - The identifier of a content update preview.

- **getFeatureSKU** (Fulfillment Outbound 2020-07-01) - Returns the number of items with the sellerSKU you specify that can have orders fulfilled using the specified feature
   - **Path featureName** - The name of the feature. 
   - **Path sellerSku** - The identifier for an item in the given marketplace. `SellerSKU` is qualified by the seller's `SellerId`, which is included with every operation that you submit
   - **Query marketplaceId** - The marketplace for which to return the count.

- **getFulfillmentOrder** (Fulfillment Outbound 2020-07-01) - Returns the fulfillment order indicated by the specified order identifier.
  - **Path sellerFulfillmentOrderId** - The identifier assigned to the item by the seller when the fulfillment order was created.

- **getPackageTrackingDetails** (Fulfillment Outbound 2020-07-01) - Returns the fulfillment order indicated by the specified order identifier.
  - **Query packageNumber** - The unencrypted package identifier returned by the `getFulfillmentOrder` operation.

- **getListingsItem** (Listings Items 2021-08-01) - Returns details about a listings item for a selling partner.
  - **Path sellerId** - A selling partner identifier, such as a merchant account or vendor code.
  - **Path sku** - A selling partner provided identifier for an Amazon listing.
  - **Query marketplaceIds** - A comma-delimited list of Amazon marketplace identifiers for the request.
  - **Query issuelocale** - Locale for retrieving localized summaries. Defaults to the primary locale of the marketplace.
  - **Query includedData** - A comma-delimited list of data sets to include in the response. The default value is summaries.

- **getShipment** (Merchant Fulfillment) - Provides the full details for a specific shipment within an inbound plan.
  - **Path shipmentId** - The Amazon-defined shipment identifier for the shipment.
  - **Restricted Data Access** - This operation displays a conditional dropdown box because it returns Personally Identifiable Information (PII). 
    - **None**: Avoids retrieving PII. This is the default value. 
    - **Specific PII**: The RDT works for an specific entity.
    - **Generic PII**: The RDT works for any entity. 
- **Restricted Data Elements** - A conditional text field to provide a comma separated list of restricted data types granted to the RDT.

- **getOrderAddress** (Orders) - Returns the shipping address for the order that you specify.
  - **Path orderId** - An Amazon-defined order identifier in 3-7-7 format.
  - **Restricted Data Access** - This operation displays a conditional dropdown box because it returns Personally Identifiable Information (PII). 
    - **None**: Avoids retrieving PII. This is the default value. 
    - **Specific PII**: The RDT works for an specific entity.
    - **Generic PII**: The RDT works for any entity. 
- **Restricted Data Elements** - A conditional text field to provide a comma separated list of restricted data types granted to the RDT.

- **getOrder** (Orders) - Returns the order that you specify.
  - **Path orderId** - An Amazon-defined order identifier in 3-7-7 format.
  - **Restricted Data Access** - This operation displays a conditional dropdown box because it returns Personally Identifiable Information (PII). 
    - **None**: Avoids retrieving PII. This is the default value. 
    - **Specific PII**: The RDT works for an specific entity.
    - **Generic PII**: The RDT works for any entity. 
- **Restricted Data Elements** - A conditional text field to provide a comma separated list of restricted data types granted to the RDT.

- **getOrderBuyerInfo** (Orders) - Returns buyer information for the order that you specify.
  - **Path orderId** - An Amazon-defined order identifier in 3-7-7 format.
  - **Restricted Data Access** - This operation displays a conditional dropdown box because it returns Personally Identifiable Information (PII). 
    - **None**: Avoids retrieving PII. This is the default value. 
    - **Specific PII**: The RDT works for an specific entity.
    - **Generic PII**: The RDT works for any entity. 
- **Restricted Data Elements** - A conditional text field to provide a comma separated list of restricted data types granted to the RDT.

- **getOrderRegulatedInfo** (Orders) - Returns regulated information for the order that you specify.
  - **Path orderId** - An Amazon-defined order identifier in 3-7-7 format.
  - **Restricted Data Access** - This operation displays a conditional dropdown box because it returns Personally Identifiable Information (PII). 
    - **None**: Avoids retrieving PII. This is the default value. 
    - **Specific PII**: The RDT works for an specific entity.
    - **Generic PII**: The RDT works for any entity. 
- **Restricted Data Elements** - A conditional text field to provide a comma separated list of restricted data types granted to the RDT.

- **getReport** (Reports 2021-06-30) - Returns report details (including the reportDocumentId, if available) for the report that you specify.
  - **Path reportId** - The identifier for the report. This identifier is unique only in combination with a seller ID.

- **getReportDocument** (Reports 2021-06-30) - Returns the information required for retrieving a report document's contents.
  - **Path reportDocumentId** - The identifier for the report document.
  - **Restricted Data Access** - This operation displays a conditional dropdown box because it returns Personally Identifiable Information (PII). 
    - **None**: Avoids retrieving PII. This is the default value. 
    - **Specific PII**: The RDT works for an specific entity.
    - **Generic PII**: The RDT works for any entity. 
- **Restricted Data Elements** - A conditional text field to provide a comma separated list of restricted data types granted to the RDT.

- **getReportSchedule** (Reports 2021-06-30) - Returns report schedule details for the report schedule that you specify.
  - **Path reportScheduleId** - The identifier for the report document.

- **downloadReport** (Reports 2021-06-30) - Allows you to download reports using pre-signed URLs. 
  - **Report URL** - Pre-signed URL for the report document.The default value is empty.

  - **Compression Algorithm** - A dropdown box to select the correct algorithm if the report contents have been compressed. The response will be decompressed when the operation is successful.  

- **getInvoiceStatus** (Shipment Invoicing) - Returns the invoice status for the shipment you specifiy.
  - **Path shipmentId** - The shipment identifier for the shipment.

- **getShipmentDetails** (Shipment Invoicing) - Returns the Details about Shipment, Carrier Details, status of the shipment, container details and other details related to shipment based on the filter parameters value that you specify.
  - **Path shipmentId** - The identifier for the shipment. Get this value from the FBAOutboundShipmentStatus notification. To learn more, see the topic [Notifications API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/notifications-api-v1-use-case-guide) in the Amazon developer docs.
  - **Restricted Data Access** - This operation displays a conditional dropdown box because it returns Personally Identifiable Information (PII). 
    - **None**: Avoids retrieving PII. This is the default value. 
    - **Specific PII**: The RDT works for an specific entity.
    - **Generic PII**: The RDT works for any entity. 
- **Restricted Data Elements** - A conditional text field to provide a comma separated list of restricted data types granted to the RDT.

- **getShipmentDocuments** (Shipping) - Returns the shipping documents associated with a package in a shipment.
  - **Path shipmentId** - The shipment identifier originally returned by the **purchaseShipment** operation.
  - **Header x-amzn-shipping-business-id** - Amazon shipping business to assume for this request. The default value is `AmazonShipping_UK`.
  - **Query packageClientReferenceId** - The package client reference identifier originally provided in the request body parameter for the **getRates** operation.
  - **Query format** - The file format of the document. Must be one of the supported formats returned by the **getRates** operation.
  - **Query dpi** - The file format of the document. Must be one of the supported formats returned by the **getRates** operation.

- **getCollectionForm** (Shipping) - Reprints the collection form.
  - **Path collectionFormId** - The collection form Id to reprint a collection.
  - **Header x-amzn-shipping-business-id** - Amazon shipping business to assume for this request. The default value is `AmazonShipping_UK`.

- **getAdditionalInputs** (Shipping) - Returns the JSON schema to use for providing additional inputs when needed to purchase a shipping offering.
  - **Header x-amzn-shipping-business-id** - Amazon shipping business to assume for this request. The default value is `AmazonShipping_UK`.
  - **Query requestToken** - The request token returned in the response to the **getRates** operation. 
  - **Query rateId** - The rate identifier for the shipping offering (rate) returned in the response to the getRates operation.

- **getTracking** (Shipping) - Returns the tracking rate. 
  - **Header x-amzn-shipping-business-id** - Amazon shipping business to assume for this request. The default value is `AmazonShipping_UK`.
  - **Query trackingId** - A carrier-generated tracking identifier originally returned by the **purchaseShipment** operation.
  - **Query carrierId** - A carrier identifier originally returned by the **getRates** operation for the selected rate.


## Query

The **Query** operation includes read-only actions, designed to retrieve multiple documents. The input and output documents format is JSON.  The following APIs are available under the **Amazon Selling Partner API** dropdown box. 

- Catalog Items 2020-12-01
- Catalog Items 2022-04-01
- Feeds 2021-06-30
- Finances
- Fulfillment Inbound
- Fulfillment Outbound 2020-07-01
- Orders
- Reports 2021-06-30
- Sales
- Sellers
- Shipping

## Object Types for the Query operations

**Object type**
  - **Operation fields**

- **getCarrierAccountFormInputs** (Shipping) - Returns a list of input schema required to register a shipper account with the carrier.
  - **Header x-amzn-shipping-business-id** - Amazon shipping business to assume for this request. The default value is `AmazonShipping_UK`.

- **getCarrierAccounts** (Shipping) - Returns all carrier accounts for a merchant.
  - **Header x-amzn-shipping-business-id** - Amazon shipping business to assume for this request. The default value is `AmazonShipping_UK`.

- **getCollectionFormHistory** (Shipping) - Returns historical versions of the collection form .
  - **Header x-amzn-shipping-business-id** - Amazon shipping business to assume for this request. The default value is `AmazonShipping_UK`.

- **getFeatures** (Fulfillment Outbound 2020-07-01) - Returns a list of features available for Multi-Channel Fulfillment orders in the marketplace you specify, and whether the seller for which you made the call is enrolled for each feature.
  - **Query marketplaceId** - The marketplace for which to return the list of features.

- **getFeatureInventory** (Fulfillment Outbound 2020-07-01) - Returns a list of inventory items that are eligible for the fulfillment feature you specify.
  - **Path featureName** - The name of the feature for which to return a list of eligible inventory.
  - **Query marketplaceId** - The marketplace for which to return a list of the inventory that is eligible for the specified feature.
  - **Maximum Number of Documents** - The maximum number of documents to retrieve from Selling Partner. Provide a number greater than 0 to limit the results, otherwise the results will be unlimited.

- **getFeeds** (Feeds 2021-06-30) - Returns feed details for the feeds that match the filters that you specify.
  - **Query feedTypes** - A list of feed types used to filter feeds. When feedTypes is provided, the other filter parameters (**processingStatuses**, **marketplaceIds**, **createdSince**, **createdUntil**) and pageSize may also be provided. Either feedTypes or nextToken is required.
  - **Query marketplaceIds** - A list of marketplace identifiers used to filter feeds. The feeds returned will match at least one of the marketplaces that you specify.
  - **Query processing Statuses** - A list of processing statuses used to filter feeds.
  - **Query createdSince** - The earliest feed creation date and time for feeds included in the response, in ISO 8601 format. The default is 90 days ago. Feeds are retained for a maximum of 90 days.
  - **Query createdUntil**  - The latest feed creation date and time for feeds included in the response, in ISO 8601 format. The default is now.
  - **Query pageSize** - The maximum number of feeds to return in a single call.
  - **Maximum Number of Documents** - The maximum number of documents to retrieve from Selling Partner. Provide a number greater than 0 to limit the results, otherwise the results will be unlimited.


- **getFulfillmentPreview** (Fulfillment Outbound 2020-07-01) - Returns a list of fulfillment order previews based on shipping criteria that you specify.

- **getMarketplaceParticipations** (Sellers) - Returns a list of marketplaces that the seller submitting the request can sell in and information about the seller's participation in those marketplaces. 

- **getOrders** (Orders) - Returns orders that are created or updated during the specified time period. 
  - **Query CreatedAfter** - A date used for selecting orders created after (or at) a specified time. Only orders placed after the specified time are returned
  - **Query CreatedBefore** - A date used for selecting orders created before (or at) a specified time. Only orders placed before the specified time are returned.
  - **Query LastUpdatedAfter** - A date used for selecting orders that were last updated after (or at) a specified time. This includes updates made by Amazon and by the seller. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
  - **Query LastUpdatedBefore** - A date used for selecting orders that were last updated before (or at) a specified time.This includes updates made by Amazon and by the seller. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
  - **Query OrderStatuses** - A list of `OrderStatus` values used to filter the results. 
      * **Pending Availability** - This status is available for pre-orders only. The order has been placed, payment has not been authorized, and the release date of the item is in the future
      * **Pending** - The order has been placed but payment has not been authorized.
      * **Unshipped** - Payment has been authorized and the order is ready for shipment, but no items in the order have been shipped.
      * **Partially Shipped** - One or more, but not all, items in the order have been shipped.
      * **Shipped** - All items in the order have been shipped
      * **Invoice Unconfirmed** - All items in the order have been shipped. The seller has not yet given confirmation to Amazon that the invoice has been shipped to the buyer
      * **Unfulfillable** - The order cannot be fulfilled. This state applies only to Multi-Channel Fulfillment orders.
  - **Query marketplaceIds** - A list of marketplace identifiers used to filter reports. This specifies the marketplace in which the order was placed. 
  - **Query FulfillmentChannels** - A list that indicates how an order was fulfilled. Filters the results by fulfillment channel.
      * **AFN** - Fulfilled by Amazon.
      * **MFN** - Fulfilled by the seller.
  - **Query PaymentMethods** - A list of payment method values. Used to select orders paid using the specified payment methods.
      * **COD** - Cash on delivery.
      * **CVS** - Convenience store payment.
      * **Other** - Any payment method other than `COD` or `CVS`.
  - **Query BuyerEmail** - The email address of a buyer. Used to select orders that contain the specified email address.
  - **Query SellerOrderId** - An order identifier that is specified by the seller. Used to select only the orders that match the order identifier.

  :::note Important

  **FulfillmentChannels**, **OrderStatuses**, **PaymentMethod**, **LastUpdatedAfter**, **LastUpdatedBefore**, and **BuyerEmail** are unavailable when **SellerOrderId** is specified. 

  :::

  - **Query EasyShipShipmentStatuses** - A list of `EasyShipShipmentStatus` values. Used to select Easy Ship orders with statuses that match the specified values. If `EasyShipShipmentStatus` is specified, only Amazon Easy Ship orders are returned. 
      * **PendingSchedule** - The package is awaiting the schedule for pick-up.
      * **PendingPickUp** - Amazon has not yet picked up the package from the seller
      * **PendingDropOff** - The seller will deliver the package to the carrier.
      * **LabelCanceled** - The seller canceled the pickup.
      * **PickedUp** - Amazon has picked up the package from the seller.
      * **DroppedOff** - The package is delivered to the carrier by the seller.
      * **AtOriginFC** - The package is at the origin fulfillment center.
      * **AtDestinationFC** - The package is at the destination fulfillment center.
      * **Delivered** - The package has been delivered.
      * **RejectedByBuyer** - The package has been rejected by the buyer. 
      * **Undeliverable** - The package cannot be delivered.
      * **ReturningToSeller** - The package was not delivered and is being returned to the seller. 
      * **ReturnedToSeller** - The package was not delivered and was returned to the seller. 
      * **Lost** - The package is lost. 
      * **OutForDelivery** - The package is out for delivery. 
      * **Damaged** - The package was damaged by the carrier.

  - **Query ElectronicInvoiceStatuses** - A list of `ElectronicInvoiceStatus` values. Used to select orders with electronic invoice statuses that match the specified values.
      * **NotRequired** - Electronic invoice submission is not required for this order.
      * **NotFound** - The electronic invoice submission is not required for this order. 
      * **Processing** - The electronic invoice is being processed for this order.
      * **Errored** - The last submitted electronic invoice was rejected for this order.
      * **Accepted** - The last submitted electronic invoice was submitted and accepted.
  - **Query AmazonOrderIds** - A list of AmazonOrderId values. An `AmazonOrderId` is an Amazon-defined order identifier in 3-7-7 format.
  - **Query Actual FulfillmentSupplySourceId** - Denotes the recommended `sourceId` where the order should be fulfilled from.
  - **Query IsISPU** - When this checkbox is selected, the order is marked to be picked up from a store rather than delivered.
  - **Query StoreChainStoreId** - The store chain store identifier. Linked to a specific store in a store chain.
  - **Query EarliestDeliveryDateBefore** - A date used for selecting orders with a earliest delivery date before (or at) a specified time. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
  - **Query EarliestDeliveryDateAfter** - A date used for selecting orders with a earliest delivery date after (or at) a specified time. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format. 
  - **Query LatestDeliveryDateBefore** - A date used for selecting orders with a latest delivery date before (or at) a specified time. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
  - **Query LatestDeliveryDateAfter** - 
A date used for selecting orders with a latest delivery date after (or at) a specified time. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
  - **Restricted Data Access** - This operation displays a conditional dropdown box because it returns Personally Identifiable Information (PII). 
    - **None**: Avoids retrieving PII. This is the default value. 
    - **Specific PII**: The RDT works for an specific entity.
    - **Generic PII**: The RDT works for any entity. 

  - **Query MaxResultsPerPage** - A  number that indicates the maximum number of orders that can be returned per page. Value must be 1 - 100. Default 100.
  - **Maximum Number of Documents** - The maximum number of documents to retrieve from Selling Partner. Provide a number greater than 0 to limit the results, otherwise the results will be unlimited.


- **getOrderItems** (Orders) - Returns detailed order item information for the order that you specify.
  - **Path orderId** - An Amazon-defined order identifier in 3-7-7 format.
  - **Restricted Data Access** - This operation displays a conditional dropdown box because it returns Personally Identifiable Information (PII). 
    - **None**: Avoids retrieving PII. This is the default value. 
    - **Specific PII**: The RDT works for an specific entity.
    - **Generic PII**: The RDT works for any entity.  
  - **Maximum Number of Documents** - The maximum number of documents to retrieve from Selling Partner. Provide a number greater than 0 to limit the results, otherwise the results will be unlimited.  

- **getOrderItemsBuyerInfo** (Orders) - Returns buyer information for the order items in the order that you specify.
  - **Path orderId** - An Amazon-defined order identifier in 3-7-7 format.
  - **Restricted Data Access** - This operation displays a conditional dropdown box because it returns Personally Identifiable Information (PII). 
    - **None**: Avoids retrieving PII. This is the default value. 
    - **Specific PII**: The RDT works for an specific entity.
    - **Generic PII**: The RDT works for any entity.  
  - **Maximum Number of Documents** - The maximum number of documents to retrieve from Selling Partner. Provide a number greater than 0 to limit the results, otherwise the results will be unlimited.  

- **getOrderMetrics** (Sales) - Returns order metric details.
  - **Query marketplaceIds** - A list of marketplace identifiers used to filter reports. This specifies the marketplace in which the order was placed. 
  - **Query interval** - A time interval used for selecting order metrics. This takes the form of two dates separated by two hyphens.
  - **Query granularityTimeZone** - An IANA-compatible time zone for determining the day boundary. Required when specifying a granularity value greater than Hour. The granularityTimeZone value must align with the offset of the specified interval value. 
  - **Query granularity** - The granularity of the grouping of order metrics, based on a unit of time. The default is an hour.
  - **Query buyerType** - Filters the results by the buyer type that you specify, B2B (business to business) or B2C (business to customer). The default is all.
  - **Query fulfillmentNetwork** - Filters the results by the fulfillment network that you specify, MFN (merchant fulfillment network) or AFN (Amazon fulfillment network). Do not include this filter if you want the response to include order metrics for all fulfillment networks.
  - **Query firstDayofWeek** - Specifies the day that the week starts on if you choose `week` for **Query granularity**.
  - **Query asin** - Filters the results by the ASIN that you specify. You must choose either asin or sku.
  - **Query sku** - Filters the results by the SKU that you specify. You must choose either asin or sku.

- **getReports** (Reports 2021-06-30) - Returns report details for the reports that match the filters that you specify.
  - **Query reportTypes** -A list of report types used to filter reports. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) in the Amazon developer docs for more information. Either `reportTypes` or `nextToken` is required.
  - **Query processingStatuses** - A list of processing statuses used to filter reports.
  - **Query marketplaceIds** - A list of marketplace identifiers used to filter reports. The reports returned will match at least one of the marketplaces that you specify.
  - **Query createdSince** - The earliest report creation date and time for reports included in the response, in ISO 8601 date timeformat. The default is 90 days ago. Reports are retained for a maximum of 90 days.
  - **Query createdUntil**  - The latest report creation date and time for report included in the response, in ISO 8601 format. The default is now.
  - **Query pageSize** - The maximum number of reports to return in a single call.
  - **Maximum Number of Documents** - The maximum number of documents to retrieve from Selling Partner. Provide a number greater than 0 to limit the results, otherwise the results will be unlimited.

- **getReportSchedules** (Reports 2021-06-30) - Returns report schedule details that match the filters that you specify.
  - **Query reportTypes** - A list of report types used to filter report schedules. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) in the Amazon developer docs for more information.

- **getSelfShipAppointmentSlots** (Fulfillment Inbound) - Retrieves a list of available self-ship appointment slots used to drop off a shipment at a warehouse.
  - **Path inboundPlanId** - The identifier of an inbound plan.
  - **Path shipmentId** - Identifier of a shipment. A shipment contains the inbound boxes and units.
  - **Query pageSize** - The number of self ship appointment slots to return in the response matching the given query. The default is 100.
  - **Maximum Number of Documents** - The maximum number of documents to retrieve from Selling Partner. Provide a number greater than 0 to limit the results, otherwise the results will be unlimited.

- **getUnmanifestedShipments** (Shipping) - Returns a list of unmanifested carriers with shipment locations.

- **listAllFulfillmentOrders** - (Fulfillment Outbound 2020-07-01) Returns a list of fulfillment orders fulfilled after (or at) a specified date-time, or indicated by the next token parameter.
  - **Query queryStartDate** - A date used to select fulfillment orders that were last updated after (or at) a specified time. An update is defined as any change in fulfillment order status, including the creation of a new fulfillment order.
  - **Maximum Number of Documents** - The maximum number of documents to retrieve from Selling Partner. Provide a number greater than 0 to limit the results, otherwise the results will be unlimited.

- **listFinancialEventGroups** (Finances) - Returns financial event groups for a given date range. It may take up to 48 hours for orders to appear in your financial events.
  - **Query FinancialEventGroupStartedBefore** - A date used for selecting financial event groups that opened before (but not at) a specified date and time. The date entered must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format and greater than **FinancialEventGroupStartedAfter**. If FinancialEventGroupStartedAfter and FinancialEventGroupStartedBefore are more than 180 days apart, no financial event groups are returned. 
  - **Query FinancialEventGroupStartedAfter** - A date used for selecting financial event groups that opened after (or at) a specified date and time.  The date-time must be be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) and no later than two minutes before the request was submitted.
  - **Query MaxResultsPerPage** - A  number that indicates the maximum number of orders that can be returned per page. Value must be 1 - 100. Default 100.
  - **Maximum Number of Documents** - The maximum number of documents to retrieve from Selling Partner. Provide a number greater than 0 to limit the results, otherwise the results will be unlimited.

- **listPackingOptions** (Fulfillment Inbound) - Retrieves a list of all packing options for an inbound plan. Packing options must first be generated by the corresponding operation before becoming available.
  - **Path inboundPlanId** - The identifier of an inbound plan.
  - **Query pageSize** - The number of packing options to return in the response matching the given query. The default is 20.
  - **Maximum Number of Documents** - The maximum number of documents to retrieve from Selling Partner. Provide a number greater than 0 to limit the results, otherwise the results will be unlimited.

- **listInboundPlans** (Fulfillment Inbound) - Retrieves a list of all packing options for an inbound plan.
  - **Query status** - The status of an inbound plan.
  - **Query sortBy** - Sort by field.
  - **Query sortOrder**  - The sort order.
  - **Query pageSize** - The number of inbound plans to return in the response matching the given query. The default is 30.
  - **Maximum Number of Documents** - The maximum number of documents to retrieve from Selling Partner. Provide a number greater than 0 to limit the results, otherwise the results will be unlimited.

- **listInboundPlanPallets** (Fulfillment Inbound) - Provides a paginated list of pallet packages in an inbound plan.
  - **Path inboundPlanId** - The identifier of an inbound plan.
  - **Query pageSize** - The number of pallets to return in the response matching the given query. The default is 1000.
  - **Maximum Number of Documents** - The maximum number of documents to retrieve from Selling Partner. Provide a number greater than 0 to limit the results, otherwise the results will be unlimited.  


- **listInboundPlanItems** (Fulfillment Inbound) - Provides a paginated list of item packages in an inbound plan.
  - **Path inboundPlanId** - The identifier of an inbound plan.
  - **Query pageSize** - The number of pallets to return in the response matching the given query. The default is 1000.
  - **Maximum Number of Documents** - The maximum number of documents to retrieve from Selling Partner. Provide a number greater than 0 to limit the results, otherwise the results will be unlimited.  

- **listReturnReasonCodes** (Fulfillment Outbound 2020-07-01) - Returns a list of return reason codes for a seller SKU in a given marketplace. The parameters for this operation may contain special characters that require URL encoding.
  - **Query sellerSKu** - The seller SKU for which return reason codes are required. 
  - **Query marketplaceId** - The marketplace for which the seller wants return reason codes.
  - **Query sellerFulfillmentOrderId** - The identifier assigned to the item by the seller when the fulfillment order was created. The service uses this value to determine the marketplace for which the seller wants return reason codes.
  - **Query language** - The language that the `TranslatedDescription` property of the `ReasonCodeDetails` response object should be translated into.

- **listShipmentContentUpdatePreviews** (Fulfillment Inbound) - Retrieve a paginated list of shipment content update previews for a given shipment.
  - **Path inboundPlanId** - The identifier of an inbound plan.
  - **Path shipmentId** - Identifier of a shipment. A shipment contains the inbound boxes and units.
  - **Query pageSize** - The number of content update previews to return. The default is 20.
  - **Maximum Number of Documents** - The maximum number of documents to retrieve from Selling Partner. Provide a number greater than 0 to limit the results, otherwise the results will be unlimited.  

- **listitemComplianceDetails** (Fulfillment Inbound) - List the inbound compliance details for MSKUs in a given marketplace.
  - **Query mskus** - List of merchant SKUs - a merchant-supplied identifier for a specific SKU.
  - **Query marketplaceIds** - The Marketplace ID. Refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) in the Amazon developer docs for a list of possible values.

- **listPackingGroupItems** (Fulfillment Inbound) - Retrieves a page of items in a given packing group. 
  - **Path inboundPlanId** - The identifier of an inbound plan.
  - **Path packingGroupId** - The identifier of a packing group.
  - **Query pageSize** - The number of packing group items to return in the response matching the given query. The default is 100.
  - **Maximum Number of Documents** - The maximum number of documents to retrieve from Selling Partner. Provide a number greater than 0 to limit the results, otherwise the results will be unlimited.  

- **listShipmentPallets** (Fulfillment Inbound) - Provides a paginated list of pallet packages in a shipment.
  - **Path inboundPlanId** - The identifier of an inbound plan.
  - **Path shipmentId** - The Identifier of a shipment. A shipment contains the inbound boxes and units.
  - **Query pageSize** - The number of pallets to return in the response matching the given query. The default is 1000.
  - **Maximum Number of Documents** - The maximum number of documents to retrieve from Selling Partner. Provide a number greater than 0 to limit the results, otherwise the results will be unlimited. 

- **listPackingGroupBoxes** (Fulfillment Inbound) - Retrieves a page of items in a given packing group. 
  - **Path inboundPlanId** - The identifier of an inbound plan.
  - **Path packingGroupId** - The identifier of a packing group.
  - **Query pageSize** - The number of packing group boxes to return in the response matching the given query. The default is 100.
  - **Maximum Number of Documents** - The maximum number of documents to retrieve from Selling Partner. Provide a number greater than 0 to limit the results, otherwise the results will be unlimited. 

- **listTransportationOptions** (Fulfillment Inbound) - Retrieves all transportation options for a shipment.
  - **Path inboundPlanId** - The identifier of an inbound plan.
  - **Query placementOptionId** - The placement option to get transportation options for. Either `placementOptionId` or `shipmentId` must be specified.
  - **Query shipmentId** - The shipment to get transportation options for. Either `placementOptionId` or `shipmentId` must be specified.
  - **Query pageSize** - The number of transportation options to return in the response matching the given query. The default is 20.
  - **Maximum Number of Documents** - The maximum number of documents to retrieve from Selling Partner. Provide a number greater than 0 to limit the results, otherwise the results will be unlimited. 

- **listPlacementOptions** (Fulfillment Inbound) - Provides a list of all placement options for an inbound plan.
  - **Path inboundPlanId** - The identifier of an inbound plan.
  - **Query pageSize** - The number of placement options to return in the response matching the given query. The default is 20.
  - **Maximum Number of Documents** - The maximum number of documents to retrieve from Selling Partner. Provide a number greater than 0 to limit the results, otherwise the results will be unlimited. 

- **listShipmentBoxes** (Fulfillment Inbound) - Provides a paginated list of box packages in a shipment.
  - **Path inboundPlanId** - The identifier of an inbound plan.
  - **Path shipmentId** - The identifier of a shipment. A shipment contains the inbound boxes and units.
  - **Query pageSize** - The number of boxes to return in the response matching the given query. The default is 1000.
  - **Maximum Number of Documents** - The maximum number of documents to retrieve from Selling Partner. Provide a number greater than 0 to limit the results, otherwise the results will be unlimited.

- **listShipmentItems** (Fulfillment Inbound) - Provides a paginated list of item packages in a shipment.
  - **Path inboundPlanId** - The identifier of an inbound plan.
  - **Path shipmentId** - The identifier of a shipment. A shipment contains the inbound boxes and units.
  - **Query pageSize** - The number of items to return in the response matching the given query. The default is 1000.
  - **Maximum Number of Documents** - The maximum number of documents to retrieve from Selling Partner. Provide a number greater than 0 to limit the results, otherwise the results will be unlimited.

- **listDeliveryWindowOptions** (Fulfillment Inbound) - Retrieves all delivery window options for a shipment.
  - **Path inboundPlanId** - The identifier of an inbound plan.
  - **Path shipmentId** - The shipment to get delivery window options for.
  - **Query pageSize** - The number of delivery window options to return in the response matching the given query. The default is 100.
  - **Maximum Number of Documents** - The maximum number of documents to retrieve from Selling Partner. Provide a number greater than 0 to limit the results, otherwise the results will be unlimited.

- **listInboundPlanBoxes** (Fulfillment Inbound) - Provides a paginated list of box packages in an inbound plan.
  - **Path inboundPlanId** - The identifier of an inbound plan.
  - **Path shipmentId** - The shipment to get delivery window options for.
  - **Query pageSize** - The number of delivery window options to return in the response matching the given query. The default is 100.
  - **Maximum Number of Documents** - The maximum number of documents to retrieve from Selling Partner. Provide a number greater than 0 to limit the results, otherwise the results will be unlimited.

- **searchCatalogItems** (Catalog Items 2020-12-01) - Search for and return a list of Amazon catalog items and associated information.
  - **Query keywords** - A comma-delimited list of words or item identifiers to search the Amazon catalog for.
  - **Query marketplaceIds** - A comma-delimited list of Amazon marketplace identifiers for the request. 
  - **Query includedData** - A comma-delimited list of data sets to include in the response. The defualt value is summaries.
  - **Query brandNames** - A comma-delimited list of brand names to limit the search to.
  - **Query classificationIds** - A comma-delimited list of classification identifiers to limit the search to. 
  - **Query keywordsLocale** - The language the keywords are provided in. Defaults to the primary locale of the marketplace. 
  - **Query locale** - Locale for retrieving localized summaries. Defaults to the primary locale of the marketplace. 
  - **Query pageSize** - Number of results to be returned per page.
  - **Maximum Number of Documents** - The maximum number of documents to retrieve from Selling Partner. Provide a number greater than 0 to limit the results, otherwise the results will be unlimited.

- **searchCatalogItems** (Catalog Items 2022-04-01) - Search for and return a list of Amazon catalog items and associated information either by identifier or by keywords.
  - **Query identifiers** - A comma-delimited list of product identifiers to search the Amazon catalog for.Cannot be used with `keywords`.
  - **Query identifiersType** - A dropdown box listing types of product identifiers to search the Amazon catalog for. This field is required when **Query identifers** is provided. 
    * ASIN
    * EAN
    * GTIN
    * ISBN
    * JAN
    * MINSAN
    * SKU
    * UPC
  - **Query marketplaceIds** - A comma-delimited list of Amazon marketplace identifiers for the request.
  - **Query includedData** - A comma-delimited list of data sets to include in the response. Default: `summaries`.
  - **Query locale** - Locale for retrieving localized summaries. Defaults to the primary locale of the marketplace. 
  - **Query sellerId** - A selling partner identifier, such as a seller account or vendor code. Required when `identifiersType` is `SKU`.
  - **Query keywords** - A comma-delimited list of words to search the Amazon catalog for. Cannot be used with `identifiers`.
  - **Query brandNames** - A comma-delimited list of brand names to limit the search for `keywords`-based queries. Cannot be used with `identifiers`.
  - **Query classificationids** - A comma-delimited list of classification identifiers to limit the search for `keywords`-based queries. Cannot be used with `identifiers`.
  - **Query keywordsLocale** - The language of the keywords provided for `keywords`-based queries. Defaults to the primary locale of the marketplace. Cannot be used with `identifiers`.
  - **Query pageSize** - Number of results to be returned per page. The default is 20. 
  - **Maximum Number of Documents** - The maximum number of documents to retrieve from Selling Partner. Provide a number greater than 0 to limit the results, otherwise the results will be unlimited.

## Retry Logic for 429 error responses

For any connector operation execution, if the SP-API returns a 429 error response stating that the API rate limit is reached, the connector retries the request up to four times using a backoff strategy.


<OperationEnd />

