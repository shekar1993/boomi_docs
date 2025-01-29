# Connectivity January 2025 Release Notes

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-fc162cd9-8b09-4ed1-9c78-5ba4b73d2340"/>
</head>

## Amazon SNS connector
**We fixed these issues:**

- The Amazon SNS Connector now supports successful connections to SNS using the **IAM Roles Anywhere** option in a Windows environment. (CONC-7792)
- Amazon SNS connector successfully connects using the **IAM Roles Anywhere** option with and without session name. (CONC-6585)

To learn more, see the topic [Amazon SNS connector](../../Integration/Connectors/r-atm-Amazon_SNS_connector_f9dc71ca-95f6-4dc3-ac1f-8b78bc7ff8b0.md).

## Amazon Selling Partner (Tech Preview) connector

**We added this feature:**

- The **Query** operation now supports the following object types:
  * **getCollectionFormHistory** 
  * **getFeatures** 
  * **getFeatureInventory**
  * **getFulfillmentPreview** 
  * **getOrders***
  * **getOrderltems***
  * **getOrderltemsBuyerInfo***
  * **getSelfShipAppointmentSlots**
  * **listAllFulfillmentOrders**
  * **listFinancialEventGroups**
  * **listReturnReasonCodes**
  * **searchCatalogItems**

The **getCollectionFormHistory**, **getFeatures**, **getFulfillmentPreview**, and **listReturnReasonCodes** object types do not support pagination. Objects types with an asterisk (*) can return Personally Identifiable Information (PII). (CONC-9576) (CONC-8451)

To learn more, see the topic [Amazon Selling Partner (Tech Preview) connector](../../Integration/Connectors/int-Amazon_Selling_Partner_connector.md).

## Amazon SQS connector
**We fixed this issue:**

- The Amazon SQS Connector now supports successful connections to SQS using the **IAM Roles Anywhere** option in a Windows environment. (CONC-7791)

To learn more, see the topic [Amazon SQS connector](../../Integration/Connectors/r-atm-Amazon_SQS_connector_a018e9b9-7d51-4f2b-9b6f-8ada84475f6c.md).

## Database V2 connector
**We have fixed this issue:**

- The Database v2 connector has been updated to enhance the performance of the **INSERT** action across all four supported databases: Oracle, MySQL, PostgreSQL and MSSQL. (CONC-8561)

To learn more, see the topic [Database V2 connector](../../Integration/Connectors/int-Database_V2_connector_7b04dbdd-ef36-4a2f-b6ff-b038b3f60ff2.mdx).

## FHIR Client connector
**We released this new connector:**
- The FHIR Client connector is now in General Availability (GA). (B2B-3902)

To learn more, see the topic [FHIR Client connector](../../Integration/Connectors/int-FHIR_Client_connector.md).

## Files.com - Partner connector

**We fixed this issue:**

- The "Return Application Error Responses" behavior is no longer ignored for operations. (TPP-21)

To learn more, see the topic [Files.com - Partner connector](../../Integration/Connectors/r-atm-Files_connector_233ee8d5-7738-4ed7-86a1-37c85563592c.md).

## Google BigQuery connector

**We added these features:**

- The Google Big Query connector now supports **Dataset ID** as a dynamic operation property for the **UPDATE** action. (CONC-6598)

- If the Update action is on a static table, the **Dataset ID** can be overridden using a dynamic operation property. If the Update action is on a **Dynamic Table**, the **Dataset ID** will be dynamically provided via a JSON input request. (CONC-6495)

To learn more, see the topic [Google BigQuery connector](../../Integration/Connectors/r-atm-Google_BigQuery_connector_e68dae37-25d8-4653-8cf8-14406617cd01.md).

## HubSpot CRM (Tech Preview) connector

:::info

The existing Tech Preview connector will be retiring soon and not available to use. This is the new HubSpot CRM (Tech Preview) connector.

:::

**We have added a new HubSpot CRM (Tech Preview) connector with the following features:**

- The HubSpot CRM connector now allows users to connect using a **Private App Access Token**. (CONC-6137)
- The connector now supports specifying the API version in the API URL. Based on the selected version during browsing, users can choose supported objects and call the corresponding APIs seamlessly. (CONC-8457)
- As the connector now fully supports the **Companies** and **Contacts** object for **Retrieve**, **Create**, **Update**, **Search** and **Archive** operations. 
- This connector enables seamless integration with HubSpot CRM, providing access to objects and records for comprehensive CRM workflows. (CONC-8485 and CONC-5584)

To learn more, see the topic [HubSpot CRM (Tech Preview) connector](../../Integration/Connectors/int-HubSpot_CRM_connector.md).

## Listener management

**We have fixed this issue:**

- Fixed an issue where any blocking logic during an approved listener startup would cause a backlog of queued jobs. This would manifest in the Listener Management UI with duplicate entries of non-approved listeners caused by this backlog of queued jobs. With this fix, listener startups are better handled, and duplicate entries for non-approved listeners are avoided. (CON-9477)

## MQTT connector

**We have fixed this issue:**

- The MQTT connector has been updated to support a default message size limit of 1 MB, with the ability to increase or decrease this limit by a configurable container property override (`com.boomi.container.connector.sizeLimitedUpdateOperation.maxSize`). Due to MQTT broker constraints, the maximum size allowed is 256 MB for this connector. (CONC-5968)

To learn more, see the topic [MQTT connector](../../Integration/Connectors/int-MQTT_connector.md).

## OP Database - Partner connector

**We have fixed this issue:**

- Fixed the structure of the JSON Array response. (TPP-22)

To learn more, see the topic [OP Database - Partner connector](../../Integration/Connectors/int-OP_Database_connector.md).

## RabbitMQ connector
**We have fixed this issue:**

- The RabbitMQ connector now allows users to set an **Expiration Time** while publishing messages, enabling automatic expiration of messages after a specified duration. (CONC-6395)

To learn more, see the topic [RabbitMQ connector](../../Integration/Connectors/int-RabbitMQ_connector_b45ea4e7-49f4-4fc2-af25-a22818e45112.md).

## Snowflake connector
**We have added these features:**

- Enhanced the connector to support **Database** and **Schema** via **operation properties**, which can be overridden using the **Dynamic Operation Properties**. (CONC-6094)

- Improved flexibility with **Truncate** functionality. If the same **Database** and **Schema** combination is repeated for the documents, truncation is performed only once per combination, eliminating redundant truncations for each file. (CONC-9475) 

To learn more, see the topic [Snowflake connector](../../Integration/Connectors/int-Snowflake_Connector_f551004c-1429-4fe1-85c1-b345d37ab73c.md).

## Solace PubSub+ - Partner connector

**We have fixed these issues:**

- Persistent Transacted Send operations no longer fail with a 503 error when the documents in the transaction were still within the limit.

- Resolved the increased CPU usage issue that occurred in certain cases in the previous release. The system performance has been restored to previous levels.

(TPP-23)

To learn more, see the topic [Solace PubSub+ - Partner connector](../../Integration/Connectors/int-Solace_PubSub_connector_b38dbd64-539a-40f5-854b-1efd40b4477d.md).

## Stripe connector

**We have added these features:**

- New actions have been introduced for the Stripe Connector's Balance Transactions and Capture Charges objects.

- The Balance Transactions object now supports the Create request, response profiles, Get and List actions. The Charges object now supports the Capture Charges Execute action. (CONC-7485).

To learn more, see the topic [Stripe connector](../../Integration/Connectors/int-Stripe_connector.md).