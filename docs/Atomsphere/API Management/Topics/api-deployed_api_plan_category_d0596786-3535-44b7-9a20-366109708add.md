# Deployed API Plan category 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-d0596786-3535-44b7-9a20-366109708add"/>
</head>


The Deployed API Plan category allows you to create, delete, and update plans.

## Supported operations 

The Deployed API Plan category is supported in the following operations:

| Operation                 | QUERY      | MUTATION     |
|---------------------------|------------|--------------|
| deployedApiPlans          | ✅ Supported | Not supported |
|deployedApiPlan|✅ Supported | Not supported |
| deployedApiPlanCreate     | Not supported | ✅ Supported    |
| deployedApiPlanDelete     | Not supported | ✅ Supported    |
| deployedApiPlanUpdate  | Not supported |  ✅ Supported    |

## Query syntax 

``` 
deployedApiPlans(filter: DeployedApiPlanFilter): [DeployedApiPlan!]

```
Query input syntax

```
input DeployedApiPlanFilter
{
gatewayId: ID
}
```
Query plans by Plan ID
```
 deployedApiPlan(id: ID!): DeployedApiPlan!
 ```

## Mutation syntax

#### Create plan mutation

``` 
deployedApiPlanCreate(createPlan: DeployedApiPlanCreateInput!): DeployedApiPlan!
```

#### Delete plan mutation

The `deployedApiPlanDelete` mutation returns the plan's GUID if the deletion is successful. If the plan is in use, a message listing the deployments that are currently using the plan is returned.

``` 
 deployedApiPlanDelete(id: ID!): ID!
```

#### Update plan mutation

```
deployedApiPlanUpdate(deployedApiPlan: DeployedApiPlanUpdateInput!): DeployedApiPlan!
```

## Input and return fields syntax 

#### Mutation input syntax

``` 
 input DeployedApiPlanCreateInput {
        name: String!
       description: String
      maxMessageSize: Long
      rateLimit: Long
      rateLimitPeriod: DeployedApiPlanPeriod
      quotaLimit: Long
      quotaLimitPeriod: DeployedApiPlanPeriod
 }

enum DeployedApiPlanPeriod {
    SECOND
    MIN 
    HOUR 
    DAY 
    WEEK 
    MONTH 
}

enum DeployedApiPlanStatus { 
  ENABLED 
  DISABLED 
  DELETED 
}
```
```
input DeployedApiPlanUpdateInput {
    id: ID!
    name: String
    description: String
    maxMessageSize: Long
    rateLimit: Long
    rateLimitPeriod: DeployedApiPlanPeriod
    quotaLimit: Long
    quotaLimitPeriod: DeployedApiPlanPeriod
    status: DeployedApiPlanStatusUpdate
}
```

```
enum DeployedApiPlanStatusUpdate {
    ENABLED 
    DISABLED
}
```

#### Return fields syntax

``` 
 type DeployedApiPlan {
    id: ID!
    name: String
    description: String
    status: DeployedApiPlanStatus
    maxMessageSize: Long
    rateLimit: Long
    rateLimitPeriod: DeployedApiPlanPeriod
    quotaLimit: Long
    quotaLimitPeriod: DeployedApiPlanPeriod
    quotaLimitTimezone: String
    applicationCount: Int!
    apiMappings: [DeployedApiPlanMapping!]
}

Error code:
enum DeployedApiPlansErrorCode {
    PLAN_NAME_NOT_EMPTY
    PLAN_NAME_DUPLICATE
    PLANE_NAME_LONG
    DESCRIPTION_LONG
    MESSAGE_SIZE_MIN
    RATE_LIMIT_MIN
    QUOTA_LIMIT_MIN
    MESSAGE_SIZE_MAX
    INVALID_RATE_PERIOD
    INVALID_QUOTA_PERIOD
    PLAN_ALREADY_DELETED
    PLANS_WITH_ACTIVE_SUBSCRIPTIONS
    PLANS_WITH_ACTIVE_DEPLOYMENTS
}
```

|Field|Type|Description|
|-----|----|-----------|
|`id`|*String*|Returns the plan's GUID. Required for the `deployedApiPlanUpdate` operation.|
|`name`|*String*|Required. The name of the plan. If not provided in the `deployedApiPlanUpdate` operation, the current value is retained.|
|`description`|*String*|A description of the plan. If not provided in the `deployedApiPlanUpdate` operation, the current value is retained.|
|`status`|*DeployedApiPlanStatus*|`ENABLED`, `DELETED`, and `DISABLED`. `DISABLED` plans can’t be added to any deployment and no new subscriptions can be created for existing deployments that use the plan. If not provided in the `deployedApiPlanUpdate` operation, the current value is retained.|
|`maxMessageSize`|*Long*|Restricts the size of incoming API requests to the number of kilobytes (KB) specified. Omitting the field, or setting it to null allows a request of any size. Cannot be larger than 1000000000000. If not provided in the `deployedApiPlanUpdate` operation, the current value is retained.|
|`rateLimit`|*Long*|Rate limit is per node and restricts the number of incoming requests for a specified time period per Gateway. For a 2 node gateway, if you set the rate limit as 5, the actual rate limit could be up to `2*5 = 10`. If this field is omitted or set to null, the rate limit is unlimited. Negative numbers are not allowed. If `rateLimit` is set, `rateLimitPeriod` is required, unless the `rateLimit` is set to 0 or null to allow an unlimited rate. If not provided in the `deployedApiPlanUpdate` operation, the current value is retained.|
|`rateLimitPeriod`|*Enum DeployedApiPlanPeriod*|Allowed values are `SECOND`, `MINUTE`, `HOUR`. Required if `rateLimit` is set to a non-zero value.|
|`quotaLimit`|*Long*|Restricts the number of incoming requests for a specified time period per environment. Omitting the field or setting it to null allows an unlimited number of calls up to the limit set on the environment when it is configured. If the `quotaLimit` is set, then `quotaLimitPeriod` is required, unless the `quotaLimit` is set to zero or null to allow for an unlimited quota. If not provided in the `deployedApiPlanUpdate` operation, the current value is retained.|
|`quotaLimitPeriod`|*Enum DeployedApiPlanPeriod*|Allowed values are `DAY`, `WEEK`, `MONTH`. Required if `quotaLimit` is set to a non-zero value.|
|`status`|*DeployedApiPlanStatusUpdate*|The status of the plan. Allowed values are `ENABLED` or `DISABLED`. If not provided, the current value is retained.|
|`quotaLimitTimezone`|*String*|Timezone considered for quota evaluation. Defaults to UTC.|
|`applicationCount`|*Integer*|Number of active applications with active subscriptions using this plan.|
|`apiMappings`|*DeployedApiPlanMapping*|Details of deployments using the plan.|

## GraphQL implementation 

For a GraphQL request, send a request to https://platform.boomi.com/graphql with the following `X-Account` header: ``

#### Create plan request:

``` 
mutation {
  deployedApiPlanCreate(createPlan: DeployedApiPlanCreateInput!) {

          deployedApiPlanCreate(
                createPlan:$createPlan )
    id
    name
    description
    status
    maxMessageSize
    rateLimit
    rateLimitPeriod
    quotaLimit
    quotaLimitPeriod
    quotaLimitTimezone
    applicationCount

  }
}


{
    "createPlan": {
        "name”: "try",      
     “maxMessageSize”: 1000000000000,    
      “rateLimit”: 900,     
      “rateLimitPeriod”: HOUR,     
      “quotaLimit”: 90,     
     “quotaLimitPeriod”: DAY
        }
}
```

For a JSON response, send the request with the following HTTP header:

`Accept: application/json`

JSON response:

``` 
  "data": {
    "deployedApiPlanCreate": {
      "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx>",
      "name": "try",
      "description": null,
      "status": "ENABLED",
      "maxMessageSize": 1000000000000,
      "rateLimit": 0,
      "rateLimitPeriod": "SECOND",
      "quotaLimit": 90,
      "quotaLimitPeriod": "DAY",
      "quotaLimitTimezone": "UTC",
      "applicationCount": 0
    }
  }
```

#### Delete plan request

``` 
mutation {
  deployedApiPlanDelete(id: "dc522a09-1901-4725-92f9-3a16a2702077")
}
```

JSON response:

``` 
{
  "data": {
    "deployedApiPlanDelete": "dc522a09-1901-4725-92f9-3a16a2702077"
  }
}
```
#### deployedApiPlanUpdate operation

JSON request:

```
mutation deployedApiPlanUpdate($deployedApiPlan: DeployedApiPlanUpdateInput!) {
    deployedApiPlanUpdate(deployedApiPlan: $deployedApiPlan) {
        id 
        name
        description
        applicationCount
        rateLimit
        rateLimitPeriod
        quotaLimit
        quotaLimitPeriod
        quotaLimitTimezone
        maxMessageSize
    }
}

{
    "deployedApiPlan": {
        "id": "0b2effbe-d05b-4f4c-9b86-75d489b53ec6",
        "rateLimit": 20,
        "rateLimitPeriod": "HOUR"
    }
}
```
#### Query operation request

``` 
query {
  deployedApiPlans {
    id
    name
    description
    maxMessageSize
    rateLimit
    rateLimitPeriod
    quotaLimit
    quotaLimitPeriod
    quotaLimitTimezone
    status
    applicationCount
    apiMappings {
      id
      apis {
        id
        component {
          id
          name
        }
      }
    }
  }
}
```

#### Query operation sample response

``` 

{
  "data": {
    "deployedApiPlans": [
      {
        "id": "8ec52dc4-8def-432a-be68-85bfa4541a02",
        "name": "Gold",
        "description": "",
        "maxMessageSize": 0,
        "rateLimit": 10000,
        "rateLimitPeriod": "MIN",
        "quotaLimit": 0,
        "quotaLimitPeriod": "DAY",
        "quotaLimitTimezone": "UTC",
        "status": "ENABLED",
        "applicationCount": 0,
        "apiMappings": [
          {
            "id": "96ff283c-d1b8-4433-b7f9-2f9f2006e6c3",
            "apis": [
              {
                "id": "204bd9a4-b38a-40c8-b983-89fbb8bea5f9",
                "component": {
                  "id": "4b8b823d-50f5-49d9-9f9a-8362b683f5c5",
                  "name": "Today's Date"
                }
              }
            ]
          },
          {
            "id": "eeed2ea6-e32a-4965-b7eb-763f9b3095b8",
            "apis": [
              {
                "id": "75653faa-abf7-48ac-9521-cde26080f8f4",
                "component": {
                  "id": "3df729bf-ce3a-4650-8627-7e6ff4c5536e",
                  "name": "Hello_World"
                }
              }
            ]
          }
        ]
      },
      {
        "id": "26541c29-6a54-4bb5-b7ab-bbf434d15bc1",
        "name": "Silver",
        "description": "",
        "maxMessageSize": 100,
        "rateLimit": 100,
        "rateLimitPeriod": "MIN",
        "quotaLimit": 2000,
        "quotaLimitPeriod": "MONTH",
        "quotaLimitTimezone": "UTC",
        "status": "ENABLED",
        "applicationCount": 1,
        "apiMappings": [
          {
            "id": "a3c3ae39-4f8c-4d58-911d-2fbca1f26b09",
            "apis": [
              {
                "id": "204bd9a4-b38a-40c8-b983-89fbb8bea5f9",
                "component": {
                  "id": "4b8b823d-50f5-49d9-9f9a-8362b683f5c5",
                  "name": "Today's Date"
                }
              }
            ]
          }
        ]
      }
    ]
  }
}
```
## Filtering

Sample request to filter by Gateway ID:

```
query {
    deployedApiPlans(filter: {
        gatewayId: "cb8e20df-0135-44a3-aa32-1d3535203e04"
    }) {
            id
            name
            status
            applicationCount
        }
}


```

## Audit log usage 

``` 
{
  "QueryFilter" :
    {
      "expression" : 
        {
          "operator" : "and",
          "nestedExpression" : [
            {
              "argument" : ["api-plan"],
              "operator" : "EQUALS",
              "property" : "type"
            },          
            {
              "argument" : ["2021-09-01T00:00:00Z","2021-12-29T23:59:59Z"],
              "operator":"BETWEEN",
              "property":"date"
            }
          ]
        }
    }
}
```