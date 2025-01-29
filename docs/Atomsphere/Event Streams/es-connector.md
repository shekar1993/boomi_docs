# Event Streams connector

<head>
  <meta name="guidename" content="Event Streams"/>
  <meta name="context" content="GUID-697956b7-7f78-4fdb-8eab-66442b5feeb2"/>
</head>

The Event Streams Connector allows Boomi Integration to interact with the Event Streams broker. The Event Streams Connector operations define how to interact with Event Streams and represent a specific action (Produce, Consume, and Listen).

## Connector configuration

To configure the connector to communicate with Event Streams, set up these two components:

- Boomi Event Streams connection
- Boomi Event Streams operation

### Prerequisites

To connect to Boomi Event Streams, you need the following information:

- Event Streams provisioned for your account
- [Atom Environments](/docs/Atomsphere/Integration/Integration%20management/c-atm-Environment_management_1ec94aeb-ffaf-4cec-a3b0-483c2af3967c.md) configured
- A valid Environment token from the Event Streams environment settings page
- An Atom Worker if deploying a Listen operation integration process to the Boomi Atom Cloud
- Requires Java 11 or TLS 1.3 enabled for Java 8 in your local Atom, Molecule, or Atom Cloud

### Tracked properties

The connector has the following properties that you can set or reference in various step parameters:

- Name
- Connector (Boomi Event Streams)
- Connector Action (Produce, Consume, Listen)
- Connection
- Operation
