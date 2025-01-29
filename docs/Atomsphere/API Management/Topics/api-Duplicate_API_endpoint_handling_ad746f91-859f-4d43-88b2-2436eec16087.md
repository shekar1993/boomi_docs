# Duplicate API endpoint handling 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-AD746F91-859F-4D43-88B2-2436EEC16087"/>
</head>


Two deployed APIs can have a URL conflict where endpoints on both APIs are using the same URL. You can have conflicts on the API Gateway, the environment, or both. In these cases, you will be unable to use the API due to the duplicate URLs on the two APIs.

If you try to deploy two APIs on the same environment with the same URL path, you will be warned before you deploy the second one in Integration. However, you are not stopped from creating this conflict. And, there are other ways that you can deploy two APIs with the same URL path without seeing a warning in Integration.

## Scenario 1: Conflict on the API Gateway 

In this scenario, you have two deployed APIs on different environments that are attached to the same API Gateway. The conflict here occurs if the URL path becomes identical due to a combination of the values specified on the **Base API Path** set in the API component in Integration and the endpoint values specified on the Environment Configuration page.

Here is a sample scenario that creates this conflict:

1.  Set the environment configuration for environment A on the **Configure Server** \> **Gateways** page by clicking environment A in the Environments column of the table for API Gateway 1. Then, set **REST Endpoints** to `ws/rest`. The environment path is `http://localhost:8077/ws/rest`.
2.  Set the environment configuration for environment B on the **Configure Server** \> **Gateways** page by clicking environment B in the Environments column of the table for API Gateway 1. Then, set **REST Endpoints** to `ws`. The environment path is `http://localhost:8077/ws`.
3.  In Integration, deploy one API with the **Base API Path** set to `rest/mypath` on environment B that is attached to API Gateway 1. For this API, the completed URL path is now `http://localhost:8077/ws/rest/mypath`.
4.  In Integration, deploy a second API with the **Base API Path** set to `mypath` on environment A that is also attached to API Gateway 1. For this API, the completed URL path is now `http://localhost:8077/ws/rest/mypath`.

:::info

In the current order of steps, you receive an error message on the second API deployment in Integration . However, you are still able to deploy the API despite creating a path conflict with another deployed API on the API Gateway.

If you were to complete the two API deployments in Integration first, you would be prevented from changing the environment path settings on the Environment Configuration page in API Management in such a way that URL path conflicts would exist on the API Gateway.

:::

In both of these deployed APIs, you have the same REST endpoint on two different environments. Because the deployed APIs are on different environments, you do not have any runtime issues. However, because these environments are attached to the same API Gateway with the same URL path, you will have an API Gateway conflict with two different deployed APIs having the same endpoint URL. To solve this conflict, you can [set a custom URL on one of the APIs](/docs/Atomsphere/API%20Management/Topics/api-Configuring_a_custom_URL_on_a_deployed_API_77dc59ac-959e-41c0-9cb6-aa4b21c9a3de.md). This will prevent the two APIs from having the same endpoint URL.

## Scenario 2: Conflict on the environment 

In this scenario, you deploy two different APIs with the same **Base API Path** set in the API component in Integration to the same environment. The conflict here occurs when you deploy the APIs in Integration.

Here is a sample scenario that creates this conflict:

1.  In Integration, deploy one API with the **Base API Path** set to `mypath` on environment A that is attached to API Gateway 1.
2.  In Integration, deploy a second API with the **Base API Path** set to `mypath` on environment A that is attached to API Gateway 1.

In both of these deployed APIs, you have the same endpoints on the same environment. This causes a runtime conflict. In order to fix this, you must change the **Base API Path** on one of the APIs to be different than the other and redeploy that API.