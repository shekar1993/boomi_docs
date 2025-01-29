# Atom workers 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-057ddda4-0cf2-40b2-8dd9-c193ae168569"/>
</head>


Use an *Atom worker* to improve performance. For example, when process call volume is high or low latency is required.

An Atom worker is a reserved resource in a Atom Cloud or in a private Atom Cloud that is dedicated to processing certain types of requests for a given account. Atom workers are available only for Atom Clouds — not for single-tenant Molecules or Atoms.

:::note

Atom Clouds and the Atom workers that run on them use forked execution, which means that each process executes in a separate JVM. They are not compatible with the MULTI-THREAD option of the **Execute Processes as Forked JVMs** container property \(`com.boomi.container.processExecMode`\).

:::

Any SDK connector that implements secure listen can use Atom workers, including the following connectors:

-   AS2 Shared Server
-   Boomi Atom Queue
-   Boomi Master Data Hub Listener
-   Flow Services Server
-   JMS
-   Kafka
-   Microsoft Azure Service Bus
-   MLLP Server
-   Oracle E-Business Suite V2
-   Salesforce Platform Events
-   SAP
-   Web Services Server

:::note

If you use a Atom Cloud and would like to enable Atom workers in your account, or if you would like to have additional Atom workers provisioned in your account, contact your Boomi representative.

:::

## Limitations and differences when using Atom workers 

When you use an Atom worker on a Boomi Atom Cloud, the following web service limitations apply:

-   For Web Services Server connectors, the maximum number of web service processes that can execute simultaneously is 20 \(with 10 queued\).

-   For Low Latency mode requests running on an Atom worker, the maximum web service process execution time is 30 seconds.

:::note

You can set a process to use Low Latency mode in the Process Options dialog. This mode is available only if Services Enablement is enabled in your account.

:::

There are some minor differences in process executions that use an Atom worker:

-   The first request that causes an Atom worker to start can cause some delay in execution time. On the Attachment Quotas tab, Cloud owners can set the **Minimum Atom Workers** property. The property specifies how many Atom workers need to run at all times. That number of Atom workers start as soon as the Cloud starts.

-   Atom workers are configured to run for a specified period of time, then shut down automatically. A new Atom worker starts upon the next request. On the Attachment Quotas tab, Cloud owners can set the **Atom Worker Warmup Enabled** property. The property ensures that the new Atom worker is running and ready to take over when the other Atom worker shuts down.

-   By default Atom workers run for 24 hours. You can change the length of time after which Atom workers shut down. On the Advanced tab of the Properties panel, set the **Atom Worker Time to Live** property \(`com.boomi.container.worker.ttl`\).

    :::note
    
    If the load on active Atom workers drops, the Atom Cloud reduces the number of Atom workers to the **Minimum Atom Workers** property value. In that case, it is possible for an Atom worker to shut down before its **Atom Worker Time to Live** value is reached.

    :::

-   Atom workers can be monitored and stopped, if necessary, on the Atom Workers tab of the Atom Management page.

-   When Atom workers are enabled for an account, it applies to all low latency HTTP listener processes on the Atom Cloud.
  - You can run `LOW-LATENCY`, `BRIDGE` on a worker. `GENERAL` mode WSS listener process on a worker with `LOW_LATENCY_DEBUG` as *Default HTTP Workload Quota*. 

-   Messages are sent to the account’s container log when any of the following situations occur:

    -   A new Atom worker is requested but the account is already using the maximum number of Atom workers that it is allowed to have.

    -   An Atom worker’s status is being updated and the Atom worker has reached its maximum load.

    -   An Atom worker’s status is being updated and all Atom workers in the account have reached their maximum load.

-   Flow control parallel threads are treated as separate executions in the worker. They would move to the execution queue on the same worker. Workers do not redistribute to other workers. 

-   When an Atom Worker is running 20 processes concurrently and an additional process needs to be executed, it will queue up on that worker, triggering a new worker to spin up. If that worker is already full, the new execution/thread would be "discarded due to load."

## Running a General mode Web Services Server process in an Atom worker 

All Web Services Server processes that run on a Boomi Atom Cloud use an Atom worker. However, the Atom Queue start step does not run on an Atom worker unless it is in low latency. The *Default HTTP Workload Quota* need to be set to `LOW_LATENCY_DEBUG`.

If you are executing your Web Services Server processes on a private Atom Cloud, it is possible to force your General mode processes to use an Atom worker in your Atom Cloud. You do this by setting the following properties on the Attachment Quotas tab. You can set the properties for all accounts or you can set them for an individual account that uses your Atom Cloud.

| Property name | Valid values | Property description |
| --- | --- | --- |
| **Default HTTP Workload** | LOW_LATENCY\_DEBUG, LOW_LATENCY, GENERAL (the default) | If set to LOW_LATENCY\_DEBUG, all Web Services Server processes use an Atom worker. If set to LOW_LATENCY, all Web Services Server processes run in Low Latency mode. If set to GENERAL, General mode processes do not use an Atom worker, but Low Latency mode processes do. |
| **Atom Worker Maximum General Execution Time** | *hr:min:sec:ms* | Controls the maximum web service process execution time. The number is specified in hours, minutes, seconds, and milliseconds. |

If you set these properties on a private Atom Cloud, the processes do not use forked execution, which improves processing time. However, these General mode processes run more slowly than Low Latency mode processes, so you cannot run as many General mode processes at the same time. Setting the properties also allows you to view detailed process execution reporting on the Process Reporting page, which normally is not available for all processes when you use Low Latency mode.

## Running an AS2 Shared Server process in an Atom worker 

If you are executing your AS2 Shared Server processes on a private Atom Cloud, it is possible to force those processes to use an Atom worker in your Atom Cloud. You do this by setting the following properties on the Attachment Quotas tab. You can set the properties for all accounts or you can set them for an individual account that uses your Atom Cloud.

| Property name  | Valid values | Property description |
|---|---|---|
| **Default AS2 Workload** | LOW_LATENCY\_DEBUG, GENERAL (the default) | If set to LOW_LATENCY\_DEBUG, AS2 Shared Server processes use an Atom worker. If set to GENERAL, AS2 Shared Server processes do not use an Atom worker. |
| **Atom Worker Maximum General Execution Time** | *hr:min:sec:ms* | Controls the maximum AS2 service process execution time. The number is specified in hours, minutes, seconds, and milliseconds.  |


## Limitations on General mode processes using an Atom worker 

There are some limitations when you force General mode processes to use an Atom worker:

-   Like low latency processes, General mode processes that use the Flow Control step’s *multi-thread* parallel processing run as usual. However, if a process uses the Flow Control step’s *multi-process* parallel processing, it is downgraded to multi-thread parallel processing.

-   For General mode requests, there is a limit to the maximum service process execution time. The default is 10 minutes. You can change this limit by setting the Atom Worker Maximum General Execution Time property on the Attachment Quotas tab.

-   If an Atom worker crashes while one of these General mode processes is executing, the process status is shown as Pending on the Process Reporting page. 
