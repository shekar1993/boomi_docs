# Java upgrade FAQ 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-7235338a-f640-4fa5-89be-c1e4e17f776c"/>
</head>


Frequently asked questions about upgrading to newer versions of Java supported by Boomi.

As of April 30, 2021, Boomi no longer uses Oracle as its JDK provider for Java 11 releases, but instead uses the Amazon Corretto OpenJDK distribution. Upgrading to a newer Java version allows Boomi to maintain the required security of our applications. Moreover, Boomi plans to enhance our applications and improve performance using functionality in later Java versions. For more information around this change, see the Boomiverse article [Support for Java 11](https://community.boomi.com/s/article/Support-for-Java-11#licensing_implications).

Boomi recommends that you upgrade your development, test, or QA Atoms, Molecules, and Clouds before upgrading those in production. By doing this, you can determine if there are any potential issues. You also can measure the amount of time it takes to upgrade your production Atoms, Molecules, and Clouds. This approach also provides your administrators the opportunity to review the documentation and raise questions if needed.

**Do Java upgrades affect me?**

-   Java upgrades affect you if:

    -   You maintain your own local Atom or Molecules, or have a private Atom Cloud

    -   You develop private connectors

    -   Your processes use private connectors

    -   Your processes use custom scripting

-   Java upgrades should not affect you if you use a Atom Cloud exclusively and if you do not use private connectors or custom scripting.


**What version of Java is supported?**

-  Boomi internally tests each Java Version extensively, prior to their release to ensure supported Java versions.

**What do I need to do to upgrade to a later version of Java?**

-   See the instructions for upgrading your Atoms, Molecules, and Atom Clouds to Java 11.


**What should I keep in mind when upgrading my runtime containers to a new version of Java?**

-   If you do not use the Boomi-provided JDK but rather maintain your own distribution of Java 11, you must still run the upgrader and specify the external JDK functionality during the upgrade wizard process. Neglecting to do so causes the runtime container to fail at start up.

**How does Boomi plan to support Java licensing changes?**

-   In keeping with our existing support model, the Boomi Atom, Molecule, and Atom Cloud installers and upgraders will include free, up-to-date access to security patches for the current LTS version of Java. Presently, Java 11 is the current LTS version supported by Boomi, whereas Java 8 is the previous LTS version. Although we will continue to support the previous LTS version of Java, the fully-patched previous LTS version may not be free and we do not cover this cost for our customers \(as is currently the case\).


**What is the default garbage collector for Boomi's supported versions of Java?**

-   The default garbage collector for Java 8 is the Parallel Collector. The default garbage collector for Java 11 is G1.

**After upgrading to Java 11, can I roll back my runtime containers to use Java 8?**

-   You can use the [Roll back Java API operation](https://developer.boomi.com/api/platformapi#tag/JavaRollback) to make a container use its previous version of Java. After doing so, you are required to also update your Atom VM options to include endorsed directories by re-enabling the ATOM\_INSTALL\_DIR\\bin\\atom.vmoptions property. This property is disabled by default for Java 11 and needs to be re-enabled for earlier versions of Java.

**My Atom, Molecule, or Atom Cloud runs on Java 8 but I am not ready to upgrade to 11. How can I update my runtime container to the newest supported version of Java 8?**

-   If you are not ready to update your Atom, Molecule, or Atom Cloud to Java 11, use the [Java 8 upgrader](int-Using_a_custom_JDK_to_upgrade_to_latest_supported_version_of_java_8_c8c44576-79a9-4ab5-9685-24a368bf1620.md) to ensure that your container uses the latest supported version of Java 8. Additionally, Boomi switched Java providers from Oracle to Amazon Corretto. To update your Java 8 runtime container to use the Amazon Corretto Java provider, use [these instructions](int-Updating_an_Atom_Molecule_or_Atom_Cloud_on_Java_8_to_use_Corretto_b609473b-0345-4be4-8aaa-3965d43589e5.md).

    :::note
    
    Boomi only provides security patches for Atoms, Molecules, or Atom Clouds on Java 11. Any runtime containers that are not on Java 11 require the owner to apply Java security patches. Therefore, it is recommended that you update your Atom, Molecule, or Atom Clouds to Amazon Corretto to avoid licensing concerns when applying your own security patches.

    :::
