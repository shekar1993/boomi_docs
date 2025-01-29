import TrackedProperties from './_TrackedProperties.md'

# Shopify connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-bf141390-0e25-4b55-b797-099dcf619884"/>
</head>


The Shopify connector enables you to integrate with Shopify, the e-commerce site for setting up and running online storefronts.

You can use the Shopify connector to create, delete, get, query, and update objects in Shopify. You can integrate Shopify and an ERP \(for example, NetSuite\) to synchronize your Shopify product catalog and orders with your inventory so that it's always correct.

## Connector configuration 

To configure a connector to communicate with Shopify, set up these components:

-   Shopify connection
-   Shopify operation

## Supported editions 

The connector supports the following version of the Shopify API:

-   Version 2024-11

:::note

Shopify occasionally changes their APIs and resources to help your business improve. As a result, you may need to change your apps to take advantage of new features and adjust for changed or retired features. For more information, see the [Shopify Developer changelog](https://shopify.dev/changelog).

:::

## Prerequisites 

To use the connector and implement a connection to your Shopify storefront from the Boomi Enterprise Platform, have the following information available:

-   Check for TLS 1.2 support in your Atom. The Shopify connector only supports TLS 1.2, and support for TLS versions 1.0 and 1.1 have been removed to better protect your customer data. If you do not enable TLS 1.2 support in your Atom, you will see connection errors. For more information about enabling TLS 1.2 support, see the related Properties panel reference topic \(Advanced tab, HTTPS Protocols property\) and the related Community article about disabling TLS 1.0.

-   Your storefront address provided by Shopify when you opened your store. If you can't remember your shop name, you can find it by logging into your Shopify admin \(General Settings page, Store name field\). Also, when logged into Shopify admin, the URL should include your store name.
-   For OAuth 2.0 authentication, have your Shopify client ID and secret, the authorization and access token URL, your scope, and generate an access token. Verify that each entry in the scope is separated by a comma.
-   For Access token authentication, have your private app's Admin API password which you generate from the Shopify admin of the store you want to connect with your app.
- Shopify Access scope defines the permissions for Boomi processes, impacting what data can be accessed or modified. New access tokens need to be generated when the permissions associated with the access scope change.


## Supported objects 

The following objects are supported by one or more of the Shopify operation actions:

| **Object**                | **Advanced Query** | **Calculate** | **Cancel** | **Close** | **Complete** | **Create** | **Delete** | **Execute** | **Get** | **Hold** | **Move** | **Open** | **Query** | **Release Hold** | **Reschedule** | **Update** |
|--------------------------|--------------------|--------------|----------|---------|------------|----------|---------|----------|-------|-------|-------|-------|-------|--------------|--------------|---------|
| Customer                 | X                  |              |          |         |            | X        | X       |          | X     |       |       |       | X     |              |              | X       |
| Custom Collection        |                    |              |          |         |            | X        | X       |          | X     |       |       |       | X     |              |              | X       |
| Fulfillment              |                    |              | X        |         | X          | X        |         |          | X     |       |       | X     | X     |              |              | X       |
| Fulfillment (Deprecated)*|                    |              | X        |         |            | X        |         |          |       |       |       |       |       |              |              | X       |
| Fulfillment Order        |                    |              | X        | X       |            |          |         |          | X     | X     | X     | X     | X     | X            | X            |         |
| Inventory Item           |                    |              |          |         |            |          |         |          | X     |       |       |       | X     |              |              | X       |
| Inventory Level          |                    |              |          |         |            |          | X       | X        |       |       |       |       | X     |              |              |         |
| Location                 |                    |              |          |         |            |          |         |          | X     |       |       |       | X     |              |              |         |
| Order**                    |                    |              | X        | X       |            | X        | X       |          | X     |       |       | X     |      |              |              |        |
| Product                  |                    |              |          |         |            | X        | X       |          | X     |       |       |       | X     |              |              | X       |
| Refund                   |                    | X            |          |         |            | X        |         |          | X     |       |       |       | X     |              |              |         |
| Transaction              |                    |              |          |         |            | X        |         |          | X     |       |       |       | X     |              |              |         |
| Variant (Product)        |                    |              |          |         |            | X        | X       |          | X     |       |       |       | X     |              |              | X       |


**\*** Fulfillment \(Deprecated\) must be selected if you are using the Shopify 2022-04 API version. The recommendation is to upgrade to the Shopify 2023-01 API version for new Fulfillment updates.

**\*\*** Order API version is upgraded to 2023-07 and the 2020-07 version is no longer supported. It is recommended to re-import the schemas to get advantage of all the updates, new features and adjust for the change or retired features. 

## Logging: 

If the API response headers contain `x-shopify-api-deprecated-reason`, `x-shopify-api-version-warning` or `x-shopify-api-version`, these will be logged accordingly as document logs.
The API endpoint that was hit, along with the query parameters, will also be logged as document logs.


<TrackedProperties />
