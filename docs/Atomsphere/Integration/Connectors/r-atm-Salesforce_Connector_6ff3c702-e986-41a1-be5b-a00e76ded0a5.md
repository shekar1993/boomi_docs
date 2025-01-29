import TrackedProperties from './_TrackedProperties.md'


# Salesforce connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-97df5a37-1edf-4689-9ddc-23a1b5c39abe"/>
</head>


The Salesforce connector connects seamlessly to any native Salesforce application, including Sales Cloud and Service Cloud as well any Custom Cloud or Force.com.

As a Salesforce user, you can use the Salesforce connector to integrate with any other cloud or on-premise application. The Salesforce connector connects directly to the Salesforce application and browses the interfaces in real time. If any of your Salesforce modules are customized with additional fields, they automatically appear when browsing the Salesforce interface with Boomi Integration.

The Salesforce connector integrates with Salesforce using web service calls utilizing XML request/response set up over an HTTPS connection. The technical details of this connection, such as request headers, error handling, and HTTPS connection, are abstracted to simplify the implementation.

## Connector configuration 

To configure a connector to communicate with Salesforce, set up two components:

-   Salesforce connection
-   Salesforce operation

This design provides reusable components containing connection settings \(such as URL, User, and Password\) and operation settings \(such as Object, Action, and data definitions\). After building your connection and operation, set up your connector within a process. When the Salesforce connector is configured properly within your process, Integration can map to and from virtually any system using the Salesforce connector to retrieve data from or send data to the Salesforce application.

## Supported editions 

The following editions are supported:

-   Salesforce Editions: Professional, Enterprise, Unlimited, and Developer \(Contact Manager and Group editions are not supported\)
-   Sales Cloud, Service Cloud, Custom Cloud, and Force.com applications
-   The connector supports the following versions of the Salesforce API:
    -   Versions 30.0 and higher

        :::note

        The connector supports the latest API version listed at [API End-of-Life Policy](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/api_rest_eol.htm) automatically without needing connector updates.
        
        :::

:::note Important 

Versions of the SOAP API older than version 30.0 are no longer supported. You can reference which version numbers are currently supported at [API End-of-Life Policy](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/api_rest_eol.htm). See [List Available REST API Versions](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/dome_versions.htm) to view summary information about currently available REST API Versions.

:::


## Prerequisites 

To implement a connection to your Salesforce account from Integration:

-   Have your login and password to access the Salesforce web service.
-   Confirm that your Salesforce account has privileges to connect to the Salesforce API. Your Salesforce representative can confirm your privileges by providing you with a Sender ID and password specific to the Salesforce API.
-   Understand the basics of Salesforce objects and the objects available in the Salesforce API.
-   Replace your current password in the Salesforce connection with a combination of your password and a security token. This replacement is needed due to a Salesforce security change.
-   If you will use the Bulk API, verify that you have enabled the Bulk API feature in your organization.

<TrackedProperties />