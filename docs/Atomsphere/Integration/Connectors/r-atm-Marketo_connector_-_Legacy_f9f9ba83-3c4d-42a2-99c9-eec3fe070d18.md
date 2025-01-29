import TrackedProperties from './_TrackedProperties.md'
import PartnerSupport from './_PartnerSupport.md'

# Marketo — Partner connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-951d6e52-f6d1-49e9-8e44-9bee4ea08d49"/>
</head>

<PartnerSupport />

The Marketo — Partner connector enables you to move data into and out of the Marketo application.

:::info Important

As of December 2, 2020 the Marketo — Partner connector is no longer available for use by customers who have not previously used it. If you utilized the Marketo — Partner connector prior to this date, you can continue to do so. However, you are encouraged to take advantage of the functionality provided by the Marketo REST connector.

:::

Use the Marketo — Partner connector to integrate any on-premise applications and legacy systems. You can also use this connector to integrate Marketo with other On Demand, SaaS or cloud-based applications such as Intacct, Salesforce, NetSuite, etc. 
The Marketo — Partner connects directly to the Marketo application and browses the interfaces in real-time. Integrating with Marketo consists of SOAP web service calls using XML request/response set up over an HTTPS connection. The technical details of this connection such as request headers, error handling, HTTPS connection, etc. are abstracted to simplify the implementation.

:::note

The documentation for this connector is provided by a partner. However, you are encouraged to take advantage of the new functionality provided by the Marketo REST connector.

:::

## Connector configuration 

To configure a connector to communicate with Marketo, set up two components:

-   Marketo — Partner connection

-   Marketo — Partner operation


This design provides reusable components, which contain connection settings \(URL, User ID, Encryption Key\) and operation settings \(Object, Action, data definitions\). When your connection and operation are built, set up your connector within a process. After properly defining the Marketo — Partner connector within your process, Integration can map to and from virtually any system using the connector to retrieve data from or send data to Marketo.

## Prerequisites 

To implement a connection to your Marketo account from Integration, you must be able to access the Marketo Admin section to configure/review the SOAP API setup. For more information, see the [Marketo — Partner connection](./../Connectors/r-atm-Marketo_connection_-_Legacy_6fa3b5a7-2b33-4516-a443-e0f70be82dca.md) topic.

<TrackedProperties />