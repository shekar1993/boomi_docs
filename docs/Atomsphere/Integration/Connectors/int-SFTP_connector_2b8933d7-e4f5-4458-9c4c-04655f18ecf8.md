# SFTP V2 connector

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-2b8933d7-e4f5-4458-9c4c-04655f18ecf8"/>
</head>


The SFTP V2 connector allows you to download files from or upload files to the SFTP-enabled server.

This connector also transfers data from and to an SFTP server using Java Secure Channel \(JSch\). Unlike the standard FTP connector, the SFTP V2 connector encrypts both data and commands to ensure that no sensitive data is exposed when transmitted over a network. SFTP uses a different protocol from FTP, which means you cannot use a standard FTP client to communicate with the SFTP server. Using this connector, you can use a Boomi Integration process to GET, CREATE, QUERY, UPSERT, DELETE, LIST, and LISTEN the data in any format.

:::note

This is an open source connector and you can access the code in the [SFTP V2](https://bitbucket.org/officialboomi/sftp-v2) connector repository.

:::

## Connector configuration

To configure the connector to communicate with SFTP server using SFTP client, set up the following components:

-   SFTP V2 connection — The connection represents a specific SFTP-enabled server.
-   SFTP V2 operation — The operation represents an action against a specific record type. You will create one or more operations, one for each type of interaction required by your integration scenario.

This design provides reusable components containing connection settings such as connection hostname, username, password and ssl settings and operation settings. After building your connection and operation, set up your connector within a process. When your connector is configured properly within your process, Boomi Integration can map to and from virtually any system using the SFTP connector to retrieve files from the SFTP server.

## Limitations

The SFTP V2 connector has the following limitations:

-   Proxy feature is not supported in the Cloud environment.
-   Proxy settings with ATOM protocol has not been tested.

## Prerequisites

The SFTP V2 connector requires the following:

-   Users have the necessary authorization to access remote directories.
-   Hostname and port number of the SFTP server.
-   One of the following authentication types:
    -   Username and Password
    -   SSH \(Secure Shell\) private key authentication
    -   Proxy Servers to evaluate the request and perform the required network transactions. Following are the 4 types of proxy protocols used:
        -   ATOM
        -   HTTP
        -   SOCKS4
        -   SOCKS5
    -   Third Party Libraries: The Java Secure Channel \(Jsch\) library in its 0.1.55 version, to establish connections and transfer data from/to SFTP servers and Remote Directory Poller for java \(rdpj\) library in its 0.2.1 version for the Listen Operation.
    -   Using Public Key \(the Client SSH Key File Path or Public and Private Key Content is needed\).
-   Correct permissions to perform the various commands. For example, the override command currently takes the existing file, deletes it and creates a new file, so you will need to have delete permissions. Another example is you must have permission to rename a file and create temporary files for the upload/upsert commands.

-   SFTP enabled server is accessible from Boomi Integration.

## Testing the process in a Cloud Atom

To test the process in a Cloud Atom, do the following:

1.  Grant permission in the following files for Test Connection and process running.
    1.  If the SFTP server IP is not open to the internet

        -   /bin/procrunner-HIGH.policy
        -   /bin/procbrowser-HIGH.policy
        -   Add the following line in the previous files in Custom permission:

            ```
            java.net.SocketPermission "<IP>:<PORT>", "connect,resolve";
            ```

        **Note:** See the Boomiverse article [Could not create socket Caused by: access denied \(java.net.SocketPermission\)](https://community.boomi.com/s/article/couldnotcreatesocketcausedbyaccessdeniedjavanetsocketpermission) for more information.

    2.  If you selected Using Public Key as the authentication type, enter the user’s private and public keys into the Private Key Content and Public Key Content fields which are used for logging in instead of Username and Password.

        -   If you choose to upload the id\_rsa key, provide the path to the key file in Client SSH Key File Path field and place the id\_rsa private key file in any of the locations where an Atom can access it, or grant permission to access the id\_rsa key file where it is located. This applies to any local network resource, and will grant access to any process running in this cloud \(not account-specific\).
        **Note:** Follow these steps only if the SFTP server is not available/open to the network.


## Supported editions

The connector supports:

-   Any version of the SFTP-enabled server
-   SFTP API version of Java Secure Channel \(JSch\) library is 0.1.55
-   rdpj library 0.2.1 version

## Tracked properties 

The SFTP V2 connector has the following tracked properties that you can set or reference in various step parameters:

**File Name \(Create: Input, Query, Get: Output\)** - 
-   For Create, the name of the file to create on the SFTP server. For this action to be successful, you must set the File Name as an input document property in the Set Properties step. See the operation topic for more information.
-   For Query and Get, the name of the downloaded file from the SFTP server. See the operation topic for more information.

**Remote Directory \(Create, Query, Get, List: Input, Query, Get: Output\)** - 
-   For Create, Query, Get, and List \(Input\), the directory on the SFTP server. If set with a non-blank value, this property overrides the Remote Directory specified in the connection.
-   For Query and Get \(Output\), the directory on the SFTP server from where the file is downloaded.

**Timestamp \(Query, Get: Output\)** -  The last modification date and time of the downloaded file. Timestamp is only included in the Get operation's output when you select the **Include all metadata** checkbox in the operation.