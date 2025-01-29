import TrackedProperties from './_TrackedProperties.md'


# Salesforce Platform Events connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-c2caf7e6-e626-40a9-9fa0-3a24d049af02"/>
</head>


Use the Salesforce Platform Events connector to configure the integration between Salesforce Platform Events and connected business applications.

Salesforce Platform Events is a feature in the Salesforce enterprise messaging platform and helps organizations run faster and more efficiently through event-driven business processes that execute in near-real time. For example, an event such as the creation of a new opportunity in Salesforce can be published to a SMS messaging or email system to immediately alert a sales representative to follow up on a potential sale. In addition, Salesforce Platform Events can be connected to smart printers to monitor the status of ink cartridges. When a cartridge is low, Salesforce Platform Events can automate the reordering from the supplier.

The Salesforce Platform Events connector passively listens for events that are published through Platform Events and also listens for events from connected applications to update Platform Events and trigger actions. This listening provides real-time connectivity and more immediacy in business processes and minimizes resource requirements. Applications can communicate inside and outside of Salesforce.

## Connector configuration 

To configure the connector to communicate with Salesforce Platform Events, set up two components:

-   Salesforce Platform Events connection. This connector uses the OAuth 2.0 protocol for authentication and authorization.

-   Salesforce Platform Events operation \(Listen and Send\)


This design provides reusable components, which contain connection settings and operation settings. After building your connection and operation, set up your connector within a process. When the Salesforce Platform Events connector is configured properly within your process, Integration can map to and from virtually any connected application using the Salesforce Platform Events connector to listen for and send messages.

## Supported editions 

The Salesforce Platform Events connector supports:

-   The Salesforce API version 41.

## Prerequisites 

To use the Salesforce Platform Events connector to implement a connection to your Salesforce account from Integration, have your Salesforce client ID and client secret that was provided when you created your account.

## Limitations 

The following known limitations affect this connector:

-   This connector tracks the replay ID of messages in memory. If your connection to a Salesforce Platform Events channel is dropped due to an intermittent service error, you will not miss any messages when the connection to the channel is re-established because the connector embeds the tracked replay ID in the message when it re-established the connection. The server uses the replay ID to track the last received message so it knows where to resume receiving messages. You need to ensure that you have enabled connector property persistence on the atom to persist the replay ID. See the following topic: [Enabling connector property persistence](../../Integration/Integration%20management/t-atm-Enabling_connector_property_persistence_in_an_atom.md).

If you have multiple active listeners on the same connection, the replay ID is retained if you pause one listener but is lost if you pause all listeners. It is recommended that you use one listener on a channel. If you use multiple listeners, they can get out of sync. As an alternative, use a single listener that triggers sub-processes.

<TrackedProperties />

