# Gateway installation checklist \(Linux\) 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-1236d6e8-d9fc-4176-a70d-42e93ab1d486"/>
</head>


Before you can install the API Gateway on Linux, ensure that your computer meets the system requirements, clocks are synchronized, and NFS storage is configured.

Complete the following prerequisites, then install the API Gateway on Linux..

## Check Gateway system requirements 

Check the Gateway’s system requirements.


## Synchronize clocks and time zones 

Ensure that the Gateway’s server clock, including central storage services (e.g., NFS), is synchronized regularly using something like NTP. If the clocks on the machines are not closely synchronized, you are likely to encounter problems with: the clustering protocol, accurate time recording for cross-node actions, and accurate handling of files on the shared file system.

Ensure that all machines are set to use the same time zone. This includes the machines on which the Gateway nodes run, as well as file servers being used. See your operating system's documentation for instructions on how to set your machines' time zone.

## Consider failover and disaster recovery needs 

If you have a multi-node Gateway behind a load balancer for which health checks are configured, in the event the head node fails, failover occurs automatically. The load balancer detects the failure and routes requests for both the Gateway and the Developer Portal to the other node(s).

For information about backup and disaster recovery best practices for Gateways, review the following resources:

-   [Best Practices for Run Time High Availability and Disaster Recovery](https://community.boomi.com/s/article/bestpracticesforruntimehighavailabilityanddisasterrecovery) Boomi Community article.
-   [Backup and Disaster Recovery video](https://www.youtube.com/watch?v=lHayf1HMLW8&feature=youtu.be)

## Configure NFS storage 

-   Make sure the nfslock daemon is enabled at startup and is running on the NFS client nodes.

-   Make sure this central storage is mounted in the same path on all nodes and that the Broker account has write access to the path.

-   Make sure users and groups are correctly identified across mounts. Viewing file details in NFS mounted directories should display valid user and group names.

    -   In NFSv4, this is often controlled by the idmapd daemon. Ensure this is enabled and running on each node and NFS server.

-   Leverage mount options that support binary execution via the share.

    -   NFS client /etc/fstab example: `vers=3,noatime,nodiratime,rw,hard,intr,bg,addr=nfsserver.domain.com`

        -   `vers=` - Specifies the NFS version the server must support. This option may not be necessary, depending on the client/server setup.

        -   `noatime` - Disables "access time" tracking on files. This information is generally unnecessary to maintain and can waste nontrivial IO bandwidth.

        -   `nodiratime` - This is the same as `noatime` except for directories.

        -   `rw` - Read and write access is required by the Atom.

        -   `hard` - Requires NFS client operations to complete. Not using this option may cause silent data corruption.

        -   `intr` - Allows signals to interrupt NFS operations. This will prevent the system from hanging if the NFS server stops responding.

        -   `bg`- Allows the system to start up even if the initial NFS mount fails. This will prevent the system from hanging on startup if the NFS server is not yet available.

        -   `addr=` - The address used for servers with multiple IP subnets on the same interface. Usually this setting is not needed.

-   If you are using NFSv4, bind mounts are required in order to function.
    -   NFS server /etc/fstab example: `/data/boomi/exports/data/boomi none bind 0 0`
    -   NFS Server /etc/exports example: `/exports <ipaddr/32>(rw,insecure,no_subtree_check,nohide,fsid=0,sync,no_root_squash)`

## Install the API Gateway 

After you have completed the prerequisites, complete the following tasks.

1.  Download the Gateway installer.

2.  Set up Linux shared directories for the Gateway.

3.  Install the local Gateway on Linux.

4.  Install additional Gateways. This must be done on each machine \(node\) that will be added to the Gateway.

5.  **Optional:** See the section about maintaining Gateways. You may want to modify how the Gateway runs, change default settings or even remove it.

6.  **Optional:** If you didn't enable local storage when you ran the installer, it is recommended that you do so in order to reduce unnecessary network traffic.
