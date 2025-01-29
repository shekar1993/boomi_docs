# Amazon S3 connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-e69ef1f3-37dd-420c-9c7a-af470c969bc7"/>
</head>


The Amazon S3 connector makes it easy to work with Amazon Simple Storage Service by simplifying the interaction and adding convenience.

## Connector configuration 

:::info Important

As of the February 2019 release, the Amazon S3 connector is no longer available for use by customers who have not previously used it. If you utilized the Amazon S3 connector prior to this date, you can continue to do so. However, Boomi encourages you to take advantage of the functionality provided by the Amazon S3 REST connector.

:::

The Amazon S3 connector uses AWS Identity and Access Management \(AWS IAM\) to authenticate users to Amazon. Amazon advises to use separate AWS Identity and Access Management \(IAM\) accounts for each service. For example, create separate IAM accounts for uploading data to Amazon S3 and another account to get data.

Features for this connector include:

-   Dynamic properties that are backward compatible with existing dynamic document properties.
-   Three tracked properties.
-   Enhanced process reporting that supports tracked properties.

To configure a connector to communicate with Amazon, set up two components:

-   Amazon S3 connection
-   Amazon S3 operation

This approach creates reusable components that contain connection settings \(such as URL, User, Password, Account\) and operation settings \(such as Object, Action, data definitions\). After building your connection and operation, set up your Amazon S3 connector within a process. When you define the process correctly, can map to and from virtually any system using the Amazon S3 connector to retrieve data from or send data to Amazon.

## Prerequisites 

To implement a connection to your Amazon S3 account from , have the following:

-   Your AWS access key and AWS secret key.
-   The appropriate access rights to the Amazon S3 resource. You can verify your rights in Amazon S3 by selecting a bucket, folder, or file and clicking **Properties** \> **Permissions** or by performing actions like creating or deleting a bucket, adding and uploading files, and so on.

## Tracked properties 

This connector has the following tracked properties that you can set or reference in various step parameters:

**Bucket** - 
 The name of the bucket owned by the AWS account in which you store objects.

**File Key** - 
 The key name that identifies the object in the bucket.

**Content-Type** - 
Indicates the format of the content, such as string \(integer\) or enumeration \(value\).