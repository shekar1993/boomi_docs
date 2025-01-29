---
sidebar_position: 8
---

# Integration process reporting

The **Integration Process Reporting** page displays information about process executions and their related documents and logs. This page helps you check whether a process ran successfully. The report includes all errors that occur during the process execution and scheduling run failures.

This page displays a maximum number of 1000 execution records.

On the Integration Process Reporting page, you can filter the report by:
* **Show History Since** — Select a date to view the history of the process executions. The default value of this field is the current date.
* **Search** — Type a process name in the search bar to display all executions of processes of that name.
* **Process Name** — Displays the name of the process.
* **Status** — Select a status in the drop-down list to display all executions that have the same status.
* **Execution per page** — Select the number of executions as per your requirement.
* **TimeStamp** — Displays the date and time when the process was executed. The date and time are in the format yyyy-MM-dd hh:mm:ss aa, using your local time zone.

Click on a row to view the following additional information:
* **Duration** — The time it took for the process to execute.
* **Type** — What triggered the execution (example, retry\_sched). For more information, refer to the [Process execution result table](/docs/Atomsphere/Integration/Integration%20management/r-atm-Process_execution_results_table_d31a4174-8f19-444b-9fcc-0bd1e4abfc32.md).
* **Inbound Documents** — The number of documents passed into the process. A single document can represent a batch that contains many individual records.
* **Inbound Errors** — If there are process-level errors, this field displays the number of errors.
* **Message** — If there is a process-level error, the error message appears in this field.
* **Outbound Documents** — The number of documents sent out of the process. This number represents an aggregate of all the documents sent by a Send connector. Splitting and combining documents within the process directly affects this value. Refer to [process execution and document viewing](/docs/Atomsphere/Integration/Integration%20management/c-atm-Process_execution_document_viewing_6f00f633-7472-4a85-8f37-c8e91042baa7.md).
