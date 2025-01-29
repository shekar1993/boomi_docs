# Docker Molecule installation checklist \(Linux\) 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-fa5d6d80-5789-4cc3-925d-d927286ad558"/>
</head>


Before you can install the Docker Molecule on Linux, ensure that your computer meets the system requirements, synchronize clocks, and you consider failover and disaster recovery needs.

Complete the following prerequisites, then install the Docker Molecule on Linux.

## Check Docker Molecule system requirements 

Check the [Docker Molecule's system requirements](./r-atm-Docker_Molecule_system_requirements_f881d31a-880c-46ec-a222-1f27b8ab1604.md).

## Synchronize clocks 

Ensure that the clock on all nodes, including central storage services (such as NFS), is synchronized regularly using a Network Time Protocol (NTP) server.

## Install the Atom

After you complete the prerequisites above, complete the following tasks:

1. Download the local installer and select the 64–bit option.

2. Run the installer file.

   :::note

   Dockermust be running on the machine where you run the installer.

   :::

3. (Optional) See the section about maintaining s, s and s. You might want to modify how the runs, change default settings, or even remove it.