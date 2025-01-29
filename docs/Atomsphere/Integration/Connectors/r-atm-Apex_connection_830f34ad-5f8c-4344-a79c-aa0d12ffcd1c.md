import TestConnection from './_TestCon.md'

# Salesforce Apex connection

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-830f34ad-5f8c-4344-a79c-aa0d12ffcd1c"/>
</head>


The Salesforce Apex connection defines the URL and credentials needed to access a single Salesforce account.

## Connection tab 
This connector does not support the ability to specify the type of security to use for the connection. To access authenticated and protected resources, Boomi recommends that you use the Web Services SOAP Client connector. In the connection, specify the security and authentication information to make a successful connection.

**URL** - 
The default URL for new Salesforce Apex connection’s web services. For production, always use the following:

`https://login.salesforce.com/services/Soap/u/18.0`

Integrations using an older URL continue to show the original configuration, but are redirected automatically.

**Username** - 
The user name used to log into Salesforce. The user must have sufficient permissions to use the API and perform the necessary actions required by your Integration scenario.

**Password** - 
The password used to log in to Salesforce. This text is often concatenated with a security token. See the [Salesforce connector](../Connectors/r-atm-Salesforce_Connector_6ff3c702-e986-41a1-be5b-a00e76ded0a5.md) topic for more information.

<TestConnection />