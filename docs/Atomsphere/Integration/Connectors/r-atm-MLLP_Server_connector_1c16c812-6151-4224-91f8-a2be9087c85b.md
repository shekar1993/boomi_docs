# MLLP Server connector

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-1c16c812-6151-4224-91f8-a2be9087c85b"/>
</head>

Use the MLLP Server connector to accept MLLP \(Minimal Lower Layer Protocol\) requests in real-time and initiate Integration processes. MLLP is commonly used for HL7 or X12 message transmission in EDI and business-to-business \(B2B\) integrations. As a result, this connector is typically used with the Start step with the Trading Partner option.

When a process containing this connector is deployed to an Atom, the Atom's internal MLLP web server listens for documents based on the MLLP Server operation settings. Among these settings is the option for the connector to issue ACK functional acknowledgment messages to a sending trading partner.

The MLLP Server connector is not like Web Services or SOAP. It can be used to receive generic data, often in EDI or XML, via MLLP. It “listens” for inbound or event-based messages sent from trading partners and processes them immediately. As a result, MLLP Server connectors can be used only in the Start step as the initial inbound connector. MLLP listener processes deployed to an Atom or Molecule do not need to be scheduled. You can view their status in the Listeners panel in **Manage** \> **Atom Management**. In that panel you can also pause, resume, and restart listeners.

:::note

- HL7/MLLP support is included in its own Boomi Enterprise Platform edition. To have HL7/MLLP enabled in your account, contact your Boomi representative.

- The EDI and B2B Solutions topic describes different options and scenarios for using this connector with a trading partner.

- Deploying an MLLP Server connector does not affect your license count. You can deploy this connector an unlimited number of times across different Atoms and environments.

:::

## Connector configuration

Building a connector to listen for MLLP document transmissions requires the configuration of two components:

- Listen connection

- MLLP Server operation

The listen connection is managed at the Atom level and is *not* configurable within an individual process. Review the configuration requirements for the Atom's MLLP server to learn more. This connector design provides shared reusability across the Atom. When a MLLP server is launched for request listening, you can develop a process to interact with virtually any system using other connectors in our library.

The MLLP Server connector can route data in two ways: by data identifer or route key. For more information, refer to the Boomi Community article [How MLLP Server Document routing works](https://community.boomi.com/s/article/How-MLLP-Server-Document-Routing-Works).

## MLLP Server configuration

Applications and trading partners send messages to a specific host and port, as configured at the Atom level \(**Manage** \> **Atom Management** \> **MLLP Server Settings**\).

If you receive MLLP traffic from multiple trading partners, you can configure the Atom's MLLP server one time and pair it with multiple MLLP Server connector operations, one for each trading partner based on a unique MLLP ID.

:::note

To send MLLP data, use the MLLP Client connector.

:::

## Process options

The Allow Simultaneous Executions process option is ignored for real-time processes that are deployed with the MLLP Server connector.

## Prerequisites

The MLLP Server connector requires the following:

- Use within a deployed process. You cannot use this connector in Test mode.

- You provide your trading partner with a static IP address to which to connect. The machine on which the Atom is installed or network gateway device must have a static IP address assigned. Work with your network administrator for help with this configuration.

- Your firewall is configured to allow MLLP traffic on the specific port configured for the Atom’s MLLP Server. Contact your network administrator for help configuring the firewall.

## Tracked properties

This connector has the following tracked properties that can be set or referenced in various step parameters. Which properties are set changes based on which type of routing was done when calling the listener process.

### Route by Identifiers properties

- Document standard is set to either *hl7* or *x12* depending on which data type is matched.

- HL7 Data:
  
  - **MLLP Application Sender ID** - Contains the value from the MSH.3 data element in the received message.
  - **MLLP Facility Sender ID** - Contains the value from the MSH.4 data element in the received message.
  - **MLLP Application Receiver ID** - Contains the value from the MSH.5 data element in the received message.
  - **MLLP Facility Receiver ID** - Contains the value from the MSH.6 data element in the received message.

- X12 Data:

  - **MLLP Interchange Sender ID** - Contains the value from the ISA.6 data element in the received message
  - **MLLP Interchange Sender ID Qualifier** - Contains the value from the ISA.5 element in the received message.
  - **MLLP Interchange Receiver ID** - Contains the value from the ISA.8 element in the received message.
  - **MLLP Interchange Receiver ID Qualifier** - Contains the value from the ISA.7 element in the received message.

### Route by Key properties

- **Port** - Contains the port number of the port where the MLLP data was received

- **Route Key** - Contains the Route Key associated with the port where the MLLP data was received at the time that it was received.

- **User** - Present when SSL client certificate authentication is used. Contains the User value associated with the Client SSL Certificate that was used in the SSL handshake.

### Common properties

- **Size (kb)** - Size of the received message in kilobytes.
