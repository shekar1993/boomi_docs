# Installing JCE Unlimited Strength Jurisdiction policy files 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-39b8eca1-44d2-4846-8072-c20133e5e336"/>
</head>


The Java Cryptography Extension \(JCE\) Unlimited Strength Jurisdiction Policy Files are required to use PGP encryption and may be required by some connectors on Java 7.

:::info Important

Previously, JCE jurisdiction files had to be downloaded and installed separately to allow policy files to be used by the JDK. For versions of Java 8 or newer, you no longer need to install the policy file in the JRE or set the security property crypto.policy. Beginning with installations or upgrades of Atoms, Molecules, or Clouds that use the **Java 8 JDK or newer**, JCE Unlimited Strength Jurisdiction policy files are enabled by default. If you are using Java 8, you should not need these instructions to succesfully install the jurisdiction policy files. The instructions on this page still apply for earlier versions of Java.

:::

For Atoms, Molecules, or Clouds on an earlier version of Java prior to Java 8, complete the following steps to install JCE Unlimited Strength Jurisdiction policy files. Or, upgrade your [Atom, Molecule](int-Upgrading_an_Atom_or_Molecule_to_Java_11_d46de877-3973-4353-95f8-d3e17f435b0e.md), or [Cloud](int-Upgrading_a_Cloud_Molecule_to_Java_11_08fa8b36-f607-4dc9-b43b-c23be4d8a5d5.md) to use the most recent version of Java 8.

1.  Download the files and instructions for [Java 7](http://www.oracle.com/technetwork/java/javase/downloads/jce-7-download-432124.html).

2.  Locate the `jre\lib\security\java.security` directory for the Java instance that the Atom is using.

    An example location is: `C:\Program Files\Java\jre8\lib\security\java.security`.

3.  Remove the following `.jar` files from this directory: `local_policy.jar` and `US_export_policy.jar`.

4.  Replace these two files with the `.jar` files included in the JCE Unlimited Strength Jurisdiction Policy Files download.

5.  Stop and restart the Atom.