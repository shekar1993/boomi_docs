# Integration November 2024 Release Notes

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-c14b3801-95aa-4a74-88bf-22ec1d6780e1"/>
</head>

**We released these features:**

- Boomi's Branch and Merge is rolling out in waves to eligible accounts. Users with the Admin role or Account Administration privilege can toggle the feature from the Features page in their account settings. Branch and Merge is turned off by default. (INT-13040)

- Added breadcrumbs to the Branch Management page, allowing you to easily return to the Build page. (INT-13082)

- If you delete your default working branch, `main` becomes the new default. You can select a new default working branch from Branch Management. (INT-12978)

- Improved performance of refreshing the details of large merge requests on the Review Changes dialog. (INT-12129)

- If you open an existing merge request and choose a different merge type, a warning displays and you can return to the Merge Branch dialog by clicking **Back**. (INT-13038)

- You can view merge request details, including the merge ID, merge status, and merge created date, for a branch from Branch Management by clicking the **Actions** icon and then **View Merge Requests**. (INT-13392)

- Added color to branch statuses in Branch Management to make it easy to see status changes. (INT-13267)

- When you perform a basic override merge and haven't reviewed all conflicts, a banner will appear, and the **Submit Merge** option will be unavailable on the Review Changes dialog. (INT-13195)

- When you open a new merge request, selective merge is now the default option for Merge Type. (INT-13348)

- Added a link back to Branch Management from the Branch Merge Initiated dialog after you open a merge request. (INT-13266)

- Improved performance when saving a component that uses branches. (INT-13140)

- You can filter the Component Explorer by Hotfix Components to show components that are in a packaged component current in a hotfix branch. (INT-10978)

  :::note

  Hotfix components will show in the filter for hotfix branches created only after the November Platform release.

  :::

- The Review Changes dialog now shows when a component’s name changes between the source and destination branches. (INT-13130)

  To learn more about these features, refer to [Parallel Development with Branch and Merge](../../Integration/Process%20building/int-Branch_merge_overview.md), [Creating branches](../../Integration/Process%20building/int-Creating_branches.md), and [Merging branches](../../Integration/Process%20building/int-Merging_branches.md).

- Improved performance of the Boomi Enterprise Platform on the latests versions of the Google Chrome browser. (INT-13549)

- You can use the Query operation in the Merge Request object to return information about all active merge requests. (INT-13033)

  To learn more about this feature, refer to [Merge Request object](https://developer.boomi.com/api/platformapi#tag/MergeRequest).

- You can use `branchId` as a parameter in the Component Reference object for the Get and Query operations. (INT-12349)

  To learn more about this feature, refer to [Component Reference object](https://developer.boomi.com/api/platformapi#tag/ComponentReference).

- You can use `branchId` as a parameter in the Component object for the Get, Create, Update, and Delete operations. (INT-11574)

  To learn more about this feature, refer to [Component object](https://developer.boomi.com/api/platformapi#tag/Component).

**We fixed these issues:**

- Document errors caused by UTF-8 characters are now displayed properly in Process Reporting. (INT-12555)

- Improved response time for the Create and Execute operations in the Merge Request object. (INT-13378)

- The Component Metadata and Component Reference objects no longer validate `branchId` when Branch and Merge is disabled. (INT-13550)

- When parameter value types are configured from any type to ‘Current Data’ in shapes such as decision, message, set properties, etc., the component XML must be updated accurately after saving without retaining any prior configuration values. As a result, the packaged component does not include any previously configured items, thereby preventing the usage of connection licenses. (INT-13372)



