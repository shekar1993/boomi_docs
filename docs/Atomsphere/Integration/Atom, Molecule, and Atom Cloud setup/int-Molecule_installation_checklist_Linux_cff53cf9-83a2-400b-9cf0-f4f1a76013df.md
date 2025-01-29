# Molecule installation checklist (Linux)

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-cff53cf9-83a2-400b-9cf0-f4f1a76013df"/>
</head>



Before you can install the Molecule on Linux, ensure that your computer meets the system requirements, you synchronize clocks, you consider failover and disaster recovery needs, and you configure NFS storage.

## Check Molecule system requirements

Check the [Molecule’s system requirements](./r-atm-Molecule_system_requirements_41f9a675-ab11-4f3b-bf51-1655394aba5b.md).

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

**Note:** Boomi does not recommend taking snapshots of Molecule or Atom Cloud nodes on an ongoing basis. Doing so can negatively impact the node's operational stability.

## Configure NFS storage

- Ensure that you enable the nfslock daemon at startup and is running on the NFS client nodes.
- Ensure that you mount central storage in the same path on all nodes and that the Molecule or Atom Cloud service account has write access to the path.
- Ensure that you correctly identify users and groups across mounts. For example, viewing file details in NFS mounted directories displays valid user and group names.
  - The idmapd daemon often controls NFSv4. Ensure this is enabled and running on each node and NFS server.
- Leverage mount options that support binary execution through the share.
  - NFS client /etc/fstab example: `vers=3,noatime,nodiratime,rw,hard,intr,bg,addr=nfsserver.domain.com`
    - `vers=` — Specifies the NFS version the server must support. Depending on the client or server setup, this option might not be necessary.
    - `noatime` — Disables access time tracking on files. This information is generally unnecessary to maintain and can waste nontrivial I/O bandwidth.
    - `nodiratime` — This option is the same as `noatime` except for directories.
    - `rw` — Requires read and write access by the Atom.
    - `hard` — Requires NFS client operations to complete. Not using this option might cause silent data corruption.
    - `intr` — Allows signals to interrupt NFS operations. This prevents the system from stopping if the NFS server stops responding.
    - `bg` — Allows the system to start up even if the initial NFS mount fails. This prevents the system from stopping on startup if the NFS server is not available.
    - `addr=` — The address used for servers with multiple IP subnets on the same interface. Usually, this setting is not needed.
- If you are using NFSv3, both TCP and UDP ports must be open.
- If you are using NFSv4, it requires bind mounts to function.
  - NFS server /etc/fstab example: `/data/boomi/exports/data/boomi none bind 0 0`
  - NFS Server /etc/exports example: `/exports <ipaddr/32>(rw,insecure,no_subtree_check,nohide,fsid=0,sync,no_root_squash)`

## Install the Molecule

After you complete the prerequisites, complete the following tasks in order.

1. [Download the Molecule installer](t-atm-Downloading_the_Molecule_installer_edb2871c-e830-4756-b8fc-846cb5b81652.md).

2. [Set up Linux shared directories for the Molecule](t-atm-_Setting_up_Linux_shared_directories_94440785-fc85-48f9-a6f2-116759ac814b.md).

3. [Install the initial Molecule node on Linux](t-atm-Installing_the_initial_Molecule_node_on_Linux_0d5230d0-8d55-4b95-9fad-059e81d15caf.md).

4. [Install additional nodes](t-atm-Installing_additional_Molecule_nodes_on_Linux_3fec362e-e44e-4859-baa6-1882b6fb420a.md) on each machine (node) that you want to add to the .

5. (Optional) See the section about [maintaining Atoms, Molecules, and Atom Clouds](../Integration%20management/c-atm-Atom_Molecule_and_Cloud_management_and_configurat_43389c3c-e79f-4558-a50b-8a4a02f57be7.md). Clouds. You can modify how the runs, change default settings or even remove it.

6. (Optional) If you didn’t enable local storage when you ran the installer, recommends that you do to reduce unnecessary network traffic. See the topic [Molecule and Atom Cloud working data storage](../Integration%20management/c-atm-Molecule_and_Atom_Cloud_working_data_storage_b18ef1af-1e37-4a33-8712-d600f4e7b29d.md).

## Boomi Molecule on AWS or Azure 

If you are want to use AWS or Azure infrastructure to host your Molecule, you might want to consider the Boomi Molecule AWS Quickstart or the Boomi Kubernetes Molecule Quickstart to simplify your installation and configuration. The quickstarts can reduce hundreds of manual procedures to a few steps, so you can build a Boomi Molecule production environment quickly and can start using it immediately.

- [Molecule on AWS Quickstart](https://aws.amazon.com/solutions/partners/boomi-molecule/).
- [Boomi Kubernetes Molecule Quickstart](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/boomilp1650401905026.boomi-runtime-quickstarts?tab=PlansAndPrice)
- [AWS Kubernetes Boomi Blueprint Molecule](https://registry.terraform.io/modules/aws-ia/kubernetes-molecule/boomi/latest)

:::note

There are AWS credits available to cover the cost of initial proof-of-concept and trial deployments based on approval. To learn more, see the Boomiverse article [Deploy a Molecule Cluster on AWS with One Click](https://community.boomi.com/s/news/aBU1W0000004DlDWAU/deploy-a-boomi-molecule-cluster-on-aws-with-one-click).

:::