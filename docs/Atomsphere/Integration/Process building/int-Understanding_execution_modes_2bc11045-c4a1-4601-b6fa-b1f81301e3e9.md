# Understanding execution modes 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-2bc11045-c4a1-4601-b6fa-b1f81301e3e9"/>
</head>



The Process Mode setting determines how a process will execute regarding performance and logging. It is particularly important for listener processes that are used for APIs and event-based integrations.

## Process Modes

| Process Mode | Description                                                  |
| ------------ | ------------------------------------------------------------ |
| General      | Default mode for all processes. General mode produces a complete execution history on the Process Reporting page, including process- and document-level logs and document payloads.<br />General mode is typically used for scheduled batch processes which are longer running and do not require minimal response time. |
| Bridge       | Provides increased performance over General mode for short-lived (less than 30 seconds) listener processes by reducing the logging level. Bridge mode provides execution history on the Process Reporting page, including process- and document-level logs but does not capture document payloads.<br />Bridge mode is typically used for high-volume, API or event-based processes that require high performance but also require individual execution history and logging, such as receiving orders or synchronizing transaction records. |
| Low Latency  | Provides maximum performance for short-lived (less than 30 seconds) listener processes by eliminating virtually all logging. Low Latency mode does not provide any execution history or logging on the Process Reporting page and does not capture document payloads. Summarized execution activity is provided on the Real-time Dashboard.<br />**Note:** You can choose to log execution failures in Low Latency mode on the Process Options panel.<br /><br />Low Latency is typically used for high-volume, API or event-based processes where the absolute minimum response time is required and individual execution history details are not critical, such as handling API query requests.For more information, see [Low Latency processes](c-atm-Low_latency_processes_af9912ba-d4c8-4754-baeb-69bd9a41c48c.md). |


## General usage considerations

-   The Process Mode and the process' Start step configuration are interdependent. General mode can be used with any connector or Start step type, including listeners, however Low Latency and Bridge mode are applicable only for connector listen actions. Not all connectors with a listen action support Low Latency or Bridge mode. See the documentation for each connector for supportability.
-  When a process calls another process using the Process Call or Process Route step, only the Process Mode of the parent process is used. The child process’s Process Mode is ignored. For example, if a parent process set to Low Latency mode calls a child process that is set to General mode, the entire execution will run in Low Latency mode, including the steps in the child process. 
-   When deploying a process configured as Bridge or Low Latency mode to an Atom Cloud \(either Boomi's public hosted clouds or a privately hosted cloud\), executions will run in an Atom Worker if the given cloud attachment has been provisioned with an Atom Worker. The number of concurrent executions and maximum execution duration is determined by how the Atom Worker is configured.
-   When deploying a listener to an Atom Cloud runtime, configuring as Low Latency or Bridge mode provides the most immediate response to clients.
-   To assist with troubleshooting and debugging Web Services Server \(WSS\) and Flow Services Server \(FSS\) listener processes configured as Bridge or Low Latency mode, a specific parameter can be included in the request to temporarily execute the process in "Low Latency Debug" mode. This causes that single execution to run in General mode with a complete execution history, including logs and document payloads. For more information, see the "Disabling Low Latency process mode for single executions" section in [Low Latency processes](c-atm-Low_latency_processes_af9912ba-d4c8-4754-baeb-69bd9a41c48c.md).

## Detailed comparison

|                                                              | General                                                      | Bridge                                                       | Low Latency                                                  | Low Latency Debug                                            |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                                              |                                                              |                                                              |                                                              |                                                              |
| **Execution history available in Process Reporting**         | Yes                                                          | Yes                                                          | No (only for errored executions, optionally)                 | Yes                                                          |
| **Executions can be retried**                                | Yes                                                          | No                                                           | No                                                           | Yes                                                          |
| **Generates Document Log**                                   | Yes                                                          | Yes                                                          | No (only for errored executions, optionally)                 | Yes                                                          |
| **Captures document tracked fields**                         | Yes                                                          | Yes                                                          | No (only for errored executions, optionally)                 | Yes                                                          |
| **Generates Process Log**                                    | Yes                                                          | Yes                                                          | No (only for errored executions, optionally)                 | Yes                                                          |
| **Generates Process State**                                  | Yes                                                          | No                                                           | No                                                           | Yes                                                          |
| **Runs in [Atom Workers](../Integration%20management/c-atm-Atom_workers_057ddda4-0cf2-40b2-8dd9-c193ae168569.md)** (Applicable only when deployed to an Atom Cloud and an Atom Worker is enabled for the attachment) | No<br />**Note:** There is an [advanced property](../Integration%20management/r-atm-Properties_panel_Advanced_tab_c39737e8-1b16-4fdd-b414-152694364c14.md) for Atom Cloud to force HTTP and AS2 listeners to run in an Atom Worker even when set to General mode. | Yes                                                          | Yes                                                          | Yes                                                          |
| **Supported connector actions**                              | Any                                                          | Listen only                                                  | Listen only                                                  | Listen only                                                  |
| **Typical use cases**                                        | Default mode for new processes. Provides full visibility of execution logging and document data capture.For example, scheduled or batch integrations such as application, data, and file data synchronizations. | High-volume, API or event-based integrations. Details of individual executions are needed, but some throughput is sacrificed.For example, receiving inbound orders or other important business transactions. | Very high volume, API event-based integrations. Details of individual executions are not needed. Maximum throughput is priority.For example, extremely high volume web requests or API lookups. | Temporary troubleshooting of Low Latency or Bridge mode processes. Runs the single execution in General mode with full execution logging and document data capture.<br />**Note:** Applicable only to WSS and FSS connectors. |
| **View Document Data**                                       | Yes                                                          | No                                                           | No                                                           | Yes                                                          |
| **Generates Events and Alerts**                              | Yes                                                          | No                                                           | No                                                           | Yes                                                          |
| **Dashboard visibility**                                     | Account                                                      | Account                                                      | Real-Time                                                    | Account                                                      |
| **Platform API object for execution history**              | ExecutionRecord                                              | ExecutionRecord                                              | ExecutionRecordSummary                                       | ExecutionRecord                                              |



## Setting the Process Mode

You can set the Process Mode in the process component. After modifying the value, you must repackage and redeploy the process for changes to take effect.

1.  Open the process, select Process Options, and choose a different mode.
2.  Save the process.
3.  Create a new packaged component and deploy it to the desired environment\(s\).

For more information, see [Process Options dialog](r-atm-Process_Options_dialog_97679f9e-1130-46ed-9937-8d1af5bcdbd5.md).

**Default Process Options per Process Mode**

Several Process Options values are defaulted in the process' Start step based on the selected Process Mode.

|                                        | General | Bridge | Low Latency |
| -------------------------------------- | ------- | ------ | ----------- |
| **Allow Simultaneous Executions**      | FALSE   | TRUE   | TRUE        |
| **Capture Run Dates**                  | TRUE    | FALSE  | FALSE       |
| **Only Generate Process Log on Error** | N/A     | N/A    | TRUE        |

There are some scenarios in which you might want to modify the default Process Options:

- If you have a listener process but still want complete execution details, set the Process Mode to `General`, but set **Allow Simultaneous Executions** to `TRUE` to receive multiple concurrent requests (typical use case) and **Capture Run Dates** to `FALSE` (not applicable).