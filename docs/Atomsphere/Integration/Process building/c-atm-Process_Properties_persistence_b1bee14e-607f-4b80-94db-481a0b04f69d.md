# Process Properties persistence

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-b1bee14e-607f-4b80-94db-481a0b04f69d"/>
</head>

By default, process property values exist in memory during the process execution but are no longer available after the execution completes. However, it is possible to persist, or remember, a property's value across subsequent executions.

- If you are using a Process Property component, use one that has the **Persist** check box turned on.

- If you are using a dynamic process property, persist the property value in a Set Properties step by selecting the **Persist This Property** check box.

  :::important

  For a dynamic process property, selecting this checkbox persists the property only until something in the process changes it, such as a Process Property step.

  :::

Persisting a property value stores the value in the Atom and loads it into memory automatically the next time the process is executed.

Persisted properties are often used to maintain continuous counters or incremental values such as record dates that can be used in the selection criteria of future executions.

When designing a process, the point in the workflow at which you choose to persist a property is important and depends on the specific integration scenario. In some situations it is appropriate to persist the value immediately after performing one-time-only and/or irreversible steps that should not be repeated even if the process fails later in the workflow. In other situations it is desirable to persist the value at the very end of the process to make sure the entire workflow completed successfully. This is common in incremental sync scenarios.

:::note

Implement duplicate checking as part of your process workflow to gracefully handle records that are reprocessed due to errors.

:::

## Working with persisted process properties

A few important notes when working with persisted process properties:

:::caution

In processes that allow simultaneous executions, the persisted process property that is set last takes precedence. However, using persisted process properties in processes that allow simultaneous executions is not recommended.

:::

- The value is persisted immediately upon the document reaching the Set Properties step. It does not wait until the process completes or completes successfully.

- Changes to the property's value in the process after the Set Properties step do *not* update the persisted value.

- Persisted properties are loaded into memory automatically during process execution initialization.

- In low latency processes, persisted process properties are saved to disk each time they are stored. This has a significant impact on performance.

- In processes that use the Flow Control step with the parallel processing option, if the persisted process property is being set in the flow controlled portion, the property that is set last takes precedence.

- Persisted values are captured *per process*. For example, you could set and persist a property with the same name in two different processes without conflict. However, it is recommended to use a globally unique naming convention to facilitate troubleshooting and maintenance.

- Persisted values are captured per Atom, Cloud, or Molecule. If the same process is executed on different Atoms, each will have its own value for the same persisted property. This is especially important to note when using environments.

- If a persisted value is extended but it *was not* previously set in the currently deployed process on the Atom, the extended value will be used as the value and stored. However, if the persisted value is extended but it *was* previously set in the currently deployed process on the Atom, then the value that was previously set is used instead.

- You can modify dynamic persisted process property values through the Edit Process Properties dialog.

:::note

When first developing with persisted process properties it helps to work on a local Atom so you can view the actual persisted values. You can find the persisted values in the appropriate `..\<atom_installation_directory>\execution\<process_ID>.properties` file. The process ID is the component ID available in the Revision History link in the process editor.

:::

## Using persistence with parent/child processes

When working with persistence and parent/child processes, both process properties and dynamic process properties are persisted only for the main process in which the Set Properties step (with the Persist this property check box turned on) is used. During the next execution, the persisted property is available only in that specific process by default. To make the property globally accessible across parent and child processes, you need to explicitly set the value again by using a Set Properties step. Simply set the process or dynamic process property value to itself without persistence.
