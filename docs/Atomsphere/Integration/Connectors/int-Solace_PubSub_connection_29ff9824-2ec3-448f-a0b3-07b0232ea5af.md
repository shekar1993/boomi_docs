# Solace PubSub+ – Partner connection

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-29ff9824-2ec3-448f-a0b3-07b0232ea5af"/>
</head>


The Solace PubSub+ - Partner connection specifies how to connect to a PubSub+ event broker.  The connection can be reused for multiple connection operations that utilize the same broker.

## Connection tab

If using a Solace Cloud broker, the connection properties can be found by:

1.  Navigating to the [Cluster Manager](https://console.solace.cloud/services) in the PubSub+ Platform.
2.  Selecting a event broker service.
3.  Clicking the **Connect** tab.
4.  Expanding the Solace Messaging section.



**Host** - 
The host address to the PubSub+ event broker.  If there are multiple hosts to provide high availability, this field can be a comma-separated protocol://host:port list. For instance, `tcp://primaryHost:primaryPort,tcp://backupHost:backupPort`

**Message VPN Name** - 
The name of the Message VPN. \(For larger enterprises, Message VPNs separate a single event broker into multiple logical parts.\)

**Client Username** - 
 A username that is authorized to connect to the broker.

**Password** - 
 The password associated with the provided client username.

**Custom Properties** - 
 Any additional properties that need to be set for the connection. Available properties can be found in the [Reference Guide](https://docs.solace.com/API-Developer-Online-Ref-Documentation/java/com/solacesystems/jcsmp/JCSMPProperties.html). Note that Client channel is the only supported complex property. Use "client\_channel" as the key and a JSON formatted string as the value. For instance, `{ “connectRetries”: 3, “reconnectRetries”: 2 }`.

**API Token** - 
 An Event Portal token with read permissions. Boomi uses this token to import event-driven architecture artifacts like schemas and topic strings from the Event Portal, accelerating development and applying best practices.

**API Version** - 
 To select a specific version of the Event Portal API used for the imports. PubSub+ Event Portal 2.0 is selected by default. The steps to generate the API Token for either of the versions remains the same. More about PubSub+ Event Portal versions can be found [here](https://docs.solace.com/Cloud/Event-Portal/event-portal-lp.htm).

To get an Event Portal V1/V2 token:

1.  Navigate to [Create Token](https://console.solace.cloud/api-tokens/create) in the PubSub+ Platform.
2.  Name the token "Event Portal Read Access".
3.  Under the **Event Portal** Permission Set, select the **Read** toggle.
4.  Click **Generate Token** at the bottom of the screen.
5.  Copy the Event Portal Token to a secure location. It cannot be recreated.

:::note

For a list of available JCSMPProperties, see the [Solace reference documentation](https://docs.solace.com/API-Developer-Online-Ref-Documentation/java/com/solacesystems/jcsmp/JCSMPProperties.html).

:::

## OAuth connection

Set the AUTHENTICATION_SCHEME property as AUTHENTICATION_SCHEME_OAUTH2 to use OAuth2.0 authentication. Keep the following important considerations in mind:

**Basic Authorization** - 
 No need to provide credentials for Basic Authorization \(Username and password\).

**OAuth Scheme** - 
 You need to set the AUTHENTICATION\_SCHEME as `AUTHENTICATION_SCHEME_OAUTH2` on Custom properties.

**Access Token** - 
 You need to set the property `OAUTH2_ACCESS_TOKEN` with a valid \(Non-expired\) access token.

**Token Refresh** - 
 If the access token is temporary \(it has an expiration date\) and you do not want the connector to lose connection while running, you need to provide the following properties in Custom properties in addition to the access token to ensure the connector is able to automatically refresh the token and keep the connection alive:

-   Refresh Token as `OAUTH2_REFRESH_TOKEN`
-   Client ID as `OAUTH2_CLIENT_ID`
-   Refresh Token URL as `OAUTH2_REFRESH_TOKEN_URL`

:::note Attention 

**Disclaimer**: Our system does not retain fetched access or refresh tokens due to environmental constraints. In the event of a connector restart, the original user-provided refresh token is used to reestablish the connection. If this token has expired or is invalid, the connector may fail to connect. For a more long-lasting stable connection, consider adopting the Client Credentials strategy outlined below.

:::

**Client Credentials Grant** - 

If you prefer the application to fetch the Access token on your behalf using the client credentials grant, provide the following properties: 

- OAuth Token provider URL as `OAUTH2_TOKEN_PROVIDER_URL`
- Client ID as `OAUTH2_CLIENT_ID`
- Client Secret as `OAUTH2_CLIENT_SECRET` (You might choose to select the encrypted option for this sensitive data)

The connector will handle the token retrieval for you, so no need to provide the access token.

Optionally, for additional parameters to the token request, you can provide: 
- Scope as `OAUTH2_SCOPE`
- Resource as `OAUTH2_RESOURCE`
- Audience as `OAUTH2_AUDIENCE`

**SSL Verification** - 
Optionally, if you provide the OAuth server URL to refresh the token and you want to disable SSL verification, you must set SSL\_VALIDATE\_CERTIFICATE as false.

**Token Refresh Buffer** - 
The Token is refreshed periodically using a buffer time percentage over the access token lifetime. By default, it's 30% of the access token lifetime. Optionally, you can adjust the buffer percentage by setting the property OAUTH2\_REFRESH\_BUFFER\_PERCENTAGE in the range from 0 to 1, excluding 0.

**Token Cache** - 
The access token and refresh token are not cached, therefore in case the connector is down for any reason, after the reinitialization, the connector will use the original token provided on Connection tab by the user. If at the time, the tokens are not valid anymore, the connector will be unable to establish a connection.