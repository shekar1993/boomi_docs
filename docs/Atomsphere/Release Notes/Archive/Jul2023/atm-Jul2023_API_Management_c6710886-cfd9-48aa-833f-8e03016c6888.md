#  API Management

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-c6710886-cfd9-48aa-833f-8e03016c6888"/>
</head>


API Management features and fixes are not in the Runtime Release.



**Note:**

Authentication Broker retirement updates:

In line with our ongoing commitment to advancing and refining our platform, we have retired the Authentication Broker after implementing recent upgrades. As outlined in our official retirement policy [here](atm-Boomi_feature_deprecation_process_policy_e4547744-664f-4539-bd23-b91676bcbd8a.md), the broker functionality ceased to be supported on the platform after March 31, 2023, and no further updates or patches will be made available.

Upcoming releases will introduce the following changes:

-   July release: All broker-related options transition to read-only status, rendering any maintenance activities on existing brokers unfeasible.
-   August release: All broker-related options will be removed from the platform, any users should stop using the Broker immediately.

We strongly recommend migrating all authentication brokers as soon as possible to avoid any disruption to your services.

**Features**:

-   Added the `com.boomi.container.apigateway.metrics.reportNotFound` gateway container property and the `com.boomi.container.sharedServer.http.metrics.reportNotFound` Atom container properties. These allow you to specify if 404s are captured for metrics. This behavior is false by default. \(APIM-6393\)

    To learn more about this feature, see [Container properties](../../API%20Management/Topics/api-Container_properties_7db1ee5a-03b9-4d07-931b-4e863e7cc6de.md) and [Metrics](../../API%20Management/Topics/api-metrics_0e0f3adb-2fcb-4af5-bbd1-aee58d2e713f.md).


**Fixes**:

-   Fixed an issue in the API Lifecycle's **Deploy to another environment** and **Edit Deployment** screens, where, in some cases, the authentication roles selection did not reset if the authentication source selection changed. \(APIM-6825\)
-   Fixed an issue that was causing single node atoms without local storage to read and write metrics data to different directories. \(APIM-7211\)
-   Fixed an issue in the Swagger Visualization portal that was causing an unnecessary character to display next to the **required** label. \(APIM-7200\)
-   Improved the error message when an OpenAPI specification file is uploaded with a URL template into an API proxy to make it clear that URLs with variables are not currently supported. \(APIM-5447\)
-   Fixed an issue with the API Lifecycle that was not checking if a user had the correct privileges. With this fix, to use the **Deploy Latest**option, you must have **Packaged Component Management** and **Packaged Component Deployment** privileges. To use the **Deploy to Another Environment** option, you must have the **Packaged Component Deployment** privilege. \(APIM-7212\)
-   Improved error messages when an OpenAPI specification file is imported with an unsupported operation type or when the profile generation service fails. \(APIM-3184\)
-   Fixed an issue with the events directory where a warning was generated about files in a certain format being ignored. With this fix, only files that do not start with `event` and end with `.bevt` are ignored. \(APIM-7176\)