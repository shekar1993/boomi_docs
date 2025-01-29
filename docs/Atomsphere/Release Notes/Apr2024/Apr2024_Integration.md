# Integration

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-f99330b1-2a3f-43d4-94a4-111cd7ec79fd"/>
</head>

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

  To learn more about this feature, see the topic [Event object](https://developer.boomi.com/api/platformapi#tag/Event).

**We fixed these issues:**

- An error no longer displays when you try to select an Integration Pack as a process filter on the Environment Extensions page. (INT-10955)

- Improved status message when a multi-attachment Integration Pack is released that contains a large number of sub-accounts. (INT-10792)

- The URL of the Process Reporting page, with the applied execution types using Execution Modes filter, now opens successfully in a new tab for all supported browsers. (INT-55)

- Users cannot install the process from the Process Library to a folder with write restrictions. (INT-7560)

- The first element is now visible when you add it to the source profile or destination profile, after deleting the existing elements in a map. When the second element is added, both first and second elements appear in the profile. (INT-10980)

- Folders are no longer being copied to the same account or another account every time the OK button is clicked in the Copy Folder dialog. (INT-10795)

- When you copy a component to a location that contains multiple components in the same folder, a sequence value is now appended to the copied component name, such as test-process 2, so that there are no naming conflicts. (INT-9949)

- The JSON Number Format Field was orginally populated with a value of `#` by default, leading to the rounding of decimal values used within the JSON profile. With this fix, the default number format will be an empty string, ensuring that decimal values are not rounded by default for any JSON profile imported after the change. (CON-8892)

- Copying and pasting a Process Route step with a Processing Group from the canvas no longer generates any error. (INT-9662)

- Clicking **Save** multiple times in the **New Folder** dialog no longer creates multiple folders when you create or copy a folder in the Component Explorer. Now, only a single folder gets created if you click **Save** multiple times inadvertently. (INT-11093)

- Improved warning message to include the complete path of the last rejected level when an XML schema is partially imported. (INT-10502)

- The Cleanse step now validates the input value for all date formats, defined in the profile. Documents are no longer passed to the clean path when the date field is set to `No repair - reject document`. Documents get rejected if not matching the defined format. (INT-10793)

- An error no longer occurs when you save the Set Properties step if a `%` is added to the property name for Dynamic Document Property and Dynamic Process Property. (INT-11092)

- Removing a profile from and adding another profile to the **Profile** field for the Split Documents process type in the Data Process step dialog has been restored. (INT-6185)

- On the Atom Management page, the cloud listener's aggregated status was not displaying correctly if the listener was running successfully on some nodes and errored on others. With this fix, the status will now indicate that the listener has an inconsistent state and needs remediation. (CON-8937)

- Improved performance of the update operation for the Component object. (INT-10720).
