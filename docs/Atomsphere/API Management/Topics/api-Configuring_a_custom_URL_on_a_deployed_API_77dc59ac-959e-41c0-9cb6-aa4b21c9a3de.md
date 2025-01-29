# Configuring a custom URL on a deployed API 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-77dc59ac-959e-41c0-9cb6-aa4b21c9a3de"/>
</head>


Configure a custom URL for a deployed API on the **Configure APIs and Applications** \> **Deployed APIs** page using the Custom URL field.

## Before you begin

In Integration, [deploy an API Service or Proxy component.](/docs/Atomsphere/Integration/Deployment/t-atm-Creating_and_deploying_packages_from_PackageManager_a61138d5-8224-42df-9f93-45f4ac96813d.md) The deployed API must be deployed to an environment with an API Gateway and the deployed API must have endpoints in order to specify a custom URL.

## Procedure

1.  On the Deployed APIs page, navigate to the Deployed API that you want to specify a custom URL for. For deployed APIs without endpoints or APIs that are deployed to an environment that does not contain an API Gateway, the Custom URL column has default text that reads **-** meaning that you cannot set a custom URL.

    For deployed APIs with endpoints and APIs that are deployed to an environment that contains an API Gateway, the Custom URL column has default text that reads **No** meaning that a custom URL is not specified for that API.

2.  Click on the **No** text in the Custom URL column.

    The Override URL page opens.

3.  In the **Customize URL** field, click **Customize**.

4.  Based on your endpoints, modify the **REST Endpoints,** **SOAP Operations**, or **OData Entities** until the example URLs provide the correct URL for your API.

5.  Click **Save**.  
The custom URL is sent to the API Gateway and the new custom URL is set up for your API endpoint.
