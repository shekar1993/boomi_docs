# Molecule system requirements

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-41f9a675-ab11-4f3b-bf51-1655394aba5b"/>
</head>

The instructions for setting up a Molecule are intended for systems engineers with an intermediate level of experience configuring a wide array of operating system features such as NFS, Samba, networking, firewalls, and file systems.

A Molecule consists of multiple nodes installed on multiple on-premise machines. Boomi recommends that you install no more than 10 nodes in a Molecule, and no less than 3 nodes. Installing 3 Molecule nodes allows the head node to properly distribute the runtime workload across 2 secondary nodes without overloading the first node.

:::caution Restriction

Antivirus programs that scan the installation folder of your Atoms, Molecules, or Atom Clouds might conflict with their operation. For example, if the antivirus program attempts to access the files while your Atoms, Molecules, or Atom Clouds are running, it can cause conflicts. Also, the antivirus program could cause permission issues by being seen as a different user. Therefore, disable the antivirus program from running against the Atom, Molecule, or Atom Cloud installation folders during planned maintenance windows. Additionally, after running the antivirus program, check the quarantine folder for any valid files quarantined incorrectly.

:::

:::info Important

Snapshots and backups interfere with the node JVM and its ability to communicate with the fileshare and are therefore not recommended. For more information, see the article [Java.lang.NoClassDefFoundError](https://community.boomi.com/s/article/NoClassDefFound).

:::

## Supported operating systems

| Operating system | Version |
| --- | --- |
| Linux 32-bit | - Red Hat Enterprise Linux 7 and later<br />- Suse Enterprise Linux Server 12 and later<br />- Any other Linux distribution that supports the Java 8 Runtime |
| Linux 64-bit | Any Linux distribution that supports the Java 8 or 11 Runtime |
| Windows 32-bit | All versions of Windows that support the Java 8 Runtime, from Windows Vista to the most recent version.<br />**CAUTION:** The stability of private Molecules and Atom Clouds can be unpredictable in Windows environments. This behavior is typically due to a communication disruption between Molecule Node(s) and the File System through the network file path due to the following:<br />- File system backups<br />- Virus scanning utilities<br />- Automated patching of the file system<br />As such, Boomi recommends using the Linux operating system in support of Production environments. |
| Windows 64-bit   | All versions of Windows that support the Java 8 or Java 11 Runtime, from Windows Vista to the most recent version.<br />**CAUTION:** The stability of private Molecules and Atom Clouds can be unpredictable in Windows environments. This behavior is typically due to a communication disruption between Molecule Node(s) and the File System through the network file path due to the following:<br />- File system backups<br />- Virus scanning utilities<br />- Automated patching of the file system<br />As such, Boomi recommends using the Linux operating system in support of Production environments. |


## Unsupported operating systems

Boomi does not officially support installations on Unix operating systems. Because Unix is not officially tested or supported by Boomi, the Boomi Support team cannot troubleshoot or support any Unix-related issues.

## Minimum hardware requirements

A single Atom, Molecule node, or Cloud Molecule within an Atom Cloud can run on hardware ranging from business-class workstations to dedicated servers.

- **Processor** - 1.8 GHz or higher Pentium 4 (or equivalent)
- **Memory** - 2 GB RAM (minimum 1 GB dedicated to Atom, Molecule node, or Cloud Molecule)
- **Hard disk** - 50 MB for runtime and configuration, 10 GB for data archiving

## Minimum hardware requirements for high volumes of data

The requirements for a single Atom, Molecule node, or Cloud Molecule node, or Cloud Molecule, within an Atom Cloud that must process high volumes of data are:

- **Processor**
   - Dual 64-bit processors or higher
   - More processors allow for increased, simultaneous process runs

- **Memory**
   - 4 GB of RAM (minimum 2 GB dedicated to the Atom, Molecule node, or Cloud Molecule)
   - More RAM allows for increased, simultaneous process runs

- **Hard Disk**
   - 100-200 GB of hard disk space
   - Increase purging levels to minimize Atom, Molecule node, or Cloud Molecule disk space

## Minimum software requirements for Windows and Linux

**Java** (for Windows and Linux)

- Requires Java 8 or 11. Boomi recommends Java 11.

- Boomi internally tests each Java version prior to their release.
            
**Java runtime** (for Windows and Linux)

- This is a Java application and requires Java 8 or 11 to run.

- For Java 8, Boomi supports the Oracle Java and Amazon Corretto OpenJDK . The installer automatically downloads a private copy of the Java 8 JDK for the Atom, Molecule, or Atom Cloud's use.

- For Java 11, Boomi supports the Amazon Corretto OpenJDK only. When you install a new runtime container and download the JDK, it automatically includes the Java 11 runtime.

  :::note

  The Atom, Molecule, or Atom Cloud Java 11 installer downloads a private copy of the JDK. You can continue to use Java 8 installer files previously downloaded on your local drive to install runtime containers on Java 8. Depending on which version you install, the Java 8 JRE or the Java 11 JDK are in your Atoms’s or Molecules’s jre directory. The private JRE or JDK will not interfere with a shared JRE or JDK (one that you, not the installer, installed). It is not integrated into browsers and does not write registry entries.

  :::

## Number of machines required

The minimum number of machines required for operation is four:

- One shared file server

- Three Molecule node or Cloud Molecule

The minimum number of machines required for full failover is five:

- One shared file server

- One backup shared file server

- Three Molecule nodes or Cloud Molecules

:::note

To prepare for failover, keep one Molecule offline but mirror the primary Molecule to the secondary one on a regular basis. For more information about backup and disaster recovery best practices, review the following resources in the Boomi Community:

- [Best Practices for Run Time High Availability and Disaster Recovery knowledge article](https://community.boomi.com/s/article/bestpracticesforruntimehighavailabilityanddisasterrecovery)

- [Backup and Disaster Recovery video](https://www.youtube.com/watch?v=lHayf1HMLW8&feature=youtu.be)

:::

## Operating system requirements

All nodes in a Molecule, or Cloud Molecules in an Atom Cloud, must be running on the same operating system. For example, you cannot run one of the Molecule's nodes on Windows and another node on Linux.

Boomi recommends that all nodes in a Molecule, or Cloud Molecules in an Atom Cloud, use the same operating system architecture. For example, run all nodes on a Windows 32-bit or a Windows 64-bit machine.

## Hardware requirements

You do not have to install each node in a Molecule, or Cloud Molecule in an Atom Cloud, on computers with the same hardware configuration. The machines can have different amounts of RAM, CPU types, and so on.

## File system requirements

The primary requirement for running a Molecule or Atom Cloud is that all nodes or Cloud Molecules must use the same installation directory.

The primary use for clustering is to allow multiple machines to work together, which means that there is some form of a shared file system. Due to the implementation of the Molecule and Atom Cloud support within the Atom, this file system must support file locking. Common examples of this are:

- An NFS file system with NFS locking enabled (NLM support)
- A Windows network share or drive

:::note

The file system must have the same operating system and architecture as all nodes in a Molecule, or Cloud Molecules in an Atom Cloud in an otherwise file locking issues may occur. Boomi recommends SMB or CIFS for Windows machines. Boomi recommends NFS for Linux machines.

:::

## Network recommendations

For best performance, the various machines in a Molecule or Atom Cloud must have multicast (UDP) available between them. However, this is not a requirement, because you can configure the clustering protocol to work in a unicast-only (TCP) environment. See more information about network configuration for Molecules and Atom Cloudss.

## Firewall rules

The nodes need to communicate with each other to cluster successfully.

- If you are using multicast defaults, open port 45588.
- If you are using unicast defaults, open port 7800.

## Host setup

Ensure that the host names of the machines resolve to valid IP addresses, not to the localhost adapter, which is 127.0.0.1.

If your system meets all of these requirements, you are ready to download the Molecule installer.

If your system meets all of these requirements, you are ready to download the installer.

