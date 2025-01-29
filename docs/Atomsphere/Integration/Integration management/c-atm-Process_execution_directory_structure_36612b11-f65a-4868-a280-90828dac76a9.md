# Process execution directory structure 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-36612b11-f65a-4868-a280-90828dac76a9"/>
</head>


Atom, Molecule, or private Atom Cloud owners can create additional storage space for process executions.

In the default setup, process executions are stored in the \<atom\_installation\_directory\>/execution/history/\<execution\_date\> directory. There you can store approximately 32,000 process executions per day per account. If you need more storage space for your process executions, you can set a container property that stores process executions in various subdirectories under the execution/history/\<execution\_date\> directory. In this container property, called the Process Execution Directory Level property \(`com.boomi.container.executionDirNestLevel`\), you can set a value of 0 to 4. The default is 0, which stores all process executions in the root directory. Higher settings nest subdirectories derived from the execution ID. Each subdirectory can store approximately 32,000 process executions.

In this example, where the execution ID is `execution-f1dbbb70-3053-4ca0-8179-fcb483fed7c0-2012.11.28`, selecting a value of 0–4 creates the following subdirectory structure:

-   0 — \(the default\) `execution/history/2012.11.28/execution-f1dbbb70-3053-4ca0-8179-fcb483fed7c0-2012.11.28`

-   1 — `execution/history/2012.11.28/f1/execution-f1dbbb70-3053-4ca0-8179-fcb483fed7c0-2012.11.28`

-   2 — `execution/history/2012.11.28/f1/db/execution-f1dbbb70-3053-4ca0-8179-fcb483fed7c0-2012.11.28`

-   3 — `execution/history/2012.11.28/f1/db/bb/execution-f1dbbb70-3053-4ca0-8179-fcb483fed7c0-2012.11.28`

-   4 — `execution/history/2012.11.28/f1/db/bb/70/execution-f1dbbb70-3053-4ca0-8179-fcb483fed7c0-2012.11.28`


Selecting a higher number makes the subdirectory structure deeper with more available subdirectories to store process executions. A production Atom Cloud, for example, typically has a container property value of 2.