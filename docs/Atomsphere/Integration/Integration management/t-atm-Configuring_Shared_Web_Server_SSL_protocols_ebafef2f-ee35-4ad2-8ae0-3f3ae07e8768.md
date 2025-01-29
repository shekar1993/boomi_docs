# Configuring Shared Web Server SSL protocols and cipher suites 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-ebafef2f-ee35-4ad2-8ae0-3f3ae07e8768"/>
</head>


The four container properties that control Shared Web Server SSL protocols and ciphers are comma-separated lists that you set in the container.properties file.

## About this task

You can combine included and excluded lists using included first.

## Procedure

1.  Stop the Atom or Molecule.

2.  Navigate to \<installation\_directory\>/conf\>

3.  Open the container.properties file in a text editor such as Notepad.

4.  Configure the SSL protocol by using a combination of these container properties:

    -   `com.boomi.container.sharedServer.http.ssl.includedCipherSuites`
    -   `com.boomi.container.sharedServer.http.ssl.includedProtocols`
    -   `com.boomi.container.sharedServer.http.ssl.excludedCipherSuites`
    -   `com.boomi.container.sharedServer.http.ssl.excludedProtocols`

    The following examples show a configured SSL protocol.

    -   To include the SSLv2Hello protocols, specify this property:

        `com.boomi.container.sharedServer.http.ssl.includedProtocols=SSLv2Hello`


    -   To exclude the SSLv3 protocol, specify this property:

        `com.boomi.container.sharedServer.http.ssl.excludedProtocols=SSLv3`


5.  Save and close the file.

6.  Restart the Atom or Molecule.


This example shows cipher codes values that exclude MD5:

```
com.boomi.container.sharedServer.http.ssl.includedCipherSuites=TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256,
TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256,
TLS_RSA_WITH_AES_128_CBC_SHA256,
TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA256,
TLS_ECDH_RSA_WITH_AES_128_CBC_SHA256,
TLS_DHE_RSA_WITH_AES_128_CBC_SHA256,
TLS_DHE_DSS_WITH_AES_128_CBC_SHA256TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA,
TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA,
TLS_RSA_WITH_AES_128_CBC_SHA,
TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA,
TLS_ECDH_RSA_WITH_AES_128_CBC_SHA,
TLS_DHE_RSA_WITH_AES_128_CBC_SHA,
TLS_DHE_DSS_WITH_AES_128_CBC_SHA,
TLS_ECDHE_ECDSA_WITH_RC4_128_SHA,
TLS_ECDHE_RSA_WITH_RC4_128_SHA,
SSL_RSA_WITH_RC4_128_SHA,
TLS_ECDH_ECDSA_WITH_RC4_128_SHA,
TLS_ECDH_RSA_WITH_RC4_128_SHA,
TLS_ECDHE_ECDSA_WITH_3DES_EDE_CBC_SHA,
TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA,
SSL_RSA_WITH_3DES_EDE_CBC_SHA,
TLS_ECDH_ECDSA_WITH_3DES_EDE_CBC_SHA,
TLS_ECDH_RSA_WITH_3DES_EDE_CBC_SHA,
SSL_DHE_RSA_WITH_3DES_EDE_CBC_SHA,SSL_DHE_DSS_WITH_3DES_EDE_CBC_SHA,TLS_EMPTY_RENEGOTIATION_INFO_SCSV
```