# Google Pub/Sub connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-9e46c70e-ea46-466f-9370-0a4a3adac4b5"/>
</head>


The Google Pub/Sub connector makes it easy to dynamically publish to topics or subscriptions, retrieve messages from subscriptions, and send acknowledgments to Google’s Cloud Pub/Sub data streaming and messaging service.

## Connector configuration 

The OAuth 2.0 protocol protects the Google Pub/Sub services and uses Base64 to encode messages.

To configure a connector to communicate with Google Pub/Sub, set up these two components:

-   Google Pub/Sub connection. This connector uses the OAuth 2.0 protocol for authentication and authorization, and you can use the **JWT Bearer Token** and **Authorization Code** grant types for client authentication.
-   Google Pub/Sub operation \(Acknowledge, Publish, Pull, Listen\)


This design provides reusable components, which contain connection settings and operation settings. After building your connection and operation, set up your connector within a process. When you configure the Google Pub/Sub connector correctly within your process, Integration can map to and from virtually any system using the connector to retrieve data from or send data to the Google Pub/Sub service.

## Prerequisites 

To use the connector and implement a connection to your Google Pub/Sub account from Integration, have the following information available:

-   The Google Cloud Platform project ID that you use for billing. Make sure you enable billing for your project. You can find your project ID by going to the Google Cloud Platform console and selecting **Manage all projects** from the projects list. The names and IDs for all the projects you are a member of appear.

-   When using the *JWT Bearer Token* grant type for client authentication, have your signature key and identify your issuer and subject.

:::note

The scope is set automatically as an extended JWT claim. Do not change the extended claim, and ensure that the **Scope** field is empty. Next, you create the signature key using the Google Cloud Platform console and import it into Integration. Finally, you find the issuer and subject in the Google Cloud Platform console \(**Service account details** page\).

:::

-   When using the *Authorization Code* grant type for client authentication, have your Google Cloud Platform client ID, the client secret from when you created your project, and your scope.

:::note

Copy and paste the scope into the **Scope** field from the help \(click the **Information** button\). Verify that a single space separates each entry in the scope.

:::

## Tracked properties 

This connector has the following tracked properties that you can set or reference in various step parameters:

-   **Resource Id** — The subscription ID to identify from where it obtains a message.

-   **Message Id** — The unique identifier for a message.

-   **Acknowledge Id** — The identifier it uses to acknowledge the processing of a message.

-   **Publish Time** — The publishing time for the message.

-   **Ordering Key** — The key value used when sending ordered messages, if it is available in the message. The ordering key can be any meaningful string, but it must be the same for messages that must be delivered in order. The Ordering Key is available only in the Listen operation. To learn more about this topic, see the [Google Pub/Sub Use ordering keys](https://cloud.google.com/pubsub/docs/publisher?hl=en#using-ordering-keys) documentation.

-   **Delivery attempt** — The redelivery attempt count. This property is available only in the Listen operation if you configure the subscription correctly with a `DeadLetterPolicy`. To learn more about this topic, see the [Google Pub/Sub Track delivery attempts](https://cloud.google.com/pubsub/docs/handling-failures#track_delivery_attempts) documentation.


## Tracked groups 

This connector has the following tracked group that you can set or reference in various step parameters:

-   **Message Attributes** — Custom message attributes in the form of key-value pairs. Both key and value can be any string. This property is available only in the Listen operation.
