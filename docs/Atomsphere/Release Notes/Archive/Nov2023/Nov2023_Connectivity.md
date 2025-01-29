# Connectivity 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-f652408a-c989-46dc-9e6e-7db9cb0b2c3f"/>
</head>

## Ceres Technology - Partner connector
**We added these features:**
- The **Test Connection** button has been enabled in the **Connection** tab.
- We removed **Import Operations** from the **Operations** tab.
- The connector logo has been updated.
- The connector has been updated to version 54 with this release. (CON-8586)

To learn more, see the topic [Ceres Technology - Partner connector](../../Integration/Connectors/r-atm-Ceres_Tech_connector_5a328f60-ba7e-4f63-8041-58527fb5212f.md).

## Extensions for OAuth 2.0 Complex Parameters
**We added these features:**
- Authorization parameters and Access Token parameters are now available through Boomi Extensions and can be set as parameters within individual processes. (CON-7228)

- JWT Claims is supported from an extension perspective and is selectable from the drop-down extensions list. (CON-8222)

The following connectors can now utilize a combination of access, authorization, and JWT claims extensions that they couldn't previously:

- Box
- Coupa
- Google
- Google BigQuery
- Google Pub/Sub
- Google Sheets
- Google Storage
- HTTP Client
- Hypatos.ai - Partner
- Mail (IMAP)
- Microsoft Azure Service Bus
- Microsoft Dynamics CRM
- Microsoft Dynamics 365 for Finance and Operations
- OData Client
- OpenAPI Client (Tech Preview)
- Procure - Partner
- REST Client
- Salesforce Marketing Cloud
- Salesforce Platform Events
- SAP/S4HANA OData
- ServiceNow REST
- Shopify
- Slack
- Quickbooks REST

**We fixed this issue:**
- The **Use Connection Component Value** check box now has the same look and spacing for all components in the extension screen. (CON-7230)

## Google Ad Manager connector 
**We added this feature:**
- Several potential security vulnerabilities (Improper Input Validation, Information Exposure, Man-in-the-Middle (MitM), Directory Traversal, and XML External Entity (XXE) Injection) were resolved to make the connector more secure. (CONC-2456, CONC-2459, CONC-2458, CONC-2453, CONC-2451)

To learn more, see the topic [Google Ad Manager connector](../../Integration/Connectors/r-atm-Google_DFP_connector_fe51c7d3-a860-4de6-9aed-218ac04c2dfe.md).

## Google BigQuery connector
**We added these features:**
- A Denial of Service (DoS) vulnerability was resolved to make the Connector more secure. (CONC-3120)

- Necessary runtime packages are now packaged with the connector. (CONC-3023)

To learn more, see the topic [Google BigQuery connector](../../Integration/Connectors/r-atm-Google_BigQuery_connector_e68dae37-25d8-4653-8cf8-14406617cd01.md).

## HTTP Client connector
**We added this feature:**
- Overridable fields now include Access Token parameters and Authorization parameters. (CON-7252)

To learn more, see the topic [HTTP Client connector](../../Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md).

## JMS V2 connector
**We added this feature:**
- The JMS V2 connector is generally available (GA) to all customers with this release.

To learn more, see the topic [JMS V2 connector](../../Integration/Connectors/JMS_V2_connector_c8117b18-8913-4263-8ffa-c0ab9433c9da.md).

## MongoDB connector
**We fixed these issues:** 
- The connector now successfully creates structured and unstructured JSON profiles for MongoDB collections (including Blank Array(s)) without throwing an exception. (CONC-1762)

- The Query operation successfully executes without throwing an Arithmetic Exception when the Batch size is set to 0. (CONC-2138)

To learn more, see the topic [MongoDB connector](../../Integration/Connectors/int-MongoDB_connector_a6cce0aa-00a6-48d0-bfbe-feb2474b57e1.md)

## Twilio connector 
**We fixed this issue:**
- Several potential security vulnerabilities (Deserialization of Untrusted Data, Denial of Service, and Man-in-the-Middle (MitM)) were resolved to make the Connector more secure. (CONC-3106, CONC-3107, CONC-3109)

To learn more, see the topic [Twilio connector](../../Integration/Connectors/r-atm-Twilio_Connector_56feaeb1-e6a0-46ee-9d96-53875e0a5589.md).

