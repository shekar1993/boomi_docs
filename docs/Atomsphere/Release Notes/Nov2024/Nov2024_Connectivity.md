# Connectivity November 2024 Release Notes

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-37ec73fb-3764-496a-a8f6-0ec18ed7af1e"/>
</head>

## Agiloft CLM - Partner connector

**We fixed the following issue:**

- The connector can successfully upload any file in the Attach operation. (TPP-14)

To learn more, see the topic [Agiloft CLM - Partner connector](../../Integration/Connectors/int-Agiloft_CLM_connector_b8ebad38-c52b-49b5-8bd4-16d06b72b6f0.md).

## Amazon SNS connector

**We have fixed this issue:**

- Necessary runtime packages are packaged with the connector. (CONC-7337)

To learn more, see the topic [Amazon SNS connector](../../Integration/Connectors/r-atm-Amazon_SNS_connector_f9dc71ca-95f6-4dc3-ac1f-8b78bc7ff8b0.md).

## Amazon Selling Partner (Tech Preview) connector 

**We are releasing this new connector:**

- The Amazon Selling Partner connector is now available in Tech Preview. (CONC-7544)

:::info

For more information about the Tech Preview stage, see the [Feature release stages page](../../Platform/atm-Feature_release_stages_00d83b66-e5db-4038-8398-fcaead4be12d.md).

:::

To learn more, see the topic [Amazon Selling Partner (Tech Preview) connector](../../Integration/Connectors/int-Amazon_Selling_Partner_connector.md).

## Boomi DataHub connector

**We added this feature:**

- The [Boomi DataHub connector](../../Integration/Connectors/int-Boomi_Data_Hub_connector.md) is now in General Availability (GA). New integrations with Hub require you to use the DataHub connector.

  We labeled the previous [Boomi Master Data Hub connector](../../Integration/Connectors/r-atm-MDM_connector_ff690a6f-288d-44b3-96fb-e81afb046703.md) as the legacy connector. If you currently use the legacy connector for your integrations, it will remain available for your existing integrations. (HUB-4818)

## Connectors changing to Deprecated status

The following connectors are changing to Deprecated status. These connectors are no longer actively maintained.

- [HTTP Patch Client connector](../../Integration/Connectors/r-atm-Patch_connector_e0d03b26-9201-4b0d-9a6e-c68ffe42d71b.md) **(Retirement date TBD)**
- [LDAP (Legacy) connector](../../Integration/Connectors/r-atm-LDAP_Legacy_connector_ab735072-a016-462d-891f-86202a27ca8f.md) **(Will be retired as part of the May 2025 Platform release)**

:::info

For more information about the Deprecated stage, see the [Feature release stages page](../../Platform/atm-Feature_release_stages_00d83b66-e5db-4038-8398-fcaead4be12d.md).

:::

These changes are in the Boomi Enterprise Platform release.

## Connectors changing to Legacy status

The following connectors are changing to Legacy status. You can continue to use these connectors, but we encourge you to take advantage of the functionality provided by the V2 version of these connectors.

- [Database connector](../../Integration/Connectors/r-atm-Database_connector_c4bd0269-5f4b-42d6-b4cf-08ddada63a94.md) 
- [Disk connector](../../Integration/Connectors/r-atm-Disk_connector_277ab5b3-4715-45e3-a4af-6e42563c4b65.md)
- [FTP connector](../../Integration/Connectors/r-atm-FTP_connector_44e22a54-d5ae-48f8-bfda-4905b7b0014d.md)
- [JMS connector](../../Integration/Connectors/r-atm-JMS_connector_36845ff8-14c4-444c-94ad-e96b905022f2.md)
- [SFTP connector](../../Integration/Connectors/r-atm-SFTP_connector_6d122b9a-dc24-4872-82b3-9d14e66e0257.md)

:::info

For more information about the newly renamed Boomi connectors, please review this [community article & FAQs](https://community.boomi.com/s/article/Boomi-Connectors-name-changes).

:::

## Connector Server Manager

**We fixed the following issue:**

- The connector server manager is no longer a registered service for browse workers. This means that listeners will not start on browse workers. (CON-9707)

## Database V2 connector

**We have added this feature in an off-cycle release (version 29):**

- The connector now supports the **Transaction Processing** feature for the **STOREDPROCEDURE** action. For more information, see this [Boomi User Community article](https://community.boomi.com/s/article/Getting-Started-with-Transaction-Processing-in-the-Database-v2). (CONC-7604)

**We have fixed these issues: (Have since been deferred to a future release)**

:::warning

The following fixes have been removed from the Boomi Enterprise Platform November release. If you applied version 25 during the November Runtime release, be aware that you will be reverted back to version 24.

:::

- Resolved the issue of atom crashes caused by *Out of Memory* errors that occurred during **Dynamic Insert** operations. (CONC-6409)

- The connector is successfully able to store a JSON request to a MSSQL database using **DYNAMIC INSERT**. (CONC-6087)


## Files.com - Partner connector

**We have fixed these issues:**

- Fixed an issue in the **Upload** operation which was slowing uploads that would cause a time out prior to the whole file being delivered.

- Fixed an issue in the **List** operation where the date format was being returned using Unix Epoch Time instead of the UTC time format. The response profile expects UTC format.

(TPP-20)

To learn more, see the topic [Files.com - Partner connector](../../Integration/Connectors/r-atm-Files_connector_233ee8d5-7738-4ed7-86a1-37c85563592c.md)

## FTP V2 connector

**We have fixed these issues:**

- Updated the SDK to a new version. (CONC-7892)

- Necessary runtime packages are packaged with the connector. (CONC-7348)

To learn more, see the topic [FTP V2 connector](../../Integration/Connectors/int-FTP_SDK_connector_b2385da1-c374-481e-8ac4-f3777071365f.md).

## Google Pub/Sub connector

**We have fixed these issues:**

- Necessary runtime packages are packaged with the connector. (CONC-3001)

- An issue with access token expiration has been resolved for the Listen operation, allowing continued message reception even after token expiration when using the same connection across multiple runtimes.

  - Messages are now successfully processed after an expiration failure even after the access token expiration.

  - The connector now logs authentication failures due to expired tokens as **INFO-level** messages instead of **WARNING**. (CONC-7961)

To learn more, see the topic [Google Pub/Sub connector](../../Integration/Connectors/r-atm-Google_PubSub_connector_de4f0a9a-6bfe-4c02-8657-f08f1c8ba2ca.md).

## Hadoop connector

**We have fixed this issue:**

- Vulnerability issue of type Deserialization of Untrusted Data was resolved to make the Connector more secure. (CONC-5309)

To learn more, see the topic [Hadoop connector](../../Integration/Connectors/r-atm-Hadoop_connector_33d08b80-8f21-46e0-9440-6e87e47d8714.md).

## IFS REST - Partner connector

**We added this feature:**

- With the release of Time Zone support in IFS Cloud, users of this connector can now send their website or server time zone aware requests to IFS applications. A new property has been added to the IFS REST - Partner connector allowing users to set the header `X-IFS-Time-Zone-Aware-Request`. (TPP-19)

To learn more, see the topic [IFS REST - Partner connector](../../Integration/Connectors/int-IFS_REST_Connector_e7e1c825-992f-42f8-a41d-f29f8b4992ea.md).

## Inverbis Analytics — Partner connector

**We are releasing this new connector:**

- The Inverbis Analytics - Partner connector is now available. (TPP-17)

To learn more, see the topic [Inverbis Analytics - Partner connector](../../Integration/Connectors/int-Inverbis_connector.md).

## JMS V2 connector

**We fixed the following issue:**

- JMS V2 Connector of server type Websphere MQ no longer fails with a `NullPointerException` when it tries to get messages from Websphere MQ, which are sent through the external application or created within the Websphere MQ console. (CON-7707)

To learn more, see the topic [JMS V2 connector](../../Integration/Connectors/JMS_V2_connector_c8117b18-8913-4263-8ffa-c0ab9433c9da.md).

## LDAP connector

**We have fixed these issues:**

- Updated the SDK to a new version. (CONC-7888)

- Necessary runtime packages are packaged with the connector. (CONC-7346)

To learn more, see the topic [LDAP connector](../../Integration/Connectors/r-atm-LDAP_connector_52b81d15-f7ef-43ee-add7-8656c31ac321.md).

## Marketo REST connector

**We have fixed this issue:**

- Necessary runtime packages are packaged with the connector. (CONC-7342)

To learn more, see the topic [Marketo REST connector](../../Integration/Connectors/r-atm-Marketo_REST_connector_caf966f4-5e90-4fc5-89d3-4e58ba1a2acd.md).

## Microsoft Azure Blob Storage connector

**We have fixed these issues:**

- Updated the SDK to a new version. (CONC-7678)

- Necessary runtime packages are now packaged with the connector. (CONC-7339)

To learn more, see the topic [Microsoft Azure Blob Storage connector](../../Integration/Connectors/r-atm-Microsoft_Azure_Blob_Storage_connector_216ef744-e76e-4764-848c-a421af79d469.md).

## MQTT (Deprecated) connector

The MQTT (Deprecated) connector has been retired and is no longer available for production use. You should migrate to the [MQTT connector](../../Integration/Connectors/int-MQTT_connector.md) for continued support and innovation. (CON-9904)

:::info

For more information about the Retired stage, see the [Feature release stages page](../../Platform/atm-Feature_release_stages_00d83b66-e5db-4038-8398-fcaead4be12d.md).

:::

## OData Client connector

**We have fixed this issue:**

- Vulnerability issue of type Allocation of Resources Without Limits or Throttling was resolved to make the connector more secure. (CONC-7659)

To learn more, see the topic [OData Client connector](../../Integration/Connectors/r-atm-OData_Client_connector_c5450d6b-2254-4714-979a-170350b14ef1.md).

## Onepoint (OP) Consulting - Partner connectors

The following new connectors are being released:

- [OP Database - Partner connector](../../Integration/Connectors/int-OP_Database_connector.md): Includes support for case sensitive names, additional datatypes (arrays, json/struct, enums, vectors, etc), transaction save-points, and entity operations.

- [OP Intelligence - Partner connector](../../Integration/Connectors/int-OP_Intelligence_connector.md): Includes the ability to use different LLM providers for using AI and improve the decision in processes (e.g., openAI, anthropic, mistral, ollama, etc.) with standard request and response definitions. This connector allows you to change the LLM provider, at the connection level, without the need to change any process that is using the connector.

- [OP WebSearch - Partner connector](../../Integration/Connectors/int-OP_WebSearch_connector.md): Includes the ability to use different search providers (google, bing, serp, tavily, etc.) with standard request and response definitions. This connector allows you to change the search provider, at the connection level, without the need to change any process that is using the connector.

- [OP Wikipedia - Partner connector](../../Integration/Connectors/int-OP_Wikipedia_connector.md): Includes the ability to search Wikipedia and scrape Wikipedia pages using the Wikipedia API.

To learn more about these connectors, click the appropriate link above.

## Oracle E-Business Suite V2 connector

**We have fixed this issue:**

- The connector now supports **DATE** type **OUT** parameter from the StoredProcedure execute call, using Boomi's default date format `yyyyMMdd HHmmss.SSS`. (CONC-7066)

To learn more, see the topic [Oracle E-Business Suite V2 connector](../../Integration/Connectors/int-Oracle_EBS_V2_connector_5083af8a-8d20-4262-8020-aac9cf558d4e.mdx).

## Salesforce Platform Events connector

**We added this feature:**

- Allow the SFPE listen manager to use the Persisted Connector Cache to save and retrieve the `replayID` on send and receive actions when the **Enable Persisted Connector Cache** (`com.boomi.container.connector.persistence.enabled`) container property is enabled in the Advanced Properties section of the container properties. If the container owner is filtering out a specific set of connectorType values to use connector property persistence on runtime, then ensure that this connector is included. 

  This allows the SFPE connector to persist the `replayID` and start over from the point before the stop when pausing or stopping the listener.

  If the persisted `replayID` is invalid, the fail over is to the initial `replayID` mentioned in the connection. (CON-9496)

To learn more, see the topic [Salesforce Platform Events connector](../../Integration/Connectors/r-atm-Salesforce_Platform_Events_Connector_5be03def-3af7-4861-af94-b21d9ee79dfa.md).

## Shopify connector

**We have fixed this issue:**

- The Shopify connector has been updated to use the 2024-4 version of the Shopify REST APIs. Additionally, the Shopify object request and response profiles have also been updated to support this change. Existing integrations will remain unchanged and continue to use their original versions. (CONC-2897)

To learn more, see the topic [Shopify connector](../../Integration/Connectors/r-atm-Shopify_connector_0ef10e52-18e4-483a-9b59-c0d957f06faa.md).

## Skyflow - Partner connector

**We fixed the following issue:**

- Connector now supports all record, tokenized, and detokenized operations. Fixes were completed for the INSERT and UPDATE actions. (TPP-16)

To learn more, see the topic [Skyflow - Partner connector](../../Integration/Connectors/int-Skyflow_connector.md).

## Slack connector

**We have fixed this issue:**

- Necessary runtime packages are packaged with the connector. (CONC-7340)

To learn more, see the topic [Slack connector](../../Integration/Connectors/r-atm-Slack_connector_2a8c29fd-7fb2-461e-9e66-41c92f49ff9c.md).

## Solace PubSub+ - Partner connector

**We fixed the following issue:**

- Upgraded the JCSMP dependency to v10.25.0 to address an issue that prevented message delivery when a consumer `flowId` grew larger than the max signed 32-bit integer. (TPP-15)

To learn more, see the topic [Solace PubSub+ - Partner connector](../../Integration/Connectors/int-Solace_PubSub_connector_b38dbd64-539a-40f5-854b-1efd40b4477d.md).

## SugarCRM REST connector

**We have fixed these issues:**

- Updated the SDK to a new version. (CONC-7890)

- Necessary runtime packages are packaged with the connector. (CONC-7349)

To learn more, see the topic [SugarCRM REST connector](../../Integration/Connectors/r-atm-SugarCRM_REST_connector_388b1a70-9ed6-44c8-b562-97c88a394250.md).

## Stripe connector

**We have added these features:**

- This connector is now in General Availability (GA).

- New actions have been introduced for various objects, including Execute, Retrieve, List Line Items, and Update Lines for Customers, Products, Prices, Payment Links, Invoices, Invoice Items, Payment Intents, and Charges. Additionally, a new Query action is now available for Customers, Products, Prices, Payment Intents, Invoices, and Charges. (CONC-7486 and CONC-8367).

To learn more, see the topic [Stripe connector](../../Integration/Connectors/int-Stripe_connector.md).

## Zuora REST connector

**We have fixed this issue:**

- Vulnerability issue of type **Denial of Service** was resolved to make the Connector more secure. (CONC-7660)

To learn more, see the topic [Zuora REST connector](../../Integration/Connectors/r-atm-Zuora_REST_connector_3fe94b3d-1e1e-48d8-bc7b-f795e3ac8073.md).
