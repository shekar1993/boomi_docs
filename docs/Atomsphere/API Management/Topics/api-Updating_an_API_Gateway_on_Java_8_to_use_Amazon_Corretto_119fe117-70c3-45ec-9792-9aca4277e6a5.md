# Updating an API Gateway on Java 8 to use Amazon Corretto 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-119fe117-70c3-45ec-9792-9aca4277e6a5"/>
</head>


Use the “Update Java Provider to Corretto” link on the Gateway Information panel to update your API Gateway running on Java 8 from Oracle to Amazon Corretto.

## About this task

Boomi supports the Amazon Corretto JDK distribution, so it is recommended that you update your API Gateway off of Oracle to avoid licensing concerns when applying your own security patches. Users with API Gateways on Amazon Corretto Java 8 are responsible for updating containers with their own security updates until they upgrade them to Java 11, the latest version of Java that Boomi supports.

:::note 

This feature does not upgrade your container to Java 11 and is available only for 32 and 64-bit containers on Windows and 64-bit containers on Linux.

:::

## Procedure

1.  Go to **Configure Server** and click the **Gateways** tab.

2.  Click on a Gateway Name from the list.

    The Gateway settings page opens.

3.  In the Gateway Information panel, click the "Update Java Provider to Corretto" link. 

    :::note  
    
    This link displays only if the container is on Java 8 and does not already use the supported Amazon Corretto Java provider.
    
    :::

    For Windows users, the update wizard file \(atom\_corretto\_upgrade.exe\), is downloaded to your local drive. For Linux users, the update wizard file \(CONTAINER\_corretto8\_upgrade64.sh\) is downloaded to your local drive.

4.  Locate and run the atom\_corretto\_upgrade.exe \(Windows\) or CONTAINER\_corretto8\_upgrade64.sh \(Linux\) file from your local drive.

    Windows users may encounter a unknown publisher security warning. If you encounter this warning, click **Run** to proceed with the update.

5.  On the **Welcome** step, click **Next**.

6.  On the **Select the Directory Containing the Gateway** step, verify that the folder directory is correct for the Gateway you wish to upgrade or click **Browse** to locate and select the directory for the correct runtime container. Then, click **Next**.

7. **Optional**: On the **Choose the installation directory JRE or an external JDK** step, do one of the following:

    -   If you want to use Boomi's distributed version of Amazon Corretto Java 8 and want to change the directory location of the pref_jre.cfg file's to be the Gateway installation JRE directory, choose the **Switch the preferred JRE to Atom Installation's JRE Directory** option. Then, click **Next**.
    -   If you want to use Boomi's distributed version of Amazon Corretto Java 8 but do not want to change the pref_jre.cfg file's current directory location, choose the **Do not make changes to the preferred JRE** option. Then, click **Next**.
    -   If you want to use your own distributed version of Amazon Corretto Java 8 rather than the JDK provided by Boomi, turn on the **Use External JDK?** option and then click **Browse** to locate and select the directory containing the JDK. Then, click **Next**.
8. **Optional**: On the **Migrate Certificates** step, optionally migrate certificates from your current JVM to the new one that the container uses after the update. Do one of the following:

    -   To migrate certificates, turn on the **Migrate existing custom certificates automatically** option, and then click **Browse** to locate and select the directory which contains the existing JVM. Then, click **Next**.
    -   If you do not want to migrate certificates, click **Next** without making any selections.

The update wizard completes and your Gateway is updated to use the Amazon Corretto Java provider.

## Results

When the update finishes successfully, the Gateway Information Panel no longer displays the "Update Java Provider to Corretto" link for the updated Gateway, and the Startup Properties panel updates the Java Version and Java Home fields to its new Java version and directory location, respectively.