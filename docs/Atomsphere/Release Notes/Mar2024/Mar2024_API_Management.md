#  API Management

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-0afe3a77-248b-42a5-95c4-07376bf28e22"/>
</head>

**Deferred**: Subsequent to the March 2024 Runtime release, features and fixes for the March platform release are postponed and will be rescheduled.

  :::note

  In preparation for the Gateway upgrade coming in April 2024, you must upgrade any gateways still running Java 8 to Java 11 as soon as possible.  See [Java Upgrade](<../../API Management/Topics/api-Upgrading_an_API_Gateway_to_Java_11_bdcbc1ee-9505-489c-a600-86fdb7b10c2f.md>) for more information.

  :::

  :::note

  Breaking Changes

  The April 2024 release will include a major upgrade to the API Gateway as a foundation for future enhancements. Carefully review these important notes relevant to the April gateway release.

  - Breaking change: If an API is called with an api key that is invalid or has expired, the gateway will now fail with an HTTP status code of 401, instead of the previous response of 403. This change aligns the default behavior with industry standards.
  - Due to a significant upgrade to the underlying database implementation, the gateway will be forced to enable ‘async’ start mode during the initial upgrade. This allows the gateway nodes to retry for an updated database as they restart, until the entire cluster is upgraded, creating a short period of gateway down time during the upgrade. This will result in roughly 2 to 4.5 minutes of potential disruption before all nodes are stabilized, though some nodes may be able to route traffic earlier during this time.
  - At the time of upgrade, rate and quota limit counts used for plan enforcement will be reset to zero as the repository is updated. This will only impact enforcement during that window and will not affect the counting or reporting of transaction metrics in the API dashboard.

  Due to these changes, we strongly recommend that you plan to apply the April release in a lower environment to test during the runtime release window, and apply the gateway upgrade during one of your maintenance windows.
    
  :::

**We added these features:**

- You can use JWT authentication to execute APIs from the Developer Portal. (APIM-12580)

  :::note
  Proof Key for Code Exchange (PKCE) for Authorization Code flow is not supported at this time.

  :::

- Increased the character limit for the JSON input payload validation policy on a Gateway from 12,000 to 40,000 characters. (APIM-12380)
- When importing an OpenAPI specification file from a file or URL, it is no longer mandatory to specify a connection. (APIM-12156)
- New Gateways are now created with Java 11 instead of Java 8. (APIM-7240)


**We fixed these issues:**

- Events from a subdirectory within the events folder were not reported after starting a new multi-node Gateway. (APIM-12422)
- Policies with more than 4,000 characters could not be saved. (APIM-12380)

  :::note

  In the September release, we began the gradual roll out of additional metrics across all accounts with API entitlements. All enabled customers will have the ability to use platform APIs for querying captured metrics. See [API Metrics](/docs/Atomsphere/API%20Management/Topics/api-metrics_0e0f3adb-2fcb-4af5-bbd1-aee58d2e713f.md) for more information. Additionally, API Publish and API Management customers have access to the API Dashboard for a graphical view of the health and performance of their APIs.

  Adequate disk space is essential, as metrics typically consume approximately 1 KB per request daily. We cycle and remove files when they become redundant. You can tailor the following metrics settings:
  - **Maximum File Size**: Initially set at 1 GB, customize this to fit your specific needs.
  - **Event Rollover Time**: With the default set at six hours for Atoms, you have the flexibility to extend this to 24 hours or even reduce it based on your preferences.
  - **404 Error Capture**: This feature, off by default, lets you record 404 errors within metrics data when activated. For a more comprehensive understanding, see [API Metrics](/docs/Atomsphere/API%20Management/Topics/api-metrics_0e0f3adb-2fcb-4af5-bbd1-aee58d2e713f.md).

  :::