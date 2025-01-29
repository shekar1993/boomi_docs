import TestConnection from './_TestCon.md'

# Zuora REST connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-40cd2bf6-8f25-4e95-8905-32cbf4c92791"/>
</head>


The Zuora connection represents a single Zuora instance or tenant, including login credentials.

If you have multiple Zuora tenants, including the Zuora sandbox tenant, you need a separate connection component for each. You can pair this connection with different Zuora REST operations to perform a unique action against a Zuora instance.

When you build your processes, point your Zuora REST connection to a sandbox instance by using the base URL and access token URL in the connection. When you are ready to run the processes in a production environment, you only need to change the two URLs to point to the production instance URL. When the process runs, it uses the new combination.

## Connection tab 

The Zuora REST connector uses your Client ID and Client Secret to authenticate you.

**Authentication Type** -
  OAuth 2.0 is the default and the only type available.

**Base URL** - 
 Enter the REST endpoint to connect to, for example `https://rest.zuora.com` for U.S. production.

## **OAuth 2.0** tab

:::note

For OAuth 2.0 authentication, you may need to specify in the external application the Boomi callback or redirect URL. The callback URL is `https://platform.boomi.com/account/<your_account_ID>/oauth2/callback` where `<your__account_ID>` is your Integration account ID. You can also find your account ID in the Integration platform at **Settings > Account Information** and **Setup > Account Information**.

:::

Because Zuora recommends using OAuth v2.0 to authenticate to the Zuora REST API, that is the only authentication method provided in the connector.

**Client ID** -
 The client ID obtained from Zuora when you create the OAuth client.

**Client Secret** -
 The client secret obtained from Zuora when you create the OAuth client.

**Access Token URL** -
 The URL of the token endpoint to retrieve and refresh tokens. Typically, this is the base URL with `/oauth/token` appended, for example `https://rest.zuora.com/oauth/token`.

## Multi-entity 

Zuora’s Multi-entity feature, which is in limited availability, is supported through document properties where you can specify parameter values for Entity Id and Entity Name. For more information about using and configuring Document properties, see the linked Document properties topic.


**Entity Id** -
 The Id of the entity to which you have permission to access.

**Entity Name** -
 The name of the entity to which you have permission to access.

:::note

A Zuora issue currently prevents the Entity Name parameter from being validated.

:::

<TestConnection />