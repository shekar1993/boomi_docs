# Increasing the memory available to an Atom or Molecule 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-ccb54dde-49f1-4c9f-b1d6-1b0305c2a7ef"/>
</head>


To increase the amount of memory available to the Atom or Molecule, set the **Heap Size** property on the **Properties** panel.

## Before you begin

You must have the Atom Management privilege to perform this task. If you have the Atom Management Read Access privilege, you cannot perform the task.

## About this task

The default is 512 MB. You should increase this value if you are processing high volumes of data and/or large data sets, or you have a high frequency of process executions.

-   For 64-bit operating systems, you can increase the value up to 80% of the available RAM \(assuming that no other applications are running on the same server\). A server usually needs 512 MB to 1 GB for the operating system; the rest of the memory can be allocated to the JVM.

-   For 32-bit operating systems, you can increase the value up to 80% of the available RAM to a maximum of 2GB.

## Procedure

1.  Go to **Manage** \> **Atom Management**.

2.  Select the Atom or Molecule from the list.

3.  In Settings & Configuration, click **Properties**.

    The Atom Properties or Molecule Properties panel opens.

4.  In the **Heap Size** field on the Basic tab, type a new value.

5.  Click **Save**.

    Because changes to this property do not take effect until the Atom or Molecule is restarted, you are prompted to restart. You have the option to restart now or restart later.