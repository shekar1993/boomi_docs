# Custom roles for restricting access to data and documents

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-f9bdc759-30d6-4fea-94f2-2db90f6a7d97"/>
</head>

You can allow users to view process logs and/or execute and rerun processes but not view the resulting data and documents from the processes.

For example, a person who is responsible for running processes that manage personnel or financial data needs to run processes and ensure that they execute successfully. However, they should not have access to sensitive data that flows through the processes.

The View Data privilege allows users to view data and documents on the Process Reporting page. All of the user roles delivered with Integration have the View Data privilege turned on. Therefore, you must create a custom role that allows users to view process execution activity and logs and/or to execute processes on the Process Reporting page, but restricts them from viewing data.

:::note

If you set up a custom role in a primary account, that role can be shared with other accounts through account groups.

:::

The privileges for a role that restricts users from viewing data should be set as follows:

| Privilege | Description | Setting |
| --- | --- | --- |
| View Results | View and monitor process execution activity and logs, but not execution data. | On |
| Execute | Execute or retry available processes. | On or Off |
| View Data | View execution data in process reporting. | Off |

Users who are assigned a custom role with these privilege settings have access to the Process Reporting page. However, if users select a process and view the document results on the bottom of the page they do not see the following options:

- **View Document** on the Inbound Data and Outbound Data tabs
- **Run Document in Test Mode** option on the Inbound Data tab
- **Re-run Document** if the Execute privilege is off on the Inbound Data tab
