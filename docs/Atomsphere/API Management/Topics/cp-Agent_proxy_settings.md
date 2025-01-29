# Agent Proxy Settings

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-1da238c0-76d4-4634-9b8f-5d48988c0efc"/>
</head>

You can configure your agent to us a proxy server for connecting to API Control Plane and/or to your gateway. To do so, you can add an environment variable named JAVA_TOOL_OPTIONS to the agent docker-compose file. The content of that variable would be:

```
-Dhttp.proxyHost=HOST -Dhttp.proxyPort=PORT -Dhttps.proxyHost=HOST -Dhttps.proxyPort=PORT
```

Here is an example docker-compose file, that demonstrates how to set this environment variable.

```
version: '3.3'
services:
  controlplane-agent-aws:
    image: apiida/controlplane-agent
    container_name: controlplane-agent-aws
    environment:
      - 'backendUrl=wss://your-tenant.backend.na.controlplane.boomi.com'
      - 'gateway-config=/workspace/awsConfig.yaml'
      - 'JAVA_TOOL_OPTIONS=-Dhttp.proxyHost=my.local.proxy -Dhttp.proxyPort=1234 -Dhttps.proxyHost=my.local.proxy -Dhttps.proxyPort=1234'
    volumes:
      - ./awsConfig.yaml:/workspace/awsConfig.yaml:rw

```

By default, the agent will use the proxy for all connections, so for both the connection to API Control Plane, as well as for connecting to your gateway. In case you don’t want to use the proxy when connecting to your gateway, you can add the following at the end of JAVA_TOOL_OPTIONS:

`-Dhttp.nonProxyHosts=GATEWAY_HOST`

For full documentation on java proxy configuration, go here:

[Java Development Kit Version 17 API Specification](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/net/doc-files/net-properties.html)

