# Setting independent purge schedules 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-896936a6-d360-4f19-becb-abe7f9aa425a"/>
</head>


Independent purge schedules, where specified, override the schedule set with **Purge History After X Days** in the Properties panel.

## Before you begin
You must have the Atom Management privilege to perform this task. If you have the Atom Management Read Access privilege, you cannot perform the task.

## Procedure

1.  Go to **Manage** \> **Atom Management**.

2.  Select the Atom, Molecule, or Cloud Molecule from the list on the left.

3.  In Settings & Configuration, click **Properties** \(for an Atom\) or **Account Properties** \(for a Molecule or Cloud\).

4.  In the Properties panel, click the **Advanced** tab.

5.  To set an independent purge schedule for components \(the number of days following process execution that purging of components occurs for processes run in test mode or as part of a browse operation\):

    1.  From the Property drop-down list, select the **Purge Schedule for Components** property, then click **Add Property**.

    2.  Add a number of days for the Purge Schedule for Components in the **Property Value** field.

6.  To set an independent purge schedule for logs \(the number of days following process execution that purging of the logs occurs\):

    1.  From the Property drop-down list, select the **Purge Schedule for Logs** property, then click **Add Property**.

    2.  Add a number of days for the Purge Schedule for Logs in the **Property Value** field.

7.  To set an independent purge schedule for processed documents \(the number of days following process execution that purging of the processed documents occurs, and processed document archiving, if enabled, also occurs\):

    1.  From the Property drop-down list, select the **Purge Schedule for Processed Documents** property, then click **Add Property**.

    2.  Add a number of days in the **Property Value** field.

8.  To set an independent purge schedule for temporary data \(the number of days following process execution that purging of the temporary data occurs\):

    1.  From the Property drop-down list, select the **Purge Schedule for Temporary Data**, then click **Add Property**.

    2.  Add a number of days in the **Property Value** field.

9.  Click **Save**.

    Changes to these properties do not take effect until the Atom, Molecule, or Cloud is restarted. You have the option to restart now or restart later.

## Results

If an Atom starts or restarts when its purge process is scheduled to run, the purge process does not run. Purging is delayed until the Atom’s next scheduled purge interval. Purging can occur only when the Atom is online and communicating with the platform.