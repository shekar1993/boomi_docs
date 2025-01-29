# AWS Service Automation connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-153884d7-0bdc-4ca4-a568-b749d7d4fd7a"/>
</head>


The AWS Service Automation connection represents and contains all of the information that is needed to connect and log into a single AWS account. If the AWS user has access to other "linked" accounts they too can be automated.

## Connection tab 

The AWS Service Automation connection uses:

-   Amazon access keys, which consist of an access key ID and a secret access key
-   Amazon Web Services \(AWS\) Region
-   License

Create the access keys using the AWS Management Console as the AWS account root user and access them from your stored secure location. When you create an access key, AWS allows you to view and download your secret key.



**AWS Access Key** - :   Enter the access key for your AWS account. Your access key provides access to the resources in your account\(s\). You manage access keys for your AWS account using the AWS Management Console as the AWS account root user.

**AWS Secret Key** - :   Click `<Encrypted>` and then enter the secret access key for your AWS account. Your secret key provides access to the resources in your account\(s\) based on the ACLs managed inside AWS IAM. When you create an access key, AWS allows you to view and download your secret key.

**AWS Region** - :   Select the name of the AWS region in which your bucket resides. This is a default value which will apply to all the operations and can be overridden using a document property.

**License \(optional\)** - :   All the features of the connector can be used without using this field \(i.e. by leaving it blank\), however some throttling will be applied to limit the command rate. Use this field if you want to remove this limitation. If you are interested in purchasing the license visit **https://www.mindmercatis.com/boomiconnectors**

## Common issues 

-   Unauthorized error when sending AWS commands — Your AWS user might not be allowed API access to the selected AWS account. This might be the case with some AWS users who have restricted console-only access to some services. Verify this with the administrator of your AWS account.
-   Using endpoints other than AWS — Your AWS user might not be allowed API access to the selected AWS account. This might be the case with some AWS users who have restricted console-only access to some services. Verify this with the administrator of your AWS account. Currently, there are other cloud providers offering API compatibility with some of the AWS services \(e.g: OpenStack and Oracle\). At the moment, this connector does not support calling those endpoints.