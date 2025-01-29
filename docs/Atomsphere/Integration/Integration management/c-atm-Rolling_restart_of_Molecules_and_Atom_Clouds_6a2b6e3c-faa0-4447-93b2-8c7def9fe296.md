# Rolling restart of Molecules and Atom Clouds 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-6a2b6e3c-faa0-4447-93b2-8c7def9fe296"/>
</head>


You can modify the rolling restart behavior on Molecules or Atom Clouds.

If you restart all the nodes in a Molecule or Atom Cloud at the same time, the Molecule or Atom Cloud becomes temporarily unavailable. By default, attempts to restart the nodes in a Molecule or Atom Cloud on a rolling basis. During a rolling restart, the following occurs:

-   The nodes within a Molecule or Atom Cloud take turns restarting. While restarting, a node is unresponsive to requests.

-   Each node waits for any running processes to complete before restarting.


A rolling restart of Molecules and Atom Clouds is performed in the following situations:

-   When a new release of is available \(after June 2016\).

-   When release updates to certain connectors force an Atom restart.

-   When you set or change a property on the Properties panel, click **Save**, and choose the restart now option.

-   When you click **Restart Atom** on the Atom Information panel of Atom Management \(**Manage** \> **Atom Management**\).

-   When you use a Java monitoring tool such as Java VisualVM to manually restart a Molecule or Atom Cloud and you select the **rollingRestartCluster** operation.


You can modify the rolling restart behavior by changing the following properties on the **Advanced tab** of the **Properties panel**:

-   Cluster Rolling Restart Percentage \(`com.boomi.container.cluster.rollingRestart.clusterRestartPercentage`\) controls what percentage of the nodes are restarted simultaneously. The default is 50%.

-   Rolling Restart Force Timeout \(`com.boomi.container.cluster.rollingRestart.forceRestartTimeout`\) controls how long a node will wait for restart to complete. After this time, the node begins restarting regardless of the status of any other nodes. The default is 30 minutes.
-   Rolling Restart Next in Line Timeout \(`com.boomi.container.cluster.rollingRestart.nextInLineRestartTimeout`\) controls how long a node will wait for the "next in line" node to complete the restart process and return to RUNNING status. The default is 5 minutes.

:::note

For some types of release updates, the update process is not compatible with earlier releases of . For those updates, all nodes must be restarted simultaneously; a rolling restart of Molecules and Atom Clouds cannot be performed. Release updates that are not backwards-compatible are infrequent, and provides advance notice of such releases.

:::