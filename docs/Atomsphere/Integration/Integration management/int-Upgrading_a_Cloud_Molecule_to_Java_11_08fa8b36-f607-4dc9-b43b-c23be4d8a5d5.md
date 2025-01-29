# Upgrading a Cloud Molecule to Java 11 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-08fa8b36-f607-4dc9-b43b-c23be4d8a5d5"/>
</head>


Use Atom Management to upgrade a Cloud Molecule to Java 11.

## Before you begin

When you download and run the upgrade wizard to upgrade your Cloud Molecule to a new version of Java, the wizard gives you the option to use either the -provided JDK or your own managed Java JDK from which your container will run. If you choose to use the -provided JDK \(\), a private copy of the full JDK is automatically downloaded to your local jre directory for your Cloud to use and your runtime container is updated to use the newest version of Java 11.

:::note

Upon upgrading, the upgrader places the new Java files a new directory called jre_a (previously named jre_backup), and modifies the runtime's pref_jre.cfg file to make this the new active Java location. If jre_a is already the active Java, the upgrader places the new Java files in the jre directory and modifies the pref_jre.cfg file accordingly.

:::

However, choosing your own custom JDK allows you to select and use your own distributed version of Java 11 JDK in which your upgraded container will run. If you choose to use your own distribution of Amazon Corretto Java 11 and not one provided by , you must install the Java 11 JDK before you can upgrade a Cloud Molecule to use Java 11. You can download the Java JDK [here](https://docs.aws.amazon.com/corretto/latest/corretto-11-ug/downloads-list.html). If you do not use the -provided JDK, you must run the upgrader and specify the external JDK functionality during the upgrade wizard process. Neglecting to do so causes the Atom Cloud to fail at start up.


## About this task

- Only the node that runs upgrades \(typically the head node\) is automatically restarted to run the updated Java version. All other nodes within the cluster must be restarted to also take the upgrade.

- For Linux, if you choose not to use the GUI to upgrade your Atom Cloud, use the console mode option \(-c\) of the install4j installer.

## Procedure

1.  (Optional) If you previously upgraded to a new Java version, copy the full \<installation_directory>/jre directory and the full install4j folder to different locations before running the upgrader.
2.  In the Integration user interface, navigate to Manage > Atom Management.

3.  Select the Atom Cloud that you want to upgrade and click **Atom Information**.

4.  Click **Update to use Java \<version number\>** from the Atom Controls options.

    A confirmation dialog opens showing which upgrade program you chose to download. If you see `cloud_upgrade64.exe`, this means that you are upgrading a 64-bit Cloud Molecule for Windows. If you are upgrading a 64-bit Cloud Molecule for Linux, the file is named `cloud_upgrade64.sh`.

5.  Click **Save File**.

6.  Prior to running the upgrader, ensure all Cloud nodes are stopped.

    The upgrade to Java 11 requires changes to the executable file. For security reasons, Windows prevents running executables from being modified. If nodes are kept running, the upgrade fails.

7.  Locate and run the file that you downloaded.

    -   If you are using Windows or the Linux GUI, run the file and follow the wizard to complete the required steps.

    -   For Linux, if you want to run the installer in console mode from a command line, run the file with the `-c` flag:

        `sh /<path>/cloud_upgrade64.sh -c`

        Follow the prompts, which take you to step 8.

8.  On the Welcome to the Cloud Upgrade Wizard screen, click **Next**.

9.  On the Select the Directory Containing the Cloud screen, do one of the following:

    -   If you are using Windows or the Linux GUI, on the Select the Directory Containing the Cloud page click **Browse**, locate and select the directory in which the Cloud Molecule is installed, then click **Next**.

    -   If you are using the Linux command line, type the path to the Cloud Molecule installation directory. Make sure the upgrade program completes successfully, then skip to the last step.

10. On the **Choose the installation directory JRE or an external JDK**page, select one of the following:

    -   **Switch the preferred JRE to Atom Installation's JRE directory** updates your Cloud Molecule with Boomi's latest version of Java and changes the location in the pref\_jre.cfg file. The pref\_jre.cfg file contains the path to the JRE that the Cloud Molecule will use.
    -   **Do not make changes to the preferred JRE** updates your Atom with Boomi's latest version of Java but does not change the location in the pref\_jre.cfg file. The pref\_jre.cfg file contains the path to the JRE that the Cloud Molecule uses currently.
    -   **Use external JDK for preferred JRE** uses a custom distributed version of Amazon Corretto 11. Click **Browse** next to **Specify the external JDK location** and locate the folder of the external JDK that you want to use.
    **Note:** For **Switch the preferred JRE to Atom Installation's JRE directory** and **Do not make changes to the preferred JRE**, if the Cloud Molecule is currently using the JRE directory, the new Java version is downloaded into the jre_a (previously named jre_backup) folder, otherwise the new Java version is downloaded into the JRE directory.

11. Click **Next**.

12. On the Migrate Certificates screen, do one of the following:

    -   If you do not want to migrate custom certificates automatically, click **Next** without making changes.
    -   If you want to migrate custom certificates automatically, turn on the **Migrate existing custom certificates automatically** box and click **Browse** to locate the folder containing the JDK that your Atom Cloud is using. Then, click **Next**.
  
    :::note

    The certificates that can be migrated during this step are located in the /lib/security/cacerts directory.  

    :::

    The upgrade program stops your Cloud Molecule and then upgrades it. If the upgrade is successful, you see a completion message along with the Cloud Molecule’s name and the path to its preferred JDK.

13. The wizard begins upgrading your selected container according to the preferences you have set earlier in this topic. When the wizard completes successfully, click **Finish**.

## Results

Your Atom Cloud is now successfully upgraded to a newer version of Java 11. To see that the upgrade is successful, view the **Java Version** field in **Manage** \> **Atom Management** \> **Startup Properties** panel for your selected container.

:::info Important

Only the node that runs upgrades \(typically the head node\) is automatically restarted to run the updated Java version. All other nodes within the cluster must be restarted to also take the upgrade.

:::
