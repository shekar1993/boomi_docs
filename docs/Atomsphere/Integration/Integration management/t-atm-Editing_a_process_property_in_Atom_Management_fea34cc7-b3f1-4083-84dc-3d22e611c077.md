# Editing a process property in Atom Management 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-fea34cc7-b3f1-4083-84dc-3d22e611c077"/>
</head>


Use the **Deployed Processes** panel to edit a process property.

## Before you begin
You must have the Atom Management privilege to perform this task. If you have the Atom Management Read Access privilege, you cannot perform the task.

## Procedure

1.  From the **Manage** \> **Atom Management**.

2.  From the list on the left, select an active Atom, Molecule, or Cloud.

3.  On the **Deployed Processes** panel, click the blue arrow next to a process.

4.  Select **Edit Process Properties**.

    The Edit Process Properties dialog opens.

5.  To edit the name of a dynamic process property, click in the **Property Name** field and enter your changes.

    You cannot edit the names of process property components. You cannot edit the names of the predefined process properties `com.boomi.execution.lastrun` or `com.boomi.execution.lastsuccessfulrun`.

6.  To edit the value of a process property component or dynamic process property, click in the **Property Value** field and enter your changes.

7.  To delete a process property component or dynamic process property, click the ![Delete](../Images/main-ic-x-white-in-red-circle-16_0d0c5dc5-1c5e-4117-8a58-92c5e050ec5b.jpg) **Delete** icon to the right of the property.

    You cannot delete the `com.boomi.execution.lastrun` or `com.boomi.execution.lastsuccessfulrun` properties.

8.  To edit more process properties, repeat steps 5-7.

9.  Click **Save**.