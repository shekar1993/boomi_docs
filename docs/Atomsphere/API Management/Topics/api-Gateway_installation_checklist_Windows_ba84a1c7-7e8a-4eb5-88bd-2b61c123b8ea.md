# Gateway installation checklist \(Windows\) 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-ba84a1c7-7e8a-4eb5-88bd-2b61c123b8ea"/>
</head>


Before you can install an API Gateway on Windows, ensure that your computer meets the system requirements, Powershell is installed, clocks are synchronized, and you have administrator access for the machine.

Complete the following prerequisites, then install the Gateway on Windows.

## Check Gateway system requirements 

Check the [Gateway’s system requirements](/docs/Atomsphere/API%20Management/Topics/api-Gateway_system_requirements_df241fcb-ef1d-4842-8377-b01dd338b865.md).

## Install Powershell 

An API Gateway requires Powershell version 2.0 to be installed. Powershell 2.0 is included in Windows 7 and Windows 2008. If you are installing Powershell on an older version of Windows, install Version 2.0.

## Synchronize clocks and timezones 

Ensure that the Gateway’s server clock, including central storage services \(e.g., NFS\), is synchronized regularly using something like NTP. If the clocks on the machines are not closely synchronized, you are likely to encounter problems with: the clustering protocol, accurate time recording for cross-node actions, and accurate handling of files on the shared file system.

Ensure that all machines are set to use the same time zone. This includes the machines on which the Gateway runs, as well as file servers being used. See your operating system's documentation for instructions on how to set your machines' time zone.

## Consider failover and disaster recovery needs 

If you have a multi-node Gateway behind a load balancer for which health checks are configured, in the event the head node fails, failover occurs automatically. The load balancer detects the failure and routes requests for both the Gateway and the Developer Portal to the other node\(s\). If the Gateway is local and uses an HTTP proxy to connect to the Internet, the proxy continues to work.

For information about backup and disaster recovery best practices for Gateways, review the following resources:

-   [Best Practices for Run Time High Availability and Disaster Recovery](https://community.boomi.com/s/article/bestpracticesforruntimehighavailabilityanddisasterrecovery) Boomi Community article.
-   [Backup and Disaster Recovery video](https://www.youtube.com/watch?v=lHayf1HMLW8&feature=youtu.be)

## Obtain Administrator access 

Depending on the version of Windows you are running, you might require Administrator access to the system where you plan to install the Gateway.

## Install the Gateway 

After you have completed the prerequisites above, complete the following tasks.

1.  Download the Gateway installer.

2.  Set up a Windows shared directory for the Gateway.

3.  Install the local Gateway on Windows.

4.  Set up the Gateway's Windows service.

5.  Install additional Gateways. This must be done on each Windows machine that will be added to the Gateway.

6.  **Optional:** See the section about maintaining Gateways. You may want to modify how the Gateway runs, change default settings or even remove it.

7.  **Optional:** If you didn't enable local storage when you ran the installer, it is recommended that you do so in order to reduce unnecessary network traffic.
