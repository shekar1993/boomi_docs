# REST Client connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-367e5540-3a08-44bd-a20b-ae3a93f62833"/>
</head>


The REST Client connection represents a single HTTP instance, including login credentials.

You can pair a single connection with different REST Client operations to perform a unique action against an HTTP instance.

## Connection tab 

Configure the REST Client connection to authenticate a user to a web server.

**Base URL** - 
The URL of the HTTP service to connect to. This can be an `http` or `https` address, but it must be URL encoded. When using an SSL connection for the REST execution, you must manually import the certificate into the Java keystore so your process works successfully.

**Authentication Type** - 
Identifies the secure login type:

-   None — No login information in required.
-   AWS Signature — See the AWS Signature authentication settings section.
-   Basic — Uses base64 encoding. Because user passwords are not encrypted and the target server is not authenticated, Basic is not a secure authentication.
-   Custom — Intended for services that do not follow the standard authentication schemes. With this authentication type, you use your own, custom authentication and set the Authorization header with any value you require.
-   Password Digest — Uses a two-step process to encrypt credentials by applying a hash function to the user name and password. Password digest authentication is considered more secure than Basic authentication.
-   NTLM — Uses an encrypted challenge/response protocol to authenticate a user. The system requesting authentication performs a calculation that proves it has access to the secured NTLM credentials.
-   OAuth 2.0 — See the OAuth 2.0 authentication settings section.
-   AWS IAM Roles Anywhere - See the AWS IAM Roles Anywhere authentication settings section.

**Custom Authentication Credentials** - 
(Custom authentication\) Click **Click to Set** and type or paste your custom credentials.

**User** - 
\(Basic, Password Digest authentication\) The user name for authentication.

**Password** - 
\(Basic, Password Digest authentication\) The password for authentication.

**Preemptive authentication** - 
\(Optional for Basic and OAuth 2.0 authentication\). Use preemptive authentication when you trust the server and to reduce the overhead of making an additional request. In general, preemptive authentication means that HTTP basic authentication credentials \(username and password\) are sent before the server replies with an unauthorized response asking for the credentials.

-   When selected, the connector builds and sends the authorization header to the server ahead of time in the initial request.
-   When cleared, the authorization header is not sent to the server ahead of time in the initial request. The server sends the response back to the connector indicating the information it expects to authenticate. You can view the logging information \(equivalent to the "FINE" setting\) by setting the Atom's Enable Debug Logging property \(com.boomi.container.debug\). To learn more, see the topic [Enabling debug and trace logging in an Atom](../Integration%20management/t-atm-Enabling_logging_in_an_Atom_eb1edc08-109f-4608-bcb6-348dea654eb4.md).

    
:::note

Preemptive authentication is not applicable when Custom is selected as the **Authentication Type**, and the setting for this check box is ignored.

:::


**Connection Timeout** - 
The maximum wait in milliseconds to establish a connection to a service. A value less than or equal to zero means that the process will wait indefinitely until a connection to the service is made.

**Read Timeout** - 
The maximum wait in milliseconds to return all of the data from a service. A value less than or equal to zero means that the process will wait indefinitely until all of the data has been returned from the service.

**Enable Connection Pooling** - 
If selected, connection pooling is enabled and connections can be reused when future requests are required. Connection pools may increase performance by using resources more efficiently.

**Max Simultaneous Requests** - 
If **Enable Connection Pooling** is selected, this is the maximum number of simultaneous requests allowed in the connection at any time. The default is 20. If a value is not provided, or you set it to either -1 or 0, the default of 20 is used.

**Idle Timeout\(s\)** - 
If **Enable Connection Pooling** is selected, this is the maximum length of time, in seconds, that a connection can remain open in an idle state before it is closed. The default is 30 seconds. If a value is not provided, or you set it to either -1 or 0, the default of 30 is used.

## Connection pooling 

Most integrations do not require connection pooling. Consider pooling if your process executes a large number of statements during an integration, and you want to reduce the overhead involved in performing connections and operations.

#### How the connector manages connection pools

The REST Client connector manages connection pools as follows:

-   Each new connection component has it's own, unique connection pool. Additionally, each extended connection has it's own connection pool.

-   If you override the connection values using extensions, a new instance of the pool is created with the overridden values.

-   Every container in Integration has its own individual connection pool.


#### How connection pools are logged

The REST Client connector logs connection pools as follows:

-   Connection pooling details are logged to the container logs upon process execution. For example, when a REST Client connection with connection pooling enabled is executed for the first time, the following message is logged:

Pooling connection manager is added to the REST Connection pool.

The message is logged only once for each connection, even if the **Maximum Requests** total is greater than one. The message is not logged if the connection already exists in the pool.


#### Automatic management of idle connections

For improved efficiency and processing, Integration automatically manages idle connections every 30 seconds. Any connection previously used at least once, and not currently being used, is considered idle and is therefore removed. When an idle connection is removed, the following message appears in the container logs:

`Pooling connection manager is evicted from the REST connection pool.`

Containers have a scheduled service \(if active\) that clears the connector cache every hour. When this happens, all connections are removed from the pool and the following message appears in the container logs:

All of the pooling connection managers are evicted from the REST connection pool.

## AWS Signature authentication settings 

Amazon APIs require that each request is sent with a unique signature that is calculated using the contents of the API request. Integration can calculate the required signature for each request that is made to the Amazon APIs. This helps decrease development time, and improves time to value while integrating with the AWS APIs.

When the REST Client connection's authentication type is set to AWS Signature, enter the following information:

>**Attention:** The connector uses Amazon access keys, consisting of an access key ID and a secret access key. Create these keys using Amazon's AWS Management Console. You can access them later in Amazon from the **My Security Credentials** page.

**Amazon AWS Access Key** - 
Type or paste your Amazon AWS access key.

**Amazon AWS Secret Key** - 
Click **Click to Set** and type or paste your Amazon AWS secret key.

**Amazon AWS Service Type** - 
This drop-down list contains some of the more common Amazon AWS services that you can connect to, such as Amazon API Gateway, Amazon Mobile Analytics, Amazon S3, etc. Select the service and region, and then specify the URL to the server \(destination endpoint\) in the **Base URL** field. For example, to connect to the Amazon Glacier service in the US West 1 region, enter https:// glacier.us-west-1.amazonaws.com in the **Base URL** field. If you do not see the service that you want to connect to, select Custom and specify the custom service entry in the **Custom AWS Service** field.

**Custom AWS Service** - 
Enter the custom name of the Amazon AWS service that you want to connect to. For example, AWS CodePipeline. The connection uses the custom AWS service instead of a service from the **Amazon AWS Service Type** field. A custom AWS service allows you to extend the AWS services. Enter the custom AWS service name, select the region of the service, and then specify the URL to the server \(destination endpoint\) in the **Base URL** field.

**Amazon AWS Region** - 
Select the name of the AWS region in which your account resides. For example, US East 1 and AP South 1. Select the service and region, and then specify the URL to the server \(destination endpoint\) in the **Base URL** field. If you do not see the region in which your account resides, select **Custom** and specify the custom AWS region in the **Custom AWS Region** field.

**Custom AWS Region** - 
Enter the custom name of the AWS region in which your account resides. For example, if you want to use the AP South 2 region, enter **ap-south-2**. The connection uses the custom region instead of a region from the **Amazon AWS Region** field. A custom AWS region allows you to extend the regions for the Amazon AWS services. Select the service, enter the custom AWS region, and then specify the URL to the server \(destination endpoint\) in the **Base URL** field.

## OAuth 2.0 authentication settings 

Integration supports OAuth 2.0 authorization for on-premise and cloud-based integrations. If you use custom policy files, you must edit account permissions to use OAuth 2.0 authentication with your cloud application.

:::note

For OAuth 2.0 authentication, you may need to specify in the external application the Boomi callback or redirect URL. The callback URL is `https://platform.boomi.com/account/<your_account_ID>/oauth2/callback` where `<your__account_ID>` is your Integration account ID. You can also find your account ID in the Integration platform at **Settings > Account Information** and **Setup > Account Information**.

:::

When the connection's authentication type is set to OAuth 2.0, enter the following information \(the fields vary according to grant type\):

**Grant Type** - 
Select the grant type to use. The supported grant types are:

-   Authorization Code — The standard, 3–Legged OAuth2 authorization where you grant the client an authorization code that can be exchanged for an access token.
-   Resource Owner Credentials — Requires username and password

-   Client Credentials — Uses client credentials to retrieve an access token directly instead of asking for user authorization. This authorization is typically used for administration tasks specific to a client.

-   JWT Bearer Token — Uses a JSON Web Token \(JWT\) that encodes all relevant parts of an access token into the access token itself instead of having to store them in a database.


**Client ID** - 
The client ID obtained from the application.

**Client Secret** - 
The client secret obtained from the application.

**Authorization Token URL** \(Authorization Code\)
The endpoint URL to use to obtain an authorization token.

**Scope** - 
Add one or more permissions, case-sensitive and separated by a space, to application request URLs. If you change scope permissions, you need to re-authenticate to ensure that all of the requested permissions are granted.

**Add Authorization Parameter \(Authorization Code\)** - 
\(Optional\) The name and value of extensible endpoint parameters.

**Access Token URL** - 
The endpoint address provided by the application to make API requests.

**Add Access Token Parameter** - 
\(Optional\) The name and value of additional or custom token parameters required by your application.

**Access Token \(Authorization Code, Resource Owner Credentials\)** - 
The encrypted access token retrieved from the application that is used to access protected resources.

**Generate \(Authorization Code, Resource Owner Credentials\)** - 
Click to generate the access and refresh tokens. When a new window opens asking you to confirm offline access, click **Accept**. A second message indicates the access token was received and successfully generated.

**Signature Algorithm \(JWT\)** - 
Select the cryptographic Secured Hash Algorithm \(SHA\) used to generate the digital signature of the key. The options available are **No digital signature or MAC performed** or **RSASSA-PKCS-v1\_5 using SHA-256** - 

**Signature Key \(JWT\)** - 
Identifies the private key used to sign the JWT.

**Issuer \(JWT\)** - 
Identifies the principal that creates, signs, and issues the claim.

**Subject \(JWT\)** - 
Identifies the principal that is the subject of the claim.

**Audience \(JWT\)** - 
The intended audience of the JWT.

**Expiration \(JWT\)** - 
The expiration time \(in seconds\) on or after which the token is no longer valid for processing.

**ID Generator \(JWT\)** - 
Methods for generating JWT IDs. Only value is **NONE**.

**Add Extended JWT Claim \(JWT\)** - 
\(Optional\) Key value pairs of additional claims that may be required to be sent to the endpoint.

#### Extending OAuth 2.0 fields

OAuth 2.0 fields are extensible. When the connection settings values have been configured, overrides are applied after the cached version of the access token expires and refreshes.

To use extensions with the Client Credentials grant type, in your process click the **Extensions** tab. In the Extensions window, click the Connection Settings tab. In the Select extensible properties list, select **OAuth2 Access Token**. When selected, this field applies overrides even though you do not see an access token field in the connection settings Client Credentials grant type. If the field is cleared, the connection executes the default settings.

The connector automatically retrieves refresh tokens.

## SSL settings 

You can optionally configure and upload private client certificates and public certificates for SSL authentication when creating the connection, if required by the destination endpoint.

**Attention:** Any certificates configured with the **Client SSL Certificate** and **Trust SSL Server Certificate** take precedence over certificates deployed to an Atom.

**Client SSL Certificate** - 
Select, edit, or create a private certificate component for SSL Client Authentication. Your private certificate is used to verify your identity when sending requests to the endpoint. You must manually export your public certificate and provide it to your endpoint owner.

**Trust SSL Server Certificate** - 
Select, edit, or create a public certificate component for SSL server authentication. Contact the owner of the endpoint to obtain its public certificate and then import it into a Boomi Integration certificate component.

If you are connecting to a secure site \(i.e., the URL begins with https\) that does not use a certificate signed by a trusted root authority, such as Verisign or Thawte, obtain a copy of the site's public certificate and import it into your Integration account. Once imported and added to the connection, it is applied implicitly whenever the connector connects to that site. However, if the site uses a certificate from a trusted root authority, you do not need to import the certificate; it is applied automatically by Integration.

**Cookie Scope** - 
Used to set the persistence of cookies:

-   Global — cookies are shared in all processes throughout the Atom JVM life cycle. This is the default.
-   Connector step — cookies are isolated and shared only for the duration of the Connector step execution.

-   Ignored — cookies are discarded, even if they are requested by the server.

## AWS IAM Roles Anywhere authentication settings

:::info Tip

AWS IAM Roles Anywhere relies on public key infrastructure (PKI) to establish trust between an AWS account and a certificate authority (CA), both belonging to the customer. The CA issues X509 certificates which can be used by the REST Connector to get temporary credentials to operate on AWS Service. The temporary credentials are valid for a predefined bounded period of time configured by the user and cached to be reused across connectors using the same connection component and consecutive process executions. The connector will handle the renewal after the credentials expire.

:::

**Profile ARN** - 
Enter the Amazon Resource Name (ARN) of the profile.

**Role ARN** - 
Enter the Amazon Resource Name (ARN) of the role to assume.

**Trust Anchor ARN** - 
Enter the Amazon Resource Name (ARN) of the trust anchor.

**AWS Roles Anywhere Region** - 
Select the AWS Region associated to your AWS IAM Roles Anywhere service. If your region is not included in the dropdown options, you can enter it in **AWS Roles Anywhere Custom Region**. The default value is 'us-east-1'.

**AWS Roles Anywhere Custom Region** - 
Enter the AWS region in which your AWS IAM Roles Anywhere service resides. You must enter your values in all lowercase using dashes; for example, us-east-2. If it is defined, the connection uses this value and ignores the selection in AWS Roles Anywhere Region drop-down.

**Session name** - 
Enter a name for the role session. This field is mandatory and can be any value.

**Duration (in seconds)** - 
Enter the duration of the role session in seconds. The value specified can range from 900 seconds (15 minutes) up to 3600 seconds (1 hour).

:::note

The connector considers credentials with less than 60 seconds of lifetime expired and will retrieve a new set. This mitigates potential 401 errors that can occur when temporary credentials expire right after being retrieved from the cache.

:::

**Public certificate** - 
Select the client certificate issued by the trusted CA to authenticate and receive temporary credentials from AWS IAM Roles Anywhere.

**Private key** - 
Select the private key associated with the client certificate to authenticate and receive temporary credentials from AWS IAM Roles Anywhere.