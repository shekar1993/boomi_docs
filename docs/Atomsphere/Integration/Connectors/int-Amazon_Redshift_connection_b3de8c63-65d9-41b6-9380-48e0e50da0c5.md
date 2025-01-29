# Amazon Redshift (Tech Preview) connection

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-b3de8c63-65d9-41b6-9380-48e0e50da0c5"/>
</head>


Amazon Redshift Connector enables you to connect to an Amazon Redshift database cluster setup via Amazon Redshift JDBC driver.

The Amazon Redshift connection represents a single account including login credentials. If you have multiple systems, you need a separate connection for each.



## Connection tab

 

**Redshift JDBC URL\***   
Provide the Amazon Redshift JDBC URL to connect to the Redshift cluster. JDBC URL can be seen on your Amazon AWS Redshift Cluster – Configuration page.

**Username\***   
Enter the username for AWS- Amazon Redshift database user account.

**Password\***   
Click on **Click to Set** and then type your password for the database user account.

**Schema Name \(Optional\)**   
Enter the schema name for the database, if available. Each schema in a database contains tables and other kinds of named database objects. You can use schemas to group the objects under a common name. By default, a database has a single schema named Public.

**AWS Access Key**    
Type or paste the access key ID of your AWS account. Mandatory for Create and Upsert operation for accessing the Amazon S3 bucket.

**AWS Secret Key**   
Click on **Click to Set** and then type or paste your Amazon AWS secret key. Mandatory for Create and Upsert operation only.

**AWS Region**   
Select the name of the AWS region in which your bucket resides. AWS region refers to a physical location around the world where we cluster data centers. The default region is selected as `N.Virginia us-east-1`.

**Test Connection**   
Select the required Amazon resource for which you want to check the connection.

  -   **Redshift** – Select to test the connection to Redshift database only.
  -   **S3** – Select to test the connection to the Amazon S3 bucket.
  -   **Both** – Select to test the connection to both Redshift database and Amazon S3 bucket.

## Test Connection
You can test your connection settings before you use or save the connection in a process. The Test Connection ensures that your specified settings are correct, valid, and accessible. If the test connection is successful, you can save the connection. Otherwise, review and correct any incorrect settings, then test again.

:::info Attention

You can only run the **Test Connection** against containers associated with your account (local Atoms, Molecules, and Atom Clouds).

:::