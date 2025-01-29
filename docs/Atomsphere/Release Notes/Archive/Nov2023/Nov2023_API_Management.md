#  API Management

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-bab495cc-a9cc-42c4-b22e-cfb9ce217f95"/>
</head>

:::note

In preparation for the Gateway upgrade coming in 2024, you must upgrade your Gateways to Java 11 before January 5, 2024.  See [Gateway Upgrade](../../api%20management/topics/api-upgrading_an_api_gateway_to_java_11_bdcbc1ee-9505-489c-a600-86fdb7b10c2f.md) for more information.

:::

:::note

Authentication Broker retirement updates:

In line with our ongoing commitment to advancing and refining our platform, we retired the Authentication Broker after implementing recent upgrades. As outlined in our official retirement policy [here](atm-Boomi_feature_deprecation_process_policy_e4547744-664f-4539-bd23-b91676bcbd8a.md), we stopped supporting the broker functionality on the platform after March 31, 2023, and no further updates or patches will be made available. The following changes will be implemented in the upcoming release:

-   November release: All broker-related functionality will stop operating. Any attempts to use the Authentication Broker after this point will not succeed. External delegate authentication for APIs will not be supported. We strongly encourage you to transition to our updated authentication methods before this deadline to ensure uninterrupted service.
:::

-   In the September release, we began the gradual roll out of API Metrics and Dashboard across all accounts. If you want to stay ahead of the curve, [enable it today](/docs/Atomsphere/API%20Management/Topics/r-api-Dashboard_d7c56437-c100-436f-b3e4-bde7a80d11be.md).

    **Note:** Adequate disk space is essential, as metrics typically consume approximately 1 KB per request daily. We cycle and remove files when they become redundant. You can tailor the following metrics settings:

    -   **Maximum File Size**: Initially set at 1 GB, customize this to fit your specific needs.

    -   **Event Rollover Time**: With the default set at six hours for Gateways and Atoms, you have the flexibility to extend this to 24 hours or even reduce it based on your preferences.

    -   **404 Error Capture**: This feature, off by default, lets you record 404 errors within metrics data when activated. For a more comprehensive understanding, see [API Metrics](../../API%20Management/Topics/api-metrics_0e0f3adb-2fcb-4af5-bbd1-aee58d2e713f.md).

:::note

 The 23.11.2 version of the platform includes previously removed **api-management** and **api-authentication-service** libraries. The broker feature has been deprecated, and the libraries are no longer needed, however, containers that previously had the feature will attempt to download an update for it, and would block the container from applying the new release. (APIM-11418)

:::


**We fixed these issues:**
- In the following environment, a process could not deploy if the API Lifecycle feature was enabled:
  - The listener processes and its API services were deployed.
  - An API service has not been deployed to the environment since September 2022.
  - The deployment was not on a Gateway. (APIM-11082)



