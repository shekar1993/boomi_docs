
import OperationEnd from './_operationEnd.md'

# MQTT (Retired) operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-23ebfd6e-f6d8-4612-b9b1-6158bad52d4d"/>
</head>

:::warning

This connector has been retired and is no longer available for production use. You should migrate to the [MQTT connector](../../Integration/Connectors/int-MQTT_connector.md) for continued support and innovation.

For more information about the Retired stage, see the [Feature release stages page](../../Platform/atm-Feature_release_stages_00d83b66-e5db-4038-8398-fcaead4be12d.md).

:::

The MQTT (Retired) operation defines the action to perform with the MQTT connection and how to transport messages.

## Options tab 

The operation supports two types of actions:

-   Listen — Used to subscribe for messages from the MQTT broker.
-   Send — Used to publish messages to MQTT brokers.


MQTT messages are published in topics. The broker keeps messages even after sending it to all subscribers. When a new client submits a subscription for a topic that has already been sent, any retained messages can be sent to that new client using the retained message option.

MQTT defines three levels of quality of service where 0 is the lowest and each higher level designates a higher level of effort by the broker to ensure more reliable message delivery.

A retained message is the last known good value — that is the last message with the retained flag set to true. This feature is useful for newly-connected components or devices to get status updates and when opening a new subscription, as you do not need to wait for the interval update.



**Topic** - 
Topic naming conventions and limitations are:

-   Uses forward slashes
-   Has at least 1 character

-   Is case-sensitive

-   Supports the single-level wildcard + \(sensors/+/temperature\)

-   Supports the multi-level wildcard \# \(sensors/smoke alarms/\#\)


**Quality of Service** - 
Enter a numeric value to set the quality of service:

-   **0**  — At most once delivery. This is the fastest way to send a message using MQTT because a response is not expected and no retry semantics are defined. A QoS 0 message can get lost if the client unexpectedly disconnects or if the broker fails. This default is used unless you override it.
-   **1** — At least once delivery. The MQTT client or broker attempts to deliver the message at least once but may deliver duplicate messages.

-   **2** — Exactly once delivery. The message is delivered once and only once. Duplicate messages are not delivered to the receiving application.


**Retained Message** \(Send only\)
Sets the retain message flag and is cleared by default. If selected, the MQTT broker stores the last retained message and the corresponding Quality of Service for that topic.

<OperationEnd />