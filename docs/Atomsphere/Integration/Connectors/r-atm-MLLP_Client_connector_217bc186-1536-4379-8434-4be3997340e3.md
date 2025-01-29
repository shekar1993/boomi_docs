# MLLP Client connector

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-034955e9-3d75-4e36-9d37-4bb86d958b8a"/>
</head>

Use the MLLP Client connector to send data in real-time through the MLLP (Minimal Lower Layer Protocol) protocol. MLLP is commonly used for HL7 or X12 message transmission in EDI and business-to-business (B2B) integrations. As a result, this connector is typically used with a Trading Partner step.

The MLLP Client connector is different than Web Services or SOAP. You can use the connector to send generic data (often in EDI or XML, but not necessarily) through MLLP.

The MLLP Client connector sends outbound MLLP messages to other trading partners. To receive MLLP data, use the MLLP Server Connector. The only setting for the MLLP Client connector’s Send operation is the option to wait for the listening MLLP server to issue ACK functional acknowledgment messages.

:::note

HL7/MLLP support is included in its own Boomi Enterprise Platform edition. To have HL7/MLLP enabled in your account, contact your Boomi representative.

:::

## Prerequisites

The MLLP Client connector requires the following:

- Provide your trading partner with a static IP address to which to connect. That is the machine on which the Atom is installed or network gateway device must have a static IP address assigned. Work with your network administrator for help with this configuration.

## Tracked properties

This connector has the following tracked properties that can be set or referenced in various step parameters:

- **MLLP From ID** - MLLP ID of the sending entity.

- **MLLP To ID** - MLLP ID of the receiving entity.

- **Subject** - MLLP subject of the message.

- **Message ID** - MLLP message ID.

- **File Name** - The outbound file name of the document.
