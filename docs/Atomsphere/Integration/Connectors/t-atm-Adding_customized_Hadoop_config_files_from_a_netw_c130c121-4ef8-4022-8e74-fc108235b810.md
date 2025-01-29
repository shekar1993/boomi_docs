# Adding customized Hadoop configuration files from a network location 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-c130c121-4ef8-4022-8e74-fc108235b810"/>
</head>


By adding customized Hadoop configuration files from a network location, you extend the functionality of the Hadoop connector and your integration processes.

## About this task

For local Atoms and Molecules, you can add customized Hadoop configuration files as a configuration resource. For example, to support scalability, high availability, and fault-tolerance, you have two HDFS servers in your production environment \(an active server and a standby server\). At any time, the standby server can become the active server. To support this functionality, you add the dfs.nameservices=clustername parameter to your .xml file and use .xml as a configuration resource.

**Note:** You can also add customized Hadoop configuration files from a JAR file. However, this is the preferred method because you can easily make custom changes by simply changing the values in the files. Moreover, you do not have to redeploy the process and custom library. For more information, see the linked Adding customized Hadoop configuration files from a JAR file topic.

## Procedure

1.  Create a network directory location on your local file system.

2.  Update the permissions on the network directory to read permissions so the Atom can access the file system.

3.  Create the customized Hadoop configuration files and place them in the network directory. The customized files can be any of the typical Hadoop files:

    -   .xml
    -   .xml
    -   ma.xml
    -   .xml
4.  Create a Hadoop connection and enter a path in the **Configuration Directory** field. For more information, see the linked Hadoop connection topic.