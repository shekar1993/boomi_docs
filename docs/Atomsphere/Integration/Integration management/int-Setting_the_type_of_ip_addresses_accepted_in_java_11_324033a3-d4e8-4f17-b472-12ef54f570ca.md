# Setting the type of IP addresses accepted in Java 11 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-324033a3-d4e8-4f17-b472-12ef54f570ca"/>
</head>


Manually added a custom container property in the **Properties Panel, Custom tab** for Atoms, Molecules, and Atom Clouds to set the type of IP addresses that are accepted in Java 11.

## Before you begin

You must have the Atom Management privilege to perform this task. If you have the Atom Management Read Access privilege, you cannot perform the task. The container must be online and you must be the owner of the Atom, Molecule, or Atom Cloud to view and edit the **Properties Panel, Custom tab**.

## About this task

The Java class `InetAddress` accepts only IPv4 address literals in decimal quad notation. You can expand the type of IP addresses accepted by using the Custom property `allowAmbiguousIPAddressLiterals`. Use the following instructions to apply this property to your Atom, Molecule, or Atom Cloud:

## Procedure

1.  In the service, go to **Manage** \> **Atom Management**.

2.  Select an Atom, Molecule, or Atom Cloud from the list on the left.

3.  Under **Settings & Configuration**, click **Properties**.

4.  Click on the **Custom** tab.

5.  Under the **Container Properties** heading, click **Add a Property**.

6.  In the Property Name field, enter `com.boomi.allowAmbiguousIPAddressLiterals`. In the Property Value field, enter true.

    :::note
    
    Entering a value of false disables this property and the `InetAddress` class will accept only IPv4 literals in decimal quad notation. Any other type of IPv4 address literals will result in a `java.net.UnknownHostException` error.

    :::

7.  Click **Save**.

    You are prompted to restart your container. Click **Yes, restart now** to immediately restart your container or click **No, restart later** to manually restart your container at a later time.