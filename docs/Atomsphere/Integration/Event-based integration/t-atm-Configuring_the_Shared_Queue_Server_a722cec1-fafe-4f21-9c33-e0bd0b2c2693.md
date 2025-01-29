# Configuring the Shared Queue Server

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-a722cec1-fafe-4f21-9c33-e0bd0b2c2693"/>
</head>

Configure the shared queue server settings on the **Shared Queue Server** panel in Atom Management.

## Before you begin

You must have the Atom Management privilege to perform this task. If you have the Atom Management Read Access privilege, you cannot perform the task.

## Procedure

1.  On the **Manage** menu select **Atom Management**.

2.  Select the Atom, Molecule, or Atom Cloud in the list to the left.

3.  Under Settings & Configuration, click **Shared Queue Server**.

    The Shared Queue Server panel appears.

4. **Optional:** To set the port for communications between instances of the shared queue server in a Molecule and Atom Cloud cluster, in the **Communication Port** field, type the port number.

    The default port is 61717.

5. **Optional:** To set the maximum number of threads to use in a shared pool thread, in the **Maximum Thread Number** field, type the number of threads.

    The default is 250 threads. For a Molecule or Atom Cloud this setting is per node.

6. **Optional:** To set the maximum percentage of the Atom JVM memory allocated to the shared queue server, in the **Maximum Memory Allocated \(%\)** field, type the percentage.

    The default is 25%.

7. **Optional:** To set the maximum percentage of memory allocated to a single queue, expressed as a percentage of the memory allocated to the shared queue server, in the **Maximum Memory Allocated to Queue \(%\)** field, type the percentage.

    The default is 1%.

8. **Optional:** To set the maximum amount of disk usage in bytes for persistent queue storage per Atom, or per node in the case of a Molecule or Atom Cloud, in the **__Maximum Disk Usage \(Bytes\)__** field, type the number of bytes.

    The default is 107374182400 bytes \(100 GB\).

9. **Optional:** To set how long the message broker waits for available disk space before timing out and stopping the queue, in the **Atom Queue Free Space Wait Timeout** field, type the number of seconds.

    The default is 30 seconds.

10. Click **Save**.
