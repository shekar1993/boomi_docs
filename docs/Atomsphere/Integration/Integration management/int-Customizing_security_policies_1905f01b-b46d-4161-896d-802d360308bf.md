# Customizing security policies 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-1905f01b-b46d-4161-896d-802d360308bf"/>
</head>


You can add custom permissions to a security policy by using the [Atom Security Policies object](https://developer.boomi.com/api/platformapi#tag/AtomSecurityPolicies). Custom permissions are used to allow the runtime to access shared resources with your local infrastructure environment, such as an internal FTP server, database, web service endpoints or ports, or file system directories.

## About this task

Configuring custom security policies by using the [Atom Security Policies object](https://developer.boomi.com/api/platformapi#tag/AtomSecurityPolicies) ensures that you automatically receive the latest updates to the Boomi-managed security policies while still being able to add customized permissions as needed.

Customizations are applicable only for HIGH security policies, as LOW security policies have no restrictions.

:::caution

When updating, be sure to include the full set of custom permissions in the UPDATE request. Permissions omitted from the request will be removed.

:::

The Atom Security Policies object allows you to configure custom policies for the individual JVM types \(forked execution runner, Atom worker, and connector operation browser\), however it is most typical to configure the policies by using the `common` section that is applied to all three types.

For example, suppose you want to provide access to a local directory, **my/Custom/Dir**.

## Procedure

1.  Use the GET operation of the [Atom Security Policies object](https://developer.boomi.com/api/platformapi#tag/AtomSecurityPolicies) to retrieve any existing custom permissions.

2.  Use the UPDATE operation of the [Atom Security Policies object](https://developer.boomi.com/api/platformapi#tag/AtomSecurityPolicies) to add or change custom permissions.

3.  Send an HTTP POST to `https://api.boomi.com/api/rest/v1/accountId/AtomSecurityPolicies/containerId`, where accountId is the ID of the authenticating account for the request, and containerId is the ID of the Atom Cloud or Molecule for which you want to update the policy.

    ``` {#codeblock_fn3_hlp_1yb}
    POST https://api.boomi.com/api/rest/v1/ACCOUNT_ID/AtomSecurityPolicies/CONTAINER_ID
    
    <bns:AtomSecurityPolicies xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bns="http://api.platform.boomi.com/" atomId="CONTAINER_ID">
            <bns:common/>
                <bns:policies privilegeType="java.io.FilePermission">
                    <bns:arguments value="/my/Custom/Dir"/>
                    <bns:arguments value="read,write,delete"/>
                </bns:policies>
            </bns:common>
            <bns:runner/>
            <bns:worker/>
            <bns:browser/>
    </bns:AtomSecurityPolicies>
    ```

## Additional resources

You can find more information about security policies and available customizations by using the following resources:

-   [Java 8 Security Documentation](http://docs.oracle.com/javase/8/docs/technotes/guides/security/)

-   [Java 8 Default Policy File Syntax](http://docs.oracle.com/javase/8/docs/technotes/guides/security/PolicyFiles.html)

-   [Java 8 security permissions](http://docs.oracle.com/javase/8/docs/technotes/guides/security/permissions.html)

-   [Java 11 Security Documentation](https://docs.oracle.com/en/java/javase/11/security/java-security-overview1.html#GUID-2EF91196-D468-4D0F-8FDC-DA2BEA165D10)

-   [Java 11 Permission and Security Policy File Syntax](https://docs.oracle.com/en/java/javase/11/security/permissions-jdk1.html#GUID-789089CA-8557-4017-B8B0-6899AD3BA18D)

-   [Java 11 Security Permissions](https://docs.oracle.com/en/java/javase/11/security/permissions-jdk1.html#GUID-1E8E213A-D7F2-49F1-A2F0-EFB3397A8C95)