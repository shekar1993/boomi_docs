# x-flow-identity - OAuth 2.0 authentication

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-cd190c71-68a5-4f31-988f-6fbb2be268b3"/>
</head>


This extension allows you to apply OAuth 2.0 authentication using your OpenAPI document.

## Example

```
1  x-flow-identity:
2    me:
3      userInfoUrl: https://api.spotify.com/v1/me
4      firstName: display_name
5      lastName: display_name
6      email: email
7      username: email
8      userId: id
```

## Properties

|Property|Description|
|--------|-----------|
|me|Contains details of how to retrieve user information once the OAuth authentication has completed. This is required to pass the user details back to . -   The `userInfoUrl` is automatically called after authentication takes place, with the keys below it providing information on how to map the response from this endpoint to the object which will be sent back to .

-   In this example, as the API endpoint only returns a display\_name, this is mapped to both the `firstName` and `lastName` of the Flow object.

-   The Client ID and Client Secret must be set in the OpenAPI configuration. You may also need to register the flow callback URL with the OAuth provider, using the format:

`<TRANSPORT_SCHEME>://<ENVIRONMENT_URL>/api/run/1/oauth2`

When setting up OAuth 2.0 authentication, ensure that the Client ID and Client Secret configuration values have been set.

You may also need to register the flow callback URL with the OAuth 2.0 provider. This will need to be in the form:

`<TRANSPORT_SCHEME>://<ENVIRONMENT_URL>/api/run/1/oauth2`

For , this is currently:

`https://flow.manywho.com/api/run/1/oauth2`