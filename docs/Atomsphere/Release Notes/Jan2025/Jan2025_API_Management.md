#  API Management January 2025 Release Notes

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-246418fb-82d8-454a-b451-e1461362ec28"/>
</head>


**We added these features:**

- The API Gateway is now available in a container form factor. This is a lightweight and scalable API Gateway deployment option that allows you to easily manage Gateways with Docker Compose or Kubernetes. Additionally, it allows you to create packages including applications, scripts, and supported files to run in a container.

  :::note
  The Docker image will be available on January 22. 
  :::

  See [Container Gateway Deployment](../../API%20Management/Topics/api-docker.md) for more information.

- The following API Gateway policies are now supported:
  - [Groovy policy](../../API%20Management/Topics/api-groovy_policy.md) - Run a Groovy script to execute custom policy behavior at any stage of message processing.
  - [JSON to XML policy](../../API%20Management/Topics/api-json_to_xml_policy.md) - Transform JSON content to XML content.
  - [Traffic shadowing policy](../../API%20Management/Topics/api-traffic_shadowing_policy.md) -  Asynchronously copy API traffic to another service. Requests are duplicated and sent to the target URL.
  - [HTML to JSON policy](../../API%20Management/Topics/api-html_to_json_policy.md) - Transform HTML response content to JSON.
  - [JSON to JSON policy](../../API%20Management/Topics/api-json_to_json_policy.md) - Apply a transformation (or mapping) on the request or response content.
  - [REST to SOAP policy](../../API%20Management/Topics/api-rest_to_soap_policy.md) - Expose a SOAP backend service as a REST API.
- The following enhancements were made to the [Circuit Breaker](../../API%20Management/Topics/api-circuit_breaker_policy.md) policy:
  - Added policy configuration to support headers for the redirect request.
  - Redirects if the original API service is down and circuit is open.
  - If the Circuit Breaker policy is applied to an API, it takes precedence and the max retry attempts configured in execution settings are ignored. (APIM-16232)
- API Control Plane and Cloud API Management are now accessible from the Boomi platform in API Management if you have the appropriate entitlements. The following roles and privileges have been added to allow for navigation between the applications.

  :::note
  You cannot use the following privileges in custom roles, and the new roles cannot be extended.
  :::

  The following roles were added:

  - API Control Plane Manager - This role has access to administrative functions in the API Control Plane. Includes the `API Control Plane User` and `User Management - Limited` privileges to create users and has limited management of users privileges.
  - Cloud API Management Administrator - This role has access to administrative functions in Cloud API Management. Includes the `Cloud API Management User` and `User Management - Limited` privileges to create users and has limited management of users privileges. This role is granted to Boomi Administrator users.

  The following privileges were added:

|Privilege|	Description|	API Control Plane Manager role|	Cloud API Management Administrator role|
|---|---|---|---|
| User Management - Limited|Can add users to the account on the Boomi platform and edit the roles on existing users.  Can only modify roles that are comprised of privileges already assigned to the authenticated user. | Included| Included|
|API Control Plane User | Access to the API Control Plane.| Included| Excluded|
|Cloud API Management User|Access to Cloud API Management. | Excluded|Included |

To learn more about this feature, see [API Management Roles and Privileges](../../API%20Management/Topics/api_apim_roles_and_privileges.md)

**We fixed these issues:**

- If a Developer Portal with JWT authentication was disabled, the Gateway would not start properly. (APIM-15726)
- The Cache policy was returning corrupted images from cache. (APIM-15775)
- Removed  pre-populated examples from some API policy configuration fields. These values are now included as examples in the tooltips.  (APIM-15797)

:::note

In the March 2025 release, we will complete the rollout of API metrics to all Boomi accounts. All customers will have the ability to use platform APIs for querying captured metrics. Additionally, API Publish and API Management customers have access to the API Dashboard for a graphical view of the health and performance of their APIs. See [API Metrics](/docs/Atomsphere/API%20Management/Topics/api-metrics_0e0f3adb-2fcb-4af5-bbd1-aee58d2e713f.md) for more information.

Adequate disk space is essential, as metrics typically consume approximately 1 KB per request daily. We cycle and remove files when they become redundant. You can tailor the following metrics settings:

- Maximum File Size: Initially 1GB for Gateways (4MB for Atoms), customize this to fit your specific needs.
- Event Rollover Time: With the default set at six hours for Atoms, you have the flexibility to extend this to 24 hours or even reduce it based on your preferences.
- 404 Error Capture: This feature, off by default, lets you record 404 errors within metrics data when activated. For a more comprehensive understanding, see [API Metrics](/docs/Atomsphere/API%20Management/Topics/api-metrics_0e0f3adb-2fcb-4af5-bbd1-aee58d2e713f.md).

:::