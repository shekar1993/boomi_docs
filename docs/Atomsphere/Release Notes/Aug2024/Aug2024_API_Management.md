#  API Management

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-ed54e9e3-7a3f-4ce7-80a2-df0bdbc87a5f"/>
</head>


**We added these features:**

- The following enhancements were made in the GraphQL-based platform APIs relating to Deployed APIs:
  - Added the ability to update plans on a subscription via the `planId` in `DeployedApiSubscriptionUpdateInput`. (APIM-14243)
  - Added the `deployedApiPlanUpdate` operation to allow plan updates. (APIM-14208)

  To learn more about these features, see [Deployed API Plan Category](/docs/Atomsphere/API%20Management/Topics/api-deployed_api_plan_category_d0596786-3535-44b7-9a20-366109708add.md) and [Deployed API Category](/docs/Atomsphere/API%20Management/Topics/api-Deployed_API_category_99fc416c-50a1-4a0c-a2a0-193e70bb6fb5.md).

- Added the `com.boomi.container.apigateway.metrics.captureQueryParams` container property that allows you to capture query parameters in metrics. This is false by default, but when enabled, query parameters are appended as-is to the URL as part of the `requestUrl` field and are truncated to 512 characters.  (APIM-14268)

  To learn more about this feature, see [Container Properties](/docs/Atomsphere/API%20Management/Topics/api-Container_properties_7db1ee5a-03b9-4d07-931b-4e863e7cc6de.md).

-  The creation of an API Gateway is now captured and made available in the Boomi Enterprise Platform Audit Log. (RUN-6386)

  To learn more about this feature, see [Audit Log Query Construction](https://developer.boomi.com/api/platformapi#tag/AuditLog).

**We fixed these issues:**

- The `API Management - Dashboard` privilege required the user to have `API Management - Access` privilege to see the dashboard. With this fix, the user does not need the `API Management - Access` privilege, and the privilege gives access to the dashboard only. (APIM-14279)
- The health check timeout could be automatically adjusted to be too short, leading to intermittent 502 responses. (APIM-14413)
 
- Fixed an issue that was causing increased memory utilization and "Out of Memory" errors on Gateways. (APIM-14336, APIM-14438)






