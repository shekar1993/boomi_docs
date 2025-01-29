# Dell OpenManage Enterprise – Partner connector

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-93430b3f-1a0d-4689-9e38-8670c27ffb15"/>
</head>


Dell OpenManage Enterprise \(OME\) is an intuitive infrastructure management console that you can use to manage Dell servers and storage infrastructure.

## Connector configuration


:::note

The documentation for this connector is provided by a  partner. The documentation was last updated in September, 2019.

:::

Using the Dell OpenManage Enterprise \(OME\) - Partner connector, you can use a process to access and share data from Dell OME systems and read the alerts the systems generate and manage. Alerts are classified by severity type \(Unknown, Info, Normal, Warning, and Critical\), and the process can read or filter the alerts based on Severity Type and Timestamp and take action. To configure the connector to communicate with Dell OME, set up two components:

-   Dell OME - Partner connection
-   Del OME - Partner operation

This design provides reusable components containing connection settings and operation settings. After building the connection and operation, set up the connector within a process. When the process is defined properly, can map to and from virtually any system using the Dell OME - Partner connector to access and share data from Dell OME systems and read the alerts the systems generate and manage.

## Supported versions

The connector supports the following Dell OME versions:

-   Dell OME Version 3.1
-   Dell OME Version 3.0

## Prerequisites

To use the connector and implement a connection to your Dell OME account from , verify that you have:

-   Your Dell OME Enterprise IP Address or Hostname to access the Dell OME REST API.
-   Your user name and password to access the Dell OME REST API.
-   Enabled popups in your browser. Popups must be allowed when generating the password in the connection.
    -   Chrome: Settings, Advanced, Privacy and security, Site Settings
    -   Firefox: Options, Privacy & Security, Permissions
    -   Internet Explorer: Internet Options, Privacy

## Tracked properties

This connector has no pre-defined tracked properties. See the topic [Adding tracked fields to a connector operation](http://help.boomi.com/atomsphere/GUID-C84D1FEF-BD90-46CE-BFD2-33CE720572EE.html) to learn how to add a custom tracked field.

## Additional resources

[Dell OpenManage Enterprise Version 3.0 documentation](https://www.dell.com/support/home/us/en/04/product-support/product/dell-openmanage-enterprise-v3.0/manuals)

[Dell OpenManage Enterprise RESTful API Guide](https://topics-cdn.dell.com/pdf/openmanage-enterprise-modular-v10001-poweredge-mx7000_api-guide_en-us.pdf)