# Identity provider setup for custom authentication

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-8fccd475-8ec7-492c-9357-871b8e5b2044"/>
</head>

Using a custom authentication type for web service authentication on an Atom or Molecule requires some setup using the JAAS login module.

Here are some JAAS login modules that you may want to use to perform authentication.

-   The [LDAPLoginModule](http://wiki.eclipse.org/Jetty/Tutorial/JAAS#LdapLoginModule), which can be used to specify credentials against an LDAP server.

    :::note
    
    Upgrading your Atoms to Java 11 may adversely affect the Atom operation if your organization uses a custom authentication type for web service authentication on an Atom or Molecule with an LDAP server. This is due to compatibility issues between the jetty-plus–6.1.26.jar module and Java 11. As a result, has made available a custom module, jetty-plus-6.1.26.boomi1.jar, that is compatible with older and newer Java versions. To obtain the custom module and instructions for updating Atoms to use it, contact Support. For more information, see the Boomiverse article [LDAP Authentication Issue with Java 11](https://community.boomi.com/s/article/LDAP-Authentication-Issue-with-Java-11).

    :::

-   The [JDBCLoginModule](http://wiki.eclipse.org/Jetty/Tutorial/JAAS#JDBCLoginModule), which can be used to specify credentials using a database.

-   The [PropertyFileLoginModule](http://wiki.eclipse.org/Jetty/Tutorial/JAAS#PropertyFileLoginModule), which can be used to specify credentials using a simple properties file.

Using a JAAS login module for web service authentication on an Atom or Molecule requires some setup.

-   You must have a consistent external repository in which you store user names and passwords. This can be a file system, database or server.
-   You can use any JAAS login module to perform authentication.

-   The login module name and options that you need for each external identity provider. Some of these login modules have pre-requisites and/or require additional files or setup.

-   The custom .jar files for external identity providers must be placed in the Atom or Molecule’s userlib/http-auth directory. If this directory and subdirectory do not exist, you must create them. Putting the custom .jar files in this location prevents classloader conflicts with connector .jar files.

-   If you use one of the login modules above you must obtain the jetty-plus–6.1.26.jar file and put it in the userlib/http-auth directory.

-   If you are using the JDBCLoginModule, you must make the appropriate JDBC driver classes available to the Atom or Molecule by putting them in the userlib/http-auth directory.

-   After adding .jar files, restart the Atom or Molecule.

-   After you complete the setup on the Shared Web Server panel, the Login Module Class Name is stored in the Atom or Molecule’s container.properties file. If you are using a Molecule, all nodes in the Molecule must have access to this file.

-   If you use the PropertyFileLoginModule for authentication, caching is not supported. Therefore if you change authentication information you must restart the Atom or Molecule in order to reset the cache. If you use the LDAPLoginModule or JDBCLoginModule and you change authentication information, you do not need to restart the Atom or Molecule.

## Example using the JDBC login module

The following example shows how to configure to use the JDBC login module for authentication on your Atom or Molecule’s web service server. It is being used with MySQL.

-   Read this [tutorial](http://wiki.eclipse.org/Jetty/Tutorial/JAAS#JDBCLoginModule) for the JDBC login module. Complete any of the login module’s pre-requisites.
-   The MySQL database storing the authentication and role information must contain these two tables and their columns, named as follows:

    -   The `userTable` table, containing:
        -   The `credentialField` column
        -   The `userField` column

        -   Other columns as needed.

    -   The `userRoleTable` table, containing:

        -   The `userRoleRoleField` column
        -   The `userRoleUserField` column

        -   Other columns as needed.

-   User roles will be passed into the process execution as additional “external user name” \(`inextuser_n`\) dynamic process properties.

-   Create the userlib/http-auth directory in the Atom or Molecule’s installation directory. Put the JDBC login module’s custom .jar files and the jetty-plus–6.1.26.jar file in this directory.

-   After adding .jar files, restart the Atom or Molecule.

-   Open the Atom or Molecule’s Shared Web Server panel.

-   On the General tab under **Basic Settings**, set the **API Type** to Advanced or Intermediate.

-   In the **Authentication Settings** section:

    -   Set the **Authentication Type** to Custom.

    -   Type a **Login Module Class Name**. For the JDBC login module, this is `org.mortbay.jetty.plus.jaas.spi.JDBCLoginModule`.

    -   \(Optional\) Select **Cache Authorization Credentials**.

    -   Under **Login Module Options**, add a key-value pair for each option used by the JDBC login module. For each option, click the **Add Option** icon and add the key and value. The table must contain the keys and values below.

        :::note
        
        If you must encrypt a key-value pair that contains a private credential, enter the key, select **Encrypt**, then click **Click to Set**, enter the value, and click **OK**.

        :::

        Do not change the Authentication Type setting to something other than Custom. If you do, the keys and values that you entered will be deleted.

        |Key|Value|
        |---|-----|
        |dbUrl|`jdbc:mysql://<IP_address>/`|
        |userRoleRoleField|Role|
        |userTable|myusers|
        |credentialField|Password|
        |userField|Username|
        |dbPassword|\[Encrypted\]|
        |userRoleUserField|Username|
        |dbUserName|Databaseuser|
        |dbDriver|com.mysql.jdbc.Driver|
        |userRoleTable|myuserroles|
        |debug \(optional\)|true|

-   On the User Management tab, add each internal web service user name. For each internal web service user name, add the corresponding JDBC user name. Make other changes as needed to the settings on the User Management tab.

-   Click **OK** to save your changes.
