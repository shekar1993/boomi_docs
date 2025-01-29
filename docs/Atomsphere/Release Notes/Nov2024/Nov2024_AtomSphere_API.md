# Platform API and Partner API November 2024 Release Notes

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-7be647fa-b3d0-45b2-bc08-e207b750e1a5"/>
</head>

:::note

To provide a better and more robust experience for Boomi developers, the Platform API and Parnter API documentation is now accessible on [Developer Documentation](https://developer.boomi.com/docs/APIs/PlatformAPI/Platform_APIs_Overview).

:::

**We added these features:**

- The ExecutionRecord API now includes the option to query the process run records in ascending or descending order using `QuerySort`. If a user does not specify a sorting order in the request, the records get sorted in ascending order by default. (INT-10395)
  
  To learn more about this feature, refer to [Execution Record object](https://developer.boomi.com/api/platformapi#tag/ExecutionRecord).

- You can use the Query operation in the Merge Request object to return information about all active merge requests. (INT-13033)

  To learn more about this feature, refer to [Merge Request object](https://developer.boomi.com/api/platformapi#tag/MergeRequest).

- You can use `branchId` as a parameter in the Component Reference object for the Get and Query operations. (INT-12349)

  To learn more about this feature, refer to [Component Reference object](https://developer.boomi.com/api/platformapi#tag/ComponentReference).

- You can use `branchId` as a parameter in the Component object for the Get, Create, Update, and Delete operations. (INT-11574)

  To learn more about this feature, refer to [Component object](https://developer.boomi.com/api/platformapi#tag/Component).

**We fixed this issue:**

- The Component Metadata and Component Reference objects no longer validate `branchId` when Branch and Merge is disabled. (INT-13550)
