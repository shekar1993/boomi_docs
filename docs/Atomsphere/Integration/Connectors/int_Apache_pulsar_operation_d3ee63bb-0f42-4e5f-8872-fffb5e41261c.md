# Apache Pulsar \(Tech Preview\) operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-d3ee63bb-0f42-4e5f-8872-fffb5e41261c"/>
</head>


Apache Pulsar \(Tech Preview\) connector allows integrations to interact with the Apache® Pulsar™ messaging platform. The Apache Pulsar \(Tech Preview\) Connector operations define how to interact with your Apache Pulsar instance and represents a specific action \(Publish, Consume, and Listen\) to be performed.

The Apache Pulsar \(Tech Preview\) operations support the following actions:

-   Publish — Producers publish messages to a topic.
-   Consume — Consumers subscribe to a topic, process incoming messages and send acknowledgement once the processing is complete.
-   Listen — Listen on a pulsar topic continuously based on the pooling time.

Create a separate operation component for each action/object combination that your integration requires.

## Options tab 

Click **Import Operation**, then use the Import wizard to import a Request and/or Response for the action to be performed. When you configure an action, the following fields appear on the **Options** tab.



Connection Action \(All Operations\)
:   Determines the type of operation the connector is performing related to Inbound or Outbound, selected on the Connector step - General tab.

Object \(All Operations\)
:   An object defines what you want to integrate or the action to execute, which you select in the Import Wizard. Here, the action "Publish", "Consume" will be displayed as per the selected connector action. For Listen operation, object value will be empty.

Request Profile \(Consume\)
:   Select or add a JSON profile component that represents the structure that is being sent by the connector. The request profile will be unstructured for the Consume operation. Publish and Listen operation do not have request profile.

Response Profile \(All operations\)
:   Select or add a JSON profile component that represents the structure that is being received by the connector. The response profile will be unstructured for the Consume and Listen operation.

Tenant \(All Operations\)
:   Enter the name of your tenant account created in the Pulsar instance. Default value is "Public".

Namespace \(All Operations\)
:   Enter the group name to which your topic belongs to, within your tenant. Default value is "default".

Topic \(All Operations\)
:   Topics are named channels for transmitting messages from producers to consumers. Topic names are URLs that have a well-defined structure: `{persistent|non-persistent}://tenant/namespace/topic`. In this field, specify the name of the topic within the given tenant and namespace, that the messages will be published to. The connector will create the Topic URL using the Tenant, Namespace and Topic value specified.

Access Mode \(Publish\)
:   Select the topic access mode for publishing the messages to. The supported access modes are:

    -   Shared — Allows multiple producers to publish on a topic.
    -   Exclusive — Allows only one producer to publish on a topic. If there is already a producer connected, other producers trying to publish on this topic will receive an error.
    -   Wait for Exclusive — If there is already a producer connected, the producer creation will be pending \(rather than timing out\) until the producer gets Exclusive access.

Compression Type \(Publish\)
:   Select the required Apache Pulsar supported compression format to be used to compress the messages. The supported format are: LZ4, ZLIB, and ZSTD.

Subscription Name \(Consume, Listen\)
:   Enter a unique name for the topic subscription method to be used.

Subscription Type \(Consume, Listen\)
:   Select the preferred subscription mode. The available options are:

    -   Exclusive — Only a single consumer is allowed to attach to the subscription. If more than one consumer attempts to subscribe to a topic using the same subscription, the consumer will receive an error.
    -   Shared — Multiple consumers can attach to the same subscription. Messages are delivered in a round robin distribution across consumers, and any given message is delivered to only one consumer.
    -   Fail-over — Multiple consumers can attach to the same subscription. The consumers will be lexically sorted by the consumer’s name and the first consumer will initially be the only one receiving messages. This consumer is called the master consumer. When the master consumer disconnects, all \(non-acknowledged and subsequent\) messages will be delivered to the next consumer in line.
    -   Key Shared — Applicable for Consume operation only. Messages are optionally tagged with keys. In the Key\_Shared type, multiple consumers can attach to the same subscription. Messages are delivered in a distribution across consumers and message with same key.

Initial Position \(Consume\)
:   Set the cursor initial position to be considered while subscribing to a topic for the first time. The value set here denotes which message the reader should begin reading from when it connects to a topic. The available options are Latest and Earliest.

DLQ Topic \(Consume\)
:   Enter the name of the dead letter topic for storing the messages that are failed to be consumed after maximum deliveries. Applicable only for Shared subscription mode.

DLQ Max Deliveries \(Consume\)
:   Specify the maximum number of times a message is negatively acknowledged before being rerouted to the DLQ Topic. Applicable only for Shared subscription mode.

Timeout\(ms\) \(Consume, Listen\)
:   -   Consume — Provide the maximum amount of time \(in milliseconds\) the consumer can wait before submitting the batch of messages to be processed.
-   Listen — Set the maximum amount of time \(in milliseconds\) the listener should wait before submitting the batch of messages to be processed. For Listen operation, this value should be less than the Listener polling interval defined in the connection settings.

    Default value is 5000ms.

Maximum Batch Size \(Consume, Listen\)
:   Specify the maximum number of messages to be fetched per batch. The default and maximum batch size allowed is 1000.

## Publish

The Publish operation allows a producer to attach to a topic and publish messages to a pulsar Broker. The Consumers can then subscribe to those topics and process the incoming messages. You can use the Import Wizard to import the response profile for the publish action. The connector supports different access modes \(Shared, Exclusive, and Wait for Exclusive\) supported in the Apache Pulsar platform.


:::note

You can use any of the Pulsar supported message compression format. Message of size exceeding 1MB is not allowed for publish. Batching is not supported.

:::

## Consume

Consume operation allows to subscribe to a topic, receive messages and then send an acknowledgement when processing is complete. You can select the required subscription type based on your preference. For shared subscription type, in case of negative acknowledgement when the consumer did not process the message, the message will be pushed to the DLQ \(Dead Letter Queue\) topic. In the**DLQ Max Deliveries** field, you can set the maximum number of negative acknowledgement limit to be applied before pushing a message to the DLQ topic. There is no import action and therefore the Object value will be empty. Both request and response profile will be unstructured.


:::note

Consume operation does not support more than 1000 records.

:::

## Listen

Listen operation allows to continuously listen on a pulsar topic based on the pooling time and then process the message. There is no import action and therefore the Object value will be empty and the response structure will be unstructured. Listen operation does not support more than 1000 records

**Attention:** By default, no messages are retained on a topic that does not have any subscriptions created for it. For more details, refer to the Apache Pulsar topic - [Message Retention and Expiry](https://pulsar.apache.org/docs/2.10.0/cookbooks-retention-expiry/).