import TestConnection from './_TestCon.md'

# Workday connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-c9de8d9a-cd66-4d56-9f4a-2cb6a72b472f"/>
</head>


The Workday connection represents a single Workday instance, including login credentials.

You can use the same Workday connection to connect to difference services, and pair this connection with different Workday operations to perform a unique action against a Workday instance.

When you start to build your processes, you can set up your Workday connection to point to a sandbox instance by using that URL in the connection. When you are ready to run the processes in a production environment, you only need to change the connection’s URL to point to the production URL. When the process runs, it uses the new URL.

## Connection tab 



**URL** - 
 The URL for the Workday service, such as `https://<workday host name>.workday.com/ccx/service/<tenant name>/`. The trailing ‘/’ is required. Configure the bracketed Workday host name and tenant name to successfully connect to the correct instance.

**Version** - 
  The web service version including point releases, such as 23.2. You do not need to enter ‘v’ because Integration inserts it for you.

**Username** - 
  The user name for logging into the Workday service with the format `username@tenantname`.

**Password** - 
  The password for logging into the Workday service.
  <TestConnection />