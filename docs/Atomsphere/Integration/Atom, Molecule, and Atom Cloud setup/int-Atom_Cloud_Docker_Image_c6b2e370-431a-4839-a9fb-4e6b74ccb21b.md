# Atom Cloud Docker Image 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-c6b2e370-431a-4839-a9fb-4e6b74ccb21b"/>
</head>


The Boomi Docker image includes all of the files that you need to install a local Boomi Cloud on a 64-bit Linux machine.

You can get and run this image directly from [Docker Hub](https://hub.docker.com/r/boomi/cloud/) and use it manually. Boomi's Docker Hub provides necessary information about the Atom Cloud Docker image, such as image versioning, how to manually use the image or use it in unprivileged mode, and how to configure your Atom Cloud using a list of environment variables.

The Docker image includes:

- (v3) A minimal Red Hat Enterprise Linux Universal Base Image (RHEL UBI)
- (v4) A minimal Alpine Linux base image
- The latest -supported version of Java
- Code to retrieve, set up, and invoke the Atom 64-bit installer

:::note

You must have a valid Boomi Enterprise Platform account to use this image. For information about getting a 30-day free trial account, see [ Platform editions](https://www.boomi.com/products/editions/compare/).

:::

:::info Important

Boomi Docker images are not released according to the Runtime Release or Platform release schedule but can occur at any time. Refer to the current release notes topic (titled "What's new in...") for current updates about Docker image releases.

:::