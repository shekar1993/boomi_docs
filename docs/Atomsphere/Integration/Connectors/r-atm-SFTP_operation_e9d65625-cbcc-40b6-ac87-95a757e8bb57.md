import OperationEnd from './_operationEnd.md'

# SFTP (Legacy) operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-e9d65625-cbcc-40b6-ac87-95a757e8bb57"/>
</head>

The SFTP (Legacy) operation defines what to do with the connection, such as setting the directories to read to or write from.

The operation supports the following actions:

-   Get — Used to download data from the SFTP server. The SFTP (Legacy) operation does not use the MGET command, so you cannot specify a list of files to retrieve such as `file1 file2 file3`. You can, however, specify wildcards for file name pattern-matching.

-   Send — Used to upload data to the SFTP server.


The SFTP (Legacy) operation does not support MGET or MPUT. Therefore, you cannot specify a list of files as a filter, such as `file1 file2 file3`. The FTP (Legacy) operation does not use the MPUT command to send multiple files in a single transmission. Instead, the operation sends documents as separate PUT commands.

## Dynamic document property values 

Configuring a connector's parameters affects how dynamic document property \(DDP\) values are handled during process execution. When you configure the connector step, keep in mind the following:

-   If parameters are configured in the connector step, the query is executed per document. As a result, the dynamic document property values are retained per document and do not merge.

-   If parameters are not configured in the connector step, the dynamic document property values are merged. The first instance of a DDP takes precedence and determines the value\(s\) retained on the return documents.

    For example:

    -   Document 1 has DDP1 and DDP2
    -   Document 2 has DDP1, DDP2, and DDP3
    
    If that is true, then the output document\(s\) contain the following values:

    -   DDP1 and DDP2 from Document 1
    -   DDP3 from Document 2


:::note

Parameters are set in the **Parameters tab** and are based on the configured operation's profile.

:::

For more information on dynamic document properties, see the [Dynamic document properties](../Process%20building/c-atm-Dynamic_Document_Properties_89d2f7a0-a490-4f35-a8b1-96af364f0211.md) topic.

## Options tab 

These fields appear on the Options tab depending the Connector and SFTP actions:

**Connector Action** - 
Gets or Sends files using the overwrite rules in the SFTP Action setting.

**SFTP Action** - 
The GET actions set what to do when encountering file\(s\) with the same name:

-   Get — retrieve but do *not* delete the file\(s\) from the server.
-   Get and Delete — retrieve and delete the file\(s\) from the server. Boomi recommends this action for executing in production mode to prevent processing the same files twice.

-   Get and Move — retrieve and automatically move the file\(s\) to the designated Move To Directory.


The SEND actions set what to do when encountering file\(s\) with the same name in the Remote Directory:

-   PUT-Rename When File Exists — rename the new file by attaching an incremental number. For example, if `output.txt` is being written and it exists, then `output1.txt` is attempted, then `output2.txt`, etc., until a name is found that does not exist.

-   PUT-Append When File Exists — append the data to the end of the new file name.

-   PUT-Error When File Exists — throw an error, which causes the process to fail.

-   PUT-Overwrite When File Exists — overwrite the old file.


**Remote Directory** - 
Designates the directory on the SFTP server from which Boomi Integration reads files or to which data is uploaded. If there is no designated Move To Directory, the files remain in the remote directory.

**File Filter** \(Get\) - 
Reads only files with a file name that matches the file filter, which use the wildcard characters \* and ?.

**Maximum Files to Read** \(Get\) - 
Sets the maximum number of files to read at one time. The default value "0" gets all matching files in the directory.

**Move To Directory** \(Get and Move, Send\) - 
Designates the directory to automatically move the data to after it has been successfully uploaded or downloaded.

Optionally, use if another application is sending files to or retrieving files from the Move To Directory. Integration can first write the files to the Remote Directory to avoid the risk that the application might read in the file\(s\) before the upload or download is completed. After the files are successfully loaded, Integration moves them to the Move To Directory.

**Force Move** \(Get and Move, Send\) - 
When Move to Directory is designated, this setting:

-   If selected, the connector's special logic moves files to the designated Move To Directory.

-   If cleared, some SFTP servers allow a move while other servers return an error.


<OperationEnd />