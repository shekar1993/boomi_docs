# Setting the purge schedule 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-39dd1eea-6e8a-44c0-bf6f-e625868bea61"/>
</head>

Set the purge schedule in the Account Properties panel.

## Procedure

1.  In the **Manage** menu, select **Atom Management**.

2.  Do one of the following:

    -   Select the Atom, Molecule, or Cloud Molecule from the list on the left.

    -   Select an account’s Atom.

3.  Under Settings & Configuration, click on **Properties**\(for Atoms and Molecules\) or **Account Properties** \(for Atom Clouds\).

    The Account Properties panel opens.

4.  Set **Purge History After x Days** to the number of days following process execution that purging of logs, processed documents, and temporary data occurs, and processed document archiving, if enabled, also occurs.

5.  If **Purge Data Immediately** is on, turn it off.

6.  Click **Save**.

## Results

:::note

For information about the **Purge History After x Days** and **Purge Data Immediately** settings, see the topic about purging Atom, Molecule, and Cloud logs and data.

:::

If an Atom starts or restarts at the time at which its purge process is scheduled to run, the purge process does not run. Purging is delayed until the Atom’s next scheduled purge interval. Purging can occur only when the Atom is online and communicating with the platform.