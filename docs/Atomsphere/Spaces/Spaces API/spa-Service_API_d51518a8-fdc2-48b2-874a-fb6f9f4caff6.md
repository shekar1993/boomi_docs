# Boomi Spaces Service GraphQL APIs 

<head>
  <meta name="guidename" content="Spaces"/>
  <meta name="context" content="GUID-d51518a8-fdc2-48b2-874a-fb6f9f4caff6"/>
</head>


The Boomi Spaces Service GraphQL API exposes many GraphQL queries and mutations to retrieve and update data on the Space Administrator Page and Space User Interface. The Spaces service GraphQL APIs provide Spaces users with programmatic access to the features and functionalities of Spaces.

## Authentication 

To authenticate the Spaces Service GraphQL requests, follow the below steps:

1.  To obtain the JWT send a GET request to https://api.boomi.com/auth/jwt/generate/*account ID* with Authorization: Type - Basic Auth (**Username**: `BOOMI_TOKEN.username` and **Password**: `<Boomi_Platform_ApiToken>`, see [Adding new API Tokens on a User Account](/docs/Atomsphere/Platform/int-Adding_API_tokens_d788aee3-026f-41c5-bebb-bf7f94500db3.md) to learn how to add a new token). This returns a JWT in the response.
2.  Use the JWT with Bearer Authentication (add a header to your http request with name Authorization and value Bearer`JWT`) for all requests to https://platform.boomi.com/graphql.

    :::note  
    
    The JWT token expires every five minutes. You must then obtain a new JWT token.

    :::


## Rate Limiting 

The GraphQL APIs include rate limiting to guard against large spikes of incoming requests and to improve share access equally across all incoming requests. Rate limiting is applied to the number of your requests running on each platform instance. Your requests can all go to the same runtime instance or distributed across instances.

If you send a large number of requests in succession, you might see a status code 429 as your error response to the request. This status code means that you sent too many requests. Allow your requests to clear out before you resubmit the requests.

## Error Handling 

If you send an invalid GraphQL request or it cannot process the request, it returns a standard GraphQL errors array with details about what went wrong. The error object contains a message with those details.

``` {#codeblock_yl4_sks_zxb}
MISSING_SPACE_NAME
MISSING_ACCT_GRP_ID 
INVALID_SPACE_NAME  
SPACE_EXISTS_FOR_ACCT_GRP      
MISSING_OP_USER_ID   
MISSING_OP_ACCT_ID 
UNSUPPORTED_SHARING_MODE   
MISSING_SPACE_ID 
SPACE_NOT_FOUND 
GENERIC_SYSTEM_ERROR 
SPACE_IS_DELETED   
ACCOUNT_INPUT_MISSING_FIELDS   
ACCOUNT_INPUT_INVALID_DATE 
INVALID_AUTH_METHOD     
PLATFORM_CALL_ERROR   
UNAUTHORIZED    
ARTIFACT_NOT_IN_SPACE 
IPACK_INSTANCE_ID_INVALID
IPACK_NOT_FOUND_IN_SPACE 
SPACE_NAME_IS_LENGTHY 
SPACE_LOGO_UPLOAD_ERROR 
SPACE_LOGO_DELETE_ERROR 
SPACE_LOGO_GET_ERROR 
SPACE_THEME_DELETE_ERROR 

Uploading Logo

OK 
FORBIDDEN 
INTERNAL_ERROR 

```