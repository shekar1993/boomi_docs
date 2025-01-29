# Platform API and Partner API January 2025 Release Notes

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-ed57b590-5284-47c1-a05d-0a250ad6e4a3"/>
</head>

**We added these features:**

- The Branch object's UPDATE and CREATE operations validate that users have the Branch Create & Modify Access privilege. If a user doesn't have the privilege, a 403 error is returned. (INT-13578, INT-13575)

  To learn more about this feature, refer to [Branch object](https://developer.boomi.com/api/platformapi#tag/Branch) and [Merge Request object](https://developer.boomi.com/api/platformapi#tag/MergeRequest).

- The new optional account property, `overrideAccountRateLimit`, has been introduced for Partner API requests. This feature allows the rate limit to be determined based on the specific account requested, whether a primary or an override account. The application of this rate limit depends on the setting of the `overrideAccountRateLimit` property in the primary account.
If this property is enabled, the rate limit defined for the override account will apply. If it is disabled, the rate limit of the primary account will apply. (INT-4510)

  :::note
  This update currently applies only to REST implementations. Support for SOAP implementation will be available in a future release.
  :::

  To learn more about this feature, refer to [Boomi Platform Partner API](https://developer.boomi.com/api/platformpartnerapi).

**We fixed these issues:**

- Resolved an issue where the Component API failed to perform CREATE operations for connection components of custom connectors on sub-accounts due to subtype validation errors, ensuring consistent API functionality without requiring manual UI intervention. (INT-12509)
