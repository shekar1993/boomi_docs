---
sidebar_position: 12
---
# Persist OAuth Connector Details

<head>
  <meta name="guidename" content="Spaces"/>
  <meta name="context" content="GUID-0b796563-8a1b-4eeb-9eab-af66e1aab3f1"/>
</head>


The API enables secure authorization for your application by storing and managing key connection parameters, such as the Client ID which are associated with a third-party Identity Provider (IDP). This API is designed to persist the necessary connection values, allowing users to refresh the page without losing their configuration details and also to edit the Integration pack without losing the configuration details.

## Code samples

### Input syntax 

``` 
mutation addIPackInstanceOAuthConnectorDetails{
   saveIPackInstanceOauthConnectorDetails(
       input: {
integrationPackInstanceId: String
            isTokenGenerated: Boolean,
            oauthConnectorDetails:"{\"baseURL\":String,\"companyId\":String,\"clientId\":String,\"authParams\":{\"key\":\"value\"},\"accessTokenParams\":{\"key\":\"value\"}}",
            processId: String,
            envId: String,
            connectionId: String,
            catalogGuid: String,
            clientId: String,
            clientSecret: String
       }
   ){
       id
        integrationPackInstanceId
        isTokenGenerated
        oauthConnectorDetails
        processId
        envId
        connectionId
        catalogGuid
   }
}

```

|Field|Type|Description|Required/Optional|
|-----|----|-----------|-----------------|
|integrationPackInstanceId|String|The Integration Pack instance ID.|Required|
|isTokenGenerated|Boolean|This is the flag to identify the token generation status.|Required|
|oauthConnectorDetails|String|This is the pre-requisite to generate the access token. This is the required details to get Identity provider (IDP).|Required|
|processId|String|ID of the particular process in the integration pack.|Required|
|envId|String|ID of the particular environment available in the configuration.|Required|
|connectionId|String|ID of the particular connection in the process.|Required|
|catalogGuid|String|The Space guid.|Required|
|clientId|String|The key value from the third party Identity provider (IDP).|Required|
|clientSecret|String|**Note**:  The dummyClientSecret value is stored for the clientSecret rather than the actual user-entered client secret.|Required|

### Return Syntax 

```
{
    "data": {
        "saveIPackInstanceOauthConnectorDetails": {
            "id": String,
            "integrationPackInstanceId": String,
            "isTokenGenerated": Boolean,
            "oauthConnectorDetails": "{\"baseURL\":String,\"companyId\":String,\"clientId\":String,\"authParams\":{\"key\":\"value\"},\"accessTokenParams\":{\"key\":\"value\"}}",
            "processId": String,
            "envId": String,
            "connectionId": String,
            "catalogGuid": String
        }
    }
}             }

```

#### Implementation

To persist the OAuth connection values, send the mutation request to *platform.boomi.com/graphql* with the following headers:

|Key|Value|
|---|-----|
|SPACE\_GUID|`<The Space guid\>`|
|Authorization|Bearer `<Token\>`|
|Accept|application/json|

### Sample Request 

```
mutation addIPackInstanceOAuthConnectorDetails{
    saveIPackInstanceOauthConnectorDetails(
        input: {
            integrationPackInstanceId: "test-101",
            isTokenGenerated: false,
            oauthConnectorDetails:"{\"baseURL\":\"https://baseURL.com\",\"companyId\":\"9341452451293689\",\"clientId\":\"A\",\"authParams\":{\"key\":\"value\"},\"accessTokenParams\":{\"key\":\"value\"}}",
            processId: "1",
            envId: "2",
            connectionId: "3",
            catalogGuid: "796eeeb4-1b2f-4965-898a-7e443"
            clientId: "dummyClientId",
            clientSecret: "dummyValue"
        }
    ){
        id
        integrationPackInstanceId
        isTokenGenerated
        oauthConnectorDetails
        processId
        envId
        connectionId
        catalogGuid
    }
}

```
### Sample Response

```
{
    "data": {
        "saveIPackInstanceOauthConnectorDetails": {
            "id": "7665cc47-6acf-4e39-82c0-08821",
            "integrationPackInstanceId": "test-101",
            "isTokenGenerated": false,
            "oauthConnectorDetails": "{\"baseURL\":\"https://baseURL.com\",\"companyId\":\"9341452451223689\",\"clientId\":\"A\",\"authParams\":{\"key\":\"value\"},\"accessTokenParams\":{\"key\":\"value\"}}",
            "processId": "1",
            "envId": "2",
            "connectionId": "3",
            "catalogGuid": "1"
        }
    }
}

```