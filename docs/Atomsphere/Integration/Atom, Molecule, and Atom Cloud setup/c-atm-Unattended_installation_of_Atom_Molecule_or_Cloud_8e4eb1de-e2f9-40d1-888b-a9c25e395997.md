# Unattended installation of an Atom, Molecule, or Atom Cloud 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-8e4eb1de-e2f9-40d1-888b-a9c25e395997"/>
</head>


You can use command-line code run an unattended (or silent) installation.

Open a command prompt in Windows or Linux and use commands to install your Atom, Molecule, or Atom Cloud. Using the command line is useful to automate the installation process.

The system where you are installing an Atom, Molecule, or Atom Cloud must meet the applicable system requirements. For more information, see the links in Related References:

:::note

This method of installation uses the unattended mode option (-q) of the install4j installer.

:::

The command-line code includes the following variables. Required options are listed first, followed by optional ones.

- **username** - (Required in conjunction with `password`; alternative to `installToken`) Specifies the Platform user name.
 
- **password** - (Required in conjunction with `username`; alternative to `installToken`) Specifies the password associated with the Platform user.

- **installToken** - (Alternative to `username` and `password`) Specifies a unique installer token.

  A token is valid only for the account for which it was generated. Tokens expire after a set amount of time ranging from 30 minutes to 24 hours.

- **accountId** - (Required with `username` and `password`; invalid with `installToken`) Specifies your Platform account identifier.

- **cloudId** - (For Atom Cloud installation, required with `username` and `password`; invalid with `installToken`) Specifies the cloud identifier.

- **dir** - (Optional) The directory in which to install the Atom, Molecule, or Atom Cloud. If not specified, this variable defaults to the home directory of the user installing the container. For example, `home/<user>/Boomi_AtomSphere/<containerType>/<containerType_nameOfHost>`

- **environmentId** - (Optional) Specifies the environment to which a newly installed container is attached. If you do not select an environment during installation, the new container appears in the list of Unattached Atoms on the Atom Management page.

- **jdkPath** - (For Atom Cloud installation) Specifies the file path location for the Java Development Kit (JDK).

- **atomName** - (Optional ) Specifies the Atom name. The name is typically generated automatically and incorporated into the host name.

- **localPath** - (Optional for Molecule and Atom Cloud installations) Specifies the local file path (instead of the network file system). The `localPath` must be consistent among all Molecule and Atom Cloud nodes.

- **localTempPath** - (Optional for Molecule and Atom Cloud installations) The `localTempPath` specifies the local temporary file path used by Java for temporary storage. This directory must be consistent among all Molecule and Atom Cloud nodes.

  Boomi recommends that you do not set the `localTempPath` for Cloud Molecules that run on Linux. Configuring a custom temporary directory on Linux interferes with the Cloud Molecule's operation.

- **sys.symlinksDir** - (Optional) Specifies the directory that contains symbolic links to the launcher executables (Linux only).

- **proxyHost** - (Optional) Specifies the proxy host name.

- **proxyPassword** - (Optional) Specifies the proxy user’s password.

- **proxyPort** - (Optional) Specifies the proxy’s port number.

- **proxyUser** - (Optional) Specifies the proxy’s user name.

For a complete list of the command-line options for the install4j installer, see [Command-Line Options For Generated Installers](http://resources.ej-technologies.com/install4j/help/doc/help.pdf).

## Command-line code samples 

The following example shows a sample Linux command for installing an Atom. The -console option displays status messages on the console from which you start the installer.

:::note

For Windows, the examples can be modified by changing .sh to .exe.

:::

```
./atom_install64.sh -q -console -Vusername=user@mycompany.com -Vpassword=boomi 
-VatomName=myAtom -VaccountId=myAccount  -dir /home/<username>/<atom_installation_directory>
```

The following example shows a sample Linux command that uses an installer token to install an Atom.

```
./atom_install64.sh -q -console -VinstallToken=<token> -VatomName=myAtom 
-dir /home/<username>/<atom_installation_directory>
```

The following example shows a sample Linux command for installing a Molecule.

```
./molecule_install64.sh -q -console -Vusername=user@mycompany.com -Vpassword=boomi 
-VatomName=myMolecule -VaccountId=myAccount -VlocalPath=/<your_selected_directory>/local 
-VlocalTempPath=/<your_selected_directory>/temp -dir /home/<username>/<molecule_installation_directory>
```

The following example shows a sample Linux command for installing an Atom Cloud.

```
./cloud_install64.sh -q -console -Vusername=user@mycompany.com -Vpassword=boomi 
-VatomName=myCloud -VaccountId=myAccount 
-VcloudId=b1038bf0-33bd-4731-9b59-ada292e48e9c
-VenvironmentId=38c54779-799e-4bfa-99e6-22257722f475 
-VjdkPath=/usr/local/java/jdk -VlocalPath=/<your_selected_directory> 
-dir /home/<username>/<cloud_installation_directory>
```

The following example shows a sample Linux command for installing an Atom with proxy settings. You can use proxy settings in a similar way for Molecule and Atom Cloud installation.

```
./atom_install64.sh -q -console -Vusername=user@mycompany.com -Vpassword=boomi 
-VatomName=myAtom -VaccountId=myAccount  -VenvironmentId=<environment_id>
-dir /home/<username>/<atom_installation_directory> 
-VproxyHost=<proxy_host_name> -VproxyUser=<proxy_user_name>
-VproxyPassword=<proxy_password> -VproxyPort=<proxy_port_number>
```