# Process extension values

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-dbeaad2d-8d6a-462b-9e84-71d50a0533bb"/>
</head>


After defining a process with extensions and deploying it, set values for those extensions for the process to use when it executes.

Here are some important points about extensions to remember:

-   You must deploy the process for the extensions to be available. Only extensions defined in the current process deployment version are available to be set.

-   If your process uses a *Process Call* step:

-   Extensions that you define in the parent process are applied to both the parent process and any subprocesses.

-   Extensions that you define in a subprocess are not applied during execution of the parent process.

For example, if you use the same Connector component in the parent process and one of the subprocesses, you need to define the extension only once, in the parent process.

-   If your process uses a Process Route step:

-   Extensions that you define in the parent process are applied only to the parent process.

-   Extensions that you define in a subprocess are applied only to that subprocess.

For example, if you use the same Connector component in the parent process and one of the subprocesses, you need to define the extension in both the parent process and the subprocess.

:::note

Process properties are an exception to this behavior because they have execution scope, meaning that once a property is accessed or set it remains in effect for the duration of the current process execution. With a Process Route step, once a process property value is accessed or set, all default or extended values for that property in any process or subprocess are ignored. The only way to change that process property is with:

-   the Set Properties step

-   the Set Process Property map function

-   a custom scripting step or custom scripting map function

:::


Extensions are set at the environment level. Environment-level extensions allow you to manage extension values for all processes deployed to a given environment. This enables you to configure things like connection settings globally instead of having to configure the same connection extensions values for each deployed process. The available environment-level extensions are an aggregated list of the unique extensions defined within all processes deployed to that environment.

When using extensions with environments, note the following:

-   If you deploy a new process to an environment, you do not need to configure values for any extensions that have already been defined; the process will automatically use the previously defined values for the environment.

-   If you deploy a process version that contains a new extension definition, you will need to configure a value for that extension.

-   If you attach a new Atom to the environment, you must re-enter and save all Password type connection extensions. This is because the does not store your sensitive password information for security purposes.

-   All processes for a given environment must be deployed *before* configuring extension values.


You set extension values on the Extensions dialog. This dialog, which is accessible from **Manage** \> **Atom Management** at the environment level, has two modes. The active mode is set by selecting **Process Type** at the top of the dialog:

-   Processes and Standard Integration Packs — In this mode you can set extension values for all standard processes and processes in single-install integration packs deployed to the Atom or environment. Setting **Process Filter** to a particular process limits the extensions available for setting in the dialog to the extensions defined for that process.

-   Multi Installation Integration Packs — In this mode you can set extension values for a single process in a particular instance of a multi-install integration pack deployed to the Atom or environment.


When you save changes to extension values, the following things occur:

-   The changes are logged in the environment’s audit log.

Audit log entries are retained indefinitely. The audit log can be viewed only by administrators and users having the View Audit Logs privilege.

-   The Atom Information panel of **Manage** \> **Atom Management** is updated.

The **Extensions Last Updated** field shows the date and time at which the extension values were updated. If all of the Atoms deployed to an Atom Cloud have not yet been updated due to a communications delay, a warning message is displayed.