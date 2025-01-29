# Setting a schedule to update an Atom, Molecule, or Atom Cloud to the latest Java version 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-9b4dc31f-150d-4045-bba1-5e688ef3eb57"/>
</head>


Use the to set a schedule to automatically update an Atom, Molecule, or Atom Cloud to the latest Java version.

## About this task

You can set a schedule from the Java Information panel to automatically update a container to the latest version of Java after it becomes available. You must have the Atom Management privilege to perform this task.

**Important:** After upgrading the Java version, you must perform a rolling restart for multi-node Molecules or Atom Clouds.

![The Auto-update settings to set a schedule to automatically update an Atom, Molecule, or Atom Cloud when a new version of Java is available. Select the schedule type, the date, time, and timezone for the update, whether to migrate certificates, and the JRE preferences.](../Images/img-int-java_auto_update_664a54fd-8dd6-45a5-8f13-e02d0106a0e4.png)

## Procedure

1.  Go to **Manage** \> **Atom Management** .

2.  From the left side of the page, select the container for which you want to set a schedule and go to the **Java Information** panel.

3.  In the **Auto-update** section, select the toggle next to **Auto-update to latest version of Java** to set a schedule.

4.  For **Schedule Type** select one of the following options:

    -   **Immediate after JRE release** - The Java version is updated immediately after it is released. If you select this option, skip to step 8.

    -   **First Week** - The Java version is updated in the first week after the JRE is released.

    -   **Last Week** - The Java version is updated in the last week after the JRE is released before the Platform Release.

5.  For **Schedule Day**, select which day of the week you want the update to be applied from the drop-down menu.

6.  For **Schedule Hour**, select the time of day you want the update to be applied from the drop-down menu.

7.  For **Schedule Time Zone**, select the time zone for which you want the date and time settings to apply for the container to be updated from the drop-down menu.

8.  (Optional) If you want certificates to be migrated automatically during the update process, check the box next to **Migrate Certificates**. Enter the directory location of your certificates in the **Certificate Path** field.

9.  For **JRE Preferences**, select one of the following options:

    -   **Switch the preferred JRE to Atom Installation's JRE Directory** - Updates your Atom with Boomi's latest version of Java and changes the location in the pref\_jre.cfg file. The pref\_jre.cfg file contains the path to the JRE that the Atom will use.

    -   **Do not make changes to the preferred JRE** - Updates your Atom with Boomi's latest version of Java but does not change the location in the pref\_jre.cfg file. The pref\_jre.cfg file contains the path to the JRE that the Atom uses currently.

    -   **Use external JDK for preferred JRE** - Uses a custom distributed version of Java. In the **External JDK Path** field, enter the location of the directory that contains the external JDK that you want to use.
    **Note:** For **Switch the preferred JRE to Atom Installation's JRE directory** and **Do not make changes to the preferred JRE**, if the Atom is currently using the JRE directory, the new Java version is downloaded into the jre_a (previously named jre_backup) folder, otherwise the new Java version is downloaded into the JRE directory.

10. Click **Save**.