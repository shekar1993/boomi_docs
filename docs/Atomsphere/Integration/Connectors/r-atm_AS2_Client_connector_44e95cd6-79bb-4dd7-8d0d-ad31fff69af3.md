# AS2 Client connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-3677442d-c63c-42fc-8880-4414646a3efc"/>
</head>

Use the AS2 Client connector to send data in real-time using the AS2 protocol.

AS2 is a common communication choice for EDI and business-to-business (B2B) integrations. The AS2 Client connector is typically used in the context of a trading partner. The AS2 Client connector is different than Web Services or SOAP in that you can use it to send generic data (often but not necessarily in EDI or XML) using AS2.

:::note

Use the AS2 Client connector to send outbound messages to other trading partners. To receive data, use the AS2 Shared Server Connector.

:::

## Prerequisites

The AS2 Client connector requires the following:

- A static URL/IP address which you must provide to your trading partner. The machine on which the Atom is installed or network gateway device must have a static IP address assigned. Work with your network administrator for help with this configuration.

- A certificate that you provide to your trading partner to encrypt data sent to you because AS2 is a secure protocol. You can either import an existing certificate or generate a new one within Boomi Integration. For more information, see the linked Certificate components topic.

## Tracked properties

This connector has the following tracked properties that you can set or reference in various step parameters:

- **AS2 From ID** - AS2 ID of the sending entity.
- **AS2 To ID** - AS2 ID of the receiving entity.
- **Subject** - AS2 subject of the message.
- **Message ID** - AS2 message ID.
- **File Name** - The outbound file name of the document.
