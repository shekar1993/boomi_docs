# Performance troubleshooting of general mode processes 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-af887708-ba1c-4f0f-a393-6209161bcb9a"/>
</head>

The performance of a general mode Integration process is influenced by each element of the infrastructure and every connected resource.

The elements of the infrastructure include:

- network components
- server hardware
- Java virtual machine \(JVM\)
- Atom container
- the process itself

Connected resources are those to which the process connects using connector steps. For example:

- Salesforce instance
- SAP Business Application Programming Interface \(BAPI\)
- Microsoft SQL Server database

Optimizing the performance of an individual process is a matter of maximizing its use of the CPU after first optimizing its use of all other resources in the infrastructure, including RAM, disk, and network.

## Monitoring tools

All infrastructures have standard monitoring tools:

- Hardware/operating system

  Use Perfmon in a Windows environment or the top and vmstat commands in a Linux environment to monitor CPU utilization, memory utilization and I/O wait state.

- Java Virtual Machine \(JVM\)

  The JVM is designed to optimize its use of available system resources, such as heap memory. You can use Java VisualVM, which is provided with the Java Development Kit \(JDK\), as a JMX client to assess the adequacy of the available resources.

- Atom container

  The Atom container to which a process is deployed manages resources required to execute the process. Errors and other issues that may impact performance are logged in the container log, which can be found in the logs directory within the Atom installation.

- Individual processes

  A process’ execution log, accessible via **Manage** \> **Process Reporting**, contains execution-specific metrics, such as the number of documents processed in each step and step execution times.

You may also have access to superior enterprise monitoring tools. By all means use those tools where available.

## Hardware resource troubleshooting

Troubleshoot hardware resource issues that may affect process performance as follows:

- RAM utilization close to 100%

  - If the Atom Java process is consuming the majority of physical RAM:

    - Determine if the JVM heap memory is set too high to enable your process to maximize its use of physical RAM. If so, minimize the maximum heap setting in the atom.vmoptions file and re-execute the process. For more information, see the topic about high volume troubleshooting, linked below.

    - If on the other hand your process requires a large amount of heap memory and the system’s physical RAM cannot adequately meet this requirement, consider either upgrading the system’s physical RAM or moving the process to a system with adequate physical RAM.

  - If non-Atom processes are consuming the majority of physical RAM, consider moving the Atom to a dedicated system.

- High disk input/output \(I/O\)

  A shortage of physical RAM results in swapping to disk and the use of virtual memory. This has a negative impact on performance.

  If heap memory usage exceeds the Atom’s configured Low Memory Mode Threshold, the Atom flushes documents from JVM heap memory to disk. This condition, which potentially results in high disk I/O, is indicated by the presence of the message “\[com.boomi.container.config.ResourceManager handleMemoryNotification\] Low memory in memory pool” in the container log. If this condition occurs, increase the JVM heap memory setting, providing there is sufficient physical RAM.

- CPU utilization close to 100%

  The key metrics are CPU utilization and CPU queue length. The latter is called the processor queue length in Windows and the load average in Linux. If the CPU queue length is greater than two times the number of CPU cores, tasks are queuing in CPUs. Assuming your process is already consuming the majority of CPU, you should attempt to reduce the parallelism in the process, such as flow control threads. Your objective here is to optimize the flow control setting in order to prevent the queuing of more than two tasks in CPU for prolonged periods during process execution.

:::note

To learn more about generating heap dump files, refer to the Boomi Community articles [How to get heap dumps](https://community.boomi.com/s/article/How-to-get-heap-dumps) and [How to generate a JVM heap dump for troubleshooting issues](https://community.boomi.com/s/article/howtogenerateajvmheapdumpfortroubleshootingissues).

:::

## JVM performance troubleshooting

Key metrics for troubleshooting performance of the JVM are garbage collection time and heap memory usage over time.

- Garbage collection overhead has a negative impact on process performance. If garbage collection time exceeds 5%, there is a garbage collection overhead condition. Obtain a JVM heap dump for additional troubleshooting information.

- If, after garbage collection, heap memory usage is increasing over time and getting close to the maximum heap size, either a heap memory shortage condition or a memory leak is the likely cause. Here again, obtain a JVM heap dump for additional troubleshooting information.

Java VisualVM can be used to generate JVM heap dumps. For more information, refer to [System monitoring with JMX](./r-atm-System_monitoring_with_JMX_3c582f4e-29ce-4cd4-a246-be25bd36b583.md).

## Atom and process troubleshooting

A container log entry reading “Low memory in memory pool” indicates a heap memory shortage. In this event you should set the Atom property Generate Heap Dump on Low Memory and re-execute the process. In the container log, the entry “Start generating heap dump on low memory status in file” will specify the file location of the heap dump. Analyze the heap dump to identify the reason for the heap memory shortage.

Analyzing thread dumps is a method for troubleshooting a slow process. Use Java VisualVM or the JDK’s jstack utility to generate and save a series of thread dumps during the course of process execution.

If the Atom crashes while executing your process, this is indicated in the reporting of the errored execution. Information about the crash and pointers for additional troubleshooting are logged in the file `hs_err_pid<Java process ID>.log` in the Atom installation directory.

## Process step troubleshooting

Step runtimes are shown in INFO entries in a process execution log — for example:

`2015-03-04T18:49:50Z INFO Start NoData Shape executed successfully in 8ms`

Scrutinize these entries as follows:

- Identify the steps with the longest execution times and compare to the total process execution time.

- Identify commonalities in those steps.

  For example, Decision, Map and Set Properties steps in a process might all have SQL look-ups.

Also scrutinize Error entries in the execution log — for example:

`Error [Function: getProducts, Sql Lookup (Step 3)]: Unable to open database connection. Timeout waiting for idle object.`

Correlate errors with steps having inordinately long execution times to narrow down performance issues.
