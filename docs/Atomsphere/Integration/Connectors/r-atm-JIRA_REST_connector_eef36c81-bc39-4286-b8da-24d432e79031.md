# JIRA REST connector

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-d843ccd1-8db4-4356-995c-71df69888a06"/>
</head>


You can use the JIRA REST connector to move data into and out of the JIRA application and integrate any on-premise applications and legacy systems.

For example, you can integrate JIRA with other On Demand or SaaS-based applications, such as Intacct, Salesforce, and NetSuite. The JIRA connector connects directly to the JIRA application and browses the interfaces in real-time. Integrating with JIRA consists of RESTful web service calls using JSON request and response set up over an HTTP or HTTPS connection. It abstracts the technical details of this connection, such as request headers, error handling, and HTTPS connection, to simplify the implementation.

**Note:** This connector replaces the older JIRA connector.

## Connector configuration 

To configure a connector to communicate with JIRA REST, set up two components:

-   JIRA REST connection

-   JIRA REST operation


This approach creates reusable components that contain connection settings \(such as URL, User, Password\), and operation settings \(such as Object, Action, data definitions\). After building your connection and operation, set up your connector within a process. When you define the JIRA connector within a process, can map to and from virtually any system using the connector to retrieve data from or send data to the JIRA application.

## Supported editions 

This connector supports JIRA 5.0 and later versions.

## Tracked properties

This connector has no predefined tracked properties. See the topic [Adding tracked fields to a connector operation](../Process%20building/t-atm-Adding_tracked_fields_to_a_connector_operation_f71821dd-95ee-4ebd-bfc9-3333262f56f6.md) to learn how to add a custom tracked field.
