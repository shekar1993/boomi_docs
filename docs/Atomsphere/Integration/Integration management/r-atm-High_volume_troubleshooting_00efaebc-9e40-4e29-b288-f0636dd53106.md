# High-volume troubleshooting 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-00efaebc-9e40-4e29-b288-f0636dd53106"/>
</head>


Find answers to common questions about memory inefficiencies in the Atom.

## Out Of Memory Exception errors 

Why am I getting an OutOfMemoryException error while attempting to process data in an Atom?

The reasons include, but are not limited to:

-   You are attempting to process a single large data file without batching the data.

-   You are executing many processes simultaneously.

-   You are executing many large data sets simultaneously.

-   There is a memory inefficiency in the Atom.

-   Your computer is out of physical or virtual memory that it can allocate to the Atom.


These troubleshooting questions are listed in order \(first being most common\) for OutOfMemoryException errors.

## The Atom's memory efficiency 

Does the Atom’s memory require special configuration to process millions of records?

The Atom employs various techniques to limit memory usage. The primary technique is buffering data to disk. When you read in a very large file, only a small portion of it ends up in memory. As data travels from step to step, a set of file pointers is being passed. At some point during processing, the data is read into memory so it can be transformed, manipulated, or inspected. When this occurs, the size of the data that is read in affects whether you get an OutOfMemoryException error.

A base level of memory usage is required to track each document through a process. A process that reads in 100,000 documents uses memory to store metadata for each document in memory. There is a memory pattern difference between the Start step reading in many documents and any other step handling many documents. While the Start step consumes memory for each document, other steps that produce many documents do not use any additional memory.

Be aware that the Start step consumes memory, especially when you build large master processes that initiate many subprocess calls that run asynchronously. Each subprocess produces many documents in the Start step and they all consume memory until each subprocess is complete.

To avoid heavy memory usage when processing large amounts of data, spread the load of the Atom over time or configure the process to handle large amounts of data.

-   For technology connectors, run large data sets at different times to avoid simultaneously processing large numbers of documents.

-   To process large CSV files, use the Data Process step with Split Documents to batch the data into smaller chunks. However, be aware when using the Split by Profile that it will attempt to read all of the data so that it can sort and organize each flat file line.

-   Use the Flow Control step to execute each document one at a time after you split. This spreads the memory usage over time instead of processing all of the documents at one time per step.

-   When reading from the database, use the Grouping options to batch the data into smaller record sets by count or by a matching link element from the Database Read profile. For example, use "OrderNum" to group inbound records that have the same order number.

-   When writing to the database, use the Commit options to group database commits by a specified count or multi-table data set.


## Repeated exception errors 

What if I get exception errors after I employ all of these techniques?

By default, the Atom attempts to use only 512 MB of RAM when it processes a low- to medium-level data load; it can safely process thousands to tens of thousands of records at one time. Data sets of hundreds of thousands or even millions of records require increased resources to the Atom. The key question is how much RAM should you allocate to the Atom? Boomi recommends not limiting the Atom by minimally following this guideline:

|Records|RAM usage|
|-------|---------|
|100,000|1 GB|
|200,000 to 500,000|2 GB|
|500,000 and above|4 GB or more|

These are simultaneous records being read from an application. An Atom can easily process a one-million record CSV file by splitting and mapping with only 512 MB of RAM. This is because inside the Atom the single file will be only one "record" which is split by the process.

## Usage of all available memory on the machine 

Why can't the Atom use all available memory on the machine?

Memory usage is based on the architecture of the Java virtual machine \(JVM\). Java handles its own memory and sets up its own memory space, called heap space, from the available operating system memory. Java uses heap space only to perform its work. If the heap space is full and objects that have been created by the Atom cannot be removed from the heap space safely \(called Garbage Collection\), then OutOfMemoryException errors occur.

There is a benefit to this approach. A regular Windows/Linux program can consume all available memory in a machine even extending into Windows virtual memory or Linux swap space. Virtual memory or swap space is on-disk memory space that is very slow and is used primarily to save old states of an application. When an application uses this memory space, it can slow down the entire machine. Moreover, when an application uses all available physical and virtual memory, then the machine is unable to use that memory for regular operation and eventually crashes.

By putting all Java memory into the heap space, Java protects the operating system and the other applications running on the machine. Only the Java application itself encounters the out-of-memory problem so that users can attempt to fix the problem. If the machine crashes, it is much harder to diagnose and fix the issue.

One peculiarity about this type of memory management is that after machine RAM has been allocated to Java heap space, Java is reluctant to return that RAM to the operating system. This is because, for performance reasons, Java attempts to maintain as much RAM as you will allow it. As a result, reallocating memory can be a time-consuming operation. Even if the Atom is not doing anything, it still may be using a large amount of memory because Java has not freed the memory for the operating system. This does not mean that there is a memory leak—it just means that there is a set of free memory inside the JVM that the operating system cannot see.

Although you can change this behavior, Boomi recommends that you do not do that. If you decide to make this change, you can set the following options on the Custom tab of the Properties panel, or add them to the `<installation_directory>/bin/atom.vmoptions` file.

```
-XX:MinHeapFreeRatio
-XX:MaxHeapFreeRatio
```

A good article that describes these options is located on [Oracle’s website](http://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/index.html).

The options above, when set on the Properties panel or in the atom.vmoptions file, apply only to the primary process running on an Atom, Molecule, or private Atom Cloud. They do not affect forked executions. To set these options for forked executions, you must set them on the Custom tab of the Forked Execution Properties panel, or in your customized procrunner.\*, procworker.\*, and/or procbrowser.\* script files.

## Processing high volumes of data 

**I adjusted my available RAM for the Atom but I'm processing millions of records. What else can I do to speed up processing?**

When high volumes are a requirement, consider implementing a Molecule.

A single Atom is limited to the memory on a single machine as well as the memory available to the single Atom. A Molecule surpasses these barriers by allowing multiple nodes to take the load of the processes as well as by allowing the processes to run in their individual JVMs.

First, a Molecule attempts to load-balance the process executions across the nodes. However, a single node may get too much data to process. This problem can be alleviated with enough \(i.e., three\) nodes.

Second, Molecules can execute processes in their own JVM. This allows you to set memory restraints per process execution. Each process that executes does not use the same memory as other processes, so you can scale to the size of the memory in the machine. For instance, if your machine has 12 GB of RAM, you could assign 512 MB to the main node but assign the process executions to have 2 GB maximum for each. When simultaneous processes run in a single node, those processes do not use each other’s memory.

Finally, you can distribute the load inside a process using the Flow Control step. By using the "Process" unit, you can distribute the execution of the data to different nodes in the network. This further spreads the memory usage across multiple machines and prevents a process on one node from having to process all of the data. This works well if you can split the data and spread it across multiple machines.

## If you still have problems with your Atom 

We may need to investigate the Atom's internals to determine if there is some efficiency we can gain from the code. There are always possibilities of memory inefficiencies in the Atom. Any memory analysis that we do starts with setting the Heap Dump on Out of Memory Error property \(`-XX:+HeapDumpOnOutOfMemoryError`\) on the Advanced tab of the Properties panel.

When the OutOfMemoryException error occurs, a very large file that is the entire Java memory space is generated in the root directory of the Atom. You can zip up this file and send it to Boomi Support for further analysis.

In some cases we may find a memory inefficiency. In other cases we may not and the solution may be to spread out the load or to redesign the process.
