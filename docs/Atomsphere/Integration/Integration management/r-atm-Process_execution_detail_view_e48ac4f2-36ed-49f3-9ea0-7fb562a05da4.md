# Process execution detail view 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-e48ac4f2-36ed-49f3-9ea0-7fb562a05da4"/>
</head>


Process execution details include status, time, execution types, and documents with errors.

Clicking a date/time link for a process execution in the execution results table opens the detail view for that execution.

![Process execution](../Images/manage-fs-process-reporting-process-details_46648ffb-1b17-449e-a717-cb0c998a6558.jpg)

Clicking and dragging the ![Domino-shape](../Images/main-ic-dots-8-gray-on-white_cabceea1-ba32-41cf-8eca-a6a3d43cf2f8.jpg) icon in the view border adjusts the width of the view.

The top of the view shows the following information about the execution:

**heading**  
The name of the process.

**Status**  
- ![Light blue circle](../Images/main-ic-clock-blue-19_9cb26506-f75f-4cb4-996b-acb251c5c195.jpg) The process has started. You might see one of the following tooltips:

  - Starting - The process is starting. Processes start so quickly that it is unlikely that you will see this tooltip.
  - Enqueued - If the number of simultaneous process executions per node exceeds the limit, the process is in the queue. This tooltip applies only to non-low latency process executions. You can cancel a queued process execution.
  - Pending — The process is pending completion. You can cancel a pending process execution.

- ![Green circle](../Images/main-ic-circle-green-20x22_0a620eac-494b-4d65-9f1f-6b372abe7acd.jpg) The process and all documents were processed without errors.

- ![Yellow warning triangle](../Images/main-ic-triangle-warning-yellow-16_a265c92a-c628-4a9a-a310-8f3d568c9a25.jpg) There was at least one wrning in processing one or more documents. This status applies to low latency processes.

- ![Red circle with white dash](../Images/main-ic-bar-white-on-red-circle-20_bb816599-0e68-436e-a92a-dafa82affda4.jpg) There was at least one error in processing one or more documents, the process was aborted, or the process was discarded.

**Time**  
The date and time at which execution began. The date and time are in the format yyyy-MM-dd hh:mm:ss aa, using the time zone in which you are accessing the UI.

**Elapsed Time**  
The duration of the execution in minutes and seconds \(mm:ss\).

**Documents In**  
The number of documents read into the process. A single document can represent a batch containing many individual records.

**Documents Out**  
The number of documents sent out of the process. This number represents an aggregate of all the documents sent by a Send connector. If a single document is sent to multiple outbound connectors, it is counted for each. Splitting and combining documents within the process has a direct affect on this value.

**Atom**  
Name of the Atom on which the process ran.

**Execution Type**  
Indicates how the execution was triggered:

**Error description**  
If the execution failed, a truncated version of the document or process error message is shown on a pink background. This is a link to the Document Error detail view or the Process Error detail view.

## Actions 

Clicking **![Gray gear](../Images/main-ic-gear-gray_54d864eb-b5de-4ee6-9b31-975dae0a5762.jpg) Actions** opens a menu containing the following selections:

**![View process logs](../Images/main-ic-document-with-text-22x21_889d5aa0-0372-4dac-ac84-306ab5559353.jpg) View Process Logs**  
Opens the Show Log dialog for viewing events recorded during the execution. If a process does not execute, because it was discarded or because the user tried to execute it when it was already running, a log is not created. If that is the case, **View Process Logs** is not available.

**![View Process](../Images/step-ic-process-call-32_0a02413b-c876-48a2-9ff1-dddea14e200f.jpg) View Process**  
Opens the process component in a new browser tab or window.

**![View deployment components](../Images/main-ic-document-with-magnifying-glass-16_36098f7c-7a65-41a5-8392-a2e729d3de91.jpg) View Deployment Components**  
Opens the Components in this Deployment Version dialog for viewing a list of the components used during the execution.

**![View process state](../Images/main-ic-stop-watch_5e536cfd-d71a-4173-a4e9-ecac1664fe1c.jpg) View Process State**  
Opens the View Process State dialog for viewing the sequence in which steps were executed and the time it took to execute each step.

**![View extended info](../Images/main-ic-information-in-blue-circle_fdc36265-a56b-4d11-bdfe-2183ae92e7b3.jpg) View Extended Information**  
Opens the Extended Execution Information dialog for viewing the IDs of the execution, process, Atom and deployment.

**![Cancel process execution](../Images/main-ic-x-red-stylized-16_5cfc1d0e-0ef7-44cc-bacf-4b4116afca79.jpg) Cancel Process Execution**
:   \(![](../Images/main-ic-clock-blue-19_9cb26506-f75f-4cb4-996b-acb251c5c195.jpg) Pending executions only\) Initiates a request to cancel the execution. An alert box informs you that cancellation may take up to a minute and in the meantime the execution may complete successfully.

## All connections

For each connection that occurred during the execution, the following information and links are available:

**heading**  
 -   For a connector step, the connector type.

-   For a trading partner step, the document standard.

If the step is the Start step, the prefix “\(Start\)” appears here.

This is a link to the unfiltered connection documents list, which shows metadata for documents processed through the connection during the execution and provides a means for viewing the data in the documents and rerunning documents.

**Connection**  
-   For a connector step, the name of the connection component.

-   For a trading partner step, “Trading Partner”.

**Operation**  
-   For a connector step, the name of the connector operation component.

-   For a trading partner step, the communication method.

**Successes**  
Count of documents successfully processed through the connection.

This is a link to the connection documents list filtered to include only these documents.

**Errors**  
Count of documents with errors processed through the connection.

This is a link to the connection documents list filtered to include only these documents.

## Documents with errors

Each row represents a document with errors processed in the Start step and displays the following information. If there are more than five documents with errors processed in the Start step, only the first five are represented.

**ID**  
The unique document ID. This ID is specific to the execution.

**![](../Images/main-ic-bar-white-on-red-circle-20_bb816599-0e68-436e-a92a-dafa82affda4.jpg)** Status  
 Indicates there was at least one error in processing the document.

**![](../Images/main-ic-gear-blue-and-arrow-black-16_188e61d7-2204-48ad-b085-15fa4a70615d.jpg) Actions**  
This menu contains the following selections:

 -   **![](../Images/main-ic-scroll-white_7787acf3-71b7-4a31-bc94-313ec0051c12.jpg) View Logs** — Opens the Show Log dialog for viewing events logged during the processing of the document.

 -   **![](../Images/main-ic-document-with-magnifying-glass-16_36098f7c-7a65-41a5-8392-a2e729d3de91.jpg) View Document** — Opens the Document Viewer dialog for viewing the data in the document.

 -   **![](../Images/main-ic-document-two-blue-curved-arrows_d5a9b591-588d-4888-94aa-3839cdb10912.jpg) Re-run Document** — Initiates a request to rerun the document.

 -   **![](../Images/main-ic-document-with-gear_bb87e431-ee33-4e21-a010-c8989ff93c28.jpg) Run Document in Test Mode** — Initiates a request to rerun the document in Test mode.

 -   **![](../Images/main-ic-chain-links_8091e819-3cbe-49c9-9e67-dcfe13ace10f.jpg) View Linked Documents** — Opens the View Linked Documents dialog for viewing linked documents processed through previous or subsequent connections.


**Error Message**  
A truncated version of the error message. This is a link to the Document Error detail view.

**Size \(kB\)**  
The file size in KB.

Additional document metadata shown here is dependent upon the document type.

-   For documents retrieved using Disk connector operations, the following additional metadata are shown:

    **Directory**  
    The directory, on the system on which the Atom resides, from which or to which the document was read or written.

    **File Name**  
    The document filename.

-   For descriptions of trading partner document metadata, see the topic about the Trading Partner results table.

-   For descriptions of metadata for documents retrieved using other types of connectors, see the connector topics.


## Navigation bar

The following navigation controls are in the bar at the bottom of the view:

**![](../Images/main-ic-arrow-gray-up_3394c903-2719-4d4b-82cc-ec8cd74d99d2.jpg) Previous**  
Navigates to details for the previous execution in the execution results table. Keyboard shortcut: **Up arrow**.

**Next ![](../Images/main-ic-arrow-gray-down_c4b5bff8-7fde-4200-b305-68bff70fecf0.jpg)**  
Navigates to details for the next execution in the execution results table. Keyboard shortcut: **Down arrow**.

**Close**  
Closes the view, returning focus to the execution results table. Keyboard shortcut: **Esc**.

:::note

You can also close the view by clicking in the execution results table.

:::
