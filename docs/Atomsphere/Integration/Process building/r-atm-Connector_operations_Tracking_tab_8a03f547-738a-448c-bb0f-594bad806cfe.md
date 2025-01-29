# Connector operation's Tracking tab

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-8a03f547-738a-448c-bb0f-594bad806cfe"/>
</head>


To make a custom tracked field placeholder so it visible and searchable on the *Process Reporting* page, add the tracked field on the **Document Tracking** tab in the **Settings** page, and configure it on the connector operation's **Tracking** tab. Tracked field labels are operation-independent. Different processes and operations can specify the same label and populate the same field.

:::note

Some connectors have properties, like disk file name, FTP directory, or email subject, that you can reference or set dynamically elsewhere in the process. The help topics for individual connectors list these tracked properties types, which are displayed on the Manage menu's Process Reporting page for each document received or sent.

:::

## Tracked fields

Lists tracked field labels and enables for each the assignment of a parameter\(s\) in the Field Values list. To assign a parameter for a tracked field label, select it in the Tracked Fields list.

**Add Tracked Field**   
Opens the Select Tracked Field dialog to add an eligible tracked field label to the Tracked Fields list.

-   **list** — Selects a tracked field label from the eligible list.

-   **OK** — Adds the selected tracked field label to the Tracked Fields list, then closes the dialog.

-   **Cancel** — Closes the dialog without adding a tracked field label.


**Change Tracked Field**   
Opens the Select Tracked Field dialog to replace the tracked field label selected in the Tracked Fields list with a different eligible tracked field label.

-   **list** — Selects a tracked field label from the eligible list.

-   **OK** — Replaces the tracked field label selected in the Tracked Fields list with the tracked field label selected in this dialog, then closes the dialog.

-   **Cancel** — Closes the dialog without replacing a tracked field label.


**Delete Tracked Fields**   
Initiates a request to delete the selected tracked field label. In the confirmation dialog:

-   Click **OK** to execute the operation.

-   Click **Cancel** to cancel the request.


## Field values

Lists the parameter\(s\) assigned to the field value label selected in the Field Values list.

**Add Parameter**   
Opens the standard Parameter Values dialog for the purpose of adding a parameter.

**Edit Parameter**   
Opens the standard Parameter Values dialog for the purpose of replacing the selected parameter.

**Delete Parameter**   
Initiates a request to delete a parameter. In the confirmation dialog:

-   Click OK to execute the operation.

-   Click Cancel to cancel the request.


**Move Parameter Up**   
Moves the selected parameter up one position.

**Move Parameter Down**   
Moves the selected parameter down one position.