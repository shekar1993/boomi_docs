# Specifying SAP JCo properties with a properties file 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-205238a1-02d2-4cb8-a06a-797e660eda49"/>
</head>


Specify JCo properties with a properties file to extend the functionality of the SAP connector.

## About this task

The SAP connector recognizes additional JCo properties or JCo properties normally set by the UI. To specify these JCo properties with a properties file, you must create the file and then upload it to your Atom in a JAR file.

**Note:** This process uses Custom Library components. Custom libraries are not supported for listeners in an Atom Cloud. If you need to upload properties files for use in a listen operation on a private Atom Cloud, complete steps 1-3 and contact your Cloud owner. They need to manually place your JAR files in the Atom's \[AtomRoot\]/userlib folder. When the files are added, complete steps 10-12.

## Procedure

1.  Create a local folder on your system.

2.  Create a properties file.

    1.  Open a text editor such as Notepad.

    2.  Enter the JCo properties you want to specify and each corresponding value. For example, you might enter `jco.client.user=BOOMI3`.

    3.  Save the properties file as `<unique_name>_jco.properties`.

        **Note:** JARs can contain multiple properties files, so you should create unique names for every properties file. For example, a properties file could have the following name: `SAPatom2_jco.properties`.

3.  Use the JAR utility that is provided by the Java SDK \([jar- The Java Archive Tool](http://docs.oracle.com/javase/7/docs/technotes/tools/windows/jar.html)\), and create a JAR file containing the properties file. JAR files can contain multiple properties files, however, do not place the same files in multiple JARs.

    The [Creating a JAR file tutorial](https://docs.oracle.com/javase/tutorial/deployment/jar/build.html) from the Java Tutorials helps you when creating a JAR file.

    1.  Use the command line to navigate to the directory containing your properties file.

    2.  Create the JAR file using the basic format of the command for creating a JAR file: jar cf jar-file input-file\(s\). You can add additional options to the cf options of the command. For example: `jar cvf <JarFileName.jar> <FilesToBeCompressed>`. Your command may look similar to the following: `jar cf SAPJCoProps.jar \*.PROPERTIES`.

        This compresses your properties file into a .jar file. For example, `SAPJCoProps.jar`.

4.  Upload the custom JAR file to an account by using the [Manage Account Libraries page](../../Platform/r-atm-Account_Library_Management_edc37905-b4fe-4cae-8001-b62221adb872.md) \(**Setup \> Account Libraries**\).

    To upload files, you must have the Build Read and Write Access privilege and the Developer privilege. Typically, an administrator uploads the files for an account. Each account has access to 100 MB of space for uploaded files.

5.  [Create a Custom Libary component] (../process%20building/t-atm-creating_a_custom_library_component_8fce64fb-4b85-4977-9876-e0d616526228.md). Select **General** in the **Custom Library Type** drop-down list, and add the JAR file to the Custom Library component.

6.  Click **View Deployments**.

7.  Attach the environments that you want to deploy to. Do not deploy multiple files with the same name to a single environment.

8.  [Deploy the Custom Library Component](c-atm-Custom_library_deployment_considerations_7fccfe31-e438-4fa6-bab0-7f395eef5fe3.md).

    The JAR file is created under the \[AtomRoot\]/userlib folder. The connector can load the parameters from the configuration files in the JAR as a configuration resource.

9.  Restart the Atom.

    If you use a Molecule and you have enabled forked execution for the Molecule, you do not have to restart the Molecule.

10. On the **Build** page, create or open the SAP connection.

11. Enter the name of the properties file in **Additional Connection Settings**. The format must match exactly.

12. Save the connection.