#  API Management

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-6f991f7c-6933-4b8d-871f-f031cd63a21b"/>
</head>


Features:

-  Added support for the Developer Portal to consume the OpenAPI 3.0 specification. (APIM-6466)

    To learn more about this feature, see [Open API Reference UI usage](/docs/Atomsphere/API%20Management/Topics/api-Swagger_UI_usage_4d7770b6-e338-4df4-b590-b496e3ca00e7.md).

-   Added a Gateway container property to allow TCP keepalive. The `com.boomi.container.apigateway.client.tcpKeepalive` property is true by default. \(APIM-6560\)

:::note

This feature is included in the runtime release.

:::

To learn more about this feature, see [Container properties](/docs/Atomsphere/API%20Management/Topics/api-Container_properties_7db1ee5a-03b9-4d07-931b-4e863e7cc6de.md).

-   Advanced SOAP functionality for uploading custom WSDLs is now available to any account with access to the related API service component. Previously, this was an optional account feature that had to be enabled. (APIM-6360)

    To learn more about this feature, see [API Service SOAP tab](/docs/Atomsphere/API%20Management/Topics/r-atm-API_SOAP_tab_2b9d1c7a-a2ed-48e8-ad87-8ca86b3ce247.md).


Fixes:

-  The generated Swagger 2.0 didn't indicate support for keyless plans. With this fix, the security section of the generated Swagger includes this information if applicable. (APIM-6236)
-  If a keyless plan is used, the security scheme generated for the OpenAPI specification will have the description “This api key is optional”. This description is displayed on the API authentication dialog in the Developer Portal. (APIM-6596)
-  The header name for an API Key was incorrectly generated as apiKey in the OpenAPI 3.0 document returned by the Atom behind the API Gateway. With this fix, it is correctly generated as X-API-Key. (APIM-6467)

-   Fixed an issue that was causing the following container log error to display for Atom or Gateway runtimes on Windows: `java.io.IOException: The process cannot access the file because another process has locked a portion of the file`

:::note

With this fix, `.lck` files may be visible in the events directory.

:::

\(APIM-6369\)

-   Updated the status of any deleted application's API keys to `DELETED`. This cleanup was a result of the March fix for [APIM-6321](/docs/Atomsphere/Release%20Notes/Mar2023/atm-Mar2023_API_Management_e4461a60-c689-4370-bf95-26db806dcb29.md). \(APIM-6405\)

