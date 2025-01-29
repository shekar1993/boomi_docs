---
sidebar_position: 1.1
---

# Configuring Network Proxy for Local Edition SDK

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-420ed316-6d18-4e62-9a1e-08559c5df1b0"/>
</head>

In case your internet access is governed by a network proxy. Complete the following steps to configure the SDK using the proxy. 

## Procedure

1. Edit the Gradle settings file at `<extract-location>/MasheryLocalSDK/gradle.properties`. 

2. Configure an HTTPS URI. 

   ```
   systemProp.https.proxyHost=www.somehost.org
   systemProp.https.proxyPort=proxy\_port
   ```

3. Configuration proxy for HTTP URI. 

   ```
   systemProp.http.proxyHost=www.somehost.org
   systemProp.http.proxyPort=proxy\_port
   ```

   For more information on advance configuration like credentials and no proxy settings, see [Accessing the Web Through a Proxy](https://docs.gradle.org/4.10.2/userguide/build_environment.html#sec:accessing_the_web_via_a_proxy). 
