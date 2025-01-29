# Changing the process execution directory structure

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-781d6580-d1b9-46d8-a1cd-f8f445ba4f5c"/>
</head>


You can change the directory where process executions are stored if you need additional space.

## Before you begin

You must have the Atom Management privilege to perform this task. If you have the Atom Management Read Access privilege, you cannot perform the task.

## About this task

This property typically is changed only by Atom Cloud owners who need more storage space for their process executions. However, owners of local Atoms or Molecules can change it as well.

In the default setup, this property is set to zero \(0\), which causes all process executions to be stored in the \<atom\_installation\_directory\>/execution/history/\<execution\_date\> directory.

## Procedure

1.  In the **Manage** menu, select **Atom Management**.

2.  Select the Atom, Molecule, or Cloud Molecule from the list on the left.

3.  In Settings & Configuration, click **Properties**.

4.  Click the **Advanced** tab.

5.  Click in the box next to **Add Property** to open the Property selection list.

6.  Select the **Process Execution Directory Level** property, click **Add Property**, and add a number from 0–4 in the **Property Value** field.

7.  Click **Save**.

    Changes to this property do not take effect until the Atom, Molecule, or Atom Cloud is restarted. We recommend you perform a restart immediately after applying the changes to avoid potential issues.