# Downloading an Atom, Molecule or Cloud’s log files 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-95dbc40e-335a-4f01-815f-74ece4bd5fa3"/>
</head>


If your account owns the local Atom, Molecule, or Atom Cloud you can download its log files.

## Procedure

1.  Go to **Manage** \> **Atom Management**.

2.  Select the Atom, Molecule, or Cloud from the list on the left.

3.  In the **Log Files** panel, select the date of the logs that you need from the calendar or use the format yyyy-MM-dd. A valid date is no later than the current date and no earlier than the latest purge date.

    If you select a date outside the valid date range, a warning message appears. You can change the date or keep it. If no logs are available for the selected date, a message will appear after you click **Download**. The dates and times in these log files are based on the JVM’s default time zone.

4.  Select **Atom Logs**.

5.  If you want the download to include certain files from the /bin directory, select **Include Bin Logs**.

6.  If you want the download to include certain configuration files, select **Include Configuration Files**.

7.  Click **Download**.

    The log files are put into a .zip file named in the format container\_accountID\_yyyy-MM-dd\_log.zip — for example, container\_youraccount-123456\_2018-05-02\_log.zip.

8.  Open or save the .zip file.