# Hadoop connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-3ac96d68-98e6-4818-8f38-ccc524e59dc9"/>
</head>


The Hadoop connection represents a Hadoop Distributed File System \(HDFS\) where the data is written to or read from.

The Atom must have access to the HDFS. After creating a connection, you can reuse it with multiple Hadoop operations that read from or write to the HDFS.

**Note:** If you add customized Hadoop configuration files \(either from a network location or from a JAR file\) to use for any specific connection value, leave those settings blank for the connection. It uses the Hadoop configuration file parameter values. For example, in the .xml configuration file, specify the remote Hadoop server \(name property: `fs.default.name`, value property: `hdfs://labhadoop01:8020`\). In this example, leave the Hadoop HDFS Server and HDFS Port fields blank. Any specified Hadoop connection setting on the user interface overrides the parameter from the customized Hadoop configuration file.

## Connection tab 




**Hadoop HDFS Server** - 
 Optional field to specify the IP or host name of the active Hadoop HDFS server. The Atom must have access to this machine.

 -   If you leave this field blank, the connection attempts to find custom configuration files by looking at the **Configuration Directory** field. If that field is blank, the connection attempts to find custom configuration files from the JAR file. If it sets that field but there are no configuration files in the network location, the connection does not attempt to find custom configuration files from a JAR file.

 -   If you enter a value in this field, the connection does not attempt to find custom configuration files.


**HDFS Port** - 
 The port on the Hadoop file system. To find this value, refer to the `.xml` file in the `conf` folder within your Hadoop installation.

**HDFS User** - 
 The user ID with access to the Hadoop system.

**HDFS Data Directory** - 
 Optional field to set the directories on the local file system and within the Hadoop file system where Hadoop stores data. To find this value, refer to the `.xml` file in the `conf` folder within your Hadoop installation. Using a comma-delimited list of directories stores data in all named directories if they exist. It ignores named directories that do not exist.

**Configuration Directory** - 
  Optional field to specify a path on the local file system to a network location where the connector uses additional customized configuration files. A typical custom configuration on the local file system allows you to easily make custom changes without redeploying the process and custom library. The Atom must have access to the local file system, and you only need to change the values in the files. For example, to support scalability, high availability, and fault tolerance, you have two HDFS servers in your production environment \(active and standby servers\). At any time, the standby server can become the active server. To support this functionality, you add the `dfs.nameservices=clustername` parameter to the .xml file on your local file system.

  -   If you leave this field blank and you add customized Hadoop configuration files from a JAR file, the connector uses the files from the JAR file.

-   If you specify a Configuration Directory and you add customized Hadoop configuration files from a JAR file, the connector uses the files from the Configuration Directory. It does not use files from the JAR file.


## Typical port assignments in distributions containing the Hadoop application 

|Daemon|Default Port|Configuration Parameter|Protocol|Used For|
|------|------------|-----------------------|--------|--------|
|Namenode|8020|`fs.default.names`|IPC: ClientProtocol|Filesystem metadata operations|