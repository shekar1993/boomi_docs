# Disk space monitoring for Atom Clouds 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-392dc80f-fe1c-4097-b291-e1a6a5126674"/>
</head>


Disk space monitoring for the Atom Clouds protects customers who inadvertently process too much data through aggressive scheduling or a misconfigured integration process.

This might happen if an integration process or series of integration processes begins to extract too much data without the customer's knowledge. This protection stops the processes from executing and prevents you from incurring any further overage fees while running on a Atom Cloud.

This protection is triggered when an account exceeds 200 GB in disk space usage. When protection is triggered:

-   The account's processes that are currently executing stop to avoid further overage fees.

-   Processes that are stopped in this fashion display a message stating that the account has exceeded its size quota.

-   New processes are not executed and they display the same message.

-   You must contact Support to resolve the issue.

-   Processes that run on local Atoms are not affected.


If you are concerned that your account might exceed the 200 GB limit, contact Support so that we can monitor your account and determine if you will actually exceed the disk space usage limit.

## Disk space monitoring for private Atom Clouds 

If you have your own private Atom Cloud, disk space monitoring is disabled by default. However, you can enable it for your Atom Cloud to prevent accidental problems. In your Atom Cloud you can set the disk space limit as needed. You can set a global limit for all accounts, different limits for the individual accounts that use your Atom Cloud, or both.

The following properties control disk space monitoring for Atom Clouds.

| Property | Valid Values | Description |
|---|---|---|
| Disk Space Monitoring<br />`com.boomi.container.config.runDiskspaceMonitor=<value>`| true or false  | If set to true (the default), disk space monitoring is enabled. The monitoring system runs based on the value that is set in the Disk Space Monitoring Frequency property.<br /> It is recommended that you set this value through the user interface in the Properties panel, Advanced tab for Atom Clouds.     |
| Disk Space Monitoring Verbose Logging<br />`com.boomi.container.config.diskspacemonitor.verboseLogging` | true or false  | If set to true (the property default is set to false), the Atom Cloud returns more information than the usual logging mode provides. You can use this option for troubleshooting needs, though large log files may slow down performance. Verbose logging includes: <br /><ul><li>Size of each date directory in the data directory</li><li>Total size of the data directory</li><li>Size of each date directory in the execution/history directory</li><li>Total size of the execution/history directory</li></ul> It is recommended that you set this value through the user interface in the Properties panel, Advanced tab for Atom Clouds.  |
| Disk Space Monitoring Account Auto Suspension<br />`com.boomi.container.config.diskspacemonitor.enableAccountAutoSuspension` | true or false  | Determines whether an account is automatically suspended when it exceeds the allotted disk space. This property is enabled by default. <br />You can set this property through the user interface in the Properties panel, Advanced tab for Atom Clounds.    |
| Disk Space Monitoring Frequency<br />`com.boomi.container.config.diskspaceMonitorInterval=<number>` | A whole number  | Controls the frequency with which the disk space monitor runs. The number is specified in milliseconds. If this property is not set manually in Cloud properties, the property assumes a default value of 3,600,000 milliseconds (60 minutes). <br /> It is recommended that you set this value through the user interface in the Properties panel, Advanced tab for Atom Clouds.   |
| Disk Space Monitoring Threads<br />`com.boomi.container.config.diskspacemonitor.numThreads=<number>` | A whole number  | Controls the number of threads to be used for disk space monitoring. The value cannot be set to 0. The property's default value is 1. <br /> It is recommended that you set this value through the user interface in the Properties panel, Advanced tab for Atom Clouds. |
| Disk Space Warning Limit<br />`com.boomi.container.config.diskspaceMonitorWarnThreshold=<number>`  | 0 to 100  | If set, logs a warning message on the server if the account reaches the specified percentage of its disk quota. You can monitor the server logs to ensure that no accounts are approaching the threshold. By default, this property is not enabled until a number is entered as the value. <br /> If you have both the Disk Usage Limit property set and Disk Space Monitoring enabled, the percentage of your disk space is logged as an info message each time the monitoring system runs according to the schedule you have set in the Monitoring Frequency property. <br /> It is recommended that you set this value through the user interface in the Properties panel, Advanced tab for Atom Clouds. |
| Account Disk Usage<br />`com.boomi.container.config.quota.ACCOUNT_DISK_USAGE=<number> <KB MB GB TB>` | A whole number followed by KB, MB, GB, or TB or a positive integer in bytes  |Used to set the global size limit for all accounts that use your Atom Cloud, different limits for the individual accounts that use your Atom Cloud, or both. By default, the property assumes an "unlimited" value unless a numerical value is entered in the property field. (Clearing the field of all numbers reinstates the "unlimited" value). <br /> It is recommended that you set this value through the user interface on the Attachment Quotas tab. |
| Purge Manager<br />`com.boomi.container.config.runPurgeManager=<value>` | true or false  | If set to true (the default), the purging process is run in the Atom Cloud. The purge log messages are written to the container logs. For more information, see [Purging Atom, Molecule, or Atom Cloud Logs](c-atm-Purging_of_Atom_Molecule_or_Cloud_logs_and_data_c3d9858e-c3de-4817-b08a-d8d6a5ac1e9a.md). <br /> If set to false, you need to run the purging process separately from the Atom Cloud. The purge log messages are written to the atom-maintenance.log file. <br /> It is recommended that you set this value through the user interface in the Properties panel, Advanced tab for Atom Clouds. |