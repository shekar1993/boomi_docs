# Connectivity

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-81e3bbae-dfeb-4211-b74c-4cc69e401cd4"/>
</head>

## Amazon S3 connector

**We added this feature:**

- Necessary runtime packages are now packaged with the connector. (CONC-5308)

To learn more, see the topic [Amazon S3 connector](../../Integration/Connectors/r-atm-Amazon_S3_connector_e69ef1f3-37dd-420c-9c7a-af470c969bc7.md).

## Google BigQuery connector

**We fixed this issue:**

- During the Upsert action, the location ID operation property can be set dynamically. (CONC-5824)

To learn more, see the topic [Google BigQuery connector](../../Integration/Connectors/r-atm-Google_BigQuery_connector_e68dae37-25d8-4653-8cf8-14406617cd01.md).

## LaminarHub - Partner connector

**We are releasing this new connector:**

- LaminarHub AI is a one-stop shop AI-driven solution for your Business & IT Operations Team to transform your integration transaction data into operational insights, find and reprocess/resend the transaction, monitor integration runtime and observability, configure the alerts and notifications. LaminarHub AI Search will assist your Business & IT Operations Team to search in natural language to get trend analysis on any type of transaction.  LaminarHub — Partner connector enables users to connect their Boomi integrations to the Laminar Hub with ease. (CON-9462)

To learn more, see the topic [LaminarHub - Partner connector](../../Integration/Connectors/int-LaminarHub_connector.md).

## Microsoft Azure Service Bus connector

**We added these features:**

- Five new dynamic operation properties: **CorrelationId**, **ReplyTo**, **To**, **ScheduledEnqueueTimeUtc**, **ReplyToSessionId**. The existing operation properties have been updated to be dynamic too. (CON-8862)

- The **entityName** operation field for the Receive operation is now overridable. (CON-9451)

**We fixed these issues:**

- Vulnerability issue of type Denial of Service was resolved to make the connector more secure. (CONC-2794)

- The Listen operation will utilize the domain name specified in the connection instead of defaulting to `servicebus.windows.net`. Any invalid domain names provided previously may cause an error. (CONC-1614)

- Namespace and domain names with invalid characters (i.e. ‘/, *, ?') will return a relevant error message instead of a NullPointerException. (CON-2638)

- Necessary runtime packages are now packaged with the connector. (CONC-2823)

- The **Entity Type** dropdown box was moved above the **Allow Dynamic Entity Types** (formerly **Allow Entity Type Override**) checkbox in the import operation to allow for dynamic operation properties. (CON-8982)

To learn more, see the topic [Microsoft Azure Service Bus connector](../../Integration/Connectors/r-atm-Microsoft_Azure_Service_Bus_connector_44a7b826-c450-4861-a4d4-0d421bd4f509.md).

## Oracle E-Business Suite V2 connector

**We fixed these issues:**

- The PLSQL_EXECUTE operation is updated so that each output document returns with a separate error message. (CONC-2175)

- The integration process with the Connection Pool turned on and the Maintain Session flag checked will now run successfully. (CONC-2472)

To learn more, see the topic [Oracle E-Business Suite V2 connector](../../Integration/Connectors/int-Oracle_EBS_V2_connector_5083af8a-8d20-4262-8020-aac9cf558d4e.mdx).

## Teqtron Agile PLM - Partner connector

**We fixed this issue:**

- The supported version of the Agile PLM is now Agile 9.3.4+ (DOC-2596)

To learn more, see the topic [Teqtron Agile PLM - Partner connector](../../Integration/Connectors/int-Teqtron_Agile_PLM_connector_new_019b032f-46bf-4e07-a1bc-76499876f06e.md).

## UltiPro connector

- The UltiPro connector has been renamed to UKG Pro connector. (CON-9073)

To learn more, see the topic [UKG Pro connector](../../Integration/Connectors/r-atm-UKG_Pro_connector.mdx).
