# Setting up a Windows shared directory for an Atom Cloud 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-abdd64ac-b603-44ec-8691-52eacd34ffc0"/>
</head>


Set up a shared directory on your Windows computer to enable communication between Cloud Molecules and to share information, including data, results, and so on. This action is required when installing and using Atom Clouds.

## Before you begin

Before completing these steps, download the Cloud Molecule installer.

## Procedure

1. Choose or create a user to run the Atom Cloud. This user is used to share the directory as well as to run the Cloud as a service on the various Windows machines.

2. Create an empty directory on the Windows server.

    The Cloud Molecule installer uses uniform naming convention \(UNC\) paths to access a shared directory. Therefore, create the directory on a file server that can share it with the other machines used for the Atom Cloud.

3. Share the directory by using Windows file sharing.

    Do not use a mapped network drive path \(such as `D:\`\) because you cannot use drive mappings for Windows services. Instead, use a UNC path \(such as `\\somepath`\) to the network drive.

4. Make sure the user has Full Control privileges on the share and the entire Atom installation folder path.

:::note

Grant privileges to users explicitly rather than adding the user to an administration group.

:::

## Next steps

Next you need to install the Atom Cloud's first Cloud Molecule.