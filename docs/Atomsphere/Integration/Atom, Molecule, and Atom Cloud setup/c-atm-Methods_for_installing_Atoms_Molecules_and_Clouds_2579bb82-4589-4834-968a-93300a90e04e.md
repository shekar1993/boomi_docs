# Methods for installing Atoms, Molecules, and Atom Clouds

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-2579bb82-4589-4834-968a-93300a90e04e"/>
</head>


There are many supported installation methods as described below.

- An interactive approach to installation by using:

    - The Integration user interface

    - Console mode (Linux only)

- An unattended (or silent) installation.

- A Boomi-supplied Docker image (Linux only).


Except for the Docker image, the installers and upgraders that provides support the command-line options of install4j (an installer builder from ej-technologies):

- The -c option is used for a console mode installation or upgrade.

- The -q option is used for an unattended mode installation.


For more information about command-line options for the install4j installer, see [Command-Line Options For Generated Installers](http://resources.ej-technologies.com/install4j/help/doc/help.pdf).

When you install an Atom, Molecule, or Atom Cloud you must provide one of the following:

- Your user name and password
- A valid installer token, which you can generate by using:

    - The Atom, Molecule, or Cloud Setup dialog when downloading the installer from the user interface

    - The Installer Token object of the AtomSphere API or AtomSphere Partner API

    - The AtomSphere API or AtomSphere Partner API connector

:::note

No matter what method you use to install an Atom, Molecule, or Atom Cloud, the system where you are installing must meet the applicable system requirements.

:::