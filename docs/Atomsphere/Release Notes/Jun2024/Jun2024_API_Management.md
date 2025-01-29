#  API Management

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-7bd2c5db-f53c-43f3-9215-bdbe3dd9af33"/>
</head>

**We added these features:**

- You can now configure multiple endpoint responses for an API path.  (APIM-12414, APIM-13011)

  To learn more about this feature, see [Configuring a REST endpoint in an API Service component](/docs/Atomsphere/API%20Management/Topics/t-atm-Configuring_a_REST_route_in_an_API_component_c61c0d7e-ecc9-47c3-8fc9-452c8ffc62aa.md).
- You can now import multipart/form-data in Open API 3.0 specification files. Previously, when you imported a response with a content-type of `multipart/form-data`, the output type for this response was set to `Single Data`. Now, the response output type is set correctly to `multipart/form-data`. (APIM-13011)
- When an Open API specification file is imported into an API Service component, all responses are now imported. Previously, we imported only one response, for code 200 (or the first successful response). (APIM-12414, APIM-12415)

  To learn more about this feature, see [OpenAPI Specification File Reference](/docs/Atomsphere/API%20Management/Topics/int-Open_API_Specification_File_Reference_c22e9762-4e86-400f-a87a-3244c780e361.md).
- Added a container property that allows you to configure how frequently changes to an event file are flushed to disk.
  - For Gateways, the property is `com.boomi.container.apigateway.metrics.flushAfterEvents`
  - For Atoms, the property is `com.boomi.container.sharedServer.http.metrics.flushAfterEvents`  (APIM-13085)
 
  To learn more about this feature, see [Metrics](docs/Atomsphere/API%20Management/Topics/api-metrics_0e0f3adb-2fcb-4af5-bbd1-aee58d2e713f.md).

**We fixed these issues:**

-  The health check timeout could be automatically adjusted to be too short, leading to intermittent 502 responses. (APIM-13878)
- New applications could not be created or loaded in the Developer Portal if the `User Name Identifier` was configured in the Developer Portal but not in JWT.  (APIM-13566)
- The Gateway failed to parse query parameters from a URL that contained a question mark character (`?`) followed by an ampersand character (`&`).  (APIM-13875)
- In the Developer Portal authentication source settings, JWT scope names were being saved as lower case when they were added as upper case. (APIM-13816)
- The `Output Profile Type` was not being generated in the OpenAPI specification file. (APIM-12483)


:::note

In the September release, we began the gradual roll out of additional metrics across all accounts with API entitlements. All enabled customers will have the ability to use platform APIs for querying captured metrics. See [API Metrics](/docs/Atomsphere/API%20Management/Topics/api-metrics_0e0f3adb-2fcb-4af5-bbd1-aee58d2e713f.md) for more information. Additionally, API Publish and API Management customers have access to the API Dashboard for a graphical view of the health and performance of their APIs.

Adequate disk space is essential, as metrics typically consume approximately 1 KB per request daily. We cycle and remove files when they become redundant. You can tailor the following metrics settings:

- **Maximum File Size**: Initially set at 1 GB, customize this to fit your specific needs.
- **Event Rollover Time**: With the default set at six hours for Atoms, you have the flexibility to extend this to 24 hours or even reduce it based on your preferences.
- **404 Error Capture**: This feature, off by default, lets you record 404 errors within metrics data when activated. For a more comprehensive understanding, see [API Metrics](/docs/Atomsphere/API%20Management/Topics/api-metrics_0e0f3adb-2fcb-4af5-bbd1-aee58d2e713f.md).

:::