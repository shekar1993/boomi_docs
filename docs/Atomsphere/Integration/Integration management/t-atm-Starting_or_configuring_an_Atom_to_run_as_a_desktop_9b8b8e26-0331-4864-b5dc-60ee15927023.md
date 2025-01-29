# Starting or configuring an Atom to run as a desktop application 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-9b8b8e26-0331-4864-b5dc-60ee15927023"/>
</head>


You can start or configure Atoms to run as a desktop application even though that is not  Integration's recommended running environment.

## About this task

The installer installs and starts the Atom, Molecule node, or Cloud Molecule as a Windows service, which Boomi recommends as your running environment, if it is technically possible based on your needs. If you plan to not run the Atom, Molecule node, or Cloud Molecule as a Windows service, disable the service or set it to manual startup. If the service is not disabled or set to manual startup, manually stop it again upon rebooting before you can use the desktop version.

You can also use this procedure to start or configure Molecule nodes and Cloud Molecules.


## Procedure

1.  Manually stop the Windows service.

2.  Select **Control Panel** \> **Administrative Tools** \> **Services**.

3.  In the Services window locate your Atom, Molecule node, or Cloud Molecule in the Name column.

4.  Right-click it and select **Properties**.

5.  In the Startup Type list, select **Manual** or **Disabled**.

6.  Do one of the following:

    -   Select **All Programs** \> **Boomi** \> **\<atom\_name\>** \> **Desktop Atom**.

    -   Select **All Programs** \> **Boomi** \> **\<molecule\_node\_name\>** \> **Desktop Molecule**.

    -   Select **All Programs** \> **Boomi** \> **\<cloud\_molecule\_name\>** \> **Desktop Cloud**.

7.  If a Windows alert dialog opens and ask you to confirm that you want to run the file, click **Yes**.