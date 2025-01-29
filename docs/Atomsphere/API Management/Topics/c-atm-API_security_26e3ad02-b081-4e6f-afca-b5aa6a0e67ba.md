# API security

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-26e3ad02-b081-4e6f-afca-b5aa6a0e67ba"/>
</head>


When configuring an integration between a client application and Boomi, the shared web server executes a number of checks to authenticate and validate incoming web service requests.

The shared web server executes the following checks to authenticate and validate incoming web service requests:

-   When the shared web server is configured to require BASIC authentication, the web server checks the supplied user name and password against the list of configured users. When the shared web server is configured to require CLIENT CERTIFICATE authentication, the web server checks the SSL certificate. Otherwise, the web server simply checks the supplied user name against the list of configured users.

-   The originating IP address is validated against any IP filtering rules.

-   The request method being invoked is validated against the list of methods enabled for the requestor.


Once all checks have passed, the listener process is invoked and the user name is passed in through a process property. If the request is for the WSDL/schema\(s\), the WSDL/schema\(s\) is constructed based on the processes that are accessible to the user.

To enable any of the supported types of authentication for a web service — BASIC, CLIENT CERTIFICATE or CUSTOM — use the Shared Web Server panel \(**Manage** \> **Atom Management**\).

Authentication is required for requests to web services deployed to a Boomi Atom Cloud or Test Atom Cloud.

## Basic authentication

Basic authentication credentials are as follows:

-   Username: `<account ID\>`

-   Password: `<token\>`
`

You need to generate the token in the Shared Web Server panel:

-   If the Services Enablement feature is enabled in your account, generate the token on the **General** tab, or

-   If the API Management feature is enabled in your account, generate the token on the **User Management** tab.


A caller may put BASIC authentication credentials directly in the URL using a parameter named `boomi_auth`. See the section “Requests Originating from an Application’s Outbound Messaging” below.

## Client Certificate Header authentication

To enable Client Certificate Header authentication for connection to your local Atom’s shared web server, you need to specify a Client Certificate Header Name on the **General** tab in the Shared Web Server panel.

A private SSL certificate is not needed to enable Client Certificate Header authentication for connection to a Atom Cloud or Test Atom Cloud — these Atom Clouds each already have an SSL certificate.

## Client Certificate authentication

To enable Client Certificate authentication for connection to your local Atom’s shared web server, you need to select a private SSL certificate on the **General** tab in the Shared Web Server panel.

A private SSL certificate is not needed to enable Client Certificate authentication for connection to a Boomi Atom Cloud or Test Atom Cloud — these Atom Clouds each already have an SSL certificate.

## Custom authentication

If the API Management feature is enabled in your account, you have the option to use a Custom identity provider, as an alternative to Basic or Client Certificate authentication, for connection to your single-tenant Atom or Molecule’s shared web server. This option, known as Custom authentication, allows you to authenticate using any [JAAS \(Java Authentication and Authorization Service\)](http://docs.oracle.com/javase/7/docs/technotes/guides/security/jaas/JAASRefGuide.html) LoginModule.type. For more information, see the topic about using an external identity provider for web services authentication, linked below.

## External Provider authentication

If the API Management feature is enabled in your account, you have the option to use an external identity provider, as an alternative to Basic or Client Certificate authentication, for connection to your single-tenant Atom or Molecule’s shared web server. This option allow you to use to set up Authentication Brokers and more advanced API workflows.

## Requests originating from an application’s outbound messaging

If the application’s outbound messaging does not allow explicit configuration of authentication for their web service call, but your Atom’s shared web server uses BASIC or CLIENT CERTIFICATE authentication:

-   If your web service will be deployed to the USA East Integration Cloud, provide the web service credentials in the `boomi\_auth` URL parameter:

    ```java
    https://c01-usa-east-integrate.boomi.com/<OperationURL>;boomi_auth=<AuthString>
    ```

    For example:

    ```java
    https://c01-usa-east-integrate.boomi.com/ws/simple/someAction;boomi_auth=Zm9vOmJhcgo?blah=bazz
    ```

-   The OperationURL above comes from the Web Services Server operation URL, which will start with `/ws/...`.

-   If the Atom’s shared web server uses BASIC authentication:

    -   The AuthString above is a Base64 encoded value of `<username>:<token>`. Creating the AuthString parameter also requires the Base64 encoding of the colon between the username and token, so encode the entire string.

    -   The username can consist of any of the following, depending on the Atom or Atom Cloud: account ID, instance identifier, username@accountID, or username@instance identifier. The username is available in the Shared Web Server panel on the **User Management** tab.

    -   The token is generated in the Shared Web Server panel, as described above.

-   If the Atom’s shared web server uses CLIENT CERTIFICATE authentication:

    -   Authentication is handled by a certificate component. Select a private certificate in the Shared Web Server panel on the **General** tab.

-   If your web service will be deployed to a local Atom you have several options:

    -   Provide the web service credentials in the boomi\_auth URL parameter as described above.

    -   Use a firewall to restrict the IP range of the sending application. Or you can set up IP filtering, available in the Shared Web Server panel on the **User Management** tab.

    -   Set up SSL client certificates. 