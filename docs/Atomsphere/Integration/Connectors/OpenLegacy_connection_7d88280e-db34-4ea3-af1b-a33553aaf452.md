# OpenLegacy Hub - Partner connection

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-7d88280e-db34-4ea3-af1b-a33553aaf452"/>
</head>


The OpenLegacy Hub - Partner Connector connection represents a single instance and contains the connection settings for the OpenLegacy Hub, including the connection URL, Hub API Key, and Deployed Application Base URL.

## Connection tab 

**Hub Backend URL**: The connection string to establish a connection to the OpenLegacy Hub multi-tenant cloud environment is always \([https://api.ol-hub.com](https://api.ol-hub.com/)\) or your private on-premise OpenLegacy Hub instance.

**Hub API Key**: Each OpenLegacy Hub environment requires a unique API Key for secure connectivity. Before extending the to core systems via the OpenLegacy Hub, first register an OpenLegacy Hub Account and generate a unique API Key.

**Deployed Application Base URL**: The base URL of the application which was deployed. The user is creating an API using OpenLegacy Hub. The deployed API is called "Application". The Deployed Application Base URL can be found in the Run Time Dashboard by clicking **Copy Endpoint URL**. An application can be no-code, low-code, or full-code.

## Test Connection

You can test your connection settings before using the connection in a process or even before saving the connection. Test Connection ensures that the connection settings specified are correct, valid, and your Boomi environment can connect to your OpenLegacy Hub Instance and Deployed Application. If the test connection is successful, you can save the connection. Otherwise, review and correct any incorrect settings, then test again.

Contact OpenLegacy Support at [support@openlegacy.com](mailto:support@openlegacy.com) to request the dependencies file.