# Local runtime Docker installation

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-a41696e4-46ca-4d8d-a96e-06bd31b568e5"/>
</head>

The Docker local runtime packages up the local runtime installation into a single easily-installable image.

[Docker](https://www.docker.com/) allows companies to bundle together a piece of software and all of the files that are needed to run the software. Providing a Docker image not only makes it easier for you to install software, it also guarantees that the software will run the same way, no matter where you install it. The bundle, or Docker image, can include the code, file system, libraries, tools — whatever you would normally install on a server that is necessary for the software to run.

Boomi provides a Docker image that includes all of the files you need to install a local runtime on a 64-bit Linux machine.

To use this image, you must be familiar with Docker and you must know how to use Docker commands. See the Docker web site and the [Docker Engine user guide](https://docs.docker.com/engine/userguide/).

:::note

The Boomi Docker image exposes port 80.

:::

If your company has a Dev-Ops team that sets up and takes down local runtimes, the Docker image can reduce the time-to-value for them. And the ability to deploy and manage local runtimes via Docker can support your company's requirements to be more agile.

:::note

Local runtimes can also be run inside Kubernetes or an Amazon Elastic Container Service \(ECS\).

:::

## Docker requirements

In order to use Docker to install a local runtime:

- You must have Docker installed on a 64–bit Linux machine. The minimum supported Docker version is 19.03.8.

- You must have access to a Docker daemon (on the same system or inside an orchestrator such as Kubernetes, ECS, Mesos, and so on.

- You must be familiar with [Docker technology](https://docs.docker.com/get-started/overview/) and you must know how to use [Docker commands](https://docs.docker.com/reference/).

## Other Docker local runtime requirements

Other requirements and information about installing Docker local runtimes are:

- You must have a persistent high-speed Internet connection such as cable, DSL or higher.

- You must have the appropriate LAN connectivity and security permissions to access the applications and data locations required for your particular runtime scenarios.

If your system meets all of these requirements, you are ready to download the Docker local runtime installer.

## Docker image

You can pull the appropriate Docker image directly from Docker Hub and issue a Docker `run` command. The Boomi images reside in the following public repositories on Docker Hub:

- [boomi/flow](https://hub.docker.com/r/boomi/flow)

To learn more about using the Docker image to install a local runtime, see [Local runtime Docker setup](c-flo-MC-Docker_Setup_5aa5e759-efb7-4b14-befc-70b18d607116.md).
