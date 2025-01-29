# API Management 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-1b9d4962-7c5e-49fa-98d3-3bdf3cab822b"/>
</head>



**Note:**

Authentication Broker retirement updates:

In line with our ongoing commitment to advancing and refining our platform, we retired the Authentication Broker after implementing recent upgrades. As outlined in our official retirement policy [here](atm-Boomi_feature_deprecation_process_policy_e4547744-664f-4539-bd23-b91676bcbd8a.md), we stopped supporting the broker functionality on the platform after March 31, 2023, and no further updates or patches will be made available.

-   August release: We removed all broker-related options from the platform, any users should stop using the Broker immediately.
-   November release: All broker-related functionality will stop operating. Any attempts to use the Authentication Broker after this point will not succeed. We strongly encourage you to transition to our updated authentication methods before this deadline to ensure uninterrupted service.

**Features:**

-   Enhanced the dashboard to include error and call logs. These new tables on the dashboard detail successful API calls and error logs. \(APIM-8912\)

    To learn more about this feature, see [Dashboard](../../API%20Management/Topics/r-api-Dashboard_d7c56437-c100-436f-b3e4-bde7a80d11be.md).

-   Enhanced the dashboard to include an **Invalid Requests** table. This table allows you to view types and details about all invalid API requests. \(APIM-9793\)

    To learn more about this feature, see [Dashboard](../../API%20Management/Topics/r-api-Dashboard_d7c56437-c100-436f-b3e4-bde7a80d11be.md).

-   Added additional audit logging for role, user, and group authentication source updates. \(APIM-3301\)

    To learn more about this feature, see [Audit log query construction](https://developer.boomi.com/api/platformapi#tag/AuditLog).


**Fixes**:

-   Fixed a broken URL on the **Account Features** settings page. \(APIM-10093\)