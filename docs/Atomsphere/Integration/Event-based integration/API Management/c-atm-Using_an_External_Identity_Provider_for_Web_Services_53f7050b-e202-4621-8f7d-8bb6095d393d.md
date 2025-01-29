# Web services authentication using custom authentication

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-53f7050b-e202-4621-8f7d-8bb6095d393d"/>
</head>

If you do not want to use one of the authentication types for connection to your single-tenant Atom or Molecule’s web services server, you have the option to use a custom provider.

This type of custom authentication may be useful to you in the following situations.

-   Your company has multiple Atoms and you use BASIC authentication. Therefore each user must have a separate authentication token for each of the Atom web servers to which he has access. This entails extra setup and maintenance work for the administrator of the Atoms. The users need to keep track of different tokens, which may expire at different times. It would be easier to be able to use one set of user credentials per user for the multiple independent Atoms. In some cases companies are getting around this by moving their authentication to the load balancer, however, that entails extra work to set up.
-   Your company has planned for disaster recovery, therefore you have multiple Molecules at different locations. All of the Molecules are “active”, with a load balancer distributing processes to different Molecules as needed. Because the load balancer can send any given process to any of the Molecules, the administrator must set up authentication for each user on each Molecule. It is not possible to have completely seamless disaster recovery from one Molecule to another Molecule because the credentials have to change to the pair\(s\) associated with each Molecule for exposed web services. It would be more efficient and easier to set up user credentials that are valid at all locations, independent of the Molecules.

-   In addition to the scenarios above, your company may already use another identity provider to maintain user names and passwords for other systems that your company uses. You would like to use the existing infrastructure to provide web service authentication in your Atoms and Molecules. It would allow administrators to manage user credentials separately from .

The Custom authentication type, available in the Shared Web Server panel, allows you to authenticate using any [JAAS \(Java Authentication and Authorization Service\)](http://docs.oracle.com/javase/7/docs/technotes/guides/security/jaas/JAASRefGuide.html) LoginModule. The JAAS [LoginModule](http://docs.oracle.com/javase/7/docs/technotes/guides/security/jaas/JAASLMDevGuide.html) is added to the Atom or Molecule by adding custom .jar files to it. See more details below.

Most login modules have a set of options. The options are defined by the login module itself and control the behavior within it. For example, a login module may define options to support debugging capabilities. Each login module option consists of a key-value pair, for example, debug=true. There is no limit to the number of options that a login module can have. However, a login module may have zero options.

Basic HTTP authentication is used by web service calls to pass an external identity provider’s user names and passwords to the Atom or Molecule. This mapping of external credentials to internal web server user names and passwords is stored in the http-auth.properties file. In the Shared Web Server panel you have the option to enable credential caching. You may want to enable credential caching if calls to the external identity provider will adversely affect performance. The default credential caching timeout is 5 minutes. You can change the timeout or you can flush the cache manually by using JMX and the AccountHttpInfo MBean.

In the Shared Web Server panel, you must associate each external user name with a unique internal web service user name. You cannot map the same external user to more than one internal web service user. If IP filtering or Web Service filtering is set up for the internal web service user, it is enforced for the corresponding external user.

The external user name and credentials are authenticated using the custom login module. Once the external user name is authenticated, it is returned by the login module and passed to the process execution as a dynamic process property named `inextuser_1`. Some login modules use additional identity information for the authenticated user. For example, they may also require a user role. If so, an additional dynamic process property named `inextuser_2` is returned to the process. If a login module requires even more identity information, additional consecutively named dynamic process properties \(`inextuser_3`, `inextuser_4`, etc.\) are returned to the process.

:::note

Custom authentication is available in accounts that have the API Management feature enabled. It is available only for single-tenant Atoms and Molecules.

:::
