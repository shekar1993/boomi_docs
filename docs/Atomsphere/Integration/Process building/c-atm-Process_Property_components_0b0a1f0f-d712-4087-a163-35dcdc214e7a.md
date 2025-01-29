# Process Property components

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-8B625EA8-96D6-4F42-BA6A-5E86D085EC9C"/>
</head>

Process properties are name/value pairs that can be used to store arbitrary information to assist with an integration project. You can set a property value in the beginning of the process and then retrieve it later in a different part of the process. Process properties are a simple but powerful feature that can be used to facilitate a number of common integration scenarios, as described in the Process Properties Examples topic.

There are two types of process properties: Process Property components and dynamic process properties. Both types of process properties are used for the same purpose, but they are created differently.

- Process Property components are more powerful and are easier to work with. They are reusable components that can consist of a collection of properties.

- A dynamic process property is a single “on-the-fly” property that you create.

Process properties have execution scope, meaning that once a property is accessed or set it remains in effect for the duration of the current process execution. This also means the properties are available across other processes initiated via the Process Call or Process Route step, as is common in parent/child process designs. For example, a process property value that is accessed or set in a parent process can be retrieved later in a child process. The opposite is also true: a process property value set or modified in a child process can be retrieved later in the parent process after the child execution completes. Here are some caveats:

- Two independent processes running at the same time do not share the same process properties in memory. For example, if you have two separate processes scheduled to run at the same time, process property values set in one process are not available in the other process.

- If your process uses the Flow Control step to introduce parallel processing, process property values set in one thread/process are not available in the other concurrent threads/processes.

- If your process uses a Process Route step, the execution scope of process properties is maintained even though the parent process and child processes are deployed independently. Once a process property value is accessed or set, all default or extended values for that property in any process or subprocess are ignored. The only way to change that process property is to reset it explicitly, as described below.

Process properties can be retrieved from:

- the parameter value list for most process steps

- the Get Process Property map function

- a custom scripting step or custom scripting map function.

Process properties can be set in:

- the Set Properties step

- the Set Process Property map function

- a custom scripting step or custom scripting map function.

You can also choose to persist a property value — that is, make the value available in subsequent process executions. However, using persisted process properties in processes that allow simultaneous executions is not recommended.

Process properties can be defined as process extensions. This allows you to essentially parameterize different points in the process during configuration and defer specifying a value to deploy time. This is most often used in the context of environments to configure environment-specific settings or preferences (such as test versus production flags or other hard-coded values).
