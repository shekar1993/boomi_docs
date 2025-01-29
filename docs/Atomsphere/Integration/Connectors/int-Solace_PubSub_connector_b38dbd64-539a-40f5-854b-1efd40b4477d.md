import PartnerSupport from './_PartnerSupport.md'

# Solace PubSub+ – Partner connector

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-b38dbd64-539a-40f5-854b-1efd40b4477d"/>
</head>

<PartnerSupport />

The Solace PubSub+ – Partner connector makes it easy to implement asynchronous, event-driven integrations leveraging the Solace event streaming and management platform through Boomi Integration.

At design time, developers can use this connector to import events from their Solace Event Catalog into Boomi Integration \(as profile elements\). This eliminates the need to manually define events in Boomi Integration, resulting in accelerated development and reduced errors.

At runtime, developers can use the connector to integrate Boomi Integration processes into a Solace PubSub+ powered event mesh \(a distributed pub-sub messaging fabric\). This enables events to be streamed within and between Boomi Atoms, and among applications and services that are external to Boomi \(data centers, public and private clouds, IoT etc.\).

The Solace PubSub+ – Partner connector is the best way to harness the power of the Solace PubSub+ Platform in your Boomi Integration processes.

:::info Important

The documentation for this connector is provided by a Boomi partner.

:::

To begin creating a simple process, select [Getting Started](https://codelabs.solace.dev/codelabs/boomi-v2-getting-started/index.html#0).

To walk through how to use the Solace connector in Boomi Integration, select [Product Demo](https://solace.com/resources/solace-with-boomi/demo-pubsub-connector-for-boomi).

## Connector configuration

To configure the connector to communicate with a Solace PubSub+ event broker, set up these two components:

-   Solace PubSub+ – Partner connection
-   Solace PubSub+ – Partner operation

This approach creates reusable components containing connection settings and operation settings. After building your connection and operation, set up your Solace PubSub+ – Partner connector within a process. When the process is defined properly, Boomi Integration can map to and from virtually any system using the Solace PubSub+ – Partner connector to retrieve data from or send data to a Solace PubSub+ event broker.

## Supported editions

The Solace PubSub+ – Partner connector supports all active, supported versions of the PubSub+ Event Broker in all available form factors: PubSub+ software \(free Standard & Enterprise editions\), service \(Solace PubSub+ Cloud\), and appliance.

If you currently do not have access to Solace PubSub+, you can get a [free, fully functioning trial of Solace PubSub+ Cloud](https://console.solace.cloud/login/new-account).

## Prerequisites

To implement a connection to your Solace PubSub+ event broker from Boomi Integration, have the following information:

-   The host address to the event broker, or a comma-separated host list.
-   The port used to connect to the event broker over SMF.
-   The name of the message VPN.
-   A valid client username and password for the message VPN. Optionally, you can use OAuth authorization instead of a valid client username and credentials.
-   An Event Portal token, if you are using the Event Portal to create, govern, and visualize your event-driven architecture.

## Solace PubSub+ components

Solace PubSub+ makes event-driven architecture easier to design, deploy, and leverage, especially for enterprises with a variety of applications and technologies deployed across hybrid cloud, multi-cloud, and IoT environments. The platform is made up of three core components:

-   PubSub+ Event Broker – enables enterprise grade event streaming within and across public clouds, virtual private clouds, and on premises environments.
-   PubSub+ Event Portal – a service to design, create, catalog, visualize, discover, share, secure, and manage all events within your ecosystem.
-   PubSub+ Insights – provides centralized, out-of-the-box, proactive monitoring of PubSub+ Event Broker services.

## Tracked properties and Dynamic properties

This connector has the following tracked properties and dynamic properties. Unless specified, these properties apply to both tracked properties and dynamic properties.



**Application Message ID** - 
A String identifier for an application-specific Event id. For instance, an account event coming out of Salesforce might place the Account ID in this property.

**Application Message Type** - 
This value is used by applications only, and is passed through the API untouched..

**Correlation ID** - 
The ID is used for correlating a request to a reply.

**Class of Service** - 
The Class of Service \(CoS\) value for this event.

**Delivery Mode \(Tracked property only\)** - 
The delivery mode of the event.

**Destination \(Tracked property only\)** - 
The destination name the event was published to. This is either the topic name or the queue name.

**Destination \(Dynamic property only\)** - 
The outbound event's destination

If you want to do content-based routing, set both dynamic properties "Destination" and "Endpoint Type". Note that Dynamic Operation Properties is the preferred way to override operation properties at runtime.

If you want to send a reply as part of the request/reply model, map the "Reply To" tracked property to the "Destination" dynamic property.

**Discard Indication \(Tracked property only\)** - 
True if one or more events have been discarded prior to the current event, else false. This indicates congestion discards only and is not affected by event eliding.

**Endpoint Type \(Dynamic property only\)** - 
Indicates whether the destination is a queue or a topic.

**Expiration** - 
The UTC time \(in milliseconds, from midnight, January 1, 1970 UTC\) when the event expires.

**HTTP Content Encoding** - 
Sets the HTTP content type encoding value for interaction with an HTTP client of the published event. [Supported values](https://docs.solace.com/API/RESTMessagingPrtl/Solace-REST-Message-Encoding.htm).

**HTTP Content Type** - 
Sets the HTTP content type header value for interaction with an HTTP client of the published event. [Supported values](https://docs.solace.com/API/RESTMessagingPrtl/Solace-REST-Message-Encoding.htm).

**Is DMQ Eligible** - 
Indicates whether the event is eligible to be moved to a Dead Message Queue \(DMQ\) upon expiration or if the number of retries exceeds the maximum configured value \(which is three for queues autocreated by the connector\). "Is DMQ Eligible" defaults to "True" for events published by the Solace connector. This is an effort to avoid poison message scenarios, where an error processing the event causes the event to rollback, then immediately be picked up again, generating an infinite loop.

**Is Eliding Eligible** - 
Indicates whether the event is eligible for eliding. Eliding is useful if a client application wants to receive every message provided it is able to keep up with the message flow. If the client cannot keep up, then any queued messages can be removed to provide only the most recent message for each topic.

**Is Reply Message** - 
Indicates whether the message's reply field is set, indicating that this message is a reply.

**Message ID \(Tracked property only\)** - 
The Event ID set by JCSMP during send or reception.

**Message ID Long \(Tracked property only\)** - 
The long Event ID set by JCSMP during send or reception.

**Message Reference ID** - 
A message reference ID generated and exposed by the Listen Persistent Transacted operation. Process designers are expected to use this property when configuring the Ack operation.

**Message Type \(Dynamic property only\)** - 
The message type of the published event. Supported values are `textMessage`, `bytesMessage`, and `XmlContentMessage`. Message type defaults to `bytesMessage` when not specified.

**Priority** - 
The message priority level.

**Receive Timestamp \(Tracked property only\)** - 
The receive timestamp \(in milliseconds, from midnight, January 1, 1970 UTC\)

**Redelivered \(Tracked property only\)** - 
Indicates whether the message has been delivered by the appliance to the API before.

**Reply To \(Tracked property only\)** - 
A serialized representation of the inbound event's replyTo destination. When using request/reply messaging, map this tracked property to the Destination dynamic property to send a reply.

**Reply To As String \(Tracked property only\)** - 
This property serves as a human-readable version of the replyTo field. It is designed solely to display the decoded format replyTo tracked property to improve its readability. Do not use it to map it into the Destination dynamic property.

**Reply To - Endpoint Type \(Dynamic property only\)** - 
Use this property to set the replyTo field on the published event. Set this property to "queue" if replyTo is a queue or set this property to "topic" if the replyTo is a topic. For replyTo field to be set, you must also set the "Reply To - Destination" property.

**Reply To - Destination \(Dynamic property only\)** - 
Use this property to set the replyTo field on the published event. This property is the destination name as a String. For replyTo field to be set, you must also set the "Reply To - Endpoint Type" property.

**Sender ID** - 
The sender ID.

**Sender Timestamp** - 
The send timestamp \(in milliseconds, from midnight, January 1, 1970 UTC\).

**Sequence Number** - 
Sets the sequence number.

**Time to Live** - 
The number of milliseconds before the event is discarded or moved to Dead Message Queue.

**User Properties** - 
A JSON formatted string representing the user properties map. User properties are metadata that can be used for tracking business-relevant data and are also the basis for selector syntax.

## Atom properties

The following custom container property can be set on an Atom to configure this connector's behavior on that runtime.



`com.boomi.connector.solace.listen.destination.default`
This custom container property sets the default destination for any Listen operation deployed on this Atom. This could be used to drive the destination from this Atom Property when the value is not known at design time.

