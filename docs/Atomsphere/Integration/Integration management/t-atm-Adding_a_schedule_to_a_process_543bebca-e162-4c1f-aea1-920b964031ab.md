# Adding a schedule to a process 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-543bebca-e162-4c1f-aea1-920b964031ab"/>
</head>


Add a schedule to a process from the Deployed Processes panel in **Atom Management**.

## Before you begin

You must have the Atom Management privilege and the Scheduling privilege to perform this task. If you have the Atom Management Read Access privilege, you cannot perform the task.

## Procedure

1.  Go to **Manage** \> **Atom Management**.

2.  Select the Atom, Molecule, or Cloud from the list on the left.

3.  On the Deployed Processes panel, locate the process, click its blue arrow icon and select **Edit Schedules**.

    The Scheduling dialog opens with the Execution tab selected.

4.  Click **Add**.

5.  Choose a Type: **Minute**, **Hour**, **Day** or **Advanced**.

    The rest of the selections change depending on the type.

6.  If you choose:

    -   **Minute** — You must select the Start Time \(in hours\), End Time \(in hours\), Interval \(in minutes\) and the day\(s\).

    -   **Hour** — You must select the Start Time \(in hours and minutes\), End Time \(in hours\), Interval \(in hours\) and the day\(s\).

    -   **Day** — You must select the Start Time \(in hours and minutes\), Interval \(in days\) and the day\(s\).

    -   **Advanced** — See information about using advanced syntax in the [Scheduling dialog](r-atm-Scheduling_Dialog_babff655-b7a2-4037-a457-03be29540f09.md) topic.

    Notice that the schedule description on the left changes according to your selections.

    **Note:** If you want to implement a schedule that is not supported by the UI, you can use an external scheduler and invoke the process via the AtomSphere API Execute process operation.

7.  To add multiple schedules, repeat steps 2-4.

8. **Optional:** To add a retry schedule, click the **Retry** tab and repeat steps 2-4.

9. **Optional:** If you are adding a retry schedule, select a number from 0 to 5 from the Maximum Number of Retries list.

10. **Optional:** If you want to delete a schedule, select it and click **Delete**.

11. Click **OK**.

12. Save the process to save it as well as its schedule changes.

    You do *not* have to redeploy the process in order for its scheduling changes to take effect.