# Forked execution in Molecules and Atom Clouds 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-6219a059-f773-4da3-8d65-9781b87630cf"/>
</head>


Forked execution is enabled in Atom Clouds by default, which means that each process executes in a separate JVM. You can optionally enable forked execution in a Molecule.

By default, a Molecule's nodes execute processes within the same JVM as the node itself. However, you can enable an optional mode called forked execution that causes a node to execute each process in a separate JVM, forked each time that another process executes.

:::note

Forked execution cannot be enabled if multiple Atoms are running on the same machine. Java 8 JDK is required for Molecules to use forked execution.

:::

The benefits of using forked execution are:

-   Currently-executing processes use more of the total memory of the machine.

-   The node is more robust because catastrophic failures \(such as a JVM crash or OutOfMemoryException error\) in a given process execution do not affect the main node process or any other currently-executing processes.

The drawbacks to using forked execution are:

-   A slight delay in process execution, due to operation system process startup time.

-   More machine resources are used than a single node.


You can enable forked execution in a Molecule on the Properties panel in Atom Management. You can set forked execution properties for a Molecule or private Atom Cloud on the Forked Execution Properties panel in Atom Management.

:::note

Connector browse operations run in forked executions in private Atom Clouds and therefore can use user-installed JAR files, installed at the account-level, and execute browse operations in a separate JVM.

:::

## Additional resources 

- [Java virtual machine \(JVM\)](http://en.wikipedia.org/wiki/Java_Virtual_Machine)