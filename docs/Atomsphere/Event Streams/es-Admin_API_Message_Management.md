# Message Management 

<head>
  <meta name="guidename" content="Event Streams"/>
  <meta name="context" content="GUID-8afdf645-3d87-4ef2-b809-0828107d885f"/>
</head>

## Supported operations

|Operation|QUERY|MUTATION|
|---------|-----|--------|
|EventStreamsMessages|✅ Supported|✅ Supported|


## Messages query syntax

Event Streams Message

`eventStreamsMessage ( input EventStreamsMessageInput! ) [EventStreamsMessage]`

Event Streams Messages

`eventStreamsMessages ( input EventStreamsMessagesInput! ) [EventStreamsMessage]`

Event Streams Dead Letter Queue Message
`eventStreamsDeadLetterQueueMessage ( input EventStreamsMessageInput! ) [EventStreamsMessage]`

Event Streams Dead Letter Queue Messages
`eventStreamsDeadLetterQueueMessages ( input EventStreamsMessagesInput! ) [EventStreamsMessage]`

## Messages mutations syntax

Event Streams Messages Delete

`eventStreamsMessageDelete ( input EventStreamsMessagesDeleteInput! ) [ID!]`

Event Streams Dead Letter Queue Message Delete

`eventStreamsDeadLetterQueueMessageDelete ( input EventStreamsMessagesDeleteInput! ) [ID!]`



## Messages query fields

*EventStreamsMessagesInput*

|Field|Type|Description|
|-----|----|-----------|
|endIndex|Int|Subscription backlog message end index, index parameter is 1 based index and inclusive. For example, an index of 25 refers to the 25th message in the subscription backlog.|
|environmentId|ID|The Id of environment to which the topic of the subscription belongs.|
|startIndex|Int|Subscription backlog message start index. The index parameter is 1 based and inclusive. For example, an index of 1 refers to the first message in the subscription backlog.|
|subscriptionName|ID|The name of the subscription.|
|topicName|ID|The topic name of the subscription.|


*EventStreamsMessageInput*

|Field|Type|Description|
|-----|----|-----------|
|environment|*Environment*|The environment to which the topic of the subscription belongs to.|
|messageId|*String*|Message ID.|
|metaData|*MessageProperty*|The message's metadata.|
|payload|*String*|Message payload - Base64 encoded string.|
|producer|*String*|Message producer name.|
|publishTime|*DateTime*|Time message is published.|
|redeliveryCount|*Int*|Redelivery count of message.|
|size|*Int*|The uncompressed message payload size in bytes.|
|subscriptionName|ID|The name of the subscription.|
|topicName|ID|The topic name of the subscription.|


*EventStreamsMessagesDeleteInput*

|Field|Type|Description|
|-----|----|-----------|
|environmentId|ID|The ID of the environment to which the topic of the subscription belongs to.|
|messageId|*String*|List of subscription backlog message IDs to be deleted.|
|subscriptionName|ID|The name of the subscription.|
|topicName|ID|The topic name of the subscription.|

*Output Type*

|Field|Type|Description|
|-----|----|-----------|
|ID|ID|The ID scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as "4") or integer (such as 4) input value will be accepted as an ID.|

## GraphQL implementation

**Get Backlog Messages**

*Request:*

```
 query getSubscriptionBacklogMessages {
   eventStreamsMessages(
   input: {
   environmentId: "--------"
   topicName: "--------"
   subscriptionName: "--------"
   startIndex: 1
   endIndex: 2
   }) {
     environment{
       id
     }
    topicName
    subscriptionName
    messageId
    metaData {
      name
      value
    }
    payload
    redeliveryCount
    producer
    publishTime
    size
  }
}
```

*Response:*

```
{
  "data": {
    "eventStreamsMessages": [
      {
        "environment": {
          "id": "--------"
        },
        "topicName": "--------",
        "subscriptionName": "--------",
        "messageId": "--------",
        "metaData": [
          {
            "name": "MessageSize",
            "value": "Small"
          },
          {
            "name": "MessageType",
            "value": "Json"
          },
          {
            "name": "ProducerName",
            "value": "ProducerSmall"
          }
        ],
        "payload": "--------",
        "redeliveryCount": 0,
        "producer": "--------",
        "publishTime": "2024-03-13T20:45:20.277Z",
        "size": 1031
      },
      {
        "environment": {
          "id": "--------"
        },
        "topicName": "--------",
        "subscriptionName": "sub2-topic1",
        "messageId": "--------",
        "metaData": [
          {
            "name": "MessageSize",
            "value": "Small"
          },
          {
            "name": "MessageType",
            "value": "Json"
          },
          {
            "name": "ProducerName",
            "value": "ProducerSmall"
          }
        ],
        "payload": "---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
        "redeliveryCount": 0,
        "producer": "--------",
        "publishTime": "2024-03-13T20:45:20.277Z",
        "size": 1025
      }
    ]
  }
}
```

**Get Backlog Message by Message ID**

*Request:*

```
query  getSubscriptionBacklogMessageByMessageId {
   eventStreamsMessage(
   input: {
   environmentId: "--------"
   topicName: "--------"
   subscriptionName: "--------"
   messageId: "--------"
   }) {
     environment{
       id
     }
    topicName
    subscriptionName
    messageId
    metaData {
      name
      value
    }
    payload
    redeliveryCount
    producer
    publishTime
    size
  }
}
```

*Response:*

```
{
  "data": {
    "eventStreamsMessage": {
      "environment": {
        "id": "--------"
      },
      "topicName": "--------",
      "subscriptionName": "--------",
      "messageId": "--------",
      "metaData": [
        {
          "name": "MessageSize",
          "value": "Small"
        },
        {
          "name": "MessageType",
          "value": "Json"
        },
        {
          "name": "ProducerName",
          "value": "ProducerSmall"
        }
      ],
      "payload": "---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
      "redeliveryCount": 0,
      "producer": "--------",
      "publishTime": "2024-03-13T20:45:20.277Z",
      "size": 1031
    }
  }
}
```

**Dead letter Backlog Messages**

*Request:*
```
query  getDLQSubscriptionBacklogMessages {
   eventStreamsDeadLetterQueueMessages(
   input: {
   environmentId: "--------"
   topicName: "--------"
   subscriptionName: "--------"
   startIndex: 1
   endIndex: 2
   }) {
     environment{
       id
     }
    topicName
    subscriptionName
    messageId
    metaData {
      name
      value
    }
    payload
    redeliveryCount
    producer
    publishTime
    size
  }
}
```
*Response:*

```
{
  "data": {
    "eventStreamsDeadLetterQueueMessages": [
      {
        "environment": {
          "id": "--------"
        },
        "topicName": "--------",
        "subscriptionName": "--------",
        "messageId": "--------",
        "metaData": [
          {
            "name": "ORIGIN_MESSAGE_ID",
            "value": "12033:201:0"
          },
          {
            "name": "ORIGIN_MESSAGE_IDY_TIME",
            "value": "12033:201:0"
          },
          {
            "name": "REAL_TOPIC_TEST",
            "value": "--------"
          }
        ],
        "payload": "---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
        "redeliveryCount": 0,
        "producer": "--------",
        "publishTime": "2024-03-13T20:54:18.566Z",
        "size": 1032
      },
      {
        "environment": {
          "id": "--------"
        },
        "topicName": "--------",
        "subscriptionName": "--------",
        "messageId": "--------",
        "metaData": [
          {
            "name": "ORIGIN_MESSAGE_ID",
            "value": "12033:205:0"
          },
          {
            "name": "ORIGIN_MESSAGE_IDY_TIME",
            "value": "12033:205:0"
          },
          {
            "name": "REAL_TOPIC_TEST",
            "value": "--------"
          }
        ],
        "payload": "---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
        "redeliveryCount": 0,
        "producer": "--------",
        "publishTime": "2024-03-13T20:54:18.566Z",
        "size": 1035
      }
    ]
  }
}
```

**Dead letter Backlog Message by MessageId**

*Request:*

```
query  getDLQSubscriptionBacklogMessageByMessageId {
   eventStreamsDeadLetterQueueMessage(
   input: {
   environmentId: "--------"
   topicName: "--------"
   subscriptionName: "--------"
   messageId: "--------"
   }) {
     environment{
       id
     }
    topicName
    subscriptionName
    messageId
    metaData {
      name
      value
    }
    payload
    redeliveryCount
    producer
    publishTime
    size
  }
}
```

*Response:*

```
{
  "data": {
    "eventStreamsDeadLetterQueueMessage": {
      "environment": {
        "id": "--------"
      },
      "topicName": "--------",
      "subscriptionName": "--------",
      "messageId": "--------",
      "metaData": [
        {
          "name": "ORIGIN_MESSAGE_ID",
          "value": "12033:201:0"
        },
        {
          "name": "ORIGIN_MESSAGE_IDY_TIME",
          "value": "12033:201:0"
        },
        {
          "name": "REAL_TOPIC_TEST",
          "value": "--------"
        }
      ],
      "payload": "---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
      "redeliveryCount": 0,
      "producer": "--------",
      "publishTime": "2024-03-13T20:54:18.566Z",
      "size": 1032
    }
  }
}
```
## Mutations

**Subscription Backlog Message delete**

*Request:*

```
mutation messageDelete {
  eventStreamsMessageDelete(input: {
   environmentId: "--------"
   topicName: "--------"
   subscriptionName: "--------"
   messageId: ["--------"]
  })
}
```

*Response:*

```
{
  "data": {
    "eventStreamsMessageDelete": [
      "<messageid>"
    ]
  }
}
```

**Dead Letter Backlog Message delete**


*Request:*

```
mutation messageDeleteDLQ {
  eventStreamsDeadLetterQueueMessageDelete(input: {
   environmentId: "--------"
   topicName: "--------"
   subscriptionName: "testing-dlq-sub"
   messageId: ["--------"]
  })
}
```

*Response:*

```
{
  "data": {
    "eventStreamsDeadLetterQueueMessageDelete": [
      "<messageid>"
    ]
  }
}
```


