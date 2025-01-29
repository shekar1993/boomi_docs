# Start step dialog’s No Data option

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-42b3f4e9-a681-42c3-8df8-5530ef3b460a"/>
</head>


The No Data option should be selected if the process should not receive or retrieve data from any source. The process can be scheduled and run similar to CRON or any other job scheduler to perform a series of steps or commands. The process can also be triggered by a schedule, Process Call or Process Route step in a parent process, or the Execute Process API.

![Start step icon No Data option](../Images/step-ic-start-no-data_daeb4f19-9b39-4ebf-95e1-668e37b708f5.jpg)

Executing the process generates a single empty document that is forwarded through the process flow. The process should be designed to expect an empty document and either perform commands or retrieve documents from other sources.

**Name**   
**Description**

**Display Name**   
\(Optional\) User-defined name to describe the step. If one is not entered, “No Data” appears on the step.