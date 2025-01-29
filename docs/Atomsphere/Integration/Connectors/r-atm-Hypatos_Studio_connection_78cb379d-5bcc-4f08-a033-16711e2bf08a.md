# Hypatos.ai - Partner connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-78cb379d-5bcc-4f08-a033-16711e2bf08a"/>
</head>


The Hypatos.ai – Partner connection represents and contains all the information that is needed to connect your account to the Boomi integration.

If you have multiple Hypatos Studio accounts, use a separate connection for each of them and configure their respective client credentials. You can pair a single connection with different Hypatos.ai – Partner operations to perform a unique action against a Hypatos Studio account.

## Connection tab 

The Hypatos.ai – Partner connection uses OAuth2.0 authorization protocol. Before setting up the connection details, you should request your API service account from the Hypatos service portal. Once created, you will get a unique pair of client ID and client secret keys to be used for authorization token retrieval.

To get an authorization token, you must define the following fields in the Connection tab:

- **Endpoint URL** - The authorization server. Depending on your Hypatos service account, different servers may apply. Currently available values are: `https://api.cloud.hypatos.ai/v2`, `https://api.hypatos.com/v2`, and `https://api.dev.hypatos.ai/v2`. The default value is `https://api.cloud.hypatos.ai/v2`

And the following fields in the OAuth 2.0 tab:

- **Grant Type** - Should be always set to “Client Credentials”.

- **Client Id** - The unique client ID that was provided by Hypatos when requesting your API service account.

- **Client Secret** - The unique client secret that was provided by Hypatos when requesting your API service account.

- **Scope** - A list of space-delimited, case-sensitive strings. The strings are defined by the authorization server. Defined scopes should match the ones assigned to your API service account

- **Access Token URL** - The URL for authorization token retrieval. Depending on your Hypatos service account, different URLs may apply. The default value is `https://api.cloud.hypatos.ai/v2/auth/token`


## Test Connection 

You can test your connection settings before you use the connection in a process or before you actually save the connection. Test Connection ensures that the connection settings that you specify are correct, valid, and can be accessed. If the test connection is successful, you can save the connection. Otherwise, review and correct any incorrect settings, then test again.

:::note

Test Connection may only be performed against containers associated with your account \(local Atoms, Molecules, and Atom Clouds\).

:::

## Test Connection troubleshooting

To ensure that Test Connection and browsing are successful, verify that you have proper permissions. For more information about the permissions necessary for object operations, see the [linked resource](https://connect.cloudblue.com/community/developers/api/).