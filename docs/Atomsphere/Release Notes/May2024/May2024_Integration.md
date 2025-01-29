# Integration

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-d775e923-e565-42a6-bee8-0b0a7e21a057"/>
</head>

:::info Known Issue

Currently, you cannot filter by Component type in the Deployment dialog in the Boomi Enterprise Platform. This issue will be fixed in INT-12308.

:::

**We fixed these issues:**

- Folder names in the Component Explorer are no longer cropped when you use the new Build canvas user interface. (UU-5192)

- Environment extensions are successfully updated via API in sub-accounts without any errors. Also, the fix for issue [INT-8135](/docs/Atomsphere/Release%20Notes/Oct2023/atm-Oct2023_Integration_0bd40f0b-202b-4f40-8e6f-ac68ccc39fb0.md) is re-enabled as a part of the fix for this issue. (INT- 10259)

- Environment extensions update API no longer returns the `Unspecified fault message` when a full update is followed by a partial update. (INT-10911)

- After deleting components from a folder, you can now copy that folder to the destination folder in the same account where deleted components are no longer copied to or appeared in the destination folder when you apply the Show Deleted Components filter in the Component Explorer. (INT-10968)

- You can create more than 120 connections from the output of the map functions to the custom scripting function. These connections are now being saved successfully. (INT-7317)

- Configured indexes no longer disappear on clicking the already selected option either **Cache by Profile** or **Cache without Profile** using Add to Cache step.  (INT-9195)

- The Retrieve From Cache step configuration is now saved when you copy and paste the same step to the canvas in the same or different account. (INT-8150)

- You can now add a Message step, with no input data, to the process canvas using the plus sign without any exception. (INT-11116)

- Improved a warning message to include the last rejected node when the JSON Profile is partially imported. If the last rejected node doesn’t have an immediate parent node then, only the last rejected node will appear in the message.  (INT-11176)

- The **Default Value** field is no longer cut off if a **Hidden** data type is selected in the Process Property tab. You can now enter the value in the Default Value field. (INT-11044)

- The **Wait for process to complete** checkbox is now greyed out when you change passthrough process type of a subprocess from No data to Data Passthrough (selected in the Start step dialog) (INT-3921)
