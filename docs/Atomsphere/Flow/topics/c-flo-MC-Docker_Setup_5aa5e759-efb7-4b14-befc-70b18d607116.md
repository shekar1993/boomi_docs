# Local runtime Docker setup

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-5aa5e759-efb7-4b14-befc-70b18d607116"/>
</head>

This topic describes how to configure the local runtime Docker image for setting up a local runtime.

## Before you begin

- Ensure that you have downloaded the Flow Docker image.

- Ensure that you have copied and have access to the local runtime token created when [Creating a local runtime connection in Boomi Flow](c-flo-MC_Creating_Local_Runtime_in_Flow_9569e2be-f4fe-4284-9559-58b5b9036b52.md).

## Setting up the Docker local runtime

- To set up a local runtime, one or more local runtime nodes will need to be started.

- The runtime nodes must be able to access a PostgreSQL database, using a user with permission to create, modify and drop tables in the specified database and schema.

- The runtime nodes must be able to access the following URLs:

  -   https://flow.boomi.com
  -   https://runtimes.flow.boomi.com

- The runtime nodes do not need to be publicly accessible to the internet. Flow will never try to connect to them via an inbound connection.

- The local runtime token must be provided in the `INSTALLATION_TOKEN` environment setting.

- If you are using regions in combination with a local runtime, the optional `FLOW_API_URL` setting must be provided, with the appropriate matching regional URL. See [Flow regions](flo-Regions_1a50f08b-dfa3-49fb-ab92-27580c046354.md).

## Example Docker Compose YAML

The following example docker-compose.yml illustrates how to use Docker Compose to run a base configuration of the local runtime node and database services. Docker Compose is a tool for defining and running multi-container Docker applications; with Docker Compose, a YAML file is used to configure your application’s services.

To learn more about Docker Compose, see the official [Docker Compose](https://docs.docker.com/compose/) documentation.

::caution

This example is not suitable for a production deployment, as the database is not persistent and there is only one runtime node, but it is provided to show the minimum required configuration. Users should consult with their appropriate System Administrator for a production-like deployment environment (for example utilizing a High-availability database, multiple runtime nodes behind a load balancer, and so on.)

:::

```
#This example Docker Compose file uses the latest Postgres, Boomi Flow to run a local runtime within a testing environment. 
#This does not include a web server. Players should be placed as .html files on the webserver or embedded in the content managment system. To learn more about embedding players, see /csh?context=GUID-8145909a-9fec-40f2-a4a4-4e305f06b1a4.
#Docker Compose is a tool for defining and running multi-container Docker applications. Compose allows you to use a YAML file to configure your application's services. 
#Using a single command, you can then create and start all the services from your configuration. For example, 'Docker-compose up'.
#To learn more about all the features of Docker Compose see https://docs.docker.com/compose/.

version: "3.8" # This is the Docker Compose version. See https://docs.docker.com/compose/compose-file/.
services: # Docker Compose is a tool for defining and running multi-container Docker applications. Compose allows you to use a YAML file to configure your application's services.
    
 database: # Learn more about using the Docker Postgres image at https://hub.docker.com/_/postgres.
    image: postgres:latest # This command will use postgres:latest.
    environment:
    - POSTGRES_DB=flow # This optional environment variable can be used to define a different name for the default database that is created when the image is first started. 
    - POSTGRES_PASSWORD=a-secure-password # This environment variable is required for you to use the PostgreSQL image. It must not be empty or undefined.
    ports:
    - "5432" # The port to use for the Boomi Flow runtime connection.
    volumes:
    - ./data:/var/lib/postgresql/data #Used to persist the database volume. To learn more about Docker volumes, see https://docs.docker.com/storage/volumes/.

 runtime: # Learn more about the Boomi Flow image at https://hub.docker.com/r/boomi/flow.
    image: boomi/flow:latest # This will use boomi/flow:latest.
    depends_on:
    - database # Express dependency between services, expresses start order (and implicitly image pulling order), i.e. the database service above.
    environment:
    - BASE_URL=http://localhost:8080 # The base URL of the API, used when generating absolute URLs.
    - DATABASE_CONNECTION_STRING=Application Name={0};Database=flow;Host=database;Keepalive=300;Minimum Pool Size=5;Maximum Pool Size=50;Password=admin;Port=5432;SSL Mode=Prefer;Trust Server Certificate=True;Username=postgres # A postgres connection string to runtime database
    - INSTALLATION_TOKEN=12345abcde # The unique local runtime token used to install a runtime.
    - FLOW_API_URL=https://eu.flow-prod.boomi.com
    ports:
    - "80:80" # Expose 80 on host and send to 80 in container.
    restart: unless-stopped # Unless-stopped restarts the container only when any user executes a command to stop the container, not when it fails because of an error.
```

## Runtime service environment - general settings

| Setting             | Required? | Description |
|---------------------|-----------|-------------|
| BASE_URL         | ![Required](../Images/img-flo-Icon_Tick_d235399f-31a8-4464-a9c7-984432116e77.png) Required | The base URL of the API, used when generating absolute URLs, such as OAuth 2.0 redirect URIs and callback URIs for services. <br /><br />For example: <br />`BASE_URL=https://flow.yourcompany.com:8080/subdirectory`<br /><br />For example, if the port that the container is being exposed on is set to '1234:80' in the docker compose file, this would be: <br />`BASE_URL=https://localhost:1234` |
| INSTALLATION_TOKEN| ![Required](../Images/img-flo-Icon_Tick_d235399f-31a8-4464-a9c7-984432116e77.png) Required | The unique local runtime token used to install a runtime. This value is obtained during the process of [Creating a local runtime connection in Boomi Flow](c-flo-MC_Creating_Local_Runtime_in_Flow_9569e2be-f4fe-4284-9559-58b5b9036b52.md). <br /><br />For example: <br />`INSTALLATION_TOKEN=mfZXe7RPbnc0iEu9eoud6X+ZQjneuui=` |
| FLOW_API_URL      | ![Optional](../Images/img-flo-Icon_Cross_b07fedc0-b847-48db-9354-e864a2e4c221.png) Optional | If you are using a different region to the main US region, specify the alternative cloud platform regional URL.<br /><br />For example, if you are using the Europe \(EU\) region: <br />`FLOW_API_URL=https://eu.flow-prod.boomi.com`<br /><br />If this optional setting is not included in the docker file, it defaults to `https://flow.boomi.com`. <br /><br />To learn more about using regions, and to see a list of regional URLs, see [Regions](flo-Regions_1a50f08b-dfa3-49fb-ab92-27580c046354.md). |
| FLOW_OFFLINE      | ![Optional](../Images/img-flo-Icon_Cross_b07fedc0-b847-48db-9354-e864a2e4c221.png) Optional | Starts the runtime up in an 'offline' mode. This means that no network communication is attempted with the cloud platform. This setting is useful if your runtime has already been installed online and has flows deployed, but you wish to move it to an internal network or a location with poor external connectivity. This setting allows the runtime to operate 'offline', and run the flows that have already been deployed to it. <br /><br />For example, you may have connectivity to the cloud platform in your test environment, but require an 'offline' mode in your production environment as it requires/has no connectivity to the cloud platform. <br /><br />- Set to 'true' to start up the runtime in 'offline' mode, i.e. no network communication is attempted with the cloud platform. <br />- Set to 'false' or leave unspecified to start the runtime in normal 'online' mode, i.e. it will initially connect to the cloud platform. This is the default mode. <br /><br />For example: <br />`FLOW_OFFLINE=true` |

## Runtime service environment - database settings

Database connection information is defined in the `DATABASE_CONNECTION_STRING` setting.

| Setting | Required? | Description |
|---------|:---------:|-------------|
| Application Name | ![Required](../Images/img-flo-Icon_Tick_d235399f-31a8-4464-a9c7-984432116e77.png) Required | This setting is required by to identify the specific application. This setting should not be changed from the default "\(0\)" value.<br /><br />For example:<br />`Application Name={0};` |
| Database | ![Required](../Images/img-flo-Icon_Tick_d235399f-31a8-4464-a9c7-984432116e77.png) Required | The name of the database to use for the runtime.<br /><br />For example:<br />`Database=flow;` |
| Host | ![Required](../Images/img-flo-Icon_Tick_d235399f-31a8-4464-a9c7-984432116e77.png) Required | The hostname or IP address that will be used for database connections. It can point to a load balancer, or could be a virtual IP but it must resolve to the current database primary.<br /><br />For example:<br />`Host=flow-database.company.internal;` |
| Keepalive| ![Required](../Images/img-flo-Icon_Tick_d235399f-31a8-4464-a9c7-984432116e77.png) Required | The time \(in seconds\) to maintain the database connection for, used to prevent the database connection being closed due to an idle time-out for example.<br /><br />For example:<br />K`eepalive=300;` |
| Minimum Pool Size | ![Optional](../Images/img-flo-Icon_Cross_b07fedc0-b847-48db-9354-e864a2e4c221.png) Optional | The minimum size of the database connection pool for the node.<br />This setting is optional, with a default setting of '5'.<br /><br />For example:<br />`Minimum Pool Size=5;` |
| Maximum Pool Size | ![Optional](../Images/img-flo-Icon_Cross_b07fedc0-b847-48db-9354-e864a2e4c221.png) Optional | The maximum size of the database connection pool for the node.<br />This setting is optional, with a default setting of '50'.<br /><br />For example:<br />`Maximum Pool Size=50;` |
| Port | ![Required](../Images/img-flo-Icon_Tick_d235399f-31a8-4464-a9c7-984432116e77.png) Required | The port to use for database connections.<br /><br />For example:<br />`Port=5432;` |
| Password | ![Required](../Images/img-flo-Icon_Tick_d235399f-31a8-4464-a9c7-984432116e77.png) Required | The password to use when connecting to the database.<br /><br />For example:<br />`Password=QUDFTo3YaQcFGRVgY2p8Ww4uift;` |
| SSL Mode | ![Required](../Images/img-flo-Icon_Tick_d235399f-31a8-4464-a9c7-984432116e77.png) Required | Whether SSL encryption is used, depending on server support.<br />Refer to the Npgsql documentation for more information:<br />- [Npgsql Connection String Parameters](https://www.npgsql.org/doc/connection-string-parameters.html)<br />- [Npgsql Security and Encryption](https://www.npgsql.org/doc/security.html?tabs=tabid-1)<br /><br />For example:<br />`SSL Mode=Prefer;` |
| Trust Server Certificate | ![Required](../Images/img-flo-Icon_Tick_d235399f-31a8-4464-a9c7-984432116e77.png) Required | Whether to trust the server certificate without validation.<br />Refer to the Npgsql documentation for more information:<br />- [Npgsql Connection String Parameters](https://www.npgsql.org/doc/connection-string-parameters.html)<br />- [Npgsql Security and Encryption](https://www.npgsql.org/doc/security.html?tabs=tabid-1)<br /><br />For example:<br />`Trust Server Certificate=True;` |
| Username | ![Required](../Images/img-flo-Icon_Tick_d235399f-31a8-4464-a9c7-984432116e77.png) Required | The user name to use when connecting to the database.<br /><br />For example:<br />`Username=postgres` |

## Runtime service - logging settings

| Setting | Required? | Description |
|---------|:---------:|-------------|
| LOGGING_LEVEL | ![Optional](../Images/img-flo-Icon_Cross_b07fedc0-b847-48db-9354-e864a2e4c221.png) Optional | The level of logging verbosity for the node.<br />This setting is optional, with a default setting of 'information'.<br /><br />The logging levels available are:<br />- `none` (least verbose)<br />- critical<br />- `error`<br />- `warning`<br />- `information`(default)<br />- `debug`<br />- `trace` (most verbose)<br /><br />For example:<br />`LOGGING_LEVEL=information` |
