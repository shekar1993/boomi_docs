# Amazon S3 REST connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-e677c920-0b32-46db-adf6-455069047b47"/>
</head>


The Amazon S3 REST connection represents and contains all of the information you need to connect and sign into a single AWS account.

If you have multiple accounts or buckets, use a separate connection for each. Pair a single connection with different Amazon S3 operations to perform a unique action against an Amazon S3 account.

## Connection tab 


The Amazon S3 connection can be authenticated in two ways. You can create Amazon access keys using the AWS Management Console consisting of an access key ID and a secret access key. These keys are accessible from your stored secure location. The Amazon S3 connection also supports authentication via AWS IAMRoles Anywhere.

:::info Tip

AWS IAM Roles Anywhere relies on public key infrastructure (PKI) to establish trust between an AWS account and a certificate authority (CA), both belonging to the customer. The CA issues X509 certificates which can be used by the S3 Connector to get temporary credentials to operate on S3 entities. The temporary credentials are valid for a predefined bounded period of time configured by the user and cached to be reused across connectors using the same connection component and consecutive process executions. The connector will handle the renewal after the credentials expire.

:::

**Fields when authenticating with access keys** - 



**Authentication Type** - 
Select the authentication type to connect to the service, either via your access keys or AWS IAM Roles Anywhere. When using access keys, provide both an access key ID and a secret access key. When using AWS IAM Roles Anywhere, provide trusted X.509 certificates and the service configuration data required to validate the trust and obtain temporary security credentials. Access keys is the default authentication method.

**Amazon AWS access key** - 
Enter the access key for your AWS account. Your access key provides unrestricted access to all of the resources in your account, including billing information. You can manage access keys for your AWS account using the AWS Management Console as the AWS account root user.

**Amazon AWS secret key** - 
Enter the secret access key for your AWS account. Your secret key provides unrestricted access to all of the resources in your account, including billing information. When you create an access key, AWS allows you to view and download your secret key.

**Fields when authenticating with AWS IAM Roles Anywhere** - 

**Authentication Type** - 
Select the authentication type to connect to the service, either via your access keys or AWS IAM Roles Anywhere. When using access keys, provide both an access key ID and a secret access key. When using AWS IAM Roles Anywhere, provide trusted X.509 certificates and the service configuration data required to validate the trust and obtain temporary security credentials. Access keys is the default authentication method.

**Profile ARN** - 
Enter the Amazon Resource Name (ARN) of the profile.

**Role ARN** - 
Enter the Amazon Resource Name (ARN) of the role to assume.

**Trust Anchor ARN** - 
Enter the Amazon Resource Name (ARN) of the trust anchor.

**AWS Roles Anywhere Region** - 
Select the AWS Region associated to your AWS IAM Roles Anywhere service. If your region is not included in the dropdown options, you can enter it in **AWS Roles Anywhere Custom Region**. The default value is 'us-east-1'.

**AWS Roles Anywhere Custom Region** - 
Enter the AWS region in which your AWS IAM Roles Anywhere service resides. You must enter your values in all lowercase using dashes; for example, us-east-2. If it is defined, the connection uses this value and ignores the selection in AWS Roles Anywhere Region drop-down.

**Session name** - 
Enter a name for the role session. This field is mandatory and can be any value.

**Duration (in seconds)** - 
Enter the duration of the role session in seconds. The value specified can range from 900 seconds (15 minutes) up to 3600 seconds (1 hour).

:::note

The connector considers credentials with less than 60 seconds of lifetime expired and will retrieve a new set. This mitigates potential 401 errors that can occur when temporary credentials expire right after being retrieved from the cache.

:::

**Public certificate** - 
Select the client certificate issued by the trusted CA to authenticate and receive temporary credentials from AWS IAM Roles Anywhere.

**Private key** - 
Select the private key associated with the client certificate to authenticate and receive temporary credentials from AWS IAM Roles Anywhere.

## Test Connection

You can test your connection settings before you use or save the connection in a process. The Test Connection ensures that your specified settings are correct, valid, and accessible. If the test connection is successful, you can save the connection. Otherwise, review and correct any incorrect settings, then test again.

:::info

You can only run the Test Connection against containers associated with your account (local Atoms, Molecules, and Atom Clouds).

:::

## Troubleshooting

When testing the Amazon S3 connection, if the Amazon AWS access key and Amazon AWS secret key are correct, but the Amazon S3 Bucket is either invalid or you do not have access permissions to the bucket, the test connection is successful. The connector will try to list the Amazon S3 REST Buckets for your account. If the credentials do not have the necessary permissions to access the buckets, the test connection will fail.

If any field in the connection tab is incorrect when authenticating with AWS Roles Anywhere, the connector will return the error with the message received from the service since the temporary credentials are retrieved from the connection settings.