# Java 8 upgrade 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-b0b04375-a0b6-4c32-a0fe-b81bfc02ab5d"/>
</head>


Follow these steps to upgrade your local Atoms and Molecules.

:::note

To perform this upgrade, stop the services that run the Atom or the nodes in your Molecule. You must stop all nodes in a Molecule. A “rolling restart” is not possible. Therefore, you should schedule this upgrade during maintenance downtime.

:::

1.  Gather information about the Java installation that you are currently using, including:

    -   The version of Java your Atom or Molecule is using.

    -   The path that your Atom or Molecule uses to access the JRE \(its Java.home\).

2.  Determine whether you are using JCE Unlimited Strength Jurisdiction Policy files. See information about JCE in the Atom System Requirements topic.

3.  Upgrade your Atom or Molecule to Java 8. Verify that the upgrade was successful.

4.  \(Optional\) If your Atom or Molecule uses JCE Unlimited Strength Jurisdiction Policy files, follow the instructions for reinstalling the relevant Java 8 .jar files.

5.  \(Optional\) If you manually imported certificates into the Java keystore for your Java 7 installation, re-import those certificates into the Java keystore for your Java 8 installation. For more information, see the Boomi User Community knowledge base article about migrating Java certificates to a new Java version or contact Support.

6.  \(Optional\) To switch back to Java 7 after upgrading to Java 8, follow the instructions for Making an Atom, Molecule, or Atom Cloud use a different Java version.

## Additional resources

- [Oracle’s documentation about compatibility issues](http://www.oracle.com/technetwork/java/javase/8-compatibility-guide-2156366.html)