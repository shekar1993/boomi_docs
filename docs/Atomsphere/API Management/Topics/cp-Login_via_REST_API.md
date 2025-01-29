# Log in via REST API

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-b87a8eee-e1b9-49fe-be19-36d51741fdc7"/>
</head>

This article describes how to obtain an authentication token through the Rest API and use for authentication it in subsequent API calls.

## Call /login

Request: POST `<tenant>.backend.na.controlplane.boomi.com/login` 

*Payload:*
```
{
    "username": "<username - usually the email>", 
    "password": "<password>"
}
```

## Get your token from response headers

The response to `/login` contains an Authorization header with a bearer token, e.g.

Authorization: Bearer r3QL2sCCGpO2QYqw9abETyQO3SY

This exact header must now be included in any subsequent requests.

## Don't forget to logout

Once you are done with accessing the Rest API, it is a good idea to log out. This will invalidate any tokens for your user accout that were created by /login calls.

Logout Request: POST `<tenant>.backend.na.controlplane.boomi.com/logout`

If you do not log out, the token will automatically expire 1 hour after its last usage.

## Using Personal Access Tokens

Instead of manually logging in before making your Rest API calls, you can just generate a personal access token in the administration portal. See Account Settings | Personal Access Token.

Personal access tokens give you more control over the tokens lifetime and permissions. E.g. you can create a token that never expires, but only grants read access to APIs.

To use the token in your requests, add this header:

Authorization: Bearer `<personal-access-token>`