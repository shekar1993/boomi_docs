# Setup and connect InfluxDB

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-32544a71-e8e5-4ca4-afd8-18a8b26c188c"/>
</head> 

This article is only relevant for self-hosted installations. For the SaaS version of API Control Plane, we will setup the raw metrics database for you.

You will need a running instance of InfluxDB with an organization and an access token for full access to that organization. This is very easy to setup by running a new container with the `influxdb` image and passing it a few environment variables. Below you find a docker compose file that you may use.

```
version: '3.7'
services:
  influxdb:
    image: influxdb
    environment:
      - DOCKER_INFLUXDB_INIT_MODE=setup
      - DOCKER_INFLUXDB_INIT_USERNAME=admin
      # The admin password can be used to access the InfluxDB UI in the browser
      # but it is not needed by API Control Plane.
      - DOCKER_INFLUXDB_INIT_PASSWORD=<your-admin-password>
      # Name of the organization that API Control Plane will be using. Your InfluxDB instance 
      # may contain more then one organization, if you want to use it for other applications as well.
      - DOCKER_INFLUXDB_INIT_ORG=<your-org-name>
      # you do not need an initial bucket - API Control Plane will create it automatically.
      - DOCKER_INFLUXDB_INIT_BUCKET=default
      # Pass this token to API Control Plane. Alternatively to configuring it here, 
      # you can also login to InfluxDB UI and generate a new token there.
      - DOCKER_INFLUXDB_INIT_ADMIN_TOKEN=<your-admin-token>
    volumes:
      - data_influxdb:/var/lib/influxdb2
    ports:
      - 8086:8086
volumes:
  data_influxdb:
```

## Configuring API Control Plane backend

Once your InfluxDB is up and running, you can provide the following information to the API Control Plane backend process, so that it knows how to connect to InfluxDB. To provide this information, you may add environment variables, e.g. in your docker-compose file or helm chart that you use to start the backend.

- `metrics.influxdb.url`

    - This is the full url with wich the backend can access InfluxDB. E.g. http://localhost:8086

- `metrics.influxdb.org`

    - Name of the InfluxDB organization

- `metrics.influxdb.token`

    - An access token, that grants full access to the InfluxDB organization.

With this information provided, the backend will perform a connection check on startup and exit if no connection is possible.