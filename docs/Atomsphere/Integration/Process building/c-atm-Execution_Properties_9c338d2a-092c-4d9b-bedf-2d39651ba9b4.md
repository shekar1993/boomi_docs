# Execution properties

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-9c338d2a-092c-4d9b-bedf-2d39651ba9b4"/>
</head>


Execution properties contain run-time information related to a specific execution of an integration process.

You can use execution properties in a process to support built-in testing logic, generate dynamic email notifications, or create custom reports. Properties such as account ID and execution ID can also be useful for logging process activity and for troubleshooting.

These properties, which are set and maintained automatically by the run-time engine, cannot be modified. The following execution properties are available:

|Property|Description|Scripting value|
|--------|-----------|---------------|
|Account ID|The ID of the account on which the process is running.|ACCOUNT\_ID|
|Atom ID|The ID of the Atom where the process is running.|ATOM\_ID|
|Atom name|The name that was assigned to the Atom when it was installed, or the local host name if no name was specified.<br />**Note:** If account properties are updated, for example when checking purge data, execution properties return the name of the attachment instead.|ATOM\_NAME|
|Document count|The number of documents at the start of the current step in the process.|DOCUMENT\_COUNT|
|Execution ID|The ID of this execution of the process. This is the execution ID of the currently executing process, which could be a subprocess.|EXECUTION\_ID|
|Node ID|For Molecules and Atom Clouds, the ID of the node where the process is running.|NODE\_ID|
|Process ID|The ID of the process. This is the process ID of the currently executing process, which could be a subprocess.|PROCESS\_ID|
|Process name|The name of the process at the time it was deployed. This is the name of the currently executing process, which could be a subprocess.<br />**Note:** If the process name was changed after it was deployed, the process should be redeployed.|PROCESS\_NAME|

Execution properties can be retrieved from the parameter value list for the following steps:

-   Decision step

-   Exception step

-   Message step

-   Notify step

-   Process Route step

-   Program Command step

-   Set Properties step


You can also retrieve execution properties within custom scripting by using the `getRuntimeExecutionProperty()` method available within the ExecutionUtil class — for example, `getRuntimeExecutionProperty("EXECUTION_ID")`.