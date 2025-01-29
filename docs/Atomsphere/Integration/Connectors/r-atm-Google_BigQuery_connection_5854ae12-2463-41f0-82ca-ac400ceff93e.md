# Google BigQuery connection

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-5854ae12-2463-41f0-82ca-ac400ceff93e"/>
</head>


The Google BigQuery connection represents and contains all of the information you need to connect to and sign in to a Google Cloud Platform account instance associated with your project.

If you have multiple organizations or sandbox instances, you need a separate connection for each. You can pair a single connection with different Google BigQuery operations to perform a unique action against a Google Cloud Platform instance.

## Connection tab 

The Google BigQuery connector uses the OAuth 2.0 protocol for authentication and authorization and supports the *JSON Web Token \(JWT\) Bearer Token* and *Authorization Code* grant types for client authentication. The connector retrieves OAuth 2.0 access tokens from the Google Identity Platform and sends the tokens to the Google BigQuery API with each request. The connector automatically manages refresh tokens.


**Project ID** - 
This unique identifier, the Project ID, is for your project to make requests and is used for billing any jobs you create. Make sure to enable billing for your project. You can find your project ID by going to the Google Cloud Platform API Console and selecting Manage all projects from the projects list. The names and IDs for all the projects you are a member of appear. See the linked Projects topic for more information about projects and how to use them for billing and authorization.

## OAuth 2.0 tab 

:::note

For OAuth 2.0 authentication, you may need to specify in the external application the Boomi callback or redirect URL. The callback URL is `https://platform.boomi.com/account/<your_account_ID>/oauth2/callback` where `<your__account_ID>` is your Integration account ID. You can also find your account ID in the Integration platform at **Settings > Account Information** and **Setup > Account Information**.

:::

**Grant Type** - 
Grant type refers to the way an application gets an OAuth 2.0 access token for client authentication to protected cloud resources. Select a supported grant type in the drop-down list:

 -   JWT Bearer Token — The user provides claim information to generate an assertion, and the assertion is sent to the server to get the access token.
 -   Authorization Code — The standard, 3-Legged OAuth 2.0 authorization where you grant the client an authorization code to exchange for an access token.

## JWT Bearer Token settings 

When the grant type is set to JWT Bearer Token, enter the following information:



 
**Scope** - 
 URL list of the permissions \(case-sensitive and separated by a space\) that defines the extent and access range to protected cloud resources. When using the JWT Bearer Token grant type, leave this field blank. The scope is automatically set as a claim and appears as an extended JWT claim.

**Signature Key** - 
 Identifies the private key used to sign the JWT and allow access to the cloud resources. You create the key in the Google Cloud Platform console using the P12 key type \(Service account details page, Key ID field\) and then import the certificate into .

**Issuer** - 
Identifies the principal that creates, signs, and issues the claim to access the cloud resources. You can enter either the Email or Unique ID from the Google Cloud Platform console \(Service account details page\).

**Subject** - 
 Identifies the principal that is the subject of the claim to access the cloud resources. Optionally enter either the Email or Unique ID from the Google Cloud Platform console \(Service account details page\).

**Add Extended JWT Claim** - 
 The Key and Value pair of URL permissions \(case-sensitive and separated by a space\) identifying the scope for the claim. Google BigQuery requires sending the scope as a claim, and the connector automatically sets the scope to the following:

 -   `https://www.googleapis.com/auth/bigquery`
 -   `https://www.googleapis.com/auth/bigquery.insertdata`
 -   `https://www.googleapis.com/auth/cloud-platform`
 -   `https://www.googleapis.com/auth/cloud-platform.read-only`
  -   `https://www.googleapis.com/auth/devstorage.full\_control`
 -   `https://www.googleapis.com/auth/devstorage.read\_only`
  -   `https://www.googleapis.com/auth/devstorage.read\_write`

  :::note

  Do not change the scope. If you do, you may not be able to access the cloud resources. If you decide to change the scope, make sure and test the connection to ensure you can access the resources.

  :::

## Authorization Code settings 

When the grant type is set to Authorization Code, enter the following information:




**Client ID** - 
 The client ID obtained from Google Cloud Platform.

**Client Secret** - 
 The client secret obtained from Google Cloud Platform. Click **Click to Set** to open the **Password** window, type or paste your client secret, and click **Apply**. Enable pop-up windows in your browser.

**Scope** - 
 URL list of the permissions \(case-sensitive and separated by a space\) that defines the extent and access range to protected cloud resources. When using the Authorization Code grant type, set the scope to the following:

-   https://www.googleapis.com/auth/bigquery
 -   https://www.googleapis.com/auth/bigquery.insertdata
 -   https://www.googleapis.com/auth/cloud-platform
 -   https://www.googleapis.com/auth/cloud-platform.read-only
  -   https://www.googleapis.com/auth/devstorage.full\_control
  -   https://www.googleapis.com/auth/devstorage.read\_only
  -   https://www.googleapis.com/auth/devstorage.read\_write

:::note

Copy and paste the scope into the **Scope** field from the help \(click the **Information** button\). Verify that you separate each entry in the scope with a single space.

:::

 Do not change the scope. If you do, it is possible you cannot access the cloud resources. If you decide to change the scope, make sure and test the connection to ensure you can access the resources.

**Access Token** - 
The encrypted access token retrieved from Google Cloud Platform used to access protected resources.

**Generate** - 
Click to generate the access and refresh tokens. When a new window opens asking you to confirm offline access, click **Accept**. A second message indicates that the access token was received and successfully generated.

**Reset** - 
Click to clear the access token.

## Test Connection

You can test your connection settings before you use or save the connection in a process. The Test Connection ensures that your specified settings are correct, valid, and accessible. If the test connection is successful, you can save the connection. Otherwise, review and correct any incorrect settings, then test again.

:::info Attention

You can only run the **Test Connection** against containers associated with your account (local Atoms, Molecules, and Atom Clouds).

::: 