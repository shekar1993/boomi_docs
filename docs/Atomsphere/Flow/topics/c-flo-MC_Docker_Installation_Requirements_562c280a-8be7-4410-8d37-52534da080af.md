# Local runtime system requirements

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-562c280a-8be7-4410-8d37-52534da080af"/>
</head>

Before beginning deployment of a local runtime, review these requirements to identify and prepare the correct local runtime system setup.

The following elements and services are required for at least a basic deployment of the local runtime:

- Database system

- Web domain or subdomain

- Flow player
  
:::caution

To ensure the best performance and follow best practices, it is recommended to use the most current version of the runtime available. Upgrades to the runtime are designed to be as user-friendly as possible, and any migrations or schema changes will be handled by the runtime itself on startup. If you encounter any technical difficulties, ensure that you have updated to the latest local runtime, and re-deploy any flows that you have encountered issues with. Boomi requires all issues to be reproduced using the most current version of the runtime available before opening a support ticket.

:::

## Database system

A database system is required to run a local runtime. The following databases are supported:

| Database | Requirement |
|----------|-------------|
| PostgreSQL | A minimum of PostgreSQL 15+ is required. |

The PostgreSQL database that you will use for the local runtime does not need to be contained within the local runtime Docker installation itself, as long as it can connect to the local runtime Docker environment.

A containerized database can also be used, either as part of the container \(for example by using '`image: Postgres`' as in our example Docker Compose YAML file\) or set up externally. See [Postgres Docker Image](https://hub.docker.com/_/postgres).

For development, testing purposes and small projects deployed to a single machine, it is acceptable to use a containerized database setup. The database should still be mounted using the `Volume` parameter, to make the data persistent.

For production environments, Docker containerized databases are not recommended as they are a critical service. See [Databases and postgres in containers](https://containerjournal.com/topics/container-management/11-things-to-know-about-databases-and-postgres-in-containers/) to learn more about using Docker containerized databases.

:::note

You will need to configure the database, but database tables are created during Docker installation.

:::

## Web domain

A dedicated domain or subdomain is required, preferably with an SSL certificate. For example:

- `https://flow.yourcompany.com`
- `https://flow.internal`

The domain does not need to be publicly accessible (or even a real domain) but it must be resolvable by the local runtime itself, and by any users of the local runtime.

An SSL certificate is highly recommended, in order to secure privacy of communication for flow users.

:::note

Local runtimes require outbound access over port 443 for the WebSocket connection and for installation of the local runtime with the platform.

:::

## Flow player

A Flow HTML5 player needs to be configured for use with the local runtime if you will be rendering your local runtime flows in a web browser. See [Local runtime HTML5 player setup](c-flo-MC_Players_f418374c-f634-42a0-8d7a-b330c69107d5.md).

:::note

A local runtime HTML5 player is not a requirement when using local runtimes if your flows will not be run in a web browser, as your Organization may deliver flows using the API, a custom user interface, or a connector such as Twilio for example.

:::

## Docker requirements

Boomi provides a Docker image that includes all of the files you need to install a local runtime on a 64-bit Linux machine.

The local runtime Flow Docker image must be installed on a 64–bit Linux machine. The minimum supported Docker version is 19.03.8. Installation on a Windows Operating System is not supported.

- See [Local runtime Docker installation](c-flo-MC_Docker_Installation_of_Local_Runtime_a41696e4-46ca-4d8d-a96e-06bd31b568e5.md) for full docker requirements.

## Hardware requirements

There are many variables in determining the kind or amount of hardware that is needed to run Boomi Flow on-premise.

For a production installation of the local runtime, it is recommended to have at least 2 load-balanced instances of the runtime, along with a highly-available database cluster (i.e. at least a primary/replica setup).

As an example, an optimal configuration serving 8.5 million monthly requests had a hosting specification of:

- 6x c4.xlarge runtime instances \(8GB RAM, 4vCPUs\)
- 2x m4.4xlarge PostgreSQL instances \(64GB RAM, 16vCPUs\)

Other points to consider when selecting hardware, (based on the predicted flows that will be run):

| Resource | Description |
|----------|-------------|
| Processor | The number of concurrent requests to the runtime. |
| Processor & Network | The number of any outgoing requests from flows. |
| Memory | <ul><li>The size of any flow states</li><li>The complexity of any type or value elements</li></ul> |

## Recommended minimum hardware requirements

Recommended minimum hardware requirements are as follows:

| Resource | Description |
|----------|-------------|
| Processor | System based on the X86 64-bit processor architecture <br />4 vCPUs per VM minimum recommendation <br /> Systems based on a ARM/ARM64 processor architecture (such as Raspberry Pi or Amazon Web Services) are not supported |
| Memory | 2 GB RAM |
| Hard disk | 5GB minimum recommendation for the local runtime database |

## Flow connectors

If you are using native Flow connectors within a local runtime environment, the connector schema must first be exposed to a publicly accessible endpoint at least once to build the relevant types and data model within Flow. Access can then be switched to an internal endpoint.

For example, you could expose a development environment connector endpoint in order to build the initial types within Flow, before modifying the connector URL so that it is no longer publicly accessible.

The schema has to be identical for the publicly accessible database so that when the endpoint is changed to one that is not publicly accessible, it can still resolve correctly.

:::caution

When switching the connector URL to an internal endpoint, click the **Save Service** button on the **Connector** page. Do not click the Update Service button in order to avoid any modifications to the configured types and schema.

:::

## Known issues and unsupported functionality

The following known issues and areas of unsupported functionality should be taken into consideration when using local runtimes.

| Known Issues and Unsupported Functionality | Description |
|----------|-------------|
| Dashboards | The **Dashboard** page does not support local runtime environment workloads. Dashboards are not populated with local runtime data. |
| Emails | Emails are not sent to Flow users in a local runtime environment. |
| Encrypted values | <ul><li>`ContentEncrypted` values are not supported in local runtime flows.</li><li>Values that have `isEncrypted` set to 'true' are not supported in local runtime flows.</li></ul> To learn more about encrypted values, see [ Value content kinds](c-flo-Values_Content_Types_782220dc-722d-4d55-8576-e0274117e190.md). |
| Connectors | Describing/updating connectors that use a privately-accessible connector is not supported in a local runtime environment. |
| Tenant settings | Tenant settings are not supported in local runtime flows.<br /> To learn more about the **Tenant** page, see [Tenant page](c-flo-Tenant_Settings_Page_5cf56ab8-1bcc-48f1-b497-b80491a09a73.md). |
| Values | Versionless values are not supported in local runtime flows. For example, if the **The Value should not be versioned** checkbox is selected on a value used within a local runtime flow, an error message is displayed. The flow cannot be run locally until the value has this checkbox selection removed, so that the value can be versioned. To learn more about versioning a value, see [ Creating a new value](t-flo-Values_Create_8f17a05f-fff5-44b4-af66-a810ebf4b8d2.md). |
