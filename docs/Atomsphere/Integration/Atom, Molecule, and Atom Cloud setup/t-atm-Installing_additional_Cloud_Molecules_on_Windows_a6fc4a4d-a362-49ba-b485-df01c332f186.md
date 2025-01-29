# Installing additional Cloud Molecules on Windows 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-a6fc4a4d-a362-49ba-b485-df01c332f186"/>
</head>


After installing the initial Cloud Molecule on your Windows operating system, install additional Molecule nodes to give your application more processing power.

## Before you begin

Before completing these steps, set up the Atom Cloud's Windows service.

:::caution Warning

If there are Unicode characters in the directory path to where you intend to install the Cloud Molecule nodes, the installation will fail.

:::

## About this task

Run these steps on each machine you add to the Atom Cloud.

## Procedure

1. Open a PowerShell command window.

2. On the machine on which you want to run the Cloud Molecule, navigate to the /bin directory of the full UNC path of the Cloud, such as `cd //<host_name>/Share/<cloud_installation_directory>/bin`.

3. Temporarily set the Execution Policy for PowerShell to be unrestricted for this session.

4. In the Powershell window, run the following: `set-ExecutionPolicy Unrestricted`

5. Run the node-install.ps1 file using the following: `./node-install.ps1`

6. Go to **Control Panel** > **Administrative Tools** > **Services**.

7. Right-click the Cloud service you created and select **Properties**.

8. Click the **Log On** tab. Change the service to log on as the user created for the Atom Cloud.

9. If the user is a Service User and not a Local Administrator of the machine, they need to change the Service DACL as described in the instructions for installing the initial Cloud Molecule.

10. Start the service.

11. After starting the new Cloud Molecule, verify that it joined the Cloud by looking in the `\<cloud\_installation\_directory/logs/<date\>.container.\<machine\_IP\_address\>.log` file for a message like:

    ```java
    INFO: Started <machine_IP_address> as CloudletAddress <machine_IP_address>:7800, initial cluster view: CloudletAddress <other_machine_IP_address:7800, CloudletAddress <machine_IP_address>:7800, ...
    ```