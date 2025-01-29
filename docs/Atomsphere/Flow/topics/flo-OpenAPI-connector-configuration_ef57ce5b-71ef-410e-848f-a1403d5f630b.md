# OpenAPI connector configuration values

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-ef57ce5b-71ef-410e-848f-a1403d5f630b"/>
</head>


The following configuration values can be defined during installation of the OpenAPI connector.

## OpenAPI connector configuration values

|Name|Type|Required or optional?|Description|
|----|----|---------------------|-----------|
|Schema URL|String| |The complete path \(URL\) to a valid OpenAPI document, written in YAML, describing all of the required information about the target service. This can be in the form of an HTTP:// or HTTPS:// address.|
|API Key|String| |The API key to use if API key based authentication is required.|
|OAuth2/OIDC: Client Id|String| |The Client ID to use for OAuth 2.0 or OIDC based authentication.|
|OAuth2/OIDC: Client Secret|String| |The Client Secret to use for OAuth 2.0 or OIDC based authentication.|