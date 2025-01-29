# Upgrading an Atom or Molecule to Java 11 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-d46de877-3973-4353-95f8-d3e17f435b0e"/>
</head>


You can upgrade an Atom or Molecule so that it uses Java 11.

## Before you begin

When you download and run the upgrade wizard to upgrade your Atom or Molecule to a new version of Java, the wizard gives you the option to use either the Boomi-provided JDK or your own managed Java JDK from which your container will run. If you choose to use the Boomi-provided JDK, the full JDK is automatically downloaded to the container's installation directory and your runtime container is updated to use the newest version of Java 11.

:::note

Upon upgrading, the upgrader places the new Java files a new directory called jre_a (previously named jre_backup), and modifies the runtime's pref_jre.cfg file to make this the new active Java location. If jre_a is already the active Java, the upgrader places the new Java files in the jre directory and modifies the pref_jre.cfg file accordingly.

:::

However, choosing your own custom JDK allows you to select and use your own distributed version of Java 11 JDK in which your upgraded container will run. If you choose to use your own distribution of Amazon Corretto Java 11 and not one provided by Boomi, you must install the Java 11 JDK before you can upgrade an Atom or Molecule to use Java 11. You can download the Java 11.0.24.8.1 JDK [here](https://docs.aws.amazon.com/corretto/latest/corretto-11-ug/downloads-list.html). If you do not use the Boomi-provided JDK, you must run the upgrader and specify the external JDK functionality during the upgrade wizard process. Neglecting to do so causes the Atom or Molecule to fail at start up.

## About this task

- Only the Molecule node that runs upgrades (typically the head node) is automatically restarted to run the updated Java version. All other nodes within the cluster must be restarted to also take the upgrade.

- For Linux, if you choose not to use the GUI to upgrade your Atom or Molecule, use the console mode option (-c) of the install4j installer.

## Procedure

1.  (Optional) If you previously upgraded to a new Java version, copy the full \<installation_directory>/jre directory and the full install4j folder to different locations before running the upgrader.

2. In the Integration user interface, navigate to **Manage** \> **Atom Management**.

2.  Select the Atom or Molecule that you want to upgrade and click **Atom Information**.

3.  Click **Update to use Java \<version number\>** from the Atom Controls options.

    A confirmation dialog opens, showing which upgrade program you chose to download. If you see `atom_upgrade64.exe`, this means that you are upgrading a 64-bit Atom for Windows. If you are upgrading a 64-bit Atom for Linux, the file is named `atom_upgrade64.sh`.

4.  Click **Save File**.

5.  Prior to running the upgrader, ensure all Molecule nodes are stopped.

    The upgrade to Java 11 requires changes to the executable file. For security reasons, Windows prevents running executables from being modified. If Molecule nodes are kept running, the upgrade fails.

6.  Locate and run the file that you downloaded.

    -   If you are using Windows or the Linux GUI, run the file and follow the wizard to complete the required steps.

    -   For Linux, if you want to run the installer in console mode from a command line, run the file with the `-c` flag:

        `sh /<path>/atom_upgrade64.sh -c`

        `sh /<path>/molecule_upgrade64.sh -c`

        Follow the prompts, which take you to step 8.

        :::note

        You can also run an [Unattended installation of an Atom, Molecule, or Atom Cloud](../Atom,%20Molecule,%20and%20Atom%20Cloud%20setup/c-atm-Unattended_installation_of_Atom_Molecule_or_Cloud_8e4eb1de-e2f9-40d1-888b-a9c25e395997.md) if you prefer to automate the installation process.

        :::

7.  On the Welcome to the Atom (or Molecule) Upgrade Wizard screen, click **Next**.

8.  On the Select the Directory Containing the Atom (or Molecule) screen, do one of the following:

    -   If you are using Windows or the Linux GUI, on the Select the Directory Containing the Atom (or Molecule) page click **Browse**, locate and select the directory in which the Atom or Molecule is installed, then click **Next**.

    -   If you are using the Linux command line, type the path to the Atom or Molecule installation directory. Make sure the upgrade program completes successfully, then skip to the last step.

9.  On the **Choose the installation directory JRE or an external JDK**page, select one of the following:

    -   **Switch the preferred JRE to Atom Installation's JRE directory** updates your Atom with Boomi's latest version of Java and changes the location in the pref_jre.cfg file. The pref_jre.cfg file contains the path to the JRE that the Atom will use.
    -   **Do not make changes to the preferred JRE** updates your Atom with Boomi's latest version of Java but does not change the location in the pref_jre.cfg file. The pref_jre.cfg file contains the path to the JRE that the Atom uses currently.
    -   **Use external JDK for preferred JRE** uses a custom distributed version of Amazon Corretto 11. Click **Browse** next to **Specify the external JDK location** and locate the folder of the external JDK that you want to use.
    **Note:** For **Switch the preferred JRE to Atom Installation's JRE directory** and **Do not make changes to the preferred JRE**, if the Atom is currently using the JRE directory, the new Java version is downloaded into the jre_a (previously named jre_backup) folder, otherwise the new Java version is downloaded into the JRE directory.

10. Click **Next**.

11. On the Migrate Certificates screen, do one of the following:

    -   If you do not want to migrate custom certificates automatically, click **Next** without making changes.
    -   If you want to migrate custom certificates automatically, turn on the **Migrate existing custom certificates automatically** box and click **Browse** to locate the folder containing the JDK that your Atom or Molecule is using. Then, click **Next**.
    **Note:** The certificates that can be migrated during this step are located in the /lib/security/cacerts directory.

12. The wizard begins upgrading your selected container according to the preferences you have set earlier in this topic. When the wizard completes successfully, click **Finish**.

## Results

Your Atom or Molecule is now successfully upgraded to a newer version of Java 11. To see that the upgrade is successful, view the **Java Version** field in **Manage** \> **Atom Management** \> **Startup Properties** panel for your selected container.

:::info Important

Only the Molecule node that runs upgrades \(typically the head node\) is automatically restarted to run the updated Java version. All other nodes within the cluster must be restarted to also take the upgrade.

:::

If a problem occurred during the update and you need to roll back to your prior version of Java, do the following:

- If you previously ran the upgrader, move the new `<installation_directory\>/jre` folder to another location. Then, replace it with the original `<installation_directory\>/jre` folder that you copied before starting the upgrade.
- Whether or not you previously ran the upgrader, update the `install4j` folder to use the prior version of Java as described in the topic [Making an Atom, Molecule, or Atom Cloud use a different Java version](t-atm-Making_an_Atom_Molecule_or_Cloud_use_different_Java_ae09aff4-ea41-4578-a644-26c7d5c543f4.md).

After you resolve the upgrade issues that caused you to roll back to your prior version of Java, and then upgrade the Atom or Molecule again.