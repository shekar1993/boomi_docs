import TrackedProperties from './_TrackedProperties.md'

# Boomi Atom Queue connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-c44a70a8-1d17-4be9-afc6-210090608ada"/>
</head>


Use the Boomi Atom Queue connector to send and receive messages to and from native Integration Atom message queues. The connector supports both Point-to-Point and Publish/Subscribe messaging.

Deploying a Boomi Atom Queue connector does not affect your license count. You can deploy this connector an unlimited number of times across different Atoms and environments.


:::note

Atom message queuing is an optional Boomi Integration feature. To have this feature enabled in your account, contact your Boomi sales representative.

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


<TrackedProperties />