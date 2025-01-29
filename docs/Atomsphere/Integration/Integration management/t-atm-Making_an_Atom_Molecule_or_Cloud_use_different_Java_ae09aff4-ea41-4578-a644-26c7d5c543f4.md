# Making an Atom, Molecule, or Atom Cloud use a different Java version 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-ae09aff4-ea41-4578-a644-26c7d5c543f4"/>
</head>

If your server has multiple versions of Java installed, you can force an Atom, Molecule, or Atom Cloud to change versions.

## About this task

When installing an Atom, Molecule, or Atom Cloud, Java 8 or 11 is required.

:::note

Boomi internally tested the latests versions of Amazon Corretto OpenJDK Java and Amazon Corretto Open JDK.

It is recommended that you use the most recent version of Java that supports.

:::

## Procedure

1.  Make a copy of the `inst_jre.cfg` file that is located in the `<installation_directory>\.install4j` directory.

2.  Name the new file `pref_jre.cfg`.

3.  Delete the contents of the new `pref_jre.cfg` file and add the location of the JRE or JDK that the Atom, Molecule, or Atom Cloud should use.

    Using a Java 8 JRE on a Windows machine looks like this: `C:\Program Files\Java\jre8` or `C:\Program Files\jdk\jre`.

4.  Save the file.

5.  \(For Atom Clouds and Molecules that are running with MULTI\_PROCESS, which enables forked execution\) To specify the appropriate system properties in the atom.vmoptions file, do the following :

    1.  Go to **Manage** \> **Atom Management**.

    2.  Select the Atom, Molecule node, or Cloud Molecule from the list.

    3.  In Settings & Configuration, click **Properties**, and then click the **Advanced** tab.

    4.  Select the **Java Class Path Prepend** property \(`-classpath/p`\), click **![](../Images/main-ic-plus-sign-white-in-blue-circle-16_98f7af60-dd5f-4037-90cd-05cc9dfc5502.jpg) Add a Property**, and enter the location of the JRE or JDK.

    5.  Select the **Java Library Path** property \(`-Djava.library.path`\), click **![](../Images/main-ic-plus-sign-white-in-blue-circle-16_98f7af60-dd5f-4037-90cd-05cc9dfc5502.jpg) Add a Property**, and enter the location of the JRE or JDK.

6.  Click **Save**.

    Because changes to this property do not take effect until the Atom, Molecule, or Atom Cloud is restarted, you are prompted to restart. You have the option to restart now or restart later.

    After the Atom, Molecule, or Atom Cloud is restarted, it should now use the version of Java that is in `C:\Program Files\Java\jre8` or `C:\Program Files\jdk\jre` \(if you changed it to use Java 8\), depending on whether you want to use a JRE or a JDK.