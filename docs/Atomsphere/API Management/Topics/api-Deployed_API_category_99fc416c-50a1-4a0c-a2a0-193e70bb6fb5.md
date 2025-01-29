# Deployed API category 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-99fc416c-50a1-4a0c-a2a0-193e70bb6fb5"/>
</head>


The Deployed API category of operations is used to return the deployed API information for a specific environment.

## Supported operations

| Operation                                   | QUERY           | MUTATION         |
|---------------------------------------------|-----------------|------------------|
| All Deployed APIs                           | Supported (✅)    | Not supported (X) |
| Deployed API, using the Deployed API ID     | Supported (✅)    | Not supported (X) |
| Deployed API, using the Environment ID      | Supported (✅)    | Not supported (X) |
| Environment Migration Deployed API          | Supported (✅)    | Not supported (X) |
| Deployed API Subscription                   | Supported (✅)    | Not supported (X) |
| Deployed API Update                         | Not supported (X) | Supported (✅)    |
| Deployed API Subscription Create            | Not supported (X) | Supported (✅)    |
| Deployed API Subscription Update            | Not supported (X) | Supported (✅)    |
| Deployed API Subscription Delete            | Not supported (X) | Supported (✅)    |


## Query syntax 

All Deployed APIs query

``` 
deployedApis(filter: DeployedApiFilter): [DeployedApi!]
```
Query input syntax

```
input DeployedApiFilter
{
gatewayId: ID
}
```

Deployed API queries

```
{deployedApi(id: ID!): DeployedApi!}
```

``` 
{deployedApiFrom(environmentId:ID! componentId:ID!): DeployedApi!}
```

Environment Migration Deployed API query

```
{environmentMigrationDeployedApis(environmentId:String!): [DeployedApiMigration!]!}
```

Deployed API Subscription

``` 
deployedApiSubscription(apiKeyId: ID!): DeployedApiSubscription!
```

## Mutation syntax 

Deployed API Update mutation

``` 
{deployedApiUpdate(deployedApi: DeployedApiInput!): DeployedApi}

```

Deployed API Subscription Create

``` 
deployedApiSubscriptionCreate(deployedApiSubscription: DeployedApiSubscriptionCreateInput! ): DeployedApiSubscription!
```

Deployed API Subscription Update

``` 
deployedApiSubscriptionUpdate(deployedApiSubscription: DeployedApiSubscriptionUpdateInput!): DeployedApiSubscription!
```

Deployed API Subscription Delete

``` 
deployedApiSubscriptionDelete(apiKeyId: ID!): ID!
```

Deployed API Subscription Regenerate API Key

``` 
deployedApiSubscriptionRegenerateApiKey(apiKeyId: ID!): DeployedApiSubscription!
```


## Input and return fields syntax 
#### Mutation input syntax

Deployed APIs and Plans allow for partial updates. You can update the `keylessPlanId` field and `planID` field independently. If you update the keyless plan only, then that plan must be assigned to an API. If you want to update the list of plans for an API, send only the list of plan IDs. Your plan IDs must include a `keylessPlanID`.

``` 
input DeployedApiInput {
    id: ID!
    executionSettings: DeployedApiExecutionSettingsInput
    planIds: [ID!] 
    keylessPlanId: ID
    requiredRoles: [ID!]
}
```

``` 
input DeployedApiPlansInput {
    apiDeploymentId: ID!
    planIds: [ID!]
    keylessPlanId: ID
}
```

``` 
input DeployedApiSubscriptionCreateInput {
    deployedApiId: String!
    applicationId: String!
    planId: String!
    startDate: DateTime
    expirationDate: DateTime
}
```

``` 
input DeployedApiSubscriptionUpdateInput {
    apiKeyId: ID!
    expirationDate: DateTime
    planId: ID
    status: DeployedApiSubscriptionStatusUpdate
}
```

``` 
input DeployedApiExecutionSettingsInput {
    concurrency: Int
    retries: Int
    retryCases: [DeployedApiRetryCase!]
    connectTimeout: Long
    executionTimeout: Long
    subscriptionCacheSize: Long
}
```

``` 
enum DeployedApiRetryCase {
    CONNECT_TIMEOUT
    EXECUTION_TIMEOUT
    HOST_ROUTING_ERROR
    HOST_NOT_FOUND
    CONNECTION_DROPPED
}
```

#### Return fields syntax

``` 
type DeployedApiMigration {
    deployedApi: DeployedApi!
    gatewayId: String
}
```

|Field|Type|Description|
|-----|----|-----------|
|deployedApi|*DeployedApi*|The deployed API information.|
|gatewayId|*string*|The API Gateway's ID.|

``` 
type DeployedApi {
    id: ID!
    component: Component!
    metadata: ApiComponentMetadata!
    environment: Environment!
    endpoints: [DeployedApiEndpoint!]
    keylessPlan: DeployedApiPlan
    executionSettings: DeployedApiExecutionSettings
    requiredRoles: [AuthSourceRole!]
    planMappings: [DeployedApiPlanMapping!]
}
```

| Field               | Type                          | Description                                                                                                                                                   |
|---------------------|-------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id                  | *string*                        | The ID of the deployed API. You can retrieve the ID with a GraphQL call only. It is not the ID used on the Deployment History page in Integration.             |
| component           | *Component*                     | The component associated with the deployed API.                                                                                                               |
| metadata            | *ApiComponentMetadata*          | The metadata associated with the deployed API.                                                                                                                |
| environment         | *Environment*                   | The environment on which the API is deployed.                                                                                                                 |
| endpoints           | *DeployedApiEndpoint*           | A list detailing the types of endpoints and their base paths.                                                                                                 |
| keylessPlan         | *DeployedApiPlan*               | The Keyless Plan associated with the deployed API.                                                                                                            |
| executionSettings   | *DeployedApiExecutionSettings*  | The run settings associated with the deployed API.                                                                                                            |
| requiredRoles       | *list of AuthSourceRole objects*| Only an authenticated user can perform API runs for this deployed API. The user must have at least one of the roles contained in this list.                    |
| planMappings        | *DeployedApiPlanMapping*        | A list of all plans that are associated with the deployed API.                                                                                                |


``` 
type Component {
    id: ID!
    name: String!
    type: ComponentType!
    version: Int!
    definition: String
}
```

``` 
enum ComponentType {
    WEBSERVICE
    WEBSERVICE_EXTERNAL
}
```

|Field|Type|Description|
|-----|----|-----------|
|id|*string*|The ID of the component.|
|name|*string*|The name of the component.|
|type|*ComponentType*|Identifies the component as either an API Service component \(WEBSERVICE\) or an API Proxy component \(WEBSERVICE\_EXTERNAL\).|
|version|*integer*|The published version specified in the API component.|
|definition|*string*|The component's definition.|

``` 
type ApiComponentMetadata {
    title: String
    version: String
    description: String
}
```

|Field|Type|Description|
|-----|----|-----------|
|title|*string*|The API component's name.|
|version|*string*|The published version specified in the API component.|
|description|*string*|The API component's description.|

``` 
type DeployedApiEndpoint {
    type:DeployedApiEndpointType!
    basePath:String!
    contextPath: String!
}
```

``` 
enum DeployedApiEndpointType{
    REST
    SOAP
    SOAP12
    ODATA2
}
```

|Field|Type|Description|
|-----|----|-----------|
|type|*DeployedApiEndpointType*|A value of REST, SOAP, SOAP12, or ODATA2, indicating the type of your API endpoints.|
|basePath|*string*|Your API endpoint's base path.|
|contextPath|*string*| Path of the API|

``` 
type DeployedApiExecutionSettings {
    concurrency: Int!
    retries: Int!
    retryCases: [DeployedApiRetryCase!]
    connectTimeout: Long!
    executionTimeout: Long!
    subscriptionCacheSize: Long!
}
```

| Field            | Type                  | Description                                                                                                                                                                                                                                         |
|------------------|-----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| concurrency      | *integer*               | A value between 1 and 10000, with 100 as the default, that specifies the number of concurrent calls that can be made to the deployed API. Number of requests processed by configuring concurrency setting is determined by the concurrency setting and the number of processors. For a single node atom, the maximum number of concurrent requests allowed = number of CPUs/processors * 2 * concurrency value. For example, if a single node atom has 12 CPUs and concurrency is set to 1 on the Deployed API, 24 requests (12 * 2 * 1) will be processed by the back-end atom at any point of time. |
| retries          | *integer*               | A value between 0 and 10, with 1 used as the default, that specifies the number of retries attempted for a call before ending in an error, as configured in the retryCases value.                                                                     |
| retryCases       | *DeployedApiRetryCase*  | Identifies the retry cases.                                                                                                                                                                                                                          |
| connectTimeout   | *long*                  | A value between 1 and 600 (10 minutes), with 120 used as the default, that specifies the connection timeout value in seconds.                                                                                                                        |
| executionTimeout | *long*                  | A value between 1 and 315360000 (10 years), with 315360000 used as the default, that specifies the run time-out value in seconds.                                                                                                                    |
| subscriptionCacheSize | *long*| The maximum number of entries in a subscription cache per API. Defaults to 1,000 entries (~32KB). Note that this is the maximum size. |


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
|`CONNECT_TIMEOUT`|The Connect Timeout exception is returned when the API Gateway cannot establish a connection to the Atom or external host within the defined time in the connectTimeout value.|
|`EXECUTION_TIMEOUT`|The Execution Timeout exception is returned when a process runs for more time than the time defined in the executionTimeout value|
|`HOST_ROUTING_ERROR`|The Host Routing Error is returned when the Atom or remote host cannot be reached.|
|`HOST_NOT_FOUND`|The Host Not Found exception is returned when the IP address of the Atom or external host could not be determined.|
|`CONNECTION_DROPPED`|The Connection Dropped exception is returned when the connection to the Atom or external host dropped unexpectedly.|

``` 
type DeployedApiErrorCode {
    genericErrorCode: DeployedApiGenericErrorCode
    apiExecutionSettingsErrorCode: DeployedApiExecutionSettingsErrorCode
}
```

``` 
enum DeployedApiGenericErrorCode {
    DEPLOYMENT_ID_EMPTY
    DEPLOYMENT_NOT_FOUND
    COMPONENT_ID_EMPTY
    ENVIRONMENT_ID_EMPTY
    DEPLOYMENT_NOT_FOUND_FROM_ENV_COMP_ID
    ROLE_NOT_FOUND
    NOTHING_TO_UPDATE
}
```

``` 
enum DeployedApiPlansErrorCode {
    INPUT_PLAN_IDS_NOT_VALID
    KEYLESS_PLAN_ID_NOT_FOUND
    DISABLED_PLAN_IDS
    DEPLOYMENT_WITH_PENDING_SUBSCRIPTIONS
    PLANS_WITH_ACTIVE_SUBSCRIPTIONS
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

|Field|Type|Description|
|-----|----|-----------|
|genericErrorCode|*DeployedApiGenericErrorCode*|Returns a value of CONCURRENCY\_INVALID, RETRIES\_INVALID, EXECUTION\_TIMEOUT\_INVALID, CONNECT\_TIMEOUT\_INVALID, or DEPLOYMENT\_NOT\_ON\_GATEWAY.|
|apiExecutionSettingsErrorCode|*DeployedApiExecutionSettingsErrorCode*|Identifies the type of the error associated with the update of the DeployedApiExecutionSettings.|

``` 
type DeployedApiSubscription {
    apiKeyId: ID!
    deployedApi: DeployedApi
    application: DeployedApiApplication
    plan: DeployedApiPlan
    status: DeployedApiSubscriptionStatus!
    startDate: DateTime!
    expirationDate: DateTime
    approvalDate: DateTime
    consumerMessage: String
    producerMessage: String
    generatedBy: String
    generatedDate: DateTime!
    statusChangedBy: String
    statusChangedDate: DateTime
}

enum DeployedApiSubscriptionStatus {
    PENDING_SIMPLE,
    PENDING_FLOW,
    ACCEPTED,
    REJECTED,
    SUSPENDED,
    SUSPENDED_CONSUMER,
    EXPIRED,
    DELETED,
    FUTURE,
    REPLACED
}

enum DeployedApiSubscriptionStatusUpdate 
{
    ACCEPTED,
    SUSPENDED
}

```

|Field|Type|Description|
|-----|----|-----------|
|apiKeyId|*ID*|The API key|
|deployedApi|*Deployed API*|The Deployed API for which subscription is created.|
|application|*Deployed API application*|The Application created for subscription.|
|plan|*Deployed API plan*|The Plan associated with the subscription,|
|status|*string*|The status of the subscription.|
|startDate|*DateTime*|The date from which the subscription is active.|
|expirationDate|*DateTime*|The date till which the subscription is active. If this value is null, it means the subscription does not have an expiration date.|
|approvalDate|*DateTime*|The date when the subscription request was approved.|
|consumerMessage|*string*|The message from the API Consumer when the subscription was requested.|
|producerMessage|*string*|The message from the API Producer when the subscription was approved or rejected.|
|generatedBy|*string*|The user who requested the subscription.|
|generatedDate|DateTime|The date when the subscription was created.|
|statusChangedBy|*string*|The user who changed the subscription status.|
|statusChangedDate|*DateTime*|The date of the most recent update to the subscription status.|

## GraphQL implementation 

**QUERY operation**

The following example returns the list of deployed APIs on the environment, which is being migrated.

For a GraphQL request, send a request to `https://platform.boomi.com/graphql` with the following header: `X-Account` `accountId`

Request:

``` json
query {
    environmentMigrationDeployedApis(environmentId:"<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>") {
        gatewayId
        deployedApi {
            id
            component {
                id
                name
                type
                version
                definition
            }
            metadata {
                title
                version
                description
            }
            endpoints {
                type
                basePath
            }
        }
    }
}
```

JSON response:

``` json
{
    "data": {
        "environmentMigrationDeployedApis": [
            {
                "gatewayId": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                "deployedApi": {
                    "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                    "component": {
                        "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                        "name": "Alpha 1",
                        "type": "WEBSERVICE",
                        "version": 6,
                        "definition": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?><Component xmlns:ns2=\"http://www.boomi.com/connector/annotation\" xmlns:ns3=\"http://exacttarget.com/wsdl/partnerAPI\" xmlns:ns4=\"urn:fault.partner.exacttarget.com\" xmlns:ns5=\"http://schemas.boomi.com/sap/edi_dc40\" xmlns:ns6=\"http://schemas.microsoft.com/2003/10/Serialization/\" deleted=\"false\"><Id>71cea26b-a0df-4def-94cd-a74d11c40c0e</Id><Type>webservice</Type><Name>APIM1883_JSON_Test</Name><Version>6</Version><FolderId name=\"SigiQA\">395694</FolderId><AccountId>sigiqa-A9OX0F</AccountId><Properties/><References/><Description></Description><Object><webservice urlPath=\"apim1883json\"><restApi><route processId=\"2df3df1b-bc1f-413c-bed2-8ae3ffc0f160\"><overrides urlPath=\"\" objectName=\"split\" httpMethod=\"POST\" inputType=\"\" outputType=\"\" pageSize=\"3\"/><description></description></route></restApi><soapApi singleWsdlSchema=\"false\" suppressWrappers=\"false\" wsdlNamespace=\"\" wsdlServiceName=\"\" fullEnvelopePassthrough=\"false\"><SOAPVersion>SOAP_1_1</SOAPVersion></soapApi><odataApi/><metaInfo title=\"APIM 1883 Multiple JSON\" version=\"2.0\" contactName=\"\" contactUrl=\"\" contactEmail=\"\" licenseName=\"\" licenseUrl=\"\"><description></description><termsOfService></termsOfService></metaInfo><profileOverrides/><capturedHeaders/><apiRoles/></webservice></Object></Component>"
                    },
                    "metadata": {
                        "title": "Alpha 1 Multiple JSON",
                        "version": "2.0",
                        "description": ""
                    },
                    "endpoints": [
                        {
                            "type": "REST",
                            "basePath": "alpha1json"
                        }
                    ]
                }
            }
        ]
    }
}
```

**deployedAPI operation**

Request

``` json
query {
    deployedApi(id:"<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>") {
        id
        component {
            id
            name
            type
            version
            definition
        }
        metadata {
            title
            version
            description
        }
        environment {
            id
            name
            gateway {
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
            settings {
                restPath
                soapPath
                soap12Path
                odataPath
            }
            publishedName
        }
        endpoints {
            type
            basePath
        }
        keylessPlan {
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
        plans {
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
        executionSettings {
            concurrency
            retries
            connectTimeout
            executionTimeout
            retryCases
            subscriptionCacheSize
        }
        requiredRoles {
                id
                name
                description
        }
    }
}
```

JSON response:

``` json
{
    "data": {
        "deployedApi": {
            "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
            "component": {
                "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                "name": "easy",
                "type": "WEBSERVICE",
                "version": 10,
                "definition": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?><Component xmlns:ns2=\"http://www.boomi.com/connector/annotation\" xmlns:ns3=\"http://exacttarget.com/wsdl/partnerAPI\" xmlns:ns4=\"urn:fault.partner.exacttarget.com\" xmlns:ns5=\"http://schemas.boomi.com/sap/edi_dc40\" xmlns:ns6=\"http://schemas.microsoft.com/2003/10/Serialization/\" deleted=\"false\"><Id>46803742-9f04-47ed-8db9-74fa67e52c0f</Id><Type>webservice</Type><Name>easy</Name><Version>10</Version><FolderId name=\"APIM20PerfTesting\">306381</FolderId><AccountId>apim20perftesting-OQ9NFR</AccountId><Properties/><References/><Description></Description><Object><webservice urlPath=\"easy\"><restApi><route processId=\"43686896-1045-4ef8-94be-965a4b04b2dd\"><overrides urlPath=\"\" objectName=\"delay\" httpMethod=\"\" inputType=\"\" outputType=\"\"/><description></description></route><route processId=\"0d3ac712-0eca-4f05-baec-5d41bcd338b1\"><overrides urlPath=\"\" objectName=\"easy\" httpMethod=\"\" inputType=\"\" outputType=\"singledata\"/><description></description></route></restApi><soapApi singleWsdlSchema=\"false\" suppressWrappers=\"false\" wsdlNamespace=\"\" wsdlServiceName=\"\" fullEnvelopePassthrough=\"false\"><SOAPVersion>SOAP_1_1</SOAPVersion></soapApi><odataApi/><metaInfo title=\"easy123\" version=\"easy123\" contactName=\"\" contactUrl=\"\" contactEmail=\"\" licenseName=\"\" licenseUrl=\"\"><description>easy a new verison</description><termsOfService></termsOfService></metaInfo><profileOverrides/><capturedHeaders><header name=\"Authorization\"/><header name=\"x-api-key\"/></capturedHeaders><apiRoles/></webservice></Object></Component>"
            },
            "metadata": {
                "title": "easy123",
                "version": "easy123",
                "description": "easy a new verison"
            },
            "environment": {
                "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                "name": "APIKeyEnv",
                "gateway": null,
                "settings": {
                    "restPath": "ws/restapikey",
                    "soapPath": "ws/soapapikey",
                    "soap12Path": "ws/soap12apikey",
                    "odataPath": "ws/odata2apikey"
                },
                "publishedName": "APIKeyEnv"
            },
            "endpoints": [
                {
                    "type": "REST",
                    "basePath": "easy"
                }
            ],
            "keylessPlan": null,
            "plans": [
                {
                    "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                    "name": "Basic Plan",
                    "description": "",
                    "status": "ENABLED",
                    "maxMessageSize": 0,
                    "rateLimit": 0,
                    "rateLimitPeriod": "HOUR",
                    "quotaLimit": 0,
                    "quotaLimitPeriod": "HOUR",
                    "quotaLimitTimezone": "UTC",
                    "applicationCount": 1
                }
            ],
            "executionSettings": {
                "concurrency": 1,
                "retries": 1,
                "connectTimeout": 500,
                "executionTimeout": 260,
                "retryCases": [
                    "CONNECT_TIMEOUT",
                    "EXECUTION_TIMEOUT",
                    "HOST_ROUTING_ERROR",
                    "HOST_NOT_FOUND",
                    "CONNECTION_DROPPED"
                ],
                "subscriptionCacheSize": 1000
            },
            "requiredRoles": []
        }
    }
}
```

**deployedAPIFrom operation**

Request

``` json
query {
    deployedApiFrom(environmentId:"<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>", componentId: "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>") {
        id
    }
}
```

JSON response:

``` json
    "data": {
        "deployedApiFrom": {
            "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>"
        }
    }
```

**deployedAPIs operation**

Request

``` json
query {
    deployedApis {
        id
        component {
            id
            name
            type
            version
            definition
        }
        metadata {
            title
            version
            description
        }
        environment {
            id
            name
            gateway {
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
            settings {
                restPath
                soapPath
                soap12Path
                odataPath
            }
            publishedName
        }
        endpoints {
            type
            basePath
        }
        keylessPlan {
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
        executionSettings {
            concurrency
            retries
            connectTimeout
            executionTimeout
            retryCases
        }
        requiredRoles {
                id
                name
                description
        }
    }
}
```

JSON response

``` json
{
    "data": {
        "deployedApis": 
            {
                "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                "component": {
                    "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                    "name": "Building_API",
                    "type": "WEBSERVICE",
                    "version": 5,
                    "definition": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?><Component xmlns:ns2=\"http://www.boomi.com/connector/annotation\" xmlns:ns3=\"http://exacttarget.com/wsdl/partnerAPI\" xmlns:ns4=\"urn:fault.partner.exacttarget.com\" xmlns:ns5=\"http://schemas.boomi.com/sap/edi_dc40\" xmlns:ns6=\"http://schemas.microsoft.com/2003/10/Serialization/\" deleted=\"false\"><Id>883c0049-85eb-4940-86be-a81e3ecfb14f</Id><Type>webservice</Type><Name>Building_API</Name><Version>5</Version><FolderId name=\"SigiQA\">395694</FolderId><AccountId>sigiqa-A9OX0F</AccountId><Properties/><References/><Description></Description><Object><webservice urlPath=\"test\"><restApi><route processId=\"94ac4570-691e-46ec-9904-b922e6927607\"><overrides urlPath=\"\" objectName=\"bldg\" httpMethod=\"POST\" inputType=\"\" outputType=\"\"/><description></description></route></restApi><soapApi singleWsdlSchema=\"false\" suppressWrappers=\"false\" wsdlNamespace=\"\" wsdlServiceName=\"\" fullEnvelopePassthrough=\"false\"><SOAPVersion>SOAP_1_1</SOAPVersion></soapApi><odataApi/><metaInfo title=\"Building Details\" version=\"2.1\" contactName=\"\" contactUrl=\"\" contactEmail=\"\" licenseName=\"\" licenseUrl=\"\"><description></description><termsOfService></termsOfService></metaInfo><profileOverrides/><capturedHeaders/><apiRoles/></webservice></Object></Component>"
                },
                "metadata": {
                    "title": "Building Details",
                    "version": "2.1",
                    "description": ""
                },
                "environment": {
                    "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                    "name": "Alpha",
                    "gateway": null,
                    "settings": {
                        "restPath": "ws/rest",
                        "soapPath": "ws/soap",
                        "soap12Path": "ws/soap12",
                        "odataPath": "ws/odata2"
                    },
                    "publishedName": null
                },
            }
                "endpoints": [
                    {
                        "type": "REST",
                        "basePath": "test"
                    }
                ],
                "keylessPlan": null,
                "executionSettings": null,
                "requiredRoles": []
            },
            {
                "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                "component": {
                    "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                    "name": "Beta_Test",
                    "type": "WEBSERVICE",
                    "version": 15,
                    "definition": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?><Component xmlns:ns2=\"http://www.boomi.com/connector/annotation\" xmlns:ns3=\"http://exacttarget.com/wsdl/partnerAPI\" xmlns:ns4=\"urn:fault.partner.exacttarget.com\" xmlns:ns5=\"http://schemas.boomi.com/sap/edi_dc40\" xmlns:ns6=\"http://schemas.microsoft.com/2003/10/Serialization/\" deleted=\"false\"><Id>f9ee6c1b-872f-4ad2-a770-003c4c580a81</Id><Type>webservice</Type><Name>APIM1883_Test</Name><Version>15</Version><FolderId name=\"SigiQA\">395694</FolderId><AccountId>sigiqa-A9OX0F</AccountId><Properties/><References/><Description></Description><Object><webservice urlPath=\"apim1883\"><restApi><route processId=\"e597102a-b453-44ed-80af-c96d687c6d91\"><overrides urlPath=\"\" objectName=\"splitXML\" httpMethod=\"POST\" inputType=\"\" outputType=\"\" pageSize=\"2\"/><description></description></route></restApi><soapApi singleWsdlSchema=\"false\" suppressWrappers=\"false\" wsdlNamespace=\"\" wsdlServiceName=\"\" fullEnvelopePassthrough=\"false\"><SOAPVersion>SOAP_1_1</SOAPVersion></soapApi><odataApi/><metaInfo title=\"Test APIM-1883\" version=\"3.0\" contactName=\"\" contactUrl=\"\" contactEmail=\"\" licenseName=\"\" licenseUrl=\"\"><description></description><termsOfService></termsOfService></metaInfo><profileOverrides/><capturedHeaders/><apiRoles/></webservice></Object></Component>"
            },
            
                "metadata": {
                    "title": "Test Beta",
                    "version": "3.0",
                    "description": ""
                },
                "environment": {
                    "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>,
                    "name": "Production",
                    "gateway": {
                        "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                        "name": "beta",
                        "deleted": false,
                        "defaultApiExecutionSettings": {
                            "concurrency": 2,
                            "retries": 1,
                            "connectTimeout": 600,
                            "executionTimeout": 300,
                            "retryCases": [
                                "CONNECT_TIMEOUT",
                                "EXECUTION_TIMEOUT",
                                "HOST_ROUTING_ERROR",
                                "HOST_NOT_FOUND",
                                "CONNECTION_DROPPED"
                            ],
                            "subscriptionCacheSize": 1000
                        }
                    },
                    "settings": {
                        "restPath": "ws/rest",
                        "soapPath": "ws/soap",
                        "soap12Path": "ws/soap12",
                        "odataPath": "ws/odata2"
                    },
                    "publishedName": "Production on Admin"
                },
                "endpoints": [
                    {
                        "type": "REST",
                        "basePath": "beta"
                    }
                ],
                "keylessPlan": {
                    "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                    "name": "Silver",
                    "description": "",
                    "status": "ENABLED",
                    "maxMessageSize": 102400,
                    "rateLimit": 10,
                    "rateLimitPeriod": "MIN",
                    "quotaLimit": 30000,
                    "quotaLimitPeriod": "MONTH",
                    "quotaLimitTimezone": "UTC",
                    "applicationCount": 1
                },
                    {
                        "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                        "name": "Test Plan",
                        "description": "",
                        "status": "ENABLED",
                        "maxMessageSize": 0,
                        "rateLimit": 0,
                        "rateLimitPeriod": "HOUR",
                        "quotaLimit": 0,
                        "quotaLimitPeriod": "HOUR",
                        "quotaLimitTimezone": "UTC",
                        "applicationCount": 0
                    }
                ,
                "executionSettings": null,
                "requiredRoles": [
                    {
                        "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                        "name": "role1",
                        "description": ""
                    }
                ]
            }
        
    
}
```

**DeployedApiSubscription operation**

Request

To query a subscription using an API key ID:

``` json
query {
    deployedApiSubscription(apiKeyId: "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>")
    {
        apiKeyId 
        status
        application {
                id
                name
                status
            }
            plan {
                id
                name
                status
            }
        startDate
        expirationDate
        approvalDate
        consumerMessage
        producerMessage
        generatedBy
        generatedDate
        statusChangedBy
        statusChangedDate
    }
}
```

JSON response

``` json
{
    "data": {
        "deployedApiSubscription": {
            "apiKeyId": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
            "status": "ACCEPTED",
            "application": {
                "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                "name": "myApp",
                "status": "ENABLED"
            },
            "plan": {
                "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                "name": "testPlan",
                "status": "ENABLED"
            },
            "startDate": "2021-10-29T01:00:00.000Z",
            "expirationDate": "2021-11-30T11:31:00.000Z",
            "approvalDate": null,
            "consumerMessage": null,
            "producerMessage": null,
            "generatedBy": "admin@boomi.com",
            "generatedDate": "2021-10-29T01:00:05.000Z",
            "statusChangedBy": null,
            "statusChangedDate": null
        }
    }
}
```

To query a subscription using a Deployed API ID:

``` json
query {
    deployedApi(id: "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>") {
        id
        subscriptions {
            apiKeyId 
            application {
                id
                name
                status
            }
            plan {
                id
                name
                status
            }
            status
            startDate
            expirationDate
            approvalDate
            consumerMessage
            producerMessage
            generatedBy
            generatedDate
            statusChangedBy
            statusChangedDate
        }
    }
}
```

**deployedApiUpdate operation**

For a GraphQL request, send a request to `https://platform.boomi.com/graphql` with the following header: `X-Account` `accountId`

Request:

Request to update executionSettings for Deployed API

``` json
mutation 
deployedApiUpdate($deployedApi:DeployedApiInput!) {
    deployedApiUpdate(
        deployedApi:$deployedApi
    )
    {
        id 
        executionSettings {
            concurrency
            retries
            connectTimeout
            executionTimeout
            retryCases
            subscriptionCacheSize
        }
    }
}
{
    "deployedApi": {
          "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
          "executionSettings": {
              "concurrency": 50,
              "retries": 3,
              "connectTimeout": 30,
              "executionTimeout": 600,
              "retryCases": [
                  "CONNECTION_DROPPED",
                  "HOST_ROUTING_ERROR"
              ]
              "subscriptionCacheSize": 1000
        }
    }
}
```

JSON response:

``` json
{
    "data": {
        "deployedApiUpdate": {
            "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
            "executionSettings": {
                "concurrency": 50,
                "retries": 3,
                "connectTimeout": 30,
                "executionTimeout": 600,
                "retryCases": [
                    "CONNECTION_DROPPED",
                    "HOST_ROUTING_ERROR"
                ]
                "subscriptionCacheSize": 1000
            }
        }
    }
}
```


**deployedApiSubscriptionCreate operation**

For a GraphQL request, send a request to `https://platform.boomi.com/graphql` with the following header: `X-Account` `accountId`

Request:

Request to create an API subscription.

``` json
mutation deployedApiSubscriptionCreate($deployedApiSubscription:DeployedApiSubscriptionCreateInput!) {
    deployedApiSubscriptionCreate(
        deployedApiSubscription:$deployedApiSubscription
    )
    {
        apiKeyId 
        status
        startDate
        expirationDate
        approvalDate
        consumerMessage
        producerMessage
        generatedBy
        generatedDate
        statusChangedBy
        statusChangedDate
    }
}
```

``` json
{
    "deployedApiSubscription": {
        "deployedApiId": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
        "applicationId": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
        "planId": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
        "expirationDate": "2021-11-30T11:31:45"
    }
}
```

JSON response:

``` json
{
    "data": {
        "deployedApiSubscriptionCreate": {
            "apiKeyId": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
            "status": "ACCEPTED",
            "startDate": "2021-11-04T23:39:00.000Z",
            "expirationDate": "2021-11-30T11:31:00.000Z",
            "approvalDate": null,
            "consumerMessage": null,
            "producerMessage": null,
            "generatedBy": "admin@boomi.com",
            "generatedDate": "2021-11-04T23:39:01.339Z",
            "statusChangedBy": null,
            "statusChangedDate": null
        }
    }
}
```

**deployedApiSubscriptionUpdate operation**

For a GraphQL request, send a request to `https://platform.boomi.com/graphql` with the following header: `X-Account` `accountId`

Request:

Request to activate and deactivate an API subscription.

``` json
Sample Request:
mutation deployedApiSubscriptionUpdate($deployedApiSubscription:DeployedApiSubscriptionUpdateInput!) {
    deployedApiSubscriptionUpdate(
        deployedApiSubscription:$deployedApiSubscription
    )
    {
        apiKeyId 
        status
        startDate
        expirationDate
        approvalDate
        consumerMessage
        producerMessage
        generatedBy
        generatedDate
        statusChangedBy
        statusChangedDate
    }
}
```

``` json
{
    "deployedApiSubscription": {
        "apiKeyId": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
        "status": "SUSPENDED"
    }
}
```

JSON response:

``` json
{
    "data": {
        "deployedApiSubscriptionUpdate": {
            "apiKeyId": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
            "status": "SUSPENDED",
            "startDate": "2021-11-17T13:49:00.000Z",
            "expirationDate": "2021-12-30T00:00:00.000Z",
            "approvalDate": null,
            "consumerMessage": null,
            "producerMessage": null,
            "generatedBy": "admin@boomi.com",
            "generatedDate": "2021-11-17T13:49:09.000Z",
            "statusChangedBy": "admin@boomi.com",
            "statusChangedDate": "2021-11-17T14:21:03.000Z"
        }
    }
}
```

**deployedApiSubscriptionDelete operation**

For a GraphQL request, send a request to `https://platform.boomi.com/graphql` with the following header: `X-Account` `accountId`.

Request:

Request to delete an API subscription.

``` json
mutation {
    deployedApiSubscriptionDelete(apiKeyId: "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>")
}
```

JSON response:

``` json
{
    "data": {
        "deployedApiSubscriptionDelete": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>"
    }
}
```

**deployedApiSubscriptionRegenerateApiKey**

For a GraphQL request, send a request to `https://platform.boomi.com/graphql` with the following header: `X-Account` `accountId`.

Request to regenerate an API key:

``` json
mutation deployedApiSubscriptionRegenerateApiKey($apiKeyId:ID!) {
    deployedApiSubscriptionRegenerateApiKey(
        apiKeyId:$apiKeyId
    )
    {
        apiKeyId 
        status
        startDate
        expirationDate
        approvalDate
        consumerMessage
        producerMessage
        generatedBy
        generatedDate
        statusChangedBy
        statusChangedDate
    }
}
```

JSON response:

``` json
{
  "apiKeyId": "<xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx>"
}
```
## Filtering

Sample request to filter by Gateway ID:

```
query {
    deployedApis(filter: {
        gatewayId: "a5956051-2a89-4e10-afc6-81ede09a63e3"
    }) {
        id
        component {
            id
            name
            type
        }
        metadata {
            title
            version
            description
        }
        authSource {
            id
            name
            __typename
        }
        environment {
            id
            name
            gateway {
                id
                name
                deleted
                version
            }
            publishedName
        }
        endpoints {
            type
            basePath
            contextPath
        }
        keylessPlan {
            id
            name
            status
            applicationCount
        }
        plans {
            id
            name
            status
            applicationCount
        }
    }
}

```

## Audit log usage 

``` json
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
              "argument" : ["api-deployment"],
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

If you want to see audit log activity for subscriptions, substitute the property "type" with "api-key" in the above query.