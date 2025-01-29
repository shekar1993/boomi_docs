# Molecule Docker Image 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-c699cb30-da58-4673-bfe2-68e0b4bfe3ab"/>
</head>


The Boomi Docker image includes all of the files that you need to install a local Boomi Molecule on a 64-bit Linux machine.

You can obtain and run this image directly from [Docker Hub](https://hub.docker.com/r/boomi/molecule/) and use it manually. Boomi's [Docker Hub](https://hub.docker.com/r/boomi/molecule/) provides necessary information about the Molecule Docker image, such as versioning, how to operate it manually or use it in unprivileged mode, and how to configure your Molecule utilizing a list of environment variables.

The Docker image includes:

- A minimal Red Hat Enterprise Linux Universal Base Image (RHEL UBI)
  
- The latest Boomi-supported version of Java
  
- Code to retrieve, set up, and start the Atom 64-bit installer

You must have a valid Platform account to use this image. For information about available Integration editions, see the topic [Integration editions](../Getting%20started/c-atm-AtomSphere_Editions_bde0b272-5d32-46ec-82ea-6f9ffe98bd63.md).

:::info Important

Boomi does not release Docker images according to the Runtime Release or Platform release schedule but can occur at any time. Refer to the current release notes topic ("What's new in") for updates about Docker image releases.

:::