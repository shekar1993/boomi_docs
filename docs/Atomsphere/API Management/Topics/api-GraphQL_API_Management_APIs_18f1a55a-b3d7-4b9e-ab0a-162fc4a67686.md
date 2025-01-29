# GraphQL API Management APIs 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-18f1a55a-b3d7-4b9e-ab0a-162fc4a67686"/>
</head>


The Boomi API Management GraphQL APIs expose many GraphQL queries and mutations to retrieve and update data.

:::note

While using GraphQL APIs, include sensitive data in the parameters instead of inline in the query. You can send GraphQL requests by POST with JSON content or through GET with an HTTP query string. Use the POST method for any requests that contain sensitive data.

:::

## Authentication 

To authenticate, follow the below steps:

1.  Use your Platform user name or API token and an account ID associated with an active Platform account to send a GET request to https://api.boomi.com/auth/jwt/generate/account ID with Basic Authentication. This returns a JWT in the response. Include `X-Boomi-OTP=<token>` in the header.

    You can use either username+password+MFA+account ID or just the API Token + account ID to get the JWT Token.

    -   Username and password are for basic authentication

    -   MFA format: `X-Boomi-OTP:<value>` in the header
    -   Account ID is in the endpoint
    -   API Token format: You can use basic authentication - `username = BOOMI_TOKEN.<username>@<email.com>` and `password = API Token value`
2.  Use the JWT with Bearer Authentication \(add a header to your http request with name Authorization and value Bearer `<JWT\>`\) for all requests to https://api.boomi.com/graphql.

The JWT token expires every five minutes. You must then obtain a new JWT token.

## Altair script 
Programmatic access to GraphQL APIs is available through any application, typically through a GraphQL client library in the language of choice. Altair is a user interface tool that you can use to accomplish this. You can use the following script as an option to quickly access GraphQL APIs.

:::note 

Altair supports multiple tabs and windows within the application. Each window must have the pre-request script entered and enabled separately, although any configured environments are available across the application.

:::

1.  Install the Altair Chrome extension [here](https://chrome.google.com/webstore/detail/altair-graphql-client/flnheeellpciglgpaodhkhmapeljopja?hl=en).
2.  After installing, in Altair, select **Environments**.
3.  In **Global environment**, paste the following and replace your information in the accountId, username, and password fields:

    ``` 
    {
      "host": "https://api.boomi.com",
      "accountId": "<accountId>",
      "username": "<username>",
      "password": "<password>"
    }
    
    ```

4.  Add an environment and select it as active.
5.  Paste the code below in Altair's **Pre-request** script area and select **Enable pre-request script**.

    ``` 
    const atob = await altair.importModule('atob');
    
    const debug = altair.helpers.getEnvironment('debug');
    debug && console.log('Debug mode is on');
    
    const currentTime = Date.now();
    debug && console.log(`currentTime: ${currentTime}`);
    
    const authorizationExpiresAt = altair.helpers.getEnvironment('authorizationExpiresAt');
    debug && console.log(`authorizationExpiresAt: ${authorizationExpiresAt}`);
    
    if(!!!authorizationExpiresAt || currentTime >= authorizationExpiresAt) {
      debug && console.log('Attempting to fetch new authorization token...');
    
      const host = altair.helpers.getEnvironment('host');
      debug && console.log(host);
      if(!!!host) {
        throw Error("'host' must be set in environment.");
      }
    
      const accountId = altair.helpers.getEnvironment('accountId');
      debug && console.log(`accountId: ${accountId}`);
      if(!!!accountId) {
        throw Error("'accountId' must be set in environment.");
      }
    
      const username = altair.helpers.getEnvironment('username');
      debug && console.log(`username: ${username}`);
      if(!!!username) {
        throw Error("'username' must be set in environment.");
      }
    
      const password = altair.helpers.getEnvironment('password');
      debug && console.log(`password: ${password}`);
      if(!!!password) {
        throw Error("'password' must be set in environment.");
      }
    
      const basicAuthorization = `Basic ${btoa(`${username}:${password}`)}`;
      debug && console.log(`basicAuthorization: ${basicAuthorization}`);
    
      try  {
        const res = await fetch(new Request(`${host}/auth/jwt/generate/${accountId}`), {
          method: 'GET',
          headers: new Headers({
            Authorization: basicAuthorization,
          }),
        });
        debug && console.log(res);
    
        switch(res.status) {
          case 200:
            const resText = await res.text();
            debug && console.log(`resText: ${resText}`);
    
            const bearerAuthorization = `Bearer ${resText}`;
            debug && console.log(`bearerAuthorization: ${bearerAuthorization}`);
    
            const newAuthorizationExpiresAt = JSON.parse(atob(bearerAuthorization.split('.')[1])).exp;
            altair.helpers.setEnvironment('authorizationExpiresAt', newAuthorizationExpiresAt, true);
            altair.helpers.setEnvironment('headers', {
              Authorization: bearerAuthorization,
            }, true);
    
            break;
          case 401:
            throw Error(`Could not get Authorization token. Username or password is incorrect.`);
          case 500:
            throw Error(`Could not get Authorization token. Internal server error occurred.`);
          default:
            throw Error(`Could not get Authorization token. Received status code ${res.status}.`);
        }
      } catch (err) {
        debug && console.error(err);
        throw Error(err);
      }
    } else {
      debug && console.log('Doing nothing, authorization token has not expired.');
    }
    
    ```


## Rate limiting 

The GraphQL APIs include rate limiting to guard against large spikes of incoming requests and to improve share access equally across all incoming requests. Rate limiting is applied to the number of your requests running on each platform instance. Your requests can all go to the same runtime instance or distributed across instances.

If you send a large number of requests in succession, you might see a status code `429` as your error response to the request. This status code means that you sent too many requests. Allow your requests to clear out before you resubmit the requests.

## Error handling 

If you send an invalid GraphQL request or it cannot process the request, it returns a standard GraphQL errors array with details about what went wrong. The error object contains a message that indicates those details. The extensions object contains an `errorCode` property that can help programmatically respond to errors. That error code is one of the enums defined in the GraphQL spec or one of the following:

``` 
SYSTEM_ERROR
TEMPORARY_ERROR
DEFAULT_FOR_NON_NULL_ARGUMENT
WRONG_TYPE
UNKNOWN_TYPE
SUB_SELECTION_REQUIRED
SUB_SELECTION_NOT_ALLOWED
INVALID_SYNTAX
BAD_VALUE_FOR_DEFAULT_ARG
FIELD_UNDEFINED
INLINE_FRAGMENT_TYPE_CONDITION_INVALID
FRAGMENT_TYPE_CONDITION_INVALID
UNKNOWN_ARGUMENT
UNDEFINED_FRAGMENT
NON_INPUT_TYPE_ON_VARIABLE
UNUSED_FRAGMENT
MISSING_FIELD_ARGUMENT
MISSING_DIRECTIVE_ARGUMENT
VARIABLE_TYPE_MISMATCH
UNKNOWN_DIRECTIVE
MISPLACED_DIRECTIVE
UNDEFINED_VARIABLE
UNUSED_VARIABLE
FRAGMENT_CYCLE
FIELDS_CONFLICT
INVALID_FRAGMENT_TYPE
LONE_ANONYMOUS_OPERATION_VIOLATION
NON_EXECUTABLE_DEFINITION
DUPLICATE_OPERATION_NAME
```

## GraphQL categories 

The following table lists each supported GraphQL queries and mutations. See the specific object topics to get detailed information about the properties of the various objects, how to make API calls for each supported operation.

| Category                                         | QUERY                | MUTATION              |
|--------------------------------------------------|----------------------|-----------------------|
| [Authentication Source category](/docs/Atomsphere/API%20Management/Topics/api-authentication_resource_category_003edd41-a064-4ef9-9b1a-619c52af1ec3.md) | ✅ Supported          | ✅ Supported          |
| [Broker Basic Authentication Migration category](/docs/Atomsphere/API%20Management/Topics/api-Basic_Authentication_Gateway_category_d504dece-32b0-4f19-8ad5-ab114cc78201.md) | x Not supported      | ✅ Supported          |
| [Deployed API Application category](/docs/Atomsphere/API%20Management/Topics/api-deployed_api_application_category_b9419b37-2a96-4cd9-8afa-d020d7b37b58.md) | x Not supported      | ✅ Supported          |
| [Deployed API category](/docs/Atomsphere/API%20Management/Topics/api-Deployed_API_category_99fc416c-50a1-4a0c-a2a0-193e70bb6fb5.md) | ✅ Supported          | ✅ Supported          |
| [Deployed API Plan category](/docs/Atomsphere/API%20Management/Topics/api-deployed_api_plan_category_d0596786-3535-44b7-9a20-366109708add.md) | ✅ Supported          | ✅ Supported          |
| [Developer Portal Publishing category](/docs/Atomsphere/API%20Management/Topics/api-Developer_Portal_Publishing_category_4043638a-257f-4a84-8eab-3caddeb3b7c9.md) | ✅ Supported          | ✅ Supported          |
| [Environment Migration category](/docs/Atomsphere/API%20Management/Topics/api-Environment_Migration_object_5e3d92fb-a205-41b9-95d4-6528893d30b5.md) | ✅ Supported          | ✅ Supported          |
| [Environments category](/docs/Atomsphere/API%20Management/Topics/api-Get_Environment_object_e4e45b4d-c1ec-41be-a9d7-00d6a8a8c654.md) | ✅ Supported          | x Not supported      |
| [Forward Proxy on Gateway category](/docs/Atomsphere/API%20Management/Topics/api-Forward_Proxy_on_Gateway_category_c35dbfe1-3a88-41f3-a555-e47d27da75ed.md) | ✅ Supported          | ✅ Supported          |
| [Gateway category](/docs/Atomsphere/API%20Management/Topics/api-Gateway_category_b41f3ab2-2ce5-45c6-805e-0293a0f73ce3.md) | ✅ Supported          | ✅ Supported          |
| [Metrics](/docs/Atomsphere/API%20Management/Topics/api-metrics_0e0f3adb-2fcb-4af5-bbd1-aee58d2e713f.md) | ✅ Supported          | x Not supported      |
| [Runtime category](/docs/Atomsphere/API%20Management/Topics/api-Runtime_category_f3b6931f-e8e5-4c57-9461-ab21db85093c.md) | ✅ Supported          | x Not supported      |


## Using API Explorer for GraphQL APIs 

API Explorer allows you to query metrics data using GraphQL API endpoints from the platform instead of from third-party tools such as Postman and Altair.

:::note 

API Explorer is currently generally available as a Beta feature. Enable in User Preferences \(**Settings** \> **User Preferences**\).

:::

:::note 

At this time, API Explorer only supports GraphQL APIs. API Explorer does not currently support SOAP and REST APIs.

:::

1.  To launch API Explorer, select **Resources** \> **API Explorer** from the Boomi Enterprise Platform menu bar.

2.  Add a query to the left side of the graph.

3.  To run the query, select **Execute**.

    The results provide following options:

    -   **Prettify** - GraphQL formatter that retains the original query.
    -   **Merge** - Flattens a query with defined fragments.
    -   **Copy** - Copies the query content.
    -   **History** - Opens the **History** panel.
    -   **Documentation Explorer** - Searches the schema to provide a root type for each operation.