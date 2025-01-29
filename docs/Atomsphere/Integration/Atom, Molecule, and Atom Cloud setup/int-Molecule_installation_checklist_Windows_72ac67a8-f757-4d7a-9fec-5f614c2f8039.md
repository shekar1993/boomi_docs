# Molecule installation checklist (Windows)

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-72ac67a8-f757-4d7a-9fec-5f614c2f8039"/>
</head>


Before installing the Molecule on Windows:

- Ensure that your computer meets the system requirements, including access to PowerShell.
- Synchronize clocks.
- Consider failover and disaster recovery needs.
- You have administrator access to the machine.

## Check Molecule system requirements

Check the [Molecule’s system requirements](./r-atm-Molecule_system_requirements_41f9a675-ab11-4f3b-bf51-1655394aba5b.md).

**Warning:** If there are Unicode characters in the directory path to where you intend to install the Molecule, the installation will fail.

## Install PowerShell

The Molecule nodes require a minimum of Windows PowerShell version 2.0. Molecules also support later versions, such as Windows PowerShell 5.1 and 7.0. Windows installs PowerShell on every version starting with Windows 7 SP1 and Windows Server 2008 R2 SP1. For more information, refer to topics: [Installing Windows PowerShell](https://docs.microsoft.com/en-us/powershell/scripting/windows-powershell/install/installing-windows-powershell?view=powershell-7.2) and [Installing PowerShell on Windows](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.2).

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

Depending on the version of Windows you are running, you might require Administrator access to the system where you plan to install Molecule nodes.

## Install the Molecule

1. Download the Molecule installer.

2. Set up a Windows shared directory for the Molecule.

3. Install the initial Molecule node on Windows.

4. Set up the Molecule’s Windows service.

5. Install additional Molecules nodes. You must do this on each Windows machine that you include in the Molecule.

6. (Optional) See the section about [maintaining Atoms, Molecules, and Atom Clouds](../Integration%20management/c-atm-Atom_Molecule_and_Cloud_management_and_configurat_43389c3c-e79f-4558-a50b-8a4a02f57be7.md). You might want to modify how the Molecule runs, change default settings or even remove it.

7. (Optional) If you didn’t enable local storage when you ran the installer, Boomi recommends that you do so to reduce unnecessary network traffic. Refer to the topic about [enabling working data storage](../Integration%20management/t-atm-Enabling_local_storage_for_a_Molecule_or_Atom_Cloud_8861cfb6-79fa-46bc-a957-a4a3cfa45d5f.md).
