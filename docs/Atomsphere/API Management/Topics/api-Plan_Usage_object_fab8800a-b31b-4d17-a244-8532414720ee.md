# Plan Usage object 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-fab8800a-b31b-4d17-a244-8532414720ee"/>
</head>


The Plan Usage object provides the capability to retrieve the deployments to which you add a specified plan and the API keys using the specified plan, without using the user interface.

## Structure 

```
<PlanUsage planId="">
   <deployment environmentId="" componentId=""/>
   .
   .
   <apiKey/>
   .
   .
</PlanUsage>
```

The Plan Usage objectuses these fields:

|Field|Type|Description|
|-----|----|-----------|
|planId|*string*|The ID of the plan.|
|environmentId|*string*|When you add a plan to a particular deployment, use the ID of the environment in which you deploy the API.|
|componentId|*string*|The deployment ID is for a particular deployment to which you add the plan.|
|apiKey|*string*|An API key using the plan.|

## Supported operations 

The Plan Usage object is supported in the following operations:

| GET       | QUERY          | CREATE         | UPDATE         | DELETE         |
|-----------|----------------|----------------|----------------|----------------|
| ✅ Supported | X Not supported | X Not supported | X Not supported | X Not supported |


## RESTish implementation 

-   **GET operation**

    Send an HTTP GET request to:

    https://api.boomi.com/apim/api/rest/v1/accountId/plan/id/usage

    where *accountId* is the Boomi API Management account that you are authenticating with and id is the ID of the Plan object for which to retrieve usage.

    For example, to retrieve usage for the plan with ID 4d50decd-f2b6-d59e-53f4-22ec4f188bb1, send an HTTP GET request to https://api.boomi.com/apim/api/rest/v1/accountId/plan/4d50decd-f2b6-d59e-53f4-22ec4f188bb1/usage.

    Response:

    ```
    <apim:PlanUsage xsi:type="apim:PlanUsage" planId="4d50decd-f2b6-d59e-53f4-22ec4f188bb1">
        <apim:deployment environmentId="9b9a041a-7630-44ff-8ef2-be43caaa989f" componentId="87ed478c-abe7-4d7c-9698-01c85e10835b"/>
        <apim:deployment environmentId="9b9a041a-7630-44ff-8ef2-be43caaa989f" componentId="c7399824-8460-4bb3-af8d-68c7dca3ff81"/>
        <apim:deployment environmentId="9b9a041a-7630-44ff-8ef2-be43caaa989f" componentId="e7e4c4c4-aa1d-4a4b-93d4-530c848c2fb6"/>
        <apim:apiKey>6cab8796-0cc0-421a-b01f-58e581026580</apim:apiKey>
        <apim:apiKey>2ec1445e-2552-4f57-8c74-4c7ba48066fa</apim:apiKey>
    </PlanUsage>
    ```

    This implementation does not support JSON responses.


## SOAP implementation 

There is no SOAP implementation for operations on Plan Usage objects.