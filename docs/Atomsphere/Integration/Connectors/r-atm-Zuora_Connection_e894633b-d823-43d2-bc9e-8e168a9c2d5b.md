import TestConnection from './_TestCon.md' 

# Zuora connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-e894633b-d823-43d2-bc9e-8e168a9c2d5b"/>
</head>


The Zuora connection represents a single Zuora instance or tenant, including login credentials.

If you have multiple Zuora tenants \(including sandbox tenants\), you need a separate connection component for each. You can pair this connection with different Zuora operations to perform a unique action against a Zuora instance.

When you build your processes, point your Zuora connection to a sandbox instance by using the URL in the connection. When you are ready to run the processes in a production environment, you only need to change the connection’s URL to point to the production instance URL. When the process runs, it will use the new URL.

## Connection tab 

 
  

**Web Service Site** - 
 The Zuora web service site. The default for Production is `https://www.zuora.com/apps`. For the API sandbox, use `https://apisandbox.zuora.com/apps`.

**User Name** - The Zuora tenant user name for logging into the web service.

**Password** - 
 The Zuora tenant password for logging into the web service.

**WSDL version** - 
 The version of the Web Services Description Language to use.

:::note 

The Zuora connector automatically performs a login call to obtain a valid sessionId. The Zuora connector caches and reuses the sessionId returned by the login call for all subsequent API calls until the sessionId expires. This eliminates the need to perform a login call before every API call and improves the connector’s performance.

:::

<TestConnection />