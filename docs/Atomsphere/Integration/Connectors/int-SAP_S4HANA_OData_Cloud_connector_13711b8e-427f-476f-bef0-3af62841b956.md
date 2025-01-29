# SAP S/4HANA OData Cloud \(Tech Preview\) connector

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-13711b8e-427f-476f-bef0-3af62841b956"/>
</head>


The SAP S/4HANA OData Cloud \(Tech Preview\) connector allows you to transfer data from SAP S/4HANA Cloud \(Multi-Tenant, ES Edition\) by connecting to OData APIs.

**Note:** The SAP S/4HANA OData Cloud \(Tech Preview\) connector is a Tech Preview not intended for production use.

This connector retrieves all the metadata associated with the available services from SAP API Business Hub. Once the metadata is retrieved, the connector builds the request/response profiles for the specific operation, which is used to interact with SAP S/4HANA Cloud with the appropriate operation within the Integration process.

Through this connector, you can use a Integration process to Get, Create, Update, Delete and Query the data from SAP S/4HANA Cloud \(Multi-Tenant, ES Edition\).

## Connector configuration

The following components are required to be configured to communicate with SAP S/4HANA Cloud:

-   SAP S/4HANA OData Cloud \(Tech Preview\) connection
-   SAP S/4HANA OData Cloud \(Tech Preview\) operation

This design provides reusable components containing connection settings and operation settings. After building your connection and operation, set up your connector within a process. When the process is defined properly, Integration can map to and from virtually any system to communicate with SAP S/4HANA Cloud.

## Prerequisites

To use the connector and implement a connection to SAP S/4HANA Cloud, you need the following:

-   Host and Login credentials of SAP S/4HANA Cloud \(**Tenant URL**, **Technical User ID**, and **Password**\) to perform the selected operation.
-   API key and Login credentials for SAP API Business Hub \(**API Key**, **SAP API Business Hub Username**, and **SAP API Business Hub Password**\) to get Swagger documents to build request and response profiles.

## Supported editions

The following editions are supported:

-   SAP S/4HANA Cloud \(Multi-Tenant, ES Edition\)
-   Swagger 2.0 for API specification document from SAP API Business Hub

**Note:** Other API specification formats like Open API 3.0, etc. are not currently supported.

## Limitations

The following known limitations affect this connector:

-   The connector will not accept null values in the parameters. If you set values of the Parameter fields in the selected URL as “Null” \(in Parameters section\), the connector will not consider the null value and throws an exception “Please provide valid/required path parameters”.
-   The Service names \(URL List in the connector\) can change in SAP API Business Hub after implementing them in the connector. As the list is static the service names in the connector could differ from SAP API Business Hub.
-   Not all SAP S/4HANA Cloud APIs are available through the SAP S/4HANA OData Cloud \(Tech Preview\) connector. Until the APIs are incorporated into the SAP S/4HANA OData Cloud \(Tech Preview\) connector, consider using the OData Client connector.
-   Batch, Post with Query parameters and Get with Query parameters APIs are not handled in the connector.
-   Import functionality will not work in Cloud Atoms, you must use an Atom/Molecule.
-   Services which are defined using OpenAPI 3.0 for their specification are not currently supported. The following services are not supported as they are defined with OpenAPI 3.0 specifications.
    -   Billing Document - Read, Cancel, GetPDF
    -   Quality Info Record