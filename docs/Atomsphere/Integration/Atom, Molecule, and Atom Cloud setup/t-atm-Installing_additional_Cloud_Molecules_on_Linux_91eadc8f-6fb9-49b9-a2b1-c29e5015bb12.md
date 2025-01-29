# Installing additional Cloud Molecules on Linux

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-91eadc8f-6fb9-49b9-a2b1-c29e5015bb12"/>
</head>


After installing the initial Cloud Molecule on your Linux operating system, install additional Cloud Molecule nodes to give your application more processing power.

## Before you begin

Before completing these steps, install the initial Cloud Molecule.

## About this task

You must run these steps on each machine you add to the Atom Cloud.

## Procedure

1. On the machine on which you want to run the Cloud Molecule, mount the NFS directory containing the initial Cloud Molecule installation (`<cloud\_installation\_directory\>`).

2. Start the Cloud Molecule manually by running this command:

    `<cloud_installation_directory>/bin/atom` start

3. For a SysV-style initialization where the Cloud Molecule starts automatically at Linux startup, do the following:

    1. Create a link in the /etc/init.d scripts directory to the `<cloud\_installation\_directory\>/bin/atom` script.

    2. Configure the system to start this script by using existing SysV setup tools.

    :::note

    The specifics of this step might vary depending on your Linux distribution.

    :::

4. After starting the new Cloud Molecule, verify that it joined the Atom Cloud by looking in the `\<cloud\_installation\_directory/logs/<date\>.container.\<machine\_IP\_address\>.log` file for a message like this:

    ```java
    INFO: Started <machine_IP_address> as CloudletAddress <machine_IP_address>:7800, initial cluster view: CloudletAddress <other_machine_IP_address:7800, CloudletAddress <machine_IP_address>:7800, ...
    ```