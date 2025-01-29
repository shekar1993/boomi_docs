# Updating an Atom, Molecule, or Atom Cloud on Java 8 to use Amazon Corretto 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-b609473b-0345-4be4-8aaa-3965d43589e5"/>
</head>


Use the “Update Java Provider to Corretto” link on the Atom Information panel to quickly update your Atoms, Molecules, and Atom Clouds running on Java 8 from Oracle to Amazon Corretto.

## About this task

Boomi supports the Amazon Corretto JDK distribution, so we recommend that you update your Atom, Molecule, or Atom Clouds from Oracle to avoid licensing concerns when applying your own security patches. Users with runtime containers on Amazon Corretto Java 8 are responsible for updating containers with their own security updates until they upgrade them to the latest version of Java that Boomi supports.

:::note

This feature does not upgrade your container to Java 11 and is available only for 32- and 64-bit containers on Windows and 64-bit containers on Linux.

:::

## Procedure

1.  Click on **Manage** \> **Atom Management**, and select the Atom, Molecule, or Atom Cloud you want to update.

2.  In the Atom Information panel, click the "Update Java Provider to Corretto" link. 

    :::note

    This link appears only if the container is on Java 8 and does not already use the supported Amazon Corretto Java provider.

    :::

    For Windows users, the update wizard file \(atom\_corretto\_upgrade.exe\), downloads to your local drive. For Linux users, the update wizard file \(CONTAINER\_corretto8\_upgrade64.sh\) downloads to your local drive.

3.  Locate and run the atom\_corretto\_upgrade.exe \(Windows\) or CONTAINER\_corretto8\_upgrade64.sh \(Linux\) file on your local drive.

    Windows users might encounter a unknown publisher security warning. If you encounter this warning, click **Run** to proceed with the update.

4.  In **Welcome**, click **Next**.

5.  In **Select the Directory Containing the Atom**, verify that the folder directory is correct for the Atom, Molecule, or Atom Cloud you wish to upgrade or click **Browse** to locate and select the directory for the correct runtime container. Then, click **Next**.

6.  On the **Choose the installation directory JRE or an external JDK** page, select one of the following:

    -   **Switch the preferred JRE to Atom Installation's JRE directory** to change the location of the Atom's pref\_jre.cfg file to the installation's JRE directory
    -   **Do not make changes to the preferred JRE** updates the Atom installation's JRE directory with the latest version of Java, but does not change the location of the pref\_jre.cfg file from its existing directory location.

        :::note
        
        If the prev\_jre.cfg file points to the jre_a (previously named jre_backup) directory, the file changes to redirect to the Atom installation's JRE directory instead.

        :::

    -   **Use external JDK for preferred JRE** uses a custom distributed version of Amazon Corretto. Click **Browse** next to **Specify the external JDK location** and locate the folder of the external JDK that you want to use.
7.  Click **Next**.

8. (Optional) In **Migrate Certificates**, optionally migrate certificates from your current JVM to the new one the container uses after the update. Do one of the following:

    -   To migrate certificates, turn on the Migrate existing custom certificates automatically, and then click **Browse** to locate and select the directory that contains the existing JVM. Then, click **Next**.
  
    -   If you do not want to migrate certificates, click **Next** without making any selections.
    The update wizard completes and your Atom, Molecule, or Atom Cloud updates to use the Amazon Corretto Java provider.

    The update wizard completes and your Atom, Molecule, or Atom Cloud updates to use the Amazon Corretto Java provider.


## Results

When the update finishes successfully, the Atom Information Panel in Atom Management does not show the link "Update Java Provider to Corretto" for the updated container. The Startup Properties panel updates the Java Version and Java Home fields to the new Java version and directory location, respectively.