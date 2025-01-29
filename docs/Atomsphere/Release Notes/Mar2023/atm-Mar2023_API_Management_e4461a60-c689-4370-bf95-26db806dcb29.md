#  API Management

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-e4461a60-c689-4370-bf95-26db806dcb29"/>
</head>




Features:

-   API documentation in OpenAPI Specification (OAS) 3.0 format can be generated for deployed APIs. With this feature, containers can return 2.0 (Swagger) and 3.0 OpenAPI documentation. (APIM-5153)

    **Known Issues**:

    -   In the generated OpenAPI 3.0 document, the value of the `name` field in the apiKey security scheme is incorrect. The `name` is the name of the HTTP header that holds the api key that is used for authentication and should be set to `X-API-Key`.
    -   In the generated OpenAPI 3.0 document, the `name` is set incorrectly to `apiKey`. Use the `X-API-Key` header to pass the api key when calling the APIs through the gateway.
    This is scheduled to be fixed in the April release.

    

:::note

For existing API deployments, `openapi.json` files will be available by Tuesday, March 21. \(APIM-4300\)

:::

To learn more about this feature, see [OpenAPI Specification File Reference](/docs/Atomsphere/Integration/Event-based%20integration/API%20Management/int-Open_API_Specification_File_Reference_c22e9762-4e86-400f-a87a-3244c780e361.md).

-   The `com.boomi.container.apigateway.transitions.enabled` Gateway container property is now true by default. This property adds logging that helps diagnose 503 communication issues between a Gateway and runtime containers. \(APIM-5876\)

    To learn more about this feature, see [Container properties](/docs/Atomsphere/API%20Management/Topics/api-Container_properties_7db1ee5a-03b9-4d07-931b-4e863e7cc6de.md).

-   Added new custom properties that allow you to configure the maximum size of metrics event files for Gateways and Atoms. These properties were not previously configurable and the maximum file size was 4 GB. With this feature, the Gateway \(`com.boomi.container.apigateway.metrics.maxFileSize`\) and Atom \(`com.boomi.container.sharedServer.http.metrics.maxFileSize`\) properties are 1 GB by default. \(APIM-6256\)

    To learn more about this feature, see [Container properties](/docs/Atomsphere/API%20Management/Topics/api-Container_properties_7db1ee5a-03b9-4d07-931b-4e863e7cc6de.md) and [Metrics](/docs/Atomsphere/API%20Management/Topics/api-metrics_0e0f3adb-2fcb-4af5-bbd1-aee58d2e713f.md).


-   For metrics reporting, configuring a local directory is no longer required. If it is not configured, the metrics are reported in `<base_dir>/<localhost_id>/events` by default. \(APIM-6248\)

    To learn more about this feature, see [Metrics](/docs/Atomsphere/API%20Management/Topics/api-metrics_0e0f3adb-2fcb-4af5-bbd1-aee58d2e713f.md).


Fixes:

-   Added support for `multipart/form-data` input or output type in an API Service component. Before this change, users could not select `multipart/form-data` as the input or output type for an endpoint. This lack of support caused an issue where, in some cases, the `multipart/form-data` input or output type configured in the operation of the listener process was overridden to **None** in the API Service component. \(APIM-5787\)


-   Fixed an issue that prevented an application's active subscriptions from being deleted on the platform when the application was deleted through the Developer Portal. Impacted subscriptions were not usable, but plans used by these subscriptions could not be deleted. \(APIM-6321\)

-   Fixed an issue that prevented `deployedApi` fields from being returned when using the `deployedApiCallDetail` query. \(APIM-6354\)
