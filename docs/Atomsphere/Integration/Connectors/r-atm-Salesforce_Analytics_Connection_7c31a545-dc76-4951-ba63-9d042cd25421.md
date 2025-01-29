import TestConnection from './_TestCon.md'

# Salesforce Analytics connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-7c31a545-dc76-4951-ba63-9d042cd25421"/>
</head>


The Salesforce Analytics connection defines the user and the web service.

## Connection tab 


**URL** - 
Use Salesforce’s new endpoint. For production this should always be:

`https://login.salesforce.com/services/Soap/u/<your_version_of_Salesforce>`

Integrations using the older Salesforce URL continue to show the original configuration but are redirected automatically.

**User** - 
 The user name used to log into Salesforce. The user must have sufficient permissions to use the API and perform actions designated by your integration scenario.

**Password** - 
 The password used to log into Salesforce. Older Salesforce passwords have been replaced by a combination of password and security token. See the [Salesforce connector](../Connectors/r-atm-Salesforce_Connector_6ff3c702-e986-41a1-be5b-a00e76ded0a5.md) topic for more information.

<TestConnection />