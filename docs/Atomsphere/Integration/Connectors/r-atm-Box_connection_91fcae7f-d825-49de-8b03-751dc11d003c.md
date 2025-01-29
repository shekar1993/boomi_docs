# Box connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-91fcae7f-d825-49de-8b03-751dc11d003c"/>
</head>


The Box connection represents a single Box account, including sign in credentials.

If you have multiple accounts, use a separate connection for each account and configure the URL accordingly. Pair a single connection with a different Box operation to perform unique actions on a Box account.

## Connection tab 

Box uses the OAuth 2.0 protocol for authentication and authorization. The connection fetches OAuth 2.0 credentials from the Box API \(see the link below\). The client obtains an access token from the authorization service, extracts a token from the response, and then sends the token to the Box API for which you request access. The connector automatically manages refresh tokens.




**Connection Type** - 
Identifies the secure login type as OAuth 2.0.

## **OAuth 2.0** tab 

:::note

For OAuth 2.0 authentication, you may need to specify in the external application the Boomi callback or redirect URL. The callback URL is `https://platform.boomi.com/account/<your__account_ID>/oauth2/callback` where `<your__account_ID>` is your Integration account ID. You can also find your account ID in the Integration platform at Settings > Account Information and Setup > Account Information.

:::


**Client ID** - 
The client ID obtained from the Box Developer Console.

**Client Secret** - 
 The client secret obtained from the Box Developer Console.

**Access Token** - 
The encrypted access token retrieved from the Box Developer Console used to access protected resources. Click **Generate**. When a new window opens asking you to confirm offline access, click **Allow**. A second message indicates that the access token was received and successfully generated.

## Test Connection

You can test your connection settings before you use or save the connection in a process. The Test Connection ensures that your specified settings are correct, valid, and accessible. If the test connection is successful, you can save the connection. Otherwise, review and correct any incorrect settings, then test again.

:::info Attention

You can only run the **Test Connection** against containers associated with your account (local Atoms, Molecules, and Atom Clouds).

:::