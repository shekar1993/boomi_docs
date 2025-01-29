# Cluster monitoring for Molecules and Atom Clouds 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-51e904f6-010e-4388-ad84-eaac6a6322f6"/>
</head>


Clustered Atoms \(Molecules and Atom Clouds\) are monitored to ensure that their nodes are not having any clustering issues.

Node status and problems are shown in the Cluster Status panel on the Atom Management page \(**Manage** \> **Atom Management**\).

One common clustering problem is that nodes start up but fail to find each other, and then each node becomes the “head” node of its own cluster. This problem usually occurs because of network configuration issues. can detect these kinds of clustering problems and give you the information so that you can resolve the issues.

Molecules and Atom Clouds have a shared directory named `<installation_directory>/bin/views`. This directory contains one file from each of the Molecule’s or Atom Cloud’s nodes. Each file is named after its node, using the format `node.localhostid.dat`. Each file is a properties file that contains the current state of the cluster from the perspective of the relevant node. Because this file is maintained on the shared file system, each node in the cluster is able to see the current state of every other node in the cluster. This gives each node in the cluster and the person administering the Molecule or Atom Cloud the ability to detect a wide range of clustering problems.

Each node’s file is updated at various intervals:

-   For the first five minutes after a node starts, the file is updated every minute.

-   After the first five minutes, if no clustering changes occur, the file is updated every five minutes.

-   When a node detects a clustering change \(for example, the cluster membership changes\), the file is updated 30 seconds later.

-   When a node detects a clustering problem, the file is updated every minute until the problem is resolved.


When a node shuts down successfully, its file is deleted from the directory.

If the cluster monitor for a node detects a problem that is severe enough to warrant shutting down or restarting the node, it will do so only after a preset interval. It does not shut down or restart the node immediately, otherwise transient errors would cause the entire cluster to shut down or restart. The default interval is 10 minutes.

The following Advanced Cloud properties \(Properties panel, Advanced tab\) control cluster monitoring for Molecules and Atom Clouds.

| Property | Valid Values | Description  |
|---|---|---|
| Cluster Problem Automatic Shutdown Delay<br />`com.boomi.container.cloudlet.problemShutdownTime` | Milliseconds, positive integer | Controls the default interval before a node is shut down or restarted. The property’s value is specified in milliseconds. If this property is set to a number less than or equal to zero, the node will never shut down or restart on its own. It will just continue to report the problem in the logs. |
| Cluster Problem Automatic Delete Delay<br />`com.boomi.container.cloudlet.elasticity.cluster.problem.nodeCleanupTimeout` | Milliseconds, positive integer | Determines the amount of time that the cluster should wait to delete a node after encountering the NODE_DOWN cluster issue. <br /><br />The property value is specified in milliseconds and is set to zero by default. A value of zero indicates that the node is not deleted upon encountering the NODE_DOWN issue.<br /><br /> For more information about Cluster errors, see the [Cluster problems](r-atm-Cluster_problems_be36ce68-db80-406b-b46a-db5c53072c55.md) topic. |
| Decommission Time for Post Pause Sleep<br />`com.boomi.container.decommission.time.post.pause.sleep` | Minutes, positive integer | (Applicable to Atom Clouds only) Specifies the amount of time to wait for Atom Workers to stop before the node is decommissioned. This property does not apply to Molecules.<br /><br />  This property is ignored when the Orchestrated Container property is enabled, described later in this topic.<br /><br /> If this property is not set manually on the Properties panel, Advanced tab, the property automatically assumes a default of two minutes. |
| Orchestrated Container<br />`com.boomi.container.is.orchestrated.container` | Check box | (Applicable only for Atom Clouds that use orchestrated containers like Docker or Kubernetes) When enabled, the node does not wait for Atom workers to stop before it is decommissioned. This property does not apply to Molecules.<br /><br /> The Orchestration Container property is turned off by default. Enabling this property overrides the value set in the **Decommission Time for Post Pause Sleep** property described earlier in this topic. |
| Timeout for Escalating Cluster Issue<br />`com.boomi.container.cloudlet.problemEscalationTimeout` | Milliseconds, positive integer | When a cluster's head node encounters a HEAD_SUSPECT warning and the error persists without resolution, the value defined in the **Timeout for Escalating Cluster Issue** property determines the amount of time to wait before the error is automatically escalated to a severe warning (HEAD_SUSPECT_ESCALATED). <br /><br /> The Timeout for Escalating Cluster Issue property is set to zero by default, which means that the node problem is not escalated and continues to report the problem in the logs. <br /><br /> For more information about Cluster errors, see the [Cluster problems](r-atm-Cluster_problems_be36ce68-db80-406b-b46a-db5c53072c55.md) topic. |