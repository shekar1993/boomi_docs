# Rolling back Atom and connector updates 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-5d678123-e066-4d49-8bf5-3f864da3c4f1"/>
</head>

If you applied a pending version of an Atom or its connectors with the Runtime release or as an Early Access release, you can remove the updates and go back to the currently released version.

## Before you begin

You must have the Atom Management privilege to perform this task. If you have the Atom Management Read Access privilege, you cannot perform the task.

## Procedure

1. Go to **Manage** \> **Atom Management**.

2. Select the Atom, Molecule, or Cloud from the Environments list on the left.

3. Click the **Atom & Connector Versions** panel.

   If you applied a Runtime release or early access update and are using a more recent version than the currently released version, version numbers appear in the **Rollback Version** column. If you are authorized to remove updates and a rollback version is available, the **Select Rollback Versions** button appears at the bottom of the list.

4. Click **Select Rollback Versions**.

   The Select Rollback Versions dialog opens.

5. Select the Atom and connectors you want to roll back to the versions in the **Rollback Version** column.

6. Click **Apply Selected Rollbacks**.

   A confirmation dialog opens.

7. Click **OK**.

   You are returned to the Atom & Connector Versions panel with a success message. Your selected Atom and connectors is updated shortly. The amount of time that it takes vary based on the activity on the Atom, and your Atom may restart during this process. It waits for a period of inactivity before applying the updates unless you have enabled a "Force Restart Time" on your Atom. Once the updates are applied and the page is refreshed, the Atom and connectors that were rolled back displays a version that matches the previously available rollback version. The **Select Rollback Versions** button disappears when any or all rollbacks are applied, regardless of when the Atom takes the updates. Refresh the page to return the buttons \(if rollbacks are still available\).
