# Authentication Source settings for JWT 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-4686dcb6-bcc2-42df-b00a-b26d15904000"/>
</head>


The Source Configuration for JWT (JSON Web Token) page enables you to review and modify the properties of your external Identity Provider.

You must select an identity provider type during the creation of an Authentication Source. JWT Authentication allows you to pass a user's authentication information and user privileges in the form of a signed JSON token. The server validates this token by verifying the token signature and extracts user privileges from the token.

For most cases, both access tokens and ID tokens issued by the identity provider can be used for API execution. It is recommended that you configure your identity provider, set up an application, and then use access tokens to authenticate your Boomi managed APIs. Access tokens are recommended as they are meant for resource authorization and do not contain any additional personal user information. The following signature algorithms are used in JWT authentication source token validation:

-   RSA - RS256, RS384, and RS512
-   EC - ES256, ES256K, ES384, and ES512
-   HMAC - HS256, HS384, and HS512

:::note 

Refer to your identity provider documentation for configuration instructions.

:::

After you configure the Authentication Source, you can test the connection to the identify provider by clicking **Test URL**. Testing the identity provider allows you to verify if the connection is set up properly or if there are errors.

You can view the APIs that use a particular Authentication Source by clicking **View API Associations** which opens the API Associations panel. The panel lists all the deployments for the Authentication Source.

## General tab 

Use the General tab to modify the name, description, and Identity Provider URL.

If the configuration is not retrieved from the Identity Provider URL, you will see a related warning.

## Roles tab 

Use the Roles tab to identify and associate the roles from your third party identity provider into the Authentication Source.

Enter the Group Identifier from your identity provider. The Group Identifier is the name of your identity provider claim in which the identity provider stores group membership information.

Once the Group Identifier is set, use the values in the claim or assertion directly as the Identity Provider Roles.

You can set one or multiple role restrictions in the Identity Provider Roles field. The JWT claim looks for at least one valid role restriction to let you access the API. So, even if the JWT claim returns multiple roles, you will be able to access the API if one of the returned roles matches the role you had set in the Identity Provider Roles field.



## Audience Claim tab 

The Audience Claim tab is available only for JWT authentication source. Use this tab to enter audience claim values for your JWT authentication source. These values will be validated during API execution and Developer Portal login. JWT authentication sources with invalid claims will be rejected and API or Developer Portal access will be denied.

:::note 

Refer to your identity provider documentation for instructions on how to configure audience claims.

:::

While entering the audience claim values, keep in mind that:

-   Duplicate claim values are not allowed.
-   The maximum characters allowed for a claim are 255.
-   If an API is assigned to a JWT authentication source with one or more audience claims, then at least one of those audience claims should match with one of the values setup in Platform. Else, the API execution will fail.

## User ID Claim tab 

The User ID Claim controls which JWT claim is used to identify an authenticated user for a JWT authentication source. The claim’s value will appear in the **inuser** dynamic process property for Web Services Server \(WSS\) processes, and its value also populates the **user** field for API Metrics data. If the specified claim cannot be found in the JWT, the subject claim \("sub"\) is used instead. The subject claim is guaranteed to be present, but may not be meaningful. For example, the subject may be a GUID instead of an email address, but this varies depending on the Identity Provider \(IDP\) and its configuration. For more information on what claims are available and how they are expressed, consult the documentation for your IDP.

Although this field is required, it is only used when the authentication source is assigned to an API deployment where executions pass through an API Gateway.

Supplying an empty value to the text field restores the setting to its default value of "preferred_username".
