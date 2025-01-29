# Amazon Selling Partner (Tech Preview) connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-555fe12f-6a95-410c-80f1-a4189602b8ab"/>
</head>

The Amazon Selling Partner connector allows you to utilize several of the Selling Partner API (SP-API) APIs to programmatically access data on orders, shipments, payments, and much more within a process. 

## Connector configuration

To configure the Amazon Selling Partner connector to communicate with the SP-API, set up two components:

-   Amazon Selling Partner connection
-   Amazon Selling Partner operation

This design provides reusable components that contain connection and operation settings. After building your connection and operation, set up your connector within a process. When the process is defined properly, Integration can utilize the many operations included in the SP-API with the Amazon Selling Partner connector.

## Supported APIs

Currently, the Amazon Selling Partner connector supports the following APIs:

- Catalog Items 2020-12-01
- Catalog Items 2022-04-01
- FBA Inbound Eligibility
- Feeds 2021-06-30
- Finances
- Fulfillment Inbound
- Fulfillment Outbound 2020-07-01
- Listings Items 2021-08-01
- Merchant Fulfillment
- Orders
- Reports 2021-06-30
- Sales
- Sellers
- Shipment Invoicing
- Shipping

## Prerequisites 

To utilize the SP-API in Integration, you need the following:

- An Amazon Professional Selling Account. You need to be registered as a developer. To learn more, see the topic [Registering as a developer](https://developer-docs.amazon.com/sp-api/docs/registering-as-a-developer) topic in the Amazon developer docs.

- An Atom deployed in either a hosted environment or on a local machine.

## Tracked properties

This connector does not have tracked properties.

