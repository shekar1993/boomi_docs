# Deployed API Application category 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-b9419b37-2a96-4cd9-8afa-d020d7b37b58"/>
</head>


The Deployed API Application category is used to query, create, update, and delete an application.

## Supported operations 
The Deployed API Application category is supported in the following operations:

| Operation                                             | QUERY           | MUTATION         |
|-------------------------------------------------------|-----------------|------------------|
| deployedApiApplication (Get Deployed API Application Using ID) | Supported (✅)    | Not supported (X) |
|deployedApiApplications (Get all Deployed API Applications) | Supported (✅)    | Not supported (X) 
| deployedApiApplicationCreate                          | Not supported (X) | Supported (✅)    |
| deployedApiApplicationDelete                          | Not supported (X) | Supported (✅)    |
| deployedApiApplicationUpdate                          | Not supported (X) | Supported (✅)    |


## Mutation syntax

deployedApiApplication

``` 
deployedApiApplicationCreate($deployedApiApplication:DeployedApiApplicationCreateInput!): DeployedApiApplication!
```

## Query syntax

``` 
deployedApiApplication(id: ID!): DeployedApiApplication!
```

**Query all applications**

```
deployedApiApplications(filter: DeployedApiApplicationFilter): [DeployedApiApplication!]!
```
Query input syntax

```
input DeployedApiApplicationFilter
{
gatewayId: ID
}
```


## Input and return fields syntax 

Mutation input syntax:

``` 
input DeployedApiApplicationCreateInput {
    gatewayId: ID
    name: String!
    ownerName: String
    ownerUserName: String
    ownerEmail: String
    status: DeployedApiApplicationStatus!
    contactPhone: String
    companyName: String
    companyWebsite: String
    notes: String
    description: String
}
```

Return fields syntax:

``` 
type DeployedApiApplication 
{
    id: ID!
    name: String!
    gateway: Gateway 
    status: DeployedApiApplicationStatus!
    ownerName: String
    ownerUserName: String
    ownerEmail: String
    contactPhone: String
    companyName: String
    companyWebsite: String
    notes: String
    description: String
    subscriptions: [DeployedApiSubscription!]
}

enum DeployedApiApplicationStatus 
{
    ENABLED,
    DELETED,
    SUSPENDED_PUBLISHER,
    SUSPENDED_CONSUMER
}

enum DeployedApiApplicationErrorCode 
{
    APPLICATION_ID_EMPTY
    APPLICATION_NOT_FOUND
    GATEWAY_NOT_FOUND
    APPLICATION_NAME_EMPTY
    APPLICATION_STATUS_EMPTY
    OWNER_NAME_EMPTY
    EMAIL_NOT_VALID
    EMAIL_ID_EMPTY
    DUPLICATE_APPLICATION_NAME 
    APPLICATION_NAME_LONG 
    EMAIL_ID_LONG 
    OWNER_NAME_LONG
    OWNER_USERNAME_LONG 
    DESCRIPTION_TOO_LONG 
    PHONE_NO_LONG 
    WEBSITE_NAME_LONG 
    NOTES_TOO_LONG 
    COMPANY_NAME_LONG
    PHONE_NOT_VALID 
    WEBSITE_NOT_VALID 
}

```

|Field|Type|Description|
|-----|----|-----------|
|id|ID|The unique auto-generated ID of the Application.|
|name|string|Application's name.|
|gateway|gateway|This is the Gateway on which to create the application.|
|status|DeployedApiApplicationStatus|Application's status.|
|ownerName|string|Optional. Application owner name.|
|ownerUserName|string|Optional. Application owner's user name.|
|ownerEmail|string|Optional. Application owner email.|
|contactPhone|string|Application owner phone number.|
|companyName|string|Application company name.|
|companyWebsite|string|Application company website.|
|notes|string|Notes about the application.|
|description|string|Application description.|
|subscriptions|DeployedApiSubscription|Subscriptions that belong to the application.|
|ENABLED|Member of DeployedApiApplicationStatus|The application is enabled and any live subscriptions it has can be used.|
|DELETED|Member of DeployedApiApplicationStatus|Indicates that the application is deleted.|
|SUSPENDED\_PUBLISHER|Member of DeployedApiApplicationStatus|If the application is suspended\_publisher then its subscriptions are considered invalid.|
|SUSPENDED\_CONSUMER|Member of DeployedApiApplicationStatus|If the application is suspended\_consumer then its subscriptions are considered invalid.|

## GraphQL implementation 

For a GraphQL request, send a `POST` request to `https://platform.boomi.com/graphql` with the following `X-Account` header: `accountId`

Request:

``` 
mutation deployedApiApplicationCreate ($deployedApiApplication: DeployedApiApplicationCreateInput!) { deployedApiApplicationCreate (deployedApiApplication: $deployedApiApplication) { id name gateway { id name } status ownerName ownerUserName ownerEmail contactPhone companyName companyWebsite notes description } }
```

``` 
{
  "deployedApiApplication": {
    "gatewayId": "xxxxxxxx-ax14-4e00-8xxf-d88d2xx0d4a8",
    "name": "Jiaqi Test Application",
    "ownerName": "Jiaqi",
    "ownerUserName": "jiaqiAdmin",
    "ownerEmail": "jiaqi@xxx.com",
    "status": "ENABLED",
    "contactPhone": "123-456-7890",
    "companyName": "Boomi",
    "companyWebsite": "Https://boomi.com",
    "notes": "Test Application",
    "description": "Example Application"
  }
}
```

For a JSON response, send the request with the following HTTP header:

`Accept: application/json`

JSON response:

``` 
{
    "data": {
        "deployedApiApplicationCreate": {
            "id": "f6b88b4d-b25a-49f7-8466-ff06012e3d56",
            "name": "Jiaqi Test Application",
            "gateway": {
                "id": "83c796a0-ae14-4e36-8f8f-d88d2db0d4a8",
                "name": "SparklePonyGW2Nodes"
            },
            "status": "ENABLED",
            "ownerName": "Jiaqi",
            "ownerUserName": "jiaqiAdmin",
            "ownerEmail": "jiaqi@xxx.com",
            "contactPhone": "123-456-7890",
            "companyName": "Boomi",
            "companyWebsite": "Https://boomi.com",
            "notes": "Test Application",
            "description": "Example Application"
        }
    }
}
```

**QUERY Operation**

The following example returns the application information by application id.

For a GraphQL request, send a `POST` request to `https://platform.boomi.com/graphql` with the following `X-Account` header: `accountId`

``` 
query {
 deployedApiApplication(id: "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx>") {
 id
name
gateway {
id
name
deleted

}

status
ownerName
ownerUserName
ownerEmail
contactPhone
companyName
companyWebsite
notes
description
}

}

```

Sample JSON response:

``` 
{
"data": {
"deployedApiApplication": {
"id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx>",
"name": "app",
"gateway": {
"id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx>",
"name": "test gateway",
"deleted": false
},
"status": "ENABLED",
"ownerName": "admin",
"ownerUserName": " ",
"ownerEmail": "admin@boomi.com",
"contactPhone": "3435666789",
"companyName": null,
"companyWebsite": null,
"notes": null,
"description": null
}
}
}
```

**Update Operation:**

The following example updates the application information.

For a GraphQL request, send a `POST` request to `https://platform.boomi.com/graphql` with the following `X-Account` header: `accountId`

``` 
mutation deployedApiApplicationUpdate ($deployedApiApplication: DeployedApiApplicationUpdateInput!) {
    deployedApiApplicationUpdate (deployedApiApplication: $deployedApiApplication) {
        id
        name
        gateway {
            id
            name
            deleted
            externalUrl
            externalHealthCheckPath
        }
        status
        ownerName
        ownerUserName
        ownerEmail
        contactPhone
        companyName
        companyWebsite
        notes
        description
    }
}
```

``` 
  "deployedApiApplication": {
    "applicationId": "f6b88b4d-xxxx-49f7-8466-ff06012e3d56",
    "name": "Jiaqi Test Application 2222",
    "ownerName": "Jiaqi 222",
    "ownerUserName": "jiaqiAdmin 222",
    "ownerEmail": "jiaqi@xxx.com",
    "status": "ENABLED",
    "contactPhone": "123-456-7890",
    "companyName": "Boomi",
    "companyWebsite": "Https://boomi.com",
    "notes": "Test Application",
    "description": "Example Application"
  }

```

Response:

``` 
{
    "data": {
        "deployedApiApplicationUpdate": {
            "id": "f6b88b4d-xxxx-49f7-8466-ff06012e3d56",
            "name": "Jiaqi Test Application 2222",
            "gateway": {
                "id": "83c796a0-xx54-9t87-8f8f-d54d2db0d4a8",
                "name": "SparklePonyGW2Nodes",
                "deleted": false,
                "externalUrl": "https://xxxxx.xxxxx.xxxx.com:8190",
                "externalHealthCheckPath": "_admin/status"
            },
            "status": "ENABLED",
            "ownerName": "Jiaqi 222",
            "ownerUserName": "jiaqiAdmin 222",
            "ownerEmail": "jiaqi@xxx.com",
            "contactPhone": "123-456-7890",
            "companyName": "Boomi",
            "companyWebsite": "Https://boomi.com",
            "notes": "Test Application",
            "description": "Example Application"
        }
    }
}
```

**Delete Operation:**

The following example deletes an application.

For a GraphQL request, send a `POST` request to `https://platform.boomi.com/graphql` with the following `X-Account` header: `accountId`

``` 
mutation deployedApiApplicationDelete ($deployedApiApplicationId: ID!) {
    deployedApiApplicationDelete (deployedApiApplicationId: $deployedApiApplicationId)
}
{
  "deployedApiApplicationId": "f6b88b4d-xxxx-49f7-xxxx-ff06012e3d56"
}
```

Response:

``` 

{
    "data": {
        "deployedApiApplicationDelete": "f6b88b4d-xxxx-49f7-xxxx-ff06012e3d56"
    }
}
```
## Filtering

Sample request to filter by Gateway ID:

```

query {
    deployedApiApplications(filter: {
        gatewayId: "dd3307c4-853e-4642-865f-4bf619bdd2f1"
    })  {
        id
        name
        gateway {
            id
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
              "argument" : ["api-application"],
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
