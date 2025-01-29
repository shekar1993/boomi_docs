# Environments category 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-e4e45b4d-c1ec-41be-a9d7-00d6a8a8c654"/>
</head>


The Environments category of operations is used to return a list of environments.

## Supported operations 

The Environments category is supported in the following operations:

| **Operation** | **QUERY** | **MUTATION** |
| -------------- | --------- | ------------ |
| Environments   | ✅ Supported | ✅ Supported |


## Query syntax 

```
{environments {Environment}}
```

## Mutation syntax 

The environment mutation lets you modify the Environment Settings path. This mutation supports partial updates, and only the provided paths are updated. If the provided path is null, the whole operation fails and returns an error. The paths must be valid URL paths and must be unique among themselves and also unique among all environments on the same Gateway. They must also not cause an API path conflict with the new value.

``` 
input EnvironmentInput {
    id: ID!
    settings: EnvironmentSettingsInput
}

```

``` 
input EnvironmentSettingsInput {
    restPath: String
    soapPath: String
    soap12Path: String
    odataPath: String
}
```

## Return fields syntax 

```
type Environment {
    id: String!
    name: String!
    gateway: Gateway
    settings: EnvironmentSettings
    publishedName: String
}
```

``` 
type EnvironmentMutation @Mutation {
    environmentUpdate(environment: EnvironmentInput) : Environment @hasPrivilege(privs: [[ "API_MGMT_ACCESS" ]])
}
```

| Field         | Type               | Description                                                                                                           |
|---------------|--------------------|-----------------------------------------------------------------------------------------------------------------------|
| id            | *string*             | The environment ID.                                                                                                   |
| name          | *string*             | The name of the environment.                                                                                          |
| gateway       | *Gateway*            | API Gateway information. For details about the `type Gateway` input parameters, see [Gateway category](/docs/Atomsphere/API%20Management/Topics/api-Gateway_category_b41f3ab2-2ce5-45c6-805e-0293a0f73ce3.md). |
| settings      | *EnvironmentSettings*| Environment Setting information.                                                                                      |
| publishedName | *string*             | Text that is displayed on the Developer Portal to name this environment.                                              |


```
type EnvironmentSettings {
    restPath: String
    soapPath: String
    soap12Path: String
    odataPath: String
}
```

The returned error codes include those in the `EnvironmentErrorCode` enum:

-   `ENVIRONMENT_NOT_FOUND`
-   `ENVIRONMENT_PATH_NULL`
-   `ENVIRONMENT_PATH_INVALID_CHARACTER`
-   `ENVIRONMENT_PATH_LEADING_SLASH`
-   `ENVIRONMENT_PATH_RELATIVE`
-   `ENVIRONMENT_PATH_SPACES`
-   `ENVIRONMENT_PATH_TRAILING_SLASH`
-   `ENVIRONMENT_PATH_INVALID_ENCODED`
-   `ENVIRONMENT_PATH_CONSECUTIVE_SLASHES`
-   `ENVIRONMENT_PATH_DUPLICATE`
-   `ENVIRONMENT_PATH_CONFLICT_KNOWN_MULTI`
-   `ENVIRONMENT_PATH_CONFLICT_MIXED_MULTI`
-   `ENVIRONMENT_PATH_CONFLICT_KNOWN_SINGLE`
-   `ENVIRONMENT_PATH_CONFLICT_MIXED_SINGLE`
-   `ENVIRONMENT_PATH_CONFLICT_UNKNOWN`
-   `API_PATH_CONFLICT_KNOWN_MULTI`
-   `API_PATH_CONFLICT_MIXED_MULTI`
-   `API_PATH_CONFLICT_KNOWN_SINGLE`
-   `API_PATH_CONFLICT_MIXED_SINGLE`
-   `API_PATH_CONFLICT_UNKNOWN`

|Field|Type|Description|
|-----|----|-----------|
|restPath|*string*|The default path prefix of any REST APIs in this environment.|
|soapPath|*string*|The default path prefix of any SOAP APIs in this environment.|
|soap12Path|*string*|The default path prefix of any SOAP 12 APIs in this environment.|
|odataPath|*string*|The default path prefix of any OData in this environment.|

## GraphQL implementation

The following example queries the environment.

For a GraphQL request, send a request to https://platform.boomi.com/graphql with the following `X-Account` header: `accountId`

Request:

```
query{
    environments{
        id
        name
        gateway{
            id
            name
        }
        settings{
            restPath
            soapPath
            soap12Path
            odataPath
        }
    }
}
```

For a JSON response, send the request with the following HTTP header:

`Accept: application/json`

JSON response:

```
{
  "data": {
    "environments": [
      {
        "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
        "name": "A",
        "gateway": {
          "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
          "name": "apimgw02.gateway2"
        },
        "settings": {
          "restPath": "ws/restaaa",
          "soapPath": "ws/soapaaa",
          "soap12Path": "ws/soap12aaaa",
          "odataPath": "ws/odataaaa"
        }
      },
      {
        "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
        "name": "no gateway empty",
        "gateway": null,
        "settings": {
          "restPath": "ws/rest",
          "soapPath": "ws/soap",
          "soap12Path": "ws/soap12",
          "odataPath": "ws/odata2"
        }
      }
    ]
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
              "argument" : ["api-environment_settings"],
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