# Connectivity 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-332c54cf-445e-417f-8c30-072aa8a12dd3"/>
</head>





## Aible AI - Partner connector 

Features:

-   Two new operations to create datasets for AI analysis in Aible:

    -   `CREATE` - creates a complete dataset in Aible using the documents one execution of a process.
    -   `SEND` - incrementally builds a dataset in Aible Y-writing documents and passing them through unchanged, allowing the Aible component to be dropped transparently into any existing process.
-   Simplified authentication using Aible login credentials.
-   Aible connections can be reused to connect to different projects and tenants.

\(CON-7161\)

To learn more, see the topic [Aible AI - Partner connector](/docs/Atomsphere/Integration/Connectors/int-Aible_connector_b2c80ebe-82f6-4130-b9ad-10b5183e0da3.md).

## Ceres Technology - Partner connector 

Feature:

-   New connector release to support the integration between Ceres Technology and the Boomi Enterprise Platform. \(CON-7285\)



To learn more, see the topic [Ceres Technology - Partner connector](/docs/Atomsphere/Integration/Connectors/r-atm-Ceres_Tech_connector_5a328f60-ba7e-4f63-8041-58527fb5212f.md).

## Files.com - Partner connector 

Feature:

-   New connector release to support the integration between Files.com and the Boomi Enterprise Platform. \(CON-7037\)


To learn more, see the topic [Files.com - Partner connector](/docs/Atomsphere/Integration/Connectors/r-atm-Files_connector_233ee8d5-7738-4ed7-86a1-37c85563592c.md).

## MongoDB connector 

Fixes:

-  Resolved an issue where an unstructured query encountered a null pointer exception. With this fix, documents matching the condition are fetched successfully without any exceptions. (CONC-1284)

-   Resolved an issue where `“readStartDocument can only be called when CurrentBSONType is DOCUMENT, not when CurrentBSONType is NULL“` error message is displayed for retrieving document for Null datatype using a GET operation. With this fix, the process is executed successfully and the document is retrieved for Null datatype using a GET operation. \(CONC-1285\)

-   Resolved an issue where delete operation batching considered only one document per batch despite giving a different batch count. With this fix, batch count input is not considered for successful execution of delete operation. \(CONC-1286\)


To learn more, see the topic [MongoDB connector](/docs/Atomsphere/Integration/Connectors/int-MongoDB_connector_a6cce0aa-00a6-48d0-bfbe-feb2474b57e1.md).

## Shopify connector 

**Deferred:** Subsequent to the April 2023 , this connector update was postponed and will be rescheduled.

Fix:

-   Fixed an issue where a user is not able to set a filter on the `order_id` field because that option was not listed in the drop-down list. With this fix, the user is able to set a filter on the `order_id` field while creating a Query operation. \(CONC-1889\)


Features:

-   Migrated the deprecated [POST: Create a new Fulfillment](https://shopify.dev/docs/api/admin-rest/2022-04/resources/fulfillment#post-orders-order-id-fulfillments) endpoint to a new [POST: Creates a fulfillment for one or many fulfillment orders](https://shopify.dev/docs/api/admin-rest/2022-04/resources/fulfillment#post-fulfillments) endpoint. \(CON-1860\)

-   Migrated the deprecated [PUT: Modify an existing Fulfillment](https://shopify.dev/docs/api/admin-rest/2022-04/resources/fulfillment#put-orders-order-id-fulfillments-fulfillment-id) endpoint to a new [POST: Updates the tracking information for a fulfillment](https://shopify.dev/docs/api/admin-rest/2022-04/resources/fulfillment#post-fulfillments-fulfillment-id-update-tracking) endpoint. \(CONC-1913\)

-   Migrated the deprecated [POST: Cancel a Fulfillment for an Order](https://shopify.dev/docs/api/admin-rest/2022-04/resources/fulfillment#post-orders-order-id-fulfillments-fulfillment-id-cancel) endpoint to a new [POST: Cancel a Fulfillment](https://shopify.dev/docs/api/admin-rest/2022-04/resources/fulfillment#post-fulfillments-fulfillment-id-cancel) endpoint. \(CONC-1924\)


## Snowflake connector 

Fixes:

-   Resolved an issue where processes with the CREATE operation failed with the following error message: `Error in batch 1: Errors occurred while executing SQL statement: net.snowflake.client.jdbc.SnowflakeSQLException: Can't parse '20220901 155204.000' as timestamp with format 'AUTO'`. With this fix, processes will not fail with the aforementioned message regardless of data or batching size. \(CONC-1790\)

-   Resolved an issue where the replacement parameters for the staging path were not being populated by their respective environment variables; for example, using the `$DATE` parameter did not return the expected numerical representation of today's date and instead remained a variable. With this fix, the staging string will be populated with the correct values at runtime. \(CONC-1785\)


To learn more, see the topic [Snowflake connector](/docs/Atomsphere/Integration/Connectors/int-Snowflake_Connector_f551004c-1429-4fe1-85c1-b345d37ab73c.md).

## Solace PubSub+ - Partner connector 

Features:

-   Add support for the PubSub+ Event Portal 2.0.



-   Java 8 \(v1.8\) is now the minimum supported version. Prior versions of Java are not supported.



Fix:

-   Fixed an issue where the Listeners would enter an unrecoverable state after hitting the Atom Worker's thread limit.




To learn more, see the topic [Solace PubSub+ - Partner connector](/docs/Atomsphere/Integration/Connectors/int-Solace_PubSub_connector_b38dbd64-539a-40f5-854b-1efd40b4477d.md).

## SuccessFactors - Partner connector 

Fix:

-   Reduced the HTTP read timeout from 10 minutes to 8 minutes.


To learn more, see the topic [SuccessFactors - Partner connector](/docs/Atomsphere/Integration/Connectors/r-atm-SuccessFactors_Connector_93ec6fae-8624-466e-b309-728de281d56a.md).

## Ubix - Partner connector 

Feature:

-   New connector release to support the integration between UBIX Advanced Analytics and the Boomi Enterprise Platform. \(CON-7276\)

This connector is not in the Runtime Release.

To learn more, see the topic [Ubix - Partner connector](/docs/Atomsphere/Integration/Connectors/int-Ubix_connector_ccb8007a-f4ab-44ea-985b-8d82bbc26c5a.mdx).

