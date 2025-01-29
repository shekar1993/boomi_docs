# Audit Logs dialog 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-c0c491cb-852b-4927-82b8-fc728ff5a7e4"/>
</head>


The Audit Logs dialog shows the history of changes to extension values for processes deployed to an Atom or Environment.

A record of the changes is logged in the audit log each time you use the Extensions dialog to save extension values for processes deployed to an Atom or environment.

The dialog opens when **Show Audit Logs** is clicked in the Extensions dialog.

:::note

The Audit Logs dialog can be opened only by administrators and users having the View Audit Logs privilege.

:::

## Log entries list 

The list of log entries for the last month is sorted in reverse chronological order.

Each entry shows the following information:

-   Date — date and time at which the changes were saved.

-   User — user ID \(email address\) of the requesting user.

-   Audit Log Type — All entries for saved extension values have type “Extensions”.

-   Action — All entries for saved extension values have action “Edit”.

-   Modifier — All entries for saved extension values have modifier “None”.

-   **New Value** — Opens the New Value dialog, which shows the saved extension values in their native XML format. Clicking **Close** returns to the Audit Logs dialog. The values shown in the dialog are actually sent to the Atom.