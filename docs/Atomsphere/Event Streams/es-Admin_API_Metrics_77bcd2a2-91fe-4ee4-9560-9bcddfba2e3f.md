# Metrics

<head>
  <meta name="guidename" content="Event Streams"/>
  <meta name="context" content="GUID-77bcd2a2-91fe-4ee4-9560-9bcddfba2e3f"/>
</head>

## Supported operations

|Operation|QUERY|MUTATION|
|---------|-----|--------|
|EventStreamsTopicMetrics|✅ Supported|Not Supported |
|EventStreamsSubscriptionMetrics|✅ Supported|Not Supported |

## Topics metrics query syntax

Event Streams Topic Metrics summary

```
eventStreamsTopicMetricsSummary ( input EventStreamsMetricsQueryInput! ) [EventStreamsTopicMetrics!]
```

EventStreamsTopicMetrics

```
{
  eventStreamsTopicMetricsSummary(input: {
  requestTsStart: "2023-09-06"
  requestTsEnd: "2023-09-26"
  requestTsInterval: {
    amount: 1
    unit: DAYS
  }
}) {
    region
    account {
      id
      name
      status
      settings
      eventStreams
    }
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
    topic {
      name
    }
    subscriptionCount
    producerCount
    consumerCount
    messageRateIn
    messageRateOut
    backlog
    inMessagesTotal
    intervalStartTs
    intervalEndTs
  }
}

```

## Topics metrics query fields

|Field|Type|Description|
|-----|----|-----------|
|region|string|The name of the region to which the topic belongs.|
|account|Account|The account to which the topic belongs.|
|environment|Environment|The environment to which the topic belongs.|
|topic|EventStreamsQueryTopic|The details of the topic. It is unique within the environment.|
|subscriptionCount|Integer|The last value of the number of subscriptions on this topic in the given time range.|
|producerCount|Integer|The last value of the number of active producers on this topic in the given time range.|
|consumerCount|Integer|The last value of the number of active consumers on this topic in the given time range.|
|messageRateIn|Float|The average rate of the messages produced per second on this topic in the given time range.|
|messageRateOut|Float|The average rate of the messages consumed per second from this topic in the given time range.|
|backlog|BigIngeger|The total number of messages for all subscriptions not acknowledged on this topic in the given time range.|
|inMessagesTotal|BigInteger|The total number of messages received for this topic since inception.|
|intervalStartTs|DateTime|The date and time of the start of the interval.|
|intervalEndTs|DateTime|The date and time of the end of the interval.|
|deadLetterBacklog|BigInteger|The total number of dead letter messages for all subscriptions on this topic in the given time range.|

EventStreamsQueryTopic

|Field|Type|Description|
|-----|----|-----------|
|id|ID|The name of the topic. It is unique within the environment.|
|environment|EventStreamsTopicMetrics.environment|The environment to which the topic belongs.|

## Subscription metrics query syntax

Event Streams Subscription Metrics summary

```
eventStreamsSubscriptionMetricsSummary ( input EventStreamsMetricsQueryInput! ) [EventStreamsSubscriptionMetrics!]
```

EventStreamsSubscriptionMetrics

```
query subMetrics {
eventStreamsSubscriptionMetricsSummary(input: {
  requestTsStart: "2023-05-20"
  requestTsEnd: "2023-06-01"
  requestTsInterval: {
    amount: 1
    unit: DAYS
  }
}) {
    intervalStartTs
    backlog
    deadLetterBacklog
  }
}
```

## Subscription metrics query fields

|Field|Type|Description|
|-----|----|-----------|
|region|string|The name of the region to which the subscription belongs.|
|account|Account|The account to which the subscription belongs.|
|environment|Environment|The environment to which the subscription belongs.|
|subscription|EventStreamsQuerySubscription|The details of the subscription. It is unique within the environment.|
|backlog|BigIngeger|The total number of messages not acknowledged on this subscription in the given time range.|
|messageRateOut|Float|The average rate of messages consumed per second on this subscription in the given time range.|
|messageThroughPut|Float|The average message consumption throughput per second on this subscription in the given time range.|
|outMessagesTotal|BigInteger|The total number of messages read from this subscriptions in the given time range.|
|intervalStartTs|DateTime|The date and time of the start of the interval.|
|intervalEndTs|DateTime|The date and time of the end of the interval.|
|deadLetterBacklog|BigInteger|The total number of dead letter messages on this subscription in the given time range.|

EventStreamsQuerySubscription

|Field|Type|Description|
|-----|----|-----------|
|id|ID|The name of the subscription. It is unique within the topic.|
|topic|EventStreamsQueryTopic|The environment to which the topic belongs.|

EventStreamsMetricsQueryInput

|Field|Type|Description|
|-----|----|-----------|
|requestTsStart|DateTime|Filters the records retrieved to only those on or after this timestamp.|
|requestTsEnd|DateTime|Filters the records retrieved to only those on or before this timestamp.|
|filter|Filter|Filters the records retrieved using the Filter Query Language. The fields available in the filter expression are those listed in the EventStreamsTopicMetrics and EventStreamsSubscriptionMetrics type.

|
|requestTsInterval|EventStreamsQueryTimeInterval|The time interval to bucket requested summary data for given timeunit and number of buckets.|

Free-form text following the filter query language syntax. This syntax is a set of conditions joined together with `and` or `or` keywords and optionally grouped by parentheses.

Each condition has the form:

`<field_path> <operator> <literal>`

OR

`<field_path> in [ <literal>, <literal>, ... ]`

OR

`<field_path> not in [ <literal>, <literal>, ... ]`

where

-   `field_path` is the period-separated chain of field names \(see the description for the input field using thi scalar for more details\).
-   `operator` is one of `=`, `<=`, `>=`, `!=`, `<`, or `>`.
-   `literal` is a number or text enclosed with quotes or double-quotes

For example:

```
`(field1 = 'abc' and field2 > 5.3) or (field3.subfieldA != "def"
and field4.subfieldB.subsubfieldZ in [ 200, 204, 205 ])`
```

Scalar Filter

|Field|Description|
|-----|-----------|
|FILTER\_INVALID\_FIELD|The Filter Invalid Field exception is returned when the field ''\{0\}'' is not available at line \{1\}, character \{2\} of ''\{3\}''.|
|FILTER\_INVALID\_OPERATOR|The Filter Invalid Operator exception is returned when the \{\} Operator ''\{0\}'' is not available at line \{1\}, character \{2\} of ''\{3\}''.|
|FILTER\_INVALID\_ENUM\_VALUE|The Filter Invalid Enum Value is returned when the Enum value ''\{0\}'' is not available at line \{1\}, character \{2\} of ''\{3\}''.|
|FILTER\_VALUE\_NOT\_COERCIBLE|The Filter Value Not Coercible is returned when the The value ''\{0\}'' is not able to be coerced to a \{1\} at line \{2\}, character \{3\} of ''\{4\}''.|
|FILTER\_FIELD\_NOT\_SCALAR|The Filter Field Not Scalar is returned when the field ''\{0\}'' cannot have a condition on it because it is not a scalar or enum at line \{1\}, character \{2\} of ''\{3\}''.|
|FILTER\_INVALID\_SYNTAX|The Filter Invalid Syntax is returned when the filter string does not follow proper syntax: \{0\}.|

scalar DateTime

A date and time with up to millisecond granularity. Represented as either an ISO-8601 string or as the number of milliseconds past epoch \(1970-01-01\). Examples:

-   `2021-11-02T00:33:22.822Z`
-   `1638826693664`
-   `2021-11-20`
-   `2021-11-02T11:38:47EDT`

|Field|Type|Description|
|-----|----|-----------|
|scalar|Long|64-bit signed integer. Represented as either an Int or a String of digits \(123 or \\"123\\"\).|
|scalar|BigInteger|A sized integer with no bounds. Represented as a string of digits or scientific notation.|
|scalar|Upload|Either a file in a multi-part request or an inline data URL.

|

## GraphQL implementation

EventStreamsTopicsMetricsSummary Query

```
{
  eventStreamsTopicMetricsSummary(input: {
  requestTsStart: "2023-09-06"
  requestTsEnd: "2023-09-26"
  requestTsInterval: {
    amount: 1
    unit: DAYS
  }
}) {
    region
    account {
      id
      name
      status
      settings
      eventStreams
    }
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
    topic {
      name
    }
    subscriptionCount
    producerCount
    consumerCount
    messageRateIn
    messageRateOut
    backlog
    inMessagesTotal
    intervalStartTs
    intervalEndTs
  }
}

```

EventStreamsTopicsMetricsSummary Resonse

```
{
  "data": {
    "eventStreamsTopicMetricsSummary": [
      {
        "topic": {
          "name": "Test_Topic"
        },
        "subscriptionCount": 3,
        "producerCount": 0,
        "consumerCount": 0,
        "messageRateIn": 0,
        "messageRateOut": 0,
        "backlog": 0,
        "inMessagesTotal": 0,
        "intervalStartTs": "2023-07-22T00:00:00.000Z",
        "intervalEndTs": "2023-08-21T00:00:00.000Z"
      }
    ]
  }
}

```

EventStreamsSubscriptionMetricsSummary Query

```
{
  eventStreamsSubscriptionMetricsSummary(input: {
  requestTsStart: "2023-09-06"
  requestTsEnd: "2023-09-26"
  requestTsInterval: {
    amount: 1
    unit: DAYS
  }
}) {
    region
    account {
      id
      name
      status
      settings
      eventStreams
    }
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
    subscription {
      name
      topic
    }
    backlog
    messageRateOut
    messageThroughputOut
    outMessagesTotal
    intervalStartTs
    intervalEndTs
    deadLetterBacklog
  }
}

```

EventStreamsSubscriptionMetricsSummary Response

```
{
  "data": {
    "eventStreamsSubscriptionMetricsSummary": [
      {
        "subscription": {
          "name": "Test1"
        },
        "backlog": 0,
        "messageRateOut": 0,
        "messageThroughputOut": 0,
        "outMessagesTotal": 0,
        "intervalStartTs": "2023-08-17T00:00:00.000Z",
        "intervalEndTs": "2023-08-18T00:00:00.000Z",
        "deadLetterBacklog": null
      },
      {
        "subscription": {
          "name": "Test2"
        },
        "backlog": 0,
        "messageRateOut": 0,
        "messageThroughputOut": 0,
        "outMessagesTotal": 0,
        "intervalStartTs": "2023-08-17T00:00:00.000Z",
        "intervalEndTs": "2023-08-18T00:00:00.000Z",
        "deadLetterBacklog": null
      },
      {
        "subscription": {
          "name": "Test3"
        },
        "backlog": 0,
        "messageRateOut": 0,
        "messageThroughputOut": 0,
        "outMessagesTotal": 0,
        "intervalStartTs": "2023-08-17T00:00:00.000Z",
        "intervalEndTs": "2023-08-18T00:00:00.000Z",
        "deadLetterBacklog": null
      }
    ]
  }
}

```

