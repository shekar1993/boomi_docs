# Connectivity 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-0445a3c3-fcaf-4f5b-bd81-6ed83946e417"/>
</head>

## Amazon S3 REST connector

**We fixed this issue:**

- The connector now successfully connects to S3 using **IAM Roles Anywhere** option field with and without providing a `SessionName`. (CONC-6099 and CONC-6197)

For more information, see the topic [Amazon S3 REST connector](../../Integration/Connectors/r-atm-Amazon_S3_REST_connector_bc37d2c7-9ea6-41b7-931b-9eb0c2a80640.md).

## Amazon SQS connector

**We fixed this issue:**

- The connector now successfully connects to S3 using **IAM Roles Anywhere** option field with and without providing a `SessionName`. (CONC-6586)

For more information, see the topic [Amazon SQS connector](../../Integration/Connectors/r-atm-Amazon_SQS_connector_a018e9b9-7d51-4f2b-9b6f-8ada84475f6c.md).

## Database V2 connector

**We added this feature:**

- The connector now supports Transaction Processing for INSERT, UPDATE, DELETE, and UPSERT actions. (CONC-945)

:::info Warning

This advanced feature requires careful handling of transactions, as improper use can lead to unintended results. Please ensure that you follow best practices to maintain the integrity and reliability of your data.

:::

For more information, see the topic [Database V2 connector](../../Integration/Connectors/int-Database_V2_connector_7b04dbdd-ef36-4a2f-b6ff-b038b3f60ff2.mdx).

## Google Ad Manager connector

**We fixed this issue:**

- Necessary runtime packages are now packaged with the connector. (CONC-3005)

**We added these features:**

- The connector has been upgraded to support API version v202405. Also, the connector now supports v202405, excluding the `createTargetingPresets` and `updateTargetingPresets` operations from the `TargetingPresets` service. (CONC-7615 and CONC-6928)

- The Google Ad Manager API version v202305 has been sunsetted and the connector has been upgraded to support API version v202402. (CONC-6591)

For more information, see the topic [Google Ad Manager connector](../../Integration/Connectors/r-atm-Google_DFP_connector_fe51c7d3-a860-4de6-9aed-218ac04c2dfe.md).

## Google BigQuery connector

**We added this feature:**

- The Google BigQuery connector has been updated to include agent attribution data identifying Boomi in the header as **User-Agent = Boomi Enterprise Platform/1.0 (GPN:Boomi;)** when performing Streaming Insert, Run Job, Update, Upsert Data, and Get Query Results actions. (CONC-6953)

For more information, see the topic [Google BigQuery connector](../../Integration/Connectors/r-atm-Google_BigQuery_connector_e68dae37-25d8-4653-8cf8-14406617cd01.md).

## Hypatos.ai - Partner connector

**We added these features:**

- Audience authorization parameter is no longer required to be passed as an Access Token Parameter when creating an OAuth2.0 connection.

- `X-Hy-Meta-Internal-Company_Id` parameter is no longer required to be
provided for the following connector operations:

  - `deleteApprover`
  - `deleteCompany`
  - `deleteCostCenter`
  - `deleteCustomer`
  - `deleteGLAccount`
  - `deleteInvoice`
  - `deletePurchaseOrder`
  - `deleteSupplier`
  - `insertApprover`
  - `insertCompany`
  - `insertCostCenter`
  - `insertCustomer`
  - `insertGLAccount`
  - `insertInvoice`
  - `insertPurchaseOrder`
  - `insertSupplier`
  - `uploadFile`

- The following connector operations have been added: 

  - `companiesGetById` - to be used for retrieving details of a Hypatos Studio company.
  - `companiesList` - to be used for listing companies configured in Hypatos Studio.
  - `projectsGetById` - to be used for retrieving details of a particular project in Hypatos Studio.
  - `schemasGetByProjectId` - to be used for retrieving the configured schema of a particular project in Hypatos Studio.
  - `projectsList` – to be used for retrieving details of Hypatos Studio projects that meet the provided search criteria.
  - `projectsCreate` – to be used for creating a project under a particular Hypatos Studio company.
  - `emailsContentGetByDocumentId` – to be used for retrieving the merged content of the email (email body + attachments) that was sent to Hypatos.

- The following connector operations have been modified:

  - Updated request model of `insertInvoice` operation so it supports additional accounting attributes and withholding tax information.
  - Updated request model of `insertPurchaseOrder` operation so it supports additional accounting attributes information.
  - Updated request model of `insertSupplier` operation so it supports default GL Account Code information.

(CON-9718)

For more information, see the [Hypatos REST API v2](https://hypatos.redoc.ly/) documentation and see the topic [Hypatos.ai - Partner connector](../../Integration/Connectors/r-atm-Hypatos_Studio_connector_c021a3f1-066a-493c-b0db-535a0c40ce56.md).

## IFS REST - Partner connector

**We added these features:**

- Custom Header support for Content-Type and Accept headers by using Dynamic Document properties. For more information, visit the [Custom Header Support for IEEE Standard 754 in Boomi IFS REST Partner Connector](https://community.boomi.com/s/article/How-To-set-Custom-Header-in-IFS-REST-Partner-Connector-to-Support-IEEE-Standard-754) community article. 

- The **GET** action type now supports using the Supplemental Entity Sets and Variables connector document property at the second level. Previously, this capability was only available when accessing three or more levels. With this release, you can now fetch data at the second level.

(CON-9717)

For more information, see the topic [IFS REST - Partner connector](../../Integration/Connectors/int-IFS_REST_Connector_e7e1c825-992f-42f8-a41d-f29f8b4992ea.md).

## Intacct connector

**We fixed this issue:**

- Necessary runtime packages are now packaged with the connector. (CONC-7511)

For more information, see the topic [Intacct connector](../../Integration/Connectors/r-atm-Intacct_connector_2a89e2ac-147c-4407-95de-2be4f25bf5a6.md).

## Salesforce REST connector

**We fixed this issue:**

- Necessary runtime packages are now packaged with the connector. (CONC-3125)

For more information, see the topic [Salesforce REST connector](../../Integration/Connectors/int-Salesforce_REST_connector_9fe91520-cc0b-451e-93da-870ea9ce9d82.md).

## SAP HANA Database connector

**We added these features:**

- Upgraded the connector SDK to the version 2.18.2. (CONC-6817)

- SAP HANA Database connector now supports `::` double colon while executing the stored procedure. (CONC-6625) 
  - For example - 
  ```
    Table Name (Stored procedure name) - STORED_PROCEDURE_NAME
    Package Name – PACKAGE_NAME
    Schema Name – SCHEMA_NAME 
    HANA full object name – “SCHEMA_NAME”.”PACKAGE_NAME::STORED_PROCEDURE_NAME”.
    ``` 

- A stored procedure with a SELECT COUNT() statement will return a valid value. (CONC-6498)

- The SAP HANA connector default document tracking has been changed from Input to output for **Query** operation, allowing users to view the output document in process reporting. (CONC-6513) 

For more information, see the topic [SAP HANA Database connector](../../Integration/Connectors/int-SAP_HANA_Database_connector_677cc0c5-2232-4dc2-bd8a-6f2e030f9898.mdx).

## ServiceNow connector

**We fixed this issue:**

- Necessary runtime packages are now packaged with the connector. (CONC-3420)

For more information, see the topic [ServiceNow connector](../../Integration/Connectors/r-atm-ServiceNow_Connector_cc7806a6-3a88-474e-ab81-d1aa36331c36.md).

## Skyflow - Partner connector

**We are releasing this new connector:**

- We are releasing the Skyflow - Partner connector with the Boomi Enterprise Platform release. (CON-9716)

For more information, see the topic [Skyflow - Partner connector](../../Integration/Connectors/int-Skyflow_connector.md).

## Solace PubSub+ - Partner connector

**We added this feature:**

- The Listen operation is updated to respond to container shutdown signals, where it will stop accepting incoming messages and process those in flight, ensuring a smooth and predictable shutdown process. (CON-9719)

For more information, see the topic [Solace PubSub+ - Partner connector](../../Integration/Connectors/int-Solace_PubSub_connector_b38dbd64-539a-40f5-854b-1efd40b4477d.md).

## Snowflake connector

**We added this feature:**

- Upgraded the connector SDK to version 2.18.2. (CONC-7040)

For more information, see the topic [Snowflake connector](../../Integration/Connectors/int-Snowflake_Connector_f551004c-1429-4fe1-85c1-b345d37ab73c.md).

## Stripe (Tech Preview) connector

**We added new connector:**

- A new **Stripe (Tech Preview) Connector** is introduced for integration with Stripe's payment processing platform. This connector enables businesses to access and manage payment-related data by interacting with the supported object types. (CONC-5007)

To learn about support levels of Tech Preview connectors, see the topic [Feature Release Stages](../../Platform/atm-Feature_release_stages_00d83b66-e5db-4038-8398-fcaead4be12d.md).

For more information, see the topic [Stripe (Tech Preview) connector](../../Integration/Connectors/int-Stripe_connector.md).

## Teqtron Agile PLM - Partner connector

**We made this change:**

- Code improvements for the import business object functionality. (CON-9731)

For more information, see the topic [Teqtron Agile PLM - Partner connector](../../Integration/Connectors/int-Teqtron_Agile_PLM_connector_new_019b032f-46bf-4e07-a1bc-76499876f06e.md).


