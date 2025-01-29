
import TestConnection from './_TestCon.md'

# ServiceNow REST connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-5537bb51-97cc-43ba-840d-3afa9b2e91ff"/>
</head>


The ServiceNow REST connection represents and contains all of the information that is needed to connect and log into a single ServiceNow account.

If you have multiple accounts, you need a separate connection for each. You can pair a single connection with different ServiceNow operations to perform a unique action against a ServiceNow account instance.

## Connection tab 

The ServiceNow REST connector supports both basic authentication and OAuth 2.0 for authentication and authorization. The connection fetches OAuth 2.0 credentials from the ServiceNow API. The client obtains an access token from ServiceNow, extracts a token from the response, and sends the token to the ServiceNow API that you are requesting to access. The connector automatically refreshes an expired access token or will get a new access token if the refresh token is valid. However, if the refresh token is expired, the user will have to manually generate a new one.



**Base URL**    
 The URL to the ServiceNow API service endpoint, including the instance code and the API major and minor version number. For example, `https://dev8954.service-now.com/api/now/v2`.

**Authentication Type** - 
 Select the authentication type for the connection, either Basic \(which requires a user name and password\) or OAuth 2.0.

 -   When you select *Basic*, complete the fields on the Connection tab.
 -   When you select *OAuth 2.0*, complete the fields on the OAuth 2.0 tab.

**User Name** - 
 The user name to log into your ServiceNow account.

**assword** - 
 The password for your ServiceNow account.

## **OAuth 2.0** tab

:::note

For OAuth 2.0 authentication, you may need to specify in the external application the Boomi callback or redirect URL. The callback URL is `https://platform.boomi.com/account/<your_account_ID>/oauth2/callback` where `<your__account_ID>` is your Integration account ID. You can also find your account ID in the Integration platform at **Settings > Account Information** and **Setup > Account Information**.

:::

**Note:** The Grant Type is automatically set to Authorization Code, which the OAuth provider needs to obtain access to the restricted resource. This connector only supports Authorization Code.


  

**Client ID** - 
 The Client ID obtained when registering your client with ServiceNow. This unique ID is used to request authorized access to client data.

**Client Secret**    
 The client secret obtained when registering your client with ServiceNow. Click **Click to Set** to open the Password window, and enter or paste the alphanumeric client secret that is associated with the Client ID. When you are done, click **Apply**. Enable popup windows in your browser.
  
**Authorization Token URL**    
 The endpoint address \(URL\) of the server authorizing the client.

**Access Token URL**    
 The URL of the token endpoint that the ServiceNow account instance uses to retrieve and refresh tokens.

**Access Token**    
 The encrypted access token retrieved from ServiceNow that is used to access protected resources.

**Generate**    
  Click to generate the access and refresh token that grants the application access to the ServiceNow account. When a new window opens asking you to confirm offline access, click **Accept**. A second message indicates that the access token was received and successfully generated. 

**Reset**    
 Click to clear the access token.

**Note:** If you receive an error when attempting to perform a Test Connection \(such as a 403 Forbidden authentication error\), verify with ServiceNow which account permissions and roles you need. Read access to the sys\_db\_object system table may provide the required access.


<TestConnection />
