# Installing additional Molecule nodes on Linux

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-3fec362e-e44e-4859-baa6-1882b6fb420a"/>
</head>


After installing the initial Molecule node on your Linux operating system, install additional Molecule nodes to give your application more processing power.

## Before you begin

Before completing these steps, install the initial node.

## About this task

You must run these steps on each machine that you are adding to the .

## Procedure

1. On the machine on which you want to run the node, mount the NFS directory containing the initial installation \(\<molecule\_installation\_directory\>\) where `<molecule_installation_directory>` is the name of the directory.

2. Start the node manually by running this command:

    `<molecule_installation_directory>/bin/atom start`

3. (Optional) For a SysV-style initialization where the node starts automatically at startup, do the following:

    1. Create a link in the /etc/init.d scripts directory to the \<molecule\_installation\_directory\>/bin/atom script.

    2. Configure the system to start this script by using existing SysV setup tools.

    :::note
    
    The specifics of this step might vary depending on your distribution.

    :::

4. After starting the new node, verify that it joined the by looking in the `<molecule_installation_directory/logs<date>.container.<machine_IP_address>.log` file for a message like this:

    ```java
    INFO: Started <machine_IP_address> as CloudletAddress <machine_IP_address>:7800, initial cluster view: CloudletAddress <other_machine_IP_address:7800, CloudletAddress <machine_IP_address>:7800, ...
    ```