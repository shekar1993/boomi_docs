# Installing additional Gateways on Linux

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-06d3b303-4d03-4c37-99b9-59f0b304c752"/>
</head>


Install additional Gateways on Linux by mounting the NFS directory containing the initial Gateway installation and then create a link in the scripts directory to the Gateway installation script.

## Before you begin

Install the initial Gateway node.

## About this task

These steps must be executed on each machine that you are adding to the Gateway.

## Procedure

1.  On the machine on which you want to run the node, mount the NFS directory containing the initial Gateway installation \(`<gateway\_installation\_directory\>`\).

2.  Start the node manually by executing this command: `<gateway_installation_directory>/bin/atom start`

3.  **Optional:** For a SysV-style initialization where the node starts automatically at Linux startup, do the following:

    1.  Create a link in the /etc/init.d scripts directory to the `<gateway\_installation\_directory\>/bin/atom` script.

    2.  Configure the system to start this script by using existing SysV setup tools.

    :::note 
    
    The specifics of this step might vary depending on your Linux distribution.

    :::

4.  After the new node is started, verify that it has joined the Gateway by looking in the `<gateway\_installation\_directory/logs/<date\>.container.<machine\_IP\_address\>.log` file for a message like this:

    ```java
    INFO: Started <machine_IP_address> as CloudletAddress <machine_IP_address>:7800, initial cluster view: CloudletAddress <other_machine_IP_address:7800, CloudletAddress <machine_IP_address>:7800, ...
    ```