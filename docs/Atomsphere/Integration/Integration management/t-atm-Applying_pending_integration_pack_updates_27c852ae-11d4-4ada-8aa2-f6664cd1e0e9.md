# Applying pending integration pack updates 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-27c852ae-11d4-4ada-8aa2-f6664cd1e0e9"/>
</head>


Integration pack developers can release updates to integration packs immediately or on a scheduled date.

## Before you begin

You must have the Atom Management privilege. If you have the Atom Management Read Access privilege, you cannot perform the task.

## About this task

A testing period, which occurs before the scheduled date of your integration pack, allows you to manually apply updates in managed accounts where the integration pack is installed. This enables users of managed accounts to test and work with new functionality in advance of its official release.

After you apply pending updates, you cannot apply another update of a given integration pack until the same update is applied across the integration pack’s install base. This update occurs either when the testing period ends or the developer releases a new update on an immediate basis, whichever comes first.

**Note:** If you detach and reattach an integration pack to an environment after accepting the pending version, updates made in the pending version are not maintained in the integration pack but rather are applied according to the specified release date.

## Procedure

1.  Go to **Manage** \> **Atom Management**.

2.  Select the Atom, Molecule, or Atom Cloud from the list on the left.

3.  Click **View Integration Pack**.

    If there are pending updates to integration packs, the new version numbers appear in the **Pending Version** column. If you are authorized to apply the updates you will see the **Apply Pending Updates** button at the bottom of the list.

4.  Click **Apply Pending Updates**.

    A confirmation dialog opens.

5.  Click **OK**.

    Your integration packs is updated shortly. The amount of time that it takes varies based on the activity on the Atom. The table is updated with the latest version numbers and last update date. The pending version numbers and the **Apply Pending Updates** button disappear.