# Salesforce connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-a2be25e0-6485-4ea5-913d-aa5ac2fbf19b"/>
</head>


The Salesforce connection represents a single Salesforce organization, including login credentials.

If you have multiple organizations or sandbox instances, you need a separate connection for each. You can pair a single connection with different Salesforce operations to perform a unique action against a Salesforce organization.

## Connection tab 

**URL** - 
 The default URL for new Salesforce connection’s web services is changed. For production this should always be:


`https://login.salesforce.com/services/Soap/u/<your_version_of_Salesforce>`

:::note Important

Versions of the SOAP API older than version 30.0 are no longer supported. You can reference which version numbers are currently supported at [API End-of-Life Policy](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/api_rest_eol.htm). See [List Available REST API Versions](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/dome_versions.htm) to view summary information about currently available REST API Versions.

:::

 Integrations using outdated URLs continue to show the original configuration but are redirected automatically.

 To take advantage of the functionality provided by Bulk API v2, update the URL to Salesforce API version 41.0 or later.

**User** - 
 The user name to log in to Salesforce. The user must have sufficient permissions to use the API and perform the necessary actions required by your integration scenario.

**Password** - 
 The password to log in to Salesforce. The password is often concatenated with a security token. See the [Replacing your Salesforce password with a password and security token](../Connectors/t-atm-Replacing_your_Salesforce_PW_with_a_password_and_s_820257f1-fa52-453c-afb6-8075c9aabd84.md) topic for more information.
  
**Version** - 
 The connector supports the latest API version listed at [API End-of-Life Policy](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/api_rest_eol.htm) automatically without needing connector updates.


**Maximum Concurrent Connections** - 
 Sets the maximum number of concurrent connections to the Salesforce application. Enter up to 25. The default is 10.
