# Setting purge schedules for an Atom Cloud’s accounts 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-c232593a-21f4-4c1f-9fca-ef8648725d95"/>
</head>


Multiple accounts using the same private Atom Cloud can have separate purge schedules for each account.

## About this task

If you have several accounts using your private Atom Cloud and you want their data to be purged at different intervals, you can set separate purge schedules for each account. Purge settings are put into each account’s account.properties file, which is located in the `accounts/<accountID>/conf` directory.

Account purge schedules, where specified, override the Atom Cloud's schedule set with Purge History After X Days in the Properties panel. However, the individual account settings must be shorter than the Atom Cloud’s global settings. For example, if the global purge setting is 15 days, then the account’s purge schedule must be set to less than 15 days. If the account’s purge schedule is set to a number greater than the global setting, then the global setting is used.



## Procedure

1.  In the **Manage** menu, select **Atom Management**.

2.  Do one of the following:

    -   If you are an Atom Cloud owner, select a Cloud from the list on the left.

    -   If you are an account owner, select your Atom from the list on the left.

3.  In Settings & Configuration, do one of the following:

    -   Click the **Properties** link.

    -   Click the **Account Properties** link.

4.  Click the **Advanced** tab.

5.  To set an independent purge schedule for browse and test component data, select the **Purge Schedule for Components** property, click **Add Property** and enter a number of days in the **Property Value** field.

    This is the number of days following process execution that purging of browse and test execution components occurs.

6.  To set an independent purge schedule for logs, select the **Purge Schedule for Logs** property, click **Add Property** and add a number of days in the **Property Value** field.

    This is the number of days following process execution that purging of the logs occurs.

7.  To set an independent purge schedule for processed documents, select the **Purge Schedule for Processed Documents** property, click **Add Property**, and add a number of days in the **Property Value** field.

    This is the number of days following process execution that purging of the processed documents occurs, and processed document archiving, if enabled, also occurs.

8.  To set an independent purge schedule for temporary data, select the **Purge Schedule for Temporary Data** property, click **Add Property** and add a number of days in the **Property Value** field.

    This is the number of days following process execution that purging of the temporary data occurs.

9.  Click **Save**.

    Because changes to these properties do not take effect until the Atom or Cloud is restarted, you are prompted to restart. You have the option to restart now or restart later.

    If you have enabled disk space monitoring for your Atom Cloud, the changes take effect when the monitoring process is restarted.

## Results

If an Atom starts or restarts at the time at which its purge process is scheduled to run, the purge process does not run. Purging is delayed until the Atom’s next scheduled purge interval. Purging can occur only when the Atom is online and communicating with the platform.