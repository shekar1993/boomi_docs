# Creating an ODBC database connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-0235b877-e19f-457c-911e-4296b8c51255"/>
</head>


By creating an ODBC database connection, you can connect to a variety of ODBC-compliant databases.

## About this task

Be aware that the JDBC/ODBC bridge included in previous versions of Java was removed from Java 8 and subsequent versions. [Oracle recommends](https://docs.oracle.com/javase/7/docs/technotes/guides/jdbc/bridge.html) using JDBC drivers provided by your database vendor. Alternatively, you can use a third-party JDBC/ODBC bridge and install it like any custom JDBC driver. Verify that the Atom is running as a service, and has user rights to the ODBC connection. You can then define the database connection. For more information about support for Java 11, see the Boomiverse article [Support for Java 11](https://community.boomi.com/s/article/Support-for-Java-11).

## Procedure

1.  In Windows, go to **Control Panel** \> **Administrative Tools** \> **Services**.

    a.  Right-click the Atom and select **Properties**.

    b.  Click the **Log On** tab.

    c.  Select **This account** and enter the required information.

2.  In Integration, create a **Database connection**.

3.  On the **Connection** tab enter the following information:

    a.  **DB URL** -  jdbc:odbc:ODBCConnectionName

    b.  **Database Type** -  Custom

    c.  **User** -  Boomi

    d.  **Password** -  xxxx

    e.  **Class Name** -  sun.jdbc.odbc.JdbcOdbcDriver

    f.  **Connection URL** -  jdbc:odbc:ODBCConnectionName

4.  Click **Save and Close**.