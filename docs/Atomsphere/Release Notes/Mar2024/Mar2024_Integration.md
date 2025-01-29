# Integration

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-6438d873-0e51-4c38-a200-7d27911d9df7"/>
</head>

**Deferred**: Subsequent to the March 2024 Runtime release, features and fixes for the March platform release are postponed and will be rescheduled.

:::note

In the September release, we began the gradual roll out of additional metrics across all accounts with API entitlements. All enabled customers will have the ability to use platform APIs for querying captured metrics. See [API Metrics](/docs/Atomsphere/API%20Management/Topics/api-metrics_0e0f3adb-2fcb-4af5-bbd1-aee58d2e713f.md) for more information. 
Additionally, API Publish and API Management customers have access to the API Dashboard for a graphical view of the health and performance of their APIs.

Adequate disk space is essential, as metrics typically consume approximately 1 KB per request daily. We cycle and remove files when they become redundant. You can tailor the following metrics settings:

- **Maximum File Size**: Initially set at 1 GB, customize this to fit your specific needs.
- **Event Rollover Time**: With the default set at six hours for Atoms, you have the flexibility to extend this to 24 hours or even reduce it based on your preferences.
- **404 Error Capture**: This feature, off by default, lets you record 404 errors within metrics data when activated. 
For a more comprehensive understanding, see [API Metrics](/docs/Atomsphere/API%20Management/Topics/api-metrics_0e0f3adb-2fcb-4af5-bbd1-aee58d2e713f.md).

:::

**We added these features:**

- Enhanced the Event object by adding the following fields under `eventType user.notification`:

  - `topLevelProcessId`
  - `processId`
  - `processName` (INT-9475)

  This feature is not in the Runtime Release.

**We fixed these issues:**

- An error no longer displays when you try to select an Integration Pack as a process filter on the Environment Extensions page. (INT-10955)

- Improved status message when a multi-attachment Integration Pack is added to an account group that contains a large number of sub-accounts. (INT-10792)

- The URL of the Process Reporting page, with the applied execution types using Execution Modes filter, now opens successfully in a new tab for all supported browsers. (INT-55)

- Users cannot install the process from the Process Library to a folder with write restrictions. (INT-7560)

- The first element is now visible when you add it to the source profile or destination profile, after deleting the existing elements in a map. When the second element is added, both first and second elements appear in the profile. (INT-10980)

- Folders are no longer being copied to the same account or another account every time the OK button is clicked in the Copy Folder dialog. (INT-10795)

- When you copy a component to a location that contains multiple components in the same folder, a sequence value is now appended to the copied component name, such as test-process 2, so that there are no naming conflicts. (INT-9949)

These fixes are not in the Runtime Release.
