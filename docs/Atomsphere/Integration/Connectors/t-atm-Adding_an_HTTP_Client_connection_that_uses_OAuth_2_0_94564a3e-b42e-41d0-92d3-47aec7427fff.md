# Adding an HTTP Client connection using OAuth 2.0 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-94564a3e-b42e-41d0-92d3-47aec7427fff"/>
</head>


Add an HTTP Client connection that uses OAuth 2.0 so you can send or retrieve messages with HTTP and HTTPS-enabled servers.

## Before you begin
The steps and fields change depending on your selected grant type.

1.  Create an HTTP Client connection.

2.  Enter the URL.

    For example, `https://www.googleapis.com/oauth2/v3/token`

3.  Set the **Authentication Type** to OAuth 2.0.

4.  For **Grant Type**, select one of the following:

    a.  **Authorization Code** — An authorization code is exchanged for an access token.

    b.  **Resource Owner Credentials** — The resource owner’s credentials \(user name and password\) are sent to a client, which forwards them in a request to an authorization server for an access token. The server then returns an access token \(and optionally a refresh token\) to the client.

    c.  **Client Credentials** — The client authenticates themselves with a client ID and client secret.

5.  Enter the **Client ID** used with the application.

6.  Click **Client Secret** and enter the password obtained from the application.

7.  Authorization Code — Enter the **Authorization Token URL**.

8.  In the **Scope** field, enter an optional, space-delimited list that defines permission restrictions and resource limitations for the access token.

9.  Authorization Code — Add an **Authorization Parameter** name and value.

10. Enter the **Access Token URL.**

11. **Optional:** Add an **Access Token Parameter** name and value.

12. Authorization Code and Resource Owner — Click **Generate** and then click **Accept** to authenticate.

    A message indicates if the access token was successful. In the main window, the encrypted access token appears in the Access Token field.

13. Click **Save** to save the connection configuration.