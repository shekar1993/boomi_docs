# Metrics

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-0e0f3adb-2fcb-4af5-bbd1-aee58d2e713f"/>
</head>


API Management Metrics services collect the metadata of API calls through the API Gateway or the Web Services Server and allows you to retrieve the data using a GraphQL client. Metrics services return information such as the count of calls per API, successful API requests, popular authentication types for APIs, and the quota status of a subscribed API.

Boomi retains metrics data for 540 days. If you require usage for a longer period of time, back up data as necessary.


If you have multi-node Gateways, Molecules, or Clouds, you can add the following to enable the [Working Data Local Storage Directory](/docs/Atomsphere/Integration/Integration%20management/t-atm-Enabling_local_storage_for_a_Molecule_or_Atom_Cloud_8861cfb6-79fa-46bc-a957-a4a3cfa45d5f.md): `com.boomi.container.localDir`

:::note 

If the working data local storage directory is not configured, events are reported in `<base_dir>/<localhost_id>/events`.

:::

:::note

Ensure that there is sufficient disk space available. Metrics requires approximately 1 KB per request, per day. Files roll over each day and removed when not needed.

:::

## Endpoint

``` 
https://api.boomi.com/graphql
```

## Metrics Data Locations 
Metrics data locations:
-   For Atoms, the metrics data is written to the `<installation>/events` directory.
-   For Gateways, Molecules, and Clouds, the metrics data is written to the `<local dir>/events` directory.

  :::note
  You may need to verify that your network security settings are not blocking metrics reporting. Atoms and Gateways hit the following endpoints for metrics reporting:
    - `wss://atom.boomi.com/service/runtime-events/receiver`
    - `https://atom.boomi.com/service/runtime-events/receiver/1/process`
  :::

## Configure Metrics Data
All of the following properties can be configured on the Gateway or the Atom [container property](/docs/Atomsphere/API%20Management/Topics/api-Container_properties_7db1ee5a-03b9-4d07-931b-4e863e7cc6de.md).

### Maximum File Size

You can configure the maximum file size for metrics events files. The default is 1 GB (1073741824 bytes) by default for Gateways and 4MB (4194304 bytes) for Atoms. The value of this property must be defined in bytes.

-   For Gateways, configure the `com.boomi.container.apigateway.metrics.maxFileSize` container property.

-   For Atoms, configure the `com.boomi.container.sharedServer.http.metrics.maxFileSize` container property.

### Event Rollover Time
You can configure the event rollover time for Gateways and Atoms. By default, this is set at six hours but can be changed to 24 hours or less.

-   For Gateways, configure the `com.boomi.container.apigateway.metrics.maxFileAge` container property.
-   For Atoms, configure the `com.boomi.container.sharedServer.http.metrics.maxFileAge` container property.

### 404 Errors
You can configure if 404 errors are captured for metrics data. By default, this is set to false.

-   For Gateways, set the `com.boomi.container.apigateway.metrics.reportNotFound` container property to true.
-   For Atoms, set the `com.boomi.container.sharedServer.http.metrics.reportNotFound` container property to true.

### Event File Flushing
You can configure when an event file is flushed to disk. This is useful for low-traffic Atoms or Gateways that are running on Windows. The default is 0, which means that flushing will be delegated to the OS. For example, if you set this property to 10, it would take a maximum of 10 events before the events are flushed to the disk and can then be reported and viewed in the metrics dashboard.
- For Gateways, configure the `com.boomi.container.apigateway.metrics.flushAfterEvents` container property.
- For Atoms, configure the `com.boomi.container.sharedServer.http.metrics.flushAfterEvents` container property.


## Available Data

|Field|Type|Description|
|-----|----|-----------|
|requestTs|*DateTime*|The submission date and time of the request. Uses UTC timezone \("Z"\).|
|authType|*DeployedApiCallAuthType*|The configured authentication type for the API deployment.|
|atom\{id\}|*ID*|The ID of the Atom where the processed API call occurred.|
|atom\{name\}|*String*|Name of the Atom.|
|atom\{status\}|*AtomStatus*|Status of the Atom.|
|atom\{webserviceType\}|*HTTPServerWebserviceType*|User management functionality level available on the Atom.|
|gateway\{id\}|*ID*|The ID of the Gateway of the processed API call.|
|gateway\{defaultApiExecutionSettings\}|*DeployedApiExecutionSettings*|The default API execution settings of the Gateway.|
|gateway\{deleted\}|*Boolean*|The status of the Gateway.|
|gateway\{environments\}|*Environment*|A list of Environment objects attached to the Gateway.|
|gateway\{forwardProxy\}|*ForwardProxy*|The forward proxy configuration of the Gateway.|
|gateway\{name\}|*String*|The name of the Gateway.|
|account \{id\}|*ID*|The ID of the Platform account that processed the API call.|
|deployedApi\{id\}|*ID*|The ID of the deployed API for a specific environment.|
|deployedApi\{authSource\}|*AuthSource*|The authentication source of the deployed API.|
|deployedApi\{component\}|*Component*|The component information of the deployed API.|
|deployedApi\{customPolicies\}|*DeployedApiPolicy*|The custom policies configuration of the deployed API.|
|deployedApi\{endpoints\}|*DeployedApiEndpoint*|The endpoint information of the deployed API.|
|deployedApi\{environment\}|*Environment*|The environment information of the deployed API.|
|deployedApi\{executionSettings\}|*DeployedApiExecutionSettings*|The execution Settings of the deployed API.|
|deployedApi\{keylessPlan\}|*DeployedApiPlan*|The keyless Plan information of the deployed API.|
|deployedApi\{metadata\}|*ApiComponentMetadata*|The metadata of the deployed API.|
|deployedApi\{plans\}|*DeployedApiPlan*|The Plans associated with the deployed API.|
|deployedApi\{requiredRoles\}|*AuthSourceRole*|The Required Roles information of the deployed API.|
|deployedApi\{subscriptions\}|*DeployedApiSubscription*|The subscriptions of the deployed API.|
|errorMessage|*String*|The error message that is received from backend execution. This field is available in detail only.|
|authType|*DeployedApiCallAuthType*|The authentication type.|
|environment\{id\}|*String*|The ID of the environment to which the API is deployed to. This field is available only in summary.|
|execution\{id\}|*ID*|The backend process ID. Detail only.|
|status|*Int*|The HTTP response code of the API response.|
|method|*HttpMethod*|The HTTP method contained in the request.|
|requestUrl|*String*|The HTTP path contained in the request.|
|client\{remoteAddress\}|*String*|The client’s IP address as reported to the server.|
|client\{userAgent\}|*String*|The value of the user-agent HTTP request header.|
|client\{subscription\}|*DeployedApiSubscription*|The deployed API Subscription details.|
|user\{username\}|*DeployedApiUser/String*|The authenticated user. You can option out to not collect the user name.|
|transactionId|*ID*|The unique transaction ID for the request. Detail only.|
|process\{id\}|*ID*|The ID of the Platform process. Detail only.|
|quotaReset|*DateTime*|The timestamp when the quota resets. Detail only.|
|rateReset|*DateTime*|The timestamp when the rate resets. Detail only.|
|responseDuration|*Int*|The total response time to process the request \(API plus Gateway response time\).|
|backendDuration|*Int*|Time the back end took to process the request.|
|bytesReceived|*Long*|Bytes received by the request.|
|bytesSent|*Long*|Bytes sent by the request.|
|quotaCount|*Long*|The count of requests made by the client since the start of the quota period. Detail only.|
|rateCount|*Long*|The count of requests made by the client since the start of the rate period. Detail only.|
|requestTsIntervalStart|*DateTime*|The date and time of the start of the interval. Summary only.|
|requestTsIntervalEnd|*DateTime*|The date and time of the end of the interval. Summary only.|
|requestTsMax|*DateTime*|The maximum date and time of any API request in the interval. Summary only.|
|requestTsMin|*DateTime*|The minimum date and time of any API request in the interval. Summary only.|
|requestCount|*Long*|The count of API requests. Summary only.|

## Query Syntax 

-   `deployedApiCallDetail`: This query returns API request details that match the filters in the input object. 1000 results are returned by default and this is not configurable. If additional records exist, it populates the `nextRequestTs` and `nextTransactionID` fields in the return object.

    ``` 
    deployedApiCallDetail(input: DeployedApiCallDetailInput!): DeployedApiCallDetail!
    ```

-   `deployedApiCallSummary`: Returns grouped and aggregated API request info as specified by the request fields and applies the filters specified in the input object. You can optionally provide a field named `TimeInterval` for grouping data. `TimeInterval` should be given in a way such that the records can be grouped into 1000 or less groups.

    ``` 
    deployedApiCallSummary(input: DeployedApiCallSummaryInput!): DeployedApiCallSummary!
    ```


## Querying API Metrics Data 

Query input syntax

``` json

input DeployedApiCallDetailInput {
"Filters the records retrieved to only those on or after this timestamp."
requestTsStart: DateTime!
"Filters the records retrieved to only those before this timestamp."
requestTsEnd: DateTime!
"""
Filters the records retrieved using the Filter Query Language. The fields available in the filter expression
are those listed in the `DeployedApiCallDetailData` type.
"""
filter: Filter
}


input TimeInterval {
 "Supported units: SECONDS, MINUTES, HOURS, DAYS, MONTHS and YEARS." 
unit: TimeUnit!
"Interval duration. If using months or years for the unit, the amount can only be 1."
amount: Int!
"Supported timezones: https://docs.oracle.com/javase/8/docs/api/java/time/ZoneId.html. Default is UTC."
timezone: String
}

input DeployedApiCallSummaryInput {
"Filters the records retrieved to only those on or after this timestamp."
requestTsStart: DateTime!
"Filters the records retrieved to only those before this timestamp."
requestTsEnd: DateTime!
"""
Filters the records retrieved using the Filter Query Language. The fields available in the filter expression
are those listed in the `DeployedApiCallSummaryData` type.
"""
filter: Filter
requestTsInterval: TimeInterval
}
```

Return fields syntax

``` json

type DeployedApiCallDetailData {
  """ The date and time the request was submitted. Uses UTC timezone ("Z")."""
  requestTs: DateTime!

  """ The unique request id"""
  transactionId: ID!

  """ The Api deployed to a specific environment and the various information associated with it
  """
  deployedApi: DeployedApi

  """ The Account that owns the Deployed Api"""
  account: Account!

  """ The Gateway details (Name, Gateway Status, Environment, Api Execution Settings and Forward proxy)
  """
  gateway: Gateway

  """ The Atom details (Name, Auth type, Webservice type, Status etc.,)"""
  atom: Atom

  """ The Http response code of the Api response"""
  status: Int!

  """ The details of the client that made the Api request (remoteAddress, userAgent, subscription)
  """
  client: DeployedApiClient!

  """ The User that executed the Api request"""
  user: DeployedApiUser

  """
  The Deployed Api's Authentication Type. (The authentication type that the account uses when communicating with 
  the Atom, Molecule, Atom Cloud Or Gateway.)
  """
  authType: DeployedApiCallAuthType!

  """ The fully qualified absolute Url"""
  requestUrl: String

  """ The Http method of the Api request"""
  method: HttpMethod

  """ The number of milliseconds from the time the request was received until the response was sent
  """
  responseDuration: Int!

  """ The number of  bytes received from request body"""
  bytesReceived: Long!

  """ The number of  bytes sent from response"""
  bytesSent: Long!

  """ The count of incoming requests for the quota period"""
  quotaCount: Long

  """ The date and time that the quota will reset"""
  quotaReset: DateTime

  """ The count of incoming requests for the rate limit period"""
  rateCount: Long

  """ The date and time that the rate limit will reset"""
  rateReset: DateTime

  """
  (For Api Gateway Requests) The number of milliseconds from the time the Atom received the request from the
  Api Gateway until the Atom sent the response back to the Api Gateway
  """
  backendDuration: Int

  """ The Integration Process that executed as a result of this Api request"""
  process: Process

  """ The Integration Process Execution"""
  execution: Execution
}
  enum ApiCallMetricsErrorCode {
    ROW_LIMIT_EXCEEDED
    TIMEZONE_INVALID_SYNTAX
    ROW_LIMIT_INVALID
}

  enum QueryErrorCode {
    INVALID_TIME_RANGE
    EXCEEDED_TIME_BUCKET_LIMIT
}


type DeployedApiCallSummaryData {
  """ The date and time of the start of the interval"""
  requestTsIntervalStart: DateTime!

  """ The date and time of the end of the interval"""
  requestTsIntervalEnd: DateTime!

  """ The maximum date and time of any Api request in the interval"""
  requestTsMax: DateTime!

  """ The minimum date and time of any Api request in the interval"""
  requestTsMin: DateTime!

  """ The Api deployed to a specific environment and the various information associated with it
  """
  deployedApi: DeployedApi

  """ The Account that owns the Deployed Api"""
  account: Account!

  """ The Gateway details (Name, Gateway Status, Environment, Api Execution Settings and Forward proxy)
  """
  gateway: Gateway

  """ The Atom details (Name, Auth type, Webservice type, Status etc.,)"""
  atom: Atom

  """ The Http response code of the Api response"""
  status: Int!

  """ The details of the client that made the Api request (remoteAddress, userAgent, subscription)
  """
  client: DeployedApiClient!

  """ The User that executed the Api request"""
  user: DeployedApiUser

  """
  The Deployed Api's Authentication Type. (The authentication type that the account uses when communicating with
  the Atom, Molecule, Atom Cloud Or Gateway.)
  """
  authType: DeployedApiCallAuthType!

  """ The fully qualified absolute Url"""
  requestUrl: String

  """ The Http method of the Api request"""
  method: HttpMethod

  """
  The number of milliseconds from the time the request was received until the response was sent 
  (summarized by Metric field - count, total, squares, max, min, mean, standard deviation etc)
  """
  responseDuration: Metric

  """
  (For Api Gateway Requests) The number of milliseconds from the time the Atom received the request from the
  Api Gateway until the Atom sent the response back to the Api Gateway
  (summarized by Metric field - count, total, squares, max, min, mean, standard deviation etc)
  """
  backendDuration: Metric

  """
  The number of  bytes received from request body
  (summarized by Metric field - count, total, squares, max, min, mean, standard deviation etc)
  """
  bytesReceived: Metric

  """
  The number of  bytes sent from response
  (summarized by Metric field - count, total, squares, max, min, mean, standard deviation etc)
  """
  bytesSent: Metric

  """The count of Api requests"""
  requestCount: Long

  """ The Integration Process that executed as a result of this Api request"""
  process: Process
  statusCategory: StatusCategory

  """Environment Id"""
  environment: Environment
}

```

## Query Examples 

**Endpoint**

``` 
https://api.boomi.com/graphql
```

**Sample `deployedApiCallDetail` Query**

``` 
query{
  deployedApiCallDetail(input: {
    requestTsStart: "2022-03-11"
    requestTsEnd: "2022-03-25"
    filter: ""
  }){
    data {
      requestTs
      atom { 
      	id
      	name}
      gateway { 
        id 
      	name}
      account { 
        id
        			}
      deployedApi { id }
      authType
      status
      method
      requestUrl
      client { remoteAddress }
      client { userAgent }
      client { subscription { apiKeyId} }
      user { username }
      execution { id }
      transactionId
      process { id }
      quotaReset
      rateReset
      bytesReceived
      responseDuration
      backendDuration
      bytesSent
      quotaCount
      rateCount
    } 
    nextRequestTs
    nextTransactionId
  }
}


```

**Sample `deployedApiCallSummary` Query**

``` 
query{
  deployedApiCallSummary(
  input: 
    {
    requestTsStart: "2021-10-11"
    requestTsEnd: "2021-10-20"

    filter: "atom.id = '8bd4bc4b-XXXX-XXXX-XXXX-79f2f9f57ade' and method = 'GET'" 
    }
  )
  {
    data {
      status
      responseDuration {mean, count}
      account {id}
    } 
  }
}

Sample Response:
{
  "data": {
    "deployedApiCallSummary": {
      "data": [
        {
          "status": 200,
          "responseDuration": {
            "mean": 5.803271769650674,
            "count": 286695
          },
          "account": {
            "id": "apim20testing-XXXXXX"
          }
        },
        {
          "status": 499,
          "responseDuration": {
            "mean": 128.66666666666666,
            "count": 3
          },
          "account": {
            "id": "apim20testing-XXXXXX"
          }
        }
      ]
    }
  }
}

```

Sample `deployedApiCallSummary` query

``` 
query{
  deployedApiCallSummary(input: {
    requestTsStart: "2023-01-01"
    requestTsEnd: "2023-05-15"
    requestTsInterval: {amount:1 , unit: MONTHS}
    filter: "environment.id != '1f6c9e42-xxxo-44e8-89bc-263d4519e8e5'"
  }){
    data {
      status
      requestCount
      environment{id}
		}
  }
}
```

## Using the filter attribute 

You cannot filter the following fields from the platform:

-   Gateway
-   Atom
-   deployedApi

To filter by API Key, use:

``` 
filter: "client.subscription.apiKeyId = 'f1xxxx77-fxxc-4e19-b144-6efxxxxxxxf6e' "
```
To filter using the `like` operator, use:

``` 
filter: "requestUrl like '%8077/wS%'"
```
:::note
The `like` operator does not work for date and can filter for `string` values only. Use >, < , and = to search.

:::

## Altair script 

Programmatic access to GraphQL APIs is available with any application, typically through a GraphQL client library in the language of choice. You can use Altair, a user interface tool, to accomplish this. You can use the following script as an option to access GraphQL APIs quickly. See [Altair Script](/docs/Atomsphere/API%20Management/Topics/api-GraphQL_API_Management_APIs_18f1a55a-b3d7-4b9e-ab0a-162fc4a67686.md).