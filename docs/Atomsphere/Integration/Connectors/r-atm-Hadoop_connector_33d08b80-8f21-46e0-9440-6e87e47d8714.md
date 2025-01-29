# Hadoop connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-e7b68ed6-188e-4bdf-9cbc-e487dbf2078a"/>
</head>


The Hadoop connector gets files from or sends files to data directories on the Hadoop Distributed File System \(HDFS\) server\(s\) to which the Atom has access.

HDFS is the primary distributed storage system used by Hadoop applications. The Hadoop connector:

-   Is built on top of the Apache Hadoop version 2.2.0 API library.
-   Works with remote Hadoop cluster resources, version 2.2.0 and higher.

-   Works with Cloudera CDH, combining Apache Hadoop with other open source projects.

-   Interacts with remote Hadoop clusters using Hadoop API libraries. For information about configuring the native IO libraries, see the linked topics.

-   Does not open a connection to a remote Hadoop cluster name. In addition, the connector does not listen to or accept connections to Hadoop cluster nodes.


Hadoop MapReduce is a technique for working on large sets of data by spreading multiple copies of the data across different machines that work in parallel on small pieces. A Hadoop JobTracker keeps track of job runs, schedules individual maps, monitors individual tasks, and works to complete the entire batch. Typically, the MapReduce framework and the HDFS run on the same set of nodes. To assist with your Java development for an Atom, provides an adapted sample of the MapReduce application which contains a readme file, dependency analysis, sample shell scripts, and run details.

To access the sample, right-click [WordCount](http://help.boomi.com/assets/WordCount.tar.gz), save the WordCount.tar.gz file, and open it with a decompression utility such as WinZip.

## Connector configuration 

To configure a connector to communicate with Hadoop, set up two components:

-   Hadoop connection

-   Hadoop operation


This approach creates reusable components that contain connection settings and operation settings. After building your connection and operation, set up your Hadoop connector within a process. When you define the process is defined correctly, can map to and from virtually any system using your Hadoop file system to store and retrieve data.

## Supported editions 

The Hadoop connector supports Hadoop v 2.2.0. Build against this framework so that your applications are compatible.

## Prerequisites 

To implement a connection to your Hadoop Distributed File System \(HDFS\), verify that you have the following:

-   A local Atom.
-   A stable and reliable connection to the Hadoop primary and cluster nodes.

-   A valid user ID that can read from and write to the HDFS.

-   Install a native IO library. For more information, see the installation topics linked below.


## Limitation 

The connector does not support Kerberos authentication to get files from or send files to data directories. See the [Boomiverse discussion](https://community.boomi.com/s/feed/0D51W00006As2xuSAB) for a workaround utilizing the Database connector.

## Tracked properties

This connector has no predefined tracked properties. See the topic [Adding tracked fields to a connector operation](../Process%20building/t-atm-Adding_tracked_fields_to_a_connector_operation_f71821dd-95ee-4ebd-bfc9-3333262f56f6.md) to learn how to add a custom tracked field.