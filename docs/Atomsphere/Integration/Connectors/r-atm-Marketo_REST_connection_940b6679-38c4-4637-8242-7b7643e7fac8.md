import TestConnection from './_TestCon.md'

# Marketo REST connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-940b6679-38c4-4637-8242-7b7643e7fac8"/>
</head>


The Marketo REST connection represents and contains all of the information you need to connect and sign into a single Marketo account.

## **Connection** tab 

If you have multiple accounts, you need a separate connection for each. You can pair a single connection with different Marketo operations to perform a unique action against a Marketo account instance.

The Marketo REST connector supports OAuth 2.0 for authentication and the connection automatically refreshes the authentication token.



**Endpoint URL** - 
 Enter the Endpoint URL for the Marketo service. For example, `https://064-CCJ-768.mktorest.com/rest`. You can find the Endpoint URL on the Marketo Admin \> Web Services panel in the REST API section.

**Identity URL** - 
 Enter the Identity URL for the Marketo account instance. For example, `https://064-CCJ-768.mktorest.com/identity`. You can find the Identity URL on the Marketo Admin \> Web Services panel in the REST API section.

**Client ID** - 
 The client ID obtained in Marketo from a Custom Service to authenticate with Marketo. You can find the Client ID in Marketo in the **Admin** \> **LaunchPoint** menu by selecting the custom service and clicking **View Details**.

**Client Secret** - 
 The client secret obtained in Marketo. Click **Click to Set** to open the **Password** window, and enter or paste the alphanumeric Client Secret associated with the Client ID. You can find the Client Secret in Marketo in the **Admin** \> **LaunchPoint** menu by selecting the custom service and clicking **View Details**. When you are done, click **Apply**.

<TestConnection />