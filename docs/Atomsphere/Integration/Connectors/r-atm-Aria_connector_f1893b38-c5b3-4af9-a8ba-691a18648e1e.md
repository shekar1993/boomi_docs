import PartnerSupport from './_PartnerSupport.md'

# Aria – Partner connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-cdfff611-e4bd-470c-9258-342946c8b3b0"/>
</head>

<PartnerSupport />

The Aria – Partner connector enables you to connect to the Aria Subscription Billing Platform to move data into and out of the Aria application.

:::note Important

As of December 2, 2020 the Aria – Partner connector is no longer available for use by customers who have not previously used it. If you utilized the Aria – Partner connector prior to this date, you can continue to do so.

:::

Use the Aria – Partner connector to integrate any on-premise applications and legacy systems. You can also use this connector to integrate the Aria platform with other On Demand or SaaS-based applications, such as Intacct, Salesforce, NetSuite, and so on. The Aria – Partner connector connects directly to the Aria application and browses the interfaces in real-time. If you customize any of your Aria objects with additional fields, they automatically appear when browsing the Aria interface with Integration.

Integrating with Aria consists of web service calls using XML request and response setup over an HTTPS connection. The technical details of this connection such as request headers, error handling, and HTTPS connection are abstracted from the user to simplify the implementation.

:::note

The documentation for this connector is provided by a partner. The documentation was last updated in May 2013. For questions regarding connector support or its documentation, contact the partner.

:::

## Connector configuration 

To configure a connector to communicate with Aria, set up two components:

-   Aria – Partner connection

-   Aria – Partner operation


This design provides reusable components, which contain connection settings \(such as URL, Client No, Authentication Key, and API Version\) and operation settings \(such as Object, Action, and Data Definitions\). After building your connection and operation, you need to set up your connector within a process. When you define the Aria – Partner connector correctly within your process, can map to and from virtually any system using the connector to retrieve data from or send data to the Aria application.

## Supported editions 

The Aria – Partner connector supports all available editions of the Aria services.