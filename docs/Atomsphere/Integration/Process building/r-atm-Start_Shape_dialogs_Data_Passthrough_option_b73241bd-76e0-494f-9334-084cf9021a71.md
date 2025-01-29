# Start step dialog’s Data Passthrough option

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-b73241bd-76e0-494f-9334-084cf9021a71"/>
</head>


The Data Passthrough option should be selected if the process is intended to receive data from another parent process or another external source.

![Start step icon for Data Passthrough option](../Images/step-ic-start-data-passthrough_ede6904e-fc2b-4303-bb34-93420c0b0497.jpg)

A Process Call or Process Route step in a parent process can pass through documents to the child process to perform another series of processing steps. The Return Documents step can then be used, if preferred, to return the document results to the parent.

-   If Data Passthrough is enabled in the child process, the parent process sends any documents that reach the Process Call or Process Route step in one batch and starts one execution of the child process, versus generating a new execution of the child process for each document.

-   When the process\(es\) are deployed and executed, the child process does not display an execution record on the Manage menu if there is a Return Documents step in the process. The return is simply displayed in the parent process as a single execution of the parent.

-   If this process is enabled with scheduling without a data source, it runs as a No Data Start step.


**Name**  
**Description**

**Display Name**

\(Optional\) User-defined name to describe the step. If one is not entered, Data Passthrough appears on the step.