# Improving document performance in shared file systems 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-c2ce2b4c-fcd7-4d8a-9cd5-8bd99a2a9e10"/>
</head>


Manually add custom container properties in the **Properties Panel, Custom tab** for Atoms, Molecules, and Atom Clouds to improve document performance in shared file systems.

## Before you begin


You must have the Atom Management privilege to perform this task. If you have the Atom Management Read Access privilege, you cannot perform the task. The container must be online and you must be the owner of the Atom, Molecule, or Atom Cloud to view and edit the Properties panel, Custom tab.

## About this task

The following custom container properties can be added manually in the Properties panel’s Custom tab to improve document performance and lower input or output in shared file systems:

-   `com.boomi.container.enableAtomicDocumentSharingOnlyOnWindows` - \(applicable only for Linux systems\) Enabled by default, the Atom makes only one file system call to copy each shared document between component steps or processes.

    :::info
    
    This property affects Atoms, Molecules, and Atom Clouds running only on Linux systems. This property has no effect on a Windows system.

    :::

-   `com.boomi.container.enableOnlySharingDocumentsIfNeeded` - \(Disabled by default\) When enabled, processes execute as normal but do not copy documents to the shared file system after a step finishes executing unless the document is needed by another step later in the execution. Documents are still able to be viewed through Process Reporting.

    :::note
    
    If you use a trading partners step, you should not enable this property. Additionally, this property should not be used for the Salesforce Platform Events.

    :::

-   `com.boomi.container.enableFlushingProcessLogImmediately` - When set to true, the process log is flushed after every log record is published \(default\). Setting this property to false flushes the process log after the logger is closed.

-   `com.boomi.container.processLogBufferSize` - Defines the size of the log buffer in bytes. The default size is 8192 bytes.


Use the following instructions to apply these properties to your Atom, Molecule, or Atom Cloud:

## Procedure

1.  In the service, go to **Manage** \> **Atom Management**.

2.  Select an Atom, Molecule, or Atom Cloud from the list on the left.

3.  Under **Settings & Configuration**, click **Properties**.

4.  Click on the **Custom** tab.

5.  Under **Container Properties** heading, click **Add a Property**.

6.  In the Property Name field, enter `com.boomi.container.enableAtomicDocumentSharingOnlyOnWindows`. In the Property Value field, enter true.

    :::note
    
    Entering a value of false disables this property.

    :::

7.  Repeate step 5 by clicking **Add a Property** again.

8.  In the Property Name field, enter `com.boomi.container.enableOnlySharingDocumentsIfNeeded`. In the Property Value field, enter true.

    :::note
    
    Entering a value of false disables this property.

    :::

9.  Click **Save**.

10. You are prompted to restart your container. Click **Yes, restart now** to immediately restart your container or click **No, restart later** to manually restart your container at a later time.

## Results

To notice performance improvements in your shared file system after applying these custom properties, you must restart the affected Atom, Molecule, or Atom Cloud. As a result, you may notice that fewer calls are made to your shared file system and you may have the ability to execute more processes concurrently than what was previously possible.