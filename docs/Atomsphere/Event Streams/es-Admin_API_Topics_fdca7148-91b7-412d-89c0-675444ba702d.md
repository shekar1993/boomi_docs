# Topics

<head>
  <meta name="guidename" content="Event Streams"/>
  <meta name="context" content="GUID-fdca7148-91b7-412d-89c0-675444ba702d"/>
</head>

## Supported operations

|Operation|QUERY|MUTATION|
|---------|-----|--------|
|EventStreamsTopic|✅ Supported|✅ Supported|


## Topics query syntax

Event Streams Topic query

```
eventStreamsTopic ( environmentId ID!, name ID! ) EventStreamsTopic!
```

Event Streams Topics query

```
eventStreamsTopics ( environmentId ID ) [EventStreamsTopic!]

```

## Topics query fields

EventStreamsQueryTopic

|Field|Type|Description|
|-----|----|-----------|
|id|ID|The name of the topic. It is unique within the environment.|
|environment|EventStreamsTopicMetrics.environment|The environment to which the topic belongs.|

EventStreamsTopic

|Field|Type|Description|
|-----|----|-----------|
|name|ID|The name of the topic. It is unique within the environment.|
|environment|Environment|The environment to which the topic belongs.|
|topic|EventStreamsQueryTopic|The details of the topic. It is unique within the environment.|
|producerCount|Integer|The current number of active producers on this topic.|
|subscriptionCount|Integer|The current number of subscriptions on this topic.|
|subscriptions|EventStreamsSubscription|The list of subscriptions on this topic.|
|backlogCount|BigInteger|The total number of messages for all subscriptions not acknowledged on this topic.|
|messageRateIn|Float|The current rate of messages consumed per second from this subscription.|
|messageRateOut|Float|The current rate of messages consumed per second from this subscription.|
|createdTime|DateTime|The timestamp when this topic was created either through this API or when the first producer or subscriber connected to it.|
|producers|EventStreamsProducer|The list of all local publishers on the topic, ranging from zero to thousands.|
|createdBy|String|The user who created this topic.|
|partitions|Integer|The number of partitions for this topic.|

EventStreamsTopicKey

|Field|Type|Description|
|-----|----|-----------|
|environmentId|ID|The ID of the environment to which the topic belongs.|
|name|ID|The topic name.|

EventStreamsTopicCreateInput

|Field|Type|Description|
|-----|----|-----------|
|environmentId|ID|The ID of the environment to which the topic belongs.|
|name|ID|The topic name.|
|description|String|The user-defined description for this topic.|
|partitions|Integer|The number of partitions for this topic.|

## GraphQL implementation

EventStreamsTopics query

```
{
  eventStreamsTopics(environmentId: "-------") {
    name
    environment {
      id
      name
      publishedName
      classification
    }
    producerCount
    subscriptionCount
    subscriptions {
      name
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
    backlogCount
    messageRateIn
    messageRateOut
    createdTime
    producers {
      name
      messageRateIn
      createdTime
    }
    description
    createdBy
    partitions
  }
}
```

EventStreamsTopics response

```
{
  "data": {
    "eventStreamsTopics": [
      {
        "name": "Test_Topic",
        "subscriptions": [
          {
            "name": "Test1",
            "type": "NONE",
            "description": ""
          },
          {
            "name": "Test3",
            "type": "NONE",
            "description": ""
          },
          {
            "name": "Test2",
            "type": "NONE",
            "description": ""
          }
        ],
        "createdTime": "2023-08-09T22:08:31.000Z",
        "description": "Test topic",
        "createdBy": "test@boomi.com",
        "partitions": 1
      }
    ]
  }
}

```

EventStreamsTopic query

```{
  eventStreamsTopic(environmentId: "------", name: "------") {
    name
    environment {
      id
      name

      publishedName
      classification
    }
    producerCount
    subscriptionCount
    subscriptions {
      name
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
    backlogCount
    messageRateIn
    messageRateOut
    createdTime
    producers {
      name
      messageRateIn
      createdTime
    }
    description
    createdBy
    partitions
  }
}
```

EventStreamsTopic response

```{
  "data": {
    "eventStreamsTopic": {
      "name": "Test_Topic",
      "subscriptions": [
        {
          "name": "Test1",
          "type": "NONE",
          "backlogCount": 0,
          "createdTime": "2023-08-09T22:08:38.000Z",
          "description": ""
        },
        {
          "name": "Test3",
          "type": "NONE",
          "backlogCount": 0,
          "createdTime": "2023-08-09T22:08:54.000Z",
          "description": ""
        },
        {
          "name": "Test2",
          "type": "NONE",
          "backlogCount": 0,
          "createdTime": "2023-08-09T22:08:44.000Z",
          "description": ""
        }
      ],
      "description": "Test topic",
      "createdBy": "test@boomi.com",
      "partitions": 1
    }
  }
}
```

## Mutations

eventStreamsTopicCreate mutation

```mutation {
  eventStreamsTopicCreate(input: {
    environmentId: "------"
    name: "---topicName---"
    description: "------"
  }) {
    name
    environment {
      id
      name
      gateway
      settings
      publishedName
      classification
      integrationPackEnvironmentAttachment
      atoms
      eventStreams
    }
    producerCount
    subscriptionCount
    subscriptions {
      name
      topic
      type
      durable
      backlogCount
      messageRateOut
      createdTime
      consumers
      description
      deadLetterBacklogCount
      retryBacklogCount
    }
    backlogCount
    messageRateIn
    messageRateOut
    createdTime
    producers {
      name
      messageRateIn
      createdTime
    }
    description
    createdBy
    partitions
  }
}
```

eventStreamsTopicCreate response

```{
  "data": {
    "eventStreamsTopicCreate": {
      "name": "XXX",
      "environment": {
        "id": "XXXX",
        "name": "EventStreams-Local"
      },
      "producerCount": 0,
      "subscriptionCount": 0,
      "subscriptions": null,
      "createdTime": "2023-08-17T21:31:00.000Z",
      "description": "XXXX",
      "createdBy": "admin@boomi.com",
      "partitions": 1
    }
  }
}
```

eventStreamsTopicDelete mutation

```mutation {
  eventStreamsTopicDelete(
    topic: {
      environmentId: "____"
      name: "____"
    }
  )
}
```

eventStreamsTopicDelete response

```{
  "data": {
    "eventStreamsTopicDelete": ""
  }
}
```