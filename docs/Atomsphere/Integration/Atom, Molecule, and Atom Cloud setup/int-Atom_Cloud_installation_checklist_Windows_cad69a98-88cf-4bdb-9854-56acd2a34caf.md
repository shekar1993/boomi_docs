# Atom Cloud installation checklist \(Windows\) 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-cad69a98-88cf-4bdb-9854-56acd2a34caf"/>
</head>


Before installing the Atom Cloud on Windows, ensure that your computer meets the system requirements, install PowerShell, synchronize clocks, and consider failover and disaster recovery needs. Also, ensure you have administrator access to the machine.

## Check Atom Cloud system requirements 

Check the [Atom Cloud's system requirements](./r-atm-Atom_Cloud_system_requirements_45494670-1aa1-452f-8bb2-1928778a1041.md).

## Install PowerShell 

The Molecule nodes require a minimum of Windows PowerShell version 2.0. Molecules also support later versions, such as Windows PowerShell 5.1 and PowerShell 7.0. Microsoft installs Windows PowerShell on every version starting with Windows 7 SP1 and Windows Server 2008 R2 SP1. For more information, see [Installing Windows PowerShell](https://docs.microsoft.com/en-us/powershell/scripting/windows-powershell/install/installing-windows-powershell?view=powershell-7.2) and [Installing PowerShell on Windows](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.2).

## Synchronize clocks and time zones

Ensure that the clock on all Molecule nodes, including central storage services (such as NFS), synchronize regularly using a Network Time Protocol (NTP) server. However, suppose the clocks on the machines are not closely synchronized. In that case, you are likely to encounter problems with:

- Clustering protocol
- Accurate time recording for cross-node action
- Accurate handling of files on the shared file system

Ensure that you set all machines to use the same time zone, including the devices on which the Molecule nodes run and the file servers you use. See your operating system’s documentation for instructions on setting your machines’ time zone.

## Consider failover and disaster recovery needs

For information about backup and disaster recovery best practices for Molecules and Atom Clouds, review the following resources in the Boomi Community:

- [Best Practices for Run Time High Availability and Disaster Recovery knowledge article](https://community.boomi.com/s/article/bestpracticesforruntimehighavailabilityanddisasterrecovery)
- [Backup and Disaster Recovery video](https://www.youtube.com/watch?v=lHayf1HMLW8&feature=youtu.be)

If you take point-in-time snapshots of your systems with a tool such as VMware, you do not have to take images of the nodes in a Molecule or Atom Cloud. The nodes do not contain any valuable information beyond operating system settings. However, if you want to take a snapshot of a Molecule or Atom Cloud node, do so only once at setup time and before starting the node.

:::note

Boomi does not recommend taking snapshots of Molecule or Atom Cloud nodes on an ongoing basis. Doing so can negatively impact the node's operational stability.

:::

## Obtain Administrator access 

Depending on the version of Windows you are running, you might need Administrator access to the system where you plan to install Cloud Molecules.

## Install the Atom Cloud 

After you complete the prerequisites, do the following tasks in order. Links to the tasks are at the bottom of the topic.

:::caution Warning

If there are Unicode characters in the directory path to where you intend to install the Atom Cloud, the installation will fail.

:::

1. Add an Atom Cloud.

2. Download the Cloud Molecule installer.

3. Set up a Windows shared directory for the Atom Cloud.

4. Install the initial Cloud Molecule on Windows.

5. Set up the Atom Cloud’s Windows service.

6. Install additional Cloud Molecules. You must do this on each machine that you add to the Atom Cloud.

7. (Optional) See the section about maintaining Atoms, Molecules and Atom Clouds. You might want to modify how the Atom Cloud runs, change default settings, or even remove the Atom Cloud.

8. (Optional) If you didn’t enable local storage when you ran the installer, recommends that you do so to reduce unnecessary network traffic. See the topic about enabling working data storage.