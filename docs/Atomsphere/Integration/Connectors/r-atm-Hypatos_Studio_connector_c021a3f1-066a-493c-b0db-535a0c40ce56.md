import PartnerSupport from './_PartnerSupport.md'

# Hypatos.ai - Partner connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-c021a3f1-066a-493c-b0db-535a0c40ce56"/>
</head>

<PartnerSupport />

Hypatos is a deep learning document automation hub for the enterprise. Unlike rule-based solutions that perform data capturing, it collects, understands, and enriches document data to automate higher value-added processes for enterprise operations. Its deep learning foundation is coupled with an intuitive, no-code interface \(Hypatos Studio\) to enable human-in-the-loop participation when desired.

Using the Hypatos.ai – Partner connector, you can use an Integration process to upload or download files from Hypatos Studio and retrieve or update processed documents. At the same time, you can create and use an Integration process to ingest into Hypatos relevant master data \(I.e. vendors, purchase orders, posting data\) from your source system, to be used during Master Data Matching and Attribute Prediction processes of Hypatos Enrichment Service.

You can integrate on-premise and legacy solutions with Hypatos, and also integrate with cloud native SaaS-solutions such as ERP \(i.e. SAP, NetSuite\) or Procure-to-Pay \(i.e. Coupa\) systems. Integrating with Hypatos.ai – Partner connector consists of RESTful web service calls using a JSON request and response made over an HTTPS connection.

## Benefits

One of the most notable advantages of Hypatos is that its AI models can be fully customized and trained automatically using your organization's own transaction and document history. This ensures that the solution is tailored to meet the specific needs of your teams, providing them with a powerful tool that can streamline and automate various finance document processing tasks.

Hypatos' AI models are capable of capturing all relevant data from transactional documents, assigning general accounts, matching POs, choosing workflow owners, and automatically transferring the processed information to your accounting and workflow systems via the Hypatos.ai – Partner Connector. By reducing the need for human intervention, Hypatos can help your teams save valuable time and boost productivity, particularly in high-volume business environments.

## Connector configuration

To configure the connector to communicate with Hypatos Studio, set up two components:

-   Hypatos.ai – Partner connection
-   Hypatos.ai – Partner operation

This design provides reusable components which contain connection settings and operation settings. After building your connection and operation, set up your Hypatos.ai – Partner connector within a process. When the process is defined properly, Boomi Integration can map to and from virtually any system using the Hypatos.ai – Partner connector to upload, update, retrieve, and download files and processed documents from Hypatos Studio, as well as create or update master data records in Hypatos Enrichment Service.

## Supported editions 

The Hypatos.ai – Partner connector supports the [Hypatos REST API version 2](https://hypatos.redoc.ly).

## Prerequisites

To use the connector, implement a connection to your Hypatos Studio account from Integration, and help ensure that the operations are successful, have the following information:

-   Your Hypatos API Client ID and Client Secret for OAuth 2.0 authorization
-   The appropriate API access rights and permissions to your Hypatos Studio projects

## Tracked properties 

This connector has no predefined tracked properties. See the topic [Adding tracked fields to a connector operation](../Process%20building/t-atm-Adding_tracked_fields_to_a_connector_operation_f71821dd-95ee-4ebd-bfc9-3333262f56f6.md#) to learn how to add a custom tracked field.