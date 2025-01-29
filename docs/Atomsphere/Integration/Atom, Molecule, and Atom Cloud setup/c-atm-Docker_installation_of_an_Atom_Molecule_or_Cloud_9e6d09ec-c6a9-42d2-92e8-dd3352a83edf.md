# Docker installation of an Atom, Molecule, or Atom Cloud 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-9e6d09ec-c6a9-42d2-92e8-dd3352a83edf"/>
</head>


The Docker Atom packages the entire operating system, other requirements, and Atom installation into a single easily-installable image.

[Docker](https://www.docker.com/) allows companies to bundle a piece of software and all the files needed to run the software. Providing a Docker image makes it easier for you to install software and guarantees that the software runs the same way, no matter where you install it. The bundle, or Docker image, can include the code, file system, libraries, and tools — whatever you usually install on a server necessary for the software to run.

Boomi provides a Docker image that includes all of the files you need to install a local Atom, Molecule, or Atom Cloud on a 64-bit Linux machine. The Docker image includes:

- A minimal Red Hat Enterprise Linux Universal Base Image (RHEL UBI)

- The latest Boomi-supported version of Java

- Code to retrieve, set up, and invoke the 64-bit installer for an Atom, Molecule, or Cloud Molecule

To use the image, you must be familiar with Docker and you must know how to use Docker commands. See the Docker website and the [Docker Engine user guide](https://docs.docker.com/engine/userguide/).

:::note

The Boomi Docker image exposes port 9090.

:::

Using the Docker image makes Atom, Molecule, and Atom Cloud installation easier for you because Boomi provides and installs the operating system, JRE, and installer. Using the Docker image also ensures that each Atom, Molecule, and Atom Cloud you install runs the same way.

Suppose your company DevOps team installs and removesBoomi Atoms, Molecules, or Atom Clouds or mirrors and dynamically scales your production environment. In that case, the Docker image can reduce the time-to-value for team members. Also, deploying and managing Atoms, Molecules, or Atom Clouds through Docker supports your company's requirements to be more agile.

You can get the appropriate Docker image directly from Docker Hub and issue a Docker run command. The Boomi images reside in the following public repositories on Docker Hub:

- [boomi/atom](https://hub.docker.com/r/boomi/atom/)

- [boomi/molecule](https://hub.docker.com/r/boomi/molecule/)

- [boomi/cloud](https://hub.docker.com/r/boomi/cloud/)

After installing your Atom, Molecule, or Atom Cloud with Docker, you can maintain and adjust settings through the Integration user interface, like any other Atom, Molecule, or Atom Cloud. However, if you want to use the `atom` command to manage an Atom, Molecule node, or Cloud Molecule, run the command from within the Docker container.

:::note

If you have experience working with Docker images and you want to work with a local copy of the image supplied by Boomi, you can download the source code for an image from [Bitbucket](https://bitbucket.org/officialboomi/docker-images/src/master/).

:::