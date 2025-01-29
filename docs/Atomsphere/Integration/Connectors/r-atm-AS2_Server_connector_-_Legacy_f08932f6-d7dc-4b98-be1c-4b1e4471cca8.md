# AS2 Server connector - Legacy 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-f08932f6-d7dc-4b98-be1c-4b1e4471cca8"/>
</head>


Use the AS2 Server connector to receive data in real-time using the AS2 protocol.

:::info Important

The AS2 Server - Legacy connector is no longer available for use by customers who have not previously used it. If you are using this connector, you can continue to do so. However, you are encouraged to take advantage of the functionality provided by the AS2 Shared Server connector.

:::

:::note

The AS2 Server connector is manageable only as a legacy connector in existing integrations. To enable AS2 listening, review the AS2 Shared Server connector which contains all required functionality.

:::

AS2 is a common communication choice for EDI and business-to-business \(B2B\) integrations. Therefore, the AS2 Server connector is almost always used within the context of a trading partner.

The AS2 Server connector is different than Web Services or SOAP. The AS2 connector can receive generic data, often but not necessarily in EDI or XML. The connector listens for inbound or event-based messages sent from trading partners and processes them immediately. As a result, you should only use AS2 Server connectors in the Start step as the initial inbound connector. You do not need to schedule processes that use this connector.

Applications and trading partners will send messages to a specific URL:

```java
http://<Atom Host name or IP address>:<Port>/as2
```

Or if you are using SSL:

```java
https://<Atom Host name or IP address>:<Port>/as2
```

Configure these variables in the connection and operation components. This is the URL you will give to the sending trading partner.

If you receive AS2 from multiple trading partners, you typically configure only one AS2 Server connection and pair it with multiple AS2 Server operations, one for each trading partner based on a unique AS2 ID.


:::note

Use the AS2 Server connector to listen for inbound messages sent from another trading partner. To send data, use the AS2 Client connector.

:::

## Prerequisites 

The AS2 Server Legacy connector requires you do the following:

-   Use the AS2 Server connections only within a deployed process. You cannot use an AS2 Server connection in Test mode.

-   Provide your trading partner with a static URL/IP address to connect to. The machine on which the atom is installed or network gateway device must have a static IP address assigned. Work with your network administrator for help with this configuration.

-   Provide your trading partner with a certificate that they use to encrypt data they send to you. You can either import an existing certificate or generate a new one within Boomi Integration. For more information, see the linked Certificate components topic.

-   Configure your firewall to allow AS2 traffic on the specific ports configured in the AS2 Server connection. A common port for AS2 are 8080. Contact your network administrator for help configuring the firewall.

-   *Deploy only one AS2 Server connection to listen on a port to a single machine.* Deploying multiple AS2 Server connections to the same port on the same machine will result in conflicts and unpredictable behavior until corrected.


## Tracked properties 

This connector has the following tracked properties that can be set or referenced in various step parameters.



**AS2 From ID** - 
AS2 ID of the sending entity.

**AS2 To ID** - 
AS2 ID of the receiving entity.

**Subject** - 
AS2 subject of the message.

**Message ID** - 
AS2 message ID.

**File Name** - 
The inbound file name of the document.