# API Management

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-af8fe3a5-2265-4099-99fc-4da0a818aba9"/>
</head>

**We added these features:**

This release includes a major upgrade to the API Gateway as a foundation for future enhancements. Carefully review these important notes relevant to the May Gateway release.

- Breaking change: If an API is called with an API key that is invalid or has expired, the gateway will now fail with an HTTP status code of 401, instead of the previous response of 403. This change aligns Boomi's default behavior with industry standards.
- Due to a significant upgrade to the underlying database implementation, the gateway will be forced to temporarily enable ‘async’ start mode during the initial upgrade. This allows the gateway nodes to retry for an updated database as they restart, resulting in a service disruption of the gateway until the upgrade is complete for the entire cluster.
- If you are using SOCKS5 forward proxies, if there are proxy authentication failures, you will see 502 instead of 503.
- At the time of upgrade, rate and quota limit counts used for plan enforcement will be reset to zero as the repository is updated. This will only impact enforcement during that window and will not affect the counting or reporting of transaction metrics in the API dashboard.

In order to control when there will be a service disruption, we recommend taking the Runtime release prior to Boomi pushing the Runtime release to your environments on May 11. For additional information about the upgrade see [API Management Gateway Upgrade: Expectations and Troubleshooting](https://community.boomi.com/s/article/API-Management-Gateway-Upgrade-Expectations-and-Troubleshooting).

- The following policies are now supported:

  - [Assign Attributes](docs/Atomsphere/API%20Management/Topics/api-assign_attributes_policy.md) - Set variables such as request attributes and other execution context attributes.
  - [Assign Content](docs/Atomsphere/API%20Management/Topics/api-assign_content_policy.md) - Change or transform the content of the request body or response body.
  - [Dynamic Routing Policy](/docs/Atomsphere/API%20Management/Topics/api-dynamic_routing_policy.md) - Dispatch inbound calls to different targets and endpoints or rewrite URIs.
  - [HTTP Callout](/docs/Atomsphere/API%20Management/Topics/api-http_callout_policy.md) - Invoke an HTTP(S) URL and place a subset or all of the content in one or more variables of the request execution context.
  - [JSON Threat Protection](/docs/Atomsphere/API%20Management/Topics/api-json_threat_protection_policy.md) - Validate a JSON request body by specifying limits for various JSON structures.
  - [Regex Threat Protection](/docs/Atomsphere/API%20Management/Topics/api-regex_threat_protection_policy.md) - Extract information from a request (headers, path, query parameters, body payload) and evaluate that content against pre-defined regular expressions.
  - [XML Threat Protection](docs/Atomsphere/API%20Management/Topics/api-xml_threat_protection_policy.md) - Validate an XML request body by applying limits on XML structures such as elements, entities, attributes, and string values.
  - [XML Validation](/docs/Atomsphere/API%20Management/Topics/api-json_threat_protection_policy.md) - Validate XML using an XSD schema.


**We fixed these issues:**

- The default Developer Portal definition screen was unreadable when hovering over text. (APIM-13090)
- You could not save an API proxy component if it had encrypted headers. (APIM-13574)
- The health check endpoint was missing after a database recovery on a multi-node Gateway. (APIM-12716)
- If there was an error in the **Routing Headers** field, the panel didn't expand automatically. (APIM-13116)

:::note

In the September release, we began the gradual roll out of additional metrics across all accounts with API entitlements. All enabled customers will have the ability to use platform APIs for querying captured metrics. See [API Metrics](/docs/Atomsphere/API%20Management/Topics/api-metrics_0e0f3adb-2fcb-4af5-bbd1-aee58d2e713f.md) for more information. Additionally, API Publish and API Management customers have access to the API Dashboard for a graphical view of the health and performance of their APIs.

Adequate disk space is essential, as metrics typically consume approximately 1 KB per request daily. We cycle and remove files when they become redundant. You can tailor the following metrics settings:

- **Maximum File Size**: Initially set at 1 GB, customize this to fit your specific needs.
- **Event Rollover Time**: With the default set at six hours for Atoms, you have the flexibility to extend this to 24 hours or even reduce it based on your preferences.
- **404 Error Capture**: This feature, off by default, lets you record 404 errors within metrics data when activated. For a more comprehensive understanding, see [API Metrics](/docs/Atomsphere/API%20Management/Topics/api-metrics_0e0f3adb-2fcb-4af5-bbd1-aee58d2e713f.md).

:::
