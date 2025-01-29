# Boomi Event Streams API

<head>
  <meta name="guidename" content="Event Streams"/>
  <meta name="context" content="GUID-f16d80b2-0843-4b1c-a651-fe31237b4721"/>
</head>

The API returns information for a specific environment or account.

Currently, you can only use the API for Administration functions like Provisions, Querying metrics, Create/Update/Delete Subscriptions and Topics. The API cannot produce or consume messages yet.

For details on how to access these GraphQL queries and mutations, refer to the [GraphQL API Management APIs](/docs/Atomsphere/API%20Management/Topics/api-GraphQL_API_Management_APIs_18f1a55a-b3d7-4b9e-ab0a-162fc4a67686.md).

## Supported categories

|Operation|QUERY|MUTATION|
|---------|-----|--------|
|[EventStreamsTopic](es-Admin_API_Topics_fdca7148-91b7-412d-89c0-675444ba702d.md)|✅ Supported|✅ Supported|
|[EventStreamsSubscription](es-Admin_API_Subscriptions_b6b552a5-173c-455a-9ab5-388f7088065c.md)|✅ Supported|✅ Supported|
|[EventStreamsMessageManagement](es-Event_streams_message_management.md)|✅ Supported|✅ Supported|
|[EventStreamsTopicMetrics](es-Admin_API_Metrics_77bcd2a2-91fe-4ee4-9560-9bcddfba2e3f.md)|✅ Supported|Not Supported |
|[EventStreamsSubscriptionMetrics](es-Admin_API_Metrics_77bcd2a2-91fe-4ee4-9560-9bcddfba2e3f.md)|✅ Supported|Not Supported |
|[Environment](es-Admin_API_Environment_d6142ffe-178d-4214-b31a-16061a5c3989.md)|✅ Supported|Not Supported |
|[Regions](es-Admin_API_Environment_d6142ffe-178d-4214-b31a-16061a5c3989.md)| ✅ Supported|Not Supported |

## Event Streams Error Codes

|Field|Description|
|-----|-----------|
|`TENANT\_NOT\_FOUND`|The tenant does not exist.|
|`TOPIC\_NOT\_FOUND`|The topic does not exist.|
|`DATE\_PARSE\_ERROR`|Unable to parse date.|
|`TOPIC\_PROPERTIES\_NOT\_FOUND`|Topic properties do not exist.|
|`NOT\_PROVISIONED`|The specified account is not provisioned.|
|`ACCOUNT\_NOT\_FOUND`|The specified account does not exist.|
|`SUBSCRIPTION\_NOT\_FOUND`|The subscription does not exist.|
|`ENVIRONMENT\_NOT\_FOUND`|The environment does not exist.|
|`INVALID\_NAME`|Invalid name.|
|`INVALID\_DESCRIPTION`|Invalid description, only 500 characters allowed.|
|`TOPIC\_ALREADY\_EXISTS`|The specified topic already exists.|
|`SUBSCRIPTION\_ALREADY\_EXISTS`|The The specified subscription already exists.|

Event Streams Query Error Codes

|Field|Description|
|-----|-----------|
|`ROW\_LIMIT\_EXCEEDED`|The Row Limit Exceeded exception is returned when the row-limit of \{0\} was exceeded for the query.|
|`INVALID\_TIME\_RANGE`|The Invalid Time Range exception is returned when the requestTSend \{1\} value is not greater than the requestTStart \{0\} value.|
|`EXCEEDED\_TIME\_BUCKET\_LIMIT`|The Exceeded Time Bucket Limit is returned when the calculated number of time buckets, \{0\}, is greater than the maximum allowed number of time buckets, \{1\}.|

