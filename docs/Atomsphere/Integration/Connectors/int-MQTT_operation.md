# MQTT operation

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-58efa676-b0c2-4c61-a932-eb8be660c91b"/>
</head>

## Supported Operations

The MQTT operation defines the action to perform in tandem with the MQTT broker, using the details provided as part of MQTT connection. The operation supports these actions:

- **Listen** - Used to subscribe for messages from the MQTT broker.
- **Send** - Used to publish messages to MQTT brokers.

## Options tab

**Topic** - 
MQTT messages are published as topics. Topic naming conventions and limitations are:

-   Uses forward slashes
-   Has at least 1 character

-   Is case-sensitive

-   Supports the single-level wildcard + \(sensors/+/temperature\) (Listen operation only)

-   Supports the multi-level wildcard \# \(sensors/smoke alarms/\#\) (Listen operation only)

- MQTT message size can be a maximum of 1MB. This limit can be overridden by setting a higher value via the container property. To learn more, refer to the [Maximum Size for Update Operation](https://help.boomi.com/docs/Atomsphere/Integration/Integration%20management/r-atm-Properties_panel_Advanced_tab_c39737e8-1b16-4fdd-b414-152694364c14#maximum-size-for-update-operation).



**Quality of Service** - 
MQTT defines three levels of quality of service where 0 is the lowest and each higher level designates a higher level of effort by the broker to ensure more reliable message delivery.

Select a value from the dropdown to set the quality of service:

-   **0**  — At most once delivery. This is the fastest way to send a message using MQTT because a response is not expected and no retry semantics are defined. A QoS 0 message can get lost if the client unexpectedly disconnects or if the broker fails. This default is used unless you override it.
-   **1** — At least once delivery. The MQTT client or broker attempts to deliver the message at least once but may deliver duplicate messages.

-   **2** — Exactly once delivery. The message is delivered once and only once. Duplicate messages are not delivered to the receiving application.


**Retain Message** - 
A retained message is the last known good value — that is the last message with the retained flag set to true. When a new client submits a subscription for a topic that has already been sent, any retained messages can be sent to that new client using the retain message option. This feature is useful for newly-connected components or devices to get status updates and when opening a new subscription, as you do not need to wait for the interval update.

Sets the retain message flag and is cleared by default. If selected, the MQTT broker stores the last retained message and the corresponding Quality of Service for that topic.

## Archiving tab

See the topic [Connector operation’s Archiving tab](../Process%20building/r-atm-Connector_operations_Archiving_tab_061fbf70-1034-4bf3-b795-e952f9338dbe.md) for more information.

## Tracking tab

See the topic [Connector operation’s Tracking tab](../Process%20building/r-atm-Connector_operations_Tracking_tab_8a03f547-738a-448c-bb0f-594bad806cfe.md) for more information.

### Tracked properties

- **Topic** - 
MQTT messages are published in topics. This property tracks the value entered in the Topic field in the Operation tab.

## Caching tab

See the topic [Connector operation’s Caching tab](../Process%20building/r-atm-Connector_operations_Caching_tab_f46b49d6-25bc-4337-ade1-9c67817b8d74.md) for more information.

