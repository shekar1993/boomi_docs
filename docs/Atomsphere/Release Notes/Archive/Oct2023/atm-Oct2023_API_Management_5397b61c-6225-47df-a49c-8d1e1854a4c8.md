#  API Management

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-5397b61c-6225-47df-a49c-8d1e1854a4c8"/>
</head>


:::note

Authentication Broker retirement updates:

In line with our ongoing commitment to advancing and refining our platform, we retired the Authentication Broker after implementing recent upgrades. As outlined in our official retirement policy [here](atm-Boomi_feature_deprecation_process_policy_e4547744-664f-4539-bd23-b91676bcbd8a.md), we stopped supporting the broker functionality on the platform after March 31, 2023, and no further updates or patches will be made available. The following changes will be implemented in the upcoming release:

-   November release: All broker-related functionality will stop operating. Any attempts to use the Authentication Broker after this point will not succeed. We strongly encourage you to transition to our updated authentication methods before this deadline to ensure uninterrupted service.

-   In the September release, we began the gradual roll out of API Metrics and Dashboard across all accounts. If you want to stay ahead of the curve, [enable it today](/docs/Atomsphere/API%20Management/Topics/r-api-Dashboard_d7c56437-c100-436f-b3e4-bde7a80d11be.md).

    **Note:** Adequate disk space is essential, as metrics typically consume approximately 1 KB per request daily. We cycle and remove files when they become redundant. You can tailor the following metrics settings:

    -   **Maximum File Size**: Initially set at 1 GB, customize this to fit your specific needs.

    -   **Event Rollover Time**: With the default set at six hours for Gateways and Atoms, you have the flexibility to extend this to 24 hours or even reduce it based on your preferences.

    -   **404 Error Capture**: This feature, off by default, lets you record 404 errors within metrics data when activated. For a more comprehensive understanding, see [API Metrics](../../API%20Management/Topics/api-metrics_0e0f3adb-2fcb-4af5-bbd1-aee58d2e713f.md).

:::



**We added these features:**

-   The API Policy Manager. Previously, this functionality was available via the API, but this new UI allows you to easily configure custom policy rules for your APIs. \(APIM-6142\)

    :::note This feature will be available subsequent to the the October 2023 platform release.

    **Note:** Deprecation notice: The API Policy Manager uses new timing values. Due to this, the ```BEFORE_STANDARD_POLICIES``` and ```AFTER_STANDARD_POLICIES``` fields in the deployedApiUpdate mutation will be deprecated in six months. Beginning with this release, if these legacy values are used, Boomi will convert to new timing values. The new timing values are as follows:
     - ```BEFORE_REQUEST_BEFORE_STANDARD_POLICIES```
     - ```BEFORE_REQUEST_AFTER_STANDARD_POLICIES```
     - ```AFTER_RESPONSE_BEFORE_STANDARD_POLICIES```
     - ```AFTER_RESPONSE_AFTER_STANDARD_POLICIES```

    This conversion is based on the type of policy, or if the policy type allows the ```REQUEST``` and ```RESPONSE``` scopes, it is based on the ```scope``` field in the policy configuration.<br/>
    Do not send any requests that mix the legacy timing values with the new timing values. The order of execution cannot be guaranteed if legacy and new timing values are used in the same update request.

    :::

- The ```deployedApiCallDetail``` query now includes the ```sortOrder``` field, which allows you to sort results by ascending or descending order. (APIM-10312)

    To learn more about this feature, see [Metrics](/docs/Atomsphere/API%20Management/Topics/api-metrics_0e0f3adb-2fcb-4af5-bbd1-aee58d2e713f.md)

- Support for time zones to the ```deployedApiCallSummary``` query. The default is UTC. \(APIM-8895\)

    To learn more about this feature, see [Metrics](/docs/Atomsphere/API%20Management/Topics/api-metrics_0e0f3adb-2fcb-4af5-bbd1-aee58d2e713f.md)

- Pagination is now available on the Dashboard. (APIM-10410)

    To learn more about this feature, see [Dashboard](../../API%20Management/Topics/r-api-Dashboard_d7c56437-c100-436f-b3e4-bde7a80d11be.md).

- Single-digit host names can be added in URLs. (APIM-10955)

- The ```Like``` operator is now available to filter metrics API results. (APIM-10864) 

    :::note This is available for the String operator only. 

    To learn more about this feature, see [Metrics](/docs/Atomsphere/API%20Management/Topics/api-metrics_0e0f3adb-2fcb-4af5-bbd1-aee58d2e713f.md)

    :::


**We fixed these issues**:

- Shared server logs for sub accounts now correctly log when an API is invoked using the sub account. (APIM-3270)
- The key call count query now returns the correct count of API calls handled by all the nodes in multi-node gateway. (APIM-9969)  
