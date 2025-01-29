# Host names and IP addresses for the Boomi Enterprise Platform

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-a5f68e32-b852-4e36-bdee-80423232a17a"/>
</head>

Local Atoms, Molecules, and Atom Clouds, as well as Platform users, need to communicate with the Boomi Enterprise Platform and related destinations.

## Connecting to the Boomi Enterprise Platform and related destinations

Boomi recommends using the URLs shown here in connection configurations, as these URLs contain fully qualified domain names (FQDN). IP addresses are subject to change, so using these URLs in connection configurations is not recommended.

Communication is over TCP, port 443.

| Destination | Used for | URL | IP addresses |
| --- | --- | --- | --- |
| The Boomi Enterprise Platform | Access to Integration, API Management, and Boomi DataHub | `https://platform.boomi.com/` | <br />75.2.102.164,<br />99.83.130.243 |
| The Platform API | Programmatic access to functionality that is normally accessed through the Boomi Enterprise Platform user interface | `https://api.boomi.com/` | <br />75.2.102.164,<br />99.83.130.243 |

If you install and maintain local Atoms, Molecules, or Atom Cloud, the machine(s) on which they reside need to be able to connect to the following destinations:

| Destination | URL | IP addresses |
| --- | --- | --- |
| The Boomi Enterprise Platform (for Atom communication with the platform) | `https://atom.boomi.com/`| <br />75.2.102.164,<br />99.83.130.243 |
| The Platform API | `https://api.boomi.com/` | <br />75.2.102.164,<br />99.83.130.243 |
| The Boomi content delivery web service | `https://software.cdn.boomi.com/` | Varies. For more information, see [Locations and IP Address Ranges of CloudFront Edge Servers](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/LocationsOfEdgeServers.html). |

If you use the Key Management Service for environment extensions feature, your runtimes need to be able to connect to the following destination:

| Destination | URL | IP addresses |
| --- | --- | --- |
| The Boomi KMS | `https://vault.boomi.com/` |  |

**Container log handling**

Your Atom will attempt to download runtime updates from Boomi's content delivery network three times before downloading updates from Boomi directly. This fallback procedure  produces the following false positive errors in the container and/or firewall log that can be ignored. 

```
Jan 7, 2020 12:09:05 PM EST FINE    [com.boomi.restlet.client.ClientUtil handle] [Request: https://qa-software.cdn.boomi.com/updates/update-397580100.zip Attempt: 1]: Re-issuing request.
Jan 7, 2020 12:09:05 PM EST FINE    [com.noelios.restlet.ext.net.HttpUrlConnectionCall sendRequest] An error occurred during the connection to the remote HTTP server.
java.net.ConnectException: Connection refused (Connection refused)
        at java.net.PlainSocketImpl.socketConnect(Native Method)
        at java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)
        at java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)
        at java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)
        at java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)
        at java.net.Socket.connect(Socket.java:589)
        at sun.security.ssl.SSLSocketImpl.connect(SSLSocketImpl.java:666)
        at sun.net.NetworkClient.doConnect(NetworkClient.java:175)
        at sun.net.www.http.HttpClient.openServer(HttpClient.java:463)
        at sun.net.www.http.HttpClient.openServer(HttpClient.java:558)
        at sun.net.www.protocol.https.HttpsClient.<init>(HttpsClient.java:264)
        at sun.net.www.protocol.https.HttpsClient.New(HttpsClient.java:367)
        at sun.net.www.protocol.https.AbstractDelegateHttpsURLConnection.getNewHttpClient(AbstractDelegateHttpsURLConnection.java:191)
        at sun.net.www.protocol.http.HttpURLConnection.plainConnect0(HttpURLConnection.java:1156)
        at sun.net.www.protocol.http.HttpURLConnection.plainConnect(HttpURLConnection.java:1050)
        at sun.net.www.protocol.https.AbstractDelegateHttpsURLConnection.connect(AbstractDelegateHttpsURLConnection.java:177)
        at sun.net.www.protocol.https.HttpsURLConnectionImpl.connect(HttpsURLConnectionImpl.java:162)
        at com.noelios.restlet.ext.net.HttpUrlConnectionCall.sendRequest(HttpUrlConnectionCall.java:180)
        at com.noelios.restlet.http.HttpClientConverter.commit(HttpClientConverter.java:109)
        at com.noelios.restlet.http.HttpClientHelper.handle(HttpClientHelper.java:88)
        at org.restlet.Client.handle(Client.java:120)
        at org.restlet.Uniform.handle(Uniform.java:106)
        at com.boomi.restlet.client.ClientUtil.handle(ClientUtil.java:41)
        at com.boomi.container.core.FeatureManagerImpl.downloadUpdateArchive(FeatureManagerImpl.java:676)
        at com.boomi.container.core.FeatureManagerImpl.downloadUpdateArchive(FeatureManagerImpl.java:623)
        at com.boomi.container.core.FeatureManagerImpl.downloadAndExtractFeatures(FeatureManagerImpl.java:567)
        at com.boomi.container.core.FeatureManagerImpl.downloadAndInstallContainerUpdate(FeatureManagerImpl.java:506)
        at com.boomi.container.core.FeatureManagerImpl.updateContainerImpl(FeatureManagerImpl.java:276)
        at com.boomi.container.core.FeatureManagerImpl.access$100(FeatureManagerImpl.java:69)
        at com.boomi.container.core.FeatureManagerImpl$3.run(FeatureManagerImpl.java:230)
        at java.lang.Thread.run(Thread.java:748)

Jan 7, 2020 12:11:08 PM EST SEVERE  [com.boomi.container.core.FeatureManagerImpl downloadUpdateArchive] Request to update Atom URI https://qa-software.cdn.boomi.com/updates/update-397580100.zip failed with a status of Connection Error (1000) Unable to connect to the remote server. Connection refused (Connection refused)
Jan 7, 2020 12:11:08 PM EST WARNING [com.boomi.container.core.FeatureManagerImpl downloadUpdateArchive] Request to download from base URI https://qa-software.cdn.boomi.com failed; default to fallback.
java.io.IOException: Unable to download update file update-397580100.zip
        at com.boomi.container.core.FeatureManagerImpl.downloadUpdateArchive(FeatureManagerImpl.java:682)
        at com.boomi.container.core.FeatureManagerImpl.downloadUpdateArchive(FeatureManagerImpl.java:623)
        at com.boomi.container.core.FeatureManagerImpl.downloadAndExtractFeatures(FeatureManagerImpl.java:567)
        at com.boomi.container.core.FeatureManagerImpl.downloadAndInstallContainerUpdate(FeatureManagerImpl.java:506)
        at com.boomi.container.core.FeatureManagerImpl.updateContainerImpl(FeatureManagerImpl.java:276)
        at com.boomi.container.core.FeatureManagerImpl.access$100(FeatureManagerImpl.java:69)
        at com.boomi.container.core.FeatureManagerImpl$3.run(FeatureManagerImpl.java:230)
        at java.lang.Thread.run(Thread.java:748)
```

After these errors, the download will proceed from the Platform URL. You may not see the successful download logged based on your logging level.

## Accepting requests from the Boomi Enterprise Platform

The Boomi Enterprise Platform makes outbound calls for actions like OAuth2 token generation and browsing and importing objects for a limited set of connectors.

Communication is over TCP on the port to which the endpoint listens.

| To accept requests made from... | Allow incoming traffic from IP address… |
| --- | --- |
| The Boomi Enterprise Platform | 18.211.250.250,<br />18.213.76.189,<br />  34.230.206.22,<br />35.167.140.28,<br />52.13.159.123,<br />52.55.188.121,<br />54.203.52.160 |

## Additional resources

[Locations and IP Address Ranges of CloudFront Edge Servers](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/LocationsOfEdgeServers.html)
