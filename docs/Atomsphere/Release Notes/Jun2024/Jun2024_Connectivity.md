# Connectivity 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-41fc3d6a-3d70-4406-838b-129f71164fb3"/>
</head>


## Amazon S3 connector

**We fixed this issue:**

- Amazon S3 connector is updated with the latest SDK version. (CONC-6393)

To learn more, see the topic [Amazon S3 connector](../../Integration/Connectors/r-atm-Amazon_S3_connector_e69ef1f3-37dd-420c-9c7a-af470c969bc7.md).

## Database V2 connector

**We fixed these issues:**

- When importing stored procedures in the Database V2 connector, the user can specify a string or wildcard to limit the number of stored procedures that are searched. (CONC-2069)

- Resolved an issue where the Filter field was not visible during import operations. (CONC-7096)

- The Database V2 connector resolves the `nvarchar` parameter successfully when it is used in the WHERE clause of a Standard Get action to a MSSQL database. (CONC-4972)

To learn more, see the topic [Database V2 connector](../../Integration/Connectors/int-Database_V2_connector_7b04dbdd-ef36-4a2f-b6ff-b038b3f60ff2.mdx).

## Files.com - Partner connector

**We added the following features:**

- Added 9 new actions:
    - Copy
        - File and Folder
    - Create
        - Folder, Group, ShareLink, ShareLinkNotification, ShareLinkRecipient, and User
    - Delete
        - File, Folder, Group, ShareLink, ShareLinkNotification, and User
    - Download
        - File
    - List
        - Folder, Groups, ShareLinks, ShareLinkDownloads, ShareLinkNotifications, ShareLinkRecipients, ShareLinkRegistrations, and Users
    - Move
        - File and Folder
    - Show
        - FileDetails, FolderDetails, GroupDetails, ShareLinkDetails, ShareLinkNotificationDetails, and UserDetails
    - Update
        - Group, ShareLink, ShareLinkNotification, and User
    - Upload
        - File
- Deprecated the 3 original operations, which are still available in this version for backward compatibility. (CON-9497)

- Improved connectivity, throughput, and auto-retry capabilities.

To learn more, see the topic [Files.com - Partner connector](../../Integration/Connectors/r-atm-Files_connector_233ee8d5-7738-4ed7-86a1-37c85563592c.md).

## Google BigQuery connector

**We fixed these issues:**

- The Dataset ID is available as a dynamic operation property when using the Streaming Insert and Upsert actions. (CONC-5787)

- The connector uses the resumable API to resume an upload operation after a communication failure has interrupted the flow of data. (CONC-5224)

To learn more, see the topic [Google BigQuery connector](../../Integration/Connectors/r-atm-Google_BigQuery_connector_e68dae37-25d8-4653-8cf8-14406617cd01.md).

## IFS REST - Partner connector

**We fixed this issue:**

- A maximum of 5 retries was implemented for cases where the server responds with a `MI_MODIFIED_ERROR` (503 status code). This approach posed challenges when the requests included payloads. (CON-9498)

To learn more, see the topic [IFS REST - Partner connector](../../Integration/Connectors/int-IFS_REST_Connector_e7e1c825-992f-42f8-a41d-f29f8b4992ea.md).
    
## Kafka connector

**We fixed this issue:**

- Messages read or listened from a Kafka topic will now be processed without exceptions when the header value is missing, and the property will be displayed in tracked properties with the header value as a blank string. (CONC-6347)

To learn more, see the topic [Kafka connector](../../Integration/Connectors/int-Kafka_connector_c9d1cdde-8864-4408-882b-64520400fdbb.md).

## Salesforce REST connector

**We added these features:**

- A new overridable operation field, **External ID Value**, indicates the object to update in the Upsert operation when the Operation API is configured as REST API. If left blank, a new object will be created. This field is ignored when batch count is set greater than 1. (CONC-6396)

- A new grant type when you authenticate using OAuth 2.0, **Client Credentials**. (CONC-6475)

- A new option in the Operation API dropdown box for the Create, Delete, Update, and Upsert operations, **Composite API**. (CONC-6617, CONC-6676, CONC-6677, CONC-6678)

- The Salesforce REST connector is now in General Availability (GA). (CONC-5564)

- The operations names for the connector were updated to use Title Case. Although these changes will not affect process executions, if you want to update your process in the build canvas, you will need to re-select the action and operation component in the connector step before deploying.

To learn more, see the topic [Salesforce REST connector](../../Integration/Connectors/int-Salesforce_REST_connector_9fe91520-cc0b-451e-93da-870ea9ce9d82.md).

## Shopify connector

**We fixed this issue:**

- Necessary runtime packages are now packaged with the connector. (CONC-5307)

To learn more, see the topic [Shopify connector](../../Integration/Connectors/r-atm-Shopify_connector_0ef10e52-18e4-483a-9b59-c0d957f06faa.md).

## Snowflake connector

**We fixed this issue:**

- Heap memory usage complies with acceptable standards, resulting in successful execution processes. (CONC-6481)

To learn more, see the topic [Snowflake connector](../../Integration/Connectors/int-Snowflake_Connector_f551004c-1429-4fe1-85c1-b345d37ab73c.md).







