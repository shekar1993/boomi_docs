# Process Call step

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-D69CDBBC-76AE-4E20-B7E7-893CFD614645"/>
</head>


The Process Call step enables you to execute another process from within a process. The subprocess that is called is considered a separate, distinct process execution.

![Process Call icon](../Images/step-ic-process-call-32_0a02413b-c876-48a2-9ff1-dddea14e200f.jpg)

:::note

The process that calls another process is sometimes referred to as a parent or main process. The process that the parent process calls is sometimes referred to as a subprocess or a child process.

:::

You can use the Process Call step to design and reuse common processes for tasks such as initialization or clean up. You can also use this step to coordinate processes for consecutive executions. Using a process call and subprocesses is a simple and reliable way to coordinate the execution of processes without the need to schedule each process independently. The Process Call step can be configured to wait until that process is complete before continuing with its next step.

:::note

If a subprocess contains multiple Return Document steps, the paths in the parent process are executed according to the order in which the Return Document steps are configured in the subprocess.

:::

If you want to use process extensions in a process that uses the Process Call step, keep the following in mind:

-   Extensions that you define in the parent process are applied to both the parent process and any subprocesses.

-   Extensions that you define in a subprocess are not applied during execution of the parent process.


For example, if you use the same Connector component in the parent process and one of the subprocesses, you need to define the extension only once, in the parent process.

## Subprocess types

The subprocess that a Process Call step executes can be defined as a passthrough process \(Data Passthrough is selected in its Start step dialog\) or a non-passthrough process. The subprocess type affects how documents are handled and how the process execution is recorded.

**Passthrough process**   
If Data Passthrough is enabled in the subprocess:

-   Documents are passed from the parent process into the subprocess.

-   You can use one or more Return Documents steps in the subprocess to return documents to the parent process, if needed.

-   The parent process passes any documents that reach the Process Call step as a group and calls one instance of the subprocess.

-   Process Reporting includes information about each subprocess as a step within the parent's process log. There are no separate execution records or logs for the subprocesses.


**Non-passthrough process**   
If Data Passthrough is *not* enabled in the subprocess:

-   Documents are not passed into the subprocess.

-   The parent process calls a new instance of the subprocess for each document that reaches the Process Call step.   
If the parent process is executing multiple documents when they reach the Process Call step, the subprocess is executed multiple times. If you want the subprocess to execute only once, add a Data Process step with a Combine Documents process type right before the Process Call step.

-   If the Start step in the subprocess is configured with a connector type that accepts parameters, you can set any parameter values from the Process Call step in the parent process. If you set parameters in the Process Call step, any parameters defined in the subprocess are ignored. If you do not want to override the subprocess parameters, do not set any parameters in the Process Call step.

-   Process Reporting contains a separate execution record and process log for each subprocess. The execution records can be identified by the ![](../Images/main-ic-sub-process-call-22x24_64b78f32-910c-402d-96b9-87198230f0b7.jpg) Sub Process icon.


## Process Call step dialog

**Name**   
**Description**

**Display Name**   
User-defined name to describe the step. If one is not entered, no label appears on the step.

**Process**   
Used to choose the process that you want to call.

**Wait for process to complete**   
-   If selected, the parent process waits for the subprocess to complete before continuing to its next step. If the subprocess fails, the parent process stops.

-   If cleared, and if **Abort if process fails** is selected, the parent process reports the subprocess’ error after all subprocesses have executed.


If the process being called is a passthrough process \(Data Passthrough is selected in its Start step dialog\), this check box cannot be turned off.

**Abort if subprocess fails**   
If selected, the parent process stops and is marked as failed if the subprocess fails.