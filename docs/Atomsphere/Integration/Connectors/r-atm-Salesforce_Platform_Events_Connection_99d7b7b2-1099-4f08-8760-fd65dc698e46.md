# Salesforce Platform Events connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-99d7b7b2-1099-4f08-8760-fd65dc698e46"/>
</head>


The Salesforce Platform Events connection represents and contains all of the information that is needed to connect to and sign in to a specific Salesforce account instance.

If you have multiple organizations or sandbox instances, you need a separate connection for each. You can pair a single connection with different Salesforce Platform Events operations to perform a unique action against a Salesforce instance.

## Instance URL 

A Salesforce instance is the specific configuration that you see when you sign in to Salesforce, and refers to the server that your Salesforce organization lives on. For example, an instance URL may be: `https://na44.salesforce.com`. Many Salesforce instances live together on the same server in a multi-tenancy environment.

To connect with your account instance, the connector uses the access token's `instance_url` property. The instance URL and its value are returned as part of the access token when you configure your OAuth 2.0 settings. The correct instance URL is used for all requests, even after the access token is refreshed.

:::note

Some access tokens are set to expire in as little as 15 minutes, forcing a refresh. If your refresh token is configured improperly, connections and operations can fail once the access token expires.

:::

## Configuring the Salesforce Refresh Token Policy 

Before you configure the connection's settings in the OAuth 2.0 tab, you must configure the Refresh Token Policy. Complete the following steps in Salesforce so the connected application can use refresh tokens:

1.  Enable "offline\_access" for the connected application.
2.  Include "refresh\_token" \(or "offline\_access"\) and "full" in the scope when generating the refresh token.
3.  Configure the refresh token so that it does not expire.

:::note

To learn more about refresh tokens or their configuration requirements, see your Salesforce documentation.

:::

## Connection tab

The following field appears on the **Connection** tab:

**Replay Option** - 
 Determines how to catch up on missed events from Salesforce after the listener restarts, due to an event such as a connection failure. Select one of the following:

 -   **New Events** — retrieve only new events from a queue or topic.
 -   **Retained and New Events** — retrieve all retained events and new events from a queue or topic.


:::note

Boomi recommends using one listener on a channel. If you use multiple listeners, they can get out of sync. As an alternative, use a single listener that triggers sub-processes.

:::

## OAuth 2.0 tab

:::note

For OAuth 2.0 authentication, you may need to specify in the external application the Boomi callback or redirect URL. The callback URL is `https://platform.boomi.com/account/<your_account_ID>/oauth2/callback` where `<your__account_ID>` is your Integration account ID. You can also find your account ID in the Integration platform at **Settings > Account Information** and **Setup > Account Information**.

::: 

The Salesforce Platform Events connector uses the OAuth 2.0 protocol for authentication and authorization. A successful connection fetches OAuth 2.0 credentials from the Salesforce API version 41. The client obtains an access token from the authorization service, extracts a token from the response, and then sends the token to the Salesforce API that you are requesting to access. The connector automatically manages refresh tokens, however, there are additional configuration steps in Salesforce as previously described.
 


**Client ID** - 
The client ID obtained from Salesforce.

**Client Secret** - 
  The client secret obtained from Salesforce.

**Authorization Token URL** - 
The endpoint address \(URL\) of the server authorizing the client.

**Scope** - 
 You can add one or more permissions, which are case-sensitive and separated by a space, to application request URLs. If you change scope permissions, you need to re-authenticate to ensure that all of the requested permissions are granted.

**Add Authorization Parameter** - 
 \(Optional\) The name and value of extensible endpoint parameters.

**Access Token URL** - 
 The URL of the token endpoint provided by Salesforce to make API requests.

**Add Access Token Parameter** - 
  \(Optional\) The name and value of additional or custom token parameters required by Salesforce.

**Access Token**   
  The encrypted access token retrieved from Salesforce. It provides the connector an instance URL and access to protected resources.

**Generate** - 
  Click to generate the access and refresh tokens. When a new window opens asking you to confirm offline access, click **Accept**. A second message indicates that the access token was received and successfully generated.

## Handshaking 

When a transport or handshake error occurs, the listener waits a set amount of time before trying to reconnect:

**Retry**  - 
  **Approximate wait time \(in seconds\)**

**1st**     
 0

**2nd**     
  10

**3rd**     
  30  

**4th**     
 60 

**5th**     
  120

**6th +**   
 300

The connector keeps trying to connect — there is no limit to the number of retries. Increasing the wait time between retries lowers the number of failed requests.