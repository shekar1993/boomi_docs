# Connectivity 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-b675bc1c-656b-41e7-90ae-e32766a87766"/>
</head>

## Autotask connector

**We fixed this issue:**

- Necessary runtime packages are now packaged with the connector. (CONC-7338)

To learn more, see the topic [Autotask connector](../../Integration/Connectors/r-atm-Autotask_connector_3829d2f2-346e-4525-9e67-6ae7143e10cd.md).

## Boomi DataHub connector

**We fixed this issue:**

- The Boomi DataHub connector no longer shows a “Not Found” error when fetching large batches of channel updates with the Fetch Channel Updates operation. (HUB-1655)

To learn more, see the topic [Boomi DataHub connector](../../Integration/Connectors/int-Boomi_Data_Hub_connector.md).

## Fiix - Partner connector

**We updated the following:**

- New Objects Added
  - BusinessRole
  - RCAAction
  - RCACause
  - RCAGrouping
  - RCAGroupingAction
  - RCAGroupingCause
  - RCAProblem
  - RegionUser
  - RegionUserGroup
  - UserCertification
  - WorkOrderTaskFile

- Objects Amended
  - Asset
  - Project
  - ScheduledMaintenance
  - Stock
  - StockHistory
  - User
  - WorkOrder

**We fixed this issue:**

- Removed logic to find `"` and replace within the code since this is preventing the connector from querying data which contains `"` within the query parameter. (CON-9808)

To learn more, see the topic [Fiix - Partner connector](../../Integration/Connectors/int-Fiix_Integration_connector_83569955-d262-4fc9-a596-61056dbbbde0.md).

## FTP v2 connector

**We fixed this issue:**

- The Process Reporting page now shows the correct values for the File name and the Remote Directory name in the Tracking Fields section for both the Create and Delete operations. (CON-1294)

To learn more, see the topic [FTP v2 connector](../../Integration/Connectors/int-FTP_SDK_connector_b2385da1-c374-481e-8ac4-f3777071365f.md).

## HTTP Client connector

**We fixed this issue:**

- The AWS4 signature will not be miscalculated when a Port Number or semicolon is included in the connection URL. (CON-2344)

To learn more, see the topic [HTTP Client connector](../../Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md).

## IFS REST - Partner connector

**We added these features:**

- The `Function` action type, as previously communicated, will be removed. You should now use the `Function V2` action type to call IFS functions.

- Custom Header Support for Content-Type and Accept Headers

This update addresses a previous issue related to Custom Header Support for IEEE Standard 754. You can now customize the Content-Type and Accept Headers using Custom Operation Properties in the Operation component.

Action Required: Customers who implemented the workaround can remove the `inheader_Content-Type` and `inheader_Accept` Dynamic Document properties from their processes. Although removing these properties is optional, keeping them will not cause any issues.

For Existing Processes: If you do not intend to customize your headers, no changes are necessary for existing deployed processes. However, if you want to customize your headers to support IEEE Standard 754, you will need to reimport your operations. (CON-9806)

To learn more, see the topic [IFS REST - Partner connector](../../Integration/Connectors/int-IFS_REST_Connector_e7e1c825-992f-42f8-a41d-f29f8b4992ea.md).

## RabbitMQ connector

**We fixed this issue:**

- Fixed critical and major Sonar issues for the connector. (CONC-7279)

**We added this feature:**

- Users can now add and extract custom header properties in the RabbitMQ connector, enhancing their ability to customize and utilize data within processes. (CONC-6961)

To learn more, see the topic [RabbitMQ connector](../../Integration/Connectors/int-RabbitMQ_connector_b45ea4e7-49f4-4fc2-af25-a22818e45112.md).

## REST Client connector

**We added this feature:**

- Amazon IAM Roles Anywhere Authentication is now available for this connector. (CON-9669)

**We fixed this issue:**

- The AWS4 signature will not be miscalculated when a Port Number or semicolon is included in the connection URL. (CON-9514)

To learn more, see the topic [REST Client connector](../../Integration/Connectors/int-REST_Client_connector_686f3452-ce89-4a04-bf73-2dfd603ae3f7.md).

## Salesforce Platform Events connector

:::note

The update to this connector, listed below, has been deferred from the Boomi Enterprise Platform release. If you applied version 24.09.0 during the Runtime release, you will remain on that version. Contact Support if you encounter any issues.

:::

**We added this feature: (Has since been deferred to a future release)**

- Allow the SFPE listen manager to use the Persisted Connector Cache to save and retrieve the `replayID` on send and receive actions when the **Enable Persisted Connector Cache** (`com.boomi.container.connector.persistence.enabled`) container property is enabled in the Advanced Properties section of the container properties. If the container owner is filtering out a specific set of connectorType values to use connector property persistence on runtime, then ensure that this connector is included. 

  This allows the SFPE connector to persist the `replayID` and start over from the point before the stop when pausing or stopping the listener.

  If the persisted `replayID` is invalid, the fail over is to the initial `replayID` mentioned in the connection. (CON-9496)

## SAP Business ByDesign connector

**We fixed this issue:**

- Necessary runtime packages are now packaged with the connector. (CONC-3408)

To learn more, see the topic [SAP Business ByDesign connector](../../Integration/Connectors/r-atm-SAP_Cloud_for_Customer_Connector_f8083b5a-a526-4782-beed-b708d9e4ab40.md).

## SDK connectors

**We added this feature:**

- Ability to show the document and tracked fields in process reporting for SDK operations that have input documents getting tracked. This will mimic the behavior of legacy SDK connectors. (CON-386)

## ServiceNow REST connector

**We fixed this issue:**

- Necessary runtime packages are now packaged with the connector. (CONC-3411)

To learn more, see the topic [ServiceNow REST connector](../../Integration/Connectors/r-atm-ServiceNow_REST_connector_507b6914-9f6a-45ef-a832-880d7430881c.md).

## Shopify connector

**We fixed this issue:**

- Addressed flagged Sonar issues.

To learn more, see the topic [Shopify connector](../../Integration/Connectors/r-atm-Shopify_connector_0ef10e52-18e4-483a-9b59-c0d957f06faa.md).

## Snowflake connector

**We fixed these issues:**

- Enhanced the Snowflake connector so that the Bulk Unload operation properties (S3 Bucket Name, AWS Region, and Internal Stage Name) are overridden via dynamic operation property. (CONC-6848)

- Enhanced the Snowflake connector so that the Bulk Load operation properties (S3 Bucket Name, AWS Region, Internal Stage Name, and Internal Source File Path) are overridden via dynamic operation property. (CONC-6847)

- Vulnerability issue of type Denial of Service was resolved to make the connector more secure. (CONC-8025)

To learn more, see the topic [Snowflake connector](../../Integration/Connectors/int-Snowflake_Connector_f551004c-1429-4fe1-85c1-b345d37ab73c.md).

## Solace PubSub+ - Partner connector

:::note

The update to this connector, listed below, has been removed from the Boomi Enterprise Platform release. If you applied version 305 during the Runtime release, be aware that you will be reverted back to version 300.

:::

**We added this feature: (Has since been deferred to a future release)**

- Introduced support for negative acknowledgement (NACK) of messages in Listen and Get operations using the FAILED settlement outcome. The version of the Solace PS+ broker that supports NACK using FAILED settlement outcome is version 10.2.1 and later. However, it maintains compatibility with brokers that do not support the FAILED settlement capability. Note that this NACK capability is automatically processed internally to the connector and requires no user interaction or configuration. (CON-9807)

## Stripe (Tech Preview) connector

**We added these features:**

- Enhanced Tech Preview connector  
  - When an action is selected for the Stripe connector, only the supported object types for that action (e.g: Customers, Charges, Invoices) will be displayed at the import tab.
  - Updated Request/Response Profiles for Customers, Products, Prices, Payment Links, Payment Intents, Charges, Invoice Items, and Invoices to resolve earlier profile configuration mismatches and ensure smoother integration.
  - Introduced the new List action for the objects Customers, Products, Prices, Payment Links, Invoices, Invoice Items, Payment Intents and Charges.
  - Introduced new objects Invoices, Invoice Lines, Charges and Payment Intents.
  - Enhanced user experience by making the `id` parameter available as a connector step parameter for the **Get** action and as part of the request profile for the **Update** action. (CONC-6765)

To learn more, see the topic [Stripe (Tech Preview) connector](../../Integration/Connectors/int-Stripe_connector.md).
