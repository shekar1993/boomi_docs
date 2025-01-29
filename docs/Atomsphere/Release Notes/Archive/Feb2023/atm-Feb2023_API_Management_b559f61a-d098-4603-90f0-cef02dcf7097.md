#  API Management


<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-b559f61a-d098-4603-90f0-cef02dcf7097"/>
</head>


Features:

**Deferred:** Subsequent to the February 2023 AtomSphere Release, the following OpenAPI 3.0 feature was postponed and will be rescheduled.

-   API documentation in OpenAPI Specification (OAS) 3.0 format can be generated for deployed APIs. With this feature, containers can return 2.0 (Swagger) and 3.0 OpenAPI documentation. (APIM-5153)

:::note

For existing API deployments, openapi.json files will be available by Thursday, February 23. \(APIM-4300\)

:::

-  When an API is created from a process, the API is saved in the folder where the process is located. It was previously saved in the top-level account. (APIM-6066)

    To learn more about this feature, see [Creating an API from a Process](/docs/Atomsphere/API%20Management/Topics/api-creating_an_api_from_a_process_4df84d4c-f2df-4903-be8b-dcff2f2d0bdb.md).

-   Added the ability to configure the refresh and retry intervals when retrieving a JWKS \(JSON Web Key Set\) for a JWT \(JSON Web Token\) IDP in the following container properties:

    -   `com.boomi.container.apigateway.jwksprovider.refresh.interval`
    -   `com.boomi.container.apigateway.jwksprovider.retry.interval`
    
    \(APIM-5880\)

    To learn more about this feature, see [Container properties](/docs/Atomsphere/API%20Management/Topics/api-container_properties_7db1ee5a-03b9-4d07-931b-4e863e7cc6de.md).


Fixes:

-   Fixed an issue that was preventing some API keys from working after an environment migration in some cases. \(APIM-6084\)

-   Changed the audit log message from "Update" to "Delete" when an application is deleted. \(APIM-5855\)

-   Added audit log entries for the following:

    -   When a Developer Portal user creates, updates, or deletes an application.

    -   When a Developer Portal user creates, updates, regenerates, or deletes a subscription

    \(APIM-3168\)

-   Fixed an issue that was preventing OData conflicts from being reported. An error message now displays if any conflicts occur. \(APIM-6172\)

-   Fixed the following issues regarding plans:
    -   Fixed an issue that prevented a keyless plan on a deployed API from being deleted.
    -   Fixed an issue that allowed a keyless plan to be selected for non-Gateway deployments. Keyless plans can only be assigned for deployments on a Gateway.
    -   Added an error that displays if a user attempts to add a disabled plan to an API deployment via the REST API. \(APIM-6121\)
-   Removed the option to restore an API Gateway. Although this option was visible to users, they did not have permission to use it. \(APIM-6030\)
-   Fixed an issue that prevented JSON profile descriptions from displaying in generated Swagger definitions. \(APIM-6004\)
-   Fixed an issue that prevented a Gateway from running in synchronous mode if API Metrics were enabled. \(APIM-5927\)
-   Fixed an issue in the Shared Web Server Cloud options that caused the **SSL** option to work incorrectly. \(APIM-5784\)

