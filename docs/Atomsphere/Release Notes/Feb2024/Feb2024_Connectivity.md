# Connectivity 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-5d064623-d2fd-4836-adbc-bee56790cdfe"/>
</head>

## Boomi for SAP connector
**We added this feature**:
- The `ABAP_PROXY_SEND` function can now import request and response profiles using Import wizard. (CON-8781)

- We have updated the connector's logo to Boomi for SAP.

To learn more, see the topic [Boomi for SAP connector](../../Integration/Connectors/int-Boomi_SAP_connector.md).

## Database V2 connector
**We fixed this issue**:
- Processes invoking an Oracle Database stored procedure that has default input parameters with multiple document scenarios execute without error. (CONC-5695)

To learn more, see the topic [Database V2 connector](../../Integration/Connectors/int-Database_V2_connector_7b04dbdd-ef36-4a2f-b6ff-b038b3f60ff2.mdx).

## Google BigQuery connector
**We fixed this issue**:
- During the `Import` for the `Upsert` operation, **Use Legacy SQL** is now unchecked by default. (CONC-5083)

To learn more, see the topic [Google BigQuery connector](../../Integration/Connectors/r-atm-Google_BigQuery_connector_e68dae37-25d8-4653-8cf8-14406617cd01.md).

## IFS REST - Partner connector
**We fixed these issues**: 
- Resolved an issue where the connector failed to alert the users when it reached the maximum document count (i.e 100 documents) in test mode and the process continued to execute without stopping. (CON-8827)

- Improper exception handling to the response has been fixed to prevent the generic "input is getting lost" error message. (CON-8827)

**We added this feature**:
- The connector can now retry to establish a connection to the IFS application while **Service Metadata** is being modified, and will only throw a `HTTP 503 - MI_MODIFIED_ERROR` after 5 failed attempts. 

To learn more, see the topic [IFS REST - Partner connector](../../Integration/Connectors/int-IFS_REST_Connector_e7e1c825-992f-42f8-a41d-f29f8b4992ea.md).

## HTTP Client connector

**We fixed this issue**:
- An HTTP Client connector with OAuth parameters is now able to update fields with custom property values using the Environment Extensions update API. (CON-8592)

To learn more, see the topic [HTTP Client connector](../../Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md).

## Oracle E-Business (EBS) V2 connector

:::note

This connector was released off-cycle on February 16, 2024 for users who have previously downloaded it. You can update the connector from the Atom & Connectors page in your Deployment environment during an early access period prior to its March 2024 platform release. This gives you extra time to test the connector.

:::

**We fixed these issues**:
- Updated the connector to use the new Oracle REST Service call in order to generate the profile. (CONC-3472)

- You can now use the Atom container properties to determine how large a payload to process, thus allowing for input file sizes greater than 1 MB. (CONC-2483)

## Shopify connector
**We fixed this issue**:
- User is able to set the deadline with the desired date and time for Fulfillment Orders through the connector. (CONC-1798)

To learn more, see the topic [Shopify connector](../../Integration/Connectors/r-atm-Shopify_connector_0ef10e52-18e4-483a-9b59-c0d957f06faa.md).


## Snowflake connector
**We fixed these issues**:
- When one of the documents (without batching) failed at the SnowSQL operation, then all documents were being failed and moved to the Catch path. Now, all documents are correctly labeled as successful or failed. (CONC-2192)
- The Snowflake Connector Class code was not loading the JDBC Driver class correctly with Java 1.8. (CONC-1892)
- The Snowflake Bulk Load operation was not accepting the **Other Format Options** value for the CSV file format. (CONC-1947)

To learn more, see the topic [Snowflake connector](../../Integration/Connectors/int-Snowflake_Connector_f551004c-1429-4fe1-85c1-b345d37ab73c.md).