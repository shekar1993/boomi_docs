# Using a specific network interface for the clustering protocol 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-5891edca-6d2b-4379-956f-6344618e1b29"/>
</head>


Using either Linux or Windows, set network interfaces for each machine in the cluster and for each node in the Molecule or Cloud Molecule in the Atom Cloud.

## About this task

:::caution

You must set a specific network interface for each machine in the cluster.

:::

:::caution

You must set a specific network interface for each node in the Molecule or Cloud Molecule in the Atom Cloud.

:::

Some steps differ depending on whether you are using Linux or Windows.

## Procedure

1.  Copy, paste, and rename the Atom file:

    -   For Linux, copy the \<installation\_directory\>/bin/atom file to \<installation\_directory\>/bin/atom.\<machine\_name\>.
    -   For Windows, copy the \<installation\_directory\>/bin/atom.exe file to \<installation\_directory\>/bin/atom-\<machine\_name\>.exe.
2.  Copy, paste, and rename the vmoptions file:

    -   For Linux, copy the \<installation\_directory\>/bin/atom.vmoptions file to \<installation\_directory\>/bin/atom.\<machine\_name\>.vmoptions.
    -   For Windows, copy the atom.vmoptions file to atom-\<machine\_name\>.vmoptions.
3.  Use a text editor to open the newly-copied files \(for example, the atom-\<machine\_name\>.vmoptions file\).

4.  Add this line to the file: `-Djgroups.bind_addr=<machine_IP_address>`.

5.  Save and close the file.

6.  Start the service:

    -   For Linux, use the \<installation\_directory\>/bin/atom.\<machine\_name\> script to start the Molecule node or Cloud Molecule on this machine from now on. For example, if you use "sysv" style startup, change the link to point to this new script and make sure the link name matches the script name.
    -   For Windows, use the \<installation\_directory\>/bin/atom-\<machine\_name\>.exe file— *not* the atom.exe script. You must update the service in the Windows registry to call the atom-\<machine\_name\>.exe file
7.  Restart the Molecule node or Cloud Molecule if it is currently running.

    If a Molecule node or Cloud Molecule does not start, an error message may appear in one of the log files. The message can be "Cannot bind to ..." or "Port value out of range ..." and can appear in the \<installation\_directory\>/bin/error.log file, the \<installation\_directory\>/bin/output.log file or the \<installation\_directory\>/logs/\<date\>.container.\<machine\_IP\_address\>.log file.

    This start problem occurs if a machine has multiple network interfaces available and cannot determine which to use. You can configure the "jgroups.bind\_addr" system property to force a specific network interface to be used for the clustering protocol. You need to do that for each machine.