# Implementing authentication for a connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-fac97f60-2ae7-4933-982c-d87126c4e4c8"/>
</head>


You can use the Connector SDK, the three classes \(`NetworkAuthenticator`, `NetworkAuthenticatorContext`, and `NetworkAuthenticatorConnector`\), and the companion Javadocs to implement authentication for a connector.

The Integration authentication protocol handler implements a number of authentication schemes that the Java platform supports. The implementation of the Java Authentication and Authorization Service supports the following:

-   HTTP basic authentication
-   HTTP digest authentication
-   NTLM \(defined by Microsoft\)
-   HTTP SPNEGO Negotiate \(defined by Microsoft\) with the following underlying mechanisms:
    -   Kerberos
    -   NTLM
    
    :::note
    
    While the HTTP Authentication protocol handler supports SPNEGO, which includes the NTLM and Kerberos sub-mechanisms, Boomi has not tested Kerberos and does not provide technical support for it.
    
    :::

:::note

The behavior of the authentication exchanges may vary, based on the Java and operating system version.

:::

## `NetworkAuthenticator` class 

Each authentication scheme is typically used by connector code in a similar way. To implement authentication for a connector, you first create a class that implements `NetworkAuthenticator` \(see the [Javadocs](https://boomisdkjavadoc.s3.amazonaws.com/javadoc/2.19.0/com/boomi/connector/api/network/NetworkAuthenticator.html)\). `NetworkAuthenticator` is a class that enables optional authentication credentials for network connections. It is implemented by connectors that you build, and is invoked to obtain a username and password for authentication.

## `NetworkAuthenticatorContext` class 

The `NetworkAuthenticatorContext` class \(see the [Javadocs](https://boomisdkjavadoc.s3.amazonaws.com/javadoc/2.19.0/com/boomi/connector/api/network/NetworkAuthenticatorContext.html)\) provides more information and context of the network exchange. The `PasswordAuthentication` method from `NetworkAuthenticator` requests a `PasswordAuthentication` instance based on the specified context. Any of the following information can be requested for the context of the authentication exchange:

-   `getRequestingAuthType` — Returns the requestor as a proxy or a server.
-   `getRequestingHost` — Gets the hostname of the site or proxy that is requesting authentication. If not available, returns null.
-   `getRequestingPort` — Gets the port number for the requested connection.
-   `getRequestingPrompt` — Gets the prompt string provided by the requestor.
-   `getRequestingProtocol` — Gets the protocol that is requesting the connection.
-   `getRequestingScheme` — Gets the scheme of the requestor. For example, the HTTP schema for an HTTP firewall.
-   `getRequestingSite` — Gets the InetAddress of the site that is requesting authorization. If not available, returns null.
-   `getRequestingURL` — Gets the URL that resulted in the request for authorization.

`NetworkAuthenticatorContext` can get a different username and password for any of the previous information in the context. If this is not needed, see the `SimpleNetworkAuthenticator` class \(see the [Javadocs](https://boomisdkjavadoc.s3.amazonaws.com/javadoc/2.19.0/com/boomi/connector/util/network/SimpleNetworkAuthenticator.html)\). `SimpleNetworkAuthenticator` creates single password authentication using a single password authentication. This is enabled by default and is independent from the `NetworkAuthenticator`. Boomi provides this free implementation of `NetworkAuthenticator` so you do not need to implement it yourself.

#### Code sample

In Integration, when an Atom that is running in the JVM calls the authentication method in your connector, `NetworkAuthenticatorContext` contains the context of the authentication. The username and password for the specific context is returned, as shown in the following example:

```java
public class SampleAuthenticator implements NetworkAuthenticator {
    
    private final String _userNameFromConnectionSettings;  
    private final String _passwordFromConnectionSettings; 
    
    public SampleAuthenticator(PropertyMap connectionProperties) {
        _userNameFromConnectionSettings = connectionProperties.getProperty("userName");
        _passwordFromConnectionSettings = connectionProperties.getProperty("password");
    }
    
    /*
     * (non-Javadoc)
     * 
     * @see com.boomi.connector.api.network.NetworkAuthenticator#requestPasswordAuthentication(com.boomi.connector.api.
     * network.NetworkAuthenticatorContext)
     */
    @Override
    public PasswordAuthentication requestPasswordAuthentication(NetworkAuthenticatorContext context) {
        switch (context.getRequestingHost()) {
        case "hostOne":
            return new PasswordAuthentication("hostOneUser", "hostOnePassword".toCharArray());
        case "hostTwo":
            return new PasswordAuthentication("hostTwoUser", "hostTwoPassword".toCharArray());
        default:
            return new PasswordAuthentication(_userNameFromConnectionSettings, _passwordFromConnectionSettings.toCharArray());
        }
    }
}

```

## NetworkAuthenticatorConnector class 

SDK developers can implement the `NetworkAuthenticatorConnector` class \(see the [Javadocs](https://boomisdkjavadoc.s3.amazonaws.com/javadoc/2.19.0/com/boomi/connector/api/network/NetworkAuthenticatorConnector.html)\), which provides a factory method to create optional `NetworkAuthentication` and is used to extend the base Connector interface. This class creates an optional `NetworkAuthenticator` instance that is based on the current `BrowseContext`. Implementing classes may return null if no network authentication is required. Non-null instances returned are used to obtain authentication for a network connection. The `BrowseContext` has all of the connector settings.

#### Code sample

The following example illustrates the `NetworkAuthenticatorConnector` class.

```java
public class SampleConnector implements NetworkAuthenticatorConnector {

    /*
     * (non-Javadoc)
     * 
     * @see com.boomi.connector.api.network.NetworkAuthenticatorConnector#createAuthenticator(com.boomi.connector.api.
     * BrowseContext)
     */
    @Override
    public NetworkAuthenticator createAuthenticator(BrowseContext context) {
        return new SampleAuthenticator(context.getConnectionProperties());
    }
}

```