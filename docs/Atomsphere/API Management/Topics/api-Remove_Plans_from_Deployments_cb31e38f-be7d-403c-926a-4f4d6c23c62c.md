# Remove Plans from Deployments

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-cb31e38f-be7d-403c-926a-4f4d6c23c62c"/>
</head>


The Remove Plans from Deployments operation is used to remove plans from API deployments.

## Plan Associations object structure 

The request body specifies a Plan Association object, which has the following structure:

```
<PlanAssociation>
   <association componentId="" environmentId="" planId=""/>
   .
   .
</PlanAssociation>
```

The Plan Association object contains one or more `<association>` elements, each of which corresponds to a removed plan. Each `<association>` element has these fields:

|Field|Type|Description|
|-----|----|-----------|
|componentId|*string*|The ID of the deployment from which to remove the plan.|
|environmentId|*string*|The ID of the environment to deploy the API.|
|planId|*string*|The ID of the plan to remove from the deployment.|

:::note 

If you disallow a request’s individual operations, it does not remove any plans specified in the request from deployments. An operation is disallowed, for example, if a plan with the specified ID does not exist or the authenticated user does not have access rights to the specified deployment.

:::

:::info 

You cannot remove all plans if there are accepted or pending subscriptions. To remove all plans, you must reject all of them first. After removing all plans, you cannot access or view the deployment on the API Gateway.

:::

## RESTish implementation 

To perform the Remove Plan from Deployment operation, send an HTTP DELETE request to:

https://api.boomi.com/apim/api/rest/v1/accountId/planAssociation

where accountId is the Boomi API Management account with which you are authenticating.

Request body: remove three plans from deployments:

```
<apim:PlanAssociation xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bns="http://api.platform.boomi.com/" xmlns:apim="http://apim.api.platform.boomi.com/">
    <apim:association componentId="059908a6-e2d9-413e-a73c-043306208728" environmentId="9b9a041a-7630-44ff-8ef2-be43caaa989f" planId="4d50decd-f2b6-d59e-53f4-22ec4f188bb1"/>
    <apim:association componentId="c7399824-8460-4bb3-af8d-68c7dca3ff81" environmentId="9b9a041a-7630-44ff-8ef2-be43caaa989f" planId="4d50decd-f2b6-d59e-53f4-22ec4f188bb1"/>
    <apim:association componentId="e7e4c4c4-aa1d-4a4b-93d4-530c848c2fb6" environmentId="9b9a041a-7630-44ff-8ef2-be43caaa989f" planId="4d50decd-f2b6-d59e-53f4-22ec4f188bb1"/>
</apim:PlanAssociation>
```

The status code returned from the request is 200 \(OK\); the response body is empty.

The RESTis implementation does not support JSON requests and responses.

## SOAP implementation 

There is no SOAP implementation for the Remove Plans from Deployments operation. 