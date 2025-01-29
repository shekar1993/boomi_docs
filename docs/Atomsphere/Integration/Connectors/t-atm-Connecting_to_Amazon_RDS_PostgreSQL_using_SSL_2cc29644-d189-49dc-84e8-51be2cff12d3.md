# Connecting to Amazon RDS PostgreSQL using an SSL Certification 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-2cc29644-d189-49dc-84e8-51be2cff12d3"/>
</head>


By connecting to Amazon RDS PostgreSQL using an SSL certification, you can connect to Amazon Web Service's \(AWS\) relational database using SSL.

## About this task
The steps to connect the Database connector to Amazon Web Service’s \(AWS\) relational database using SSL are the same for all supported databases but differ depending on whether you are using an Atom Cloud or Atom.

## Procedure

1.  Connect using an Atom in an Atom Cloud:

    a.  Append to the connection string the parameter `ssl=true`.

    For example: `jdbc:postgresql://<instance_endpoint>:<port_no>/<db_name>?ssl=true`

2.  Connect using a local Atom:

    a.  Put the JDBC driver in the `<installation_directory>/userlib/database` directory. To place the driver in this directory, upload the JAR file into your Integration account library \(**Settings** \> **Account Information and Setup** \> **Account Libraries**\), add that file to a Custom Library component, and deploy the component to the appropriate Atom, Molecule, Atom Cloud, or environment.

    :::note

    Uploaded or imported files pass through a virus scanner first. If the scan detects a virus, you receive an error message, and the scan rejects the file. If an error persists, contact Boomi Support.

    :::

    b.  Download the [root certificate](https://s3.amazonaws.com/rds-downloads/rds-ca-2015-root.pem) from [Amazon Relational Database Service](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html).

    c.  Convert the certificate to DER format using the command `openssl x509 -outform der -in certificate.pem -out certificate.der`

    d.  Import the Amazon RDS certificate into the Java keystore using the command: `keytool -import -alias your-alias -keystore cacerts -file certificate.der`

    e.  Edit the connection URL in the database connector to read: `jdbc:postgresql://<instance_end_point>:<instance_port_no>/<db_name\>?ssl=true`

    The connection now uses the SSL for communication with a PostgreSQL database.

3.  Verify the SSL connection by setting the Java debug system property:

    a.  Go to **Manage** \> **Atom Management** and click the **Custom** tab.

    b.  In the **System Properties** section, click **![](../Images/main-ic-plus-sign-white-in-blue-circle-16_98f7af60-dd5f-4037-90cd-05cc9dfc5502.jpg) Add a Property**.

    c.  In the **Property** field, type `-Djavax.net.debug=all`.

    d.  Click **Save**.

    Because changes to these properties do not take effect until the Atom, Molecule, or private Atom Cloud is restarted, you are prompted to restart. You have the option to restart now or restart later.

    You can now monitor the SSL communication and the SSL handshake being performed when you run the process. If you do not have the right certificate, this error is generated:

    `[com.sun.net.ssl.internal.ssl.SSLSocketImpl handleException] ASyncMPollExecutor-thread-1, handling exception: javax.net.ssl.SSLHandshakeException: sun.security.validator.ValidatorException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target`

Alternatively, you can create a process where the operation gets the value of the `ssl_is_used` field.

If this value is returned t\(true\), the connection is SSL. If you do not put SSL parameters in the connection URL, the connection may be successful but is not over SSL.


## Next Steps
For more information about PostgreSQL on Amazon RDS, see the [Amazon Web Services User Guide](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html).