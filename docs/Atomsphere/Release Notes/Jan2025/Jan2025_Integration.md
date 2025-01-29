# Integration January 2025 Release Notes

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-0735ba39-a0ec-4729-8ac9-d9efb069ab6a"/>
</head>

**We added these features:**

- The new optional account property, `overrideAccountRateLimit`, has been introduced for Partner API requests. This feature allows the rate limit to be determined based on the specific account requested, whether a primary or an override account. The application of this rate limit depends on the setting of the `overrideAccountRateLimit` property in the primary account.
If this property is enabled, the rate limit defined for the override account will apply. If it is disabled, the rate limit of the primary account will apply. (INT-4510)

  :::note
  This update currently applies only to REST implementations. Support for SOAP implementation will be available in a future release.
  :::

  To learn more about this feature, refer to [Boomi Platform Partner API](https://developer.boomi.com/api/platformpartnerapi).

- When Branch and Merge is enabled on an account without any Build privileges, they can access the Branch Management page by clicking **Services** \> **Integration**. However, if the account has another Integration-related privilege, such as Deploy, the **Integration** link goes to the Deploy page. (INT-13661)

  To learn more about this feature, refer to [Parellel Development with Branch and Merge](../../Integration/Process%20building/int-Branch_merge_overview.md).

- The Branch object's UPDATE and CREATE operations validate that users have the Branch Create & Modify Access privilege. If a user doesn't have the privilege, a 403 error is returned. (INT-13578, INT-13575)

  To learn more about this feature, refer to [Branch object](https://developer.boomi.com/api/platformapi#tag/Branch) and [Merge Request object](https://developer.boomi.com/api/platformapi#tag/MergeRequest).

- If users have Build Read Access privilege with Branch and Merge enabled, the banner on the Build page and Branch Management page alerts that they have read-only access to those pages. (INT-13428)

  To learn more about this feature, refer to [Parellel Development with Branch and Merge](../../Integration/Process%20building/int-Branch_merge_overview.md).

- Added or updated the following privileges for the Branch and Merge feature:

  | Privilege | Description | Administrator Role | Standard User Role |
  | --- | --- | --- | --- |
  | Branch Create & Modify Access (INT-13426, INT-13455) | Create and update branches using Branch Management and the Branch object. Create hotfix branches from the Packaged Deployments page or Deployments page. | Included | Included |
  | Branch Delete Access (INT-13500) | Delete branches using Branch Management and the Branch object. | Included | Included |
  | Build Read Access (INT-13419, INT-13420) | Read access to Branch Management, all branches, and all components and processes within branches. | Included | Included |

  To learn more about this feature, refer to [User roles and privileges](../../Platform/c-atm-User_roles_and_privileges_5a1c8a1a-4d58-4e7d-a6b6-b684a0c6d672.md).

**We fixed these issues:**

- Resolved an issue where the users can now create and update the custom connectors shared with the sub-accounts using Component APIs. (INT-12509)

- The `clientSecret` field is encrypted to resolve issues while creating or updating components across affected connection types using component APIs. (INT-12560)

- Resolved an issue where the `componentOverride` field was incorrectly set to false for the `trustedcertalias` and `clientsslalias` fields when updated via EnvironmentExtensions API, ensuring consistent behavior with the UI across the impacted connection types. (INT-12664)

- A null pointer exception no longer occurs if you add the Exception step to the process canvas using the plus icon. (INT-13558)

- You can test a process on the Build page only after selecting the runtime, which will enable the OK button. (INT-13552)

- Copying the folder path from the **Folder Details** dialog, now copies the folder's complete path. (INT-13449)

- If you have read-only privileges for Branch and Merge, you no longer have to refresh the browser after switching branches to see the component tree. (INT-13902)

- When you toggle on Branch and Merge from the Account Features page, the feature no longer becomes hidden on the page. (INT-13833)

- Boomi Suggest no longer fails to update a database with mappings when mappings are added or removed. (INT-13765)

- An alert for active merge requests no longer displays when you create a user-defined function through environment extensions. (INT-13712)

- When branching is disabled for an account, the default branch resets to main. (INT-13659)

- If the parent object of a JSON array is not mapped while its child instance identifiers are mapped, the parent object will not generate a "NULL" output. (INT-14246)
