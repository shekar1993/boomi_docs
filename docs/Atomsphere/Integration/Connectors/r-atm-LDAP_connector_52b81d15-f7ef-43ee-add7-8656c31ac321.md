# LDAP connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-1e36189d-d524-473c-868e-7be966eb8d64"/>
</head>


Using the LDAP connector, you can move data into and out of common LDAP servers \(Microsoft Active Directory, OpenLDAP, etc.\), manage, search for, and update the data in the data directory.

## LDAP and directory services 

The Lightweight Directory Access Protocol \(LDAP\) is an open and vendor-neutral industry standard application protocol that facilitates the access to and maintenance of distributed directory information services over an Internet Protocol \(IP\) network. With LDAP, you can keep all of the information about an object \(for example, a user's contact details, login information, password, permissions, etc.\) in one place \(the data directory\) so it is easier to maintain.

Directory services are important to develop intranet and Internet applications by allowing information about users, groups, systems, networks, services, and applications to be shared throughout the network. LDAP and directory services are commonly used to store employee information \(user name and password\) in a data directory and authenticate against those credentials. The LDAP server is the primary source of user data in the data directory. Using the LDAP connector, you can move data into and out of the common LDAP servers \(Microsoft Active Directory, OpenLDAP, etc.\), manage, search for, and update the data. Use this connector to integrate any on-premise applications and legacy system, and integrate LDAP with other on-demand or SaaS-based applications such as Salesforce, NetSuite, Workday, ServiceNow, etc.

#### Custom \(extended\) attributes

The LDAP connector connects directly to the LDAP server and browses the interfaces in real time. If you customize any of the LDAP objects with additional fields, they automatically appear \(in addition to the standard fields\) when browsing, configuring Query filters, configuring the operation profile, and when receiving the operation's output.

When using the LDAP Import Wizard for Query and Get, you can optionally use the **Custom Attributes** field to enter additional attributes you want to add to the selected Object Type. This provides you the flexibility to include additional fields supported by your LDAP entries, but not part of the selected Object Type, in operation responses, response profiles, and Query filters.

## Benefits 

The benefits to using the LDAP connector in a process include the following:

-   Comprehensive operation support, providing flexibility and functionality with the actions you can perform on an object in the data directory.
-   Support for input and output JSON profiles, which help describe the layout and format of the JSON documents that are read into and sent out of a process.
-   Support for all of the object types that the service offers.
-   Ability to configure a connection with SSL.
-   Support for querying using custom \(extended\) attributes.

## Connector configuration 

To configure the connector to communicate with the data directory on an LDAP server, set up two components:

-   LDAP connection
-   LDAP operation

This design provides reusable components containing connection settings and operation settings. After building the connection and operation, set up the connector within a process. When the process is defined properly, Integration can map to and from virtually any system using the connector to retrieve data, send data, and manage data in the data directory on the LDAP server.

## Supported LDAP protocol version and servers 

The LDAP connector can connect to most of the common LDAP servers. The connector supports the LDAP protocol v3 and is tested against the following LDAP servers:

-   Microsoft Active Directory
-   ApacheDS
-   OpenLDAP

## Prerequisites 

The following prerequisites are necessary to implement a connection to the LDAP server from Integration and ensure that the operations work successfully:

-   The principal defined in the connection must have permission to browse the Base Distinguished Name \(Base DN\) that is specified in the operation.
-   The principal defined in the connection must have permissions to browse the schemas of the LDAP server.

## Tracked properties 

This connector has the following tracked property that you can set or reference in various step parameters:

**Distinguished Name** - 
\(Create, Update\) The unique identifier for an entry in the data directory.