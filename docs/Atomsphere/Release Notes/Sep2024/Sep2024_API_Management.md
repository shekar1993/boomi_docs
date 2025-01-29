#  API Management

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-718278f3-8a66-468f-9735-53befe7d5449"/>
</head>    

**We added these features:**

- Added the `API Management - APIs - Read and write access to APIs`   privilege. This gives users write access to the areas in API Management where they can modify deployed APIs: Deployed APIs, API Lifecycle, and Manage APIs. (APIM-14253)

  To learn more about this feature, see [User roles and privileges](/docs/Atomsphere/Platform/c-atm-User_roles_and_privileges_5a1c8a1a-4d58-4e7d-a6b6-b684a0c6d672.md).

- The default maximum metrics event file size (`com.boomi.container.sharedServer.http.metrics.maxFileSize`) for Atoms has been lowered to 4MB (4194304 bytes) and values less than 5120 bytes are not allowed. This change helps to limit the maximum potential size of the events directory. (APIM-12680)

  To learn more about this feature, see [API Metrics](/docs/Atomsphere/API%20Management/Topics/api-metrics_0e0f3adb-2fcb-4af5-bbd1-aee58d2e713f.md).

- If a Gateway is configured for a shutdown delay, the gateway health-check will return a `500` error instead of a `200`. This allows time for a load-balancer to remove the node from its pool before the Gateway restarts. (APIM-4028)

  To learn more about this feature, see [Properties Panel](/docs/Atomsphere/Integration/Integration%20management/r-atm-Properties_panel_Advanced_tab_c39737e8-1b16-4fdd-b414-152694364c14.md).
  
- Added the `deployedApiPlan` query that allows you to query an API's plan by ID. (APIM-14476)

  To learn more about this feature, see [Deployed API Plan Category](/docs/Atomsphere/API%20Management/Topics/api-deployed_api_plan_category_d0596786-3535-44b7-9a20-366109708add.md).

- Added the `status` field to `DeployedApiPlanUpdateInput`. This allows you to update an API's existing plan status to `ENABLED` or `DISABLED` via the `deployedApiPlanUpdate` GraphQL operation.

  To learn more about this feature, see [Deployed API Plan Category](/docs/Atomsphere/API%20Management/Topics/api-deployed_api_plan_category_d0596786-3535-44b7-9a20-366109708add.md).

**We fixed these issues:**

- Developer Portals did not use the container properties' proxy settings when sending requests to an identity provider. (APIM-14650)

- Subscriptions could not be created if a plan was added after the first plan on an API was removed. (APIM-14062)

- The Connector WSS was generating invalid WSDL files.  (APIM-14322)
- Developer Portal theme images disappeared if the Gateway was upgraded to a newer version. (APIM-14493)

- The `deployedApiSubscriptionUpdate` GraphQL mutation could update the status of a deleted subscription. With this fix, this is no longer possible. (APIM-14451)
- Subscribers of APIs where the application had an existing subscription to an API were unable to re-subscribe to the API. (APIM-14061)

:::note

In the September 2023 release, we began the gradual roll out of additional metrics across all accounts with API entitlements. All enabled customers will have the ability to use platform APIs for querying captured metrics. See [API Metrics](/docs/Atomsphere/API%20Management/Topics/api-metrics_0e0f3adb-2fcb-4af5-bbd1-aee58d2e713f.md) for more information. Additionally, API Publish and API Management customers have access to the API Dashboard for a graphical view of the health and performance of their APIs.

Adequate disk space is essential, as metrics typically consume approximately 1 KB per request daily. We cycle and remove files when they become redundant. You can tailor the following metrics settings:

- **Maximum File Size**: Initially set at 4 GB, customize this to fit your specific needs.
- **Event Rollover Time**: With the default set at six hours for Atoms, you have the flexibility to extend this to 24 hours or even reduce it based on your preferences.
- **404 Error Capture**: This feature, off by default, lets you record 404 errors within metrics data when activated. For a more comprehensive understanding, see [API Metrics](/docs/Atomsphere/API%20Management/Topics/api-metrics_0e0f3adb-2fcb-4af5-bbd1-aee58d2e713f.md).

:::