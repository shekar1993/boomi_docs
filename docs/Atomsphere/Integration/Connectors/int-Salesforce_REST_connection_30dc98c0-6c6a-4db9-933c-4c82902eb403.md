# Salesforce REST connection

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-30dc98c0-6c6a-4db9-933c-4c82902eb403"/>
</head>


The Salesforce REST connection represents a single Salesforce organization, including login credentials. If you have multiple organizations or sandbox instances, you need a separate connection for each. You can pair a single connection with different Salesforce operations to perform a unique action against a Salesforce organization.

## Connection tab

**Authentication Type** - Select the authentication type to connect with the service: User Credentials or OAuth 2.0. When using User Credentials, provide the **User Name** and **Password** in this tab. When using OAuth 2.0, select the **Grant Type** completing the required subfields.

**URL** - The string to establish the connection to the Salesforce web service. This URL should be the same as the one from your Salesforce account. You can change the instance name and version number as needed. The default value is `https://na7.salesforce.com/services/data/v50.0`.

**Username** - The user name to log into Salesforce.

**Password** - The password to log into Salesforce.

:::note 

 The password is a combination of your password and a security token. To learn more, see the prerequisites in the [Salesforce REST connector](../Connectors/int-Salesforce_REST_connector_9fe91520-cc0b-451e-93da-870ea9ce9d82.md) topic.

:::


## OAuth 2.0 tab

**Grant Type** - You can choose either **Authorization Code** or **Client Credentials**. 

**Client ID** - The Consumer Key.

**Client Secret** - The Consumer Secret.

**Authorization Token URL** - The default value is `https://login.salesforce.com/services/oauth2/authorize`.

**Access Token URL** - The default value is `https://login.salesforce.com/services/oauth2/token`.

**Access Token** - The button that generates the token.



