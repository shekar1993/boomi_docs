# Event-driven connectors 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-1717cb17-4fc5-4a53-b096-e0ec81647915"/>
</head>


Event-driven connectors allow organizations to seamlessly connect to event-based technologies and applications.

Event-driven \(ED\) connectors offer dynamic solutions and robust integration options for such technological needs as queuing, messaging brokers, event meshes, real-time streaming, analytics, and asynchronous APIs. Boomi ED connectors represent event consumers and producers, and can be used to detect real-world business events triggered from such systems as Internet of Things \(IoT\) devices, mobile applications, ecosystems, and social and business networks.

## About event-driven architecture 

An event-driven architecture represents a design pattern in which involved systems communicate through the propagation, processing, and persistence of events. In simpler terms, event-driven architecture can be defined by an event that is triggered in one system and creates a corresponding response event or transaction in another system.

For example, the process of purchasing an item online is executed using the event-driven design pattern: a customer's payment triggers a chain of events, such as sending a confirmation email to a customer and sending an order request to an inventory warehouse, which responds by filling and shipping the order.

Event-driven events are considered to be any significant change in state and ultimately become messages that are transacted in a non-serial manner across brokers and queues. This asynchronous processing provides the ability to execute multiple event-driven processes at once. Event-driven architecture also allows both the sender and receiver to be loosely coupled, provides ease of setup and the flexibility to add more receivers as necessary. Boomi ED connectors allow users to leverage event-based technologies and applications to create more reactive and decoupled systems.

## Connector licenses and classes 

Connection licenses are categorized and provisioned by connector classes:

-   **Small Business** — For example, QuickBooks and Sage 50/Peachtree.
-   **Standard** — For example, NetSuite, Salesforce, SFTP, Disk, etc. Most connectors are Standard class connectors.
-   **Enterprise** — For example, SAP and Oracle E-Business.
-   **Trading Partner** — For example, your trading partner profiles, such as X12, HL7, EDIFACT, etc.

In general, your account is provisioned with a number of connection licenses based on your subscription. This means you can deploy up to that many connections across your various integration processes. Connection licenses are consumed as you deploy processes containing unique connections.

For more information about connection usage, licensing, how connections are counted, and other helpful information, review the following resource in the Boomi User Community:

-   [How Connector Licensing Works](https://community.boomi.com/s/article/connection-licensing)

[Amazon EventBridge connector](./int-Amazon_EventBridge_connector_ea3d78b3-432b-42d8-ab7d-1083f4e29394.mdx) - 
The Amazon EventBridge connector allows you to transfer any number of events (data) in JSON format to any Amazon services by connecting through Amazon EventBridge. 

[Amazon SQS connector](./r-atm-Amazon_SQS_connector_a018e9b9-7d51-4f2b-9b6f-8ada84475f6c.md) - 
The Amazon SQS connector makes it easy to work with Amazon SQS by simplifying the interaction and adding convenience.

[Boomi Atom Queue connector](./r-atm-Atom_Queue_connector_0e37228f-955a-478d-a0ea-2b89bfe7df97.md) -
Use the Boomi Atom Queue connector to send and receive messages to and from native Integration Atom message queues. The connector supports both Point-to-Point and Publish/Subscribe messaging.

[Event Streams connector](/docs/Atomsphere/Event%20Streams/es-connector.md) - 
The Event Streams Connector allows Boomi Integration to interact with the Event Streams broker. The Event Streams Connector operations define how to interact with Event Streams and represent a specific action (Produce, Consume, and Listen).

[Google Pub/Sub connector](./r-atm-Google_PubSub_connector_de4f0a9a-6bfe-4c02-8657-f08f1c8ba2ca.md) - 
The Google Pub/Sub connector makes it easy to dynamically publish to topics or subscriptions, retrieve messages from subscriptions, and send acknowledgments to Google’s Cloud Pub/Sub data streaming and messaging service.

[JMS connector](./r-atm-JMS_connector_36845ff8-14c4-444c-94ad-e96b905022f2.md) -
Use the JMS connector to work with any JMS (v1.1) messaging provider to send and receive messages from JMS queues or topics. The JMS connector supports transactions, durable/nondurable topic subscriptions, configurable receive timeouts, message selectors, and custom message properties.

[JMS v2 connector](./JMS_V2_connector_c8117b18-8913-4263-8ffa-c0ab9433c9da.md) -
Use the JMS v2 connector to work with either JMS v1.1 or 2.0 to send and receive messages from JMS queues or topics. The JMS v2 connector supports transactions, durable/nondurable topic subscriptions, configurable receive timeouts, message selectors, and custom message properties. 

[Kafka connector](./int-Kafka_connector_c9d1cdde-8864-4408-882b-64520400fdbb.md) -
Apache Kafka is a distributed streaming platform, and the Kafka connector allows you to interact with the Kafka messaging system by sending and receiving messages from Kafka topics. 

[Microsoft Azure Service Bus connector](./r-atm-Microsoft_Azure_Service_Bus_connector_44a7b826-c450-4861-a4d4-0d421bd4f509.md) -
The Microsoft Azure Service Bus connector makes it easy to build integrations that send messages to and receive messages from the Azure Service Bus queue or topic, delete messages from queues and subscriptions to topics, and for real-time integration, listen for messages from queues and topics.

[RabbitMQ connector](./int-RabbitMQ_connector_b45ea4e7-49f4-4fc2-af25-a22818e45112.md) -
The RabbitMQ connector allows you to send messages to an exchange, consume messages from RabbitMQ queues, and listen for messages in a queue in exchanges.

[Salesforce Platform Events connector](./r-atm-Salesforce_Platform_Events_Connector_5be03def-3af7-4861-af94-b21d9ee79dfa.md) -
Use the Salesforce Platform Events connector to configure the integration between Salesforce Platform Events and connected business applications.

[Solace PubSub+ – Partner connector](./int-Solace_PubSub_connector_b38dbd64-539a-40f5-854b-1efd40b4477d.md) -
The Solace PubSub+ – Partner connector makes it easy to implement asynchronous, event-driven integrations leveraging the Solace event streaming and management platform through Boomi Integration.