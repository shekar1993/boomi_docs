# Google Storage connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-0b4e09b7-994f-4a99-8620-56c8c1459f88"/>
</head>


The Google Storage connection represents a single Google Storage instance including sign in credentials.

## **OAuth 2.0** tab

The Google Storage connector uses OAuth 2.0 credentials for authentication and authorization and supports the *JWT Bearer Token* and *Authorization Code* grant types for client authentication. The connector obtains OAuth 2.0 access tokens from the Google Identity Platform and sends the tokens to the Google Cloud Storage API with each request. The connector automatically manages refresh tokens.

:::note

For OAuth 2.0 authentication, you may need to specify in the external application the Boomi callback or redirect URL. The callback URL is `https://platform.boomi.com/account/<your_account_ID>/oauth2/callback` where `<your__account_ID>` is your Integration account ID. You can also find your account ID in the Integration platform at **Settings > Account Information** and **Setup > Account Information**.

:::

**Grant Type** - 
 Grant type refers to the way an application gets an OAuth 2.0 access token for client authentication to protected cloud resources. Select a supported grant type in the drop-down list:

 -   JWT Bearer Token — The user provides claim information to generate an assertion, and sends the assertion to the server to get the access token.
 -   Authorization Code — The authorization code uses the standard 3-Legged OAuth 2.0. You grant the client an authorization code they can exchange for an access token.

## JWT Bearer Token settings 

When the grant type is set to JWT Bearer Token, enter the following information:



**Scope** - 
URL list of the permissions \(case-sensitive and separated by a space\) defines the extent and access range to protected cloud resources. When using the JWT Bearer Token grant type, leave this field blank. It automatically sets the scope as a claim and appears as an extended JWT claim.

**Signature Key** - 
Identifies the private key used to sign the JWT and allows access to the cloud resources. You create the key in the Google Cloud Platform console using the P12 key type \(**Service account details** page, **Key ID** field\) and then import the certificate into .

**Issuer** - 
Identifies the principal that creates, signs, and issues the claim to access the cloud resources. You can enter either the Email or Unique ID from the Google Cloud Platform console \(Service account details page\).

**Subject** - 
  Identifies the principal that is the subject of the claim to access the cloud resources. Optionally enter either the Email or Unique ID from the Google Cloud Platform console \(**Service account details** page\).

**Add Extended JWT Claim** - 
 The Key/Value pair of URL permissions \(case-sensitive and separated by a space\) identifying the scope for the claim. Google Storage requires that you send the scope as a claim, and the connector automatically sets the scope to the following:

 -   `https://www.googleapis.com/auth/cloud-platform`
 -   `https://www.googleapis.com/auth/devstorage.full\_control`

:::note

 Do not change the scope. If you do, it might prevent access to cloud resources. If you decide to change the scope, test the connection to ensure you can access the resources.

 :::

## Authorization Code settings 

When the grant type is set to Authorization Code, enter the following information:




**Client ID** - 
 The client ID obtained from Google Cloud Platform.

**Client Secret** - 
 Select **Click to Set** to open the **Password** window, enter or paste your client secret, and click **Apply**. Enable pop-up windows in your browser.

**Scope** - 
 URL list of the permissions \(case-sensitive and separated by a space\) that defines the extent and access range to protected cloud resources. When using the Authorization Code grant type, set the scope to the following:

-    `https://www.googleapis.com/auth/cloud-platform`
 -   `https://www.googleapis.com/auth/devstorage.full\_control`

:::note

 Copy and paste the scope into the **Scope** field from the help \(click the **Information** button\). Verify that a single space separates each entry in the scope.

 :::

 Do not change the scope. If you do, it might prevent access to cloud resources. If you decide to change the scope, test the connection to ensure you can access the resources.

**Access Token** - 
To access protected resources, use the encrypted access token retrieved from the Google Cloud Platform.

**Generate** - 
 Click to generate the access and refresh tokens. When a new window opens asking you to confirm offline access, click **Accept**. A second message indicates that it received and successfully generated the access token. 

**Reset** - 
  Click to clear the access token.

## Test Connection

You can test your connection settings before you use or save the connection in a process. The Test Connection ensures that your specified settings are correct, valid, and accessible. If the test connection is successful, you can save the connection. Otherwise, review and correct any incorrect settings, then test again.

:::info Attention

You can only run the **Test Connection** against containers associated with your account (local Atoms, Molecules, and Atom Clouds).

:::