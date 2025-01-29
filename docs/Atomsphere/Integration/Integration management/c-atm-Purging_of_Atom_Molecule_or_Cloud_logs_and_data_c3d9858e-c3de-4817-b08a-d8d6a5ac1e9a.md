# Purging of Atom, Molecule, or Atom Cloud logs and data 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-c3d9858e-c3de-4817-b08a-d8d6a5ac1e9a"/>
</head>


You can control how long logs, processed documents, components, and temporary data are held on your Atom, Molecule, or private Atom Cloud.

While an Atom, Molecule, or private Atom Cloud is running and executing processes, it stores detailed logs and processed documents locally. You can view them on the Process Reporting page. An Atom, Molecule, or private Atom Cloud also stores temporary data in nested directories named /tmp, /tmpdata, and /doccache.

The default for storing logs, processed documents, components, and temporary data on your Atom, Molecule, or private Atom Cloud is 30 days. However, you can reduce the number of days to conserve disk space on your local machine. Purged logs, processed documents, components, and temporary data are permanently deleted and cannot be recovered. If you want to maintain a longer history of documents for audit purposes, consider these approaches:

- Use connector operation archiving.

- Write data received and/or sent to another location as part of your process.

- Use Atom-level processed document archiving. Note that an extra-cost, companion option is available with processed document archiving, whereby document metadata is stored for an additional 18 months. To have this option enabled for your account, contact your representative.

:::note

The /work directory contains primarily runtime data rather than temporary data. For that reason, most of /work is not subject to the purge settings for an Atom, Molecule, or private Atom Cloud. The /as2 subdirectory is the only /work directory that is purged.

:::

The settings that control purging are on the Account Properties panel, which you can access from **Atom Management** \> **Settings & Configuration** \> **Account Properties**.

| Name | Description |
| --- | --- |
| **Purge History After x Days** | Sets the number of days following process execution that purging of logs, processed documents, components, and temporary data occurs. The number of days is calculated based on the time that a file was most recently modified; it is not based on the actual day on which the file was modified. You should never set your purge history to a value that is less than the longest amount of time that you expect a process to run successfully. However, a Purge History setting of any value can remove current files if a process runs longer than expected. <br /><br />The default is 30 days. The maximum is 9999. An integer less than or equal to 0 disables purging. <br /><br />**Note:** This setting for an Atom Cloud determines the default purge schedule for accounts that own Atoms attached to that Atom Cloud. Accounts can individually set more frequent purge schedules. However, if an account sets a purge schedule less frequent than the default, that account’s setting is ignored.If you enable processed document archiving for a local Atom or Molecule or a private Atom Cloud, the archive directory you designate is not purged. |
| **Purge Data Immediately** | If this setting is on, processed documents, component and temporary data will be purged immediately after a process execution ends. This setting does not affect when logs will be purged. If this setting is on, it overrides the like-named process option. If this setting is off, the process option takes precedence. <br /><br />If you select this option, also set Purge History After x Days to an integer greater than 0, such as 1. This will not only purge your data right away, but it will also run an extra cleanup process on a daily basis.<br /><br />**Note:** If you are an Atom Cloud owner set the purge data to:<br />- ON — the setting affects all Atoms attached to this Atom Cloud. Accounts that own Atoms attached to this Atom Cloud can turn off their Atom’s setting, but it is overridden by the Atom Cloud’s setting. <br />- OFF — accounts with an Atom attached to the Atom Cloud can set purge as needed for their Atom and the Atom’s setting is not overridden by the Atom Cloud’s setting. A change to this setting takes effect immediately — you do not need to restart the Atom Cloud. |

Atoms do not run a purge process immediately after they restart. Instead, purging occurs at the Atom’s next scheduled purge interval. If an Atom starts or restarts at the time at which its purge process is scheduled to run, the purge process will not run until its next purge interval. Purging can occur only when the Atom is online and communicating with the platform.

:::note

High-level information about each process execution, such as its name, time, date, etc., is logged on the and appears at the top of the Process Reporting page. This information is purged automatically after 30 days. The platform’s purging schedule cannot be modified.

:::

## Multi-threaded purging 

By default, the purging process uses a single thread when purging logs and data. The default value for the Purge Manager Threads property (`com.boomi.container.purge.numPurgeThreads`) can vary depending on how the Purge Manager is run.

If Purge Manager is run from an Atom, Molecule, or Atom Cloud, the default is 1. If Purge Manager is run from the Atom Maintenance Server, the default is 10.

On Atom Clouds that process large amounts of data, single-threaded purging can take a long time. To take advantage of multi-threaded purging, you can set the number of threads to a value greater than 1.

## Independent purge schedules

You can set independent purge schedules for logs, processed documents, temporary data, and test or browse components. Independent schedules, where specified, override the schedule set with **Purge History After x Days**. To specify independent purge schedules, edit the Atom, Molecule, Atom Cloud, or Account properties on the Advanced tab of the Properties panel:

- Logs — Purge Schedule for Logs property (`com.boomi.container.logs.purgeDays`)

- Processed documents — Purge Schedule for Processed Documents property (`com.boomi.container.data.purgeDays`)

- Temporary data — Purge Schedule for Temporary Data property (`com.boomi.container.temp.purgeDays`)

  :::caution
  
  The Purge Manage does not purge files from the directory set here.

  :::

- Components — Purge Schedule for Components property (`com.boomi.container.component.purgeDays`)


## Purging when local storage Is enabled 

If you have a Molecule or Atom Cloud with local storage enabled (the Working Data Local Storage Directory property \[`com.boomi.container.localDir=`\] is set to a local directory), the local and shared data is purged as follows:

- In the default setup, the purging process runs in the Atom Cloud. Data stored in local directories is purged by the nodes in the Molecule. Data stored in shared directories is purged by the head node only.

- If you set the purging process to run separately from the Atom Cloud via an external purging process (by setting the Purge Manager property \[`com.boomi.container.config.runPurgeManager`\] on the Account Properties panel to “FALSE”), data stored in local directories is purged only by the nodes in the Molecule, and not by the external process. Data stored in shared directories is purged only by the external process, and not by the head node.