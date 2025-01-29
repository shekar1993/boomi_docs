# Adding customized Hadoop configuration files from a JAR file 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-7f6c091b-0f4b-4449-9c16-fb527809ab3e"/>
</head>


By adding customized Hadoop configuration files from a JAR file, you extend the functionality of the Hadoop connector and your integration processes.

## About this task


For local Atoms and Molecules, you can add customized Hadoop configuration files as a configuration resource. For example, to support scalability, high availability, and fault-tolerance, you have two HDFS servers in your production environment \(an active server and a standby server\). At any time, the standby server can become the active server. To support this functionality, you add the dfs.nameservices=clustername parameter to your .xml file and use .xml as a configuration resource.

**Note:** You can also add customized Hadoop configuration files from a network location \(preferred method\). By adding the files from a network location, you can easily make custom changes by simply changing the values in the files. You do not have to redeploy the process and custom library. For more information, see the linked Adding customized Hadoop configuration files from a network location topic.

## Procedure

1.  Create a local folder on your system \(for example, on your desktop\).

2.  Using the jar utility provided by the Java SDK \([jar - The Java Archive Tool](http://docs.oracle.com/javase/7/docs/technotes/tools/windows/jar.html)\), create a JAR file containing up to four customized Hadoop configuration files. The four files can be any of the typical Hadoop files:

    -   .xml
    -   .xml
    -   ma.xml
    -   .xml
    The [Creating a JAR file tutorial](https://docs.oracle.com/javase/tutorial/deployment/jar/build.html) from the Java Tutorials can help you when creating the JAR file.

    1.  Using the command line, navigate to the directory with the Hadoop configuration file to compress.

    2.  Create the JAR file using the basic format of the command for creating a JAR file: jar cf jar-file input-file\(s\). You can add additional options to the cf options of the basic command. For example: `jar cvf <JarFileName.jar> <FilesToBeCompressed>`. Your command may look similar to the following: `jar cvf hadoop-config.jar .xml`

3.  Place the JAR file in the local folder.

4.  Upload the custom JAR file to an account by using the [Manage Account Libraries page](../../Platform/r-atm-Account_Library_Management_edc37905-b4fe-4cae-8001-b62221adb872.md) \(**Settings** \> **Account Information and Setup** \> **Account Libraries**\).

    To upload files, you must have the Build Read and Write Access privilege and the Developer privilege. Typically, an administrator uploads the files for an account. Each account has access to 100 MB of space for uploaded files.



5.  Upload the hash file produced by running the SHA256 cryptographic hash function of the uploaded JAR file.

6.  Create a [Custom Library component](../Process%20building/c-atm-Custom_Library_components_8844439e-657e-43eb-ab44-27568c52abed.md) in the process. Select **General for the Custom Library Type**, and add the uploaded JAR file in the account library to the component.

7.  Click View Deployments.

8.  Attach the environments where you want to deploy the customized Hadoop configuration files.

9.  Deploy the latest version of the custom library.

    The platform creates the JAR file in the \[AtomRoot\]/userlib folder. The connector can load the parameters from the configuration files in the JAR as a configuration resource.

10. Restart the local Atom.

    If you use a Molecule and enable forked execution for the Molecule, you do not have to restart the Molecule.