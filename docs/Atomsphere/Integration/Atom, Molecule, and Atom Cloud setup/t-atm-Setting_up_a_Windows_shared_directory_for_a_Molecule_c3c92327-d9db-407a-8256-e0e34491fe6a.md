# Setting up a Windows shared directory for a Molecule

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-c3c92327-d9db-407a-8256-e0e34491fe6a"/>
</head>


Create an empty directory on your Windows network drive and share using Windows file sharing.

## Before you begin

Before completing these steps for a Windows Boomi installation, download the local Molecule installer.

:::note
You must set up a shared directory when installing and using Molecules. Refer to the **File system requirements** section in the [Molecule System Requirements](../Atom,%20Molecule,%20and%20Atom%20Cloud%20setup/r-atm-Molecule_system_requirements_41f9a675-ab11-4f3b-bf51-1655394aba5b.md) topic for further information.
:::

## Procedure

1. Choose or create a user that runs the Molecule. This user shares the directory and runs the Molecule as a service on various Windows machines.

2. Create an empty directory on the Windows server.

    The Molecule installer uses uniform naming convention (UNC) paths to access a shared directory. Therefore, create this directory on a file server that can share it with the other machines used for the Molecule.

3. Share the directory by using Windows file sharing.

    Use a UNC path \(such as `\\somepath`\) to the network drive.

    :::caution
    Do *not* use a mapped network drive path \(such as `D:\`\) because you cannot use drive mappings for Windows services.
    :::

4. Ensure the user has Full Control privileges on the share and the entire installation folder path.

:::note

Grant privileges to the user explicitly rather than adding the user to an administration group.

:::

## Next steps

Next you need to install the first Molecule node.