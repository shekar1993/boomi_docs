# Broker Basic Authentication Migration category 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-d504dece-32b0-4f19-8ad5-ab114cc78201"/>
</head>


The Broker Basic Authentication Migration category of operations is used to convert Broker-based Basic Authentication to Basic Authentication on the Gateway. You can also convert Broker-based Basic Authentication to Basic Authentication on the Gateway from the [Authentication page](/docs/Atomsphere/API%20Management/Topics/c-api-External_Authentication_32100fb2-46f2-4384-a183-720e5bf1caba.md).

## Supported operations 

The Broker Basic Authentication Migration category is supported in the following operations:

|Operation|QUERY|MUTATION|
|---------|-----|--------|
|Auth Source Broker Basic Migrate|x Not supported|✅ Supported |

## Mutation syntax 

Auth Source Broker Basic Migrate

``` 
authSourceBrokerBasicMigrate(id: ID!): AuthSourceBasic!
```

## Input and return fields syntax 

Mutation input syntax

``` 
authSourceBrokerBasicMigrate(id: ID!): AuthSourceBasic!
```

Return fields syntax

``` 
type AuthSourceBasic implements AuthenticationSource {
    id: ID!
    name: String!
    description: String
    roles: [AuthSourceRole]
    users: [AuthSourceBasicUser]
    groups: [AuthSourceBasicGroup]
}

type AuthSourceBasicUser {
    id: ID!
    name: String!
    enabled: Boolean
    groups: [ID!]
}

type AuthSourceBasicGroup {
    id: ID!
    name: String!
    description: String
    roles: [ID!]
}
```

## GraphQL implementation 

**Auth Source Broker Basic Migrate operation**

For a GraphQL request, send a request to https://platform.boomi.com/graphql with the following `X-Account` header: `accountId`

Request:

``` 
mutation {
    authSourceBrokerBasicMigrate(id: "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx>")
    {
        id 
        name 
        description
        roles {
            id 
            name 
            description
        }
        users {
            id 
            name 
            enabled
            groups
        }
        groups {
            id 
            name 
            description
            roles
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
        "authSourceBrokerBasicMigrate": {
            "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx>",
            "name": "Broker Basic Test 1",
            "description": "",
            "roles": [
                {
                    "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx>",
                    "name": "role1",
                    "description": ""
                }
            ],
            "users": [
                {
                    "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx>",
                    "name": "user1",
                    "enabled": true,
                    "groups": [
                        "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx>"
                    ]
                }
            ],
            "groups": [
                {
                    "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx>",
                    "name": "group1",
                    "description": "Grp",
                    "roles": [
                        "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx>"
                    ]
                }
            ]
        }
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
              "argument" : ["api-basic_auth_migration"],
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