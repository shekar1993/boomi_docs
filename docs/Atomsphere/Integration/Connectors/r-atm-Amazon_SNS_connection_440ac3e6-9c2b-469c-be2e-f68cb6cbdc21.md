# Amazon SNS connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-440ac3e6-9c2b-469c-be2e-f68cb6cbdc21"/>
</head>


The Amazon SNS connection represents a single Amazon SNS account including sign on credentials.

If you have multiple accounts, use a separate connection for each and configure the URL accordingly. Pair a single connection with different Amazon SNS operations to perform a unique action against an Amazon SNS account.

## Connection tab 

The Amazon SNS connection uses Amazon access keys, which consist of an access key ID and a secret access key. You create these keys using the **AWS Management Console** and access them from your stored secure location.



**Amazon AWS access key** - 
 Type or paste your Amazon AWS access key.

**Amazon AWS secret key** - 
  Click **Click to Set** and then type or paste your Amazon AWS secret key.

**AWS Region** - 
 Select the name of the AWS region in which your account resides.

**Custom AWS Region** - 
If the **AWS Region** field does not have the region you want, enter the custom name of the AWS region in which your account resides. For example, to use the AP South 2 region, enter ap-south-2. A custom region allows you to extend the regions for the Amazon AWS services.

 If provided, the connection uses the custom region, instead of the region in the **AWS Region** field, to list topics for use in the Create operation, create notifications, and send push notifications.

**Note:** The connector supports custom AWS regions located in China \(for example `cn-north-1`, `cn-northwest-1`\). To provide support for these regions, and any custom region starting with the cn- prefix, connector requests use the domain amazon.com.cn.

**HTTP Proxy User \(Deprecated\)** - 
The name of the user who can log in to the proxy server, such as johndoe@your-company.com. recommends that instead of providing an HTTP proxy user and corresponding password, you utilize the proxy configuration in the Atom. To learn more, see the topic [Properties panel, Advanced tab](../Integration%20management/r-atm-Properties_panel_Advanced_tab_c39737e8-1b16-4fdd-b414-152694364c14.md).


**Attention:** To help ensure the connection is successful and preserve backward compatibility with connections utilizing the deprecated fields, the connector honors both the proxy configuration in the connection and the Atom proxy configuration. Credentials set utilizing the deprecated fields take precedence over the credentials set in the Atom. However, encourages you to utilize the proxy configuration in the Atom. When appropriate, update your connections by removing the entries in both the **HTTP Proxy User \(Deprecated\)** and **HTTP Proxy Password \(Deprecated\)** fields. After the update, save the connection. Making these required changes ensures the operations utilize the Atom proxy configuration.

**HTTP Proxy Password \(Deprecated\)** - 
The password for the proxy user, such as password-to-proxy-host. recommends that instead of providing an HTTP proxy password and corresponding user, you utilize the proxy configuration in the Atom. To learn more, see the topic [Properties panel, Advanced tab](../Integration%20management/r-atm-Properties_panel_Advanced_tab_c39737e8-1b16-4fdd-b414-152694364c14.md).

**Attention:** To help ensure the connection is successful and preserve backward compatibility with connections utilizing the deprecated fields, the connector honors both the proxy configuration in the connection and the Atom proxy configuration. Credentials set utilizing the deprecated fields take precedence over the credentials set in the Atom. However, encourages you to utilize the proxy configuration in the Atom. When appropriate, update your connections by removing the entries in both the **HTTP Proxy User \(Deprecated\)** and **HTTP Proxy Password \(Deprecated\)** fields. After the update, save the connection. Making these required changes ensures the operations utilize the Atom proxy configuration.

**Fields when authenticating with AWS IAM Roles Anywhere**

**Authentication Type** - 

Select the authentication type to connect to the service, either via your access keys or AWS IAM Roles Anywhere. When using access keys, provide both an access key ID and a secret access key. When using AWS IAM Roles Anywhere, provide trusted X.509 certificates and the service configuration data required to validate the trust and obtain temporary security credentials. Access keys is the default authentication method.

**Profile ARN** - 

Enter the Amazon Resource Name (ARN) of the profile.

**Role ARN** - 

Enter the Amazon Resource Name (ARN) of the role to assume.

 **Trust Anchor ARN** - 

Enter the Amazon Resource Name (ARN) of the trust anchor.

**AWS IAM Roles Anywhere Region** - 

Select the AWS Region associated to your AWS IAM Roles Anywhere service. If your region is not included in the dropdown options, you can enter it in **AWS IAM Roles Anywhere Custom Region**. The default value is US_EAST_1.

**AWS IAM Roles Anywhere Custom Region** - 

Enter the AWS region in which your AWS IAM Roles Anywhere service resides. You must enter your values in all lowercase using dashes; for example, us-east-2. If defined, the connection uses this value and ignores the selection in AWS IAM Roles Anywhere Region drop-down.

**Session name** - 

Enter a name for the role session. This field is optional and can be empty.

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