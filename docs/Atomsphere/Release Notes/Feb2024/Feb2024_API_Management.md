#  API Management

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-b3093c59-7001-4812-b64c-c91eac84330b"/>
</head>

<!--API Management features and fixes are not included in the runtime release.-->

:::note

In preparation for the Gateway upgrade coming in early 2024, you must upgrade any gateways still running Java 8 to Java 11 as soon as possible.  See [Gateway Upgrade](<../../API Management/Topics/api-Upgrading_an_API_Gateway_to_Java_11_bdcbc1ee-9505-489c-a600-86fdb7b10c2f.md>) for more information.

:::

**We added these features:**

- API proxy components are now supported in the API Lifecycle Manager. With this addition, you can filter APIs in the API Lifecycle by API service component, API proxy component, or all.  (APIM-11510, APIM-12048)

To learn more about this feature, see [API Lifecycle](</docs/Atomsphere/API%20Management/Topics/api-API_Lifecycle_aefeeadd-80b6-4d50-b365-7f985313cd19.md>).

**We fixed these issues:**

- Locking errors were occurring when reading event files on Windows. (APIM-11730)
- When an API key was regenerated, it displayed as deleted. (APIM-12319)
- Fixed an issue that was causing a Gateway to throw a ``JOSE header typ (type) at+jwt not allowed`` error. (APIM-12334)

:::note

In the September release, we began the gradual roll out of API Metrics and Dashboard across all accounts. If you want to stay ahead of the curve, [enable it today](/docs/Atomsphere/API%20Management/Topics/r-api-Dashboard_d7c56437-c100-436f-b3e4-bde7a80d11be.md).

Adequate disk space is essential, as metrics typically consume approximately 1 KB per request daily. We cycle and remove files when they become redundant. You can tailor the following metrics settings:

 - **Maximum File Size**: Initially set at 1 GB, customize this to fit your specific needs.

 - **Event Rollover Time**: With the default set at six hours for Gateways and Atoms, you have the flexibility to extend this to 24 hours or even reduce it based on your preferences.

  - **404 Error Capture**: This feature, off by default, lets you record 404 errors within metrics data when activated. For a more comprehensive understanding, see [API Metrics](/docs/Atomsphere/API%20Management/Topics/api-metrics_0e0f3adb-2fcb-4af5-bbd1-aee58d2e713f.md).

:::