# Installing additional Molecule nodes on Windows

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-8129507e-2ee1-48eb-a088-9b48ba3a2ad7"/>
</head>


After installing the initial Molecule node on your Windows operating system, install additional Molecule nodes to give your application more processing power.

## Before you begin

Before completing these steps, set up the Molecule’s Windows service.

:::caution Warning

If there are Unicode characters in the directory path to where you intend to install the Molecule nodes, the installation will fail.

:::

## About this task

You must run these steps on each machine you add to the Molecule:

## Procedure

1. Open PowerShell.

2. On the machine on which you want to run the node, navigate to the bin directory of the full UNC path of the Molecule, such as `cd //<host_name>/Share/<molecule_installation_directory>/bin` where `<host_name>` is the name of the machine.

3. Temporarily set the Execution Policy for to be unrestricted for this session. In , run the following command: `set-ExecutionPolicy Unrestricted`.

4. Run the node-install.ps1 file using the command: `./node-install.ps1`

5. Open **Control Panel** > **Administrative Tools** > **Services**.

6. Right-click the Molecule service and select **Properties**.

7. Click the **Log On** tab.Change the service to log on as the user that you created for the Molecule.

8. (Optional) If the user is a Service User and not a Local Administrator of the machine, then you change the Service DACL as described in the instructions for installing the initial node.

9. Start the service.

10. After starting the new node, verify that it joined the Molecule by looking in the log at `<molecule_installation_directory/logs/<date>.container.<machine_IP_address>.log` file for a message, such as:

    ```java
    INFO: Started <machine_IP_address> as CloudletAddress <machine_IP_address>:7800, initial cluster view: CloudletAddress <other_machine_IP_address:7800, CloudletAddress <machine_IP_address>:7800, ...
    ```