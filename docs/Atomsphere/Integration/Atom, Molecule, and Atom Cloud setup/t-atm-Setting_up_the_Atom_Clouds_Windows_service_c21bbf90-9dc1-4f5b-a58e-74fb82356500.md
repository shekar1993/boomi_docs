# Setting up the Atom Cloud's Windows service 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-c21bbf90-9dc1-4f5b-a58e-74fb82356500"/>
</head>


By setting up the Molecule's Clouds Windows service, you can continuously run processes in the background without manual user intervention on the platform.

## Before you begin

Before completing these steps, install the initial Cloud Molecule.

## Procedure

1. After installing the Atom Cloud's first Cloud Molecule, go to **Control Panel** \> **Administrative Tools** \> **Services**.

2. Right-click the Cloud service and select **Properties**.

3. Click the **Log On** tab. By default the service logs on as the local system account.

4. Change the service to log on as an account with access to the shared directory.

5. If you are a service user and not a local administrator of the machine, then you need to grant the user permission to start and stop the service. See the following articles on Windows Service Security:

    - [http://support.microsoft.com/kb/914392](http://support.microsoft.com/kb/914392)

    - [http://technet.microsoft.com/en-us/library/cc742133%28WS.10%29.aspx](http://technet.microsoft.com/en-us/library/cc742133%28WS.10%29.aspx)

    - [http://technet.microsoft.com/en-us/library/cc742037%28WS.10%29.aspx](http://technet.microsoft.com/en-us/library/cc742037%28WS.10%29.aspx)

6. Get the security identifier \(SID\) of the Windows user to whom you want to grant access; typically this is in the form of: S-1-5-21-XXXX-XXXX-XXXX-XXXX

7. Get the Service DACL of the Cloud service on a particular machine. Run the following command, replacing "Cloud Service Name" with the name of the service installed on your machine: `sc sdshow "Cloud Service Name"` The result is a long Service DACL string: (The following is an example only.)

    ```java
    D:(A;;CCLCSWRPWPDTLOCRRC;;;SY)(A;;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;BA)(A;;CCLCSWLOCRRC;;;IU)(A;;CCLCSWLOCRRCWP;;;SU)(A;;CR;;;AU)(A;;CCLCSWRPWPDTLOCRRC;;;PU)S:(AU;FA;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;WD)
    ```

8. Add the following string to the DACL using the SID. Insert this before the S: at the end of the DACL: `(A;;CCLCRPWPRC;;; S-1-5-21-XXXX-XXXX-XXXX-XXXX)` This change grants stop and starting capabilities to this specific user on this specific machine. The new DACL will look like this. (The following is an example only.)

    ```java
    D:(A;;CCLCSWRPWPDTLOCRRC;;;SY)(A;;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;BA)(A;;CCLCSWLOCRRC;;;IU)(A;;CCLCSWLOCRRCWP;;;SU)(A;;CR;;;AU)(A;;CCLCSWRPWPDTLOCRRC;;;PU)(A;;CCLCRPWPRC;;; S-1-5-21-XXXX-XXXX-XXXX-XXXX)S:(AU;FA;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;WD)
    ```

9. To set the new DACL, run the following command, ensuring that you replace the appropriate variables. Use the DACL from your machine, not the one provided here. Remember to remove newlines.

    ```java
    sc sdset "Cloud Service Name" "D:(A;;CCLCSWRPWPDTLOCRRC;;;SY)(A;;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;BA)(A;;CCLCSWLOCRRC;;;IU)(A;;CCLCSWLOCRRCWP;;;SU)(A;;CR;;;AU)(A;;CCLCSWRPWPDTLOCRRC;;;PU)(A;;CCLCRPWPRC;;; S-1-5-21-XXXX-XXXX-XXXX-XXXX)S:(AU;FA;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;WD)"
    ```

10. Start the service.

## Results

You can view the Atom Cloud's Cloud Molecule online by going to the **Manage** menu and selecting **Atom Management**.

## Next steps

Next, you can install additional Cloud Molecules.