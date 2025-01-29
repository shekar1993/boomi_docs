# FTP V2 connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-77b9eb09-a8cd-4c96-a0a1-c7a1f37280c5"/>
</head>


The FTP V2 connector opens a data connection session \(either passive or active\) with an external FTP server so your Boomi Integration process can create, update, download, delete a file, etc.

The session and connection to the FTP server remains open until any queued commands complete, and then the session closes. The connection supports basic authentication \(user name and password\), and SSL/TLS 1.2 \(FTPS\) for secure transmission that protects your user name, password, and encrypts the files being transferred. Boomi Integration can access any FTP server connected to the Internet because it is TCP/IP based. Because this connector is Internet-based, there are no ongoing document fees when exchanging data between trading partners. This connector offers a viable alternative to a traditional Value Added Network \(VAN\).

## Connector value 

With Boomi Integration and the FTP V2 connector, you can create a process that addresses these business needs in addition to others:

-   Download a large number of files from a remote server and store them in a database.
-   Back up and store files remotely, instead of locally, to remain protected from hardware failure, disaster, etc.
-   Download an ISO image file from an external FTP site and make it accessible to your users.

## Connector capabilities 

The FTP V2 connector offers the following capabilities:

-   You can include all file content and the full metadata \(currently, the Timestamp\) in the output of the files being created and downloaded.
-   You can use the full metadata to specify which files to download or list from the FTP server.
-   Depending on the FTP server, interrupted and failed uploads and downloads resume from the point of failure, rather than starting from the beginning.
-   For the Query operation, you can choose whether to follow symbolic links.

## Connector configuration 

To configure the connector to communicate with an FTP server, set up two components:

-   FTP V2 connection
-   FTP V2 operation

This design provides reusable components which contain connection settings and operation settings. After building the connection and operation, set up your connector within a process. When the process is defined properly, Boomi Integration can map to and from virtually any system using the connector to transfer files.

## Prerequisites 

To establish a data connection session with an external FTP server and successfully perform the supported connector operations, complete the following prerequisites. See your FTP administrator for assistance.

-   Have an FTP user with sufficient read permissions and write permissions to the required directories and files on the external FTP server.
-   Identify the host FTP server \(host name, IP address, or domain name\).
-   Identify the port number on the server-side for FTP communication. If you do not provide the port number, the connector uses the standard FTP port 21.
-   Have an internet connection for the FTP server, or a locally-deployed Atom that is accessible within your network.
-   To establish a connection when using SSL/TLS encryption, the Atom must have access to the certificate on the FTP server. By default, certificate authority \(CA\) certificates are included in the Java runtime on the Atom. However, if the Atom does not have the certificate from the FTP server, you must manually deploy it to the Atom.
-   Be aware that the connector uses the Unix style for paths. The forward slash character \(/\) separates directories and files within paths. This style applies to the input path expected by the connector in the connection, operations, document properties, and to the output the connector generates as file metadata. Unix style paths is the most common way to handle paths in FTP servers, even for those servers with underlying Windows file systems.

## Tracked properties 

The FTP V2 connector has the following tracked properties that you can set or reference in various step parameters:

**File Name** - 
\(Create: Input, Query, Get: Output\)

-   For Create, the name of the file to create on the FTP server. For this action to be successful, you must set the File Name as an input document property in the Set Properties step. See the operation topic for more information.
-   For Query and Get, the name of the downloaded file from the FTP server. See the operation topic for more information.

**Remote Directory** - 
\(Create, Query, Delete, Get, List: Input, Query, Get: Output\)

-   For Create, Query, Delete, Get, and List \(Input\), the directory on the FTP server. If set with a non-blank value, this property overrides the Remote Directory specified in the connection.
-   For Query and Get \(Output\), the directory on the FTP server from where the file is downloaded.

**Staging Directory** - 
\(Create: Input\) The directory to temporarily put a file, before being moved to the Remote Directory after creating the file. If set with a non-blank value, this property overrides the Staging Directory specified in the operation. This property is ignored when you select Append in the **Action if File Exists** drop-down list for the operation.

**Temporary Extension** - 
\(Create: Input\) A temporary extension for a file until the file is created in the Remote Directory. If set with a non-blank value, this property overrides the Temporary Extension specified in the operation. This document property is ignored when you select Append in the **Action if File Exists** drop-down list for the operation.

**Timestamp** - 
\(Query, Get: Output\) The last modification date and time of the downloaded file. Timestamp is only included in the Get operation's output when you select the **Include all metadata** check box in the operation.