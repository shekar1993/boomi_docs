# Flow Control step

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-67E3B8F1-C336-4F80-A650-E412C3789289"/>
</head>

The Flow Control step contains a set of options that allow you to configure how documents are processed within a process execution.

![Flow Control icon](../Images/step-ic-flow-control-30_25379d62-8340-4e39-ae18-07c7c13dbc1b.jpg)

The Parallel Processing options allow part of a process execution to be executed in parallel. You enable parallel processing by setting the Number of Threads or Processes to a value greater than 1. When documents get to the Flow Control step, they are separated into the number of threads defined, and each thread is executed in parallel from the current Flow Control step through to completion. Adding this step to a process can help to speed up "slow" or "complex" steps and spread memory to multiple computing processes.

:::note

Some of these options require you to use a Molecule to enhance the power of your document flow. Consult with a representative to learn more about how these options can be enabled in your account.

:::

Parallel processing is disabled when you are using test mode. You must also ensure that parallel processing is enabled in your account.

## Flow Control step dialog: Parallel Processing Options

- **Parallel Processing Type** - The type of parallel processing desired: Threads or Processes. It is set to Threads by default.

  You must have Molecules enabled in your account to be able to select Processes under Parallel Processing Type.

  - Threads — Two or more "processing" tasks running concurrently. Multiple threads can run within the same computing process.

    :::note

    Boomi recommends using threads for the parallel processing types to avoid a possible issue with document caches clearing properly when mulitple JVMs are used.

    :::

  - Processes — Instances of a Java Virtual Machine, consisting of one or more threads, that are being executed sequentially by a computer system that has the ability to run several JVMs concurrently \(“forked execution”\). This setting is more of a request than a hard requirement. If the Atom on which the process is running has no way to execute in a separate process, it falls back to separate threads.

- **Number of Threads/Number of Processes** - The number of threads or processes that process the documents in parallel from the current Flow Control step through to completion. If this number is less than or equal to 1 \(or undefined\), no parallel processing is performed.

  If your process is running on a Atom Cloud, the maximum number of units that you can use is 10.

## Flow Control step dialog: Batch Options

- **No Document Batching** - Does not break document sets but adheres to the parallel processing options defined.

- **Run Each Document Individually \("For Each"\)** - Executes each document to completion one document at a time.

  This setting changes the document processing after this step. Each input document to the Flow Control step is executed to completion one at a time \(in all subsequent steps\). Parallel processing and/or a Molecule are not required to add this step to a process.

  This option slows down any process, including processes whose mode is set to General rather than to Low Latency. Use this option sparingly.

- **Run as Batches of x Documents** - Breaks the entire document set into batches based on the defined document count and executes each batch to completion one batch at a time.
