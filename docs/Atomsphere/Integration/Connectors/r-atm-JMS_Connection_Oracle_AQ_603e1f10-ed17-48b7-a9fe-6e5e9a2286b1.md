# JMS (Legacy) connection: Oracle AQ 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-603e1f10-ed17-48b7-a9fe-6e5e9a2286b1"/>
</head>


By enabling Oracle AQ, the JMS (Legacy) connector can connect to the Oracle AQ provider.

Use the JMS Oracle AQ connection to connect with Oracle AQ directly when you do not want to maintain a WebLogic instance. To connect through Oracle AQ WebLogic, use the Oracle AQ \(WebLogic\) connection.

#### Prerequisites

To implement a connection to the Oracle AQ provider and ensure that queues can successfully be imported, verify that you are the owner of the queue.

#### Enabling Oracle AQ messaging

Upload the JAR files into your Integration account library (**Settings > Account Information** and **Setup > Account Libraries**). For more information, see the topics [Creating a Custom Library component](../../Integration/Process%20building/t-atm-Creating_a_Custom_Library_Component_8fce64fb-4b85-4977-9876-e0d616526228.md), and [Custom library deployment considerations](../../Integration/Process%20building/c-atm-Custom_library_deployment_considerations_7fccfe31-e438-4fa6-bab0-7f395eef5fe3.md) to deploy the appropriate Atom, Molecule, Atom Cloud, or environment. Uploaded or imported files first pass through a virus scanner. The upload or import results in an error if it detects a virus, and then rejects the file. If an error persists, contact Boomi Support.

:::note

Uploaded or imported files pass through a virus scanner first. If the scan detects a virus, you receive an error message, and the scan rejects the file. If an error persists, contact Boomi Support.

:::

-   `aqapi.jar` \(found in the $ORACLE\_HOME/rdbms/jlib directory\)

-   `jmscommon.jar` \(found in the $ORACLE\_HOME/rdbms/jlib directory\)

-   `jta.jar` \(found in the $ORACLE\_HOME/jdk/jre/lib/ext directory\). If you cannot find this file, contact your Oracle AQ administrator to get the correct version of the JAR file.

-   `ojdbc6.jar` \(found in the $ORACLE\_HOME/jdbc/lib directory\)

-   `xdb6.jar` \(found in the $ORACLE\_HOME/rdbms/jlib/ directory; optional if you are using XMLType\)

-   `xmlparserv2.jar` \(found in the $ORACLE\_HOME/lib/ directory; optional if you are using XMLType\)



:::note

To correctly deploy the JAR files to an Atom Cloud, the Atom Cloud owner must place the JAR files into the Cloud's userlib/jms directory and not the account's userlib/jms directory. Additionally, to ensure the listener works as expected on Atoms, Molecules, and Atom Clouds, all of the JAR files must be from the same release version of Oracle. JAR files from different Oracle versions will result in conflicts and unpredictable behavior until corrected.

:::

## Custom objects 

Oracle treats the following data types as objects instead of a simple message type. Because of this, classifies the data types as attributes of custom objects. To ensure the JMS operations work successfully with XML, avoid errors when attempting to access the object metadata, and ensure the connector can send messages to and get messages from object queues, you must use a text queue or a custom object queue where the custom object has an attribute of one of the following:

-   BLOB — a varying-length binary string. BLOB attributes are sent into and returned from the connector Base64 encoded. Use a Data Process step to encode or decode numeric, binary Base64 to XML.
-   CLOB — stores text. A Character Large Object can hold up to 4 GB of data.

-   NCLOB — stores characters in NLS \(National Character Large Object\) or multibyte national character set and can hold up to 4 GB of data.

-   RAW — stores variable length binary data. RAW has a maximum size of 2000 bytes. Raw attributes are sent into and returned from the connector Base64-encoded.

-   VARRAY — supports columns containing multi-valued attributes \(attributes whose value is a set of values\). VARRAYs are of fixed length that you specify and therefore must be positive integers and cannot be null. In the Oracle environment, array subscripts start from 1, and not from 0 \(as in C and Java\).

-   XMLType — stores XML documents in an Oracle database and is used for performing functions on XML data. When sending data using the Message step, substitute escape strings for these characters:

    -   &amp for `(&)` ampersand

    -   &quot for `(")` double quotes

    -   &apos for `(')` single quotes

    -   &lt for `(<)` less than

    -   &gt for `(>)` greater than

    :::note

    Queues having a payload of `SYS.XMLType` are not considered an object type and are currently not supported.
    
    :::

:::note

You do not need to use escape strings when sending XML data via parameters.

:::

## Unsupported data types 

The Oracle AQ connector does not support these data types:

-   BFILE — is a locator to an external binary file.
-   URITYPE — is used for creating table columns that point to data inside or outside the database.


## Communication Options tab 


**JMS Server Type** - 
Select Oracle AQ to see default settings specific to Oracle AQ.

**JDBC URL** - 
The format of the JDBC URL differs depending on which JDBC driver you use. Refer to the JDBC vendor's documentation for the connection URL syntax.