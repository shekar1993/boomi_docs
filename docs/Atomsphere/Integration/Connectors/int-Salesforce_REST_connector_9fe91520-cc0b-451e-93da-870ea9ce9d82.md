# Salesforce REST connector

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-9fe91520-cc0b-451e-93da-870ea9ce9d82"/>
</head>


The Salesforce REST connector is a key part of the Boomi Integration process that makes it easy to work with any native Salesforce application, including Sales Cloud and Service Cloud as well as any Custom Cloud or Force.com.

The Salesforce REST connector connects directly to the Salesforce application and browses the interfaces in real time. If any of your Salesforce modules are customized with additional fields, they automatically appear when browsing the Salesforce interface with Boomi Integration.

The Salesforce REST connector integrates with Salesforce using web service calls utilizing XML requests/responses set up over an HTTPS connection. The technical details of this connection, such as request headers, error handling, and HTTPS connection, are abstracted to simplify the implementation.

:::note

This is an open source connector and you can access the code in the [Salesforce REST](https://bitbucket.org/officialboomi/salesforce-rest) connector repository.

:::

## Connector configuration

To configure a connector to communicate with your Salesforce web service, set up two components:

-   Salesforce REST connection
-   Salesforce REST operation

This design provides reusable components, which contain connection settings such as username, password, etc. After building your connection and operation, set up your connector within a process. When you have properly configured your connector within your process, Boomi Integration can map to and from virtually any system using the Salesforce REST connector to retrieve data from or send data to the Salesforce application.

## Supported editions

The connector supports the following editions:

-   Salesforce Editions: Professional, Enterprise, Unlimited, and Developer \(Contact Manager and Group editions are not supported\).
-   Sales Cloud, Service Cloud, Custom Cloud, and Force.com applications.
-   The connector supports Salesforce API version 59 and higher.

## Prerequisites

The Salesforce REST requires the following:

-   Both your login and password to access the Salesforce web service.
-   Confirm that your Salesforce account has privileges to connect to the Salesforce API. Your Salesforce representative can confirm your privileges by providing you with a Sender ID and password specific to the Salesforce API.
-   Understand the basics of Salesforce objects and the objects available in the Salesforce API.
-   Replace your current password in the Salesforce REST connection with a combination of your password and a security token. This replacement implements a Salesforce security change. For example, if your password is MyPassword and your security token is XXXXXX, enter MyPasswordXXXXXX.
-   If you use OAuth 2.0, you must get the ClientID and ClientSecret from the Salesforce website by creating a new Connected App in Salesforce with the correct permissions, OAuth Scopes, and Callback URL. Also, make sure to generate an Access Token.
-   If you use the Bulk API, verify that you have enabled the Bulk API feature in your organization.