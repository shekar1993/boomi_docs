# Keyless Plans

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-ec6ef4bf-6592-4acb-910a-95776da3bd52"/>
</head>


A Keyless Plan is used to call a deployed API without an API Key.

Because the API Gateway requires the API Key be included in the `X-API-KEY` header, Keyless Plans are primarily used when you are required to bypass the required `X-API-KEY` header in the Shared Web Service SOAP Client connector. We recommend Keyless Plans only for the scenario when existing applications do not insert the required `X-API-KEY` header and cannot be reconfigured.

:::caution

We recommend against setting a Keyless Plan on any deployed API with an authentication of API Key Controlled. A Keyless Plan on an API Key Controlled authentication removes all authentication on the deployed API meaning that your deployed API is unsecured and is at risk of being misused.

:::

With a Keyless Plan enabled, you can call an API with a valid API Key or without one. In the case of an API call without a valid API Key, a subscription is not necessary. Because the client IP address is used for rate and quota calculations, you should review your usage limits on any deployed API that uses a Keyless Plan.

You can set up Keyless Plans using the GraphQL [Deployed API category](/docs/Atomsphere/API%20Management/Topics/api-Deployed_API_category_99fc416c-50a1-4a0c-a2a0-193e70bb6fb5.md). You can use the [Gateway category](/docs/Atomsphere/API%20Management/Topics/api-Gateway_category_b41f3ab2-2ce5-45c6-805e-0293a0f73ce3.md) Gateway Update mutation \(`gatewayUpdate`\) for all deployed APIs on the API Gateway.

Alternatively, you can also set a Keyless Plan for a plan on the Deployed APIs Plans page. To do this, turn on **Use a Keyless Plan** option and then select the plan you want to use as Keyless.

## Tips for working with the Keyless Plans GraphQL mutations

There are three fields to specify for a Keyless Plan mutation. The `apiDeploymentId` is required. `planIds` and `keylessPlanId` are optional. However, if you have planIds and leave the `planIds` field empty, API Plan associations through the mutation are deleted. Include the Plan IDs that you do not want to delete in the `planIds` field. Any IDs not included in the `planIds` field will be deleted.

To add new or additional API Plan associations to the Plan IDs, include your existing Plan IDs and the new Plan IDs that you want to add to the `planIds` field. If you do not include all Plan IDs that you want to keep, any IDs not included in the `planIds` field will be deleted.
