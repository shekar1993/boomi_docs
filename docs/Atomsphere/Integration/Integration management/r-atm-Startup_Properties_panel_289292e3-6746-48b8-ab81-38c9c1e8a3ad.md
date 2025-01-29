# Startup Properties panel 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-289292e3-6746-48b8-ab81-38c9c1e8a3ad"/>
</head>


The Startup Properties panel appears on the Atom Management page \(**Manage** \> **Atom Management**\).

When you click an Atom, Molecule, or Atom Cloud in the Atoms list or the Environments list, its startup properties appear on the panel. When you view the properties of an Atom Cloud, you see only properties for the head node.

:::note
If you do not own the selected Atom Cloud, or if the selected Atom is attached to an Atom Cloud, this panel will not be visible to you.
:::

:::note
The default value for the provisioned Atom is based on the server currently running in your environment.
:::

Some properties are updated only when a container is restarted. A banner displays the last date and time that the properties displayed on the panel were updated.

## Atom Properties 

**Atom Architecture**  
Architecture of the Atom, Molecule, or Atom Cloud. Possible values are:

 -   64-bit

 -   32-bit

**Atom Time Zone**  
System time zone for the computer on which the Atom, Molecule, or Atom Cloud is installed.

**Maximum RAM Available**  
Maximum RAM available to processes that are deployed to the Atom, Molecule, or Atom Cloud.

**Atom Directory Free Space**
Total amount of free disk space on the drive that holds the Atom, Molecule, or Atom Cloud installation directory. If your system does not support reporting this information, this value is blank.

**Last Atom Restart**
Date and time at which the Atom, Molecule, or Atom Cloud was most recently started or restarted.

**Default Character Encoding**
Default character encoding for data processed by the Atom, Molecule, or Atom Cloud. Common values include:

-   UTF-8 — default under Linux OS

-   windows-1252 — default under Windows OS

-   US-ASCII

**Unlimited Strength Cryptography**  
By default, Java is installed with limited strength cryptography. Certain functionality requires full strength cryptography. If the Java Cryptography Extension \(JCE\) Unlimited Strength Jurisdiction Policy Files are installed, this value is set to True.

**Infrastructure Provider**  
The infrastructure provider where the Atom, Molecule, or Atom Cloud is running. Possible values include:

-   AWS \(Amazon Web Services\)

-   AZURE \(Microsoft Azure\)

-   GCE \(Google Compute Engine\)

-   KUBERNETES

-   QUICKSTART

**Containerized**  
Reflects whether the Atom, Molecule, or Atom Cloud is running via a container image. If the Atom, Molecule, or Atom Cloud is not running on a container image, this property does not display.

**Container Image Version**  
The container image version that the Atom, Molecule, or Atom Cloud is running. Possible values are determined by the image version, for example 5.0.2 for Docker v5, 4.0.0 for Docker v4, 3 for Docker 3, and 2 for legacy Docker images. If the Atom, Molecule, or Atom Cloud is not running on a container image, this property does not display.

**Atom Installation Directory**  
The directory where the Atom, Molecule, or Atom Cloud is installed.

## Software Properties 

**OS Name**  
Operating system in which the Atom, Molecule, or Atom Cloud is deployed.

**OS Version**  
Version of the operating system in which the Atom, Molecule, or Atom Cloud is deployed.

**OS Architecture**  
Architecture implemented for the microprocessor that is executing the Atom, Molecule, or Atom Cloud. Common values include:

-   amd64

-   i386

-   ppc

-   x86

-   x86\_64

**Java Virtual Machine Name**  
Name of the Java virtual machine to which the Atom, Molecule, or Atom Cloud is deployed.

**Java Version**  
Version number of the Java Runtime \(in the case of an Atom\) or the JDK \(in the case of a Molecule or Atom Cloud\) in which the Atom, Molecule, or Atom Cloud executes.

**Java Home**  
The directory where Java is installed. This is the path that your Atom, Molecule, or Atom Cloud uses to access the Java Runtime.

## Hardware Properties

**Maximum Open Files Allowed**  
\(Linux only\) The maximum number of files that can be open simultaneously.

Open files include both files that are open for read/write activity and open network connections.

**Max CPU Time**  
\(Linux only\) The average amount of time that a process takes to complete. The upper limit is typically set to unlimited and is represented in seconds.

**Max File Size**  
\(Linux only\) The maximum file or folder size that the process can create.

**Max Data Size**  
\(Linux only\) Specified in kilobytes, this property indicates the maximum size of the process’ data segment.

**Max Stack Size**  
\(Linux only\) Specified in kilobytes, this property indicates the amount of memory a process can allocate on the stack.

**Max Process**  
\(Linux only\) The maximum number of processes that are possible for creation within the system.

**Max File Locks**  
\(Linux only\) The maximum number of locks that a process may establish.

**System CPU Count**  
Number of central processing units \(CPUs\) in the system on which the Atom, Molecule, or Atom Cloud is installed.

**Total System Memory**  
Total amount of memory, in bytes, in the system on which the Atom, Molecule, or Atom Cloud is installed. If your system does not support reporting this information, this value is blank.

**Temporary Directory Free Space**  
Total amount of free disk space, in bytes, on the drive that holds the system’s Temp directory. If your system does not support reporting this information, this value is blank.