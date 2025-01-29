# Hadoop command line samples 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-4073c206-a6be-4903-9697-6976e158d5e0"/>
</head>


Refer to the following command to set or export your HADOOP\_HOME environment variable.

```
set HADOOP_HOME=C:\java\hadoop-2.2.0
export HADOOP_HOME="/home/victortch/java/hadoop-2.2.0"
```

Use the following command to set or export a PATH to include the Hadoop bin folder:

```
set PATH=%PATH%;%HADOOP_HOME%\bin
export PATH=$PATH:$HADOOP_HOME/bin
```

Use the following command to check the Hadoop version:

```
hadoop version
Hadoop 2.2.0
Subversion https://svn.apache.org/repos/asf/hadoop/common -r 1529768
Compiled by hortonmu on 2013-10-07T06:28Z
Compiled with protoc 2.5.0
From source with checksum 79e53ce7994d1628b240f09af91e1af4
This command was run using /C:/java/hadoop-2.2.0/share/hadoop/common/hadoop-comm on-2.2.0.jar

$ hadoop version
Hadoop 2.2.0
Subversion https://svn.apache.org/repos/asf/hadoop/common -r 1529768
Compiled by hortonmu on 2013-10-07T06:28Z
Compiled with protoc 2.5.0
From source with checksum 79e53ce7994d1628b240f09af91e1af4
This command was run using
/home/victortch/java/hadoop-2.2.0/share/hadoop/common/hadoop-common-2.2.0.jar
```

Use the following command to copy the remote HDFS server file to a local folder:

```
hadoop fs -copyToLocal  hdfs://labhadoop01:8020/user/devuser/README.txt
```

Use the following command to copy the local file to a remote HDFS server with forced override.

```
hadoop fs -copyFromLocal -f README.txt hdfs://labhadoop01:8020/user/devuser
```