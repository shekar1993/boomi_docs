# Amazon S3 REST connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-70613024-c8a2-4413-92a2-5c119a0a4cd1"/>
</head>


Amazon Simple Storage Service \(S3\) allows you to simply and securely store and retrieve any amount of data from anywhere on the Web. Using the Amazon S3 REST connector, you can use a process to upload, store, retrieve, filter, and delete object data from an Amazon S3 bucket.

## Benefits 

The benefits to using the Amazon S3 REST connector in a process include the following:

-   Improved security to protect your data using server-side encryption with customer-provided encryption keys \(SSE-C\).
-   The connection automatically retrieves the AWS region in which your bucket resides. You can manually specify the AWS region either in the operation or at the document level to circumvent the automatically retrieved region.
-   The connection is not directly tied to a bucket, giving you more flexibility with how you store and manage your data.

## Connector configuration 

To configure the connector to communicate with Amazon S3, set up two components:

-   Amazon S3 REST connection
-   Amazon S3 REST operation

This design provides reusable components that contain connection settings and operation settings. After building your connection and operation, set up your connector within a process. When you define the process correctly, can map to and from virtually any system using the Amazon S3 REST connector to upload, store, retrieve, and delete data from Amazon S3.

## Prerequisites 

To use the connector, implement a connection to your AWS account from , and help ensure that browsing and the operations are successful, have the following information:

-   Your AWS access key and secret key. You use the AWS Management Console as the AWS account root user to manage access keys. When you create an access key, AWS allows you to view and download your secret key.
-   The appropriate access rights and permissions to the Amazon S3 objects. You can set and verify your rights in Amazon S3, and by performing actions like creating or deleting a bucket, adding and uploading files, and so on.
    -   To ensure that the Test Connection and browsing are successful, verify that you have **s3:ListBucket** and **s3:ListAllMyBuckets** permissions.
    -   To list objects inside a bucket, verify that you have the **s3:ListBucket** permissions.
    -   To upload and download files, verify that you have read/write permissions.
    -   To filter objects, verify that you have **s3:GetObject** permissions for the object you are filtering.
    -   To delete objects, verify that you have **s3:DeleteObject** permissions.

## Bucket naming limitations 

The Amazon S3 REST connector is subject to the same restrictions and limitations for bucket naming as defined by Amazon. Be aware of Amazon's naming conventions for S3 buckets in all AWS regions and name your buckets appropriately.

## Tracked properties 
This connector has the following tracked properties that you can set or reference in various step parameters:



**Bucket** - 
 \(All operations\) The name of the bucket owned by the AWS account in which you store objects. This property is valid for all operations when you select **Dynamic Bucket** as the object type when browsing.

**Folder** - 
 \(Upsert\) The folder in the bucket where the object is uploaded.

**File Name** - 
 \(Upsert\) The name of the object to upload.

**File Key**    
 \(Get, Upsert\) The key name identifying the full path \(folder and file name\) to the object in the bucket.

**Content-type**    
 \(Get, Upsert\) The format of the content, such as `text` or `plain`, `application` and `octet-stream`, `string` \(integer\), or `enumeration` \(value\).

**Version ID**      
 \(Get\) The version ID of the bucket in which you store objects, if you enable versioning for the bucket.

**Bucket Region** - 
\(All operations except Delete\) The AWS Region in which your account resides. If you specify a region using this property and select **Dynamic Bucket** as the object type when browsing, it uses this property and ignores the region selected in the operation. If you specify a region using this property and select a specific bucket when browsing, it uses the region selected in the operation and ignores this property.

