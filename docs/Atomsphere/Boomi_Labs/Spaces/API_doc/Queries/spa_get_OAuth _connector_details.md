---
sidebar_position: 9
---
# Get OAuth Connector Details 

<head>
  <meta name="guidename" content="Spaces"/>
  <meta name="context" content="GUID-fed559e8-b067-478f-b225-a0c4feac86de"/>
</head>

This query is to retrieve OAuth connector details from Platform admin account to the Spaces account.

## Code samples

### Input syntax

```
query getIPackOAuthConnectorDetails {
     IPackInstanceOAuthConnectorDetails(
        input: {
            integrationPackInstanceId: String,
            envId: String
            processId : String
            connectionId: String
            catalogGuid: String
        }
    ){
        id
        integrationPackInstanceId
        envId
        isTokenGenerated
        connectionId
        processId
        oauthConnectorDetails
    }
}
```

|Field|Type|Description|Required/Optional|
|-----|----|-----------|-----------------|
|integrationPackInstanceId|String|This is the instance ID for the Space instance where user install the integration pack.|Required|
|envId|String|ID of the particular environment available in the configuration. |Required|
|connectionId|String|ID of the particular connection in the process.|Required|
|catalogGuid|String|The Space guid.|Required|
|processId|String|The ID for the particular process in the integration pack.|Required|


### Return Syntax

```
{
    "data": {
        "IPackInstanceOAuthConnectorDetails": {
            "id": String,
            "integrationPackInstanceId": String,
            "envId": String,
            "isTokenGenerated": Boolean,
            "connectionId": String
            "processId": String
            "oauthConnectorDetails": "{\"baseURL\":String,\"clientId\":String,\"companyId\":String,\"authParams\":{\"key\":\"value\"},\"accessTokenParams\":{\"key\":\"value\"}}"
        }
    }
}
```
#### Implementation

To retrieve data from Platform, send the mutation request to *platform.boomi.com/graphql* with the following headers:

|Key|Value|
|---|-----|
|SPACE\_GUID|`<The Space guid\>`|
|Authorization|Bearer `<Token\>`|
|Accept|application/json|

### Sample Request

```
query getIPackOAuthConnectorDetails {
     IPackInstanceOAuthConnectorDetails(
        input: {
            integrationPackInstanceId: "test-101",
            envId: "2",
            processId : "1",
            connectionId: "3",
            catalogGuid: "796eeeb4-1b2f-4965-898a-7e443"
        }
    ){
        id
        integrationPackInstanceId
        envId
        isTokenGenerated
        connectionId
        processId
        oauthConnectorDetails
    }
}
```
### Sample Response

```
{
    "data": {
        "IPackInstanceOAuthConnectorDetails": {
            "id": "7665cc47-6acf-4e39-83c0-08721",
            "integrationPackInstanceId": "test-101",
            "envId": "2",
            "isTokenGenerated": false,
            "connectionId": "3",
            "processId": "1",
            "oauthConnectorDetails": "{\"baseURL\":\"https://baseURL.com\",\"clientId\":\"A\",\"companyId\":\"9341452451293689\",\"authParams\":{\"key\":\"value\"},\"accessTokenParams\":{\"key\":\"value\"}}"
        }
    }
}
```
