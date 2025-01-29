# Forward Proxy settings for your API Gateway 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-c56fb78c-3025-44d6-9437-9263939465ab"/>
</head>


Within the API Gateway settings page there are specific settings that enable you to set up a forward proxy for your API Gateway. To set up a forward proxy, you must set each of these settings within the settings of the API Gateway.

## Properties panel, Custom tab 

The Properties panel Custom tab can be used to set container and system properties that you do not see on the Basic or Advanced tabs to modify the configuration of an API Gateway. Only certain properties are available to view if the Gateway is offline.

Many properties require you to restart the Gateway after you set or change the property. Select the **Restart on Save** option before saving the properties. Only Gateway owners can restart them.

When you open the Properties panel, the properties that were in effect when the Gateway started are shown. If you modify the properties after the Gateway started, those changes will not take effect until you restart the Gateway.

:::caution 

We do not validate the properties that you set on the Custom tab. 

:::

#### Container properties

Container properties for an API Gateway are stored in the `<installation\_directory\>/conf/container.properties` file. Although you can use a text editor to edit these properties in this file, it is easier and it is recommended that you edit the properties in the Properties panel instead.

Set the following custom container property as part of your forward proxy set up. This custom property is only available locally, remote access is not supported.

**com.boomi.container.proxyPassword**  
Set this value to the clear-text value of your password.

:::info 

If you use the ProxyUser property without setting the password, the API Gateway will not start. In this case, errors are not logged.

:::

Other Properties are discussed in [API Gateway settings](/docs/Atomsphere/API%20Management/Topics/api-API_Gateway_settings_adc5d3c7-15ef-4c50-8ac8-af36fe0fc5fe.md).

#### System properties

System properties for an API Gateway are stored in the `<installation\_directory\>/bin/atom.vmoptions` file.

One of the following two custom system properties are required if your forward proxy requires user authentication.

**-Djdk.http.auth.tunneling.disabledSchemes=""**  
Set this property for secure \(https\) API Gateway connections.

**-Djdk.http.auth.proxying.disabledSchemes=""**  
Set this property for unsecure \(http\) API Gateway connections.

## Forward Proxy Settings panel 

Use the Forward Proxy Settings panel to specify the forward proxy server settings for API executions. A forward proxy accepts requests sent from the API Gateway and forwards the requests to its desired destination. The forward proxy settings on the API Gateway apply to connections to the backend Atoms, Molecules or Clouds, or third-party service (such as an API Proxy) and to connections to the Identity Provider with JWT Authentication.

**Host Address8**  
The IP address or DNS name associated with the forward proxy server.

**Port Number**  
The Port number associated with the forward proxy server.

**Proxy Type**  
The Proxy Type, HTTP or SOCKS5, associated with the forward proxy server’s port.

**User Name**  
The user name associated with the forward proxy.

**Password**  
The password associated with the user for the forward proxy.