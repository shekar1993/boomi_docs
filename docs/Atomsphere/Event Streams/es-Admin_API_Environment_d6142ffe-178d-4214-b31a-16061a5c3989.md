# Environment

<head>
  <meta name="guidename" content="Event Streams"/>
  <meta name="context" content="GUID-d6142ffe-178d-4214-b31a-16061a5c3989"/>
</head>

## Supported operations

|Operation|QUERY|MUTATION|
|---------|-----|--------|
|EventStreamsTopicMetrics|✅ Supported|Not Supported |
|EventStreamsSubscriptionMetrics|✅ Supported|Not Supported |
|EventStreamsToken|Not Supported|✅ Supported |

## Environment query syntax

Environment query

```
query environment {
 environments {
 id
 name
 eventStreams {
 region
 subscriptionCount
 topicCount
 tokens {
 id
 name
 data
 allowConsume
 allowProduce
 expirationEditable
 expirationTime
 createdTime
 createdBy
 description
   }
  }
 }
}
```

Environment query response

```
{
  "data": {
    "environments": [
      {
        "id": "XXXXX",
        "name": "Production",
        "eventStreams": {
          "region": "usa-east-1",
          "subscriptionCount": 4,
          "topicCount": 3,
          "tokens": [
            {
              "id": "XXXXXX",
              "name": null,
              "data": "XXXXXXX",
              "allowConsume": true,
              "allowProduce": true,
              "expirationEditable": false,
              "expirationTime": "2025-04-17T21:45:26.000Z",
              "createdTime": "2024-04-17T21:45:26.000Z",
              "createdBy": null,
              "description": null
            },
            {
              "id": "XXXXXX",
              "name": "SAP",
              "data": "XXXX",
              "allowConsume": true,
              "allowProduce": true,
              "expirationEditable": true,
              "expirationTime": "2024-12-01T07:59:59.000Z",
              "createdTime": "2024-07-31T18:42:52.000Z",
              "createdBy": null,
              "description": null
            }
          ]
        }
      }
    ]
  }
}
```

## Environment query fields

EventStreamsEnvironment

|Field|Type|Description|
|-----|----|-----------|
|region|string|The region name of the Event Streams cluster for this environment.|
|topicCount|Integer|The number of topics in this environment.|
|topics|EventStreamsTopic|The list of topics in this environment.|
|subscriptionCount|Integer|The current number of subscriptions on all topics in this environment.|
|backlogCount|BigInteger|The current number of messages not acknowledged on this subscription.|
|producerCount|Integer|The current number of producers on all topics in this environment.|
|tokens|EventStreamsToken|All the tokens can be used to connect to this environment on pulsar|

Tokens
|Field|Type|Description|
|------|------|------|
|Id|ID|Unique identifier associated with a token.|
|name|string|The name of a token chosen by the user during creation. The name would be set to 'default', the default value when the token is auto-created for an environment.|
|data|string|The actual JWT token associated with the object.|
|allowConsume|Boolean|Determines if consume action permission was granted to the token or not.|
|allowProduce|Boolean|Determines if produce action permission was granted to the token or not.|
|expirationEditable|Boolean|Signifies if the expiration time of the token can be extended without having to recreate a token. The legacy tokens will have this set to false since the token carries the expiration as a claim within itself.|
|expirationTime|DateTime|Timestamp by which a token would expire.365 days from the creation date if not specified.|
|createdTime|DateTime|Timestamp of when the token was created.|
|createdBy|String|The user who created the token.|
|description|String|The description associated with a token.|

EventStreamsProducer

|Field|Type|Description|
|-----|----|-----------|
|name|String|The name of the producer.|
|messageRateIn|Float|The current rate of messages published per second by this producer.|
|createdTime|DateTime|The timestamp when this producer was created either through this api or when the producer published a message.|

EventStreamsConsumer

|Field|Type|Description|
|-----|----|-----------|
|name|String|The name of the consumer.|
|messageRateOut|Float|The current rate of messages delivered per second to the consumer.|

EventStreamsAccount

|Field|Type|Description|
|-----|----|-----------|
|provisioned|Boolean|Whether the account is provisioned for Event Streams or not.|

```
type Account @key(fields: "id") @extends {
  id: ID!
  " Event Streams information about this Account"
  eventStreams: EventStreamsAccount! @hasFeature(features: [["EVENT_STREAMS"]]) @hasPrivilege(privs: [["EVENT_STREAMS_ACCESS", "EVENT_STREAMS_ADMIN"]])
}
```

EventStreamsTopicKey

|Field|Type|Description|
|-----|----|-----------|
|environmentId|ID|The ID of the environment to which the topic belongs.|
|name|ID|The current rate of messages delivered per second to the consumer.|


EventStreamsSubscriptionKey

|Field|Type|Description|
|-----|----|-----------|
|topic|EventStreamsTopicKey|The topic the subscription is on.|
|name|ID|The subscription name.|

## Region query syntax

Retrieves all of the available regions.

```
eventStreamsRegions: Account!
```

EventStreamsRegion query

```
query region{
  eventStreamsRegions {
    id
  }
}
```

EventStreamsRegion response

```
{
  "data": {
    "eventStreamsRegions": [
      {
        "id": "aus-1"
      },
      {
        "id": "usa-east-1"
      }
    ]
  }
}
```
## Token Mutation syntax

```
eventStreamsTokenCreate ( input EventStreamsEnvironmentTokenCreateInput! ) [EventStreamsToken]

eventStreamsTokenUpdate ( input EventStreamsEnvironmentTokenUpdateInput! ) [EventStreamsToken]

eventStreamsTokenDelete ( input ID! ) [ID]
```

## Token Mutation Input fields

EventStreamsEnvironmentTokenCreateInput

|Field|Type|Description|
|-----|----|-----------|
|environment|ID|The environment to which the token belongs.|
|name|String|The name to be associated with the token. This need to be unique within the environment. |
|allowConsume|Boolean|Determines whether or not the consume action permission is to be granted to the token.|
|allowProduce|Boolean|Determines whether or not the produce action permission is to be granted to the token.|
|expirationTime|DateTime|Timestamp for when a token is to expire. If not specified, the default is 365 days.|
|description|String|Description of the token.|

EventStreamsEnvironmentTokenUpdateInput

|Field|Type|Description|
|-----|----|-----------|
|id|ID|Unique identifier of the token.|
|name|String|The name to be associated with the token. This need to be unique within the environment. |
|allowConsume|Boolean|Determines whether or not the consume action permission is to be granted to the token.|
|allowProduce|Boolean|Determines whether or not the produce action permission is to be granted to the token.|
|expirationTime|DateTime|Timestamp for when a token is to expire. If not specified, the default is 365 days.|
|description|String|Description of the token.|

### Implementation

**CREATE**

EventStreamsToken Request

```
mutation createToken{
  eventStreamsTokenCreate(input: {
    environmentId:"XXXXX"
    name: "-----"
    allowConsume: true
    allowProduce: true
    description: "api test"
    expirationTime: "2025-05-09T23:59:59-04:00"
    }) {
    id
    name
    data
    allowConsume
    allowProduce
    expirationEditable
    expirationTime
    createdTime
    createdBy
    description
  }
}
```

EventStreamsToken Response

```
{
  "data": {
    "eventStreamsTokenCreate": {
      "id": "XXXX",
      "name": "----",
      "data": "XXXXXX",
      "allowConsume": true,
      "allowProduce": true,
      "expirationEditable": true,
      "expirationTime": "2025-05-10T03:59:59.000Z",
      "createdTime": "2024-05-31T17:38:51.991Z",
      "createdBy": null,
      "description": "api test"
    }
  }
}
```

**UPDATE**

EventStreamsToken Request

```
mutation updateToken{
  eventStreamsTokenUpdate(input: {
    "id": "XXXX",
    "name": "----"
    allowConsume: true
    allowProduce: false
    expirationTime: "2025-05-09T23:59:59-04:00"
    description: "api test update"
    }){
    id
    name
    data
    allowConsume
    allowProduce
    expirationEditable
    expirationTime
    createdTime
    createdBy
    description
  }
}
```

EventStreamsToken Response

```
{
  "data": {
    "eventStreamsTokenCreate": {
      "id": "XXXX",
      "name": "----",
      "data": "XXXXXX",
      "allowConsume": true,
      "allowProduce": false,
      "expirationEditable": true,
      "expirationTime": "2025-05-10T03:59:59.000Z",
      "createdTime": "2024-05-31T17:38:51.991Z",
      "createdBy": null,
      "description": "api test update"
    }
  }
}
```
**DELETE**

EventStreamsToken Request

```
mutation deleteToken{
  eventStreamsTokenDelete(id:"XXXX")}
```

EventStreamsToken Response

```
{
  "data": {
    "eventStreamsTokenDelete": "tok-XXXX"
  }
}
```