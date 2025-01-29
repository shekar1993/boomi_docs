# Aria – Partner connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-e1e230eb-2873-4136-bd00-ed921a972e88"/>
</head>


The Aria – Partner connection defines the URL and credentials needed to access a single Aria instance.

You can use the same Aria – Partner connection to connect to difference services. When you start to build your processes, you can set up your Aria – Partner connection to point to a sandbox instance by using the sandbox URL in the connection. When you are ready to run the processes in a production environment, you only need to change the connection’s URL to point to the production instance URL. When the process runs, it uses the new URL.

## Connection tab 



**URL** - 
Used to select the base URL for the Aria web service. The following sandbox and production environments are available: Sandbox Future, Sandbox Current and Production. For example, to select the connection URL for the production environment, select Production.

**Client No** - 
 The client number for logging into the Aria web service.

**Authentication Key** - 
The valid authentication key for logging into the Aria services.

**API Version** - 
 Used to select an Aria API version. All Aria web service API versions are listed.

:::note

The Aria – Partner connection automatically performs a login call to obtain a valid sessionid.

:::
