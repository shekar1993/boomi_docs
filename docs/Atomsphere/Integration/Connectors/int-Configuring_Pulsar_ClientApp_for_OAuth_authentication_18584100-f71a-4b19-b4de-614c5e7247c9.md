# Configuring Apache Pulsar Client App for OAuth2.0 Authentication

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-18584100-f71a-4b19-b4de-614c5e7247c9"/>
</head>


Apache Pulsar supports authenticating clients using OAuth2.0 access tokens. You can use OAuth2.0 access tokens to identify a Pulsar client and associate the Pulsar client with some "principal" \(or "role"\), which is permitted to do some actions, such as publishing messages to a topic or consuming messages from a topic.

To use the OAuth2.0 authentication, the Connector should be registered as a Pulsar Client App with any identified OAuth2.0 authentication service provider \(OAuth2.0 server\). The Pulsar client gets an access token from the OAuth2.0 server, and passes this access token to the Pulsar broker to do the authentication. The procedure for generating the OAuth2.0 Client Credentials may vary depending on the chosen third party Authentication service provider. Given below is the procedure for Client App OAuth2.0 registration with the Auth0 site \(OAuth2.0 Server\).

1.  Create a tenant account in the[Auth0](https://auth0.com/) site.

2.  From the left navigation menu, select **Applications** menu and click on the **+Create Application** button.

3.  Follow the navigations to generate the ClientID and Client Secret.

4.  After successful client App creation, click on the client app name to view the Domain, Client ID and Client Secret from the **Basic Information** tab.

5.  Scroll down to the **Advanced Settings**and get the OAuth details from the **Endpoints** tab.

6.  Make sure to select the grant type as "Client Credentials".

7.  Now, select the **APIs** menu from the left navigation menu. Make sure the **Authorized** option is set as ON for the client App which we have created. The API Audience value displayed in the APIs page should be provided in the **Audience** field in the Connector's - Connection settings.

8.  Download the certificate in .pem format and extract the public key using below openssl command in the binary format.

    ``` {#codeblock_lv2_zsb_k5b}
    openssl x509 -in dev-m2eycluu.pem -pubkey -noout | openssl enc -base64 -dRespobseRethPubkey.der
    
    ```

9.  To authenticate the user, the OpenID configuration must be defined. Follow the below steps:

    1.  On the Left Navigation menu, click on **Authentication** menu and click on Enterprise and select the **OpenID Connect**.

    2.  Create a connection by specifying a Connection Name, Issuer \(You can get this value from the Domain field in the Basic Information of your client App.\), and Client ID.

    3.  After successful connection creation, on the Settings tab of the created OpenID connect, expand the Show Issuer Details link. The Issuer value displayed here is the Issuer URL provided in the Apache Pulsar Connector - Connection settings.


Once the above setup is ready, you can configure the Apache Pulsar \(Tech Preview\) Connector for OAuth2.0 authentication.