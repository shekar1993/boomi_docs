# Unattended upgrade of an Atom, Molecule, or Atom Cloud 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-4e6dd3d3-b016-451b-b9c5-8f77ec4d3e45"/>
</head>


Instead of upgrading Atoms, Molecules, or Atom Clouds through the Boomi Integration user interface, you can do an unattended upgrade using the command line.

In either Windows or Linux, open a command prompt and use the commands to upgrade your Atom, Molecule, or Atom Cloud. Having the system command option is beneficial when you want to automate the upgrade process.

The system where you are upgrade an Atom, Molecule, or Atom Cloud must meet the applicable system requirements.

This upgrade method uses the unattended mode option (-q)of the install4j installer.

:::info Important

Only the node that runs upgrades (typically the head node) restarts automatically to run the updated Java version. Therefore, you must restart all other nodes within the cluster to install the upgrade.

:::

The following variable is commonly included in the command-line code:

- **jvmCertsPath** - (Optional) Specifies the JRE directory containing certificates to migrate to the upgraded JRE version.

For a complete list of the command-line options for the install4j installer, see [Command-Line Options For Generated Installers](http://resources.ej-technologies.com/install4j/help/doc/help.pdf).

## Command-line code samples 

The following example shows a sample Linux command for upgrading an Atom. The -console option displays status messages on the console from which to invoke the upgrade:

```
./atom_upgrade64.sh -q -console -dir /home/<username>/<atom_installation_directory>
```

The following example shows a sample Linux command for upgrading a Molecule:

```
./molecule_upgrade64.sh -q -console  -dir /home/<username>/<molecule_installation_directory>
```

The following example shows a sample Linux command for upgrading an Atom Cloud:

```
./cloud_upgrade64.sh -q -console -
-dir /home/<username>/<cloud_installation_directory>
```

The following example shows a sample Linux command for upgrading an Atom to include migrating certificates from the previous JRE:

```
./atom_upgrade.sh -q -console -VjvmCertsPath=/home/<username>/<atom_installation_directory>/jre -dir /home/<username>/<atom_installation_directory>
```
:::note

For Windows, you can modify the examples by changing .sh to .exe.

:::

The following examples show sample Linux commands for upgrading an Atom, Molecule, or Atom Cloud to include choosing how you want to update the JRE or use an external JDK.

-   Switch the preferred JRE to the installation's JRE directory:

    ```
    ./atom_upgrade64.sh -q -console VprefJreLocation=internal -dir /home/<username>/<atom_installation_directory>
    ```

-   Do not make changes to the preferred JRE \(default\)

    ```
    ./atom_upgrade64.sh -q -console VprefJreLocation=current -dir /home/<username>/<atom_installation_directory>
    ```

    If you don't include `VprefJreLocation` in the command, it defaults to current.

-   Use an external JDK for preferred JRE:

    ```
    ./atom_upgrade64.sh -q -console VprefJreLocation=external -VexternalJDKPath = <external_JDK_path> -dir /home/<username>/<atom_installation_directory>
    ```

    If you set `VprefJreLocation` as external, you must also include `VexternalJDKPath` with the value set to the location of the JDK that you want to use.