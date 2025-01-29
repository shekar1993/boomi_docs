# Atom system requirements 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-e3656558-174d-438e-bc5a-6dd48d20c159"/>
</head>


If you need to connect to applications and data locations within your local network, install an Atom on a computer within the network. Use the following guidelines to identify a Linux or Windows computer to install the Atom.

:::caution

Antivirus programs that scan the installation folder of your Atoms, Molecules, or Atom Clouds might conflict with their operation. For example, if the antivirus program attempts to access the files while your Atoms, Molecules, or Atom Clouds are running, it can cause conflicts. Also, the antivirus program could cause permission issues by being seen as a different user. Therefore, disable the antivirus program from running against the Atom, Molecule, or Atom Cloud installation folders during planned maintenance windows. Additionally, after running the antivirus program, check the quarantine folder for any valid files quarantined incorrectly.

:::


## Supported operating systems

| Operating system | Version |
| --- | --- |
| Linux 32-bit | - Red Hat Enterprise Linux 5.5 and above<br />- Suse Enterprise Linux Server 10 SP2 and above<br />- Any other Linux distribution that supports Java 8 Runtime |
| Linux 64-bit | Any Linux distribution that supports Java 8 or 11 Runtime. |
| Windows 32-bit | All versions of Windows that support Java 8 Runtime, from Windows Vista to the most recent version. |
| Windows 64-bit | All versions of Windows that support Java 8 or Java 11 Runtime, from Windows Vista to the most recent version. |

## Unsupported operating systems

Boomi does not officially support installations on Unix operating systems. Because Unix is not officially tested or supported by Boomi, the Boomi Support team cannot troubleshoot or support any Unix-related issues.

## Minimum hardware requirements

A single Atom, Molecule node, or Cloud Molecule within an Atom Cloud can run on hardware ranging from business-class workstations to dedicated servers.

- **Processor** - 1.8 GHz or higher Pentium 4 (or equivalent)
- **Memory** - 2 GB RAM (minimum 1 GB dedicated to Atom, Molecule node, or Cloud Molecule)
- **Hard disk** - 50 MB for runtime and configuration, 10 GB for data archiving

## Minimum hardware requirements for high volumes of data

The requirements for a single Atom, Molecule node, or Cloud Molecule node, or Cloud Molecule, within an Atom Cloud that must process high volumes of data are:

- **Processor** - Dual 64-bit processors or higherMore processors allow for increased, simultaneous process runs

- **Memory** - 4 GB of RAM (minimum 2 GB dedicated to the Atom, Molecule node, or Cloud Molecule)

  More RAM allows for increased, simultaneous process runs

- **Hard disk** - 100–200 GB of hard disk space

  Increase purging levels to minimize Atom, Molecule node, or Cloud Molecule disk space

## Minimum software requirements for Windows and Linux

**Java** (for Windows and Linux)

- Requires Java 8 or 11. Boomi recommends Java 11.0.24.8.1.

- Boomi internally tests each Java version prior to their release.
            
**Java runtime** (for Windows and Linux)

- This is a Java application and requires Java 8 or 11 to run.

- For Java 8, Boomi supports the Oracle Java and Amazon Corretto OpenJDK . The installer automatically downloads a private copy of the Java 8 JDK for the Atom, Molecule, or Atom Cloud's use.

- For Java 11, Boomi supports the Amazon Corretto OpenJDK only. When you install a new runtime container and download the JDK, it automatically includes the Java 11 runtime.

   :::note

   The Atom, Molecule, or Atom Cloud Java 11 installer downloads a private copy of the JDK. You can continue to use Java 8 installer files previously downloaded on your local drive to install runtime containers on Java 8. Depending on which version you install, the Java 8 JRE or the Java 11 JDK are in your Atoms’s or Molecules’s jre directory. The private JRE or JDK will not interfere with a shared JRE or JDK (one that you, not the installer, installed). It is not integrated into browsers and does not write registry entries.

   :::

## Other Atom requirements

Here are other requirements and information about installing Atoms:

- You can install more than one Atom on the same computer.

- You can install and run a combination of 32-bit and 64-bit Atoms on the same computer without causing conflicts between the Atoms. Leave the computer powered on or that it is on as often as scheduled processes run.

- You must have a persistent high-speed internet connection such as cable, DSL or fiber optics.

- You must have the appropriate LAN connectivity and security permissions to access the applications and data locations required for your particular integration scenarios.

:::note

For high-volume processing in a local environment, consider using the Molecule to support clustering and failover. Molecules have the same system requirements as Atoms, plus additional requirements.

:::

If your system meets all of these requirements, you are ready to [download the Atom installer](../Atom,%20Molecule,%20and%20Atom%20Cloud%20setup/t-atm-Downloading_the_local_Atom_installer_401abba4-2ea0-43d7-9a15-4012f63467c1.md).