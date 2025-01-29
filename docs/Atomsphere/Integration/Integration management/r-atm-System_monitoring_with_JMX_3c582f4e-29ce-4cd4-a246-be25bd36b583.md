# System monitoring with JMX 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-3c582f4e-29ce-4cd4-a246-be25bd36b583"/>
</head>


Your operations team should monitor these attributes of your system and of Atoms, Molecules, or Atom Clouds.

Most of these values should be monitored for *all* nodes in a clustered Molecule or Atom Cloud. Some attributes are applicable only to specific Atom, Molecule, or Atom Cloud features. And some attributes might affect the Atom when you monitor them.

**Attribute types**

There are different types of attributes:

-   Some display straightforward information. For example, one property tells you whether your Atom has run out of memory.

-   Others provide information that is subjective. The information could be good news or bad news, depending on the capabilities of your system.

-   Other performance indicators should be monitored over time, for the following reasons:

    -   By collecting samples over time, you can identify normal behavioral patterns. Different attributes have different patterns, which might vary depending on the time of day, day of week, or other workload factors. After a normal pattern is identified, you should be able to detect anomalies in behavior. Unexpected highs, unexpected lows, or extended changes in the pattern can indicate that the system is not behaving correctly.

    -   The long-term collection of samples can help you identify trends. As usage changes over time, you might need to modify the Atom configuration by increasing its memory, CPU or disk space, or by adding nodes to a Molecule cluster. After the trend is identified, you should be able to determine when more resources will be needed. You will be able to deal with the situation in a proactive way, rather than suddenly discovering that the Atom has reached a breaking point and is no longer behaving reliably.


**Monitoring the attributes**

To monitor these attributes, you need to obtain a systems management tool and use a Java Management Extensions \(JMX\) hook, which is a standardized interface for Java programs. Then you can set up monitoring and view the results. The format shown below is specific to Zabbix, which can be used for systems monitoring and management.

:::note

Attributes that represent cumulative values are noted in the Format column. All other attributes are point-in-time values.

:::

Cumulative values continually increase and are reset to zero only when the Atom, Molecule, or Atom Cloud restarts. You might want to collect and display cumulative metrics as deltas, rates, or gauges, depending on your monitoring tool.

## General JVM status 

| Attribute  | Format | Zabbix command | Description  |
|---|---|---|---|
| Garbage collection count | Long, counter, cumulative  | `jmx["java.lang:type=GarbageCollector,name=PS MarkSweep", "CollectionCount"]` | The total number of garbage collections that have occurred in the JVM. |
| Garbage collection time  | Long, in milliseconds, cumulative| `jmx["java.lang:type=GarbageCollector,name=PS MarkSweep", "CollectionTime"]`  | The accumulated garbage collection time for the JVM.  |
| JVM CPU time | Numeric, in nanoseconds, cumulative | `jmx["java.lang:type=OperatingSystem", "ProcessCpuTime"]`  | The CPU time that has been used by the JVM. <br /> This value might not be available on all platforms, in which case -1 is returned.   |
| JVM heap max   | Numeric, in bytes  | `jmx["java.lang:type=Memory","HeapMemoryUsage.max"]`  | The maximum size for the heap. <br />The JVM will never attempt to use more heap memory than this value.  |
| JVM heap used  | Numeric, in bytes  | `jmx["java.lang:type=Memory","HeapMemoryUsage.used"]` | The number of bytes of memory that the Java virtual machine (JVM) is currently using.<br />This value should be monitored to look for problematic scenarios, such as a point in time stress (the Atom suddenly consumes a lot more memory than normal) or a general increase in memory over time. Increases over time could indicate a memory leak, depending on how frequently the Atom is restarted. It is more likely that they indicate changes in Atom usage, which might necessitate increasing the Atom's memory allocation or adjusting the workload.  |
| JVM non-heap max   | Numeric, in bytes  | `jmx["java.lang:type=Memory","NonHeapMemoryUsage.max"]` | The maximum size for non-heap memory.  |
| JVM non-heap used | Numeric, in bytes  | `jmx["java.lang:type=Memory","NonHeapMemoryUsage.used"]` | The number of bytes of non-heap memory that the JVM is currently using. |
| JVM thread count   | Numeric  | `jmx["java.lang:type=Threading", "ThreadCount"]` | The number of active threads in the JVM. <br /> This value should be monitored for point in time anomalies and trends over time.  |
| JVM uptime  | Numeric, in milliseconds, cumulative | `jmx["java.lang:type=Runtime", "Uptime"]`  | The amount of time that the JVM has been running.  |

## General Atom status

| Attribute   | Format   | Zabbix command  | Description  |
|---|---|---|---|
| Atom decommission stage   | String   | `jmx["com.boomi.container.services:type=ContainerController", "DecommissionStage"]` | The current stage of an active decommission shutdown process: INITIALIZING, PAUSING_ATOM, STOPPING_WORK_HANDLERS, FLUSHING_REPORTS, DRAINING_QUEUES, STOPPING_ATOM, or DONE. |
| Atom status   | String   | `jmx["com.boomi.container.services:type=Config", "Status"]`                | The current status of the Atom: INITIALIZING, INIT_UPDATING, RUNNING, PAUSING, PAUSED, PAUSING_FOR_STOP, PAUSED_FOR_STOP, STOPPING, or STOPPED. The Atom should spend most of its time in the RUNNING status. Should be monitored for unexpected changes. |
| Has the Atom encountered an OOME  | Boolean  | `jmx["com.boomi.container.services:type=ResourceManager", "OutOfMemory"]`  | Indicates the Atom has encountered an OutOfMemoryError. Should be monitored for a prolonged period where this value is True. |
| Has the Atom entered into the low memory status    | Boolean  | `jmx["com.boomi.container.services:type=ResourceManager", "LowMemory"]`    | Indicates whether the Atom has passed the configured low memory threshold. Should be monitored for unexpected changes or more frequent occurrence. |
| Is node the head cloudlet   | Boolean  | `jmx["com.boomi.container.services:type=ContainerController", "HeadCloudlet"]` | Indicates whether this node is currently the head node in a Molecule cluster. Should never have extended periods when no node is the head node. |
| Is the Atom restarting   | Boolean  | `jmx["com.boomi.container.services:type=ContainerController", "Restarting"]` | Indicates the Atom is restarting. Should be monitored for prolonged periods when this value is True. |
| Is there a clustering problem  | String   | `jmx["com.boomi.container.services:type=ContainerController", "ClusterProblem"]` | Describes the type of clustering problem, if it exists. Additional information like Time, Description, and Severity might also be displayed. |
| Number of attached accounts | Numeric  | `jmx["com.boomi.container.services:type=Config", "ContainerAccountCount"]` | The number of accounts currently attached to this Atom. Should be monitored for growth over time. |
| Number of schedule configurations running on the Atom| Numeric | `jmx["com.boomi.container.services:type=Scheduler", "ScheduleCount"]`  | The number of process schedules the Atom is tracking. Should be monitored for trends indicating peak workload. |


## Atom message queue service status

| Attribute   | Format  | Zabbix command  | Description  |
|---|---|---| --- |
| Accounts with storage problems  | List of strings | `jmx["com.boomi.container.services:type=PluginService,plugin=QUEUE_SERVER", "ProblemAccountIds"]`  | A list of accounts whose queue storage is corrupted.  |
| Atom Queue Free Space Wait Timeout   | String | `jmx["com.boomi.container.services:type=PluginService,plugin=QUEUE_SERVER", "atomQueueFreeSpaceWaitTimeout"]`  | The length of time in seconds that the message broker waits for available disk space before timing out and stopping an Atom queue. The default value is 30 seconds.  |
| Communication Port   | Numeric  | `jmx["com.boomi.container.services:type=PluginService,plugin=QUEUE_SERVER", "Port"]` | The port for communications between instances of the shared queue server in a Molecule and Atom Cloud cluster. The default port is 61717.  |
| Count Queues With Dead Letter Messages  | Map of Strings keyed to Integers| `jmx["com.boomi.container.services:type=PluginService,plugin=QUEUE_SERVER", "countQueuesWithDeadLetterMessages"]`  | The number of dead letter queues with greater than 0 messages for a given account. An account ID parameter is needed to use this attribute (accountId.attachmentIdentifier).  |
| Job scheduler store disk usage | Numeric  | `jmx["org.apache.activemq:type=Broker,brokerName=atomq", "JobSchedulerStorePercentUsage"]` | The percentage of disk space used by the service’s job scheduler store.  |
| Local Queue Count  | Numeric  | `jmx["com.boomi.container.services:type=PluginService,plugin=QUEUE_SERVER", "LocalQueueCount"]` | The number of queues in a local node.|
| Maximum Disk Usage  | Numeric  | `jmx["com.boomi.container.services:type=PluginService,plugin=QUEUE_SERVER", "maximumDiskUsage"]` | The maximum amount of disk usage in bytes for persistent queue storage per Atom or per node for Molecules and Atom Clouds. The default value is 107374182400 bytes (100 GB). |
| Maximum Memory Allocated  | Numeric   | `jmx["com.boomi.container.services:type=PluginService,plugin=QUEUE_SERVER", "maximumMemoryAllocated"]`  | The maximum percentage of the Atom JVM memory allocated to the shared queue server. The default value is 25%.  |
| Maximum Memory Allocated to Queue  | Numeric    | `jmx["com.boomi.container.services:type=PluginService,plugin=QUEUE_SERVER", "maximumMemoryAllocatedToQueue"]` | The maximum percentage of memory allocated to a single queue, expressed as a percentage of the memory allocated to the shared queue server. The default is 1%. |
| Maximum Thread Number | Numeric  | `jmx["com.boomi.container.services:type=PluginService,plugin=QUEUE_SERVER", "maximumThreadNumber"]`  | The maximum number of threads in a shared pool thread. The default value is 250 threads. |
| Memory usage | Numeric  | `jmx["org.apache.activemq:type=Broker,brokerName=atomq", "MemoryPercentUsage"]` | The percentage of memory used by the service.  |
| Message store disk usage  | Numeric | `jmx["org.apache.activemq:type=Broker,brokerName=atomq", "StorePercentUsage"]` | The percentage of disk space used by the service’s message store.  |
| Overall status | String  | `jmx["com.boomi.container.services:type=PluginService,plugin=QUEUE_SERVER", "HealthStatus"]`  | The overall status of the service — either Good or Getting Worried. A status of Getting Worried also includes a comma-separated list of the worrisome disk usage metrics.  |
| Queue Count  | Numeric   | `jmx["com.boomi.container.services:type=PluginService,plugin=QUEUE_SERVER", "QueueCount"]` | The number of queues in an entire container. |
| Temp store disk usage  | Numeric  | `jmx["org.apache.activemq:type=Broker,brokerName=atomq", "TempPercentUsage"]`  | The percentage of disk space used by the service’s temporary data store.  |
| Total Dead Letter Messages | Map of Strings keyed to Integers| `jmx["com.boomi.container.services:type=PluginService,plugin=QUEUE_SERVER", "totalDeadLetterMessages"]` | The number of dead letter messages for a given account. An account ID parameter is needed to use this attribute (accountId.attachmentIdentifier).  |

## Execution properties status

| Attribute | Format | Notes | Zabbix command | Description |
| --- | --- | --- | --- | --- |
| Average execution time | Double, in seconds | Applies to both non-forked and forked executions. | `jmx["com.boomi.container.services:type=ExecutionManager", "AverageExecutionTime"]` | The average execution time for all processes that ran on this Atom or Molecule node in the last 15 minutes. <br /> This count does not include Atom worker executions. |
| Average queue wait time | Double, in seconds | Applies to both non-forked and forked executions. | `jmx["com.boomi.container.services:type=ExecutionManager", "AverageExecutionQueueTime"]` | A rolling 15-minute average of the amount of time that executions have had to wait on the queue before being executed. |
| Local Atom worker count | Numeric | Applies to Atom Clouds. Includes the Atom worker count for a single Atom or a specific node within a Molecule and Cloud. | `jmx["com.boomi.container.services:type=MultiProcessExecutionForker", "LocalRunningWorkersCount"]` | The number of Atom workers that are running on this Molecule node.<br /> This value should be monitored for trends over time, where a high number of Atom workers on all the nodes in the cluster could indicate that the cluster needs more nodes (or other changes in workload). |
| Local Atom worker executions | Numeric | Applies to Atom Clouds. Includes the execution count for a single Atom or a specific node within a Molecule and Cloud. | `jmx["com.boomi.container.services:type=MultiProcessExecutionForker", "LocalDirectExecutionCount"]` | The number of executions that were sent by the load balancer to this Molecule node and that are now running on an Atom worker. (The actual Atom worker could be running on another node.) <br />This value should be monitored for point in time anomalies and trends over time. |
| Local running browser count | Numeric | Applies to connector browsing and importing objects in Atom Clouds, which is not enabled by default. The administrator must enable browsing. For more information about enabling browsing, see the Properties panel help topic. | `jmx[“com.boomi.container.services:type=ConnectorManager”, “LocalRunningBrowsersCount”]` | The total number of Atom browse workers that are running on a specific Atom node. |
| Maximum queued executions | Numeric | Applies to both non-forked and forked executions. | `jmx["com.boomi.container.services:type=ExecutionManager", "MaxQueuedExecutions"]` | This writable property controls the Maximum Queued Executions per Node property. <br /> If queuing is disabled, the value is set to 0. |
| Maximum simultaneous executions | Numeric | Applies to both non-forked and forked executions. | `jmx["com.boomi.container.services:type=ExecutionManager", "MaxRunningExecutions"]` | This writable property controls the Maximum Simultaneous Executions per Node property. <br /> If queuing is disabled, the value is set to "max int". |
| Queued execution timeout | Numeric, in milliseconds | Applies to both non-forked and forked executions. | `jmx["com.boomi.container.services:type=ExecutionManager", "QueuedExecutionTimeout"]` | This writable property controls the Timeout for Queued Executions per Node property. <br /> If queuing is disabled, the value is set to 0. |
| Queued executions | Numeric | Applies to both non-forked and forked executions. | `jmx["com.boomi.container.services:type=ExecutionManager", "QueuedExecutionCount"]` | The number of executions waiting to be executed. An execution will be queued only if the maximum number of executions are already running. <br /> If queuing is disabled, the value is set to 0. |
| Queued executions (estimated) | Numeric | Applies to both non-forked and forked executions. | `jmx["com.boomi.container.services:type=ExecutionManager", "QueuedExecutionEstimatedCount"]` | The estimated number of executions waiting to be executed. An execution will be queued only if the maximum number of executions are already running. <br /> This value should be monitored for point in time anomalies and trends over time. This attribute is the same as QueuedExecutionCount except that fewer resources are required to monitor it. If you are doing extended monitoring, use this attribute. |
| Running browser count | Numeric | Applies to connector browsing and importing objects in Molecules and Clouds, which is not enabled by default. The administrator must enable browsing. For more information about enabling browsing, see the Properties panel help topic. | `jmx[“com.boomi.container.services:type=ConnectorManager”, “RunningBrowsersCount”]` | The total number of Atom browse workers that are running on the entire clustered Atom Cloud. |
| Running executions | Numeric | Applies to both non-forked and forked executions. | `jmx["com.boomi.container.services:type=ExecutionManager", "LocalExecutionCount"]` | The number of current process executions in the Atom or Molecule node. <br />If forked execution is enabled, this count includes executions that are currently queued. This count does not include Atom worker executions. |
| Running executions (estimated) | Numeric | Applies to both non-forked and forked executions. | `jmx["com.boomi.container.services:type=ExecutionManager", "RunningExecutionEstimatedCount"]` | The estimated number of executions running on this Atom or Molecule node.<br />This value should be monitored for point in time anomalies and trends over time. This attribute is the same as RunningExecutionCount except that fewer resources are required to monitor it. If you are doing extended monitoring, use this attribute. |
| Running, non-queued executions | Numeric | Applies to both non-forked and forked executions. | `jmx["com.boomi.container.services:type=ExecutionManager", "RunningExecutionCount"]` | The number of executions running. <br /> If queuing is disabled, this number will match LocalExecutionCount. |
| Total Atom worker executions running in the cluster | Numeric, cumulative | Applies to Molecules and Clouds. Includes the total execution count for all nodes in the cluster. | `jmx["com.boomi.container.services:type=MultiProcessExecutionForker", "LocalTotalDirectExecutionCount"]` | The total number of executions that were sent by the load balancer to this Molecule node and that were run on an Atom worker. <br /> This value should be monitored similarly to the Total number of tasks that have been executed. |
| Total Atom workers running in the cluster (should be same on any node) | Numeric | Applies to Molecules and Clouds. Includes the total Atom worker count for all nodes in the cluster. <br /> Monitoring this attribute might affect the Atom because it involves more computation. | `jmx["com.boomi.container.services:type=MultiProcessExecutionForker", "RunningWorkersCount"]` | The total number of Atom workers that are running on the entire Molecule cluster.  <br />This value should be monitored similarly to the Local Atom worker count. |
| Total number of executions | Numeric, cumulative | Applies to non-forked and forked executions. | `jmx["com.boomi.container.services:type=ExecutionManager", "TotalExecutionCount"]` | The total number of executions that have run on this Atom since it was started (or the statistics were reset).<br />This value can be monitored to get an accurate picture of the total amount of work the Atom is doing. Trends and point in time anomalies can be detected by tracking this value as a difference between each sample over the time between each sample. |
| Total number of tasks that have been executed | Numeric, cumulative | Applies to tasks executed on the Atom. | `jmx["com.boomi.container.services:type=TaskManager", "TaskExecutionCount"]` | The total number of executions that have been queued on this Atom since it was started (or the statistics were reset).<br />Trends and point in time anomalies can be detected by tracking this value as a difference between each sample over the time between each sample. |

## Incoming messaging

| Attribute  | Format  | Zabbix command  | Description  |
| --- | --- | --- | --- |
| Number of download failures | Numeric, cumulative| `jmx["com.boomi.container.services:type=MessagePollerThread", "DownloadStats.connectFailureCount"]` | \(Available on head node only\) The number of times an error has occurred while the Atom was attempting to download messages from the platform. <br />Dramatic increases in this value could indicate some sort of communication problem between the Atom and the platform. |
| Number of downloaded messages | Numeric, cumulative| `jmx["com.boomi.container.services:type=MessagePollerThread", "DownloadStats.deliveredMessageCount"]` | \(Available on head node only\) The number of messages sent to the Atom from the platform.<br /> This value should be monitored for point in time anomalies and trends over time.  |

## Outgoing messaging

You should monitor the following attributes for each message queue `("<queueName>" = acknowledgement-track, auditlog, event, process-track, testmessage)`.

| Attribute | Format | Notes | Zabbix command | Description  |
|---|---|---|---|---|
| Number of upload failures                                       | Numeric, cumulative| Monitoring this attribute might affect the Atom because it involves more computation. | `jmx["com.boomi.container.services:type=MessageQueue,queueId=<queueName>", "UploadStats.connectFailureCount"]` | The number of times an error has occurred while the Atom was attempting to upload messages to the platform. <br /> Dramatic increases in this value could indicate some sort of communication problem between the Atom and the platform. |
| Number of uploaded messages| Numeric, cumulative| Monitoring this attribute might affect the Atom because it involves more computation. | `jmx["com.boomi.container.services:type=MessageQueue,queueId=<queueName>", "UploadStats.deliveredMessageCount"]` | The number of messages sent from the Atom to the platform.<br />This value should be monitored for point in time anomalies and trends over time.  |
| The number of messages in memory waiting to be stored to disk   | Numeric   | Monitoring this attribute might affect the Atom because it involves more computation. | `jmx["com.boomi.container.services:type=MessageQueue,queueId=<queueName>", "PendingStoreMessageCount"]` | Sustained high values could indicate disk issues or reaching peak workloads in the Atom.<br /> For most queues in a Molecule or Cloud with forked execution, this value will be 0.  |
| The number of messages on disk waiting to be sent to platform   | Numeric  | Monitoring this attribute might affect the Atom because it involves more computation. | `jmx["com.boomi.container.services:type=MessageQueue,queueId=<queueName>", "PendingUploadMessageCount"]` | Sustained high values could indicate communication problems between the Atom and the platform. |

## Jetty properties

| Attribute | Format  | Zabbix command  | Description  |
|--- | --- | --- | --- |
| `Jetty thread pool size`  | Numeric | `jmx["com.boomi.jetty:type=queuedthreadpool,id=0", "threads"]` | The number of threads in the Jetty thread pool, which is used to service incoming web service requests.<br /> This value should be monitored for point in time anomalies and trends over time. |
| `Jetty thread pool queue size` | Numeric | `jmx["com.boomi.jetty:type=queuedthreadpool,id=0", "queueSize"]` | The number of incoming web service requests that are queued waiting for an available Jetty thread. <br />In a responsive web server, this value should generally be close to 0. This value should be monitored for point in time anomalies and trends over time. |

## JGroups 2.x and 3.x status

The following attributes apply to clustering, which is always enabled in Molecules and Atom Clouds.

| Attribute  | Format  | Zabbix command  | Description  |
| --- | --- | --- | --- |
| Number of message bytes received| Numeric, cumulative| JGroups 2.x — `jmx["com.boomi.container.services:type=JGroups", "ReceivedBytes"]`<br />JGroups 3.x — `jmx["com.boomi.container.services:type=channel,cluster=\"ATOM_CLUSTER\"", "received_bytes"]`  | The number of message bytes received by this node in the Molecule cluster. <br />This value should be monitored similarly to the Number of messages sent. |
| Number of message bytes sent    | Numeric, cumulative| JGroups 2.x — `jmx["com.boomi.container.services:type=JGroups", "SentBytes"]`<br />JGroups 3.x — `jmx["com.boomi.container.services:type=channel,cluster=\"ATOM_CLUSTER\"", "sent_bytes"]`         | The number of message bytes sent by this node in the Molecule cluster.<br /> This value should be monitored similarly to the Number of messages sent.     |
| Number of messages received     | Numeric, cumulative| JGroups 2.x — `jmx["com.boomi.container.services:type=JGroups", "ReceivedMessages"]`<br />JGroups 3.x — `jmx["com.boomi.container.services:type=channel,cluster=\"ATOM_CLUSTER\"", "received_messages"]` | The number of messages received by this node in the Molecule cluster.<br /> This value should be monitored similarly to the Number of messages sent.    |
| Number of messages sent         | Numeric, cumulative| JGroups 2.x — `jmx["com.boomi.container.services:type=JGroups", "SentMessages"]`<br />JGroups 3.x — `jmx["com.boomi.container.services:type=channel,cluster=\"ATOM_CLUSTER\"", "sent_messages"]`       | The number of messages sent by this node in the Molecule cluster.<br /> This value should be monitored for sudden changes (possibly indicating communication issues in the cluster) or growth over time (possibly indicating the approach of peak workload for the cluster). Note that the head node might have significantly different values from the rest of the nodes in the cluster |

## Connector Manager Service Status

| Attribute | Format  | Zabbix command | Description  |
| --- | --- | --- | --- |
| `isConnectorSingleTenantOnly` | `java.lang.String connectorType` | `jmx["com.boomi.container.services:type=ConnectorManager", "isConnectorSingleTenantOnly", "<connectorType>"]` <br /> **Note:** `connectorType` is provided by the user. | Checks the provided `connectorType` input to verify if the connector is Single Tenant or not. <br /> If the connector is Single Tenant, the value returned is true and false if it is not Single Tenant. |

## ConnectorServerManager Listener Status

| Attribute          | Format                    | Zabbix command    | Description  |
| ------------------ | ------------------------- | ----------------- | ------------ |
| `getListenerStatus`| `java.lang.String processId` | `jmx["com.boomi.account.services:accountId=<accountId>,type=ConnectorServerManager", "getListenerStatus", "<processId>"]` <br /> **Note:** `accountId` and `processId` are provided by the user. | Checks the status of a listener running on the JVM you are connected to. To check a status, provide the `processId` of the listener you want to check. You can only check one `processId` at a time. <br /> Entering the command returns one of the following statuses: paused, listening, UNKNOWN, UNSUPPORTED, or ERRORED. |