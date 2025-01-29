# Runtime category 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-f3b6931f-e8e5-4c57-9461-ab21db85093c"/>
</head>


You can use the Runtime category of operations to return the Atom information for a specific environment during the environment migration.

## Supported operations 

The Runtime category is supported in the following operations:

| Operation | QUERY      | MUTATION        |
|-----------|------------|-----------------|
| Runtime   | ✅ Supported | X Not supported |


## Query syntax 

``` 
{environmentMigrationContainers {environmentMigrationContainers}}
```

## Return fields syntax 

``` 
{
    environmentMigrationContainers {
        containerId: String!
        containerName: String!
        authType: String
        webserviceType: String
    }
}
```

|Field|Type|Description|
|-----|----|-----------|
|containerId|*string*|The ID of the Atom.|
|containerName|*string*|The name of the Atom.|
|authType|*string*|The **Authentication Type** specified on the **Shared Web Server** panel for the Atom in Atom Management.|
|webserviceType|*string*|The **API Type** specified on the **Shared Web Server** panel for the Atom in Atom Management.|

## GraphQL implementation 

The following example queries the runtime.

For a GraphQL request, send a request to https://platform.boomi.com/graphql with the following `X-Account` header: `accountId`

Request:

``` 
query{
    environmentMigrationContainers(environmentId: "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>") {
        containerId
        containerName
        authType
        webserviceType
    }
}
```

For a JSON response, send the request with the following HTTP header:

`Accept: application/json`

JSON response:

``` 
{
    "data": {
        "environmentMigrationContainers": [
            {
                "containerId": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                "containerName": "Test1",
                "authType": "CLIENT_CERT",
                "webserviceType": "ADVANCED"
            },
            {
                "containerId": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                "containerName": "Test2",
                "authType": "GATEWAY",
                "webserviceType": "ADVANCED"
            }
        ]
    }
}
```