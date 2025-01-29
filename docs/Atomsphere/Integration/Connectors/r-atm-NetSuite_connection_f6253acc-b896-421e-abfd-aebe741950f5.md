import TestConnection from './_TestCon.md'

# NetSuite connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-f6253acc-b896-421e-abfd-aebe741950f5"/>
</head>


The NetSuite connection represents a single NetSuite account including sign-in credentials. You can only connect to one NetSuite account at a time.

If you have multiple accounts or sandbox instances, use a separate connection for each and configure the URL accordingly. You can pair a single connection with different NetSuite operations to perform a unique action against a NetSuite account.

:::note

In September 2012, NetSuite began hosting new customer accounts in multiple data centers. The URL for access depends upon the data center hosting the NetSuite account. For example, the URL might be `webservices.netsuite.com` or `webservices.na1.netsuite.com`. Enter the default URL `https://webservices.netsuite.com/services/NetSuitePort_<year>_<version_number>` in the **URL** field. The NetSuite connector automatically discovers the correct URL to access your NetSuite account. This automatic lookup works with any NetSuite version that you select. NetSuite treats beta URLs and sandbox URLs differently, so the automatic lookup does not occur if you use them.

:::

## Connection tab 

NetSuite supports both user credentials and token-based authentication \(2017.1 and later versions\). When you create a connection, you can use either approach:

-   When using user credentials, enter your user name, password, account number, and application ID.
-   When using token-based authentication, do not enter your user name, password, and application ID. Instead, enter your account number, consumer key and secret, and token ID and secret.

:::note

The connection does not require both sets of credentials. For example, if you do not provide all of the token-based authentication information, you must then provide your user name and password. Otherwise, the connection fails. In addition, NetSuite requires a different account configuration for token-based authentication than for user credentials. If data and custom fields that were available with credentials is no longer available when using token-based authentication, read the Boomiverse knowledge article.

:::

## Connection options \(user credentials\)

:::info Important

In NetSuite 2020.2, user credential authentication is deprecated in favor of token-based authentication. Although it supports user credential authentication for backward compatibility with the 2020.1 and earlier releases of the connector, Boomi encourages you to update your connections to use token-based authentication. An error occurs if you attempt to connect using 2020.2 with user credential authentication. For more information, see the NetSuite article [Advanced Notice: Upcoming Deprecation of SOAP Web Services Authentication Through User Credentials](https://tstdrv965750.app.netsuite.com/app/help/helpcenter.nl?fid=section_N3950559.html#subsect_158385068747) \(NetSuite sign-in credentials required\).

:::

You can use the following connection fields for user credentials authentication. You must also enter your **Account Number** and **Application Id**.

**User** - 
  The user name \(email address\) that you use to sign into the NetSuite platform.

**Password** - 
The password that you use to sign into the NetSuite platform.

 Boomi Integration performs password authentication to a single instance of NetSuite. Boomi Integration also performs request-level, rather than session-level, authentication by making a single call to see which NetSuite instance is hosting calls and then makes all subsequent calls to that instance.

## Connection options \(token-based authentication\) 

The following connection fields are used for token-based authentication. You must also enter your **Account Number**. There are various methods to create keys and tokens in NetSuite. The method you can use depends on the permissions assigned to your role. For detailed information about managing token-based authentication in NetSuite, see the Authentication for Web Services topic in the NetSuite Help Center \(sign-in credentials required\).

In addition to setting the token-based connection options, you must also do the following:

-   Enable token-based authentication for your NetSuite account

-   Create a custom role

-   Assign the role to the appropriate user

-   Install the [Boomi for Integration and EDI SuiteApp](https://www.suiteapp.com/Dell-Boomi-AtomSphere) (SuiteApp Bundle ID: 492145) into your NetSuite account. This includes an Integration Record that you will use while configuring your access token.

- If you are using a custom Integration Record instead of the one which is provided in the Boomi SuiteApp, you must configure the Consumer Key and Consumer Secret fields with the values generated during the custom Integration Record creation. Otherwise, choose **Use Boomi Integration Record**.

For complete details to configure the NetSuite connection with token-based authentication, read the Boomiverse knowledge article.

**Consumer Key** - 
 The value you use to identify yourself to the service provider. You can copy the **Consumer Key** and **Consumer Secret** when you create them in NetSuite, and store them in a safe location. However, after leaving the confirmation page, you cannot retrieve these values. If you lose or forget them, use NetSuite to create a new key and secret.

**Consumer Secret** - 
  The encrypted consumer secret generated by NetSuite that you use to establish ownership of the consumer key. For enhanced security, ensure you use this secret and leave the **Consumer Secret \(Deprecated\)** field empty.

**Consumer Secret \(Deprecated\)** - 
  The consumer secret generated by NetSuite that you use to establish ownership of the consumer key. This secret is not encrypted. For enhanced security, ensure you leave this field blank and enter the encrypted secret in the **Consumer Secret** field.

**Use Boomi Integration Record** -
  This checkbox when selected allows you to use the downloaded Boomi Integration Record. 

**Token Id** - 
 The ID of the token you use to gain access to NetSuite instead of using service provider credentials. You can copy the **Token Id** and **Token Secret** when you create them in NetSuite, and store them in a safe location. However, after leaving the confirmation page, you cannot retrieve these values. If you lose or forget them, use NetSuite to create a new token ID and secret.

**Token Secret** - 
 The encrypted token secret generated by NetSuite to establish ownership of a specific token. For enhanced security, ensure you use this secret and leave the **Token Secret \(Deprecated\)** field empty.

**Token Secret \(Deprecated\)** - 
 The unencrypted token secret generated by NetSuite to establish ownership of a specific token. For enhanced security, ensure you leave this field blank and enter the encrypted secret in the **Token Secret** field.

For additional information, refer to these articles:
- https://community.boomi.com/s/article/howtoconfigurethenetsuiteconnectionwithtokenbasedauthentication
- https://community.boomi.com/s/article/How-to-Integrate-with-NetSuite-using-the-Token-Based-Authentication-on-Boomi

## Connection options \(user credentials and token-based authentication\) 

You can use the following connection fields for user credentials and token-based authentication.

**URL** - 
  The web service URL that the NetSuite connector uses to get or post data. For example, `https://webservices.netsuite.com/services/NetSuitePort_2021_2`. The URL defaults to the latest available version of NetSuite that the connector supports.

The last numbers in the URL must match the version selected in the **Version** field. If you use the default URL and the default version, the URL is correct. However, if you change the **Version** field to, for example, 2021.1, you need to change the last part of this field to `/NetSuitePort_2021_1`.

:::note

With 2019.1, all accounts use account-specific endpoints, which the connector looks up when using the production endpoint. If you used a sandbox previously, your URL might have looked like this: `https://webservices.sandbox.netsuite.com/services/NetSuitePort_2018_2`.

:::

**Account Number** - 
  The account number that you use to log into the NetSuite platform. You can find your account number in NetSuite by going to the **Web Services Preferences** page at **Setup** \> **Integration** \> **Integration Management** \> **Web Services Preferences**.

**Application Id**   
  Enter the 32-character unique, external application ID automatically generated in NetSuite when you create a record. You can find your Application Id in NetSuite by going to **Setup** \> **Integration** \> **Manage Integrations**. You only enter the Application Id for user credentials; if you enter it for token-based authentication, it is not used.

The connector sends the Id in the header for all requests to the version of the specified API, then logs all transactions with that Id in the Execution Log.

**Version**    
 The version of the NetSuite API / WSDL being accessed. The version defaults to the latest available version of NetSuite that the connector supports. The following versions are supported: 2017.1, 2017.2, 2018.1, 2018.2, 2019.1, 2019.2, 2020.1, 2020.2, 2021.1, and 2021.2. The selected version must match the version in the **URL**.

 You may not see the version of the NetSuite API you are using or upgrading to in this field. For example, you have upgraded to NetSuite 2022.1 but cannot select version 2022.1 in this field. New and existing integration processes accessing previous API versions will still work with the newer NetSuite interface version \(2022.1\). You only need to use the 2022.1 API to access version-specific features. For more information about version-specific features impacting the NetSuite connector, see the topic [NetSuite change notes](r-atm-NetSuite_change_notes_2a04b240-e20f-413c-9e14-5ab25312b008.md).

**Number of Retries** - 
 The number of times that Boomi Integration retries a NetSuite connector run when there is a connection failure. Select a number from 0-10. The default is 5.

**Maximum Number of Concurrent Connections** - 
 This setting limits both single-thread and pool connections for your NetSuite license. The default is 1.

-   If you have a SuiteCloud Plus license, you can set this to a value greater than 1 to allow the connector to use as many concurrent connections that you purchased from NetSuite. To help avoid performance issues when retrieving object records from NetSuite, use a single connection with **Maximum Number of Concurrent Connections** set to 10. Then, use a **Flow Control** step in your process before the NetSuite connection step. In the **Flow Control** step, set the **Unit Scope** to **Threads** and the **Number of Units** to 10 to match this connection setting. If you enter a number greater than the number of concurrent connections that you purchased from NetSuite, the process fails.
 -   If you have a regular NetSuite license and you change this value to a number greater than 1, your process fails if you attempt concurrent connections. NetSuite does not allow concurrent connections with a regular license.

  Running different processes at the same time on different nodes can throw a NetSuite *Only One Connection Allowed at a Time* error because the processes do not use the same pool. Limit concurrent runs on a cloud by staggering or sequencing the runs.

:::note

NetSuite 2017.2 introduced a change to their licensing model, and every company receives a limit on the number of concurrent requests allowed at any given time. The new licensing model combines NetSuite's concurrent user model and account-level governance. Be aware of the following:

-   If you use token-based authentication, it applies your connection limits at the account level instead of the user level.
-   The new account governance limit applies to the combined total number of requests that you make. For example, if you have 5 SuiteCloud Plus licenses on Service Tier 2, the limit for concurrent requests in your production account is 65. If you are on a shared service with 1 SuiteCloud Plus license, your account limit is 15.
-   If you exceed the number of concurrent connections that you purchased from NetSuite, your process fails.
-   With a SuiteCloud Plus license, you have a base of 5 concurrent connections shared across Restlets \(HTTP connector\) and SuiteTalk \(NetSuite connector\) at the account level, in addition to 10 more connections for each SuiteCloud Plus license you bought.

:::

<TestConnection />