# Properties panel, Advanced tab

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-c39737e8-1b16-4fdd-b414-152694364c14"/>
</head>

The Properties panel Advanced tab can be used to set additional properties that modify the configuration of an Atom, Molecule, or private Atom Cloud.

### <a name="Account Working Data Directories">Account Working Data Directories</a>

- **Default Value**: See details in linked topic
- **Format**: See details in linked topic
- `com.boomi.container.accountsDirs`

See the topic about [working data storage](c-atm-Molecule_and_Atom_Cloud_working_data_storage_b18ef1af-1e37-4a33-8712-d600f4e7b29d.md).

### <a name="Allow Browsing">Allow Browsing</a>

- **Default Value**: Off for Atom Clouds. On for Atoms and Molecules
- **Format**: Check box
- `com.boomi.container.disableConnectorBrowsing`

If selected, connector operations can use this Atom, Molecule or Atom Cloud to browse and import objects.

When used with a private Atom Cloud, this property works in conjunction with the **Allow Browsing** property that is set on the Cloud Properties tab:

- If SELECTED on the Cloud Properties tab and SELECTED in the Cloud Properties dialog — Browsing is enabled for everyone.
- If SELECTED on the Cloud Properties tab and CLEARED in the Cloud Properties dialog — Browsing is enabled for the Atom Cloud owner but is disabled for Cloud tenants. Tenants see the Atom Cloud in the list but when they attempt to browse they receive an error.
- If CLEARED on the Cloud Properties tab and CLEARED in the Cloud Properties dialog — Browsing is disabled.
- If CLEARED on the Cloud Properties tab and SELECTED in the Cloud Properties dialog — Browsing is disabled.

### <a name="Allow User Logs">Allow User Logs</a>

- **Default Value**: Off for Atom Clouds. On for Atoms and Molecules.
- **Format**: Check box
- `com.boomi.container.disableUserLogs`

Used to enable or disable the user log feature in a process. When you select this check box, user logs are enabled.

### <a name="Approve Listener Bypass">Approve Listener Bypass</a>

- **Default Value**: Not set
- **Format**: Comma-separated list of connector types
- `com.boomi.container.listen.worker.connectors`

Some listeners run on the main JVM on the Atom cloud so they cannot utilize concurrent executions when running in low latency mode. To bypass listeners running in clouds and in the Atom worker, add the custom container property `com.boomi.container.listen.worker.connectors` and set the property value to a comma-separated list of connector types. The only connector types allowed are `sfpe` and `azuresb`.

:::info Important

This property should only be applied to private clouds.

:::

### <a name="Archive Processed Documents">Archive Processed Documents</a>

- **Default Value**: Off
- **Format**: Check box
- `com.boomi.container.account.archive.data`

If selected, [processed document archiving](c-atm-Processed_document_archiving_1e1fedc4-b844-4dde-988a-875b4980cce9.md) is enabled for the private Atom Cloud or local Atom.

### <a name="Async Message Poller Timeout for Molecule Scale Down">Async Message Poller Timeout for Molecule Scale Down</a>

- **Default Value**: 0
- **Format**: Hours, minutes, seconds, milliseconds
- `com.boomi.container.elasticity.asyncPollerTimeout`

The amount of time to wait before assuming that a step within a node's shutdown process has failed when it takes too long to complete or encounters a timeout issue. In the event that a step has failed, the shutdown is aborted and the offending node is rolled back to a functional state. If the user does not manually set this property value, the container assumes a default value of 600,000 milliseconds (10 minutes).

:::info Important

The Async Message Poller Timeout for Molecule Scale Down property value needs to be larger than the value set in the [Force Restart Override for Molecule Scale Down](#force-restart-override-for-molecule-scale-down) property.

:::

### <a name="Atom Data Directory Level">Atom Data Directory Level</a>

- **Default Value**: 0
- **Format**: 0, 1, 2, 3 or 4
- `com.boomi.container.dataDirNestLevel`

See the topic about the Atom’s [data directory structure](c-atm-Atom_data_directory_structure_69a64ba7-502e-4c5f-b662-7bdfc36471f9.md).

### <a name="Atom Pending Shutdown Delay">Atom Pending Shutdown Delay</a>

- **Default Value**: 0
- **Format**: Hours, minutes, seconds, milliseconds
- `com.boomi.container.pendingShutdownWarnTime`

The amount of time the Atom should pause before shutting down to accommodate load balancers. See the topic about [Atom status monitoring](c-atm-Atom_web_server_monitoring_cadc5aeb-b6c8-450a-96cc-afb7cb3971e9.md).

### <a name="Atom Worker Idle Timeout">Atom Worker Idle Timeout</a>

- **Default Value**: 86,400,000 (= 24 hours)
- **Format**: Milliseconds
- `com.boomi.container.worker.idleTimeout`

The amount of time before an idle Atom worker will automatically shut down.

### <a name="Atom Worker Local Port Range">Atom Worker Local Port Range</a>

- **Default Value**: 20000 - 30000
- **Format**: Range of port numbers
- `com.boomi.container.worker.portRange`

The range of local ports on which Atom workers can listen for connections from Atom Cloud nodes.

### <a name="Atom Worker Pending Updates Queue Size">Atom Worker Pending Updates Queue Size</a>

- **Default Value**: Not set
- **Format**: Positive Integer
- `com.boomi.container.worker.maxPendingUpdates`

The number of elements that are passed through the Atom Worker's pending updates queue at one time. Increase this number if you experience slowness when updating extensions. Conversely, setting too large of a number may cause memory issues. If the user does not manually set this property value, the Atom assumes a default value of 100.

:::note

This property is relevant only to Clouds that have allocated workers.

:::

### <a name="Atom Worker Startup Timeout">Atom Worker Startup Timeout</a>

- **Default Value**: 120000 (=2 minutes)
- **Format**: Milliseconds
- `com.boomi.container.worker.startupTimeout`

The amount of time that the system will wait for an Atom worker to start successfully.

### <a name="Atom Worker Thread Pool Idle Timeout">Atom Worker Thread Pool Idle Timeout</a>

- **Default Value**: 150,000 (= 5 minutes)
- **Format**: Milliseconds
- `com.boomi.container.worker.threadPool.idleTimeout`

The amount of time before an idle execution thread in an Atom worker will be stopped.

### <a name="Atom Worker Time To Live">Atom Worker Time To Live</a>

- **Default Value**: 86,400,000 (= 24 hours)
- **Format**: Milliseconds
- `com.boomi.container.worker.ttl`

The amount of time after which an Atom worker will automatically shut down.

:::note

If the load on active Atom workers drops, the Atom Cloud reduces the number of Atom workers to the Minimum Atom Workers value. In that case, it is possible for an Atom worker to shut down before its Atom Worker Time to Live value is reached.

:::

### <a name="Atom Worker Heartbeat Timeout">Atom Worker Heartbeat Timeout</a>

- **Default Value**: 300,000 ms (= 5 mins)
- **Format**: Milliseconds
- `com.boomi.container.worker.heartbeatTimeout`

The amount of time in milliseconds before an unresponsive Atom worker is marked as inactive. The default value is 300,000 ms. Requires an atom restart to enable. 

### <a name="Atom Workers Enabled">Atom Workers Enabled</a>

- **Default Value**: Off
- **Format**: Check box
- `com.boomi.container.worker.enabled`

See the topic about enabling [Atom workers](t-atm-Enabling_Atom_workers_on_a_private_Atom_Cloud_eabeca23-ff79-490d-aa42-36664d43a20e.md).

### <a name="Auto Restart on Out Of Memory">Auto Restart on Out Of Memory</a>

- **Default Value**: TRUE
- **Format**: TRUE or FALSE
- `com.boomi.container.resource.restartOnOutOfMemoryError`

Specifies whether the Atom should attempt to restart when it encounters an Out Of Memory error.

### <a name="Auto Restart on Too Many Files Error">Auto Restart on Too Many Files Error</a>

- **Default Value**: TRUE
- **Format**: TRUE or FALSE
- `com.boomi.container.restartOnTooManyOpenFilesError`

(Linux only) Specifies whether the Atom, Molecule, or Atom Cloud should attempt to restart when it encounters a Too Many Open Files error.

### <a name="Bouncy Castle Library Version">Bouncy Castle Library Version</a>

- **Default Value**: 1.45
- **Format**: 1.45 or LATEST
- `com.boomi.container.bouncyCastleVersion`

Specifies which version of the Bouncy Castle library the Atom, Molecule, or Atom Cloud uses.

:::info Important

To avoid process execution failures, Atoms, Molecules, and Atom Clouds executing processes using the AS2 Client connector, the AS2 Shared Server connector, or a RosettaNet trading partner, should be configured with **Bouncy Castle Library Version** set to 1.45.

:::

### <a name="Clean Up Custom Script Engine Data on Completion">Clean Up Custom Script Engine Data on Completion</a>

- **Default Value**: TRUE
- **Format**: TRUE or FALSE
- `com.boomi.container.resetScriptEngineData`

If set to true (the default), this property causes the immediate cleanup of leftover data after custom script execution.

### <a name="Client Default Connect Timeout">Client Default Connect Timeout</a>

- **Default Value**: 120000
- **Format**: Milliseconds
- `-Dsun.net.client.defaultConnectTimeout`

The amount of time that the Atom, Molecule, or Atom Cloud should spend trying to establish an HTTP client connection.Increase this value if the HTTP endpoints are known to take longer than two minutes to return a response.

### <a name="Client Default Read Timeout">Client Default Read Timeout</a>

- **Default Value**: 120000
- **Format**: Milliseconds
- `-Dsun.net.client.defaultReadTimeout`

The amount of time that the Atom, Molecule, or Atom Cloud should spend attempting to read data from an established HTTP client connection. Increase this value if the HTTP endpoints are known to take longer than two minutes to return a response.

### <a name="Cloud Partition Replicas">Cloud Partition Replicas</a>

- **Default Value**: 3
- **Format**: Positive integer
- `com.boomi.container.cluster.numberOfReplicas`

A tuning option for the Cloud Partition Size property. This option helps to randomize the node selection.

### <a name="Cloud Partition Size">Cloud Partition Size</a>

- **Default Value**: -1 (special value for using all nodes in a cluster)
- **Format**: Positive integer
- `com.boomi.container.cluster.partitionSize`

Determines how many nodes are used for executions for a given account.In order for the Account Concurrent Execution Limit to take effect, the Cloud Partition Size property must also be set and then the Atom Cloud must be restarted. The Account Concurrent Execution Limit is set in the Attachment Quotas tab.

### <a name="Cluster Bootstrap Timeout">Cluster Bootstrap Timeout</a>

- **Default Value**: 60,000 (= 60 seconds)
- **Format**: Milliseconds
- `com.boomi.container.cloudlet.initStateTimeout`

The amount of time that the clustering protocol should spend trying to find other nodes.

### <a name="Cluster Network Bind Address">Cluster Network Bind Address</a>

- **Default Value**: Blank (local machine address)
- **Format**: A different address
- `com.boomi.container.cloudlet.bindAddress`

If you have multiple network addresses, you can specify the address on which you want to listen.

### <a name="Cluster Network Transport Type">Cluster Network Transport Type</a>

- **Default Value**: MULTICAST
- **Format**: MULTICAST or UNICAST
- `com.boomi.container.cloudlet.clusterConfig`

Specifies the cluster's transmission protocol. Newly installed Docker Molecules and Docker Clouds are explicilty set to UNICAST in the Advanced Tab of the Properties Panel; clearing the UNICAST value defaults the Cluster Network Transport Type property automatically to MULTICAST unless specified otherwise. See the topic about setting up [unicast support](t-atm-Setting_up_unicast_support_4ddf6a4e-633e-4d46-acfd-83f39078ea83.md).

### <a name="Cluster Problem Automatic Delete Delay">Cluster Problem Automatic Delete Delay</a>

- **Default Value**: 0
- **Format**: Milliseconds
- `com.boomi.container.cloudlet.elasticity.cluster.problem.nodeCleanupTimeout`

See the topic about [cluster monitoring](c-atm-Cluster_monitoring_for_Molecules_and_Atom_Clouds_51e904f6-010e-4388-ad84-eaac6a6322f6.md). If a value is not manually specified in the property field, the property automatically assumes a default of 0 milliseconds.

### <a name="Cluster Problem Automatic Shutdown Delay">Cluster Problem Automatic Shutdown Delay</a>

- **Default Value**: 600000 (10 minutes)
- **Format**: Milliseconds
- `com.boomi.container.cloudlet.problemShutdownTime`

See the topic about [cluster monitoring](c-atm-Cluster_monitoring_for_Molecules_and_Atom_Clouds_51e904f6-010e-4388-ad84-eaac6a6322f6.md). If not set, the runtime assumes a default of 600,000 milliseconds (10 minutes).

### <a name="Cluster Rolling Restart Percentage">Cluster Rolling Restart Percentage</a>

- **Default Value**: 50
- **Format**: A percentage represented by a whole number from 0 to 100
- `com.boomi.container. cluster.rollingRestart.clusterRestartPercentage`

The percentage of nodes in a cluster that will restart simultaneously as part of a rolling restart. If you set this property to 0, the cluster restarts one node at a time. If you set it to 100, the entire cluster except for the head node begins to restart simultaneously. The head node waits for the other nodes to complete the restart process.

### <a name="Compress History after x Days">Compress History after x Days</a>

- **Default Value**: 2
- **Format**: Days represented by a whole number
- `com.boomi.container.compressDays`

The number of days after which logs, processed documents, and temporary data will be automatically compressed on disk.

:::note

The compress activity is disabled by setting a value greater than the runtime's purge. You can also increase the value of the Purge Manager Thread property, if resources are available, to avoid compression issues with your runtime.

:::

### <a name="Connector Browsing Idle Timeout">Connector Browsing Idle Timeout</a>

- **Default Value**: 900000 (15 minutes)
- **Format**: Milliseconds
- `com.boomi.container.browser.idleTimeout`

The amount of time before an idle Atom worker that is allocated to perform connector browsing will automatically shut down.

### <a name="Connector Browsing Maximum Browse Time">Connector Browsing Maximum Browse Time</a>

- **Default Value**: 15 minutes
- **Format**: Hours, minutes, seconds, milliseconds
- `com.boomi.container.browser.maxBrowseTime`

The maximum amount of time that you want to allow an Atom worker's browse operation to take.

### <a name="Connector Browsing Max Thread Count">Connector Browsing Max Thread Count</a>

- **Default Value**: 50
- **Format**: Positive integer
- `com.boomi.container.browser.maxBrowseCount`

The maximum number of threads that are allocated to an Atom worker for browsing.

### <a name=" Connector Browsing Time to Live">Connector Browsing Time to Live</a>

- **Default Value**: 3600000 (60 minutes)
- **Format**: Milliseconds
- `com.boomi.container.browser.ttl`

The amount of time before an Atom worker that is allocated to perform connector browsing will automatically shut down.

### <a name="Connector Server Startup Timeout">Connector Server Startup Timeout</a>

- **Default Value**: 15 minutes
- **Format**: Hours, minutes, seconds, milliseconds
- `com.boomi.container.connectorServer.startupTimeout`

The amount of time a listener is allowed for initialization. For listener processes, initializing the listener is part of the deployment process. While initialization is pending, the Atom is prevented from executing other actions. Failure to initialize a listener before timeout occurs results in a deployed but offline listener, just as it does in the case of any other exception — for example, a class not found error.

### <a name="Connector Trace Logging">Connector Trace Logging</a>

- **Default Value**: FALSE
- **Format**: TRUE or FALSE
- `com.boomi.container.connector.trace`

Used to [troubleshoot connectors](c-atm-Connector_troubleshooting_a9354e4d-0c45-4402-8de9-b582f66a6403.md).

### <a name="Control ID Cache Idle Timeout">Control ID Cache Idle Timeout</a>

- **Default Value**: 10
- **Format**: Seconds
- `com.boomi.container.controlid.idleTimeoutSec`

The amount of time the control ID cache can be idle before it times out. Setting this property can improve the performance of incoming EDI document handling in an Atom running in a multi-node Atom Cloud. The maximum is 300 seconds.

### <a name="Control ID Cache Time to Live">Control ID Cache Time to Live</a>

- **Default Value**: 60
- **Format**: Seconds
- `com.boomi.container.controlid.ttlTimeoutSec`

The amount of time to live of the control ID cache. Setting this property can improve the performance of incoming EDI document handling in an Atom running in a multi-node Atom Cloud. The maximum is 300 seconds.

### <a name="Customized Procrunner Script File Name">Customized Procrunner Script File Name</a>

- **Default Value**: Not set
- **Format**: See details in linked topic
- `com.boomi.container.script.type.procrunner`

See the topic about [customized script files](t-atm-Setting_a_container_property_for_customized_script_a9c85bd9-651c-440d-bb98-7b7913e01e1d.md).

### <a name="Customized Procbrowser Script File Name">Customized Procbrowser Script File Name</a>

- **Default Value**: Not set
- **Format**: See details in linked topic
- `com.boomi.container.script.type.procbrowser`

See the topic about [customized script files](t-atm-Setting_a_container_property_for_customized_script_a9c85bd9-651c-440d-bb98-7b7913e01e1d.md).

### <a name="Customized Procworker Script File Name">Customized Procworker Script File Name</a>

- **Default Value**: Not set
- **Format**: See details in linked topic
- `com.boomi.container.script.type.procworker`

See the topic about [customized script files](t-atm-Setting_a_container_property_for_customized_script_a9c85bd9-651c-440d-bb98-7b7913e01e1d.md).

### <a name="Customized Restart Script File Name">Customized Restart Script File Name</a>

- **Default Value**: Not set
- **Format**: See details in linked topic
- `com.boomi.container.script.type.restart`

See the topic about [customized script files](t-atm-Setting_a_container_property_for_customized_script_a9c85bd9-651c-440d-bb98-7b7913e01e1d.md).

### <a name="Debug Log Level Threshold">Debug Log Level Threshold</a>

- **Default Value**: DEBUG
- **Format**: DEBUG, INFO, OFF, SEVERE, WARNING
- `com.boomi.container.debugThreshold`

See the topic about [logging debug messages](t-atm-Changing_the_default_for_logging_debug_messages_c36c6d9a-2534-4725-88fe-ed60c7134f78.md).

### <a name="Decommission Time for Post Pause Sleep">Decommission Time for Post Pause Sleep</a>

- **Default Value**: Not set
- **Format**: Minutes
- `com.boomi.container.decommission.time.post.pause.sleep`

See the topic about [cluster monitoring](c-atm-Cluster_monitoring_for_Molecules_and_Atom_Clouds_51e904f6-010e-4388-ad84-eaac6a6322f6.md). If a value is not manually specified in the property field, the property automatically assumes a default of two minutes.

### <a name="Disk Space Monitoring">Disk Space Monitoring</a>

- **Default Value**: TRUE
- **Format**: TRUE or FALSE
- `com.boomi.container.config.runDiskspaceMonitor`

See the topic about [disk space monitoring](c-atm-Disk_space_monitoring_for_Atom_Clouds_392dc80f-fe1c-4097-b291-e1a6a5126674.md). The property is enabled by default. The monitoring system runs based on the value that is set in the Disk Space Monitoring Frequency property.

### <a name="Disk Space Monitoring Account Auto Suspension">Disk Space Monitoring Account Auto Suspension</a>

- **Default Value**: TRUE
- **Format**: TRUE or FALSE
- `com.boomi.container.config.diskspacemonitor.enableAccountAutoSuspension`

Determines whether an account is automatically suspended when it exceeds its disk space allotment. By default, this property is enabled.

### <a name="Disk Space Monitoring Frequency">Disk Space Monitoring Frequency</a>

- **Default Value**: 3600000 (60 minutes)
- **Format**: Milliseconds
- `com.boomi.container.config.diskspaceMonitorInterval`

See the topic about [disk space monitoring](c-atm-Disk_space_monitoring_for_Atom_Clouds_392dc80f-fe1c-4097-b291-e1a6a5126674.md).

### <a name="Disk Space Monitoring Threads">Disk Space Monitoring Threads</a>

- **Default Value**: Varies
- **Format**: Positive integer
- `com.boomi.container.config.diskspacemonitor.numThreads`

The number of threads to be used for monitoring disk space. If Disk Space Monitor is run from an Atom, Molecule, or Atom Cloud, the default is **1**. If the Disk Space Monitor is run from the Atom Maintenance Server, the default is **10**.

For more information, see the topic about [Disk space monitoring](c-atm-Disk_space_monitoring_for_Atom_Clouds_392dc80f-fe1c-4097-b291-e1a6a5126674.md). |

### <a name="Disk Space Monitoring Verbose Logging">Disk Space Monitoring Verbose Logging</a>

- **Default Value** Off
- **Format**: Check box
- `com.boomi.container.config.diskspacemonitor.verboseLogging`

See the topic about [disk space monitoring](c-atm-Disk_space_monitoring_for_Atom_Clouds_392dc80f-fe1c-4097-b291-e1a6a5126674.md).

### <a name="Disk Space Warning Limit">Disk Space Warning Limit</a>

- **Default Value**: Not set
- **Format**: A percentage represented by a whole number from 0 to 100
- `com.boomi.container.config.diskspaceMonitorWarnThreshold`

To help you monitor disk space usage, this property logs a warning message every time the threshold is met or exceeded. For more information, see the topic about [disk space monitoring](c-atm-Disk_space_monitoring_for_Atom_Clouds_392dc80f-fe1c-4097-b291-e1a6a5126674.md).

### <a name="DNS Time to Live">DNS Time to Live</a>

- **Default Value**: 30
- **Format**: Seconds
- `-Dsun.net.inetaddr.ttl`

The amount of time that successful DNS lookups should be cached. Decrease this value if you call external hosts that experience frequent IP address changes to their DNS hostname. Entering a value of `-1` seconds enables continuous caching, and entering a value of `0` seconds disables caching.

### <a name="Dump to File When Exceeding Open File Threshold">Dump to File When Exceeding Open File Threshold</a>

- **Default Value**: FALSE
- **Format**: TRUE or FALSE
- `com.boomi.container.resource.dumpToFileOnLowOpenFiles`

(Linux only) Specifies whether the Atom, Molecule, or Atom Cloud should generate a file dump when either of the following occurs:

- A Too Many Open Files error occurs.
- The Low Remaining Open Files Threshold value is exceeded.

### <a name="Early Stale Worker TTL Percentage">Early Stale Worker TTL Percentage</a>

- **Default Value**: Not set
- **Format**: Percentage
- `com.boomi.container.worker.ttl.fudge.factor.percentage`

The **Early Stale Worker TTL Percentage** property is a percentage of the time value set in the [**Atom Worker Time To Live**](#atom-worker-time-to-live) property. When Early Stale Worker TTL Percentage is set, an Atom Worker is eligible for early shut down and replacement when it reaches the specified time percentage. As a result, this property staggers Atom worker restarts to improve Atom Cloud performance.

For example, say that you have Atom Worker Time to Live property set to 24 hours, and the Early Stale Worker TTL Percentage property set to 50%. This means that the Atom Worker may shut down and get replaced after it passes the 12 hour mark, without needing to fulfill the entire 24 hour setting in the Atom Worker Time to Live property.

If not set explicitly in the user interface, this property assumes a default value of 50%.

### <a name="Enable Debug Logging">Enable Debug Logging</a>

- **Default Value**: Off
- **Format**: Check box
- `com.boomi.container.debug`

This property works in conjunction with the [Enable Trace Logging](#enable-trace-logging) property. See the topic about [enabling debug and trace logging in an Atom](t-atm-Enabling_logging_in_an_Atom_eb1edc08-109f-4608-bcb6-348dea654eb4.md). This property should be used only as directed by the Support team.

### <a name="Enable Jgroups Debug Logging">Enable Jgroups Debug Logging</a>

- **Default Value**: Off
- **Format**: Check box
- `com.boomi.container.jgroupsLogging`

If selected, detailed Jgroups communication information among the nodes in a Molecule or Atom Cloud is logged.

### <a name="Enable Persisted Connector Cache">Enable Persisted Connector Cache</a>

- **Default Value**: Off
- **Format**: Check box
- `com.boomi.container.connector.persistence.enabled`

If selected, the Connector Listen framework is allowed to use the Persisted Connector Cache to save and retrieve the `replayID` on send and receive actions. This allows connectors to persist the replayID and start over from the point before the stop when pausing or stopping the listener.

If the persisted `replayID` is invalid, the fail over is to the initial `replayID` mentioned in the connection.

### <a name="Enable SSL Debug Logging">Enable SSL Debug Logging</a>

- **Default Value**: Off
- **Format**: Check box
- `com.boomi.container.debug.ssl`

See the topic about [enabling verbose SSL logging in an Atom](t-atm-Enabling_verbose_SSL_logging_in_an_Atom_2afc5bce-a6fc-42a4-851a-6bcf229b941c.md). This property should be used only as directed by the Support team.

:::note

This container property has an equivalent system property called `-Djavax.net.debug` that can be set in `<installation_directory>/bin/atom.vmoptions`. As a rule, the container property takes precedence. If the system property exists in `/bin/atom.vmoptions`, the equivalent container property will be stored in `<installation_directory>/conf/container`.properties when you click **Save** on the **Properties** panel. The original system property will be removed from `/bin/atom.vmoptions`.

:::

### <a name="Enable Standard Output and Error Logging">Enable Standard Output and Error Logging</a>

- **Default Value**: FALSE
- **Format**: TRUE or FALSE
- `com.boomi.container.logging.std.enabled`

Enables the standard output (stdout) and standard error (stderr) logging functionality in addition to the container log. For Docker containers, this property is enabled by default. Set the [Standard Error Log Level](#standard-error-log-level) property to determine which logs are included in stderr.

### <a name="Enable Trace Logging">Enable Trace Logging</a>

- **Default Value**: Off
- **Format**: Check box
- `com.boomi.container.trace`

This property works in conjunction with the [Enable Debug Logging](#enable-debug-logging) property. See the topic about [enabling debug and trace logging in an Atom](t-atm-Enabling_logging_in_an_Atom_eb1edc08-109f-4608-bcb6-348dea654eb4.md). This property should be used only as directed by the Support team.

### <a name="Enable XML External Entity Processing">Enable XML External Entity Processing</a>

- **Default Value**: FALSE
- **Format**: TRUE or FALSE
- `com.boomi.container.xml.enableExternalEntities`

Specifies whether external XML entity references will be processed when parsing XML documents. This can be a security vulnerability and therefore it is disabled (set to FALSE) by default.

### <a name="Encrypted Proxy Password">Encrypted Proxy Password</a>

- **Default Value**: If the password exists, SET_AND_ENCRYPTED appears
- **Format**: Add or delete
- `com.boomi.container.proxyPassword.encrypted`

This property appears in the list if an encrypted proxy password exists on the Atom. You can delete this password by deleting the property, but you cannot edit the password. If you mistakenly delete the property, you can re-add it.

### <a name="Endorsed Directories">Endorsed Directories</a>

- **Default Value**: `<java-home>/lib/endorsed`
- **Format**: String
- `-Djava.endorsed.dirs`

Identifies one or more directories to be searched for JAR files that implement [Java Endorsed Standards](https://docs.oracle.com/javase/8/docs/technotes/guides/standards/).

:::note

This property is not applicable for containers that run on Java version 11 and should not be used unless the container runs on Java 8.

:::

### <a name="Execute Processes as Forked JVMs">Execute Processes as Forked JVMs</a>

- **Default Value**: MULTI_THREAD
- **Format**: MULTI_PROCESS (enables forked execution) or MULTI_THREAD (disables forked execution)
- `com.boomi.container.processExecMode`

Used to enable or disable [forked execution in a Molecule](t-atm-Enabling_or_disabling_forked_execution_in_a_Molecule_c9023797-9435-4768-bdba-deb16651f0bd.md).

:::info Important

Forked execution (MULTI_PROCESS) is the only supported execution mode in Atom Clouds. As such, do not select the MULTI\_THREAD option for an Atom Cloud.

:::

### <a name="External Hostname">External Hostname</a>

- **Default Value**: localhost
- **Format**: String
- `com.boomi.container.external.hostname`

Used by the mail connector to populate a header when sending to the mail server.

### <a name="Force Restart Override for Molecule Scale Down">Force Restart Override for Molecule Scale Down</a>

- **Default Value**: Not set
- **Format**: Hours, minutes, seconds, milliseconds
- com.boomi.container.elasticity.forceRestartOverride`

The amount of time to wait for processes to finish running on the node before the node is stopped. If the user does not manually set this property value, the container assumes a default value of 600,000 milliseconds (10 minutes). If a process execution is aborted as a result of this configuration, the documents associated with the process are maintained in a shared file system and therefore can be manually re-executed from another node.

:::info Important

The [Async Message Poller Timeout for Molecule Scale Down](#async-message-poller-timeout-for-molecule-scale-down) property value needs to be larger than that of the Force Restart Override for Molecule Scale Down property.

:::

### <a name="Force Start Shared Web Server">Force Start Shared Web Server</a>

- **Default Value**: FALSE
- **Format**: TRUE or FALSE
- `com.boomi.container.plugin.force.start.shared_http_server`

Always starts the Shared Web Server even when no listeners are deployed.

### <a name="Generate Heap Dump on Low Memory">Generate Heap Dump on Low Memory</a>

- **Default Value**: Off
- **Format**: Check box
- `com.boomi.container.resource.heapDumpOnLowMemory`

Specifies whether the Atom should automatically generate a heap dump when it enters low memory status. See the topic about [performance troubleshooting](c-atm-Performance_troubleshooting_general_mode_processes_af887708-ba1c-4f0f-a393-6209161bcb9a.md).

### <a name="Headless Mode">Headless Mode</a>

- **Default Value** Off
- **Format**: Check box
- `-Djava.awt.headless`

Specifies whether the Atom, Molecule, or Atom Cloud should run in Java [headless mode](http://www.oracle.com/technetwork/articles/javase/headless-136834.html).

### <a name="Heap Dump on Out of Memory Error">Heap Dump on Out of Memory Error</a>

- **Default Value**: OfF
- **Format**: Check box
- `-XX:+HeapDumpOnOutOfMemoryError`

Specifies whether the Atom should automatically generate a heap dump when it encounters an Out Of Memory error. See the topic about [high-volume troubleshooting](r-atm-High_volume_troubleshooting_00efaebc-9e40-4e29-b288-f0636dd53106.md). This property should be used only as directed by the Support team.

### <a name="HTTPS Protocols">HTTPS Protocols</a>

- **Default Value**: Not set
- **Format**: String containing one or more Transport Layer Security protocols separated by commas: TLSv1,TLSv1.2.
- `com.boomi.container.httpsProtocols`

This is the Java system property https.protocols, which specifies the enabled Transport Layer Security (TLS) protocol(s) for HTTPS connections via the HTTP Client connector and other connectors that run HTTP clients for connecting to services. Java 8 enables TLSv1 and TLSv1.2 by default.

### <a name="Initial Hosts for Unicast">Initial Hosts for Unicast</a>

- **Default Value**: Not set
- **Format**: String
- `com.boomi.container.cloudlet.initialHosts`

Identify one or more specific host machines as initial hosts when using unicast for cluster communication. See the topic about setting up [unicast support](t-atm-Setting_up_unicast_support_4ddf6a4e-633e-4d46-acfd-83f39078ea83.md).

### <a name="Java Class Path">Java Class Path</a>

- **Default Value**: Not set
- **Format**: String
- `-classpath`

Identifies one or more directories to be searched for classes and other resource files.

### <a name="Java Class Path Prepend">Java Class Path Prepend</a>

- **Default Value**: Not set
- **Format**: String
- `-classpath/p`

Identifies one or more directories to be added to the beginning of the Java Class Path list.

### <a name="Java Library Path">Java Library Path</a>

- **Default Value**: Not set
- **Format**: String
- `-Djava.library.path`

Identifies one or more directories to be searched for native libraries.

### <a name="Java Security Compatibility">Java Security Compatibility</a>

- **Default Value**: 2016.01
- **Format**: String
- -Dcom.boomi.container.securityCompatibility`

See the topic about [controlling Java security compatibility](t-atm-Controlling_Java_security_compatibility_e43f0426-0537-4530-b4f9-1381588b9fa1.md).

### <a name="JGroups Clustered Library Version">JGroups Clustered Library Version</a>

- **Default Value**: 3
- **Format**: Integer
- `-Dcom.boomi.container.clusterLibVersion`

The version of JGroups to be used for clustered Atoms (Atoms that are used in Molecules and Atom Clouds). See the topic about [upgrading clustered Atoms to JGroups 3](t-atm-Upgrading_clustered_Atoms_to_JGroups_3_031158d9-8f85-4bfd-8549-da602ac7d7dc.md).

### <a name="JMX Remote Authentication">JMX Remote Authentication</a>

- **Default Value**: Off
- **Format**: Check box
- `-Dcom.sun.management.jmxremote.authenticate`

See the topic about [enabling remote JMX on an Atom](t-atm-Enabling_remote_JMX_on_an_Atom_1a1625d0-330d-43c6-a765-42502d7768ec.md).

### <a name="JMX Remote Port">JMX Remote Port</a>

- **Default Value**: 5002
- **Format**: Integer
- `-Dcom.sun.management.jmxremote.port`

See the topic about [enabling remote JMX on an Atom](t-atm-Enabling_remote_JMX_on_an_Atom_1a1625d0-330d-43c6-a765-42502d7768ec.md).

### <a name="JMX Remote RMI Port">JMX Remote RMI Port</a>

- **Default Value**: 5002
- **Format**: Integer
- -Dcom.sun.management.jmxremote.rmi.port`

See the topic about [enabling remote JMX on an Atom](t-atm-Enabling_remote_JMX_on_an_Atom_1a1625d0-330d-43c6-a765-42502d7768ec.md).

### <a name="JMX Remote SSL">JMX Remote SSL</a>

- **Default Value**: Off
- **Format**: Check box
- -Dcom.sun.management.jmxremote.ssl`

See the topic about [enabling remote JMX on an Atom](t-atm-Enabling_remote_JMX_on_an_Atom_1a1625d0-330d-43c6-a765-42502d7768ec.md).

### <a name="Listener Startup Mode">Listener Startup Mode</a>

- **Default Value**:
  - Single-tenant: ALL
  - Multi-tenant and running as single specific account: NONE
  - Multi-tenant: MULTITENANT_ONLY
  - [Secure Listen enabled](https://developer.boomi.com/docs/Connectors/DevelopConnectors/SecureListen/Configuring_an_atom_cloud_for_secure_listen): EFFECTIVE_SINGLE_TENANT_ONLY
  - Secure Listen disabled: NONE
- **Format**: ALL, MULTITENANT_ONLY, NONE, EFFECTIVE_SINGLE_TENANT_ONLY
- `com.boomi.container.startListeners`

Defines how listeners are started. Only Atom Cloud owners can set this property.

:::info Important

Boomi recommends that you do not set a value for this property. The Atom determines the appropriate mode for each container (main JVM, Atom workers, etc.) and by setting a value, the intended behavior is overridden and every JVM uses the same mode. As a result, listeners may not run where expected. This property can be set to NONE if listeners should not be started in the Atom. You can view the status of listeners on the Listeners panel. In that panel you can also pause, resume, and restart listeners. Secure Listen:

- When a value is not set for this property (the ideal configuration), the main JVM operates in multi-tenant mode and Atom workers are single tenant. This allows any supported connector having a Listen operation (Web Services Server, Microsoft Azure Service Bus, Salesforce Platform Events, etc.) to operate as multi-tenant and the listener to run in the Atom Cloud node's main JVM. Additionally, single-tenant connectors only run on Atom workers.
- When set to EFFECTIVE_SINGLE_TENANT_ONLY (not recommended), the main JVM and any Atom workers operate as single tenant.

:::

### <a name="Logger Queue Size">Logger Queue Size</a>

- **Default Value**: Not set
- **Format**: Positive Integer
- `com.boomi.container.logging.queueSize`

The number of buffered log statements held in memory before writing to log files. You can increase the size of the logging queue to allow a larger number of log statements. Coordinate this property with the Logger Timeout property to tune logging throughput. For more information, see [Boomi Community article](https://community.boomi.com/s/article/How-can-i-modify-the-log-buffer-used-by-the-boomi-runtime).

### <a name="Logger Timeout">Logger Timeout</a>

- **Default Value**: Not set
- **Format**: Milliseconds
- `com.boomi.container.logging.timeOut`

The timeout period for log messages to be added to the logging queue. If the initial attempt fails, the log handler attempts to add the log after the timeout period. If the second attempt fails, the log handler discards the message. Coordinate this property with the Logger Queue Size property to tune logging throughput. For more information, see [Boomi Community article](https://community.boomi.com/s/article/How-can-i-modify-the-log-buffer-used-by-the-boomi-runtime).

### <a name="Low Latency Warning Threshold">Low Latency Warning Threshold</a>

- **Default Value**: -1 (disabled)
- **Format**: Milliseconds
- `com.boomi.container.account.lowLatency.processElapsedWarnThreshold`

The amount of time after which an otherwise successful low latency process is flagged as a "warning". If you set it to a value less than or equal to zero, the warning is disabled. You do not need to restart the Atom, Molecule or Atom Cloud after setting this property if you change it through the Properties dialog. If this value exists in the `account.properties` file, then it is used. If the value does not exist in the `account.properties` file or if the `account.properties` file does not exist, then this value is read from the `container.properties` file.

### <a name="Low Memory Mode Threshold">Low Memory Mode Threshold</a>

- **Default Value**: Calculated between 60-100%, depending on existing heap memory usage.
- **Format**: A percentage represented by a whole number from 0 to 100
- `com.boomi.container.resource.lowMemoryThreshold`

The percentage of JVM memory usage before a node goes into "low memory" execution mode.

### <a name="Low Open Files Threshold">Low Open Files Threshold</a>

- **Default Value**: 90
- **Format**: A percentage represented by a whole number from 0 to 100
- `com.boomi.container.lowOpenFilesThreshold`

(Linux only) If the open file count is being monitored, the percentage of the maximum number allowed by the system that should cause an Atom, Molecule, or Atom Cloud to respond. The [Monitor Number of Open Files](#monitor-number-of-open-files) property controls open file monitoring. By default, monitoring is enabled for Atom Clouds and disabled for Atoms and Molecules. The Atom, Molecule, or Atom Cloud responds based on the [Auto Restart on Too Many Files Error](#auto-restart-on-too-many-files-error) and [Dump to File When Exceeding Open File Threshold](#dump-to-file-when-exceeding-open-file-threshold) settings.

### <a name="Mapping Expand Child Elements Legacy">Mapping Expand Child Elements Legacy</a>

- **Default Value**: Off
- **Format**: Check box
- `com.boomi.container.mapping.expandChildElementsLegacy`

If selected, mapping behavior with regard to the presence of instance identifiers in a destination profile persists as it was prior to the May 2021 release. This behavior erroneously results in the creation of duplicate child elements in some cases.

:::note

Support for this property was discontinued in the summer of 2021. Selecting this property should therefore be regarded solely as a means to enable processes that rely on the legacy behavior to remain usable for a short time. These processes should be updated to rely on the corrected behavior as soon as possible. Once a process is updated and redeployed, this property should be deselected or removed.

:::

### <a name="Maximum Cached Control IDs">Maximum Cached Control IDs</a>

- **Default Value**: 10
- **Format**: Integer
- `com.boomi.container.controlid.maxids`

The maximum number of control IDs that are cached. Setting this property can improve the performance of incoming EDI document handling in an Atom running in a multi-node Atom Cloud. If the value is set higher than 50, a maximum of 50 control IDs are cached.

### <a name="Maximum Cached Transaction Keys">Maximum Cached Transaction Keys</a>

- **Default Value**: 10
- **Format**: Integer
- `com.boomi.container.controlid.maxTransactions`

The maximum number of transaction keys that are cached in an Atom Cloud. This property applies only to multi-node Atom Clouds for node-to-node communication. Setting this property for an Atom Cloud can improve the performance of incoming EDI document handling in the cloud’s attached Atoms. If the value is set higher than 50, a maximum of 50 transaction keys are cached.

### <a name="Maximum Document Elements Cache Size">Maximum Document Elements Cache Size</a>

- **Default Value**: 10,000
- **Format**: Integer
- `com.boomi.container.transform.maxCacheSize`

The maximum number of document elements to keep in memory per parsed document when low memory mode has been triggered.

### <a name="Maximum Execution Threads per Forked Execution">Maximum Execution Threads per Forked Execution</a>

- **Default Value**: 50
- **Format**: Integer
- `com.boomi.container.forker.maxUserThreads`

The maximum number of threads that can run in a forked JVM.

### <a name="Maximum Execution Threads per Atom Worker">Maximum Execution Threads per Atom Worker</a>

- **Default Value**: 100
- **Format**: Integer
- `com.boomi.container.worker.maxUserThreads`

The maximum number of threads that can run in an Atom Worker JVM.

### <a name="Maximum Execution Threads per Connector Browser">Maximum Execution Threads per Connector Browser</a>

- **Default Value**: 100
- **Format**: Integer
- `com.boomi.container.browser.maxUserThreads`

The maximum number of threads that can run in a Connector Browser JVM.

### <a name="Maximum Flow Control Units">Maximum Flow Control Units</a>

- **Default Value**: 10
- **Format**: Integer
- `com.boomi.container.flowControl.maxUnitCount`

The maximum number of flow control units. This value takes precedence over the Flow Control step’s configuration.

### <a name="Maximum Forked Execution Time in Cloud">Maximum Forked Execution Time in Cloud</a>

- **Default Value**: Not set
- **Format**: Milliseconds
- `com.boomi.container.maxExecutionTime`

The maximum amount of time that you want to allow a forked execution process to run.

### <a name="Maximum Number of Active Batches per Listener">Maximum Number of Active Batches per Listener</a>

- **Default Value**: 5
- **Format**: Integer
- `com.boomi.container.connector.sdkListener.maxBatchLimit`

The maximum number of listener batches that a listener instance is allowed to create for SDK connectors with listeners.

:::note

When set to 0, the Listener does not create batches. Boomi recommends entering a positive integer.

:::

### <a name="Maximum Queued Executions per Node">Maximum Queued Executions per Node</a>

- **Default Value**: 200
- **Format**: Integer
- `com.boomi.container.maxQueuedExecutions`

The maximum number of queued executions that can wait to run on a given node. This property can be used

- by Atoms and by Molecules that do not have forked execution enabled
- if the Maximum Simultaneous Executions per Node property is enabled

### <a name="Maximum Queued Forked Executions per Node">Maximum Queued Forked Executions per Node</a>

- **Default Value**: 200
- **Format**: Integer
- `com.boomi.container.forker.maxQueuedForkedExecutions`

The maximum number of queued forked executions that can wait to run on a given node. This property can be used by Atom Clouds and by Molecules that have forked execution enabled.

### <a name="Maximum Simultaneous Executions per Node">Maximum Simultaneous Executions per Node</a>

- **Default Value**: Unlimited
- **Format**: Integer
- `com.boomi.container.maxRunningExecutions`

The maximum number of simultaneous execution JVMs that can run on a given node. This property can be used by Atoms and by Molecules that do not have forked execution enabled. If this property is set, a queue is enabled for pending executions that exceed the maximum limit for running executions. Use the Maximum Queued Executions per Node and Timeout for Queued Executions per Node properties to set the queue size and time limit. If this property is not set, queuing is not enabled and the number of concurrent executions per node is unlimited.

### <a name="Maximum Simultaneous Forked Executions per Node">Maximum Simultaneous Forked Executions per Node</a>

- **Default Value**: 50
- **Format**: Integer
- `com.boomi.container.forker.maxRunningForkedExecutions`

The maximum number of simultaneous forked execution JVMs that can run on a given node. This property can be used by Atom Clouds and by Molecules that have forked execution enabled.

### <a name="Maximum Simultaneous Forked JVMs per Node">Maximum Simultaneous Forked JVMs per Node</a>

- **Default Value**: -1
- **Format**: Integer
- `com.boomi.container.forker.maxRunningForkedJVMs`

The maximum number of the sum of forked executions, Atom workers, and forked browse sessions that can run on a given node. Forked executions view this value as a hard limit, preventing any additional forked executions from being created on the node. Atom workers and forked browse sessions view this value as a soft limit so Atom workers can still be scheduled on the node. The default value, -1, is unlimited. This property can be used by Atom Clouds and Molecules that have forked executions enabled.

### <a name="Maximum Size for Update Operation">Maximum Size for Update Operation</a>

- **Default Value**: 1,048,576 bytes
- **Format**: Integer
- `com.boomi.container.connector.sizeLimitedUpdateOperation.maxSize`

The maximum size allowed for input documents in bytes. A value of -1 overrides filtering based on size, allowing any size document to go through.

### <a name="Minimum Number of Hosts for Unicast Auto-detect">Minimum Number of Hosts for Unicast Auto-detect</a>

- **Default Value**: 2
- **Format**: Integer
- `com.boomi.container.cloudlet.minInitialHosts`

The minimum number of initial hosts to search for when using unicast for cluster communication. See the topic about setting up [unicast support](t-atm-Setting_up_unicast_support_4ddf6a4e-633e-4d46-acfd-83f39078ea83.md).

### <a name="Monitor Number of Open Files">Monitor Number of Open Files</a>

- **Default Value**: TRUE for Atom Clouds. FALSE for Atoms and Molecules.
- **Format**: TRUE or FALSE
- `com.boomi.container.resource.monitorOpenFiles`

(Linux only) Specifies whether the Atom, Molecule, or Atom Cloud should monitor the open file count and compare it to the maximum number allowed by the system. Open files include both files that are open for read/write activity and open network connections. By default, monitoring is enabled for Atom Clouds and disabled for Atoms and Molecules.

:::note

For forked executions in a Molecule or Atom Cloud where monitoring is enabled, the primary JVM that manages forked executions will be monitored. However, monitoring is always disabled for the JVMs that are running individual processes.

:::

### <a name="Multicast Address">Multicast Address</a>

- **Default Value**: 228.10.10.10
- **Format**: A different address
- `com.boomi.container.cloudlet.mcastAddress`

ee the topic about changing the [multicast address](t-atm-Changing_the_multicast_address_and_port_df21d44c-0336-4198-8c62-917fb9d0bad2.md).

### <a name="Multicast Port">Multicast Port</a>

- **Default Value**: 45588
- **Format**: A different port
- `com.boomi.container.cloudlet.mcastPort`

See the topic about changing the [multicast port](t-atm-Changing_the_multicast_address_and_port_df21d44c-0336-4198-8c62-917fb9d0bad2.md).

### <a name="Non Proxy Hosts">Non Proxy Hosts</a>

- **Default Value**: Not set
- **Format**: String
- `com.boomi.container.nonProxyHosts`

Identifies hosts that should be connected to directly, bypassing the configured HTTP proxy. The value can be a list of hosts, each separated by a pipe (\|). An asterisk (\*) can be used for matching. For example, `*.mycompany.com\|localhost` would indicate that any hosts suffixed by mycompany.com or a host of localhost should not go through the proxy.

:::note

This container property has an equivalent system property called `-Dhttp.nonProxyHosts` that can be set in `<installation_directory>/bin/atom.vmoptions`. As a rule, the container property takes precedence. If the system property exists in `/bin/atom.vmoptions`, the equivalent container property will be stored in `<installation_directory>/conf/container.properties` when you click **Save** on the **Properties** panel. The original system property will be removed from `/bin/atom.vmoptions`.

:::

### <a name="Orchestrated Container">Orchestrated Container</a>

- **Default Value**: Not set
- **Format**: Check box
- `com.boomi.container.cloudlet.problemShutdownTime`

See the topic about [cluster monitoring](c-atm-Cluster_monitoring_for_Molecules_and_Atom_Clouds_51e904f6-010e-4388-ad84-eaac6a6322f6.md).

### <a name="Prefer IPv4Stack">Prefer IPv4Stack</a>

- **Default Value**: Off
- **Format**: Check box
- `-Djava.net.preferIPv4Stack`

Specifies whether the Molecule node or Cloud Molecule should use IPv4 for networking. has been tested with IPv4. Therefore, strongly recommends turning this property on.

### <a name="Process Execution Directory Level">Process Execution Directory Level</a>

- **Default Value**: 0
- **Format**: 0, 1, 2, 3 or 4
- `com.boomi.container.executionDirNestLevel`

See the topic about the [process execution directory structure](t-atm-Changing_the_process_execution_directory_structure_781d6580-d1b9-46d8-a1cd-f8f445ba4f5c.md).

### <a name="Processed Document Archive Directory">Processed Document Archive Directory</a>

- **Default Value**: Not set
- **Format**: Full directory path
- `com.boomi.container.archiveDir`

The directory to which processed documents are archived if [processed document archiving](c-atm-Processed_document_archiving_1e1fedc4-b844-4dde-988a-875b4980cce9.md) is enabled.

### <a name="Proxy Host">Proxy Host</a>

- **Default Value**: Not set
- **Format**: String
- `com.boomi.container.proxyHost`

The host name of the HTTP proxy server.

:::note

This container property has an equivalent system property called `-Dhttp.proxyHost` that can be set in `<installation_directory>/bin/atom.vmoptions`. As a rule, the container property takes precedence. If the system property exists in `/bin/atom.vmoptions`, the equivalent container property will be stored in `<installation_directory>/conf/container.properties` when you click **Save** on the **Properties** panel. The original system property will be removed from `/bin/atom.vmoptions`.

:::

### <a name="Proxy Port">Proxy Port</a>

- **Default Value**: 80
- **Format**: Integer
- `com.boomi.container.proxyPort`

The port number of the HTTP proxy server.

:::note

This container property has an equivalent system property called `-Dhttp.proxyHost` that can be set in `<installation_directory>/bin/atom.vmoptions`. As a rule, the container property takes precedence. If the system property exists in `/bin/atom.vmoptions`, the equivalent container property will be stored in `<installation_directory>/conf/container.properties` when you click **Save** on the **Properties** panel. The original system property will be removed from `/bin/atom.vmoptions`.

:::

### <a name="Proxy User ID">Proxy User ID</a>

- **Default Value**: Not set
- **Format**: String
- `com.boomi.container.proxyUser`

The name of the user who can log into the proxy server.

### <a name="Purge Manager">Purge Manager</a>

- **Default Value**: TRUE
- **Format**: TRUE or FALSE
- `com.boomi.container.config.runPurgeManager`

See the topic about [disk space monitoring and the purge manager](c-atm-Disk_space_monitoring_for_Atom_Clouds_392dc80f-fe1c-4097-b291-e1a6a5126674.md).

### <a name="Purge Manager Threads">Purge Manager Threads</a>

- **Default Value**: Varies
- **Format**: Positive integer
- `com.boomi.container.purge.numPurgeThreads`

The number of threads to be used for purging Atom, Molecule, or Atom Cloud logs and data. The value cannot be set to 0. If Purge Manager is run from an Atom, Molecule, or Atom Cloud, the default is 1. If Purge Manager is run from the Atom Maintenance Server, the default is 10. For more information, see the topic about [purging logs and data](c-atm-Purging_of_Atom_Molecule_or_Cloud_logs_and_data_c3d9858e-c3de-4817-b08a-d8d6a5ac1e9a.md).

### <a name="Purge Schedule for Components">Purge Schedule for Components</a>

- **Default Value**: Not set
- **Format**: Days
- `com.boomi.container.component.purgeDays`

The number of days to wait before purging test execution and browse component data held on your Atom, Molecule, or private Atom Cloud. If not explicitly set in the user interface, the default is set to 0, meaning the property is disabled until a user configures the property with a positive integer, enabling the purge.Shared HTTP Server SSL Certificates and Certificate Authorization components are not purged as a result of enabling this property. See the topic about [purging logs and data](c-atm-Purging_of_Atom_Molecule_or_Cloud_logs_and_data_c3d9858e-c3de-4817-b08a-d8d6a5ac1e9a.md).

### <a name="Purge Schedule for Logs">Purge Schedule for Logs</a>

- **Default Value**: Not set
- **Format**: Days
- `com.boomi.container.logs.PurgeDays`

See the topic about [purging logs and data](c-atm-Purging_of_Atom_Molecule_or_Cloud_logs_and_data_c3d9858e-c3de-4817-b08a-d8d6a5ac1e9a.md).

### <a name="Purge Schedule for Processed Documents">Purge Schedule for Processed Documents</a>

- **Default Value**: Not set
- **Format**: Days
- `com.boomi.container.data.PurgeDays`

See the topic about [purging logs and data](c-atm-Purging_of_Atom_Molecule_or_Cloud_logs_and_data_c3d9858e-c3de-4817-b08a-d8d6a5ac1e9a.md).

### <a name="Purge Schedule for Temporary Data">Purge Schedule for Temporary Data</a>

- **Default Value**: Not set
- **Format**: Days
- `com.boomi.container.temp.PurgeDays`

See the topic about [purging logs and data](c-atm-Purging_of_Atom_Molecule_or_Cloud_logs_and_data_c3d9858e-c3de-4817-b08a-d8d6a5ac1e9a.md).

### <a name="Retry HTTP Post">Retry HTTP Post</a>

- **Default Value**: Off
- **Format**: Check box
- `-Dsun.net.http.retryPost`

Specifies whether an unsuccessful HTTP POST request should be resent to the server automatically.

### <a name="Rolling Restart Force Timeout">Rolling Restart Force Timeout</a>

- **Default Value**: 30 minutes
- **Format**: Hours, minutes, seconds, milliseconds
- `com.boomi.container.cluster.rollingRestart.forceRestartTimeout`

The amount of time a node will wait for rolling restart to complete. After this amount of time, the node begins restarting regardless of the status of any other nodes.

### <a name="Rolling Restart Next in Line Timeout">Rolling Restart Next in Line Timeout</a>

- **Default Value**: 5 minutes
- **Format**: Hours, minutes, seconds, milliseconds
- `com.boomi.container.cluster.rollingRestart.nextInLineRestartTimeout`

The amount of time a node will wait for the "next in line" node to complete the restart process and return to RUNNING status (measured from when the node actually initiates the active restart process).

### <a name="Security Policy">Security Policy</a>

- **Default Value**: Not set
- **Format**: String (likely LOW or HIGH)
- `com.boomi.container.forker.securityLevel`

See the topic [Security policies for Clouds and Molecueles](./c-atm-Security_policies_for_Clouds_and_Molecules_19d244bf-2cab-45a8-8d8e-49ebde3eddc7.md).

### <a name="Set Local JAR Directory">Set Local JAR Directory</a>

- **Default Value**: Not set
- **Format**: Full directory path
- `com.boomi.container.localJarDir`

Specifies the local working directory to which JAR files, plugins, connectors, and custom libraries are copied for each node in a cluster when they are updated or downloaded.

:::note
This functionality is now included as part of the *Use Local Storage for Runtime Assets* setting on the [Properties panel, Basic tab](../Integration%20management/r-atm-Properties_panel_Basic_tab_8eb9b9cf-e371-44ba-897f-4232ce22f122.md). We recommend not using *Set Local JAR Directory* and instead use the *Use Local Storage for Runtime Assets*. However, if you have configured *Set Local JAR Directory*, that directory will still be used for copied JARs only, regardless of the other local storage configuration.
:::

### <a name="Sequential Processing of Custom Script Engine Data">Sequential Processing of Custom Script Engine Data</a>

- **Default Value**: FALSE
- **Format**: TRUE or FALSE
- `com.boomi.container.enableBatchProcessScriptEngineData`

Reduces memory issues when executing Groovy scripts. When enabled, no more than one document is processed at a time in sequential order. does not recommend enabling this property if you plan to extensively modify the original Groovy script. This property is disabled by default.

:::note

We do not recommend enabling this property the script is modified with multiple iterations to process documents. If you want to access documents multiple times within the same script, we recommend you disable the property.

:::

### <a name="Show Atom Icon in System Tray">Show Atom Icon in System Tray</a>

- **Default Value**: TRUE
- **Format**: TRUE or FALSE
- `com.boomi.container.showMonitorOnStartup`

Specifies whether an icon should be shown for the Atom in the system tray.

### <a name="Standard Error Log Level">Standard Error Log Level</a>

- **Default Value**: WARNING
- **Format**: OFF, WARNING, or SEVERE
- `com.boomi.container.logging.std.stdErrLevel`

Sets the logging level at which logging outputs to standard error (stderr) instead of standard output (stdout) when the [Enable Standard Output and Error Logging](#enable-standard-output-and-error-logging) property is enabled.

### <a name="TCP Port for Unicast">TCP Port for Unicast</a>

- **Default Value**: 7800
- **Format**: A different port
- `com.boomi.container.cloudlet.tcpPort`

See the topic about setting up [unicast support](t-atm-Setting_up_unicast_support_4ddf6a4e-633e-4d46-acfd-83f39078ea83.md).

### <a name="Threads for Account Initialization">Threads for Account Initialization</a>

- **Default Value**: 50
- **Format**: Integer
- `com.boomi.container.maxAccountInitThreadPoolSize`

The number of threads to use to initialize accounts upon Atom Cloud startup.

### <a name="Threads for Account Initialization During Starting and Stopping Plugins">Threads for Account Initialization During Starting and Stopping Plugins</a>

- **Default Value**: 50
- **Format**: Integer
- `com.boomi.container.maxAccountUpdateThreadPoolSize`

The number of threads to use to initialize accounts in an Atom Cloud during the loading of plug-ins.

### <a name="Threads for Atom Scheduling">Threads for Atom Scheduling</a>

- **Default Value**: 5
- **Format**: Integer
- `com.boomi.container.numSyncScheduleThreads`

The size of the thread pool that handles scheduled events.If you have a lot of activity and if you are experiencing lower performance, consider increasing this number, provided there are sufficient server resources.

### <a name="Threads for Atom to Atom Messages">Threads for Atom to Atom Messages</a>

- **Default Value**: Not set
- **Format**: Integer
- `com.boomi.container.cloudlet.numSyncClusterThreads`

The size of the thread pool for processing messages from other nodes.If this property is not set manually on the Properties panel, the default value automatically utilized by the runtime is 3 for a Molecule or 20 for an Atom Cloud. If you have a lot of activity and if you are experiencing lower performance, consider using this property to increase the default numbers, provided there are sufficient server resources.

### <a name="Threads for Atom to Platform Messages">Threads for Atom to Platform Messages</a>

- **Default Value**: 50
- **Format**: Integer
- `com.boomi.container.numMessageSendThreads`

The size of the thread pool for sending messages from the Atom to the platform.If you have a lot of activity and if you are experiencing lower performance, consider increasing this number, provided there are sufficient server resources.

### <a name="Threads for Atom to Platform Polling">Threads for Atom to Platform Polling</a>

- **Default Value**: 10
- **Format**: Integer
- `com.boomi.container.numSyncPollThreads`

The size of the thread pool for sending messages from the platform to the Atom. This property is for incoming synchronous messages. If you have a lot of activity and if you are experiencing lower performance, consider increasing this number, provided there are sufficient server resources.

### <a name="Timeout for Escalating Cluster Issue">Timeout for Escalating Cluster Issue</a>

- **Default Value**: 0
- **Format**: Milliseconds
- `com.boomi.container.cloudlet.problemEscalationTimeout`

See the topic about [cluster monitoring](c-atm-Cluster_monitoring_for_Molecules_and_Atom_Clouds_51e904f6-010e-4388-ad84-eaac6a6322f6.md). If a value is not manually specified in the property field, the property automatically assumes a default of 0 milliseconds.

### <a name="Timeout for Queued Executions per Node">Timeout for Queued Executions per Node</a>

- **Default Value**: 59,000 (= 59 seconds)
- **Format**: Hours, minutes, seconds, milliseconds
- `com.boomi.container.queuedExecutionTimeout`

The amount of time that queued executions will wait to run on a given node before they are discarded. This property can be used by Atoms and by Molecules that do not have forked execution enabled. This property can be used if the Maximum Simultaneous Executions per Node property is enabled.

### <a name="Timeout for Queued Forked Executions per Node">Timeout for Queued Forked Executions per Node</a>

- **Default Value**: 59,000 (= 59 seconds)
- **Format**: Milliseconds
- `com.boomi.container.forker.queuedForkedExecutionTimeout`

The amount of time queued forked executions wait to run on a given node before they are discarded. This property is used by Atom Clouds and by Molecules that have forked execution enabled.

### <a name="Timeout for Unicast Auto-detect">Timeout for Unicast Auto-detect</a>

- **Default Value**: 30
- **Format**: Seconds
- `com.boomi.container.cloudlet.findInitialHostsTimeout`

The amount of time a node will wait to detect other hosts when using unicast for cluster communication.See the topic about setting up [unicast support](t-atm-Setting_up_unicast_support_4ddf6a4e-633e-4d46-acfd-83f39078ea83.md).

:::note

Setting this property to an integer less than or equal to 0 disables the auto-detection of initial hosts.

:::

