#  Integration

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-d20a6079-d451-456b-87e3-2ab114341f51"/>
</head>

**We fixed these issues:**

- Configuring the Decision step value as a connector call for the Database V2 connector no longer returns a null value for the output parameter. (INT-9841)

- Environment Extensions no longer uses a blank value for the process property when *useDefault* is set to false and attribute *value* is not provided in the payload. The property now uses the default value. (INT-10051)

- The *value* attribute is returned in the API response, after selecting/unselecting *useDefault* option for the process property Environment Extensions.
 (INT-10278)

- The cross reference table no longer allows over 10,000 rows when copying rows. (INT-1972)

- Folders under the **All** section in the **Connection** configuration are now sorted in the same order as they appear in the Component Explorer. (INT-8068)

- **Process Complete** new icon now appears in the  **Process State details** dialog on the Process Reporting page for dark theme and light theme when **Enable new build canvas and component icons** is turned on. (INT-9758)

- The **Copy Folder** dialog is no longer being stretched when a long folder name is copied. (INT-488)

- The first element is now being added to the source profile or destination profile, after deleting the existing elements. When the second element is added, both first and second elements appear in the profile. (INT-5949)

  :::note

  This fix was removed following the January platform release. It will be released in a future release.

  :::

- Raw HTML text no longer appears in the error message when the server does not respond. The actual link to [status.boomi.com](http://status.boomi.com/) now appears in the error message. (INT-6251)

- Raw HTML text no longer appears in the error message for network communication issue. The actual link to [status.boomi.com](http://status.boomi.com/) now appears in the error message. (INT-10487)

- **Show Mapping** old icon is now replaced with a new icon. The new icon appears in the dark theme and light theme when **Enable new build canvas and component icons** is turned on. (INT-10100)

- Multiple Attachment Integration Pack name is no longer editable when you try to rename it in the **Integration Pack Name** field on the Edit Integration Pack Details dialog. (INT-530)

- XML parsing errors are no longer displayed when Document Viewer is open in Mozilla Firefox. (INT-511)

- Fixed the following issues:
  -   Clone Component from Platform Environment dialog no longer stretches when a long folder name is copied from the Component Explorer.
  -   Copy, Rename, New Folder, and Clone dialogs are now displayed in consistent size for all supported browsers.  
  (INT-535)

- An error message no longer displays when you attempt to view environment extensions for a process. (INT-10927)
