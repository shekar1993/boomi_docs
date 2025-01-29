# Add Plans to Deployments 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-7534b244-5df5-4cf5-b535-46cb6b174871"/>
</head>


The Add Plans to Deployments operation is used to add plans to API deployments.

## Plan Associations object structure 

The request body specifies a Plan Association object, which has the following structure:

```
<PlanAssociations>
   <association componentId="" environmentId="" planId=""/>
   .
   .
</PlanAssociations>
```

The Plan Association object contains one or more `<association>` elements, each of which corresponds to a plan to be added. Each `<association>` element has these fields:

|Field|Type|Description|
|-----|----|-----------|
|componentId|*string*|The ID of the deployment to which to add the plan.|
|environmentId|*string*|The ID of the environment in which to deploy the API.|
|planId|*string*|The ID of the plan to add to the deployment.|

:::note


If disallowing a request’s individual operations, none of the plans specified in the request are added to deployments. For example, disallowed operations occur if a plan with a specified ID does not exist or the authenticated user does not have access rights to the specified deployment.


:::

:::tip


You are unable to remove all plans if there are any accepted or pending subscriptions. To remove all plans, you must reject all of the plans first. After removing all plans, you cannot access or view the deployment on the API Gateway to add plans to the deployment.

:::

## RESTish implementation 
To perform the Add Plan to Deployment operation, send an HTTP POSTrequest to:

https://api.boomi.com/apim/api/rest/v1/accountId/planAssociation

where *accountId* is the Boomi API Management account that you are authenticating with.

Request body: add three plans to deployments:

```

<apim:PlanAssociations xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bns="http://api.platform.boomi.com/" xmlns:apim="http://apim.api.platform.boomi.com/">
    <apim:association componentId="059908a6-e2d9-413e-a73c-043306208728" environmentId="9b9a041a-7630-44ff-8ef2-be43caaa989f" planId="4d50decd-f2b6-d59e-53f4-22ec4f188bb1"/>
    <apim:association componentId="c7399824-8460-4bb3-af8d-68c7dca3ff81" environmentId="9b9a041a-7630-44ff-8ef2-be43caaa989f" planId="4d50decd-f2b6-d59e-53f4-22ec4f188bb1"/>
    <apim:association componentId="e7e4c4c4-aa1d-4a4b-93d4-530c848c2fb6" environmentId="9b9a041a-7630-44ff-8ef2-be43caaa989f" planId="4d50decd-f2b6-d59e-53f4-22ec4f188bb1"/>
</apim:PlanAssociations>

```

The status code returned from a successful request is 200 \(OK\); the response body is empty.

JSON requests and responses are not supported.

## SOAP implementation

There is no SOAP implementation for the Add Plans to Deployments operation.