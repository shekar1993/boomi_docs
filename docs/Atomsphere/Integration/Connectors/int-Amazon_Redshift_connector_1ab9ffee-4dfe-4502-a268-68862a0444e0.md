

# Amazon Redshift (Tech Preview) connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-1ab9ffee-4dfe-4502-a268-68862a0444e0"/>
</head>


Amazon Redshift Connector enables you to connect to an Amazon Redshift database cluster setup via Amazon Redshift JDBC driver.

Amazon Redshift Connector enables you to connect to an Amazon Redshift database cluster setup via Amazon Redshift JDBC driver. Its flexible design allows smooth transfer of huge volume of data objects from/to the Amazon Redshift cluster. Through this connector, you can use a process to Insert, Update, Upsert, Unload, and Delete the data objects.

:::info Important

The Amazon Redshift connector is only supported on Atom/Molecule.

:::

:::note

- This is an open source connector and you can access the code in the [Amazon Redshift](https://bitbucket.org/officialboomi/amazon-redshift-data-openapi/src/master) connector repository.

- To learn about support levels of Tech Preview connectors, see the topic [Feature Release Stages](../../Platform/atm-Feature_release_stages_00d83b66-e5db-4038-8398-fcaead4be12d.md).

:::


## Amazon Simple Storage Service \(S3\) and Data Encryption

The connector leverages the Amazon Simple Storage Service \(S3\) during the Insert and Upsert operation for temporary storage and retrieval of huge volume of data objects. The connector also offers the ability to utilize Amazon S3 data encryption options for protecting the sensitive data stored on disks in the Amazon S3 data centers. Depending on your choice, you can opt any one of the available encryption options listed below:Enter additional information for the connector.

-   Server-Side Encryption with Amazon S3-Managed Keys \(SSE-S3\) – Each object is encrypted with a unique key. The key is then encrypted with a master key that it regularly rotates. This method uses 256-bit Advanced Encryption Standard \(AES-256\).
-   Server-Side Encryption with AWS Key Management Service managed keys \(SSE-KMS\) – It is similar to the SSE-S3 encryption but offers additional data protection by using the Customer Master Keys \(CMKs\) to encrypt your Amazon S3 objects. CMKs can be created and managed using AWS Key Management Service \(AWS KMS\) - a key management system scaled for the cloud. AWS KMS encrypts only the object data and not the object’s metadata. For more information, see [Protecting data using server-side encryption](https://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html).
-   Client-Side Encryption using a Client-Side Symmetric Master Key – In this option, you use a master key that is stored within your application for client-side data encryption. When you provide a client-side master key to the Amazon S3 encryption client, the S3 client uses the master key only to encrypt the data encryption key that it generates randomly. The S3 client uploads the encrypted data key and its material description as part of the object’s metadata. The S3 client uses the material description to determine which client-side master key to use for decryption. In this case, you manage the encryption process, the encryption keys, and related tools. For more information, see [Protecting data using client-side encryption](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingClientSideEncryption.html).

## Connector configuration

To configure the connector to communicate with an Amazon Redshift cluster, set up the following two components:

-   Amazon Redshift connection - Represents your Amazon Redshift cluster and/or AWS S3 login credentials.
-   Amazon Redshift operation - Represents an action against a specific object i.e. Redshift data object. You will create one or more operations - one for each type of interaction required by your Integration scenario.

This design provides reusable components which contain connection and operation settings. After building the connection and operation, set up your connector within a process. When the process is defined properly, can map to and from virtually any system using the Amazon Redshift Connector to transfer the data objects.

## Supported editions

Amazon Redshift cluster version 1.0.12103 and above \(integrated via Redshift JDBC Driver version 1.2.10.1009\).

## Prerequisites

To use the Amazon Redshift Connector, you will require the following:

-   Amazon Web Services \(AWS\) – Redshift cluster user account details like username and password.
-   AWS access key which includes access key ID and secret key details for secured Amazon S3 connection. You can get the keys from the AWS Management Console \(My Security Credentials page\). If you don’t have an access key created already, create these keys in the AWS Management Console. For more information, see [Understanding and getting your AWS credentials](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html).
-   Appropriate access rights to the Amazon S3 resource. You can verify your rights in Amazon S3 by selecting a bucket, folder, or file and clicking Properties \> Permissions or by performing actions like creating or deleting a bucket, adding and uploading files, etc.
-   Redshift JDBC driver version 1.2.10.1009 deployed to the appropriate Atom environment as a Custom Library Component. To do this,

    1.  Download the Redshift JDBC driver JAR version 1.2.10.1009 from the [Maven Repository](https://mvnrepository.com/artifact/com.amazon.redshift/redshift-jdbc42/1.2.1.1001).
    2.  Upload the JAR file into to an account by using the Manage Account Libraries page \(Settings - Account Libraries\). For more information, see the topic [Account library management](/docs/Atomsphere/Platform/r-atm-Account_Library_Management_edc37905-b4fe-4cae-8001-b62221adb872.md).
    3.  Create a Custom Library component that referenced that file and set the **Custom Library Type** to type **Connector** and the **Connector Type** to **Redshift**. Then, deploy the Custom Library to the appropriate Atom or Molecule environment\(s\).
    
    For more information, see the topic [Working with custom libraries](../Process%20building/c-atm-Working_with_custom_libraries_96f10864-334e-4eba-ac3f-f52b4e65fdb2.md).



## Tracked properties

This connector has no predefined tracked properties. See the topic [Adding tracked fields to a connector operation](../Process%20building/t-atm-Adding_tracked_fields_to_a_connector_operation_f71821dd-95ee-4ebd-bfc9-3333262f56f6.md) to learn how to add a custom tracked field.