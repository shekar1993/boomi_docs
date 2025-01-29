# Connectivity 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-b3f4971e-e396-4b66-8504-8c74e531e2e9"/>
</head>

## Amazon EventBridge connector
**We fixed this issue:**

- Necessary runtime packages are now packaged with the connector. (CONC-3157)

To learn more, see the topic [Amazon EventBridge connector](../../Integration/Connectors/int-Amazon_EventBridge_connector_ea3d78b3-432b-42d8-ab7d-1083f4e29394.mdx).

## Anaplan connector
**We fixed this issue:**

- Authentication allows successful connection with the given region and test connection validates successfully. (CONC-2990)

To learn more, see the topic [Anaplan connector](../../Integration/Connectors/r-atm-Anaplan_connector_308e18b1-32e0-4181-b1b1-61df77580b89.md).


## Box connector
**We fixed these issues:**

- Necessary runtime packages are now packaged with the connector. (CONC-2924)
- Vulnerability issue of type Improper Input Validation was resolved to make the Connector more secure. (CONC-3116)
- Vulnerability issue of type Directory Traversal was resolved to make the Connector more secure. (CONC-3114)

To learn more, see the topic [Box connector](../../Integration/Connectors/r-atm-Box_connector_6b3e3d8e-f379-40fd-8644-1e8938cfa1f3.md).

## Connector UI
**We added this feature:**
- Default label for check boxes is now replaced with the correct label and Info icon on the **Connection** tab and **Operation** tab. (CON-7512)

## Coupa connector
**We fixed these issues**

- Necessary runtime packages are now packaged with the connector. (CONC-2822)

To learn more, see the topic [Coupa connector](../../Integration/Connectors/r-atm-Coupa_connector_398e7796-e71d-407a-aea7-efab51ea4f92.md).

## Database V2 connector
**We fixed these issues:**

- Users can pass all parameters except default and nullable procedure parameters, else the connector displays an exception message.
  - The Stored Procedure nullable is used when the parameter value is not provided.

  Users can set Null on the Nullable Stored Procedure parameters.
  - The Stored Procedure default is used when the parameter value is not provided. (CONC-1549)

- The connector successfully inserts all the records when Batch Count is entered.  (CONC-3032)
- The connector successfully returns null value instead of incorrect values when data with null values are fetched from the database. (CONC-1613)
- The connector successfully retrieves large integer values (>2147483647) in NUMBER type columns for all Database v2 databases without any error. (CONC-1792)
- The connector supports Oracle data type ROWID and successfully imports profile objects from all the database rows including the ones having data type as ROWID without any exceptions. (CONC-1922)
- The connector successfully supports inserting/updating/selecting any range of decimal values supported by the Oracle database without any data truncation or loss. (CONC-1637)
- Database NULL value is getting inserted for Json datatype when trying to insert a null node while executing the STOREDPROCEDURE action in Database V2-PostgreSQL. (CONC-2765)
- Suitable error message is displayed for constraints instead of displaying `[400] Bad request` for Database V2 operations. (CONC-1527)
- The connector supports and stores database NULL, when incoming data of type NVARCHAR is NULL. (CONC-1755) 
- Test connections successfully work with or without connection pooling enabled for DatabaseV2 connector with PostgreSQL database. (CONC-3460)

To learn more, see the topic [Database V2 connector](../../Integration/Connectors/int-Database_V2_connector_7b04dbdd-ef36-4a2f-b6ff-b038b3f60ff2.mdx).

## Google BigQuery connector
**We fixed this issue:**

- Browse functionality successfully creates profiles for Run job and Upsert operations for all object types including objects that contain type "any". (CONC-3504)

To learn more, see the topic [Google BigQuery connector](../../Integration/Connectors/r-atm-Google_BigQuery_connector_e68dae37-25d8-4653-8cf8-14406617cd01.md).

## Google Sheets connector
**We fixed these issues:**

- Necessary runtime packages are now packaged with the connector. (CONC-3004)
- Vulnerability issue of type Improper Authorization was resolved to make the connector more secure. (CONC-3117)
- Vulnerability issue of type Improper Verification of Crytographic Signature was resolved to make the connector more secure. (CONC-3118)
- Vulnerability issue of type Deserialization of Untrusted Data was resolved to make the connector more secure. (CONC-3119)

To learn more, see the topic [Google Sheets connector](../../Integration/Connectors/r-atm-Google_Sheets_connector_5e7fbf2e-fe00-4556-ae9c-894d3561066e.md).

## Google Storage connector
**We fixed this issue:**

- Necessary runtime packages are now packaged with the connector. (CONC-2926)

To learn more, see the topic [Google Storage connector](../../Integration/Connectors/r-atm-Google_Cloud_Storage_connector_28f39f16-486a-4433-a2d1-719e721f22c8.md).

## Kafka connector 
**We added this feature:**
- The Topic Name can now be imported dynamically across all operations. This is to allow for importing topics that you may not have a connection to browse. (CON-6940) 

To learn more, see the topic [Kafka connector](../../Integration/Connectors/int-Kafka_connector_c9d1cdde-8864-4408-882b-64520400fdbb.md).

## Listener Start Properties

**We added the following features:**

- The ability to denote that an SDK Listen operation field is extendable on the process build canvas. Similar to connection extensions, the extensions will not be extensible by default. You will need to opt in per field using the extensions dialog, under the Operation Settings tab on the process canvas. (CON-8339, CON-8575)

- SDK Listen operations have been added to the Extensions Dialog in the Atom Management page. These operations will show up under the Operation Settings tab. Saving the changes sends a message to the Atom to update its `overrides.xml` and restarts the listener to pick up the changes. (CON-8338, CON-8576)

- The Environment Extensions API now allows SDK connectors with a Listen Operation to extend operation fields. Previously, this was only limited to any Web Service Server operations. (CON-8335)

## MongoDB connector
**We fixed these issues:**

- Necessary runtime packages are now packaged with the connector. (CONC-3000)
- Vulnerability issue of type Denial of Service was resolved to make the Connector more secure. (CONC-3139)
- The connector supports the latest driver version 6.0. (CONC-4814, CONC-1894)

To learn more, see the topic [MongoDB connector](../../Integration/Connectors/int-MongoDB_connector_a6cce0aa-00a6-48d0-bfbe-feb2474b57e1.mdx).

## Netsuite connector
**We fixed these issues:**

- The connector is updated to the new versions 2023.1 and 2023.2. The default URL and version field points to the version 2023.2. (CONC-2899, CONC-3060)
- Users can install the Boomi SuiteApp to fetch and leverage the integration record that is bundled with the connector. (CONC-2174)

To learn more, see the topic [Netsuite connector](../../Integration/Connectors/r-atm-NetSuite_connector_0e4b02c7-ef6b-4c1e-a273-2f5d443c7e7c.md).

## OData Client connector
**We fixed these issues:**

Vulnerability issues of the following types were resolved to make the connector more secure:
  - Directory Traversal (CONC-3234)
  - Cryptographic Issue (CONC-3236)
  - Improper Input Validation (CONC-3237)
  - Denial of Service (CONC-3231)
  - Web Cache Poisoning (CONC-3233)
  - Timing Attack (CONC-3235)
  - Information Exposure (CONC-3238)

To learn more, see the topic [OData Client connector](../../Integration/Connectors/r-atm-OData_Client_connector_c5450d6b-2254-4714-979a-170350b14ef1.md).

## OpenAPI connector
**We added this feature:**
- Connection pooling is now supported in the OpenAPI connector. (CON-7494)

**We fixed this issue:**
- Resolved an error where the OpenAPI connector wasn’t able to browse V3 specs on public clouds with high security policies. (CON-8705)

To learn more, see the topic [OpenAPI connector](../../Integration/Connectors/int-OpenAPI_connector_6766251b-b601-41f5-8c13-86d79faf52b9.mdx).

## Oracle Database connector
**We fixed these issues:**

- Necessary runtime packages are now packaged with the connector. (CONC-3003)
- The connector correctly updates Database Null, when the input is provided as null for Nullable Field/Column and throws an error when input is null for Non Nullable Field/Column. (CONC-2667)
- The connector successfully retrieves values larger than or lesser than INTEGER limit (-2147483648 to 2147483647) in NUMBER type columns for Oracle database without any error. (CONC-1793)
- The connector handles numeric data bigger than “2147483647” as decimal value. (CONC-1545)
- Test connections successfully work with/without connection pooling enabled for Oracle Database step. (CONC-5160)
- Vulnerability issue of type Denial of Service was resolved to make the Connector more secure. (CONC-4675)

To learn more, see the topic [Oracle Database connector](../../Integration/Connectors/int-Oracle_database_connector_2e42bb82-873a-4ec8-8d2d-3db821c0d9ec.mdx).

## SAP HAHA Database connector
**We fixed this issue:**

- Necessary runtime packages are now packaged with the connector. (CONC-3102)

To learn more, see the topic [SAP HANA Database connector](../../Integration/Connectors/int-SAP_HANA_Database_connector_677cc0c5-2232-4dc2-bd8a-6f2e030f9898.mdx).

## Salesforce REST connector (Tech Preview)
**We are releasing this new connector:**
- The Salesforce REST connector is now available in Tech Preview. (CON-7366)

To learn more, see the topic [Salesforce REST connector (Tech Preview)](../../Integration/Connectors/int-Salesforce_REST_connector_9fe91520-cc0b-451e-93da-870ea9ce9d82.md). 

## Solace PubSub+ - Partner connector
**We added this feature:**
- We've introduced support for the OAuth 2.0 Client Credentials grant type. This allows applications to request an access token using their client credentials (Client ID and Client Secret) to authenticate against the authorization server and get a token directly. This strategy is particularly beneficial for long-lived and stable connections. (CON-8603)

To learn more, see the topic [Solace PubSub+ - Partner connector](../../Integration/Connectors/int-Solace_PubSub_connector_b38dbd64-539a-40f5-854b-1efd40b4477d.md).

## Veeva (Tech Preview) connector
**We are releasing this new connector:**
- The Veeva connector is now available in Tech Preview. (CONC-2637)

To learn more, see the topic [Veeva (Tech Preview) connector](../../Integration/Connectors/int-Veeva_connector_2a2709f7-b72a-4f5a-96cd-c4a1ba89b4ac.md).