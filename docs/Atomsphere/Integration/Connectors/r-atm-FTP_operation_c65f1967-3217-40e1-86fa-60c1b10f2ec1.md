import OperationEnd from './_operationEnd.md'

# FTP (Legacy) operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-c65f1967-3217-40e1-86fa-60c1b10f2ec1"/>
</head>


The FTP (Legacy) operation defines what to do with the connection, such as setting the directories to read to or write from.

The FTP (Legacy) operation supports two types of actions:

-   Get — Used to download data from the FTP server.

-   Send — Used to upload data to the FTP server.


## Options tab, Get action 

When you configure a GET action, the following fields appear on the Options tab:



**FTP Action** - 
The FTP actions are:

-   Get — Retrieve but do *not* delete file\(s\) from the server.
-   Get and Delete — Retrieve *and* delete file\(s\) from the server. Boomi recommends this action for executing in production mode to prevent the same file from being processed twice.


Get and Delete sequentially iterate through each file and performs these actions:

1.  Gets the file data.
2.  If the connector can successfully read the data, it attempts to delete the file.
3.  While attempting to delete the file and if an error occurs, the connector processes as follows:
    -   FTP 421 response code — If the service is not available, the connector attempts to reestablish the connection and delete the file.
     -   All other errors— The process fails with an error without attempting to delete the file.

**Remote Directory** - 
The directory on the FTP Server from which Integration reads files.

**File Filter** - 
The File Filter reads files conditionally based on a pattern that matches the file name. Use the wildcard characters \* and ? to create file name patterns.

**Transfer Type** - 
The transfer type is either:

-   ASCII — Transfer files as text.
-   Binary — Transfer files as raw data.


**Max Files to Get** - 
Sets the maximum number of files to read at one time. The default value of "0" gets all matching files in the directory.

Additional considerations for the Get action:

-   The FTP (Legacy) operation does not use the MGET command, so you cannot specify a list of files to retrieve such as “file1 file2 file3”. You can, however, specify wildcards for file name pattern matching as described above.

-   When executing a Get action, the connector performs the following steps:
1. `<as is>`
2. `<as is> (if a filter is specified)`
3. `<as is>`


Additional considerations for the Send action:

-   The FTP (Legacy) operation does not use the MPUT command to send multiple files in a single transmission. Instead, the operation sends documents as separate PUT commands.


## Options tab, Send action 

When you configure a SEND action, the following fields appear on the Options tab:



**FTP Action** - 
The FTP actions are:

-   PUT Rename when file exists — Rename when file exists in which an incremental number will be attached to the file until a file name is found that does not exist. For example, if `output.txt` is being written and it exists, then `output1.txt` will be attempted, then `output2.txt`, etc. until a file is found that does not exist.
-   PUT Append when file exists — Append the data to the end of the file if the file name already exists.

-   PUT Error when file exists — Throw an error if the file name already exists causing the process to fail.

-   PUT Overwrite when file exists — Overwrite the file if the file name already exists.


**Remote Directory** - 
Directory on the FTP server to upload data to. If no Move To Directory is specified, data is left in the remote directory.

**Move To Directory** - 
Directory to move the data to after it has been successfully uploaded. You may want to do this is if another application is retrieving files from the Move To Directory. To avoid the risk that the application might read in the file\(s\) before the upload is completed, Integration can first write the data to the Remote Directory and then, after it is successfully uploaded, move it to the Move To Directory.


**Transfer Type** - 
The transfer type is either:

-   ASCII — Transfer files as text.
-   Binary — Transfer files as raw data.

<OperationEnd />