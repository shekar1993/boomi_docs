# Environment Migration category 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-5e3d92fb-a205-41b9-95d4-6528893d30b5"/>
</head>


The Environment Migration category of operations is used to create, update, retrieve, and perform environment migration.

## Supported operations 

The Environment Migration category is supported in the following operations:

| Operation                                          | QUERY                 | MUTATION              |
|----------------------------------------------------|-----------------------|-----------------------|
| Environment Migration                              | Supported ✅          | Not supported ✗       |
| Environment Migration Save                         | Not supported ✗       | Supported ✅           |
| Environment Migration Delete                       | Not supported ✗       | Supported ✅           |
| Environment Migration Settings Update              | Not supported ✗       | Supported ✅           |
| Environment Migration Complete                     | Not supported ✗       | Supported ✅           |
| Environment Migration Containers Update            | Not supported ✗       | Supported ✅           |
| Environment Migration API Configuration Update     | Not supported ✗       | Supported ✅           |


Currently, no fields are supported for use as QUERY filters for the Environment Migration object.

## Query syntax

```
{ environmentMigrations{EnvironmentMigration}} environmentMigrations(gatewayToId: String): [EnvironmentMigration!]!

```

## Mutation syntax

Environment Migration Save

``` 
{ environmentMigrationSave (environmentId: String!, gatewayId: String) {EnvironmentMigration}}
```

To move the environment off of the API Gateway, specify the gatewayId as an empty string "".

Environment Migration Delete

``` 
{ environmentMigrationDelete (environmentId: String!) { EnvironmentMigration }}
```

Environment Migration Settings Update

``` 
{ environmentMigrationSettingsUpdate(environmentId: String!, odataPath: String, restPath: String, soapPath: String, soap12Path: String, configurationComplete: Boolean): EnvironmentMigration}
```

Environment Migration Complete

``` 
{ environmentMigrationComplete (environmentId: String!) { MigrationResult}}
```

Environment Migration API Configuration Update

``` 
{ environmentMigrationApiConfigurationUpdate (environmentId: String!, configurationCompleted: Boolean)}
```

Environment Migration Containers Update

``` 
{ environmentMigrationContainersUpdate (environmentId: String!, configurationComplete: Boolean)}
```

## Return fields syntax

```
type EnvironmentMigration {
    environment: Environment 
    toGateway: Gateway
    fromGateway: Gateway
    environmentConfigurationCompleted: Boolean!
    containerConfigurationCompleted: Boolean!
    apiConfigurationCompleted: Boolean!
    gatewayConfigurationCompleted: Boolean!
    environmentSettings: EnvironmentSettings
    warnings: Warnings
}
```

|Field|Type|Description|
|-----|----|-----------|
|environment|*string*|The environment.|
|toGateway|*Gateway*|The details of the API Gateway that the environment is migrating to.|
|fromGateway|*Gateway*|The details of the API Gateway that the environment is migrating from.|
|environmentConfigurationCompleted|*boolean*|Used to identify an environment configuration as completed.|
|containerConfigurationCompleted|*boolean*|Used to identify a runtime container configuration as completed.|
|apiConfigurationCompleted|*boolean*|Used to identify an API configuration as completed.|
|environmentSettings|*EnvironmentSettings*|Used to identify the environment path of the API URL.|
|warnings|*Warnings*|Identifies environment, runtime container, and API warnings in the environment migration.|

```
type Gateway {
    id: ID!
    name: String!
    deleted: Boolean!
}
```

|Field|Type|Description|
|-----|----|-----------|
|name|*string*|The name of the API Gateway.|
|id|*string*|The ID of the API Gateway.|
|deleted|*boolean*|The API Gateway is deleted or not,|

```
type EnvironmentSettings {
    # Specifies the portion of the URL that is used to access a REST endpoint through the API Gateway.
    restPath: String
    # Specifies the portion of the URL that is used to access a SOAP operation through the API Gateway.
    soapPath: String
    # Specifies the portion of the URL that is used to access a SOAP 1.2 operation through the API Gateway.
    soap12Path: String
    # Specifies the portion of the URL that is used to access a SOAP 1.2 operation through the API Gateway.
    odataPath: String
}
```

|Field|Type|Description|
|-----|----|-----------|
|restPath|*string*|The REST Endpoints configured on the environment.|
|soapPath|*string*|The SOAP Operations configured on the environment.|
|soap12Path|*string*|The SOAP 12 Operations configured on the environment.|
|odataPath|*string*|The OData Entities specified in the Environment Migration wizard.|

```
type MigrationResult {
    status: MigrationStatus!
    warnings: Warnings
}
```

```
type MigrationStatus{
    OK,
    OK_WITH_WARNINGS
    ERROR
}
```

|Field|Type|Description|
|-----|----|-----------|
|MigrationStatus|*MigrationStatus*|Identifies whether the migration was successful.|
|Warnings|*Warnings*|Identifies environment, runtime container, and API warnings in the environment migration.|

```
type Warnings {
    environmentWarnings: [Warning!]
    containerWarnings: [Warning!]
    apiWarnings: [Warning!]
}
```

|Field|Type|Description|
|-----|----|-----------|
|environmentWarnings|*Warning*|Used to identify an environment warnings.|
|containerWarnings|*Warning*|Used to identify a runtime container warnings.|
|apiWarnings|*Warning*|Used to identify an API warnings.|

```

type Warning {
    entityIds:[String]
    errorCode: ConfigurationError
    message: String
    severity: ErrorSeverity
}
```

|Field|Type|Description|
|-----|----|-----------|
|entityIds|*string*|Identifies the entity that triggered the warning. This can be the environment ID or the endpoint type.|
|errorCode|*string*|Identifies the type of the error.|
|message|*string*|Provides the error details.|
|severity|*string*|Severity of the error, can be either WARNING or ERROR. Migrations with warnings of severity ERROR cannot be completed.|

## GraphQL implementation 

-   **QUERY operation**

    The following example queries the environment migrations. Each of the fields within the query are optional, based on the data that you want to return.

    For a GraphQL request, send a request to https://platform.boomi.com/graphql with the following `X-Account` header: `accountId`

    Request:

    ```
    query environmentMigrations ($gatewayToId: String) {
        environmentMigrations (gatewayToId: $gatewayToId) {
            environment {
                id
                name
                gateway {
                    id
                    name
                    deleted
                    environments {
                        id
                        name
                        gateway {
                            id
                            name
                            deleted
                        }
                        settings {
                            restPath
                            soapPath
                            soap12Path
                            odataPath
                        }
                        publishedName
                    }
                    defaultApiExecutionSettings {
                        concurrency
                        retries
                        retryCases
                        connectTimeout
                        executionTimeout
                    }
                    forwardProxy {
                        id
                        enabled
                        hostAddress
                        portNumber
                        proxyType
                        username
                        password
                    }
                }
                settings {
                    restPath
                    soapPath
                    soap12Path
                    odataPath
                }
                publishedName
            }
            toGateway {
                id
                name
                deleted
                environments {
                    id
                    name
                    publishedName
                }
                defaultApiExecutionSettings {
                    concurrency
                    retries
                    retryCases
                    connectTimeout
                    executionTimeout
                }
                forwardProxy {
                    id
                    enabled
                    hostAddress
                    portNumber
                    proxyType
                    username
                    password
                }
            }
            fromGateway {
                id
                name
                deleted
                environments {
                    id
                    name
                    publishedName
                }
                defaultApiExecutionSettings {
                    concurrency
                    retries
                    retryCases
                    connectTimeout
                    executionTimeout
                }
                forwardProxy {
                    id
                    enabled
                    hostAddress
                    portNumber
                    proxyType
                    username
                    password
                }
            }
            environmentConfigurationCompleted
            containerConfigurationCompleted
            apiConfigurationCompleted
            gatewayConfigurationCompleted
            environmentSettings {
                restPath
                soapPath
                soap12Path
                odataPath
            }
            warnings {
                environmentWarnings {
                    entityIds
                    errorCode
                    message
                    severity
                }
                containerWarnings {
                    entityIds
                    errorCode
                    message
                    severity
                }
                apiWarnings {
                    entityIds
                    errorCode
                    message
                    severity
                }
            }
        }
    }
    Variables
    {
      "gatewayToId": ""
    }
    ```

    For a JSON response, send the request with the following HTTP header:

    `Accept: application/json`

    JSON response:

    ```
    {
        "data": {
            "environmentMigrations": [
                {
                    "environment": {
                        "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                        "name": "filter env",
                        "gateway": null,
                        "settings": {
                            "restPath": "ws/resttest",
                            "soapPath": "ws/soaptest",
                            "soap12Path": "ws/soap12test",
                            "odataPath": "ws/odata2test"
                        },
                        "publishedName": "filter env"
                    },
                    "toGateway": {
                        "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                        "name": "3700Gateway",
                        "deleted": false,
                        "environments": [
                            {
                                "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                                "name": "Jiaqi Testing on 3700x",
                                "publishedName": "Jiaqi Testing on 3700x"
                            }
                        ],
                        "defaultApiExecutionSettings": {
                            "concurrency": 100,
                            "retries": 1,
                            "retryCases": [
                                "CONNECT_TIMEOUT",
                                "HOST_ROUTING_ERROR",
                                "HOST_NOT_FOUND",
                                "CONNECTION_DROPPED"
                            ],
                            "connectTimeout": 10,
                            "executionTimeout": 120
                        },
                        "forwardProxy": {
                            "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                            "enabled": false,
                            "hostAddress": null,
                            "portNumber": null,
                            "proxyType": null,
                            "username": null,
                            "password": null
                        }
                    },
                    "fromGateway": null,
                    "environmentConfigurationCompleted": false,
                    "containerConfigurationCompleted": false,
                    "apiConfigurationCompleted": false,
                    "gatewayConfigurationCompleted": true,
                    "environmentSettings": {
                        "restPath": "ws/resttest",
                        "soapPath": "ws/soaptest",
                        "soap12Path": "ws/soap12test",
                        "odataPath": "ws/odata2test"
                    },
                    "warnings": {
                        "environmentWarnings": [],
                        "containerWarnings": null,
                        "apiWarnings": null
                    }
                }
            ]
        }
    }
    ```

-   **environmentMigrationSave operation**

    The following example saves an environment migration.

    For a GraphQL request, send a request to https://platform.boomi.com/graphql with the following `X-Account` header: `accountId`.

    Request:

    ``` 
    mutation environmentMigrationSave ($environmentId: String!, $gatewayId: String) {
        environmentMigrationSave (environmentId: $environmentId, gatewayId: $gatewayId) {
            environment {
                id
                name
                gateway {
                    id
                    name
                    deleted
                    environments {
                        id
                        name
                        gateway {
                            id
                            name
                            deleted
                        }
                        settings {
                            restPath
                            soapPath
                            soap12Path
                            odataPath
                        }
                        publishedName
                    }
                    defaultApiExecutionSettings {
                        concurrency
                        retries
                        retryCases
                        connectTimeout
                        executionTimeout
                    }
                    forwardProxy {
                        id
                        enabled
                        hostAddress
                        portNumber
                        proxyType
                        username
                        password
                    }
                }
                settings {
                    restPath
                    soapPath
                    soap12Path
                    odataPath
                }
                publishedName
            }
            toGateway {
                id
                name
                deleted
                environments {
                    id
                    name
                    publishedName
                }
                defaultApiExecutionSettings {
                    concurrency
                    retries
                    retryCases
                    connectTimeout
                    executionTimeout
                }
                forwardProxy {
                    id
                    enabled
                    hostAddress
                    portNumber
                    proxyType
                    username
                    password
                }
            }
            fromGateway {
                id
                name
                deleted
                environments {
                    id
                    name
                    publishedName
                }
                defaultApiExecutionSettings {
                    concurrency
                    retries
                    retryCases
                    connectTimeout
                    executionTimeout
                }
                forwardProxy {
                    id
                    enabled
                    hostAddress
                    portNumber
                    proxyType
                    username
                    password
                }
            }
            environmentConfigurationCompleted
            containerConfigurationCompleted
            apiConfigurationCompleted
            gatewayConfigurationCompleted
            environmentSettings {
                restPath
                soapPath
                soap12Path
                odataPath
            }
            warnings {
                environmentWarnings {
                    entityIds
                    errorCode
                    message
                    severity
                }
                containerWarnings {
                    entityIds
                    errorCode
                    message
                    severity
                }
                apiWarnings {
                    entityIds
                    errorCode
                    message
                    severity
                }
            }
        }
    }
    Variables:
    {
      "environmentId": "",
      "gatewayId": ""
    }
    ```

    For a JSON response, send the request with the following HTTP header:

    `Accept: application/json`

    JSON response:

    ``` 
    {
        "data": {
            "environmentMigrationSave": {
                "environment": {
                    "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                    "name": "filter env",
                    "gateway": null,
                    "settings": {
                        "restPath": "ws/resttest",
                        "soapPath": "ws/soaptest",
                        "soap12Path": "ws/soap12test",
                        "odataPath": "ws/odata2test"
                    },
                    "publishedName": "filter env"
                },
                "toGateway": {
                    "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                    "name": "3700Gateway",
                    "deleted": false,
                    "environments": [
                        {
                            "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                            "name": "Jiaqi Testing on 3700x",
                            "publishedName": "Jiaqi Testing on 3700x"
                        }
                    ],
                    "defaultApiExecutionSettings": {
                        "concurrency": 100,
                        "retries": 1,
                        "retryCases": [
                            "CONNECT_TIMEOUT",
                            "HOST_ROUTING_ERROR",
                            "HOST_NOT_FOUND",
                            "CONNECTION_DROPPED"
                        ],
                        "connectTimeout": 10,
                        "executionTimeout": 120
                    },
                    "forwardProxy": {
                        "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                        "enabled": false,
                        "hostAddress": null,
                        "portNumber": null,
                        "proxyType": null,
                        "username": null,
                        "password": null
                    }
                },
                "fromGateway": null,
                "environmentConfigurationCompleted": false,
                "containerConfigurationCompleted": false,
                "apiConfigurationCompleted": false,
                "gatewayConfigurationCompleted": true,
                "environmentSettings": {
                    "restPath": "ws/resttest",
                    "soapPath": "ws/soaptest",
                    "soap12Path": "ws/soap12test",
                    "odataPath": "ws/odata2test"
                },
                "warnings": {
                    "environmentWarnings": [],
                    "containerWarnings": null,
                    "apiWarnings": null
                }
            }
        }
    }
    ```

-   **environmentMigrationDelete operation**

    The following example deletes an environment migration.

    For a GraphQL request, send a request to https://platform.boomi.com/graphql with the following `X-Account` header: `accountId`

    Request:

    ``` 
    mutation environmentMigrationDelete ($environmentId: String!) {
        environmentMigrationDelete (environmentId: $environmentId) {
            environment {
                id
                name
                gateway {
                    id
                    name
                    deleted
                    environments {
                        id
                        name
                        gateway {
                            id
                            name
                            deleted
                        }
                        settings {
                            restPath
                            soapPath
                            soap12Path
                            odataPath
                        }
                        publishedName
                    }
                    defaultApiExecutionSettings {
                        concurrency
                        retries
                        retryCases
                        connectTimeout
                        executionTimeout
                    }
                    forwardProxy {
                        id
                        enabled
                        hostAddress
                        portNumber
                        proxyType
                        username
                        password
                    }
                }
                settings {
                    restPath
                    soapPath
                    soap12Path
                    odataPath
                }
                publishedName
            }
            toGateway {
                id
                name
                deleted
                environments {
                    id
                    name
                    publishedName
                }
                defaultApiExecutionSettings {
                    concurrency
                    retries
                    retryCases
                    connectTimeout
                    executionTimeout
                }
                forwardProxy {
                    id
                    enabled
                    hostAddress
                    portNumber
                    proxyType
                    username
                    password
                }
            }
            fromGateway {
                id
                name
                deleted
                environments {
                    id
                    name
                    publishedName
                }
                defaultApiExecutionSettings {
                    concurrency
                    retries
                    retryCases
                    connectTimeout
                    executionTimeout
                }
                forwardProxy {
                    id
                    enabled
                    hostAddress
                    portNumber
                    proxyType
                    username
                    password
                }
            }
            environmentConfigurationCompleted
            containerConfigurationCompleted
            apiConfigurationCompleted
            gatewayConfigurationCompleted
            environmentSettings {
                restPath
                soapPath
                soap12Path
                odataPath
            }
            warnings {
                environmentWarnings {
                    entityIds
                    errorCode
                    message
                    severity
                }
                containerWarnings {
                    entityIds
                    errorCode
                    message
                    severity
                }
                apiWarnings {
                    entityIds
                    errorCode
                    message
                    severity
                }
            }
        }
    }
    Variables:
    {
      "environmentId": ""
    }
    ```

    For a JSON response, send the request with the following HTTP header:

    `Accept: application/json`

    JSON response:

    ``` 
    {
        "data": {
            "environmentMigrationDelete": {
                "environment": {
                    "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                    "name": "filter env",
                    "gateway": null,
                    "settings": {
                        "restPath": "ws/resttest",
                        "soapPath": "ws/soaptest",
                        "soap12Path": "ws/soap12test",
                        "odataPath": "ws/odata2test"
                    },
                    "publishedName": "filter env"
                },
                "toGateway": {
                    "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                    "name": "3700Gateway",
                    "deleted": false,
                    "environments": [
                        {
                            "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                            "name": "Jiaqi Testing on 3700x",
                            "publishedName": "Jiaqi Testing on 3700x"
                        }
                    ],
                    "defaultApiExecutionSettings": {
                        "concurrency": 100,
                        "retries": 1,
                        "retryCases": [
                            "CONNECT_TIMEOUT",
                            "HOST_ROUTING_ERROR",
                            "HOST_NOT_FOUND",
                            "CONNECTION_DROPPED"
                        ],
                        "connectTimeout": 10,
                        "executionTimeout": 120
                    },
                    "forwardProxy": {
                        "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                        "enabled": false,
                        "hostAddress": null,
                        "portNumber": null,
                        "proxyType": null,
                        "username": null,
                        "password": null
                    }
                },
                "fromGateway": null,
                "environmentConfigurationCompleted": false,
                "containerConfigurationCompleted": false,
                "apiConfigurationCompleted": false,
                "gatewayConfigurationCompleted": true,
                "environmentSettings": {
                    "restPath": "ws/resttest",
                    "soapPath": "ws/soaptest",
                    "soap12Path": "ws/soap12test",
                    "odataPath": "ws/odata2test"
                },
                "warnings": null
            }
        }
    }
    ```

-   **environmentMigrationSettingsUpdate operation**

    This mutation creates or updates the configuration of the environment's endpoints that are applied when the migration is complete.

    For a GraphQL request, send a request to https://platform.boomi.com/graphql with the following `X-Account` header: `accountId`

    Request:

    ``` 
    mutation environmentMigrationSettingsUpdate ($environmentId: String!, $odataPath: String, $restPath: String, $soapPath: String, $soap12Path: String, $configurationComplete: Boolean) {
        environmentMigrationSettingsUpdate (environmentId: $environmentId, odataPath: $odataPath, restPath: $restPath, soapPath: $soapPath, soap12Path: $soap12Path, configurationComplete: $configurationComplete) {
            environment {
                id
                name
                gateway {
                    id
                    name
                    deleted
                    environments {
                        id
                        name
                        gateway {
                            id
                            name
                            deleted
                        }
                        settings {
                            restPath
                            soapPath
                            soap12Path
                            odataPath
                        }
                        publishedName
                    }
                    defaultApiExecutionSettings {
                        concurrency
                        retries
                        retryCases
                        connectTimeout
                        executionTimeout
                    }
                    forwardProxy {
                        id
                        enabled
                        hostAddress
                        portNumber
                        proxyType
                        username
                        password
                    }
                }
                settings {
                    restPath
                    soapPath
                    soap12Path
                    odataPath
                }
                publishedName
            }
            toGateway {
                id
                name
                deleted
                environments {
                    id
                    name
                    publishedName
                }
                defaultApiExecutionSettings {
                    concurrency
                    retries
                    retryCases
                    connectTimeout
                    executionTimeout
                }
                forwardProxy {
                    id
                    enabled
                    hostAddress
                    portNumber
                    proxyType
                    username
                    password
                }
            }
            fromGateway {
                id
                name
                deleted
                environments {
                    id
                    name
                    publishedName
                }
                defaultApiExecutionSettings {
                    concurrency
                    retries
                    retryCases
                    connectTimeout
                    executionTimeout
                }
                forwardProxy {
                    id
                    enabled
                    hostAddress
                    portNumber
                    proxyType
                    username
                    password
                }
            }
            environmentConfigurationCompleted
            containerConfigurationCompleted
            apiConfigurationCompleted
            gatewayConfigurationCompleted
            environmentSettings {
                restPath
                soapPath
                soap12Path
                odataPath
            }
            warnings {
                environmentWarnings {
                    entityIds
                    errorCode
                    message
                    severity
                }
                containerWarnings {
                    entityIds
                    errorCode
                    message
                    severity
                }
                apiWarnings {
                    entityIds
                    errorCode
                    message
                    severity
                }
            }
        }
    }
    Variables:
    {
      "environmentId": "",
      "odataPath": "",
      "restPath": "",
      "soapPath": "",
      "soap12Path": "",
      "configurationComplete": true
    }
    ```

    For a JSON response, send the request with the following HTTP header:

    `Accept: application/json`

    JSON response:

    ``` 
    {
        "data": {
            "environmentMigrationSettingsUpdate": {
                "environment": {
                    "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                    "name": "filter env",
                    "gateway": null,
                    "settings": {
                        "restPath": "ws/resttest",
                        "soapPath": "ws/soaptest",
                        "soap12Path": "ws/soap12test",
                        "odataPath": "ws/odata2test"
                    },
                    "publishedName": "filter env"
                },
                "toGateway": {
                    "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                    "name": "3700Gateway",
                    "deleted": false,
                    "environments": [
                        {
                            "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                            "name": "Jiaqi Testing on 3700x",
                            "publishedName": "Jiaqi Testing on 3700x"
                        }
                    ],
                    "defaultApiExecutionSettings": {
                        "concurrency": 100,
                        "retries": 1,
                        "retryCases": [
                            "CONNECT_TIMEOUT",
                            "HOST_ROUTING_ERROR",
                            "HOST_NOT_FOUND",
                            "CONNECTION_DROPPED"
                        ],
                        "connectTimeout": 10,
                        "executionTimeout": 120
                    },
                    "forwardProxy": {
                        "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                        "enabled": false,
                        "hostAddress": null,
                        "portNumber": null,
                        "proxyType": null,
                        "username": null,
                        "password": null
                    }
                },
                "fromGateway": null,
                "environmentConfigurationCompleted": true,
                "containerConfigurationCompleted": false,
                "apiConfigurationCompleted": true,
                "gatewayConfigurationCompleted": true,
                "environmentSettings": {
                    "restPath": "ws/resttest111",
                    "soapPath": "ws/soaptest111",
                    "soap12Path": "ws/soap12test111",
                    "odataPath": "ws/odata2test111"
                },
                "warnings": {
                    "environmentWarnings": [],
                    "containerWarnings": null,
                    "apiWarnings": null
                }
            }
        }
    }
    ```

-   **environmentMigrationComplete operation**

    For a GraphQL request, send a request to https://platform.boomi.com/graphql with the following `X-Account` header: `accountId`

    Request:

    ```
    mutation environmentMigrationComplete ($environmentId: String!) {
        environmentMigrationComplete (environmentId: $environmentId) {
            status
            warnings {
                environmentWarnings {
                    entityIds
                    errorCode
                    message
                    severity
                }
                containerWarnings {
                    entityIds
                    errorCode
                    message
                    severity
                }
                apiWarnings {
                    entityIds
                    errorCode
                    message
                    severity
                }
            }
        }
    }
    Variables:
    {
      "environmentId": ""
    }
    ```

    For a JSON response, send the request with the following HTTP header:

    `Accept: application/json`

    JSON response:

    ```
    {
        "data": {
            "environmentMigrationComplete": {
                "status": "OK",
                "warnings": {
                    "environmentWarnings": [],
                    "containerWarnings": null,
                    "apiWarnings": []
                }
            }
        }
    }
    ```

-   **environmentMigrationContainersUpdate operation**

    For a GraphQL request, send a request to https://platform.boomi.com/graphql with the following `X-Account` header: `accountId`

    Request:

    ``` 
    mutation environmentMigrationContainersUpdate ($environmentId: String!, $configurationComplete: Boolean) {
        environmentMigrationContainersUpdate (environmentId: $environmentId, configurationComplete: $configurationComplete) {
            environment {
                id
                name
                gateway {
                    id
                    name
                    deleted
                    environments {
                        id
                        name
                        gateway {
                            id
                            name
                            deleted
                        }
                        settings {
                            restPath
                            soapPath
                            soap12Path
                            odataPath
                        }
                        publishedName
                    }
                    defaultApiExecutionSettings {
                        concurrency
                        retries
                        retryCases
                        connectTimeout
                        executionTimeout
                    }
                    forwardProxy {
                        id
                        enabled
                        hostAddress
                        portNumber
                        proxyType
                        username
                        password
                    }
                }
                settings {
                    restPath
                    soapPath
                    soap12Path
                    odataPath
                }
                publishedName
            }
            toGateway {
                id
                name
                deleted
                environments {
                    id
                    name
                    publishedName
                }
                defaultApiExecutionSettings {
                    concurrency
                    retries
                    retryCases
                    connectTimeout
                    executionTimeout
                }
                forwardProxy {
                    id
                    enabled
                    hostAddress
                    portNumber
                    proxyType
                    username
                    password
                }
            }
            fromGateway {
                id
                name
                deleted
                environments {
                    id
                    name
                    publishedName
                }
                defaultApiExecutionSettings {
                    concurrency
                    retries
                    retryCases
                    connectTimeout
                    executionTimeout
                }
                forwardProxy {
                    id
                    enabled
                    hostAddress
                    portNumber
                    proxyType
                    username
                    password
                }
            }
            environmentConfigurationCompleted
            containerConfigurationCompleted
            apiConfigurationCompleted
            gatewayConfigurationCompleted
            environmentSettings {
                restPath
                soapPath
                soap12Path
                odataPath
            }
            warnings {
                environmentWarnings {
                    entityIds
                    errorCode
                    message
                    severity
                }
                containerWarnings {
                    entityIds
                    errorCode
                    message
                    severity
                }
                apiWarnings {
                    entityIds
                    errorCode
                    message
                    severity
                }
            }
        }
    }
    Variables:
    {
      "environmentId": "",
      "configurationComplete": true
    }
    ```

    For a JSON response, send the request with the following HTTP header:

    `Accept: application/json`

    JSON response:

    ``` 
    {
        "data": {
            "environmentMigrationContainersUpdate": {
                "environment": {
                    "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                    "name": "filter env",
                    "gateway": null,
                    "settings": {
                        "restPath": "ws/resttest",
                        "soapPath": "ws/soaptest",
                        "soap12Path": "ws/soap12test",
                        "odataPath": "ws/odata2test"
                    },
                    "publishedName": "filter env"
                },
                "toGateway": {
                    "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                    "name": "3700Gateway",
                    "deleted": false,
                    "environments": [
                        {
                            "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                            "name": "Jiaqi Testing on 3700x",
                            "publishedName": "Jiaqi Testing on 3700x"
                        }
                    ],
                    "defaultApiExecutionSettings": {
                        "concurrency": 100,
                        "retries": 1,
                        "retryCases": [
                            "CONNECT_TIMEOUT",
                            "HOST_ROUTING_ERROR",
                            "HOST_NOT_FOUND",
                            "CONNECTION_DROPPED"
                        ],
                        "connectTimeout": 10,
                        "executionTimeout": 120
                    },
                    "forwardProxy": {
                        "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                        "enabled": false,
                        "hostAddress": null,
                        "portNumber": null,
                        "proxyType": null,
                        "username": null,
                        "password": null
                    }
                },
                "fromGateway": null,
                "environmentConfigurationCompleted": true,
                "containerConfigurationCompleted": true,
                "apiConfigurationCompleted": true,
                "gatewayConfigurationCompleted": true,
                "environmentSettings": {
                    "restPath": "ws/resttest111",
                    "soapPath": "ws/soaptest111",
                    "soap12Path": "ws/soap12test111",
                    "odataPath": "ws/odata2test111"
                },
                "warnings": {
                    "environmentWarnings": [],
                    "containerWarnings": null,
                    "apiWarnings": null
                }
            }
        }
    }
    ```

-   **environmentMigrationApiConfigurationUpdate operation**

    For a GraphQL request, send a request to https://platform.boomi.com/graphql with the following `X-Account` header: `accountId`

    Request:

    ``` 
    mutation environmentMigrationApiConfigurationUpdate ($environmentId: String!, $configurationCompleted: Boolean) {
        environmentMigrationApiConfigurationUpdate (environmentId: $environmentId, configurationCompleted: $configurationCompleted) {
            environment {
                id
                name
                gateway {
                    id
                    name
                    deleted
                    environments {
                        id
                        name
                        gateway {
                            id
                            name
                            deleted
                        }
                        settings {
                            restPath
                            soapPath
                            soap12Path
                            odataPath
                        }
                        publishedName
                    }
                    defaultApiExecutionSettings {
                        concurrency
                        retries
                        retryCases
                        connectTimeout
                        executionTimeout
                    }
                    forwardProxy {
                        id
                        enabled
                        hostAddress
                        portNumber
                        proxyType
                        username
                        password
                    }
                }
                settings {
                    restPath
                    soapPath
                    soap12Path
                    odataPath
                }
                publishedName
            }
            toGateway {
                id
                name
                deleted
                environments {
                    id
                    name
                    publishedName
                }
                defaultApiExecutionSettings {
                    concurrency
                    retries
                    retryCases
                    connectTimeout
                    executionTimeout
                }
                forwardProxy {
                    id
                    enabled
                    hostAddress
                    portNumber
                    proxyType
                    username
                    password
                }
            }
            fromGateway {
                id
                name
                deleted
                environments {
                    id
                    name
                    publishedName
                }
                defaultApiExecutionSettings {
                    concurrency
                    retries
                    retryCases
                    connectTimeout
                    executionTimeout
                }
                forwardProxy {
                    id
                    enabled
                    hostAddress
                    portNumber
                    proxyType
                    username
                    password
                }
            }
            environmentConfigurationCompleted
            containerConfigurationCompleted
            apiConfigurationCompleted
            gatewayConfigurationCompleted
            environmentSettings {
                restPath
                soapPath
                soap12Path
                odataPath
            }
            warnings {
                environmentWarnings {
                    entityIds
                    errorCode
                    message
                    severity
                }
                containerWarnings {
                    entityIds
                    errorCode
                    message
                    severity
                }
                apiWarnings {
                    entityIds
                    errorCode
                    message
                    severity
                }
            }
        }
    }
    Variables:
    {
      "environmentId": "",
      "configurationCompleted": true
    }
    ```

    For a JSON response, send the request with the following HTTP header:

    `Accept: application/json`

    JSON response:

    ``` 
    {
        "data": {
            "environmentMigrationApiConfigurationUpdate": {
                "environment": {
                    "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                    "name": "filter env",
                    "gateway": null,
                    "settings": {
                        "restPath": "ws/resttest",
                        "soapPath": "ws/soaptest",
                        "soap12Path": "ws/soap12test",
                        "odataPath": "ws/odata2test"
                    },
                    "publishedName": "filter env"
                },
                "toGateway": {
                    "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                    "name": "3700Gateway",
                    "deleted": false,
                    "environments": [
                        {
                            "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                            "name": "Jiaqi Testing on 3700x",
                            "publishedName": "Jiaqi Testing on 3700x"
                        }
                    ],
                    "defaultApiExecutionSettings": {
                        "concurrency": 100,
                        "retries": 1,
                        "retryCases": [
                            "CONNECT_TIMEOUT",
                            "HOST_ROUTING_ERROR",
                            "HOST_NOT_FOUND",
                            "CONNECTION_DROPPED"
                        ],
                        "connectTimeout": 10,
                        "executionTimeout": 120
                    },
                    "forwardProxy": {
                        "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                        "enabled": false,
                        "hostAddress": null,
                        "portNumber": null,
                        "proxyType": null,
                        "username": null,
                        "password": null
                    }
                },
                "fromGateway": null,
                "environmentConfigurationCompleted": false,
                "containerConfigurationCompleted": false,
                "apiConfigurationCompleted": true,
                "gatewayConfigurationCompleted": true,
                "environmentSettings": {
                    "restPath": "ws/resttest",
                    "soapPath": "ws/soaptest",
                    "soap12Path": "ws/soap12test",
                    "odataPath": "ws/odata2test"
                },
                "warnings": {
                    "environmentWarnings": [],
                    "containerWarnings": null,
                    "apiWarnings": null
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
              "argument" : ["api-environment_migration"],
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