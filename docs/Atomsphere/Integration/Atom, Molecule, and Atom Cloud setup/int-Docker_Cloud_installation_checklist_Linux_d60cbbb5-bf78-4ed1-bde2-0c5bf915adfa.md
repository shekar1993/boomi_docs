# Docker Cloud installation checklist \(Linux\) 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-d60cbbb5-bf78-4ed1-bde2-0c5bf915adfa"/>
</head>


Before you can install the Docker Cloud on Linux, ensure that your computer meets the system requirements, synchronize clocks, and consider your failover and disaster recovery needs.

Complete the following prerequisites, then install the Docker Cloud on Linux.

## Check Docker Cloud system requirements 

Check the [Docker Cloud’s system requirements](./r-atm-Docker_Atom_Cloud_system_requirements_1ed1973f-e36c-4d1c-80c4-ed3652be1acb.mdx).

## Synchronize clocks 

Ensure that the Cloud’s server clock, including central storage services (such as NFS), is synchronized regularly using something like a network time protocol (NTP) server.

## Install the Docker Cloud 

After you complete the prerequisites above, complete the following tasks in order.

1. Download the local Cloud installer and select the Docker 64–bit option.

2. Run the Docker installer file.

   :::note

   Docker must be running on the machine where you run the installer.

   :::

3. (Optional) See the section about maintaining Atoms, Molecules and Atom Clouds. You might want to modify how the Cloud runs, change default settings, or even remove it.