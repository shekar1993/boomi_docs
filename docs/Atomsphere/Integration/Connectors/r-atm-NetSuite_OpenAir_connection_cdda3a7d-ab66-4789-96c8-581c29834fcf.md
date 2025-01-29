# NetSuite OpenAir connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-cdda3a7d-ab66-4789-96c8-581c29834fcf"/>
</head>


The NetSuite OpenAir connection represents a single instance, including sign-in credentials.

If you have multiple instances or sandbox instances, you need to use a separate connection for each and configure the URL accordingly. You can pair a single connection with different NetSuite OpenAir operations to perform a unique action against a NetSuite OpenAir instance.

## **Connection** tab 

**OpenAir SOAP Endpoint URL** - 
 The endpoint URL for the NetSuite OpenAir service. For example, `https://<OpenAirHostName>.com/soap`. If you are using a sandbox, your URL might look something like this: `https://sandbox.openair.com/soap`.

**Company**   
  The company code used to determine the instance for the connection.

**Login User Name** - 
 The user name used to sign in to the NetSuite OpenAir service.

**Login Password** - 
 The password associated with the sign-in user name.

**API Namespace** - 
  The namespace required for API access.

**API Key** - 
 The code required for API access.
