# Setting up the Gateway's Windows service 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-17cf6416-928a-4c4a-905c-e682cf5fd98d"/>
</head>


Set up the Gateway’s Windows service through the Administrative Tools on your machine’s Control Panel.

## Before you begin

Before completing these steps, install the initial Gateway.

## Procedure

1.  After installing the Gateway, go to **Control Panel** \> **Administrative Tools** \> **Services**.

2.  Right-click the Gateway service and select **Properties**.

3.  Click the **Log On** tab. By default the service will log on as "Local System Account".

4.  Change the service to log on as an account that has access to the shared directory.

5.  **Optional:** If the user is a service user and not a local administrator of the machine, then you need to grant the user permission to start and stop the service. See the following articles on Windows Service Security:

    [http://support.microsoft.com/kb/914392](http://support.microsoft.com/kb/914392)

    [http://technet.microsoft.com/en-us/library/cc742133%28WS.10%29.aspx](http://technet.microsoft.com/en-us/library/cc742133%28WS.10%29.aspx)

    [http://technet.microsoft.com/en-us/library/cc742037%28WS.10%29.aspx](http://technet.microsoft.com/en-us/library/cc742037%28WS.10%29.aspx)

6.  Get the SID of the Windows user you want to grant access to; typically this is in the form of: S-1-5-21-XXXX-XXXX-XXXX-XXXX

7.  Get the Service DACL of the Gateway service on a particular machine. Run the following command, replacing "Gateway Service Name" with the name of the service that was installed on your machine: `sc sdshow "Gateway Service Name"` This will return a long Service DACL string like this. \(This is *only* an example.\)

    ```
    D:(A;;CCLCSWRPWPDTLOCRRC;;;SY)(A;;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;BA)(A;;CCLCSWLOCRRC;;;IU)(A;;CCLCSWLOCRRCWP;;;SU)(A;;CR;;;AU)(A;;CCLCSWRPWPDTLOCRRC;;;PU)S:(AU;FA;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;WD)
    ```

8.  Add the following string to the DACL using the SID. Insert this before the S: at the end of the `DACL: (A;;CCLCRPWPRC;;; S-1-5-21-XXXX-XXXX-XXXX-XXXX)` This will grant Stop/Starting capabilities to this specific user on this specific machine. The new DACL will look like this. \(This is *only* an example.\)

    ```
    D:(A;;CCLCSWRPWPDTLOCRRC;;;SY)(A;;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;BA)(A;;CCLCSWLOCRRC;;;IU)(A;;CCLCSWLOCRRCWP;;;SU)(A;;CR;;;AU)(A;;CCLCSWRPWPDTLOCRRC;;;PU)(A;;CCLCRPWPRC;;;
    S-1-5-21-XXXX-XXXX-XXXX-XXXX)S:(AU;FA;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;WD)
    ```

9.  To set the new DACL run the following command, making sure to replace the appropriate variables. Use the DACL from your machine, *not* the one provided here. Remember to remove newlines.

    ```
    sc sdset "Gateway Service Name"
    "D:(A;;CCLCSWRPWPDTLOCRRC;;;SY)(A;;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;BA)(A;;CCLCSWLOCRRC;;;IU)(A;;CCLCSWLOCRRCWP;;;SU)(A;;CR;;;AU)(A;;CCLCSWRPWPDTLOCRRC;;;PU)(A;;CCLCRPWPRC;;;
    S-1-5-21-XXXX-XXXX-XXXX-XXXX)S:(AU;FA;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;WD)"
    ```

10. Start the service.

## Next steps

You can view the Gateway online by going to **Configure Server** \> **API Gateways**.

Next you can install additional Gateway nodes. 