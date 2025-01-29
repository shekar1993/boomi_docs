# Restarting a Molecule or Atom Cloud 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-949811aa-d362-49b0-975c-8290fffb22b9"/>
</head>


Use Java VisualVM, or a similar Java monitoring tool, to perform a rolling restart.

## Before you begin

If you have not configured Java VisualVM, see the topic about configuring Java VisualVM for JMX Management.

## About this task

When you apply maintenance to a Molecule or Atom Cloud, you can use a Java monitoring tool for JMX management, such as Java VisualVM which is included with the Java JDK, to perform a rolling restart of all nodes in the Molecule or Atom Cloud. With a rolling restart, running processes finish before the node they are running on is restarted.



## Procedure

1.  Start Java Visual VM.

2.  In the Application list, double-click the entry for the Molecule or Atom Cloud that you want to restart.

    A new tab named for the Molecule or Atom Cloud opens in the right pane.

3.  On the new tab, click the **MBeans** tab.

4.  In the tree on the MBeans tab, expand **com.boomi.container.services** and click the **ContainerController** MBean.

5.  Click the **Operations** tab, and then click **rollingRestartCluster**.

    The following occurs:

    -   Each node waits for currently running processes to complete before restarting.

    -   The Cluster Rolling Restart Percentage property \(`com.boomi.container.cluster.rollingRestart.clusterRestartPercentage`\) controls what percentage of the nodes are restarted simultaneously. The default is 20%.

    -   The Rolling Restart Force Timeout property \(`com.boomi.container.cluster.rollingRestart.forceRestartTimeout`\) controls how long a node waits for restart to complete. After this amount of time, the node begins restarting regardless of the status of any other nodes. The default is 30 minutes.

    -   The Rolling Restart Next in Line Timeout property \(`com.boomi.container.cluster.rollingRestart.nextInLineRestartTimeout`\) controls how long a node waits for the "next in line" node to complete the restart process and return to RUNNING status. The default is 5 minutes.

    You can use the Atom Management page \(**Manage** \> **Atom Management**\) to monitor the status of the Molecule or Atom Cloud.