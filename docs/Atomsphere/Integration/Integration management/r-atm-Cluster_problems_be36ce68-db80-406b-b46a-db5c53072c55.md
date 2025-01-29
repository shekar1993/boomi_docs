# Cluster problems 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-be36ce68-db80-406b-b46a-db5c53072c55"/>
</head>


Monitor the status of your Molecule and Atom Cloud nodes using the **Cluster Status** panel on the Atom Management page \(**Manage** \> **Atom Management**\).

In that panel select the **Cluster Issues** tab to view cluster problem reports. If that tab is not present, there are not currently any reported cluster problems.

The following table shows information about all of the different types of reportable cluster problems.

**Note:** Cluster problem reports, including a node’s “problem” property values, are written to the node's node.localhostid.dat file \(also known as the “view snapshot” file\). The values of “problem” properties also appear in the container log file.

| Problem property value | Importance  | Description  | Resolution/Troubleshooting |
|---|---|---|---|
| CLUSTER_STATE_MISMATCH | Warning | Different nodes in the cluster have differing cluster state information.  | Restart the problem node if issue persists. |
| CONTAINER_VERSION_MISMATCH | Warning | There are differing container versions (build numbers) across the various view snapshots. | Restart all nodes if issue persists.  |
| DIFFERENT_NODES  | Warning | Two views which otherwise seem to agree (view ID and head node) do not have all the same nodes.  | Check for cluster communication problems if issue persists.  |
| HEAD_AWOL  | Severe error  | The head node, according to the live view, does not have a corresponding view snapshot.  | Check for network issues and communication problems.  |
| HEAD_SUSPECT  | Warning | Like HEAD_AWOL, but some nodes are still starting up so this could be a timing issue.  | Wait for nodes to finish starting up.  |
| HEAD_SUSPECT_ESCALATED  | Severe error  | The HEAD_SUSPECT warning is escalated to a severe warning.  | If issue persists, node is forcefully deleted. |
| LOCALHOSTID_CONFLICT | Severe error  | Multiple nodes are writing to the same view snapshot file, indicating a conflict in localHostId. | Ensure nodes have unique localHostIds. |
| MINIMUM_CLUSTER_SIZE  | Severe error  | A node is waiting to restart but the cluster has reached its minimum allowable size. | Wait for the number of active nodes in the cluster to increase. |
| MULTIPLE_HEAD_NODES | Severe error  | There is more than one head node in the various view snapshot files. | Check for network and configuration issues.  |
| NODE_AWOL | Severe error  | One or more nodes in the live view do not have a corresponding view snapshot.  | Similar to the HEAD_AWOL problem, except that the missing nodes are not the head node. |
| NODE_DOWN | Warning | A node is either not running and did not remove its view file, or is hanging and no longer updating its view file.  | Remove offending file or restart node.  |
| NODE_SUSPECT  Warning  | Like NODE_AWOL, but some nodes are still starting up so this could be a timing issue. | Wait for nodes to finish starting up. |
| ORPHANED_NODE | Severe error  | The head node's view snapshot does not include this node.  | Check for network and communication issues. |
| READ_FAILURE  | Warning       | Could not read a view snapshot file.  | Check file system and container logs. |
| ROLLING_RESTART_* | Warning | Includes `ROLLING_RESTART_MULTIPLE_HEAD_NODES`, `ROLLING_RESTART_VIEW_ID_MISMATCH`, `ROLLING_RESTART_VIEW_FILE_MISMATCH`, `ROLLING_RESTART_JAVA_HOME_MISMATCH`,`ROLLING_RESTART_ORPHANED_NODE`, `ROLLING_RESTART_HEAD_AWOL`, and `ROLLING_RESTART_NODE_AWOL`. These issues are generally considered severe but are downgraded to warnings during a rolling restart.  | These issues can generally be ignored while a rolling restart is in progress as they are often transient. If they persist after the restart is complete, then they should be investigated as they would be if they appeared outside of a rolling restart. |
| UNEXPECTED_HEAD_NODE_CHANGE  | Severe error  | One of the nodes changed its head node to a different one without receiving a head node change notification.  | Check for network latency or partition issues. |
| VIEW_ID_CONFLICT  | Severe error  | Two different nodes have the same view ID.  | Check network settings and view files.   |
| VIEW_ID_MISMATCH   | Warning       | The head node has a view ID that does not match other nodes' view IDs.  | Check for network issues and consider restarting nodes.   |
| WRITE_FAILURE    | Severe error  | Could not write to a view snapshot file.  | Check file system and container logs.  |