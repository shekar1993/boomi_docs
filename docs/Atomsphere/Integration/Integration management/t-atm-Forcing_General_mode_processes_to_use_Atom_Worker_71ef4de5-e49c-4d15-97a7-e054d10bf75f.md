# Forcing General mode processes to use an Atom worker 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-71ef4de5-e49c-4d15-97a7-e054d10bf75f"/>
</head>


Set these properties to force General mode processes on your private Atom Cloud to use an Atom worker.

## About this task

You can set the properties for all accounts or for an individual account that uses your Atom Cloud.
## Procedure

1.  Go to **Manage** \> **Cloud Management**.

2.  Select the Atom Cloud.

3.  On the **Attachment Quotas** tab, select one of the following:

    -   To use an Atom worker on all General mode processes in all accounts on your private Atom Cloud, select the Cloud Molecule.
    -   To enable the behavior for an individual account, select the account’s Atom.

4.  Set the following properties:

    -   For AS2 listener processes, set the **Default AS2 Workload** field to **Low\_Latency\_Debug**.

    -   For Web Services Server processes, set the **Default HTTP Workload** field to **Low\_Latency\_Debug**. All Web Services Server processes use an Atom worker. Processes configured in General mode will run in Low\_Latency\_Debug mode.

    -   To change the default maximum Atom worker process execution time, enter a value in the **Atom Worker Maximum General Execution Time** field in hours, minutes, seconds, and milliseconds.

5.  Click **Save**.

6.  Restart the Cloud Molecule or Atom.