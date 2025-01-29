#  API Management

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-683aaa6a-1374-4502-b538-8dcbaebf1611"/>
</head>
 

**We added these features:**

- You can now configure CORS for APIs deployed on the Gateway. (APIM-10102)

  To learn more about this feature, see [CORS for Gateways and APIs](/docs/Atomsphere/API%20Management/Topics/api-cors.md).
- The following API policies are now supported:
  - [Override HTTP Policy](/docs/Atomsphere/API%20Management/Topics/api-override_http_method_policy.md) - Change the HTTP method provided by the initial consumer with a specified value.
  - [Resource Filtering Policy](/docs/Atomsphere/API%20Management/Topics/api-resource_filtering_policy.md) - Control access to a specific REST resource.
  - [Circuit Breaker Policy](/docs/Atomsphere/API%20Management/Topics/api-circuit_breaker_policy.md) - Define failure thresholds. When the threshold is met, you can redirect or fail with a `503 Service Unavailable` error. 
  - [XML to JSON Policy](/docs/Atomsphere/API%20Management/Topics/api-xml_to_json_policy.md) - Transform XML content to JSON content.
- A warning is provided if you create an API with a duplicate base path. Previously, this warning was only provided at the time of deployment. (APIM-12970)

  To learn more about this feature, see [API Service Components](docs/Atomsphere/API%20Management/Topics/int-API_Service_components_8f868bda-5099-4e1f-ad16-5648f98b68b2.md).
- The Shared Web Server API is now available. This allows you to configure your Atoms, Molecules, and Clouds to listen for requests from clients in real time via an API.

  To learn more about this feature, see [Shared Web Server Object](https://developer.boomi.com/api/platformapi#tag/SharedWebServer).

**We fixed these issues:**

- The health check timeout could be automatically adjusted to be too short, leading to intermittent 502 responses. (APIM-13878)

- APIs were returning 401 errors if JWT authentication was being used. (APIM-14421)

- After saving Shared Web Server settings for a Cloud, the order of external ports was changed. (APIM-14070).
- The username was not logged in API Metrics for a JWT authentication source. (APIM-14122)
- A Developer Portal user that used a JWT authentication source with a configured User Name Identifier was unable to see applications and subscriptions they owned. (APIM-13908)
- Some Developer Portal users that were using a JWT authentication source connected to a SAML Identity Provider to authenticate users were unable to log in successfully. (APIM-13907)

:::note

In the September release, we began the gradual roll out of additional metrics across all accounts with API entitlements. All enabled customers will have the ability to use platform APIs for querying captured metrics. See [API Metrics](/docs/Atomsphere/API%20Management/Topics/api-metrics_0e0f3adb-2fcb-4af5-bbd1-aee58d2e713f.md) for more information. Additionally, API Publish and API Management customers have access to the API Dashboard for a graphical view of the health and performance of their APIs.

Adequate disk space is essential, as metrics typically consume approximately 1 KB per request daily. We cycle and remove files when they become redundant. You can tailor the following metrics settings:

- **Maximum File Size**: Initially set at 1 GB, customize this to fit your specific needs.
- **Event Rollover Time**: With the default set at six hours for Atoms, you have the flexibility to extend this to 24 hours or even reduce it based on your preferences.
- **404 Error Capture**: This feature, off by default, lets you record 404 errors within metrics data when activated. For a more comprehensive understanding, see [API Metrics](/docs/Atomsphere/API%20Management/Topics/api-metrics_0e0f3adb-2fcb-4af5-bbd1-aee58d2e713f.md).

:::