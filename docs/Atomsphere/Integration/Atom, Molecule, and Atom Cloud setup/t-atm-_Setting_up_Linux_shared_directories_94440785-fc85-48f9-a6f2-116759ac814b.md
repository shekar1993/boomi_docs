# Setting up Linux shared directories

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-94440785-fc85-48f9-a6f2-116759ac814b"/>
</head>


Set up a shared directory on your Linux operating system to enable your Molecule nodes to communicate and share information with one another, which may include data, results, and so on. This action is required when installing and using Molecules.

## Before you begin

Before completing these steps for a Linux installation, download the local Molecule installer if you are installing a Molecule, or the Cloud Molecule installer if you are installing an Atom Cloud.

## Procedure

1. After downloading the Molecule installer (molecule_install.sh or molecule_install64.sh) or Cloud Molecule installer (cloud_install.sh or cloud_install64.sh), run it on a machine that will eventually share the Molecule’s or Cloud’s installation directory.

2. Share the directory through NFS to other machines, using the same installation directory name.

## Next steps

If you are installing a Molecule, next you need to install the first Molecule node. If you are installing an Atom Cloud, you need to install the first Cloud Molecule.