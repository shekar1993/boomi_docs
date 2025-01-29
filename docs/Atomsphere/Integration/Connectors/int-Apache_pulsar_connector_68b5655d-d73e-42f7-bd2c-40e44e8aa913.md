# Apache Pulsar \(Tech Preview\) connector

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-68b5655d-d73e-42f7-bd2c-40e44e8aa913"/>
</head>


Apache Pulsar \(Tech Preview\) connector allows integrations to interact with Apache® Pulsar™ which is a distributed messaging and streaming platform.

You can use the Apache Pulsar \(Tech Preview\) connector to dynamically publish messages to topics, consume messages from topics, and listen for messages from the Pulsar topic. The connector interacts with a Pulsar instance via Pulsar Client Java APIs. It also provides the flexibility to configure the authentication mechanism like Basic, OAuth2.0, and No Authentication. The messages published to the topics can be compressed using any of the following pulsar supported compression formats: LZ4, ZLIB, and ZSTD.


::: note

Currently, the connector is not supported in the cloud Atom.

:::

## Connector configuration

To configure the connector to communicate with the Pulsar messaging platform, set up the following components:

-   Apache Pulsar connection
-   Apache Pulsar operation

This design provides reusable components which contain connection and operation settings. After building your connection and operation components, set up your connector within a process. When the process is defined properly, [Boomi Integration](lib-Boomi_Keywords_0346af2b-13d7-491e-bec9-18c5d89225bf.md#BOOMI_INTEGRATION) can map to and from virtually any system using the Apache Pulsar \(Tech Preview\) connector to the Apache Pulsar messaging platform.

## Prerequisites

The Apache Pulsar \(Tech Preview\) connector requires the following:

-   Apache Pulsar instance configured. For local standalone pulsar setup, refer to the Apache Pulsar topic, [Set up a standalone Pulsar locally](https://pulsar.apache.org/docs/getting-started-standalone/).
-   In Apache Pulsar, have a private Tenant and/or Namespace created to organize the topics where the messages will be published \(or\) consumed. This is optional. If there is no tenant or namespace used, the topics will be created within the "Public" Tenant and "default" Namespace. The Tenant & Namespace can be created using Pulsar admin Interface. For details, refer to the Apache Pulsar topic, [Pulsar Admin Interface](https://pulsar.apache.org/docs/2.10.0/admin-api-overview).
-   For Basic Authentication — Get the Username and Password to be used. Refer to the Apache Pulsar topic, [Authentication using HTTP basic](https://pulsar.apache.org/docs/2.10.0/security-basic-auth/).
-   For OAuth2.0 Authentication — Make sure to get the OAuth2.0 Client Credentials \(client App ID, Password, Broker and Audience URL\). You can register the Pulsar Client App with any OAuth2.0 Authentication Service Provider \(E.g. Auth0\) to get the access token and the client App credentials. For more details, see the Apache Pulsar documentation [Client authentication using OAuth 2.0 access tokens](https://pulsar.apache.org/docs/next/security-oauth2/). For details on the OAuth2.0 configuration using Auth0 site, refer to the topic [Configuring Apache Pulsar Client App for OAuth2.0 Authentication](int-Configuring_Pulsar_ClientApp_for_OAuth_authentication_18584100-f71a-4b19-b4de-614c5e7247c9.md).
-   For OAuth2.0, make sure to have the Pulsar Broker Configuration - `standalone.conf` & `broker.conf` file updated as below:

    ``` json
    Authentication = true
    Authenticationprovider = org.apache.pulsar.broker.authentication.AuthenticationProviderToken
    tokenpublicKey = <path to the clientapp public key file>
    ```

## Supported editions

The connector supports Apache® Pulsar™ 2.10.0 and earlier versions. The connector has been tested in the Local Standalone Pulsar setup only.