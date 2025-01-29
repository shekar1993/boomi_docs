import TestConnection from './_TestCon.md'

# Oracle CRM On Demand connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-15a2fc94-38ea-4c95-9e0f-51402ca65b49"/>
</head>


The Oracle CRM On Demand connection represents a single instance, including sign-in credentials.

If you use multiple services, you need a separate connection component for each. You can pair this connection with different Oracle CRM On Demand operations to perform a unique action against an Oracle CRM On Demand instance.

When you start to build your processes, you can set up the connection to point to a sandbox instance by using the URL in the connection. When you are ready to run the processes in a production environment, you only need to change the connection’s URL to point to the production instance URL. When the process runs, it uses the new URL.

## Connection tab 

**Oracle CRM On Demand Host URL** - 
 The URL for the Oracle CRM On Demand host serving the WSDL. For example: `https://secure-slsomxvga.crmondemand.com`. To locate the correct URL log in Oracle CRM On Demand, go to the Admin section and find the host name for the WSDL.

**User Name** - 
 The user name for signing in to the host.

**Password** - 
 The password for signing in to the host.

**Is Staging** - 
 Used to indicate if this is a staging \(testing\) environment.

<TestConnection />