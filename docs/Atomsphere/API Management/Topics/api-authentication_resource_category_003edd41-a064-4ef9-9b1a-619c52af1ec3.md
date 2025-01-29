# Authentication Source category 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-003edd41-a064-4ef9-9b1a-619c52af1ec3"/>
</head>


Use the authentication source category of operations to return and update details of authentication sources.

## Supported operations 

The following operations support the application source category:

| Operation                                          | QUERY          | MUTATION       |
|----------------------------------------------------|----------------|----------------|
| Authentication source                              | ✅ Supported    | x Not supported |
| Authentication source with ID                      | ✅ Supported    | x Not supported |
| Update redirect URIs for authentication source     | x Not supported| ✅ Supported    |
| Create JWT authentication source                   | x Not supported| ✅ Supported    |
| Update JWT authentication source                   | x Not supported| ✅ Supported    |
| Delete authentication source                       | x Not supported| ✅ Supported    |


## Query syntax 

``` 
authSources: [AuthSource!]
authSource(id: ID!) AuthSource!
```

## Mutation syntax

``` 
authSourceRedirectUrisUpdate(authSourceId: ID!, redirectUris: [String!]): AuthSource!
```

``` 
authSourceJWTCreate(authSourceJWT: AuthSourceJWTCreateInput!): AuthSourceJWT!
```

``` 
authSourceJWTUpdate(authSourceJWT: AuthSourceJWTUpdateInput!): AuthSourceJWT! authSourceDelete(id: ID!): ID!
```

## Response fields 

```

interface AuthSource {
id: ID!
name: String!
description: String
roles: [AuthSourceRole!]
}

type AuthSourceRole {
id: ID!
name: String!
description: String
}

type AuthSourceJWT implements AuthSource {
id: ID!
name: String!
description: String
roles: [AuthSourceRole!] @resolve
issuer: String
jwksUrl: String
groupsAttribute: String
audiences: [String!]
issuerError: IssuerError
userIdClaim: String!
}

type IssuerError {
code: IssuerErrorCode!
detail: String!
}

type AuthSourceBasic implements AuthSource {
id: ID!
name: String!
description: String
roles: [AuthSourceRole!] @resolve
users: [AuthSourceBasicUser!] @resolve
groups: [AuthSourceBasicGroup!] @resolve
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

type AuthSourceBasicBroker implements AuthSource {
id: ID!
name: String!
description: String
brokerId: String
redirectUris: [String!]
users: [AuthSourceBasicUser!] @resolve
groups: [AuthSourceBasicGroup!] @resolve
roles: [AuthSourceRole!] @resolve
}

type AuthSourceOpenID implements AuthSource {
id: ID!
name: String!
description: String
brokerId: String
redirectUris: [String!]
alias: String
standardFlowEnabled: Boolean
implicitFlowEnabled: Boolean
authUrl: String
tokenUrl: String
logoutUrl: String
userInfoUrl: String
clientId: String
clientSecret: String
issuer: String
defaultScopes: String
promptType: String
groupsAttribute: String
roles: [AuthSourceRole!] @resolve
}

{
id: ID!
name: String!
description: String
brokerId: String
redirectUris: [String!]
alias: String
singleSignOnServiceUrl: String
singleLogoutServiceUrl: String
nameIdPolicyFormat: AuthSourceSAMLNameIdPolicyFormat
httpPostBindingResponse: Boolean
httpPostBindingRequest: Boolean
signAuthenticationRequests: Boolean
forceAuthentication: Boolean
groupsAttribute: String
roles: [AuthSourceRole!] @resolve
}

enum AuthSourceSAMLNameIdPolicyFormat {
UNSPECIFIED
PERSISTENT
EMAIL
KERBEROS
X_509_SUBJECT_NAME
WINDOWS_DOMAIN_QUALIFIED_NAM

enum AuthSourceType {
   OPENID
   SAML
   BASIC
   JWT
   BASIC_GATEWAY
}
```

Schema to create a new JWT authentication source.

``` 

input AuthSourceJWTCreateInput {
    name: String!
    issuer: String!
    details: AuthSourceJWTDetailsInput
}

input AuthSourceJWTDetailsInput {
    description: String
    groupsAttribute: String
    roles: [String!]
    audiences: [String!]
    userIdClaim: String
}

enum IssuerErrorCode {
    MISSING_JWKS
    URL_INVALID
    UNKNOWN_HOST
    COULD_NOT_PARSE_CONFIG
    REQUEST_TIMEOUT
    REMOTE_HOST_RESPONDED_WITH_ERROR
}
```

Schema to update an existing JWT authentication source.

``` 
input AuthSourceJWTUpdateInput {
    id: ID!
    name: String
    issuer: String
    details: AuthSourceJWTDetailsInput
}
```

**A JWT authentication source that can be used to secure APIs or Developer Portals.**

| Field           | Type           | Description                                                                                                      |
|-----------------|----------------|------------------------------------------------------------------------------------------------------------------|
| id              | ID             | The authentication source ID.                                                                                    |
| name            | string         | The name of the authentication source.                                                                           |
| description     | string         | The description of the authentication source.                                                                    |
| roles           | authSourceRole | The roles associated with the authentication source.                                                             |
| issuer          | string         | The URL of the IDP that issues JWT.                                                                              |
| jwksUrl         | string         | The JWK URI that holds the keys to verify JWT.                                                                   |
| groupsAttribute | string         | The attribute name in a JWT that holds a list of groups to which the user belongs.                               |
| audiences       | string         | The list of the intended audience of a JWT.                                                                      |
| issuerError     | IssuerError    | The error, if any, received while testing IDP.                                                                   |
| userIdClaim     | string         | The claim within the JWT that should be used to retrieve the user ID. If the specified claim cannot be located in the JWT, the "sub" claim is used instead. |




Table 1. AuthSourceJWT Settings


**A Gateway-based Basic authentication source that can be used to secure APIs or Developer Portals.**

| Field              | Type                 | Description                                             |
|--------------------|----------------------|---------------------------------------------------------|
| id                 | ID                   | The authentication source ID.                           |
| name               | string               | The name of the authentication source.                  |
| description        | string               | The description of the authentication source.           |
| roles              | AuthSourceRole       | The roles associated with the authentication source.    |
| users              | AuthSourceBasicUser  | The users associated with the authentication source.    |
| groups             | AuthSourceBasicGroup | The groups that users are part of.                      |
| **AuthSourceBasicUser**                                                                                                                              |
| id                 | ID                   | The user ID.                                            |
| name               | string               | The user name.                                          |
| enabled            | boolean              | Indicates if the user is active.                        |
| groups             | ID                   | The group IDs that the user is part of.                 |
| **AuthSourceBasicGroup**                                                                                                                             |
| id                 | ID                   | The group ID.                                           |
| name               | string               | The group name.                                         |
| description        | string               | The group description.                                  |
| roles              | ID                   | The roles tied to the group.                            |

Table 2. AuthSourceBasic Settings

**A Broker-based basic authentication source that can be used to secure APIs or Developer Portals.**

| Field           | Type                 | Description                                               |
|-----------------|----------------------|-----------------------------------------------------------|
| id              | ID                   | The authentication source ID.                             |
| name            | string               | The name of the authentication source.                    |
| description     | string               | The description of the authentication source.             |
| brokerId        | string               | ID of the Broker that the authentication source is attached to.|
| redirectUrls    | string               | The redirect URIs configured in the IDP.                  |
| users           | AuthSourceBasicUser  | The users associated with the authentication source.      |
| groups          | AuthSourceBasicGroup | The groups that users belong to.                          |
| roles           | AuthSourceRole       | The roles associated with the authentication source.      |


Table 3. AuthSourceBasicBroker Settings

**An OpenID authentication source that can be used to secure APIs or Developer Portals.**

| Field               | Type           | Description                                                                                         |
|---------------------|----------------|-----------------------------------------------------------------------------------------------------|
| id                  | ID             | The authentication source ID.                                                                       |
| name                | string         | The name of the authentication source.                                                              |
| description         | string         | The description of the authentication source.                                                       |
| brokerId            | string         | ID of the Broker that the authentication source is attached to.                                     |
| redirectUrls        | string         | The redirect URIs configured in the IDP.                                                            |
| alias               | string         | The alias that will be sent in the token URL to identify the issuer.                                |
| standardFlowEnabled | boolean        | Indicates whether Authorization Code Flow is enabled.                                               |
| implicitFlowEnabled | boolean        | Indicates whether Implicit Flow is enabled.                                                         |
| authUrl             | string         | The authentication URL of the IDP.                                                                  |
| tokenUrl            | string         | The token URL of the IDP.                                                                           |
| logoutUrl           | string         | The logout URL configured in the IDP.                                                               |
| userInfoUrl         | string         | The user info URL configured in the IDP.                                                            |
| clientId            | string         | The client ID configured in the IDP.                                                                |
| clientSecret        | string         | The client secret that is configured in the IDP.                                                    |
| issuer              | string         | The issuer URL.                                                                                     |
| defaultScopes       | string         | The scopes to be included in token request.                                                         |
| promptType          | string         | The login prompt types for renewing access tokens.                                                  |
| groupsAttribute     | string         | The attribute name in the token that holds a list of groups to which the user belongs.              |
| roles               | AuthSourceRole | The roles associated with the authentication source.                                                |


Table 4. AuthSourceOpenID Settings

**A SAML authentication source that can be used to secure APIs or Developer Portals.**

| Field                           | Type                                 | Description                                                                                             |
|---------------------------------|--------------------------------------|---------------------------------------------------------------------------------------------------------|
| id                              | ID                                   | The authentication source ID.                                                                           |
| name                            | string                               | The name of the authentication source.                                                                  |
| description                     | string                               | The description of the authentication source.                                                           |
| brokerId                        | string                               | ID of the Broker that the authentication source is attached to.                                         |
| redirectUrls                    | string                               | The redirect URIs configured in the IDP.                                                                |
| alias                           | string                               | The alias that will be sent in a token URL to identify the issuer.                                      |
| singleSignOnServiceUrl          | string                               | The service URL of the IDP.                                                                             |
| singleLogoutServiceUrl          | string                               | The logout URL configured in the IDP.                                                                   |
| nameIdPolicyFormat              | AuthSourceSAMLNameIdPolicyFormat     | The name identifier formats supported by the IDP.                                                       |
| httpPostBindingResponse         | boolean                              | Indicates whether to use Redirect Binding for responses sent to the identity provider.                  |
| httpPostBindingRequest          | boolean                              | Indicates whether to use Redirect Binding when requesting information from the identity provider.       |
| signAuthenticationRequests      | boolean                              | Indicates whether to sign requests sent to the identity provider.                                       |
| forceAuthentication             | boolean                              | Indicates whether to force users to enter their credentials for the IDP even if they are logged in.     |
| groupsAttribute                 | string                               | The attribute name in the token that holds a list of groups to which the user belongs.                  |
| roles                           | AuthSourceRole                       | The roles associated with the authentication source.                                                    |


Table 5. AuthSourceSAML Settings

For many error scenarios in the JWT authentication source, create and update GraphQL APIs. For example, messages appear about valid character length, missing names, duplicate roles, and so on.

## GraphQL implementation

To query the currently allowed redirect URIs or set the allowed redirect URIs, send a request with a mutation and GUID for the authentication source.

-   QUERY operation

    Request: Example query that takes an ID and retrieves information for that specific authentication source.

    ```
    query {
       authSource(id: "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>") {
           name
           _typename
           redirectUris
       }
    }
    
    ```

    Response:

    ```
    {
       "data": {
           "authSource": {
               "name": "BizCo Authentication Source",
               "_typename": "AuthSourceOpenID",
               "redirectUris": [
                   "https://biz.co:18077/*"
               ]
           }
       }
    }
    
    ```

    Request: Example query that takes no arguments and retrieves all the information on the account.

    ``` {#codeblock_awz_xsb_ppb}
    query {
        authSources {
            id
            name
            _typename
            redirectUris
        }
    }
    
    ```

    Response:

    ``` 
    {
    "data": {
        "authSources": [
            {
                "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                "name": "BizCo Authentication Source",
                "_typename": "AuthSourceOpenID",
                "redirectUris": [
                  "https://biz.co:18077/*"
                  ]
               },
               {
                "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                "name": "Staging auth source",
                "_typename": "AuthSourceBasicBroker",
                "redirectUris": [
                  "https://staging.biz.co:18077/*"
                ]
              }
            ]
        }
    }
    
    ```

-   Update operation

    When using the UPDATE operation, specifying an empty or null array removes any redirect URIs you might have set previously. If that happens, the authentication source uses the wildcard default for allowed URIs. The URI inputs must be valid URIs that do not contain any fragments. The hostname in the URI must be lower case. A single wildcard character is allowed in the URI, but ensure you locate it at the end. If you also use the developer portal capability of the Gateway, add additional URIs to the list for the assigned Authentication Source so that it accepts sign on attempts from the developer portal.

    Request:

    ```
    mutation {
       authSourceRedirectUrisUpdate(authSourceId: "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>", redirectUris: [ "https://biz.co:18077/*" ]) {
           id
           name
           redirectUris
       }
    }
    
    ```

    Response:

    ```
    {
       "data": {
           "authSourceRedirectUrisUpdate": {
               "name": "BizCo Authentication Source",
               "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
               "redirectUris": [
                   "https://biz.co:18077/*"
               ]
           }
       }
    }
    
    ```

-   Delete operation

    :::note 
    
    You cannot delete an authentication source used by any deployments or specified as a sign-on authentication source for any developer portal.

    :::

    Example query to delete an authentication source.

    Request

    ``` 
    mutation {
       authSourceDelete(id: "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>")
    }
    ```

    Response

    ``` 
    {
       "data": {
           "authSourceDelete": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>"
       }
    }
    ```

-   **Create JWT authentication source operation**

    Use the `authSourceJWTCreate` mutation to create a new JWT authentication source.

    Request

    Request must have x-account header. The following is a sample request:

    ``` 
    mutation authSourceJWTCreate($authSourceJWT:AuthSourceJWTCreateInput!) {
        authSourceJWTCreate(
            authSourceJWT:$authSourceJWT
        )
        {
            id
            name
            description
            issuer
            jwksUrl
            groupsAttribute
            roles {
                id
                name
            }
            audiences
            issuerError {
                code
                detail
            }
        }
    }
    ```

    ``` 
    {
        "authSourceJWT": {
            "name": "Dev JWT",
            "issuer": "http://localhost:8080/auth/realms/master",
            "details": {
                "description": "Dev JWT",
                "groupsAttribute": "grp",
                "roles": ["integration", "apim"],
                "audiences": ["aud1", "aud 2"]
            }
        }
    }
    ```

    Response

    JSON Response for the mutation is:

    ``` 
    {
        "data": {
            "authSourceJWTCreate": {
                "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                "name": "Dev JWT",
                "description": "Dev JWT",
                "issuer": "http://localhost:8080/auth/realms/master",
                "jwksUrl": "http://localhost:8080/auth/realms/master/protocol/openid-connect/certs",
                "groupsAttribute": "grp",
                "roles": [
                    {
                        "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                        "name": "apim"
                    },
                    {
                        "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                        "name": "integration"
                    }
                ],
                "audiences": [
                    "aud",
                    "aud 2"
                ],
                "issuerError": null
            }
        }
    }
    ```

-   **Update JWT authentication source operation**

    Use the `authSourceJWTUpdate` mutation to create a new JWT authentication source.

    Request

    The request must have an x-account header. A sample request is:

    ``` {#codeblock_ptl_n22_wqb}
    mutation authSourceJWTUpdate($authSourceJWT:AuthSourceJWTUpdateInput!) {
        authSourceJWTUpdate(
            authSourceJWT:$authSourceJWT
        )
        {
            id
            name
            description
            issuer
            jwksUrl
            groupsAttribute
            roles {
                id
                name
            }
            audiences
            issuerError {
                code
                detail
            }
        }
    }
    ```

    ``` 
    {
        "authSourceJWT": {
            "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
            "details": {
                "roles": ["apim", "integration", "flow"],
                "audiences": ["aud", "aud 2", "aud1"]
            }
        }
    }
    ```

    Response

    A JSON response example for the mutation is:

    ```    
    {
        "data": {
            "authSourceJWTUpdate": {
                "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                "name": "Dev JWT",
                "description": "Dev JWT",
                "issuer": "http://localhost:8080/auth/realms/master",
                "jwksUrl": "http://localhost:8080/auth/realms/master/protocol/openid-connect/certs",
                "groupsAttribute": "grp",
                "roles": [
                    {
                        "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                        "name": "apim"
                    },
                    {
                        "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                        "name": "flow"
                    },
                    {
                        "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
                        "name": "integration"
                    }
                ],
                "audiences": [
                    "aud",
                    "aud 2",
                    "aud1"
                ],
                "issuerError": null
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
              "argument" : ["api-authentication_source"],
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
