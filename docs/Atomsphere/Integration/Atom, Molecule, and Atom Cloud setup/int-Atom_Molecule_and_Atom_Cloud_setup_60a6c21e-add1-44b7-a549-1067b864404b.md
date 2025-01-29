# Atom, Molecule, and Atom Cloud setup 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-60a6c21e-add1-44b7-a549-1067b864404b"/>
</head>


You can consider various set up options to increase your computer's performance when using Atoms, Molecules, or private Atom Clouds.

These are some factors that go into an Atom or Molecule runtime environment setup:

- Hardware — the amount of memory your machine has; number of CPUs; amount of disk space; number of machines you plan to use.

- Runtime Engine — whether you are using a single Atom or a clustered Molecule; a normal or forked execution.

- Integration Design — the number of subprocesses; a Flow Control step for parallel processing; type of parallel processing (threads or processes).


There are different options for increasing your processing.

## The building blocks

Your computer contains the following resources:

- CPU

- Memory

- Hard disk

- JVM, with heap space and thread(s)

These resources can be scarce or easily consumed, so you must decide how to allocate resources depending on the needs of your runtime environment.
## Options for increasing processing capacity 

The following examples show different options for allocating your computer's resources to increase processing capacity:

1. Increase the JVM heap size, which provides additional working memory for a single JVM. A single JVM can use all CPUs on a computer, however a shared heap can cause contention.

2.  Increase the computer’s resources, such as the CPU, memory, and hard disk. If you increase CPU capacity, you can run more simultaneous actions. If you add more memory and get more disk space, you can process more data simultaneously. Note that hard disks do not parallelize well.

3. Increase the number of threads to enable parallel processing, which means more tasks can run simultaneously.

4. Increase the number of JVMs (forked executions). By doing so, there is more working memory and threads across multiple JVMs. There is less contention for the garbage collector, so clearing the heap space (memory) is more efficient.

5. Increase the number of computers on which the Atom runs, which provides more resources of all types: CPU, memory, and hard disk. It reduces contention for the resources and gives you more JVMs.

## Processing scenarios 

What kind of setup does recommend? It varies by use case. What you buy and how to set up your system are determined by the following factors:

- *What* you are processing

- *How* you are processing the data

- *How much* you are trying to process


Use the following table to identify your processing scenario, the resource in contention, and to find ’s recommended solution.

| Processing Scenari | Resource in Contention | Solution |
| --- | --- | --- |
| Running many simultaneous processes | CPU | Increase the number of computers, Option 5 (best solution)<br /><br />Increase number of CPUs per computer, Option 2 |
| | Memory/heap | Increase heap per JVM, Option 1<br /><br />Increase memory per computer, Option 2 (assumes more heap per JVM) |
| High volume of documents per process | Hard disk | Increase hard disk, Option 2 |
| | Memory/heap | Increase heap per JVM, Option 1<br /><br />Increase memory per computer, Option 2 (assumes more heap per JVM) |
| | CPU | For small-sized documents, use a Flow Control step with the multithreading option, Option 3<br /><br />For large-size documents, use a Flow Control step with the multiprocess option, Option 4 |
| Very large documents | Memory/heap | Increase heap per JVM, Option 1 (best solution)<br /><br />Increase memory per computer, Option 2 (assumes more heap per JVM) |
| | Hard disk | Increase hard disk, Option 2<br /><br />Use a Flow Control step with the multi-process option, Option 4 |
| High volume of real-time requests | CPU | For a Cloud, use Atom workers<br /><br />For a Molecule, do NOT use forked execution |

## Other ways to improve processing capacity 

You can improve performance by designing your processes and using process steps correctly. See the “Improving performance” section of [Process design and development tips](../Process%20building/c-atm-Process_design_and_development_tips_f9c8f5ed-dd9d-48a8-b0e4-47e5d6762c4f.md).

Use the existing features in to improve performance. For example:

- Use Molecules. A Molecule is a clustered Atom. It allows for multiple Atom processes to run concurrently. You can deploy Molecules across multiple computers, which makes your environment more robust.

- Consider enabling forked execution, which causes a node to run each process in a separate JVM and forks each time another process starts running. When you use multiple JVMs, your environment becomes more robust and provides more resources for longer tasks. Note, however, that forked execution can affect your process design and performance in other ways, especially if you are using Java Message Service (JMS) or publishing web services.

- Enable local disk support in Molecules to reduce unnecessary network traffic. For more information, see [Molecule and Atom Cloud working data storage](../Integration%20management/c-atm-Molecule_and_Atom_Cloud_working_data_storage_b18ef1af-1e37-4a33-8712-d600f4e7b29d.md).