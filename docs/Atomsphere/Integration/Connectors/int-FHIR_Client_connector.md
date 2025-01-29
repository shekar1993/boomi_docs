# FHIR Client connector

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-7c7bba7b-7d3b-4dcd-b599-95bac52b8c71"/>
</head>

The FHIR (Fast Healthcare Interoperability Resources) Client connector allows you to interact with a server that implements the FHIR standard to securely create, retrieve, delete, and otherwise interact with sensitive health care data between different health care systems.

## Connector configuration

To configure the FHIR Client connector to interact with a given server, set up two components:

* FHIR Client connection

* FHIR Client operation

## Prerequisites

To utilize the FHIR standard in Integration, you need the following:

*  A working FHIR server and its corresponding credentials

### **Supported Editions**

The connector supports versions R3, R4, and R5 of the FHIR standard. 

## Tracked Properties

This connector has the following document properties that you can set or reference in various step parameters. The connector does not alter these values before returning them.

* **ETag**  - The value from `.meta.versionId` as a "weak" ETag, prefixed with W/ and enclosed in quotes (e.g., W/"3141").

* **Last Modified**  - The value from  `.meta.lastUpdated`, which is a FHIR instant, converted to the proper format.

* **Location**  - Indicate where the resource can be found after being processed.

Certain properties are only available for certain operations; see the table below.

|  | Update Resource | Create Resource | Get Server Capabilities | Bundles |
| :---- | :---- | :---- | :---- | :---- |
| ETag | Supported | Supported | Supported | Supported | Supported |
| Last Modified | Supported  | Supported | Supported | Unsupported | Unsupported |
| Location | Supported | Supported | Supported | Unsupported | Supported |

