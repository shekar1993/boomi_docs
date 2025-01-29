# Gateway system requirements

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-df241fcb-ef1d-4842-8377-b01dd338b865"/>
</head>


An API Gateway consists of multiple nodes that are installed on multiple on-premise machines. It is recommended that you install no more than four nodes in a Gateway.

:::note 

The instructions for setting up a Gateway are intended for systems engineers with an intermediate level of experience configuring a wide array of operating system features such as NFS, Samba, networking, firewalls, and file systems.

:::

:::caution

Anti-virus programs that scan the installation folder of your Gateway might conflict with the Gateway's operation. If the anti-virus program attempts to access the files while your Gateway is running, it can cause conflicts. Also, the anti-virus program could cause permission issues by being seen as a different user.

Therefore, disable the anti-virus program from running against the Gateway installation folder.

Or, program the anti-virus program to run on the Gateway installation folders during planned maintenance windows. Once the anti-virus program has been run, check the anti-virus quarantine folder for any valid files that may have been incorrectly quarantined.

:::

:::info

Installation of API Management and API Gateways are single-tenant. You can leverage API Gateways only in the account you install them. You cannot share them across accounts.

:::

## Supported operating systems

| Operating system | Version                                                                                                                                         |
|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| **Windows 32-bit**  | All versions of Windows that support the Java 11 Runtime, from Windows Vista to the most recent version                                         |
| **Windows 64-bit**  | All versions of Windows that support the Java 11 Runtime, from Windows Vista to the most recent version                                    |
| **Linux 32-bit**    | Red Hat Enterprise Linux 5.5 and above<br />Suse Enterprise Linux Server 10 SP2 and above<br />Any other Linux distribution that supports the Java 11 Runtime |
| **Linux 64-bit**    | Any other Linux distribution that supports the Java 11 Runtime                                                                            |

## Unsupported operating systems

Boomi does not officially support installations on Unix operating systems. Because Unix is not officially tested or supported by Boomi, the Boomi Support team cannot troubleshoot or support any Unix-related issues.

## Minimum hardware requirements

A Gateway can run on hardware ranging from business-class workstations to dedicated servers.

| Processor    | Specification                                  |
|--------------|------------------------------------------------|
| **Processor**| 1.8 GHz or higher Pentium 4 (or equivalent)    |
| **Memory**   | 2 GB RAM (minimum 2 GB dedicated to the Gateway)|
| **Hard disk**| 50 MB for run-time and configuration, 10 GB for data archiving |

## Minimum hardware requirements for high volumes of data

A Gateway that must process high volumes of data has these requirements.

:::note 

If you need to process approximately 100,000 authorizations per hour, or receive 100 authorizations per minute, that would be considered "high volume."

:::

| **Component** | **Description** |
| --- | --- |
| **Processor** |  Dual 64-bit processors or higher<br /> More processors allow for increased, simultaneous process executions |
| **Memory** |  4 GB of RAM (minimum 4 GB dedicated to the Gateway or minimum 6 GB dedicated to an Authentication Broker extended as a Gateway)<br /> More RAM allows for increased, simultaneous process executions |
| **Hard disk** |  100–200 GB of hard disk space<br /> Increase purging levels to minimize Gateway disk space |

## Minimum software requirements for Windows and Linux

|Component | Description|
| --- | --- |
| Java (for Windows and Linux) | Java 11 is required. Boomi internally tests each Java version prior to their release (Amazon Corretto). |
| Java runtime (for Windows and Linux) | • The Gateway is a Java application and requires Java version 11 to run.<br />• For Java 11, Boomi API Management supports only the Amazon Corretto Java Runtime. The installer detects whether your machine has Java 11. If a version is not found, the installer automatically downloads a private copy of Java 11 for the Gateway's use only.<br /> The private copy of the JRE is a complete JRE that is placed in your Gateway’s jre directory. The private JRE will not interfere with a shared JRE (one that you, not the installer, installed). It is not integrated into browsers and does not write registry entries. |

## Numbers of machines required

The minimum number of machines required for operation is two:

- One shared file server

- One Gateway node or Gateway

The minimum number of machines required for full failover is four:

- One shared file server

- One backup shared file server

- Two Gateway nodes

:::note 

To prepare for failover, you should keep one Gateway offline but mirror the primary Gateway to the secondary one on a regular basis. For more information about backup and disaster recovery best practices, watch the [Backup and Disaster Recovery video](https://www.youtube.com/watch?v=lHayf1HMLW8&feature=youtu.be).

:::

## Hardware requirements

All nodes in a Gateway do not have to be installed on computers with the same hardware configuration. The machines can have different amounts of RAM, a different type of CPU, etc.

## File system requirements

The primary requirement for running a Gateway is all nodes that are part of it must use the same installation directory.

Because the main use for clustering is to allow multiple machines to work together, this means that there is some form of shared file system in use. Due to the implementation of the Gateway support within the Atom, this file system must support file locking. Common examples of this are:

- An NFS file system with NFS locking enabled \(NLM support\)

- A Windows network share or drive

  :::note

  The file system must have the same operating system and architecture as all nodes in a Molecule, or Cloud Molecules in an Atom Cloud, otherwise file locking issues may occur. Boomi recommends SMB or CIFS for Windows or NFS for Linux.

  :::

## Network recommendations

For best performance, the various machines in a Gateway should have multicast \(UDP\) available between them. However, *this is not a requirement* , because the clustering protocol can be configured to work in a unicast-only \(TCP\) environment. See more information about network configuration for Gateways.

## Java Requirements

- If you are installing a Gateway or a Gateway node that will use forked execution, you must install a JDK or use the Boomi-provided Java from installation. We currently do not support any other JDK. The current supported versions are:

  - Amazon Corretto's Java SE Development Kit 11.0.8, if you are installing on Linux or Windows

- It is recommended that all machines in the Gateway have the same version of Java installed. Java must be located in the same directory on each machine \(i.e., C:/Program Files/Java/jre11 for Windows or /usr/local/java for Linux\).

- During installation, make sure Java is in your path and directed to the Java binary.

## Firewall rules

The nodes need to communicate with each other in order to cluster successfully.

| **Port Number** | **Description** |
| --------------- | ---------------- |
| 45588           | The UDP port that must be open if you are using multicast defaults. |
| 7800            | The TCP port that must be open if you are using unicast defaults. |
| 8077            | The TCP port that clients use to communicate with the API Gateway. |
| 18077           | The TCP port that clients use to communicate with the Developer Portal. |
| 17005           | The TCP port that other nodes use to connect to the Gateway database. |

## Host setup

Ensure that the host names of the machines resolve to valid IP addresses, not to the localhost adapter, which is 127.0.0.1.

If your system meets all of these requirements, you are ready to download the Gateway installer.