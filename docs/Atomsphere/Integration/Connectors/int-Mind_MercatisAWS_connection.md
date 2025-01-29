# Mind-Mercatis AWS - Partner connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-586dd1cb-7fdf-4da2-8e9e-a9095214b4a3"/>
</head>

The Mind-Mercatis AWS – Partner connection represents and contains all the information required to connect and log into a single AWS account. If the AWS user has access to other "linked" accounts, they too can be automated (see below).

## Connection tab
The Mind-Mercatis AWS – Partner connection uses:
* Amazon AWS Access Key
* Amazon AWS Secret Key
* Amazon AWS Region
* Service Grouping
* Mind-Mercatis' License

Access Keys can be created on AWS using the AWS Management Console as the AWS account root user.

**Amazon AWS Access Key** - 
Enter the AWS account Access Key. The Access Key provides access to the resources in the account(s). Access Keys are managed using the AWS Management Console as the AWS account root user.

**Amazon AWS Secret Key** - 
Enter the AWS account Secret Key. The Secret Key provides access to the resources in the AWS account(s) based on the ACLs managed inside AWS IAM. When an Access Key is created, AWS allows to view and download the Secret Key.

**Amazon AWS Region** - 
Select the name of the AWS Region in which the bucket resides. This is a default value which will apply to all the operations and can be overridden using a Document Property.

**Service Grouping** - 
AWS Services have been grouped based on technical and logical capabilities.

**Mind-Mercatis' License** (optional) - 

:::note Info

The connector has been purposely designed to provide two different performance levels: standard performance and high performance.

To celebrate the connector’s release, Mind-Mercatis' License will not be required to unlock the high-performance mode until February 28, 2025.

:::

All the features of the connector can be used without using this field (i.e. by leaving it blank). However, speed restrictions will be applied: the command rate to AWS API calls is limited to one every 10 seconds (standard mode). The first request is always executed without delay.

Fill this field with a valid Mind-Mercatis' License if you want to remove the command rate restriction entirely (high performance mode). If you are interested in purchasing the license please visit https://www.mindmercatis.com/booxmiconnectors.

## Common Issues
Unauthorized error when sending AWS commands.
The AWS user might not be allowed API access to the selected AWS account. This might be the case with some AWS users who have restricted console-only access to some services. Please verify this with your AWS account Administrator.

## Other issues
Refer to the [FAQ](https://mindmercatis.atlassian.net/wiki/spaces/AABC/pages/1103691779/FAQ) for a comprehensive list of issues and solutions.

## Using endpoints other than AWS
Currently, there are other cloud providers offering API compatibility with some of the AWS services (eg. OpenStack and Oracle). Currently, this connector does NOT support calling those endpoints. Please get in contact with the partner maintaining the connector to get a quote for personalized extensions: https://www.mindmercatis.com/boomiconnectors