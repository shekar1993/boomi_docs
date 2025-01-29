# Amazon EventBridge connection

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-ada28c2b-58da-4903-9d05-3673a407af7d"/>
</head>


The Amazon EventBridge connection represents a single Amazon EventBridge account including login credentials.

If you have multiple accounts, use a separate connection for each and configure the URL accordingly. Pair a single connection with different Amazon EventBridge operations to perform a unique action against an Amazon EventBridge account.

## Connection tab

The Amazon EventBridge connection uses Amazon access keys, consisting of an access key ID and a secret access key. Create these keys using the AWS Management Console and access them from your stored secure location.



**Amazon AWS access key**: Refers to the string field type access keys that are long-term credentials for an IAM user or the AWS account root user. You can use access keys to sign programmatic requests to the AWS CLI or AWS API \(directly or using the AWS SDK\). Enter or paste your Amazon AWS access key.

    
:::note

Although you can use your root user credentials, it is recommended to use an AWS Identity and Access Management \(IAM\) account.

:::

**Amazon AWS secret key**: Refers to the string field type secret access keys that are similar to your password. For your security, AWS does not reveal your password. If you forget it, you must set a new one. Click on **Click to Set**, then type or paste your Amazon AWS secret key.

**AWS Region**: Refers to the string field type AWS resources that are hosted in multiple location world-wide. Each AWS Region is separate geographical area. Select the name of the AWS region in which your account resides.

**Custom AWS Region**: Refers to the string field type that you can use to send custom region, in case the required AWS region is not available in the drop down. Enter the custom name of the AWS region in which your account resides, for example, `us-east-2`. The connection uses the custom region, instead of the **AWS Region**.

    
:::note

This field is mandatory if the value of the **AWS Region** drop-down list is selected as Custom Region. If both the **AWS Region** and **Custom AWS Region** fields are provided with region values, the system will take the value from the **AWS Region** field irrespective of the value provided in the **Custom AWS Region** field. The system will use any custom value that is specified in the text field, only if Custom Region is selected in the drop-down list.

:::

**AWS Account ID**: Refers to the string field type. Enter the AWS account ID which is part of your User ARN — required for the Create operation.