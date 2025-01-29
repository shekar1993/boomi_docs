# Downloading AS2 artifacts 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-c4c77c3a-4f10-4d1e-9866-fd50a7bfd7a8"/>
</head>


You can download AS2 artifacts from the **Log Files** panel in Atom Management.

## Procedure

1.  Go to **Manage** \> **Atom Management**.

2.  Select the Atom, Molecule, or Atom Cloud from the list on the left.

3.  In the **Log Files** panel, select the date of the logs that you need from the calendar or use the format yyyy-MM-dd. A valid date is no later than the current date and no earlier than the latest purge date.

    If you select a date outside the valid date range, a warning message appears. You can change the date or keep it. If no logs are available for the selected date, a message appears after you click **Download**. The dates and times in these log files are based on the JVM’s default time zone.

4.  Select **AS2 Artifacts**.

5.  Click **Download**.

    The log files are put into a .zip file named in the format AS2Artifacts\_accountID\_yyyy-MM-dd\_log.zip — for example, AS2Artifacts\_youraccount-123456\_2018-05-02\_log.zip.

6.  Open or save the .zip file.

:::note

Log file paths contain AS2 message IDs, which can be relatively long. In a Windows environment, be aware of the maximum system path length limit of 260 characters when specifying the path to which to save the ZIP file.

:::
