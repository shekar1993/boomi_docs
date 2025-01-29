# Setting up the Molecule's Windows service

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-ad1bdda0-6a7f-497d-b82d-ef6d2a94cfef"/>
</head>


Configure services for a from your computer's Control Panel.

## Before you begin

Before completing these steps, install the initial Molecule node.

## Procedure

1. After installing the Molecule, go to **Control Panel** \> **Administrative Tools** \> **Services**.

2. Right-click the service and select **Properties**.

3. Click the **Log On** tab. By default the service logs on as the LocalSystem account.

4. Change the service to log on as an account with access to the shared directory.

5. (Optional) If the user is a service user and not a local administrator of the machine, then you need to grant the user permission to start and stop the service. See the following article on Service Security: [Service Security and Access Rights](https://docs.microsoft.com/en-us/windows/win32/services/service-security-and-access-rights)

6. Get the security ID (SID) of the Windows user to whom you want to grant access; typically this is in the form of: S-1-5-21-XXXX-XXXX-XXXX-XXXX

7. Get the Service DACL of the Molecule service on a particular machine. Run the following administrative command prompt, replacing "Molecule Service Name" with the name of the service installed on your machine: `sc sdshow "Molecule Service Name`" This returns a long Service DACL string like the following examples:

    ```java
    D:(A;;CCLCSWRPWPDTLOCRRC;;;SY)(A;;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;BA)(A;;CCLCSWLOCRRC;;;IU)(A;;CCLCSWLOCRRCWP;;;SU)(A;;CR;;;AU)(A;;CCLCSWRPWPDTLOCRRC;;;PU)S:(AU;FA;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;WD)
    ```

    :::info Attention

    If you do not use an administrative command prompt, the end of the DACL string does not appear.

    :::

8. Add the following string to the DACL using the security ID \(SID\). Insert this before the S: at the end of the DACL: `(A;;CCLCRPWPRC;;; S-1-5-21-XXXX-XXXX-XXXX-XXXX)` This grants stop and starting capabilities to this specific user on this specific machine. The following shows the new DACL:

    ```java
    D:(A;;CCLCSWRPWPDTLOCRRC;;;SY)(A;;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;BA)(A;;CCLCSWLOCRRC;;;IU)(A;;CCLCSWLOCRRCWP;;;SU)(A;;CR;;;AU)(A;;CCLCSWRPWPDTLOCRRC;;;PU)(A;;CCLCRPWPRC;;; S-1-5-21-XXXX-XXXX-XXXX-XXXX)S:(AU;FA;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;WD)
    ```

9. To set the new DACL, run the following command, making sure to replace the appropriate variables. Use the DACL from your machine, not the one provided here. Remember to remove newlines.

    ```java
    sc sdset " Service Name" "D:(A;;CCLCSWRPWPDTLOCRRC;;;SY)(A;;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;BA)(A;;CCLCSWLOCRRC;;;IU)(A;;CCLCSWLOCRRCWP;;;SU)(A;;CR;;;AU)(A;;CCLCSWRPWPDTLOCRRC;;;PU)(A;;CCLCRPWPRC;;; S-1-5-21-XXXX-XXXX-XXXX-XXXX)S:(AU;FA;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;WD)"
    ```

10. Start the service.

## Results

You can view the Molecule in the Integration user interface by going to the **Manage** menu and selecting **Atom Management**.

## Next steps

Next you can install additional Molecule nodes.