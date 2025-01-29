# API Management

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-15acb202-b818-4d35-bcc4-d1388c0aae24"/>
</head>

:::note

In preparation for the Gateway upgrade coming in May 2024, you must upgrade any gateways still running Java 8 to Java 11 as soon as possible.  See [Java Upgrade](<../../API Management/Topics/api-Upgrading_an_API_Gateway_to_Java_11_bdcbc1ee-9505-489c-a600-86fdb7b10c2f.md>) for more information.

:::

:::note

The May 2024 release will include a major upgrade to the API Gateway as a foundation for future enhancements. Carefully review these important notes relevant to the May Gateway release.

- Breaking change: If an API is called with an api key that is invalid or has expired, the gateway will now fail with an HTTP status code of 401, instead of the previous response of 403. This change aligns the default behavior with industry standards.
- Due to a significant upgrade to the underlying database implementation, the gateway will be forced to temporarily enable ‘async’ start mode during the initial upgrade. This allows the gateway nodes to retry for an updated database as they restart, resulting in a service disruption of the gateway until the upgrade is complete for the entire cluster.
- At the time of upgrade, rate and quota limit counts used for plan enforcement will be reset to zero as the repository is updated. This will only impact enforcement during that window and will not affect the counting or reporting of transaction metrics in the API dashboard.

In order to control when there will be a service disruption, we recommend taking the Runtime Release prior to Boomi pushing the Runtime release to your environments on May 11.

:::

**We added these features:**

- The Developer Portal now has limited support for JWT authentication for the “Try it out” feature, and by default uses Proof Key for Code Exchange (PKCE) Authorization Code flow with `openid` scope for JWT authentication.  (APIM-12580, APIM-12719)

  :::note

  The Developer Portal uses an access token to execute APIs. Some identity providers, such as Google and Microsoft Azure, issue opaque access tokens. The API Gateway does not support opaque access tokens, therefore, APIs that use identity providers that issue opaque tokens cannot be tested from the Developer Portal.

  :::

  To learn more about this feature, see [API Catalog Page](docs/Atomsphere/API%20Management/Topics/api-API_Catalog_page_fd7fbc0b-51fd-4603-b471-9d6fd1d90e45.md).

-  Added a notification banner in the authentication configuration for a deployed API. This notification contains the redirect URI to add to your IDP for API execution using JWT in the Developer Portal. (APIM-2195)

    To learn more about this feature, see [Adding an Authentication Source to an API](docs/Atomsphere/API%20Management/Topics/t-api-Adding_an_authentication_source_to_an_API_9e89b1cd-03a3-42ad-8481-9f2a1f778a48.md).

- Increased the JSON rule `configuration` character limit for all supported policies on a Gateway from 12,000 to 40,000 characters. (APIM-12380)

  To learn more about this feature, [Creating a Deployed API Policy Rule](docs/Atomsphere/API%20Management/Topics/api-Creating_deployedapipolicyrule_3c534f30-dba9-4222-8916-ed876716f46a.md).

- When importing an OpenAPI specification file from a file or URL, it is no longer mandatory to specify a connection. (APIM-12156)

  To learn more about this feature, see [Generating API Endpoints in an API Service Component](docs/Atomsphere/API%20Management/Topics/api-Generating_API_endpoints_in_an_API_Service_component_from_an_external_file.md).


- New Gateways are now created with Java 11 instead of Java 8. (APIM-7240)

  To learn more about this feature, see [Gateway System Requirements](/docs/Atomsphere/API%20Management/Topics/api-Gateway_system_requirements_df241fcb-ef1d-4842-8377-b01dd338b865.md).

**We fixed these issues:**

- Events from a subdirectory within the events folder were not reported after starting a new multi-node Gateway. (APIM-12422)
- Policies with more than 4,000 characters could not be saved. (APIM-12380)
- In Windows environments, lock errors were occurring for event files. (APIM-12968)
- With API metrics enabled, there was high CPU usage on execution Atoms. (APIM-12949)
- The ```hostname``` displayed as `undefined` for APIs in the Developer Portal. (APIM-11202)

  :::note

  In the September release, we began the gradual roll out of additional metrics across all accounts with API entitlements. All enabled customers will have the ability to use platform APIs for querying captured metrics. See [API Metrics](/docs/Atomsphere/API%20Management/Topics/api-metrics_0e0f3adb-2fcb-4af5-bbd1-aee58d2e713f.md) for more information. Additionally, API Publish and API Management customers have access to the API Dashboard for a graphical view of the health and performance of their APIs.

  Adequate disk space is essential, as metrics typically consume approximately 1 KB per request daily. We cycle and remove files when they become redundant. You can tailor the following metrics settings:
  - **Maximum File Size**: Initially set at 1 GB, customize this to fit your specific needs.
  - **Event Rollover Time**: With the default set at six hours for Atoms, you have the flexibility to extend this to 24 hours or even reduce it based on your preferences.
  - **404 Error Capture**: This feature, off by default, lets you record 404 errors within metrics data when activated. For a more comprehensive understanding, see [API Metrics](/docs/Atomsphere/API%20Management/Topics/api-metrics_0e0f3adb-2fcb-4af5-bbd1-aee58d2e713f.md).

  :::