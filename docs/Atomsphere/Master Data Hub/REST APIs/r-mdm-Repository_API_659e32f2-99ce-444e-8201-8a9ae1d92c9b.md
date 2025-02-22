# Repository API

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-659e32f2-99ce-444e-8201-8a9ae1d92c9b"/>
</head>

The Boomi DataHub Repository API enables programmatic access to Boomi DataHub repositories and its hosted domains (referred to as universes).

## Base URL

To obtain the base URL for all Repository API requests:

1. Navigate to Boomi Enterprise Platform > **Integration** > **Manage** > **Atom Management**.
2. Select the Atom hosting the Boomi Hub Cloud.
3. Select **Shared Web Server**. The Base URL for API requests is listed here.

## Authentication 

You must authenticate requests to the Repository API using one of the following options:
- Basic Authentication
- JSON Web Token (JWT) Authentication

### Basic authentication

You can authenticate to the API using HTTP Basic auth. You must provide the Boomi account ID as the username and the My Hub Authentication Token as the password. The credentials are Base64 encoded and included in the ‘Authorization’ header. 

To make a request using Basic auth:

1. Combine the username and password with a single colon separating them. The username is your Boomi account ID and the password is your Hub Authentication Token. You can obtain both values by navigating to the repository’s Configure tab in the Boomi DataHub user interface.
2. Base64 encode the string.
3. Include the string in the Authorization header. cURL example:
`--H 'Authorization: Basic {Base64 encoded string}' \
`
#### Security

Basic authentication credentials give administrator level permissions for all requests to the Repository API. If you need to restrict access to certain API requests, consider using JWT authentication. The JWT authentication method authorizes actions according to a user’s role in the Boomi Enterprise Platform.

Basic authentication credentials are not encrypted and are only Base64 encoded. It is not safe to send over HTTP. Always make API requests over HTTPS. 

If an API request does not provide Basic Auth credentials or invalid credentials, the repository responds with a 401 (Unauthorized) HTTP Response with the following body: 
```html
<html>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
        <title>Error 401 UNAUTHORIZED</title>
      </head>
      <body>
        <h2>HTTP ERROR 401</h2>
        <p>Problem accessing /mdm/universes. Reason:
        <pre>
        UNAUTHORIZED
    </pre></p>
        <hr />
        <i>
          <small>Powered by Jetty://</small>
        </i>
        <br />
        <br />
        <br />
      </body>
</html>
```

### JWT authentication

You can authenticate to the Repository API using JWT (JSON Web Token), a token-based authentication method. Read [JWT authentication tokens](https://developer.boomi.com/api/platformapi#section/Introduction/Platform-API-and-Partner-API-authentication) to learn more. 

#### Obtain a JSON web token

To obtain a JSON web token, you must use HTTP Basic auth and provide your Boomi Enterprise Platform account credentials in a GET request to the AtomSphere API.

Send a **GET** request to:

`https://platform.boomi.com/auth/jwt/generate/{account_id}`
using Basic authentication. Include a Base64 encoded username:password string in the Authorization header. You can obtain your platform account information in **Settings** > **User Information** > **Account Information**.

##### Option 1: Use an AtomSphere API token
You can use an AtomSphere API token to generate the JWT. 

With this option, the username is `BOOMI_TOKEN.{your platform account user name}`.
Username example: 
`BOOMI_TOKEN.user@mycompany.com`

The pasword is a token generated by the platform in **Settings** > **My User Settings** > **AtomSphere API Tokens**. The Boomi Enterprise Platform user must have Boomi API access to create a token. Read [User roles and privileges](/docs/Atomsphere/Platform/c-atm-User_roles_and_privileges_5a1c8a1a-4d58-4e7d-a6b6-b684a0c6d672.md) to learn more. 

##### Option 2: Use your username and password
You can use your platform user name and password to generate the JWT.

With this option, the username is `{your platform account user name}`

The password is `{your platform account password}`

#### Repository API Request using JWT authentication

1. Add the Bearer token to the Authorization header. cURL example:
`--H 'Authorization: Bearer {JSON Web Token}' \`
2. In your request to the Repository API, include the case-sensitive **repositoryId** as a query parameter. You can obtain the repository ID from the URL when you navigate to the repository in the Boomi DataHub user interface. Request example:
`‘https://{Base URL}/mdm/universes/{UniverseID}?repositoryId={Repository ID}'`

#### Authorization

JWT authentication only allows users to make requests and perform actions according to their assigned role in the Boomi Enterprise Platform User Management screen. 

:::note

  If you change a user's privileges after they generate their JWT, privilege changes do not apply to the existing token. Obtain a new JWT for API requests to apply changes that permit or prohibit user actions.

:::

If your account includes the Advanced Security feature, MDM Data Stewards can only make stewardship-related requests and perform actions according to their custom role settings and [Hub entitlements](/docs/Atomsphere/Master%20Data%20Hub/Getting%20started/t-hub-Creating_Hub_Role_Entitlements_06d21275-b0c6-4854-abef-5782326aa85b.md). Hub entitlements provide access to specific repositories and objects and can restrict specific actions.

#### Token expiration

By default, JWT tokens expire after 5 minutes. Contact Boomi support to adjust the token expiration duration. 
You’ll receive the following 401 error when making a request with an expired token:

```html
<html>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
	<title>Error 401 Invalid credentials.</title>
</head>

<body>
	<h2>HTTP ERROR 401</h2>
	<p>Problem accessing /mdm/universes. Reason:
		<pre>Invalid credentials.</pre>
	</p>
</body>

</html>
```
You can implement a process that checks token expiration before making a request and gets a new JWT token upon expiration. 

## Repository API audit log

The Repository API's [Audit log object](https://developer.boomi.com/api/platformapi#tag/AuditLog) represents an entry in the audit log. Retention of audit log entries is indefinite. Entries logged within the past 30 days appear in the **Log** tabs in the Boomi DataHub user interface.

Audit Log object queries for specific types of Boomi DataHub actions are constructed by combining the type, action and modifier filter parameters:

Action type\(s\)|type|action|modifier|
|----------------|----|------|--------|
|Changed a source entity ID.|*mdm.data*|UPDATE|NONE|
|Restored an end-dated golden record.|*mdm.data*|UPDATE|NONE|
|Requested to purge an end-dated golden record.|*mdm.data*|DELETE|NONE|
|Requested to cancel a bulk source update request.|*mdm.data*|STOP|REQUEST|
|Channel update request resent for a golden record.|*mdm.data*|ADD|NONE|
|Requested to resolve matching conflict for a quarantined entity(s).|*mdm.quarantine*|RESOLVE|NONE|
|Requested to restore an end-dated quarantined entity(s).|*mdm.quarantine*|RESOLVE|NONE|
|Requested to reject a quarantined entity(s) for a potential duplicate or already end-dated error.|*mdm.quarantine*|RESOLVE|NONE|
|Requested to delete a quarantined entity(s).|*mdm.quarantine*|DELETE|NONE|