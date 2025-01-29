import TestConnection from './_TestCon.md'

# Google Pub/Sub connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-3e0f44bc-361b-4171-ab81-b1e91f0207a1"/>
</head>


The Google Pub/Sub connection represents a single connection to Google's Pub/Sub data streaming and messaging service.

## Connection tab 

The Google Pub/Sub connector uses OAuth 2.0 credentials for authentication and authorization and supports the *JWT Bearer Token* and *Authorization Code* grant types for client authentication. The connector obtains OAuth 2.0 access tokens from the Google Identity Platform and sends the tokens to the Google Pub/Sub API with each request. The connector automatically manages refresh tokens.

**Google Pub/Sub Project** -
 Enter the project ID of your Google Pub/Sub project. This is a unique identifier for your project that bills for any jobs that you create. You can find your project ID by going to the Google Cloud Platform console and selecting **Manage all projects** from the projects list. The names and IDs for all the projects you are a member of appear.

:::note

Make sure you enable billing for your project.

:::

## **OAuth 2.0** tab

:::note

For OAuth 2.0 authentication, you may need to specify in the external application the Boomi callback or redirect URL. The callback URL is `https://platform.boomi.com/account/<your_account_ID>/oauth2/callback` where `<your__account_ID>` is your Integration account ID. You can also find your account ID in the Integration platform at **Settings > Account Information** and **Setup > Account Information**.

::: 

**Grant Type** -
 Grant type refers to the way an application gets an OAuth 2.0 access token for client authentication to protected cloud resources. Select a supported grant type in the drop-down list:

 -   **JWT Bearer Token** — The user provides claim information to generate an assertion, and sends the assertion to the server to get the access token.
 -   **Authorization Code** — The standard, 3-Legged OAuth 2.0 authorization where you grant the client an authorization code that you can exchange for an access token.

## JWT Bearer Token settings 

When the grant type is set to JWT Bearer Token, enter the following information:



**Scope** -
 URL list of the permissions \(case-sensitive and separated by a space\) defines the extent and access range to protected cloud resources. When using the JWT Bearer Token grant type, leave this field blank. The scope is automatically set as a claim and appears as an extended JWT claim.

**Signature Key** -
 Identifies the private key used to sign the JWT and allow access to the cloud resources. You create the key in the Google Cloud Platform console using the P12 key type \(Service account details page, Key ID field\) and then import the certificate into Integration.

**Issuer** -
 Identifies the principal that creates, signs, and issues the claim to access the cloud resources. You can enter either the Email or Unique ID from the Google Cloud Platform console \(**Service account details** page\).

**Subject** -
Identifies the principal that is the subject of the claim to access the cloud resources. Optionally enter either the Email or Unique ID from the Google Cloud Platform console \(Service account details page\).

**Add Extended JWT Claim** -
 The Key/Value pair of URL permissions \(case-sensitive and separated by a space\) identifying the scope for the claim. Google Pub/Sub requires sending the scope as a claim, and the connector automatically sets the scope to the following:

```https://www.googleapis.com/auth/pubsub```

:::note

Do not change the scope. If you do, you may not be able to access the cloud resources. If you decide to change the scope, test the connection to ensure you can access the resources.

:::

## Authorization Code settings 

When the grant type is set to Authorization Code, enter the following information:


**Client ID** -
 The client ID obtained from Google Cloud Platform.

**Client Secret** -
Click **Click to Set** to open the **Password** window, type or paste your client secret, and click **Apply**. Enable pop-up windows in your browser.

**Scope** -
 URL list of the permissions \(case-sensitive and separated by a space\) that defines the extent and access range to protected cloud resources. When using the Authorization Code grant type, set the scope to the following:

```https://www.googleapis.com/auth/pubsub```

:::note

Copy and paste the scope into the **Scope** field from the help \(click the **Information** button\). Verify that a single space separates each entry in the scope.

Do not change the scope. If you do, you may not be able to access the cloud resources. If you decide to change the scope, test the connection to ensure you can access the resources.

:::

**Access Token** -
 Uses the encrypted access token retrieved from the Google Cloud Platform to access protected resources.

**Generate** -
 Click to generate the access and refresh tokens. When a new window opens asking you to confirm offline access, click **Accept**. A second message indicates that the access token was received and successfully generated. 

**Reset** -
 Click to clear the access token.



<TestConnection />