# Atom Cloud installation checklist \(Linux\) 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-5f934fee-4eac-4386-915a-ea37ce8d3653"/>
</head>


Before installing the Atom Cloud on Linux, ensure that your computer meets the system requirements. Also, ensure that you have set the open file limits and checked the Atom Cloud service account, synchronized clocks, configured failover, considered disaster recovery needs, and configured NFS storage.

After completing the prerequisites, install the Atom Cloud on Linux.

## Check Atom Cloud system requirements 

Check the [Atom Cloud's system requirements](./r-atm-Atom_Cloud_system_requirements_45494670-1aa1-452f-8bb2-1928778a1041.md).

## Set open file limits 

Set the number of open files descriptors on the computer or for the user who runs the Atom Cloud. recommends that you set this to at least 8192.

## Check service account

Ensure that the service account responsible for running the Atom Cloud service has the same user identifier (UID) or the group identifier (GUID) on all nodes.

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


## Install the Atom Cloud 

After you complete the prerequisites, do the following tasks. Links to the tasks are at the bottom of the topic.

1. Add an Atom Cloud.

2. Download the Cloud Molecule installer.

3. Set up Linux shared directories.

4. Install the initial Cloud Molecule on Linux.

5. Install additional Cloud Molecules. You must do this on each computer you add to the Atom Cloud.

6. (Optional) See the section about maintaining Atoms, Molecules and Atom Clouds. You might want to modify how the Atom Cloud runs, change default settings, or even remove it.

7. Each node in a Molecule, or Cloud Molecules in an Atom Cloud, does not have to be installed on computers with the same hardware configuration. The machines can have different amounts of RAM, CPU types, and so on. Sets the component on which the following extension values apply:

   (Optional) If you did not enable local storage when you ran the installer, recommends that you do so to reduce unnecessary network traffic. See the topic about enabling working data storage.