# Using a JDK to upgrade to Boomi's latest supported version of Java 8

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-c8c44576-79a9-4ab5-9685-24a368bf1620"/>
</head>


Use the Boomi upgrader to upgrade your Atoms, Molecules, or Atom Clouds to a newer version of Java 8.

## Before you begin

This topic does not contain reversion instructions. Instead, it instructs you about how to upgrade your Atoms, Molecules, or Atom Clouds from an older version of Java 8 to Boomi's newest supported version. See the topic [Java upgrade FAQ](c-atm-Java_upgrade_FAQ_7235338a-f640-4fa5-89be-c1e4e17f776c.md) for more information on how to revert a Java version.

Before you begin, ensure that you download the Amazon Corretto Java 8 JDK to your local drive. You can download the custom JDK from [here](https://docs.aws.amazon.com/corretto/latest/corretto-8-ug/downloads-list.html). When downloading a custom Java 8 JDK, you must use a version Boomi currently supports. You are also responsible for any security updates you might need for your JDK until you upgrade your Atom, Molecule, or Atom Cloud to the latest Java Version.

Currently, the Java 8 upgrader is available for 64-bit machines only.

## About this task


Though Boomi highly recommends that you upgrade your Atoms, Molecules, or Atom Clouds to the newest supported version of Java 11 (11.0.20.8.1), you have the option to upgrade your runtime containers to run on the newest supported version of Java 8 without needing to fully upgrade to 11. Be aware that if you choose to keep your runtime containers on Java 8, Boomi no longer provides Java security updates to containers running on Java 8.

When you download and run the upgrade wizard to upgrade your Atom, Molecule, or Atom Cloud to a new version of Java, the wizard gives you the option (Step 11 of these instructions) to use either the Boomi-provided JDK or your own managed Java JDK from which your container runs. Suppose you choose to use the Boomi-provided JDK. In that case, the full JDK automatically downloads to your local directory, and your runtime container updates to use the newest version of Java 8. However, choosing your own external JDK allows you to select and use your own distributed version of Java 8 JDK in which your upgraded container will run.

Use the following steps to upgrade your Atom, Molecule, or Atom Cloud to Java 8:

## Procedure


1.  Ensure that you have the Java 8 JDK downloaded onto your local drive. For details, see the **Before you begin** section of this topic.

2.  In the user interface, navigate to **Manage** \> **Atom Management**.

3.  Select the Atom, Molecule, or Atom Cloud from the list that you want to upgrade.

4.  From the Atom Information panel, click **Update to use Java \<version number\>**.

    The upgrader file is automatically downloaded to your local drive \(likely your Downloads folder\). The file name is atom\_upgrade64.exe or similar.

5.  Click **Save File**.

6.  Before you run the upgrader, ensure that you stop all Molecule or Atom Cloud nodes.

    The upgrade to Java 8 requires changes to the executable file. For security reasons, Windows prevents running executables from being modified. If Molecule or Atom Cloud nodes are kept running, the upgrade fails.

7.  Locate the upgrader file on your local drive and run the executable file.

    The upgrade wizard opens.

    -   If you are using Windows or the Linux GUI, run the file and follow the wizard to complete the required steps.

    -   For Linux, if you want to run the installer in console mode from a command line, run the file with the `-c` flag:

        `sh /<path>/cloud_upgrade64.sh -c`

        Follow the prompts, which take you to step 8.

8.  On the Welcome to the Upgrade Wizard screen, click **Next**.

9.  On the Select the Directory Containing the \<Atom, Molecule, or Cloud\> screen, click **Browse** to find the folder on your local drive where your selected container was originally installed.

    For example, the installation directory for "User Cloud" is at C:\\Program Files\\Boomi AtomSphere\\Cloud - User Cloud. It may be helpful to use the folder search functionality to search on the name of your container. If the Browse field automatically points to the correct file path, proceed to the next step.

    -   If you are using Windows or the Linux GUI, on the Select the Directory Containing the \<Atom, Molecule, or Cloud\> page click **Browse**, locate and select the directory in which the container is installed, then click **Next**.

    -   If you are using the Linux command line, type the path to the container's original installation directory. Make sure the upgrade program completes successfully, then skip to the last step.

10. On the Select the Directory Containing the \<Atom, Molecule, or Cloud\> screen, click **Next**.

11. On the Choose the installation directory JRE or an external JDK page, select **Use external JDK for preferred JRE** from the following options:

    -   **Switch the preferred JRE to Atom Installation's JRE directory** updates your Atom with Boomi's latest version of Java and changes the location in the pref\_jre.cfg file. The pref\_jre.cfg file contains the path to the JRE that the Atom will use/
  
    -   **Do not make changes to the preferred JRE** updates your Atom with Boomi's latest version of Java but does not change the location in the pref\_jre.cfg file. The pref\_jre.cfg file contains the path to the JRE that the Atom uses currently.
  
    -   **Use external JDK for preferred JRE** uses a custom distributed version of Amazon Corretto 8. Click **Browse** next to **Specify the external JDK location** and locate the folder of the external JDK that you want to use.

    :::note
    
    For **Switch the preferred JRE to Atom Installation's JRE directory** and **Do not make changes to the preferred JRE**, if the Atom is currently using the JRE directory, the new Java version is downloaded into the jre_a (previously named jre_backup) folder, otherwise the new Java version is downloaded into the JRE directory.

    :::

12. Click **Next**.

13. On the Migrate Certificates screen, do one of the following:

    -   If you do not want to migrate custom certificates automatically, click **Next** without making changes.
  
    -   If you want to migrate custom certificates automatically, turn on the **Migrate existing custom certificates automatically** box and click **Browse** to locate the folder containing the JDK that your Atom, Molecule, or Atom Cloud is using. Then, click **Next**.
14. The wizard begins upgrading your selected container according to the preferences you have set earlier in this topic. When the wizard completes successfully, click **Finish**.

## Results


Your Atom, Molecule, or Atom Cloud is now successfully upgraded to a newer version of Java 8. To see that the upgrade is successful, view the **Java Version** field in **Manage** \> **Atom Management** \> **Startup Properties** panel for your selected container.