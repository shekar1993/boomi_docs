# OpenAPI connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-b1d2d5da-afe7-4ebb-88be-fa62b38cef00"/>
</head>


The OpenAPI connection represents a single HTTP connection to the OpenAPI specification describing the target service.

## Connection tab 

Configure the OpenAPI connection to a REST API.

**OpenAPI Specification** - 
The complete path \(URL\) to a valid OpenAPI specification, written in JSON or YAML, describing all of the required information about the target service. This can be an `http` or `https` address. For example, `https://petstore3.swagger.io/api/v3/openapi.json`

You can also specify a local OpenAPI specification by entering the appropriate path to the file, for example, `/some/local/path/openapi.json`

You can review, modify, add, and remove profiles generated from the specification.

**Server** - 
The URL where the HTTP service resides and is deployed to, and where the OpenAPI connector makes a request and gets a response from. This can be an `http` or `https` address. When using an SSL connection, you must manually import the certificate into the Java keystore so your process works successfully.

**Authentication Type** - 
Identifies the secure login type for the target service:

-   None — No login information is required.
-   Basic — Basic authentication is a simple authentication scheme that is built into the HTTP protocol. The client sends HTTP requests with the Authorization header containing the word `Basic` followed by a space and a base64-encoded `username:password` string. Because base64 is easily decoded and is not secure, Basic authentication should only be used together with other security mechanisms such as HTTPS/SSL.
-   Custom — If you do not want to use one of the Boomi Integration authentication types with the connection, you can use custom authentication credentials. Custom authentication adds an Authorization header with a value provided from the **Custom Authentication Credentials**. This authentication type is most suited for API token-based authentication.
-   Password Digest — Uses a two-step process to encrypt credentials by applying a hash function to the username and password. Password digest authentication is considered more secure than Basic authentication.
-   OAuth 2.0 — See the OAuth 2.0 tab section.

**Custom Authentication Credentials** - 
Click **Click to Set** and type or paste your custom credentials.

**User \(Basic, Password Digest\)** - 
The user name for authentication.

**Password \(Basic, Password Digest\)** - 
Click **Click to Set** and type or paste the password for authentication.

**Domain (NTLM)** - 
Enter the domain in which the username is registered.

**Workstation (NTLM)** - 
(Optional) Enter the workstation from which the request is coming.

**Preemptive authentication \(Optional for Basic, OAuth 2.0\)** - 

-   When selected, the connector builds and sends the authorization header to the server ahead of time in the initial request. Use preemptive authentication when you trust the server and to reduce the overhead of making an additional request.
-   When cleared, the authorization header is not sent to the server ahead of time in the initial request. The server sends the response back to the connector indicating the information it expects to authenticate. You can view the logging information \(equivalent to the "FINE" setting\) by setting the Atom's Enable Debug Logging property \(com.boomi.container.debug\). To learn more, see the topic [Enabling debug and trace logging in an Atom](../Integration%20management/t-atm-Enabling_logging_in_an_Atom_eb1edc08-109f-4608-bcb6-348dea654eb4.md).


:::note

Preemptive authentication is not applicable when Custom is selected as the **Authentication Type**, and the setting for this check box is ignored.

:::

## SSL settings 

You can optionally configure and upload private client certificates and public certificates for SSL authentication when creating the connection if they are required by the destination endpoint.

**Client SSL Certificate** - 
Select, edit, or create a private certificate component for SSL Client Authentication. The private certificate is used to verify your identity when sending requests to the endpoint. You must manually export the public certificate and provide it to your endpoint owner.

**Trust SSL Server Certificate** - 
Select, edit, or create a public certificate component for SSL server authentication. Contact the owner of the endpoint to obtain its public certificate and then import it into a certificate component.

If you are connecting to a secure site \(i.e., the URL begins with `https`\) that does not use a certificate signed by a trusted root authority, such as Verisign or Thawte, obtain a copy of the site's public certificate and import it into your Integration account. Once imported and added to the connection, it is applied implicitly whenever the connector connects to that endpoint. However, if the site uses a certificate from a trusted root authority, you do not need to import the certificate; it is applied automatically by Integration.

**Cookie Scope** - 
Cookie scope is a cookie handler that specifies the persistence of cookies. Persistence is whether cookies can be reused in multiple sessions, and where they are used. You can use trace logging to see if cookie scope is set to Connector step or Ignored.

-   Global — cookies are shared in all processes throughout the Atom JVM life cycle. This is the default.
-   Connector step — cookies are isolated and shared only for the duration of the Connector step execution.

-   Ignored — cookies are discarded, even if they are requested by the server.

**API Key Request Location (API Key only)** - 

Select the location of the API Key request. The following options are available:
- Request Header
- Query Parameter
- Cookie


## **OAuth 2.0** tab

:::note

For OAuth 2.0 authentication, you may need to specify in the external application the Boomi callback or redirect URL. The callback URL is `https://platform.boomi.com/account/<your_account_ID>/oauth2/callback` where `<your__account_ID>` is your Integration account ID. You can also find your account ID in the Integration platform at **Settings > Account Information** and **Setup > Account Information**.

::: 

supports OAuth 2.0 authorization for on-premise and cloud-based integrations. OAuth 2.0 is not backwards compatible with OAuth 1.0 or 1.0a. If you use custom policy files, you must edit account permissions to use OAuth 2.0 authentication with your cloud application.

When the OpenAPI connection's **Authentication Type** is set to OAuth 2.0, enter the following information \(the fields vary according to the selected **Grant Type**\):

**Grant Type** - 
Select the grant type for authorization. The supported grant types are:

-   Authorization Code — The standard, 3–Legged OAuth2 authorization where you grant the client an authorization code that can be exchanged for an access token.
-   Resource Owner Credentials — Requires username and password.

 -   Client Credentials — Uses client credentials to retrieve an access token directly instead of asking for user authorization. This authorization is typically used for administration tasks specific to a client.

 - JWT Bearer Token — Uses a JSON Web Token (JWT) that encodes all relevant parts of an access token into the access token itselfinstead of having to store them in a database.




**Client ID** - 
The client ID obtained from the application.

**Client Secret** - 
The client secret obtained from the application.

**Authorization Token URL** \(Authorization Code\)
The endpoint URL used to obtain an authorization token.

**Scope** - 
You can add one or more permissions, case-sensitive and separated by a space, to application request URLs. If you change scope permissions, you need to re-authenticate to ensure that all of the requested permissions are granted.

**Add Authorization Parameter \(Authorization Code\)** - 
\(Optional\) The name and value of extensible endpoint parameters.

**Access Token URL** - 
The endpoint address provided by the application to make API requests.

**Add Access Token Parameter** - 
\(Optional\) The name and value of additional or custom token parameters required by your application.

**Access Token \(Authorization Code, Resource Owner Credentials\)** - 
The encrypted access token retrieved from the application to access protected resources.

**Generate \(Authorization Code, Resource Owner Credentials\)** - 
Click to generate the access and refresh tokens. When a new window opens asking you to confirm offline access, click **Accept**. A second message indicates the access token was received and successfully generated.

**Signature Algorithm (JWT)** - 
Select the cryptographic Secured Hash Algorithm (SHA) used to generate the digital signature of the key. The options available are No digital signature or MAC performed or RSASSA-PKCS-v1_5 using SHA-256

**Signature Key (JWT)** - 
Identifies the private key used to sign the JWT

**Issuer (JWT)** - 
Identifies the principal that creates, signs, and issues the claim.

**Subject (JWT)** - 
Identifies the principal that is the subject of the claim.

**Audience (JWT)** - 
The intended audience of the JWT.

**Expiration (JWT)** - 
The expiration time (in seconds) on or after which the token is no longer valid for processing.

**ID Generator (JWT)** - 
Methods for generating JWT IDs. Only value is NONE.

**Add Extended JWT Claim (JWT)** - 
(Optional) Key value pairs of additional claims that may be required to be sent to the endpoint.


## Extending OAuth 2.0 fields 

OAuth 2.0 fields are extensible. When the connection settings values have been configured, overrides are applied after the cached version of the access token expires and refreshes.

### Using extensions with the Client Credentials grant type

To use extensions with the Client Credentials grant type, click the **Extensions** tab in a process. In the Extensions window, click the **Connection Settings** tab. In the Select extensible properties list, click the **Access Token** check box. When selected, this field applies overrides even though you do not see an access token field in the connection settings Client Credentials grant type. When cleared, the connection executes the default settings.

The connector automatically retrieves refresh tokens.

## Connection Pool tab 

Integration manages connection pools as follows:

-   A connection pool is identified by the connection component’s ID and its connection settings. This combination enables you to configure one component to communicate. For example, you can define process extensions for connection settings so that one component can operate in separate connection pools.
-   When you change a connection’s primary settings \(for example, **User Name** or **Password**\) on the Connection tab, a new connection pool is created when the connection is redeployed. This allows existing pools used by deployed processes to continue to operate without interruption.
-   When you change a connection’s secondary settings \(for example, **Maximum Connections** or **Minimum Connections**\) on the Connection Pool tab, the existing connection pool is updated the first time the new version of the connection is requested.
-   Every 30 minutes, Integration monitors all connection pools used by the connector to reclaim unused connections and to restart extra connections needed to satisfy the **Minimum Connections** setting. When a connection pool has not been used in six hours and it has no active connections, it is considered a dead or surplus connection.

There are several ways you can change your pool settings:

-   To override the connection pool settings, change your connection settings and restart your Atom.
-   To make changes immediately, change your connection settings and redeploy your process.
-   To make changes without restarting your Atom, for example in extensions, make the changes. Then, leave the connection unused for 30 minutes in a process. The idle timeout generates a fresh connection pool the next time your process runs.


:::note

Most integrations do not require connection pooling. Consider pooling if you use low latency to speed up processes or if you execute a large number of statements during an integration.

:::

The following fields appear on the Connection Pool tab:

**Enable Connection Pooling** - Select this checkbox to enable connection pooling and make the other fields active. Connection pooling may increase performance by using resources more efficiently.
* **Max Simultaneous Requests** - If Enable Connection Pooling is selected, this is the maximum number of simultaneous requests allowed in the connection at any time. The default is 20. If a value is not provided, or you set it to either -1 or 0, the default of 20 is used.
* **Idle Timeout(s)** - If Enable Connection Pooling is selected, this is the maximum length of time, in seconds, that a connection can remain open in an idle state before it is closed. The default is 30 seconds. If a value is not provided, or you set it to either -1 or 0, the default of 30 is used.
