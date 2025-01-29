# Connectivity 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-7b154969-aa51-4edb-861f-4abb7776a6c3"/>
</head>


## Amazon SQS connector

**We have fixed this issue:**

- Necessary runtime packages are now packaged with the connector. (CONC-6400)

To learn more, see the topic [Amazon SQS connector](../../Integration/Connectors/r-atm-Amazon_SQS_connector_a018e9b9-7d51-4f2b-9b6f-8ada84475f6c.md).

## Boomi for SAP connector

**We added this feature:**

- A new operation: LISTEN

  - It allows the connector to browse WebSocket EDA subscriptions, build response profiles, and connect to corresponding WebSocket servers identified through browse. It supports JSON and XML schemas.
  
  - Once connected, the connector listens to any message sent to the subscription’s receiver. It then processes this message and submits the result to downstream processes. If the connection fails, one error is submitted, and an indefinite retry loop is started. (CON-9646)

:::info Important

SAP will send events to the WebSocket server regardless of listening connectors; the event may be lost if no connector is listening.

:::

To learn more, see the topic [Boomi for SAP connector](../../Integration/Connectors/int-Boomi_SAP_connector.md).

## Box connector

**We have fixed this issue:**

- Box connector is updated with the latest SDK version 2.18.2. (CONC-7067)

To learn more, see the topic [Box connector](../../Integration/Connectors/r-atm-Box_connector_6b3e3d8e-f379-40fd-8644-1e8938cfa1f3.md).

## Disk v2 connector

**We have fixed this issue:**

- Necessary runtime packages are now packaged with the connector. (CONC-2999)

To learn more, see the topic [Disk v2 connector](../../Integration/Connectors/int-Disk_v2_connector_d88d0ca9-b27e-44bd-ac32-dc1233e68123.md).

## Eyer - Partner connector

**We added these features:**

- Consolidated all operations into a single operation, controlled with parameters.

- Added multi-tenancy support

(CON-9647)

To learn more, see the topic [Eyer - Partner connector](../../Integration/Connectors/int-Eyer_connector.md).

## Files.com - Partner connector

**We added this feature:**

- A Limit option was added to the List operation. Results can now be limited to the number specified. (CON-9648)

**We fixed this issue:**

- Fixed a defect in the **Per Page** option of the deprecated **List folder items** operation that caused it to be ignored. (CON-9648)

To learn more, see the topic [Files.com - Partner connector](../../Integration/Connectors/r-atm-Files_connector_233ee8d5-7738-4ed7-86a1-37c85563592c.md).

## Hadoop connector

**We have fixed this issue:**

- Necessary runtime packages are now packaged with the connector. (CONC-5855)

To learn more, see the topic [Hadoop connector](../../Integration/Connectors/r-atm-Hadoop_connector_33d08b80-8f21-46e0-9440-6e87e47d8714.md).

## MongoDB connector

**We have fixed these issues:**

- The connector has improved exception handling. (CONC-3450)

- Memory usage optimization for Get and Query operations. (CONC-5540)

- This is an enhancement to the MongoDB connector to support Azure CosmosDB MongoDB variant for Get and Query operation by addressing the default 1MB document size limit restriction. Maximum document size can be controlled via new container property - `com.boomi.connector.mongodb.maxDocumentSize`.

- For Cosmos DB `com.boomi.connector.mongodb.maxDocumentSize` should be set to less than 1, in this case the size limit restriction of the document will be removed. (CONC-6001 and CONC-5400)

To learn more, see the topic [MongoDB connector](../../Integration/Connectors/int-MongoDB_connector_a6cce0aa-00a6-48d0-bfbe-feb2474b57e1.mdx).

## RabbitMQ connector

**We have fixed this issue:**

- Necessary runtime packages are now packaged with the connector. (CONC-5338)

To learn more, see the topic [RabbitMQ connector](../../Integration/Connectors/int-RabbitMQ_connector_b45ea4e7-49f4-4fc2-af25-a22818e45112.md).

## SAP HANA Database connector

**We have fixed these issues:**

- SAP HANA Database connector now supports decimal data type for the following operations: Insert, Query, Update, Upsert, Delete, Bulk Load, and Bulk Unload. (CONC-1655)

- SAP HANA Database connector now supports decimal data type for Stored Procedure. (CONC-5494)

- Using the SAP HANA connector user can perform Query operation, accessing multiple tables that contain decimal data types. (CONC-6049)

- The connector is upgraded to the latest driver version 2.19.16, to support SPS O6 Revision 67. (CONC-5582)

To learn more, see the topic [SAP HANA Database connector](../../Integration/Connectors/int-SAP_HANA_Database_connector_677cc0c5-2232-4dc2-bd8a-6f2e030f9898.mdx).

## Snowflake connector

**We have fixed these issues:**

- The connector successfully supports **Create** action for multiple documents having different missing fields when **Input Options for Missing Fields** field configured with the **Snowflake defaults for empty fields** option and Batch Size set to one. (CONC-5413)

- Vulnerability issue of type Denial of Service was resolved to make the Connector more secure. (CONC-2963)

- Fixed multiple critical and major code quality issues for the Snowflake connector. (CONC-6597, CONC-6596, CONC-6512 and CONC-6503)

- Number of SnowSQL Statements tool tip was updated to make it more informative. While Batch Size was updated for getting query results. (CONC-6577)

To learn more, see the topic [Snowflake connector](../../Integration/Connectors/int-Snowflake_Connector_f551004c-1429-4fe1-85c1-b345d37ab73c.md).

## Veeva connector

**We added these features:**

- A new object type, **Extract Data Files**, to export multiple files at once from your vault in the **Execute** operation. You can upload these files to another vault or different system altogether. (CONC-5239)

- A new object type, **Load Data Objects**, to upload multiple files at once to your vault in the **Execute** operation. (CONC-5509)

**We made these changes:**

- The Veeva connector is now in General Availability (GA). (CONC-5561)

- The **Delete** operation is no longer available for this connector; it was moved to the **Execute** operation. (CONC-6785)

- The **Get** operation is no longer available for this connector; it was moved to the **Execute** operation. (CONC-6876)

- The **QUERY** operation was renamed to **Query Vault**. (CONC-6870)

To learn more, see the topic [Veeva connector](../../Integration/Connectors/int-Veeva_connector_2a2709f7-b72a-4f5a-96cd-c4a1ba89b4ac.md).

## Workday Prism Analytics (Tech Preview) connector

**We have fixed this issue:**

- Necessary runtime packages are now packaged with the connector. (CONC-5341)

To learn more, see the topic [Workday Prism Analytics (Tech Preview) connector](../../Integration/Connectors/r-atm-Workday_Prism_connector_d6a12964-d667-4d5f-9e92-8290b8171b74.md).

## Zuora connector

**We have fixed this issue:**

- Necessary runtime packages are now packaged with the connector. (CONC-5340)

To learn more, see the topic [Zuora connector](../../Integration/Connectors/r-atm-Zuora_Connector_a39f0805-e30a-49a5-9f82-eb6ba5f969e2.md).

## Zuora REST connector

**We have fixed this issue:**

- Necessary runtime packages are now packaged with the connector. (CONC-5319)

To learn more, see the topic [Zuora REST connector](../../Integration/Connectors/r-atm-Zuora_REST_connector_3fe94b3d-1e1e-48d8-bc7b-f795e3ac8073.md).