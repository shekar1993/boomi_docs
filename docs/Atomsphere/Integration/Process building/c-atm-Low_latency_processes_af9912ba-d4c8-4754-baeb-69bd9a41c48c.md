# Low latency processes

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-af9912ba-d4c8-4754-baeb-69bd9a41c48c"/>
</head>

The Low Latency option for processes greatly increases the speed at which a process executes by not logging every state of the process. Reduced logging allows the process to execute mainly in memory where transformations and other steps can execute quickly. The Low Latency option is recommended if you need to execute a high volume of process calls within a short period of time.

To achieve faster performance, a low latency process does not track as much information as a traditional process does:

- Request or response data is not recorded. Therefore, you cannot view request or response data, and you cannot retry a low latency process.

- Process metrics are not recorded in the View Process State dialog, but the process log is available.

- The inbound data’s document logs are disabled.

You can set a process to use Low Latency mode in the Process Options dialog. If you use Services Enablement with a locally installed Atom or Molecule, there are no further requirements. If you use Services Enablement in Boomi’s Atom Cloud, you should contact your representative about having an Atom worker enabled in your account.

## Limitations and differences in low latency processes

The following limitations apply to low latency requests:

- If you are using an Atom worker in a Atom Cloud, the maximum Atom worker process execution time is 30 seconds. If you are using a private Atom Cloud, the default is 30 seconds but you can change the Atom Worker Maximum Execution Time on the Attachment Quotas tab.

  :::note

  If you change the Atom Worker Maximum Execution Time, you must restart before the setting change takes effect.

  :::

- For Web Services Server listener processes, if you are using a Atom Cloud, the maximum input document size is 1 MB. If you are using a local Atom, Molecule, or private Atom Cloud there is no restriction, but you can use the Web Service Request Input Size property on the Attachment Quotas tab to set a limit.

You will notice some minor differences in low latency process executions:

- Processes that use the Flow Control step’s *multi-thread* parallel processing run as usual. However, if a process uses the Flow Control step’s *multi-process* parallel processing, it is downgraded to multi-thread parallel processing.

- Subprocesses use the same process options as the low latency process that calls them. Therefore, a subprocess that is called by a low latency process also uses Low Latency mode.

- All low latency process execution results are summarized and displayed on the Real-time Dashboard. When a low latency process generates a warning or error, more detailed information about the problem is available on the Process Reporting page.

- Low latency processes do not generate email alerts.

## Building efficient low latency processes

It is possible to unintentionally build a low latency process that runs slowly. Avoid the following steps or behaviors within your process to make sure the low latency process executes quickly:

- Too many connector calls — the most common cause for a long-running, low latency process is the number of connector calls that the process makes. When you call connectors that in turn call other web services, the timing of the process can be only as fast as the response time of the web service, including any Internet latency. Connector calls in a Map step or Decision step are not immediately visible within the Process canvas.

- Too many steps — each step incurs a minimal amount of overhead. A process with hundreds of steps can be slow due to the general complexity of the process. Review the number of process calls when determining the overall size of your process.

- Flow Control step — the Run Each Document Individually option within the Flow Control step slows down any process regardless of whether the process mode is set to General or Low Latency. Use this option sparingly.

- Persisted process properties — persisted process properties are saved to disk each time they are stored. Saving to disk can cause file contention when iterations of the same process are trying to store the persisted process property.

- Steps that write to disk — *any* step that writes data to disk increases processing time regardless of whether the process mode is set to General or Low Latency.

- Tracking process run dates — tracking run dates slows down process executions. Do not track process run dates on any web service processes or subprocesses.

## Disabling low latency Process Mode for single executions

For a process executed with its Process Mode option set to Low Latency, the presence in a web server request of the query parameter `_boomi_debug=true` or the HTTP header `X-Boomi-Debug` with a value of `true` has the effect of changing the Process Mode to General for the current process execution. This parameter can be useful for debugging purposes.
