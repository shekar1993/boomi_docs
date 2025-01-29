import TrackedProperties from './_TrackedProperties.md'
import PartnerSupport from './_PartnerSupport.md'

# RightNow – Partner connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-047264b3-9413-4691-99d8-bcb0832ab531"/>
</head>

<PartnerSupport />

The RightNow – Partner connector enables you to move data into and out of the Oracle RightNow CX CRM.

:::info Important

As of the Feb 2021 release, the RightNow – Partner connector is no longer available for use by customers who have not previously used it. If you utilized this connector prior to the date, you can continue to do so.

:::

You can use the RightNow – Partner connector to integrate any on-premise applications and legacy systems. You can also use this connector for integrating RightNow with other On-demand or SaaS-based applications, such as Intacct, Salesforce, Netsuite, etc.

The RightNow – Partner connector connects directly to the RightNow CX CRM and browses interfaces in real time. RightNow objects that have been customized with additional fields appear automatically when browsing the RightNow interface.

Integrating with RightNow consists of web service calls utilizing XML requests/responses set up over an HTTP connection. The technical details of this connection, such as request headers, error handling, HTTPS connection, etc., are abstracted to simplify the implementation.

:::caution

A Boomi partner provided this connector. However, the connector might have limited functionality, is not thoroughly tested, and thus has limited support.

:::

## Connector configuration 

To configure a connector to communicate with RightNow, set up two components:

-   RightNow – Partner connection

-   RightNow – Partner operation


This design provides reusable components, which contain connection settings \(such as URL, User, Password\) and operation settings \(such as Object, Action, data definitions\). After building your connection and operation, set up your connector within a process. When the RightNow – Partner connector is defined properly within your process, Integration can map to and from virtually any system using the connector to retrieve data from or send data to the RightNow CX CRM.

## Supported editions 

The following edition is supported:

-   RightNow version 1.2

## Unsupported editions 

The RightNow – Partner connector does not support RightNow November 2014 version and later.

## Prerequisites 

To implement a connection to your RightNow account from Integration, complete the following:

-   Understand from a business process perspective which interface\(s\) to integrate. For example, you may want to retrieve from RightNow Incident records and then integrate them with a Salesforce custom object.

-   Have ready your user name, password, and host and site names to access the RightNow Connect web service.

-   Confirm that your RightNow account has privileges to connect to the [RightNow Connect API](http://www.programmableweb.com/api/rightnow-connect).

    Contact your Boomi representative for the correct IP range to add.

-   Confirm that the proper Boomi IP range is added to the following locations: **Administrative Items** \> **System Configuration** \> **Settings** \> **\(Select Appropriate Interface\)** \> **Common** \> **Security**, where the appropriate interface is either `SEC_VALID_ADMIN_HOSTS` or `SEC_VALID_INTEG_HOSTS`.


<TrackedProperties />