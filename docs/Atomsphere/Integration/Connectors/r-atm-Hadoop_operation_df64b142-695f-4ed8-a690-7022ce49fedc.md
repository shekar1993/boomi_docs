import OperationEnd from './_operationEnd.md'

import TrackingDir from './_TrackObject.md'

import ReturnErrRes from './_ReturnResponse.md'



# Hadoop operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-df64b142-695f-4ed8-a690-7022ce49fedc"/>
</head>


The Hadoop operation defines how to write files to and read files from a Hadoop Distributed File System \(HDFS\).

The Hadoop operation supports the following actions:

-   Create — Creates files.

-   Delete — Delete files.

-   Execute — It uses this action for all other procedural API calls. This operation works only on local Atoms and not on a Atom Cloud.

-   Get — Reads files.


## **Options** tab

Click **Import Operation**, then use the Import wizard to select the object to integrate. When you configure an action, the following fields appear on the **Options** tab:



<TrackingDir />

**Request Profile** \(Create, and Get only\)  
 The XML profile definition representing the XML structure sent by the connector.

<ReturnErrRes />

**File Naming Options** \(Create only\)  
 Selects whether to create a new unique name, abort, or overwrite when a file name exists.

**File Name** \(Create only\)  
 The name of the file to create on the HDFS directory. If left empty, the name is set to `System.currentTimeMillis() + ".dat"`. You can override this property using the **File Name** dynamic operation property.

**HDFS Directory** \(Create, Delete, Get\)  
 Designates the following:

 -   Create — The directory on HDFS where you create the file. If left empty, the operation uses the current user's home directory in the file system. By default, it is /user/$USER/. If the directory does not exist, it creates it automatically. You can override this property using the **HDFS directory** dynamic operation property.

 -   Delete and Get — The directory location where the file resides on HDFS. If left empty, the operation uses the current user's home directory in the file system. By default, the location is /user/$USER/. You can override this property using the **HDFS directory** dynamic operation property.


**Block Size** \(Create only\)  
 The block size to use on HDFS. When zero, it uses the default of 4096 bytes.

**Replication** \(Create only\)   
 The number of times it replicates each block when copying files to HDFS. When 0 or empty, the default is the number of the configured cluster. Higher numbers use more space, but create more fault tolerance with better performance.

**Delete Recursive** \(Delete only\)  
  When checked, deletes files or file directory paths.

**Job Tracker Port** \(Execute only\)  
 The port number is an increment by 1 of the HDFS port; typically configured by the administrator and set to +1. For example: `HDFS port = 8000, Tracker port = 8000+1 => 8001`.

**Job Class** \(Execute only\)  
 Customer-provided JAR file with job class and dependencies.

**Job Input Folder** \(Execute only\)  
 The path to the HDFS input folder.

**Job Output Folder** \(Execute only\)  
 The path to the HDFS output folder. Each job needs a new, separate folder.

**Response profile** \(Get only\)  
  Shows the response profile that is populated during a profile import. This field is not user-selectable or editable.

**Delete file after reading** \(Get only\)  
  When on, deletes the file after completing the file reading.

<OperationEnd />