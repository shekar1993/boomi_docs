# Amazon S3 connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-1b02c6c5-02a2-4088-b988-f63f8bc2ed08"/>
</head>


The Amazon S3 connection represents a single Amazon S3 account, including login credentials.

If you have multiple accounts or buckets, use a separate connection for each. Pair a single connection with different Amazon S3 operations to perform a unique action against an Amazon S3 account.

## Connection tab 
The Amazon S3 connection uses Amazon access keys, which consist of an access key ID and a secret access key. Create these keys using the AWS Management Console and access them from your stored secure location.


**Amazon AWS access key** - 
 Type or paste your Amazon AWS access key.

**Amazon AWS secret key** - 
 Click on **Click to Set** and then type or paste your Amazon AWS secret key.

**Multipart Threshold** - 
 Enter a number in megabytes to set the file size limit at which to change from uploading an object in a single operation to multipart uploads. The default threshold is 100 MB, the file size that Amazon recommends to consider using multipart uploads.

**AWS Region** - 
 Select the name of the AWS region in which your bucket resides.

**Amazon S3 Bucket** - 
 Enter the name of the bucket in which your data resides.

**HTTP Proxy User**   
 The name of the user who can log in to the proxy server, such as johndoe@your-company.com.

**HTTP Proxy Password** - 
The password for the Proxy User, such as password-to-proxy-host.

## Test Connection

You can test your connection settings before you use or save the connection in a process. The Test Connection ensures that your specified settings are correct, valid, and accessible. If the test connection is successful, you can save the connection. Otherwise, review and correct any incorrect settings, then test again.

:::info Attention

You can only run the Test Connection against containers associated with your account (local Atoms, Molecules, and Atom Clouds).

:::

## Troubleshooting 

When testing the Amazon S3 connection, if the Amazon AWS access key and Amazon AWS secret key are correct, but the Amazon S3 Bucket is either invalid or you do not have access permissions to the bucket, the test connection is successful. The Test Connection does not validate the Amazon S3 Bucket field. In this situation, if you use the Amazon S3 connection in a process, the process fails.