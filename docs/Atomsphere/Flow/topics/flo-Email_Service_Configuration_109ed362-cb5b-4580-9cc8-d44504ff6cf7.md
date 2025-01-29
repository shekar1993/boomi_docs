# Email (Deprecated) connector configuration values

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-109ed362-cb5b-4580-9cc8-d44504ff6cf7"/>
</head>

:::warning

This connector is now in Deprecated status. It is no longer available for new users and is not actively maintained. We will provide a minimum six-month notice before its retirement. We recommend upgrading to the newer supported version of this connector.

:::

The following configuration values can be defined during installation of the .

## Base configuration values

The base configuration values define how the connects to your email account and provider.

|Name|Type|Required or optional?|Description|
|----|----|---------------------|-----------|
|Host|String|Required |Specify the SMTP server name of your email service provider. -   For example, the hostname for a Gmail account is typically smtp.gmail.com, and for a Microsoft Exchange/Office 365 account is typically smtp.office365.com.|
|Port|Number|Required |Specify the port that your email service provider mail server uses to communicate with the .-   587 is typically set as the default SMTP port if tls transport encryption is specified, to ensure that email is submitted securely and follows standard email security guidelines.<br />   465 is typically set as the default SMTP port if ssl transport encryption is specified, to ensure that email is submitted securely and follows standard email security guidelines.|
|Transport|String| Required|Specify the security protocol to use for securing email transmissions with the . The following values are supported:-   plain: Transmissions will be sent in plain text; no encryption is applied.<br />   tls: Transmissions will use Transport Layer Security \(TLS\) protocol encryption to ensure that email is submitted securely and follows standard email security guidelines. <br />   ssl: Transmissions will use Secure Sockets Layer \(SSL\) protocol encryption to ensure that email is submitted securely and follows standard email security guidelines.|
|Password|Password| Optional|Specify the password for the account if your email service provider SMTP server requires username/password authentication. <br />If you are using a Gmail account, this will need to be a Google app password. See [Configuring Gmail with the Email(Legacy) Connector](flo-Email_Service_Gmail_a3fe1ab9-0cf7-4699-91cd-71d9d54b61bf.md).|
|Username|String|Optional |Specify the username \(typically an email address\) if your email service provider SMTP server requires username/password authentication.-   For example, username@example.com|

## Attachment configuration values

Attachment configuration values are optionally provided for defining alternative attachments storage.

A file upload component can be used to upload files to the and send them as attachments. This uses the default temporary storage provided by the . See [Sending email attachments using the Email connector](flo-Email_Service_Attachments_cfd0438a-8a35-40d8-9c0b-c91a06c4c36b.md).

However, if a file upload component is used to upload files to your own Amazon S3 bucket storage instead of the , additional configuration values are required.

The values required depend on what is configured in the Attachments: Source value:

-   If no value is configured for Attachments: Source, the temporary storage is used for file attachments. No additional attachment values need to be configured.

-   If s3 is configured for Attachments: Source to indicate that an Amazon S3 bucket will be used for file attachment storage, the following additional attachment values are required:

    -   Attachments: S3 Access Key

    -   Attachments: S3 Bucket

    -   Attachments: S3 Region

    -   Attachments: S3 Secret Key

    The access key details are required for the IAM user account used to authorize access to the S3 bucket. Access keys consist of two parts: an access key ID and a secret access key.

    See the AWS documentation [Managing access keys for IAM users](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) for details on how to create and manage access keys.

-   If box is configured for Attachments: Source to indicate that Box will be used for file attachment storage, the following additional attachment values are required:

    -   Attachments: Box Enterprise ID


|Name|Type|Required or optional?|Description|
|----|----|---------------------|-----------|
|Attachments: Source|String|Optional |Specify the type of storage location to use for the attachment storage. If no value is configured, the temporary Email storage is used for file attachments. The following values are supported: <br />   s3: An Amazon S3 bucket. <br />   box: A Box storage account|
|Attachments: Box Enterprise ID|String| Optional|Specify the full Box Enterprise ID for your Box storage account.|
|Attachments: S3 Access Key|String|Optional |Specify the access key for the AWS IAM User account used to authorize access to the S3 bucket, copied when you create the access key in the AWS Management Console.|
|Attachments: S3 Bucket|String|Optional |Specify the Name of the Amazon S3 bucket.|
|Attachments: S3 Region|String| Optional|Specify the AWS Region for the Amazon S3 bucket. <br />   For example, eu-west-3|
|Attachments: S3 Secret Key|Password|Optional |Specify the secret key for the AWS IAM User account used to authorize access to the S3 bucket, copied when you create the access key in the AWS Management Console.|