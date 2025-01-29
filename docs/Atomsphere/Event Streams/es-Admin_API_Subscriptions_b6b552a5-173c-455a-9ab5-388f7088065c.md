# Subscriptions

<head>
  <meta name="guidename" content="Event Streams"/>
  <meta name="context" content="GUID-b6b552a5-173c-455a-9ab5-388f7088065c"/>
</head>

## Supported operations

|Operation|QUERY|MUTATION|
|---------|-----|--------|
|EventStreamsSubscription|✅ Supported|✅ Supported|

## Subscription mutation syntax

Event Streams Subscription Create

```
eventStreamsSubscriptionCreate ( input EventStreamsSubscriptionCreateInput! ) EventStreamsSubscription!
```

Event Streams Subscription Update

```
eventStreamsSubscriptionCreate ( input EventStreamsSubscriptionCreateInput! ) EventStreamsSubscription!
```

Event Streams Subscription Delete

```
eventStreamsSubscriptionDelete ( subscription EventStreamsSubscriptionKey! ) ID!
```

## Subscription query fields

EventStreamsQuerySubscription

|Field|Type|Description|
|-----|----|-----------|
|id|ID|The name of the subscription. It is unique within the environment.|
|topic|EventStreamsQueryTopic|The topic details the subscription is on.|

EventStreamsSubscription

|Field|Type|Description|
|-----|----|-----------|
|name|ID|The name of the subscription. It is unique within the topic.|
|topic|EventStreamsQueryTopic|The topic to which the subscription belongs.|
|type|Boolean|The subscription type.|
|durable|Integer|Whether the subscription is durable or not.|
|backlogCount|BigInteger|The current number of messages not acknowledged on this subscription.|
|messageRateOut|Float|The current rate of messages consumed per second from this subscription.|
|createdTime|DateTime|The timestamp when this topic was created either through this API or when the first producer or subscriber connected to it.|
|consumers|EventStreamsConsumer|The list of connected consumers for this subscription.|
|description|String|The user specified description for this subscription.|
|deadLetterBacklogCount|BigInteger|The current number of dead letter messages on this subscription.|
|retryBacklogCount|BigInteger|The current number messages that are being retried on this subscription.|

EventStreamsSubscriptionKey

|Field|Type|Description|
|-----|----|-----------|
|topic|EventStreamsTopicKey|The topic the subscription is on.|
|name|ID|The subscription name.|

EventStreamsSubscriptionCreateInput

|Field|Type|Description|
|-----|----|-----------|
|environmentId|ID|The ID of the environment to which the topic of the subscription belongs.|
|topicName|ID|The topic name of the subscription.|
|name|ID|The name of the subscription.|
|description|String|The user-defined description for this topic.|

EventStreamsSubscriptionType

|Field|Description|
|-----|-----------|
|NONE|No subscription exists.|
|FAILOVER|Multiple consumers can attach to the same subscription, but only one receives messages from that subscription for each topic or topic partition.|
|EXCLUSIVE|Only a single consumer is allowed to attach to the subscription. <br /> If multiple consumers subscribe to a topic using the same subscription, an error occurs.|
|SHARED|Multiple consumers can attach to the same subscription. <br /> Messages are delivered in a round robin distribution across consumers, and any given message is delivered to only one consumer..|
|KEY_SHARED|Multiple consumers can attach to the same subscription. <br /> Messages are delivered in a distribution across consumers and message with same key or same ordering key are delivered to only one consumer. No matter how many times the message is re-delivered, it is delivered to the same consumer. When a consumer connected or disconnected will cause served consumer change for some key of message.|

## GraphQL implementation

## Mutations

eventStreamsSubscriptionCreate Mutation

```mutation {
  eventStreamsSubscriptionCreate(input: {
    environmentId: "------"
    topicName: "------"
    name: "------"
  }) {
    name
    topic {
      name
      environment
      producerCount
      subscriptionCount
      subscriptions
      backlogCount
      messageRateIn
      messageRateOut
      createdTime
      producers
      description
      createdBy
      partitions
    }
    type
    durable
    backlogCount
    messageRateOut
    createdTime
    consumers {
      name
      messageRateOut
    }
    description
    deadLetterBacklogCount
    retryBacklogCount
  }
}
```

eventStreamsSubscriptionCreate response

```{
  "data": {
    "eventStreamsSubscriptionCreate": {
      "name": "-----",
      "topic": {
        "name": "----",
        "createdTime": "2023-08-17T21:31:00.000Z",
        "description": "------",
        "createdBy": "admin@boomi.com"
      },
      "type": "NONE",
      "durable": true,
      "createdTime": "2023-08-17T21:42:10.000Z",
      "description": "-------"
    }
  }
}
```

eventStreamsSubscriptionelete mutation

```mutation {
  eventStreamsSubscriptionDelete(
    subscription: {
      topic: {
        environmentId: "XXXX"
        name: "_____"
      }
      name: "______"
    }
  )
}
```

eventStreamsSubscriptionDelete response

```{
  "data": {
    "eventStreamsSubscriptionDelete": "------"
  }
}
```

eventStreamsSubscriptionClearBacklog Mutation

```mutation {
  eventStreamsSubscriptionClearBacklog(subscription: {
      topic: {
        environmentId: "XXXX"
        name: "_____"
      }
      name: "______"
    }
  )
}
```