# Downloading MLLP artifacts 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-10b9af4c-5bef-44b0-9cce-473fa66de3cd"/>
</head>


You can download MLLP artifacts from the **Log Files** panel in Atom Management.

## Procedure

1.  Go to **Manage** \> **Atom Management**.

2.  Select the Atom or Molecule from the list on the left.

3.  In the **Log Files** panel, select the date of the logs that you need from the calendar or use the format yyyy-MM-dd. Use the format yyyy-MM-dd. A valid date is no later than the current date and no earlier than the latest purge date.

    If you select a date outside the valid date range, a warning message appears. You can change the date or keep it. If no logs are available for the selected date, a message will appear after you click **OK**.

4.  Select **MLLP Artifacts**.

5.  Click **Download**.

    The log files are put into an `MLLPArtifacts_log.zip` file. Both inbound and outbound logs are included.

6.  Open or save the .zip file.

    :::note
    
    Inbound log file paths are relatively long, as they contain IDs for the sending application, sending facility, receiving application and receiving facility. In a Windows environment, be aware of the maximum system path length limit of 260 characters when specifying the path to which to save the .zip file.

    :::
    