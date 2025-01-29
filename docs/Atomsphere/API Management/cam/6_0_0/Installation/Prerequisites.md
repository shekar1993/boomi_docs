---
sidebar_position: 2
---

# Prerequisites

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-5d7b7910-2a48-4bc1-ae27-0f657d29862c"/>
</head>

The following softwares, resources, and accesses are required for deploying a Local Edition cluster.

## Container Tools

The container tool is required to build product images used to bring up Local Edition cluster. You may use either Docker or Podman to build and push images. You may build images on any Docker or Podman-enabled environment, for example, your laptop or a server with the following minimum requirements: 

- Number of CPUs: 2

- RAM: 6 GB.

:::note

Root privileges or sudo escalation is not required for building Local Edition images.

:::

### Podman

Minimum supported version - 4.4.4. 

:::note

To run a containerized runtime, you must use Podman version 4.4.4 or higher.

:::

For more information, see [Installing Podman](https://podman.io/docs/installation)

### Docker

Minimum supported version - 24.0.6. 

For more information about various options, see [Installing Docker](https://docs.docker.com/engine/install/).

### Helm

Required to manage your Kubernetes applications.

Minimum supported version - 3.11.2

For the templates and charts, Helm API version 2 is used.

For more information see [Installing Helm](https://helm.sh/docs/intro/install/).

## Container Registry

Use any Open Container Initiative (OCI) registry such as Amazon ECR, Microsoft Azure CR, Docker Hub, Google Artifact Registry.

## Container Managers

### Kubernetes

Required for deploying Local Edition application.

Minimum supported version - 1.28

### Kubernetes CLI and Kubeconfig

For an ideal experience for running Local Edition, it is recommended that versions of kubectl CLI, Kubernetes Cluster, and Kubernetes API server match. 

Minimum Kubectl version - 1.25 is required.

The `kubeconfig` file has verbs defining the different access to the cluster.

At a minimum, you must have the following set of accesses:

- Kubernetes API server: with abilities to create pods, jobs, and access secrets.

- Kubernetes monitoring: run the command kubectl top. For a reference list of kubectl commands, see [kubectl reference](https://kubernetes.io/docs/reference/kubectl/generated/).

### Kubeconfig Location

Local Edition uses Helm to manage the application and it requires to know the location of the kubeconfig file. You can define the kubeconfig file location in one of the following ways:

- Default location - the `/home directory`.

- `KUBECONFIG` environment variable - If you have a custom location, define an environment variable called `KUBECONFIG`. 

### OpenShift

Required to deploy Local Edition.

Minimum supported version - 4.14

### Runtime

- `crun` - The lowest supported denominator. If it runs on crun, it can run on any runtime. It is faster than runc and containerd - Docker contributed runtime. For more information, see [crun](https://github.com/containers/crun) on GitHub.

- `cri-o` - The default runtime on popular clouds. For more information, see [cri-o](https://cri-o.io/).

## MySQL Database Service

The database service can be a self-managed instance or a cloud-provider service. If it is a self-managed instance, use the minimum version: 8.0.23.

The `APIM-LE` components may communicate with the database service using unsecured or secured connections.

- Secured Connection with TLS: You may use TLS 1.2 or higher. TLS 1.3 is recommended.

- Other requirements from the database service are: 

  - Database URI or Service FQDN or IP address is available.

  - Database `masherysolar` is created.

  - Database user with privileges to create the database used by Local Edition components (default: masherysolar) and schema.

  - Database user with privileges to operate on database objects such as tables, triggers, stored procedure, and so on in the `masherysolar` database.

  - TLS resources such as client certificate and key as applicable.

## Mail Service

Local Edition can send notifications by using registered notification templates from Config UI and Trafficmanager to notify events. Supported mail services are LOG (log to console), SMTP and AWS.

The configuration are specific to each type with "log" requiring no other configuration.

### SMTP

Configure mail server to expose SMTP port to send mails. Different mail services have different configurations. Check the provider documentation to configure mail service.

Requires the following:

- SMTP host and port

- SMTP creds

### AWS

Requires the following:

- AWS mail service as host.

- AWS user and password (token or key)

## External Log destination or Observability Stack

Log destination support is governed by the choices from Fluent Bit output plug-ins. You must have the handy Fluent Bit configuration for chosen outputs. See [Fluent Bit documentation](https://docs.fluentbit.io/manual/).

Without the observability stack, you can not view any application logs including error logs generated during installation and post-installation.

Your Kubernetes administrator is responsible for managing the size of log and the retention of logs. By default, the log size is 10 MB.

## See Also

- Container runtimes

- crun on Github.com

- Kubeconfig on kubernetes.io

- [Fluent Bit output plug-ins](https://docs.fluentbit.io/manual/v/1.7/pipeline/outputs)
