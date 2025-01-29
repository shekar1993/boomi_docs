# Scheduling purging immediately following process execution 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-a22506ab-d049-4c5e-9eed-7193c1cd1e5f"/>
</head>

You can schedule purging for a given process to immediately follow execution, even if the purging option for that process is turned off.

## Procedure

1.  In the **Manage** menu, select **Atom Management**.

2.  Select the Atom, Molecule, or Cloud Molecule from the list on the left.

3.  In Settings & Configuration, click **Account Properties**.

4.  In the Account Properties panel on the right, on the Basic tab, select **Purge Data Immediately**.

    :::note

    If you are an Atom Cloud owner set the purge data to:

    - ON — the setting affects all Atoms attached to this Atom Cloud. Accounts that own Atoms attached to this Atom Cloud can turn off their Atom’s setting, but it is overridden by the Atom Cloud’s setting.
    - OFF — accounts with an Atom attached to the Atom Cloud can set purge as needed for their Atom and the Atom’s setting is not overridden by the Atom Cloud’s setting. A change to this setting takes effect immediately — you do not need to restart the Atom Cloud.

    :::

5.  To enable daily execution of a cleanup process in addition to immediate purging, in the **Purge History After x Days** field, type `1`.

6.  Click **Save**.

## Results

If an Atom starts or restarts when its purge process is scheduled, the purge process will not run. Purging is delayed until the Atom’s next scheduled purge interval. Purging can occur only when the Atom is online and communicating with the platform.