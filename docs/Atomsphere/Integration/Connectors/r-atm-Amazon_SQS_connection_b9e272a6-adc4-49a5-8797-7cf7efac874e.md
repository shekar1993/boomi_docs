import TestConnection from './_TestCon.md'

# Amazon SQS connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-b9e272a6-adc4-49a5-8797-7cf7efac874e"/>
</head>


The Amazon SQS connection represents a single Amazon SQS account including login credentials.

If you have multiple accounts, use a separate connection for each. Pair a single connection with different Amazon SQS operations to perform a unique action against an Amazon SQS account.

## Connection tab 

The Amazon SQS connection can be authenticated in two ways. You can create Amazon access keys using the AWS Management Console consisting of an access key ID and a secret access key. These keys are accessible from your stored secure location. The Amazon SQS connection also supports authentication via AWS IAM Roles Anywhere.

:::tip

AWS IAM Roles Anywhere relies on public key infrastructure (PKI) to establish trust between an AWS account and a certificate
authority (CA), both belonging to the customer. The CA issues X509 certificates which can be used by the SQS Connector to get temporary credentials to operate on SQS entities. The temporary credentials are valid for a predefined bounded period of time configured by the user and cached to be reused across connectors using the same connection component and consecutive process executions. The connector will handle the renewal after the credentials expire.

:::

#### Fields when authenticating with access keys

**Authentication Type** - 
Select the authentication type to connect to the service, either via your access keys or AWS IAM Roles Anywhere. When using access keys, provide both an access key ID and a secret access key. When using AWS IAM Roles Anywhere, provide trusted X.509 certificates and the service configuration data required to validate the trust and obtain temporary security credentials. Access keys is the default authentication method.

**Amazon AWS access key** -
Enter the access key for your AWS account. Your access key provides unrestricted access to all of the resources in your account, including billing information. You can manage access keys for your AWS account using the AWS Management Console as the AWS account root user.

**Amazon AWS secret key** -
Enter the secret access key for your AWS account. Your secret key provides unrestricted access to all of the resources in your account, including billing information. When you create an access key, AWS allows you to view and download your secret key.

**AWS SQS Region** -
 An AWS Region is a geographic location with a collection of availability zones that are mapped to physical data centers in that region. Every region is a separate geographic location, and is physically isolated from and independent of every other region in terms of location, power, etc. Select the name of the AWS Region in which your account resides. This field extension will not work if the queue name is directly imported in the operation. For more information, see your AWS documentation and search for Regions and Availability Zones.

**Custom AWS SQS Region** -
Type the custom name of the AWS region in which your account resides. For example,us-east-2. The connection will use the custom region instead of a region from the **AWS Region** drop-down box.

### Fields when authenticating with AWS IAM Roles Anywhere

**Authentication Type** - 
Select the authentication type to connect to the service, either via your access keys or AWS IAM Roles Anywhere. When using access keys, provide both an access key ID and a secret access key. When using AWS IAM Roles Anywhere, provide trusted X.509 certificates and the service configuration data required to validate the trust and obtain temporary security credentials. Access keys is the default authentication method.

**Profile ARN** - Enter the Amazon Resource Name (ARN) of the profile.

**Role ARN** - Enter the Amazon Resource Name (ARN) of the role to assume.

**Trust Anchor ARN** - Enter the Amazon Resource Name (ARN) of the trust anchor.

**AWS Roles Anywhere Region** - Select the AWS Region associated to your AWS IAM Roles Anywhere service. If your region is not included in the dropdown options, you can enter it in **AWS Roles Anywhere Custom Region**. The default value is 'EU-CENTRAL-1'.

**AWS Roles Anywhere Custom Region** - Enter the AWS region in which your AWS IAM Roles Anywhere service resides. You must enter your values in all lowercase using dashes; for example, us-east-2. If it is defined, the connection uses this value and ignores the selection in AWS Roles Anywhere Region drop-down.

**Session name** - Enter a name for the role session. This field is optional and can be empty.

**Duration (in seconds)** - Enter the duration of the role session in seconds. The value specified can range from 900 seconds (15 minutes) up to 3600 seconds (1 hour).

:::note

The connector considers credentials with less than 60 seconds of lifetime expired and will retrieve a new set. This mitigates potential 401 errors that can occur when temporary credentials expire right after being retrieved from the cache.

:::

**Public certificate** - 
Select the client certificate issued by the trusted CA to authenticate and receive temporary credentials from AWS IAM Roles Anywhere.

**Private key** - 
Select the private key associated with the client certificate to authenticate and receive temporary credentials from AWS IAM Roles Anywhere.

<TestConnection />
