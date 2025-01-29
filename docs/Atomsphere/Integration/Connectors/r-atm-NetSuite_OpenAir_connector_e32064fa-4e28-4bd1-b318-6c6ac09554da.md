import TrackedProperties from './_TrackedProperties.md'

# NetSuite OpenAir connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-2f81534a-6dd7-49bd-b515-514a4e456d39"/>
</head>


The NetSuite OpenAir connector enables you to move data into and out of NetSuite OpenAir services resource planning \(SRP\) software.

Use the NetSuite OpenAir connector to integrate any combination of on-premise and cloud applications with NetSuite OpenAir. The connector is prebuilt for Salesforce.com. You can run business processes automatically by integrating NetSuite OpenAir with other applications across an organization, including very large enterprise systems like SAP and Oracle in a two-tier model. For example, your company needs to track the sale, progress, and billing of a service engagement across CRM, PSA and ERP applications. When Boomi Integration integrates these applications to automate this process, the results are greater efficiencies, a reduction in errors, and improved visibility into all aspects of customer engagement.

If you customize NetSuite OpenAir modules with additional fields, the fields automatically appear when browsing the NetSuite OpenAir interface with Boomi Integration.

Integrating with NetSuite OpenAir consists of web service calls utilizing SOAP request and response setup over an HTTPS connection. The technical details of this connection, such as request headers, error handling, HTTPS connection, and so on, are abstracted to simplify your implementation.

## Connector configuration 

To configure a connector to communicate with NetSuite OpenAir, set up two components:

-   NetSuite OpenAir connection

-   NetSuite OpenAir operation


This design provides reusable components containing connection settings \(such as the Endpoint URL, User, Password, and Company\) and operation settings \(such as Object, Action, and data definitions\). After building your connection and operation, set up your connector within a process. When you have correctly defined the NetSuite OpenAir connector within your process,  Integration can map to and from virtually any system using the connector to retrieve or send data to the NetSuite OpenAir application.

## Supported editions 

The NetSuite OpenAir connector supports Version 2013-05-16 of the OpenAir SOAP API.

## Prerequisites 

To implement a connection to your NetSuite OpenAir account from Integration, you must have a valid user name and password so that you can sign into the NetSuite OpenAir service.


<TrackedProperties />