# Security policies for Clouds and Molecules 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-19d244bf-2cab-45a8-8d8e-49ebde3eddc7"/>
</head>


The Java Virtual Machine \(JVM\) security policies specify the permissions under which the JVM executes. This controls the JVM's access to local resources \(such as local file system directories\) and ability to perform certain actions within the infrastructure environment hosting the runtime.

When you install a multi-tenant Atom Cloud or a single-tenant Molecule, the runtime can be configured with one of two types of Java security policies:

| Policy Name         | Description  |
| --------------------| ------------ |
| **High Security Policy** | The default security policy for Atom Clouds, providing maximum security for running a secure multi-tenant Cloud. This prevents individual tenants from accessing shared resources within the runtime that could impact other tenants. |
| **Low Security Policy**  | The default security policy distributed when installing a single-tenant Molecule. There are *no* security restrictions in a Low security policy. This policy is used *only* when forked processing is enabled, which is *not* enabled by default. If forked processing is not explicitly enabled, the Molecule will not use a security policy and processes will execute in the main Atom's JVM with full permissions. |


## Overriding the default security policy 

If you do not want to use the default security policies for Atom Clouds, single-tenant Molecules, connector browse operations that run in forked executions, or Atom workers in private Atom Clouds, then you must override the appropriate default security policy. This is not common.

For example, you might want to change the default security policy level in the following use cases:

-   If you are a partner who builds and executes all of your customers’ processes \(that is, you control all of the tenants in the Atom Cloud\), then you may want to use a Low security policy. As the Atom Cloud owner you already have complete control over all of the processes.

-   The High security policy denies access to all local network resources and file system resources outside of the account directory. If you are a partner or private cloud owner and you have local resources that you want to share with your customers or child accounts, but you also want to use a High security policy, then you should add custom permissions by using the [Atom Security Policies object](https://developer.boomi.com/api/platformapi#tag/AtomSecurityPolicies) \(see the section below\). You would add to it exceptions for the local resources that you want to share \(for example an internal FTP server, an internal database, an internal web service, shared directories, etc.\).


To change the security policy level, use the following steps:

1.  In the **Manage** menu, select **Atom Management**.
2.  Select the Atom Cloud or Molecule from the list on the left.
3.  In Settings & Configurations, select **Properties** and then click the **Advanced** tab.
4.  From the **Add Property** drop-down list, select the **Security Policy** property and then click **Add Property**.
5.  Enter LOW or HIGH in the Security Policy **Property Value** field.
6.  Click **Save**.

## Customizing a security policy

You can customize a High security policy by granting additional permissions by using the [Atom Security Policies object](https://developer.boomi.com/api/platformapi#tag/AtomSecurityPolicies). Adding custom permissions is common when you want to allow the runtime to access shared local resources such as an internal FTP server, databases, web service endpoints or ports, or file system directories.

:::note

You must be an administrator to customize the security policy for an Atom Cloud or Molecule.

:::

For more information, see the topic [Customizing security policies](int-Customizing_security_policies_1905f01b-b46d-4161-896d-802d360308bf.md).


## Additional resources 

-   [Java 8 Security Documentation](http://docs.oracle.com/javase/8/docs/technotes/guides/security/)

-   [Java 8 Default Policy File Syntax](http://docs.oracle.com/javase/8/docs/technotes/guides/security/PolicyFiles.html)

-   [Java 8 security permissions](http://docs.oracle.com/javase/8/docs/technotes/guides/security/permissions.html)

-   [Java 11 Security Documentation](https://docs.oracle.com/en/java/javase/11/security/java-security-overview1.html#GUID-2EF91196-D468-4D0F-8FDC-DA2BEA165D10)

-   [Java 11 Permission and Security Policy File Syntax](https://docs.oracle.com/en/java/javase/11/security/permissions-jdk1.html#GUID-789089CA-8557-4017-B8B0-6899AD3BA18D)

-   [Java 11 Security Permissions](https://docs.oracle.com/en/java/javase/11/security/permissions-jdk1.html#GUID-1E8E213A-D7F2-49F1-A2F0-EFB3397A8C95)