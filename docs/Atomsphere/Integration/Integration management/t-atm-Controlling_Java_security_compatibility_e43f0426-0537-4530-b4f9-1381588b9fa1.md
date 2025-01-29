# Controlling Java security compatibility 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-e43f0426-0537-4530-b4f9-1381588b9fa1"/>
</head>


To control the Java security compatibility of an Atom or Molecule, set the **Java Security Compatibility** property on the **Properties** panel.

## Before you begin

You must have the Atom Management privilege to perform this task. If you have the Atom Management Read Access privilege, you cannot perform the task.

## About this task

:::caution

Java no longer supports TLS certificates issued after April 16, 2019 by Symantec. If your connections failed suddenly due to invalid certificates after upgrading to Java 11.0.20.8.1 or latest, you must replace the certificate in order to fix the issue. For more information, see the article [JDK-8215012 : Release Note: Distrust TLS Server Certificates Anchored by Symantec Root CAs](https://bugs.java.com/bugdatabase/view_bug.do?bug_id=8215012)."

:::

The security algorithms that Java supports change over time. For example, MD5 is no longer considered a secure algorithm for validating X.509 certificates and Java has deprecated support for it.

Boomi recommends running with the most secure algorithms available, which typically means the latest. By default, Atoms and Molecules use the most secure compatibility setting available at the time they are installed. But you can modify the security compatibility of an Atom or Molecule by setting the Java Security Compatibility property \(`-Dcom.boomi.container.securityCompatibility`\). Controlling security compatibility enables you to upgrade your JVM without the risk of breaking existing processes due to incompatible security algorithms.

## Procedure

1.  Go to **Manage** \> **Atom Management**.

2.  Select the Atom or Molecule from the list.

3.  In Settings & Configuration, click **Properties**.

    The Atom Properties or Molecule Properties panel opens.

4.  Click the **Advanced** tab.

5.  To specify the level of Java security algorithms that you want the Atom or Molecule to support, do the following:

    1.  Select the **Java Security Compatibility** property \(`-Dcom.boomi.container.securityCompatibility`\) and click **![](../Images/main-ic-plus-sign-white-in-blue-circle-16_98f7af60-dd5f-4037-90cd-05cc9dfc5502.jpg) Add a Property**.

    2.  In the Property Value field, specify one of the following:

    **2016.01**  
        Compatible with Java 1.8u66.

  :::info Important
     
  To remain compatible with all Java versions after 1.8.0\_221, "SYMANTEC\_TLS" has been removed from the jdk.security.caDistrustPolicies security property in the java.security configuration file.

  :::

    Setting the **2016.01** Property Value on Java 8 sets the following security and system properties:

    -  jdk.certpath.disabledAlgorithms = MD2, RSA keySize < 1024

     -   jdk.tls.disabledAlgorithms = SSLv3, RC4, DH keySize < 768

     -   jdk.jar.disabledAlgorithms = \<blank\>

     -   jdk.http.auth.tunneling.disabledSchemes = \<blank\>

     -   jdk.rmi.CORBA.allowCustomValueHandler = true

     -   com.sun.jndi.rmi.object.trustURLCodebase = true

     -   com.sun.jndi.cosnaming.object.trustURLCodebase = true

     -   jdk.net.URLClassPath.disableRestrictedPermissions = true

     -   jdk.util.zip.ensureTrailingSlash = false

     -   sun.rmi.server.disableIncomingHttp = false

     -   com.sun.jndi.ldap.object.disableEndpointIdentification = true

    For example, you can continue to use deprecated algorithms for certificate signature validation, such as MD5, by setting the **2016.01** Property Value.

    **2017.06**  
     Compatible with Java 1.8u71.

    For Atoms that were installed after the June 2017 release but prior to the January 2019 release, the `com.boomi.container.securityCompatibility` property is set to `2017.06` by default.

    :::info Important
    
    To remain compatible with all Java versions after 1.8.0\_221, "SYMANTEC\_TLS" has been removed from the jdk.security.caDistrustPolicies security property in the java.security configuration file.

    :::

    Setting the **2017.06** Property Value on Java 8 sets the following security and system properties:

    -   jdk.certpath.disabledAlgorithms = MD2, MD5, RSA keySize < 1024

    -   jdk.tls.disabledAlgorithms = SSLv3, RC4, MD5withRSA, DH keySize < 768

    -   jdk.jar.disabledAlgorithms = \<blank\>

      -   jdk.http.auth.tunneling.disabledSchemes = \<blank\>

    -   jdk.rmi.CORBA.allowCustomValueHandler = true

     -   com.sun.jndi.rmi.object.trustURLCodebase = true

     -   com.sun.jndi.cosnaming.object.trustURLCodebase = true

     -   jdk.net.URLClassPath.disableRestrictedPermissions = true

     -   jdk.util.zip.ensureTrailingSlash = false

     -   sun.rmi.server.disableIncomingHttp = false

     -   com.sun.jndi.ldap.object.disableEndpointIdentification = true
 
     **2019.01**  
        Compatible with Java .

    For Atoms that are installed after the January 2019 release, the `com.boomi.container.securityCompatibility` property is set to `2019.01` by default.

    **Important:**
    
      - To remain compatible with all Java versions after 1.8.0\_221, "SYMANTEC\_TLS" has been removed from the `jdk.security.caDistrustPolicies` security property in the java.security configuration file.

      - For version 2019.01 to remain compatible with Java version upgrades, the following NIST EC Curves were reintroduced to the Default TLS Algorithms in the java.security configuration file: sect283k1, sect283r1, sect409k1, sect409r1, sect571k1, sect571r1, and secp256k1.

      - For version 2019.01 to remain compatible with Java version upgrades, the system property named `jdk.security.allowNonCaAnchor` is introduced to maintain certificate functionality. To allow customers to maintain current certificate functionality, the property must be set to "true".

      - To maintain compatibility with Java 1.8.0\_271 version upgrades, the security property, `jdk.disabled.namedCurves`, is set to blank for 2019.01 security compatibility and earlier. This setting re-enables Weak named curves that Java disabled in version 1.8.0\_271.

      - Java no longer supports TLS certificates issued after April 16, 2019 by Symantec. If your connections failed suddenly due to invalid certificates after upgrading to Java 11.0.20.8.1 or latest, you must replace the certificate in order to fix the issue. For more information, see the article [JDK-8215012 : Release Note: Distrust TLS Server Certificates Anchored by Symantec Root CAs](https://bugs.java.com/bugdatabase/view_bug.do?bug_id=8215012)."

    Setting the **2019.01** Property Value sets the security and system properties that are delivered with Java 1.8u181.

    **2021.01**  
    Currently, version 2021.01 <!--is the same as JVM\_DEFINED \(described below\)-->. However, Boomi reserves the right to add new custom properties in the future. All changes will be documented here and within the release notes accompanying that specific release.

    -   Removes `SHA1 usage SignedJAR & denyAfter 2019-01-01` from the `jdk.certpath.disabledAlgorithms` security policy

    -   Removes `SHA1 denyAfter 2019-01-01` from the `jdk.jar.disabledAlgoritms` security property

     **Note:** Any JAR signed with SHA-1 algorithms and timestamped prior to January 01, 2019 will not be restricted.

     **Important:** Java no longer supports TLS certificates issued after April 16, 2019 by Symantec. If your connections failed suddenly due to invalid certificates after upgrading to Java 11.0.20.8.1 or latest, you must replace the certificate in order to fix the issue. For more information, see the article [JDK-8215012 : Release Note: Distrust TLS Server Certificates Anchored by Symantec Root CAs](https://bugs.java.com/bugdatabase/view_bug.do?bug_id=8215012)."

     **JVM\_DEFINED**  
     The Atom uses the compatibility settings defined by the currently installed JVM.

    As you install new versions of the JVM to run your Atom or Molecule, this value ensures that the latest and most secure settings are used.

    Descriptions of the security and system properties are defined individually in the [Java 8 release notes](https://www.oracle.com/technetwork/java/javase/8u-relnotes-2225394.html) and the [Java 11 release notes](https://www.oracle.com/java/technologies/javase/11u-relnotes.html) of the release where the properties were changed.

    **Note:** If you do not explicitly set the Java Security Compatibility property, the Atom or Molecule uses the security compatibility settings associated with the Atom or Molecule installer that was used to install it.

6.  Click **Save**.

 Because changes to this property do not take effect until the Molecule or Atom Cloud is restarted, you are prompted to restart. You have the option to restart now or restart later.