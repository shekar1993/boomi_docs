#  API Management

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-5397b61c-6225-47df-a49c-8d1e1854a4c8"/>
</head>


**Note:**

Authentication Broker retirement updates:

In line with our ongoing commitment to advancing and refining our platform, we retired the Authentication Broker after implementing recent upgrades. As outlined in our official retirement policy [here](atm-Boomi_feature_deprecation_process_policy_e4547744-664f-4539-bd23-b91676bcbd8a.md), we stopped supporting the broker functionality on the platform after March 31, 2023, and no further updates or patches will be made available. The following changes will be implemented in the upcoming release:

-   November release: All broker-related functionality will stop operating. Any attempts to use the Authentication Broker after this point will not succeed. We strongly encourage you to transition to our updated authentication methods before this deadline to ensure uninterrupted service.

**We added these features:**

-   The API Lifecycle feature is now turned on for all accounts by default. Previously, you had to turn on this feature. The API Lifecycle is an advanced versioning and service lifecycle manager for your APIs. It allows you to create, bundle, migrate, and promote an API from the associated process. \(APIM-10130\)

    **Note:** Known issue: In some cases, concurrent deployments of a large number of components can cause database errors and the deployment may fail, but should succeed on retry. If the issue persists, or happens frequently, you may [disable the feature](../../API%20Management/Topics/api-metrics_0e0f3adb-2fcb-4af5-bbd1-aee58d2e713f.md) for your account.

    To learn more about this feature, see [API Lifecycle](../../API%20Management/Topics/api-API_Lifecycle_aefeeadd-80b6-4d50-b365-7f985313cd19.md).

-   Beginning with this release, we begin the gradual roll out of API Metrics and Dashboard across all accounts. If you want to stay ahead of the curve, enable it today.

    **Note:** Adequate disk space is essential, as metrics typically consume approximately 1 KB per request daily. We cycle and remove files when they become redundant. You can tailor the following metrics settings:

    -   **Maximum File Size**: Initially set at 1 GB, customize this to fit your specific needs.
    -   **Event Rollover Time**: With the default set at six hours for Gateways and Atoms, you have the flexibility to extend this to 24 hours or even reduce it based on your preferences.
    -   **404 Error Capture**: This feature, off by default, lets you record 404 errors within metrics data when activated. For a more comprehensive understanding, see [API Metrics](../../API%20Management/Topics/api-metrics_0e0f3adb-2fcb-4af5-bbd1-aee58d2e713f.md).
-   Added the ability to copy and paste text in the dashboard's call log, error log, and invalid requests tables. \(APIM-10528\)

    To learn more about this feature, see [Dashboard](../../API%20Management/Topics/r-api-Dashboard_d7c56437-c100-436f-b3e4-bde7a80d11be.md).

-   Added the ability to resize the column widths in the dashboard's tables. The sizing is retained for a user's session. \(APIM-10682\)

    To learn more about this feature, see [Dashboard](../../API%20Management/Topics/r-api-Dashboard_d7c56437-c100-436f-b3e4-bde7a80d11be.md).


**We fixed these issues**:

-   OData APIs caused the link reference in the return URL to point to the Atom URL instead of the gateway URL. \(APIM-5560\)
-   A display issue with the **Select Certificate** field on the Gateway **Location Settings** screen. \(APIM-10234\)