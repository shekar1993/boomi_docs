# Boomi Atom Queue connector

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-0e37228f-955a-478d-a0ea-2b89bfe7df97"/>
</head>

Use the Boomi Atom Queue connector to send and receive messages to and from native Atom message queues. The connector supports both Point-to-Point and Publish/Subscribe messaging.

Deploying a Boomi Atom Queue connector does not affect your license count. You can deploy this connector an unlimited number of times across different Atoms and environments.

:::note

Atom message queuing is an optional feature. To have this feature enabled in your account, contact your Boomi sales representative.

:::

## Connector configuration

To configure a connector to send and receive messages to and from Atom message queues, set up two components:

-   Boomi Atom Queue connection

-   Boomi Atom Queue operation


A Boomi Atom Queue connection specifies the message queue. The queue configuration is stored in a message queue component.

## Message retrieval

The connector supports the following methods of retrieving messages from a message queue:

-   The Get action for batch retrieval.

-   The Listen action for event-driven retrieval \(only in a Start step\).

## Message sending

The connector supports sending messages to a message queue using the Send action, except where used in a Start step.

## Tracked properties

This connector has no predefined tracked properties. See the topic Adding tracked fields to a connector operation to learn how to add a custom tracked field.
