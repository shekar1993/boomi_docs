# Okta (Deprecated) connector configuration values 

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-52557484-0ed6-488d-ac7e-5f3ee9ef5c75"/>
</head>

:::warning

This connector is now in Deprecated status. It is no longer available for new users and is not actively maintained. We will provide a minimum six-month notice before its retirement. We recommend upgrading to the newer supported version of this connector.

:::

The following configuration values can be defined during installation of the Okta (Deprecated) connector.

## Okta (Deprecated) connector values

|Name|Type|Required or optional?|Description|
|----|----|---------------------|-----------|
|Client ID|String|✅ Required|The full Client ID of your Okta app. The Okta Client ID is the public identifier required for all OAuth flows.|
|API Key|Password|✅ Required|The full API Key of your Okta app, copied when you create an API Token in your Okta app.|
|Client Secret|Password|✅ Required|The full Client Secret key of your Okta App.|
|Organization URL|String|✅ Required|Your Okta Domain (also called an Okta URL). This value should be in the form `mydomain.okta.com` without the 'https://' prefix.<br /><br />For example: `dev-683187.oktapreview.com`<br /><br />You can find this value by logging in to Okta and copying the domain name from the browser address bar, or by following the instructions here: [Find your Okta Domain](https://developer.okta.com/docs/api/getting_started/finding_your_domain).|
|Identity Provider ID|String|❌ Optional|If you are using an external IdP provider in Okta, specify the value of the parameter IdP from the Authorize URL.|