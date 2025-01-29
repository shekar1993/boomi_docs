# Creating DBC jar file "ebsdb.dbc"

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-0ef041e0-0c59-4ac1-9949-818fc15ac48d"/>
</head>


To use DBC to connect to Oracle EBS, on the **Connection Settings**, the **Connection using DBC File?** check box must be selected. The ebsdb.dbc JAR file must be uploaded as a custom library component to the Boomi Enterprise Platform.

## About this task

This procedure outlines the steps to generate the DBC jar file. Verify this JAR file is added to the server environment.

## Procedure

1.  Log in to Oracle E-Business Database.

2.  Create the .dbc file \(ebsdb.dbc\) using the Oracle AdminAppServer Utility. For more information, see [Oracle E-Business Suite Setup Tasks – Creating a .dbc file](https://docs.oracle.com/cd/E26401_01/doc.122/e22953/T174296T174298.htm).

3.  Create the JAR file on your local machine.

    -   Windows - Open the command prompt and execute the command `jar -cf <output JAR file name> <esbdb.dbc>` Where, `<esbdb.dbc>` is the input dbc file. Example: `jar -cf DBCLIB.jar esbdb.dbc`
4.  Upload the DBC JAR file to the custom library in the Boomi Enterprise Platform. For the process to upload the JAR file as a custom library component, see the topic [Working with custom libraries](../Process%20building/c-atm-Working_with_custom_libraries_96f10864-334e-4eba-ac3f-f52b4e65fdb2.md).