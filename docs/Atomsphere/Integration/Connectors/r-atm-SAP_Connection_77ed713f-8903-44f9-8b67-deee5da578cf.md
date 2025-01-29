# SAP connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-77ed713f-8903-44f9-8b67-deee5da578cf"/>
</head>


The SAP connection contains details about the physical location of the SAP server.

You can use the SAP connection to add an Application Server Host connection type or a Message Server Host connection type, also known as a Type B connection, that supports a central, load-balanced instance.

## Settings tab 

**Connection Type** - 
 Select one of the available SAP connection types to use to connect to SAP:

-   Application Server Host — \(ASHOST\) is a host-based connection.

-   Message Server Host — \(MSHOST\) is a load-balanced connection where you specify an optional server group to use for load balancing.


This field is extensible.

**Server**   
Enter the host name or IP address of the SAP application server \(include the SAProuter string if applicable\). The SAP JCo property is `jco.client.ashost` if you set **Connection Type** to **Application Server Host**. When you set **Connection Type** to **Message Server Host**, the SAP JCo property is `jco.client.mshost`. The option you do not select will have an empty string for its corresponding JCo property.

**User Name** - 
 Enter the SAP user name used to connect to an SAP system. The SAP JCo property is `jco.client.user`.

**Password** - 
 Enter the SAP user password. The SAP JCo property is `jco.client.passwd`.

**Client** - 
 Enter the SAP client number. The SAP JCo property is `jco.client.client`.

**Language Code** - 
  Use the **Choose** button and drop-down to select one of the language codes saved with the connection component. The language codes are: EN \(English\), DE \(German\), IT \(Italian\), and JA \(Japanese\). If there is a language code unavailable in the drop-down, select the **Enter** button and enter the desired language code into the field. The SAP JCo property is `jco.client.lang`.

**System Number** - 
 When **Connection Type** is set to **Application Server Host**, enter the SAP system number \(SYSNR\). The SAP JCo property is `jco.client.sysnr`. If you set the **Connection Type** to **Message Server Host**, the JCo property value is set to an empty string. This field is extensible.

**R3/System Name** - 
 When **Connection Type** is set to **Message Server Host** in a load balancing connection, enter the name of the SAP back-end system ID \(SID\). The SAP JCo property is `jco.client.r3name`. If you set **Connection Type** to **Application Server Host**, the JCo property value is set to an empty string. This field is extensible.

**Group Name** - 
  When **Connection Type** is set to **Message Server Host** in a load balancing connection, enter the name of the SAP server group \(group\). The SAP JCo property is `jco.client.group`. This field is extensible.

**Enable Trace?** - 
 If the check box is selected, the connector creates SAP trace logs to debug SAP connector calls and sets the JCo property value. The SAP JCo property is `jco.client.trace` and its property value is 1 when the check box is selected. Otherwise, **Enable Trace?** is clear by default and the JCo property value is null. These JCo property value defaults are not set by Integration.

**Maximum Idle Connections** - 
 Sets the maximum number of idle connections to keep open by the destination. A value of 0 creates no connection pooling and connections are closed after each request. The SAP property is `jco.destination.pool_capacity`. There is no default number in Integration.

**Maximum Active Connections** - 
 Sets the maximum number of active connections that can be created simultaneously for a destination. The SAP property is `jco.destination.peak_limit`. There is no default number in Integration.

**Idle Time**   
 Sets the interval in milliseconds \(ms\) after which connections held by the destination can be closed. The SAP property is `jco.destination.expiration_time`. There is no default number in Integration.

**Additional Connection Settings**   
  \(Optional\) Enter the name of a properties file to configure additional SAP JCo properties to be used by the connection. This field is extensible.

## SAP JCo properties 

The following table matches fields in the Settings tab, Listener Settings tab, and in an SAP listener operation with their corresponding JCo property. The table also notes if a JCo property only applies to an Application Server Host \(ASHOST\) or Message Server Host \(MSHOST\).

|Field|SAP JCo property|
|-----|----------------|
|Server \(ASHOST\)|jco.client.ashost|
|Server \(MSHOST\)|jco.client.mshost|
|User Name|jco.client.user|
|Password|jco.client.passwd|
|Client|jco.client.client|
|Language Code|jco.client.lang|
|SAP System Number|jco.client.sysnr|
|R/3 System Name \(MSHOST\)|jco.client.r3name|
|Group Name \(MSHOST\)|jco.client.group|
|Enable Trace?|jco.client.trace|
|Maximum Idle Connections|jco.destination.pool\_capacity|
|Maximum Active Connections|jco.destination.peak\_limit|
|Idle Time|jco.destination.expiration\_time|
|Gateway Host \(Listener Settings\)|jco.server.gwhost|
|Gateway Service \(Listener Settings\)|jco.server.gwserv|
|IDoc Name \(SAP Listen operation\)|jco.server.repository\_destination|
|Program ID \(SAP Listen operation\)|jco.server.repository\_destination|

You can specify SAP JCo properties using the **Additional Connection Settings** field. This feature requires a properties file containing additional JCo properties you want to specify. Values in the Settings tab can be used with properties set in the file, but values set in the file take precedence.

:::note

All JCo properties are supported, however, the behavior of each property is dependent upon SAP.

:::

Properties files

The JCo properties you specify in a properties file depend on your use case. A properties file can contain as many properties as needed. The properties are recognized as long as they are valid and located in the file name entered in **Additional Connection Settings**. It is best practice to save your properties file in the following format: `<unique_name>_jco.properties`.

The following example shows the contents of a properties file and how it should be formatted:

```
jco.client.ashost=/H/#.###.###.#/H/###.##.##.##/H/xxx####
jco.client.user=username
jco.client.passwd=password
jco.client.client=###
jco.client.lang=EN
jco.client.sysnr=#
jco.client.trace=1
jco.server.gwhost=/H/#.###.###.#/H/###.##.##.##/H/xxx####
jco.server.gwserv=sapgw##
```

:::note

None of the values in the sample are required because they are set in the UI.

:::

## Listener Settings tab 

The Listener Settings tab is organized into four sections: Gateway Options, Transaction Storage Options, Transaction Storage Connection Pooling, and Logging Options.

Gateway Options

In Gateway Options, you define the host and service used by the JCo to connect the gateway service to the SAP system.



**Gateway Host** - 
  Enter the SAP Gateway Host name \(GWHOST name\). Include the SAProuter string if applicable. The SAP JCo property is `jco.server.gwhost`.

**Gateway Service** - 
  Enter the SAP Gateway port name or number. Usually, the entry is sapgwXX or 33XX, where XX is the system number defined in the Settings tab. The SAP JCo property is `jco.server.gwserv`.

**Transaction Storage Options**

In Transaction Storage Options, you define the database that manages the SAP Outbound IDoc processing. For more information about setting up the database, see the SAP Connector topic’s Prerequisites section. In the TID management table that is created during initialization, the following row is used to validate database connections and must remain in the table. If you delete this row, the connector stops until you restart the Atom.

| TID           | PROG_ID       | STATUS      |
|---------------|---------------|-------------|
| EXISTS_CHECK  | EXISTS_CHECK  | DONT_DELETE |





**Database URL** - 
This is an information field that shows connection values.

**Driver Type** - 
Select the type of driver to connect to from the drop-down list or specify the Connection URL directly by selecting Custom and adding the driver\(s\) to the Atom.

**Class Name** \(Custom database type only\)  
Enter the fully-qualified Java class name of the JDBC driver, which you can get from the JDBC vendor's documentation, for example: `sun.jdbc.odbc.JdbcOdbcDriver`.

**User Name** - 
Enter the database user name.

**Password** - 
Enter the database user password.

**Host** - 
Enter the name or IP address of the database server.

**Port** - 
Enter the port on which to connect to the database server. Some common defaults are:
    -   SQL Server: 1433
    -   Oracle: 1521
    -   Sybase: 5000
    -   Derby: 1527
    -   DB2: 50000
    -   MySQL: 3306

**Database Name** - 
Enter the name of your database.

**Additional Options** - 
Enter additional options to be specified in your database URL. The options can be name/value pairs delimited by semicolons, such as:
-   `;instance=DB01`
-   `;domain=<Your Windows Domain Name>` \(when connecting to SQL Server as a Windows user\)

**Note:** When using SQL Server, connecting as a Windows user, and connecting to a named instance, the order of the properties for the JDBC URL is important. For example: `;instance=<value>;domain=<value>`.

**Connection URL** \(Custom database type only\)
Refer to the JDBC vendor's documentation for the connection URL syntax. The syntax may have a pattern and URL like this:
    
-   Example pattern:
        ```
        jdbc:<database type>://<host>:<port>/<database name>;<additional options name/value pairs>
        ```

-   Example URL:
    ```
    jdbc:mysql//localhost:3306/MyDatabase;option1=value;option2=value
    ```

Transaction Storage Connection Pooling

Transaction Storage Connection Pooling is where you specify the minimum and maximum number of database connections in the pool.

  


**Minimum Connections** - 
The minimum number of database connections in the pool.

**Maximum Connections** - 
The maximum number of database connections in the pool. For unlimited connections, set to -1.

You can view the statuses of SAP Connector listener processes deployed to an Atom, Molecule, or Atom Cloud to receive IDocs from SAP. Go to **Manage** \> **Atom Management**. In Runtime, click **Listeners**. In the Listeners panel, click **Restart**.

**Logging Options** - 

Use Logging Options to enable or disable logging functionality available to the Listen operation.

**Enable Low Latency Logging**

When selected, listener processes continue logging when the **Process Mode** is set to **Low Latency** and appear in Process Reporting. **Enable Low Latency Logging** requires that the Process Mode be set to Low Latency in the Process Options dialog. This field is extensible.

:::note

If the **Process Mode** is set to **General**, **Enable Low Latency Logging** does not result in an error or change any functionality. The process will complete as normal without any changes to logging.

:::