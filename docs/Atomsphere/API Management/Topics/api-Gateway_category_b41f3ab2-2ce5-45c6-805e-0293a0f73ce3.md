# Gateway category

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-b41f3ab2-2ce5-45c6-805e-0293a0f73ce3"/>
</head>


The return and update details of API Gateways.

## Supported operations 

The Gateway category is supported in the following operations:

| Operation     | QUERY        | MUTATION     |
|---------------|--------------|--------------|
| All Gateways  | Supported ✅ | Not supported ✗ |
| Gateway by ID | Supported ✅ | Not supported ✗ |
| gatewayUpdate | Not supported ✗ | Supported ✅  |


## Query syntax 

#### All Gateways

```
{gateways {Gateway}}
```

#### Gateway by ID

```
{gateway: gateway(id: ID!): Gateway}
```

## Mutation syntax 

#### gatewayUpdate

``` 
gatewayUpdate(gatewayInput: GatewayInput!):Gateway!
```

## Input and return fields syntax 

#### Mutation input syntax

``` 
input GatewayInput {
    id: ID!
    defaultApiExecutionSettings: DeployedApiExecutionSettingsInput
    forwardProxy: ForwardProxyInput
}
```

```
input DeployedApiExecutionSettingsInput {
    concurrency: Integer
    retries: Integer 
    retryCases: [DeployedApiRetryCase!] 
    connectTimeout: Long 
    executionTimeout: Long 
    subscriptionCacheSize: Long
}
```

#### Return fields syntax

``` 
type Gateway {
    id: ID!
    name: String!
    deleted: Boolean! 
    environments: [Environment] 
    defaultApiExecutionSettings: DeployedApiExecutionSettings 
    forwardProxy: ForwardProxy
    externalUrl: String
    externalHealthCheckPath: String
    account: Account
    gatewayType: GatewayType
    version: Long
}
```

For more information on ForwardProxy, see [Forward Proxy on Gateway category](/docs/Atomsphere/API%20Management/Topics/api-Forward_Proxy_on_Gateway_category_c35dbfe1-3a88-41f3-a555-e47d27da75ed.md).

|Field|Type|Description|
|-----|----|-----------|
|name|*string*|The name of the API Gateway.|
|id|*string*|The ID of the API Gateway.|
|deleted|*Boolean*|Returns a value of true if the API Gateway was deleted. Returns a value of false if the API Gateway is not deleted.|
|defaultApiExecutionSettings|*DeployedApiExecutionSettings*|Run settings for the API Gateway that control the load and run characteristics across all APIs on the API Gateway.|
|environments|*environment*|Environments attached to the API Gateway.|
|forwardProxy|*ForwardProxy*|Forward proxy server settings for the API Gateway.|
|externalUrl|*string*|The URL that you use to access your API Gateway from outside your company's firewall.|
|externalHealthCheckPath|*string*|The path that you use to check your Gateway's health.|
|account|*Account*|Account information for the Gateway: ID, name, and status.|
|gatewayType|*GatewayType*|The type of Gateway. This is embedded for all Gravitee Gateways.|
|version|*Long*|The internal version of the Gateway.|

``` 
type DeployedApiExecutionSettings {
    concurrency: Integer!
    retries: Integer!
    retryCases: [DeployedApiRetryCase!]
    connectTimeout: Long!
    executionTimeout: Long!
    subscriptionCacheSize: Long!
}
```

| Field             | Type                   | Description                                                                                                                                                                                                                                                                                                                                                                        |
| ----------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| concurrency       | *integer*                | A value between 1 and 10000, with 100 used as the default, that specifies the number of concurrent calls that can be made on a single Atom node associated with the API Gateway. Number of requests processed by configuring concurrency setting is determined by the concurrency setting and the number of processors. For a single node atom, the maximum number of concurrent requests allowed equals the number of CPUs/processors * 2 * concurrency value. For example, if a single node atom has 12 CPUs and concurrency is set to 1 on the Deployed API, the back-end atom will process 24 requests `(12 * 2 * 1)` at any point in time. |
| retries           | *integer*                | A value between 0 and 10, with 1 used as the default, that specifies the number of retries attempted by the API Gateway for a call before ending in an error, as configured in the retryCases value.                                                                                                                                                                             |
| retryCases        | *DeployedApiRetryCase*   | Identifies the retry cases. The default values for retryCases before the May 2021 release are:<br />• `CONNECT_TIMEOUT`<br />• `CONNECTION_DROPPED`<br />• `HOST_NOT_FOUND`<br />• `HOST_ROUTING_ERROR`<br />• `EXECUTION_TIMEOUT`<br />The default values for retry cases after the May 2021 release are:<br />• `CONNECT_TIMEOUT`<br />• `CONNECTION_DROPPED`<br />• `HOST_NOT_FOUND`<br />• `HOST_ROUTING_ERROR`  |
| connectTimeout    | *long*                   | A value between 1 and 600 seconds (10 minutes). The default connection time-out value for API Gateways installed before the May 2021 release is 120 seconds.<br />The default connection timeout value for API Gateways installed after the May 2021 release is 10 seconds.                                                                                                         |
| executionTimeout  | *long*                   | A value between 1 and 315360000 seconds (10 years). The default run time-out for API Gateways installed before the May 2021 release is 315360000 seconds.<br />The default execution time-out for API Gateways installed after the May 2021 release is 120 seconds.  
| subscriptionCacheSize | *long* | The maximum number of entries in a subscription cache per API. Defaults to 1,000 entries (~32KB). Note that this is the maximum size.                                                                                                             |

``` 
enum DeployedApiRetryCase {
    CONNECT_TIMEOUT
    EXECUTION_TIMEOUT
    HOST_ROUTING_ERROR
    HOST_NOT_FOUND
    CONNECTION_DROPPED
}
```

|Field|Description|
|-----|-----------|
|`CONNECT_TIMEOUT`|The Connect Time-out exception is returned when the API Gateway is not able to establish a connection to the Atom or external host within the time as defined in the `connectTimeout` value.|
|`EXECUTION_TIMEOUT`|Returns the Execution Time-out exception when a process runs for more time than the time defined in the `executionTimeout` value.|
|`HOST_ROUTING_ERROR`|Returns the Host Routing Error when the Atom or remote host is not reachable.|
|`HOST_NOT_FOUND`|Returns the Host Not Found exception when the IP address of the Atom or external host could not be determined.|
|`CONNECTION_DROPPED`|Returns the Connection Dropped exception when the connection to the Atom or external host dropped unexpectedly.|
 

``` 
type GatewayErrorCode {
    genericErrorCode: GatewayGenericErrorCode
    apiExecutionSettingsErrorCode: DeployedApiExecutionSettingsErrorCode
    forwardProxyErrorCode: ForwardProxyErrorCode
}
```

``` 
enum GatewayGenericErrorCode {
    GATEWAY_ID_EMPTY
    GATEWAY_NOT_FOUND
    NOTHING_TO_UPDATE
}
```

``` 
enum DeployedApiExecutionSettingsErrorCode {
    CONCURRENCY_INVALID
    RETRIES_INVALID
    EXECUTION_TIMEOUT_INVALID
    CONNECT_TIMEOUT_INVALID
    DEPLOYMENT_NOT_ON_GATEWAY
    SUBSCRIPTION_CACHE_SIZE_INVALID
}
```

| Field                          | Type                                     | Description                                                                                                                                                                              |
|-------------------------------|------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| genericErrorCode               | `GatewayGenericErrorCode`                  | Returns a value of:<br /> • `GATEWAY_ID_EMPTY` <br />• `GATEWAY_NOT_FOUND` <br />• `NOTHING_TO_UPDATE`                                                                                         |
| apiExecutionSettingsErrorCode  | `DeployedApiExecutionSettingsErrorCode`     | Identifies the type of the error associated with the update of the DeployedApiExecutionSettings on the Gateway.                                                                          |
| forwardProxyErrorCode          | `ForwardProxyErrorCode`                     | Identifies the type of error associated with an update of ForwardProxy on the Gateway.                                                                                                  |



``` 
type Account {
    id: ID
    name: String
    status: AccountStatus
}

enum AccountStatus {
    TRIAL
    ACTIVE
    SUSPENDED 
    DELETED 
    UNLIMITED
}
```

|Field|Type|Description|
|-----|----|-----------|
|id|*ID*|ID of the account.|
|name|*String*|Name of the account.|
|status|*AccountStatus*|The status of the account: trial, active, suspended, deleted, or unlimited.|

## GraphQL implementation 

**QUERY operation**

The following example returns a list of API Gateways.

For a GraphQL request, send a request to `https://platform.boomi.com/graphql` with the following `X-Account` header: `accountId`

Request:

``` json
query{
    gateways{      
            id 
            name 
    }    
}
```

JSON response:

``` json
{
    "data": {
        "gateways": [
            {
                "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                "name": "Alpha"
            },
            {
                "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                "name": "Beta"
            }
        ]
    }
}
```

The following example returns the details of a specific API Gateway.

For a GraphQL request, send a request to `https://platform.boomi.com/graphql` with the following `X-Account` header: `accountId`

Request:

``` json
query {
    gateway(id:"<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>") {
        id
        name
        deleted
        defaultApiExecutionSettings {
            concurrency
            retries
            connectTimeout
            executionTimeout
            retryCases
            subscriptionCacheSize
        }
    }
}
```

JSON response:

``` json
{
    "data": {
        "gateway": {
            "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
            "name": "Alpha",
            "deleted": false,
            "defaultApiExecutionSettings": {
                "concurrency": 100,
                "retries": 1,
                "connectTimeout": 120,
                "executionTimeout": 315360000,
                "retryCases": [
                    "CONNECT_TIMEOUT",
                    "EXECUTION_TIMEOUT",
                    "HOST_ROUTING_ERROR",
                    "HOST_NOT_FOUND",
                    "CONNECTION_DROPPED"
                ]
                "subscriptionCacheSize": 1000
            }
        }
    }
}

```

**gatewayUpdate operation**

The following example updates the execution settings on an API Gateway.

For a GraphQL request, send a request to `https://platform.boomi.com/graphql` with the following `X-Account` header: `accountId`

Request:

``` json
mutation gatewayUpdate($gatewayInput:GatewayInput!) {
    gatewayUpdate(
        gatewayInput:$gatewayInput
    )
    {
        id
        name
        deleted
        defaultApiExecutionSettings {
            concurrency
            retries
            retryCases
            connectTimeout
            executionTimeout
        }
    }
}
{
    "gatewayInput": {
        "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
        "defaultApiExecutionSettings": {
            "concurrency": 50,
            "connectTimeout": 10,
            "executionTimeout": 240,
            "retries": 2,
            "retryCases": ["CONNECT_TIMEOUT"]
        }
    }
}
```

JSON response:

``` json
{
    "data": {
        "gatewayUpdate": {
            "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
            "name": "Alpha",
            "deleted": false,
            "defaultApiExecutionSettings": {
                "concurrency": 50,
                "retries": 2,
                "retryCases": [
                    "CONNECT_TIMEOUT"
                ],
                "connectTimeout": 10,
                "executionTimeout": 240
            }
        }
    }
}
```

## Audit log usage 

``` 
{
  "QueryFilter" :
    {
      "expression" : {
          "operator" : "and",
          "nestedExpression" : [
            {
              "argument" : ["admin@boomi.com"],
              "operator" : "EQUALS",
              "property" : "userId"
            },
            {
              "argument" : ["api-gateway_settings"],
              "operator" : "EQUALS",
              "property" : "type"
            },          
            {
              "argument" : ["2021-03-28T00:00:00Z","2021-03-29T23:59:59Z"],
              "operator":"BETWEEN",
              "property":"date"
            }
          ]
        }
    }
}
```
