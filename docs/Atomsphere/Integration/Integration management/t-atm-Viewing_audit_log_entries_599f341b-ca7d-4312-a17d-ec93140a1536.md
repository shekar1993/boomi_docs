# Viewing audit log entries 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-599f341b-ca7d-4312-a17d-ec93140a1536"/>
</head>

The Audit Logs dialog shows the history of changes to extension values for processes deployed to an Atom or Environment.

A record of the changes is logged in the audit log each time you use the Extensions dialog to save extension values for processes deployed to an Atom or environment.

## Before you begin

Administrators and users having the View Audit Logs privilege can open the Audit Logs dialog. Audit log entries are retained indefinitely — there is no purge schedule.

## Procedure

1.  Go to **Manage** \> **Runtime Management**.

2.  Select an environment from the available environments.

3.  For the selected environment, click **Environment Extensions** under Administration.

    The Extensions dialog opens.

4.  Click **Show Audit Logs**.

    The Audit Logs dialog opens.

    The [log entries](#log-entries-list) are listed in reverse chronological order.

5. **Optional:**  Click **New Value** for each entry of interest, to view the saved extension values.

    The New Value dialog opens. The extension values are shown in their native XML format.

6.  Click **Close** to return to the Audit Logs dialog when you are done viewing extension values.

7.  Click **Close** to return to the Extensions dialog when you are done viewing entries.

## Log entries list 

The list of log entries for the last month is sorted in reverse chronological order.

Each entry shows the following information:

-   Date — date and time at which the changes were saved.

-   User — user ID \(email address\) of the requesting user.

-   Audit Log Type — All entries for saved extension values have type “Extensions”.

-   Action — All entries for saved extension values have action “Edit”.

-   Modifier — All entries for saved extension values have modifier “None”.

-   New Value — Opens the New Value dialog, which shows the saved extension values in their native XML format. The values shown in the dialog are actually sent to the Atom.