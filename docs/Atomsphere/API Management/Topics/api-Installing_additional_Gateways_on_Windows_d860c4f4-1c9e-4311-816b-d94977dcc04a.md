# Installing additional Gateways on Windows 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-d860c4f4-1c9e-4311-816b-d94977dcc04a"/>
</head>


Install additional Gateways using a Powershell command window to navigate to the bin directory, set the Execution Policy to be unrestricted, and execute the node-install.psl file.

## Before you begin

Before completing these steps, set up the Gateway’s Windows service.

## About this task

These steps must be executed on each machine that will be added to the Gateway.


## Procedure

1.  Run a Powershell command window.

2.  On the machine on which you want to run the node, navigate to the bin directory of the full UNC path of the Gateway, e.g., `cd //<host\_name\>/Share/<gateway\_installation\_directory\>/bin`.

3.  Temporarily set the Execution Policy for Powershell to be unrestricted for this session.

4.  In the Powershell window, execute the following: `set-ExecutionPolicy Unrestricted`

5.  Execute the node-install.ps1 file using the following: `./node-install.ps1`

6.  Go to **Control Panel** \> **Administrative Tools** \> **Services**.

7.  Right-click the Gateway service that was created and select **Properties**.

8.  Click the **Log On** tab. Change the service to log on as the user that you created for the Gateway.

9.  If the user is a Service User and not a Local Administrator of the machine, then you need to change the Service DACL as described in the instructions for installing the initial Gateway.

10. Start the service.

11. After the new node is started, verify that it has joined the Gateway by looking in the `<gateway\_installation\_directory/logs/<date\>.container.<machine\_IP\_address\>.log` file for a message like:

    ```java
    INFO: Started <machine_IP_address> as CloudletAddress <machine_IP_address>:7800, initial cluster view: CloudletAddress <other_machine_IP_address:7800, CloudletAddress <machine_IP_address>:7800, ...
    ```