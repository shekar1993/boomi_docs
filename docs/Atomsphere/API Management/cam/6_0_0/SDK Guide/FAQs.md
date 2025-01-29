---
sidebar_position: 7
---

# FAQs

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-c4a0baf3-2128-4990-9c70-51acf089a503"/>
</head>

- **Do I need to install Gradle?** 

  No. Gradle installation is not required. The SDK takes care of picking up the right versions of Gradle. 

- **I already have Gradle. Will that affect working with the SDK?** 

  No. The SDK uses the appropriate Gradle version. 

- **Can I push the extracted SDK along with my adapter subprojects into Version control?** 

  Yes. All required artifacts that need to be version controlled are included and multi-authoring is governed by specific version control systems. 

- **Can different sub projects contain different versions of the same library?** 

  Yes, but ensure that the file names are different. 

- **I have multiple Java SE versions, which one should I use?** 

  It is recommended to use Java SE 11 or higher version. The SDK takes care of compiling to the required target version. 

- **How do I change the Java version to be used by the SDK?** 

  Open the gradle.properties file and add the following: 

  `org.gradle.java.home=/Path/To/Java SE HOME`.

  The home directory is different for different operating systems. 

- **How do I configure network proxy for Local Edition SDK?** 

  In case your Internet access is governed by a network proxy, you can configure the SDK using a proxy. 

  For more information, see [Configuring Network Proxy for Local Edition SDK](../SDK%20Guide/Configuring_network_proxy_for_mashery_local_sdk.md)(configuring-network-proxy-for-mashery-local-sdk.htm). 
