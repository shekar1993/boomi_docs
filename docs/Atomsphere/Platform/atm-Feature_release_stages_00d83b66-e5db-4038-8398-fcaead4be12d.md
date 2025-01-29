# Feature release stages

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-00d83b66-e5db-4038-8398-fcaead4be12d"/>
</head>

Learn about the official terms Boomi uses to define the various lifecycle stages of a platform feature and understand what levels of support and access are available at each stage.

When Boomi introduces or removes features from the Boomi Enterprise Platform, they may have one or more attached special designations. Features have varying levels of support and access depending on their designation type. Use the following tables to understand how Boomi defines each stage, the level of access allowed, and whether Boomi offers help documentation, Service Level Agreements, and Support Services.

See [Boomi feature deprecation process and policy](../Platform/atm-Boomi_feature_deprecation_process_policy_e4547744-664f-4539-bd23-b91676bcbd8a.md) for details about feature end of life.

:::note

Not all features follow this cycle, which include but are not limited to:

- Defect fixes that change incorrect behavior.
- Non-functional changes to the user interface, such as labels and styling.
- New or enhanced features that are narrow in scope or are incremental to existing functionality, and do not change existing behavior.

:::

### Early Access 

Early Access features allow a small, closed group of participants to try new functionality before it becomes more widely available. This provides an opportunity to collect feedback from customers’ scenarios before finalizing the feature for broader release.

Early Access features are functional but might only cover limited use cases. They may not yet be scalable or resilient enough for production needs. They are subject to modification without advance notice, potentially in non-backward compatible ways. Some Early Access features may never be released as generally available. As a result, Early Access functionality should not be used in production environments or with production data. Connectors may be updated outside the regular release schedule.

Feature documentation may be available only to users with Early Access permissions.

The Boomi Enterprise Platform Service Level Agreement (SLA) or Support Services do not cover Early Access features. Support is provided through Community forums.

View the [Early Access and Tech Preview](https://community.boomi.com/s/tech-preview) page to view current programs and request Early Access for a specific feature.

### Technology Preview

Technology Preview (sometimes referred to as "Tech Preview") features allow a wide audience of users to try new functionality before it becomes generally available. This provides an opportunity to collect feedback from customers’ scenarios before finalizing the feature's release.

Technology Preview features are functional but might only cover limited use cases. Features might not be scalable or resilient enough for production needs and are subject to modification without advance notice, potentially in non-backward compatible ways. Some Technology Preview features might never be released as generally available. As a result, Technology Preview functionality should not be used in production environments or with production data. Connectors may be updated outside the regular release schedule.

The platform Service Level Agreement (SLA) or Support Services do not cover Technology Preview features. Support is provided in the Community forums.

Feature documentation is available.

View the [Early Access and Technology Preview](https://community.boomi.com/s/tech-preview) page to view and try current Technology Preview features on the Boomi Enterprise Platform.

### General Availability

General Availability (GA) features are suitable for production use, are fully supported, and are available to all entitled accounts. All features are considered GA unless otherwise indicated.

Features are stable, backward-compatible, and suitable for production use. Non-backward compatible changes are explicitly versioned.

The Platform SLA and Support Services cover general availability features.

Full feature documentation is available.

### Limited Availability

Limited Availability features are essentially GA features but available only to a limited number of accounts on an invitation-only basis. They are suitable for production use and are fully supported. Documentation might be available only to those users with access to the Limited Availability features. Not all features pass through a Limited Availability phase.

### Legacy

Legacy features are GA features with a newer version available and, therefore, have entered a maintenance mode. They are fully supported for production use; however, they will only receive critical security fixes to protect customers from threats. Enhancements and minor defects will typically not receive priority. Boomi recommends adopting the newest version in the GA release stage of these features to take advantage of the latest innovations.

Legacy is most often used with connectors that have a newer version available. Legacy connectors, which were built without the latest connector software development kit (SDK) framework, may lack modern runtime features and optimizations. While they have limited compatibility with newer technologies or updated application versions, they remain available for users needing integration with older systems or technologies. Unlike deprecated, Legacy has no planned retirement date but may be deprecated in the future.

The Boomi Enterprise Platform SLA and Support Services cover legacy features.

Full feature documentation is available.


### Deprecated

Deprecated features (including connectors) are GA features intended for retirement at a future date. Deprecated features are fully functional and remain supported until their retirement date. Existing customers can continue to use deprecated features in production and need to plan to adopt the replacement feature, if available, at their earliest convenience.

New customers and accounts may not receive access to the deprecated features.

The Boomi Enterprise Platform SLA and Support Services cover deprecated features.

Full feature documentation is available.

Suitable for production use.

See [Boomi feature deprecation process and policy](../Platform/atm-Boomi_feature_deprecation_process_policy_e4547744-664f-4539-bd23-b91676bcbd8a.md) for details about feature end of life.

See [API versioning and deprecation policy](https://developer.boomi.com/api/platformapi#section/Introduction/API-versioning-and-deprecation-policy) for how deprecation affects platform APIs.

### Retired

Retired features are discontinued and no longer available for production use. Depending on the feature, this can result in its removal entirely or your account being automatically migrated to use newer functionality.

Retired connectors remain available to accounts using them, and deployed processes will continue to run; however, the connectors are no longer supported or maintained. Without a guarantee of backward compatibility, customers use them at their own risk. Boomi strongly recommends avoiding the use of retired connectors.

Boomi Enterprise Platform SLA or Support Services do not cover retired features.

Feature documentation is not available.

See [Boomi feature deprecation process and policy](../Platform/atm-Boomi_feature_deprecation_process_policy_e4547744-664f-4539-bd23-b91676bcbd8a.md) for details about feature end of life.

See [API versioning and deprecation policy](https://developer.boomi.com/api/platformapi#section/Introduction/API-versioning-and-deprecation-policy) for how deprecation affects platform APIs.

## Quick glance

Use the following table to quickly reference what each feature designation supports or does not support. This is a summary of information provided in the previous section.

| | **Early Access** | **Technology Preview** | **Limited Availability** | **General Availability** | **Legacy** |**Deprecated** | **Retired** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Availability** | Limited \(available by request only\) | Open | Limited | Open | Open | Open \(not available to new accounts\) | No \(excludes connectors\) |
| **SLA & Support** | No | No | Yes | Yes | Yes \(Critical defects only\) | Yes \(Critical defects only\) | No |
| **Production Use** | No | No | Yes | Yes | Yes | Yes | No |
| **Documentation** | Limited | Yes | Limited | Yes | Yes | Yes | No |

## About open source assets 

Any OSS (Open Source Software) connector available on the Boomi platform follows the same feature designations, release cycle, and support SLA as noted in the previous table. Please see the [Boomi OSS web page](https://boomi.com/platform/connector-oss) for details on the OSS program.
