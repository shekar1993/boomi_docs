# Process Options dialog

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-97679f9e-1130-46ed-9937-8d1af5bcdbd5"/>
</head>


You can set process options in the Process Options dialog when you create or edit a process.

**Process Mode**

The Process Mode setting determines how a process will execute regarding performance and logging. It is particularly important for listener processes that are used for APIs and event-based integrations.

-   General — The default process mode for all new processes. General mode results in full process logging.

-   Bridge — This process mode results in improved performance over General mode and full process logging. Bridge mode is ideal for high-volume, event-based processes for which you want to capture log data.

-   Low Latency — Use this process mode to improve performance for short-lived processes \(where total execution time is generally expected to be less than 30 seconds\). In this process mode, the Start step dialog is set to use the Connector option.

    When the process mode is set to Low Latency:

    -   The other fields, where Action is set to Listen and Atom Web Server manages the connection settings, cannot be changed.

    -   Some functionality is disabled. See the [Low Latency processes](c-atm-Low_latency_processes_af9912ba-d4c8-4754-baeb-69bd9a41c48c.md) topic for more information.

A subprocess called by a low latency process always uses Low Latency mode. In other words, the subprocess settings in the Process Options dialog are ignored and it uses the same Process Options settings as the top-level low latency process that calls it.

For more detailed information on Process Modes and its general usage considerations, see [Understanding execution modes](/docs/Atomsphere/Integration/Process%20building/int-Understanding_execution_modes_2bc11045-c4a1-4601-b6fa-b1f81301e3e9.md).


## Allow Simultaneous Executions

This check box is always available and can be turned on or off. If the Process Mode field is set to General, this check box is off by default. If it is set to Low Latency, this check box is on by default.

-   If selected, more than one instance of this process can run at the same time on a given Atom.

-   If cleared, only one instance can run at a time. This is often beneficial when you are processing large amounts of data \(to conserve system resources\) or performing time- or state-sensitive synchronizations.

-   When a process calls a subprocess, the subprocess always executes immediately regardless of how the Allow Simultaneous Executions check box is set on the subprocess or its parent process.

:::note

This option is not recommended for use with processes that use persisted process properties.

:::

### Auto Capture Errors/Warnings to Local Log?

If selected, logs for the process are stored in the local Atom's execution history directory. The default location is a zip file in the `<atom_installation_directory>/execution/history/<process_execution_date>` folder. The zip file contains the log files for the process.

This check box is always available and can be selection or cleared. It is cleared by default.

### Capture Run Dates

Records the last run date and the last successful run date for the process. There is significant performance degradation if this option is enabled for web server, AS2, or event-based processes.

This check box is always available and can be turned on or off. If the Process Mode field is set to General, this check box is on by default. If the process mode is set to Low Latency, this check box is off by default.

### Purge Data Immediately

If this setting is on, processed documents and temporary data are purged immediately after each execution of the process.

There is a like-named setting at the Atom level.

-   If the Atom-level setting is on, purging occurs for any process execution on that Atom, regardless of the individual process option settings.

-   If the Atom-level setting is off, purging occurs only for executions of processes for which the process option setting is on.


Set at the process level, the Purge Data Immediately option always purges document data regardless of success or failure, and does not purge process or document logs.

For a process running as a subprocess, the process option setting for the parent process takes precedence.

This check box is always available and can be turned on or off. It is off by default.

### Only Generate Process Log on Error

If selected, the process log is created only if the process encounters an error. We recommend that you turn on this check box for web server or event-based processes to improve performance.

This check box is available only when the Process Mode field is set to Low Latency. The check box is on by default for new processes and off by default for existing processes. It can be turned on or off.

When you configure the Start step for a process, you might see a message containing recommendations about how to set the Allow Simultaneous Executions and Capture Run Dates check boxes. Following these recommendations should improve process performance. For example:

-   If you select a regular connector or No Data and Allow Simultaneous Executions is on, it is recommended that you turn it off.

-   If you select Passthrough and Capture Run Dates is on, it is recommended that you turn it off.

-   If you select Trading Partner or any type of listener \(Action = Listen\) and Capture Run Dates is on, it is recommended that you turn it off.

-   If you select Trading Partner or any type of listener \(Action = Listen\) and Allow Simultaneous Executions is off, it is recommended that you turn it on.


To follow the recommendation, click the Make Change\(s\) link within the message.
