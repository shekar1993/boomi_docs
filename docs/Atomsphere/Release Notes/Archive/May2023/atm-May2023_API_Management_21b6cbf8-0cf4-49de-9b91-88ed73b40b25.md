#  API Management

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-21b6cbf8-0cf4-49de-9b91-88ed73b40b25"/>
</head>



:::note

Authentication Broker retirement updates:

 In line with our ongoing commitment to advancing and refining our platform, we have retired the Authentication Broker after implementing recent upgrades. As outlined in our official retirement policy [here](/docs/Atomsphere/Platform/atm-Boomi_feature_deprecation_process_policy_e4547744-664f-4539-bd23-b91676bcbd8a.md), the broker functionality ceased to be supported on the platform after March 31, 2023, and no further updates or patches will be made available.

Upcoming releases will introduce the following changes:

-    May Release: Creation and assignment of broker-based authentication to deployments will no longer be possible, and the installation of new brokers will be disabled.
-   June Release: All broker-related options will transition to read-only status, rendering any maintenance activities on existing brokers unfeasible.

We strongly recommend migrating all authentication brokers as soon as possible to avoid any disruption to your services.

:::

**Features**:

-   The API Lifecycle is an advanced versioning and service lifecycle manager for your APIs. It allows you to create, bundle, migrate, and promote an API from the associated process. The API Lifecycle is available as an opt-in account feature for all accounts with API Management access. (APIM-6542)

    To learn more about this feature, see [API Lifecycle](/docs/Atomsphere/API%20Management/Topics/api-API_Lifecycle_aefeeadd-80b6-4d50-b365-7f985313cd19.md).

:::note

API proxies are not currently supported for the API Lifecycle, but will be in an upcoming release.

:::

Known issue: In the API Lifecycle **Deploy to another environment** and **Edit Deployment** screens, in some cases, the authentication roles selection is not reset if the authentication source selection changes. To ensure that the roles are reset, select the **x** button to remove the currently-selected authentication source before selecting a new one.

-   New enhanced dashboard that includes a comprehensive overview of API usage statistics and in-depth analytics. This can be enabled in account features. \(APIMIND-979\)

    To learn more about this feature, see [Dashboard](/docs/Atomsphere/API%20Management/Topics/r-api-Dashboard_d7c56437-c100-436f-b3e4-bde7a80d11be.md).

    Known limitation: The dashboard's **Environment** filter does not support data from API requests made before May 1, 2023.

-   Added the ability to configure query parameters on an API endpoint. \(APIM-6303\)

    To learn more about this feature, see [Configuring a REST endpoint in an API service component](/docs/Atomsphere/API%20Management/Topics/t-atm-Configuring_a_REST_route_in_an_API_component_c61c0d7e-ecc9-47c3-8fc9-452c8ffc62aa.md).

-   The event file rollover time for Gateways and Atoms is now configurable. It was previously set at one day, but can now be set for 24 hours or less and the default is six hours. \(APIM-6568\)

    To learn more about this feature, see [Container properties](/docs/Atomsphere/API%20Management/Topics/api-Container_properties_7db1ee5a-03b9-4d07-931b-4e863e7cc6de.md).

-   Enhanced the `DeployedApiCallSummary` API to support querying by month and year. \(APIMIND-1787\)

    To learn more about this feature, see [Metrics](/docs/Atomsphere/API%20Management/Topics/api-metrics_0e0f3adb-2fcb-4af5-bbd1-aee58d2e713f.md).


-   Added the `Environment` field to the `deployedAPICallSummary` API. \(APIM-6828\)

    To learn more about this feature, see [Metrics](/docs/Atomsphere/API%20Management/Topics/api-metrics_0e0f3adb-2fcb-4af5-bbd1-aee58d2e713f.md).


**Fixes:**

-   Fixed an issue that was causing incorrect validation of the resource path when importing an endpoint. \(APIM-2378\)
-   Fixed an issue that was preventing a user to enter duplicate external ports in the Shared Web Server settings. \(APIM-3187\)
-   Fixed an issue that was causing an invalid issuer URL error in the logs when creating a JWT authentication source from the UI. \(APIM-5680\)
-   Fixed an issue that was preventing a shared server information update on an API to return the authtoken when it was executed for the first time for a new Atom. \(APIM-6631\)

