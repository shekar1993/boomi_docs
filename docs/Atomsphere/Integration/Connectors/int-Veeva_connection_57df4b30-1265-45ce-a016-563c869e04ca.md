import TestConnection from './_TestCon.md'

# Veeva connection

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-57df4b30-1265-45ce-a016-563c869e04ca"/>
</head>

The Veeva connection represents a single Veeva Vault instance in your domain. The connector obtains a session and cache it to reuse it in subsequent executions.

## Connection tab 
**Authentication Type** - Select either **User Credentials** or **OAuth 2.0** to authenticate your Veeva account. The default value is **User Credentials**.

* If the Vault Authentication API burst limit is exceeded while requesting the Session ID, the connector waits 60 seconds before retrying once when you use the **User Credentials** authentication type. 

**Vault Subdomain/DNS** - Enter the URL of your Vault instance. The default value is: `{vault_subdomain}.veevavault.com`.
See the [Veeva Developer Docs](https://developer.veevavault.com/docs/#structuring-the-endpoint) to learn more.

:::note

The [Veeva Developer Docs](https://developer.veevavault.com/docs/#structuring-the-endpoint) use the terms **Vault DNS** and **Vault Subdomain** interchangeably. While using this connector, Boomi advises you to use the same input for both **Vault DNS** and **Vault Subdomain** to avoid issues.

:::

**API Version** - The default Veeva REST API API version. The current version is v23.3, the current GA version.

**User** - Enter your Vault user name.

**Password** - Enter your Vault user password.

**Session timeout** \(minutes\)- Enter the Session Duration \(in minutes\) configured in your Vault by your Vault admin. This value must be at least 10 minutes and no longer than 480 minutes."

**Client ID** (Optional) - Enter your header name if any. If you input a value, it will be concatenated after `Boomi_`. This value is trimmed before being used in the `X-VaultAPI-ClientID` header.

:::note 

The following restrictions apply to **Client ID**: A valid client ID must be an alphanumeric string with a maximum of 100 characters. A **Client ID** can be mixed-case and the only special characters allowed are periods, underscores, and hyphens. If an API request includes an invalid **Client ID**, the value will appear as `invalid_client_id` in the API Usage Log.

:::

**OAuth2.0/Open ID Connect profile ID** - The ID of your Veeva Vault OAuth2.0 / Open ID Connect profile.

**Authorization Server Client Application ID** (Optional) - The ID of the client application at the external Authorization Server Provider.




## OAuth 2.0 tab

Veeva requires you to use an external Authorization Server Provider, for more information see the resource [Configuring OAuth 2.0 / OpenID Connect Profiles](https://platform.veevavault.help/en/gr/43329/).

The following fields are displayed when you select **OAuth 2.0** to authenticate your Veeva session.

**Client ID** - The external authorization service client application ID.

**Client Secret** - The external authorization service client application secret.

**Authorization Token URL** - The external Authorization Server Authorization Token URL.

**Scope** - The external authorization service client application scope. The default is `openid offline_access`.

**Access Token URL** - The external Authorization Server Access Token URLs. 

**Access Token** -The encrypted access token retrieved from the external Authentication Server to access protected resources. Click to generate the access and refresh tokens. When a new window opens asking you to confirm offline access, click **Accept**. A second message indicates the access token was received and successfully generated.



<TestConnection />

