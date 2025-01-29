# Shutting down an Atom or Molecule node gracefully

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-ba90e9bb-23d3-4dfd-a2ee-d6b738bee5e1"/>
</head>


Use Java VisualVM, or a similar Java monitoring tool, to invoke JMX operations remotely to ensure a clean shutdown.

## Before you begin
If you have not yet configured Java VisualVM, see the topic about configuring Java VisualVM for JMX management.

## About this task

To shut down an Atom or Molecule node completely to perform maintenance on the machine, use the **decommissionShutdown** operation, which pauses the node before stopping it. Pausing the node allows time for listeners to stop, for Atom workers to complete their tasks, and for processes to complete. You can shut down any node in a cluster, including the head node, without affecting the rest of the Molecule. If you shut down a head node, the node relinquishes its headship to another node in the cluster.

To shut down an Atom Cloud, repeat these steps for each Molecule node. Be sure the head node is the *last* node you shut down.

## Procedure

1.  Start Java Visual VM.

2.  In the Application list, double-click the entry for the Atom or Molecule node that you want to shut down.

    A new tab named for the Atom or Molecule node opens in the right pane.

3.  On the new tab, click the **MBeans** tab.

4.  In the tree on the MBeans tab, expand **com.boomi.container.services** and click the **ContainerController** MBean.

    :::note

    You can check the node’s current status by reviewing the **Status** field on the Attributes tab. During normal operation the node is typically in the RUNNING status.

    :::

5.  Click the **Operations** tab, and then click **decommissionShutdown**.

    The decommissioner moves through the following stages, writing log messages as it progresses.

    **PAUSING\_ATOM**
    :   The decommissioner performs a Pause for Stop operation and disables the Force Restart After X Minutes property \(`com.boomi.container.forceRestart`\).

     Disabling the force restart property enables outstanding process executions to complete. Depending on the expected run time of your processes, this stage could take a long time. See the next step in this task for an optional method of skipping to the next stage.

    The following occurs during this stage:

     -   The node’s status changes from RUNNING to PAUSING\_FOR\_STOP.

            If you look at the Atom or Molecule’s status on the Atom Management page, you see ![Gray Spinner](../Images/main-ic-dot-spinner-gray_f8c746f5-a14b-4cb8-951a-ce8fb228b2c0.jpg) next to its name. On the Cluster Status tab, you can see the status of the individual nodes.

     -   All listeners stop.

     -   The node notifies its local Atom workers to stop. If the Minimum Atom Workers property is set, the required number of Atom workers starts on another node.

    -   The node continues to send outgoing messages.

    -   After all processes complete, the node’s status changes from PAUSING\_FOR\_STOP to PAUSED\_FOR\_STOP.

    **STOPPING\_WORK\_HANDLERS**  
    The decommissioner pauses before stopping all work handlers \(such as ExecutionManager\). At this point, all processes should have completed and all Atom workers should have stopped.

    **FLUSHING\_REPORTS**  
    The decommissioner flushes the reporting services.

    **DRAINING\_QUEUES**  
    The decommissioner waits for relevant message queues to drain.

    **STOPPING\_ATOM**  
    The decommissioner completes the normal shutdown process.

6.  To move decommissioner to the next stage, even if the current stage is not complete, click **skipCurrentDecommissionStage** on the Operations tab.

    As an example, you might use this operation if process executions are taking too long to complete during the PAUSING\_ATOM stage.

    When you use the skipCurrentDecommissionStage operation, a warning message that describes the stage being skipped is written to the log.

## Next steps

:::note

To track the progress of the decommissioner, you can use Java VisualVM or another Java monitoring tool to monitor the DecommissionStage attribute.

:::