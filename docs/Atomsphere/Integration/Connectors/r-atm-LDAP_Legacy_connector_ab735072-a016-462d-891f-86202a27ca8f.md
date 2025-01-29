import TrackedProperties from './_TrackedProperties.md'

# LDAP (Deprecated) connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-cd070e31-0b9a-49a4-b41c-028e3c703b68"/>
</head>


Use the LDAP (Deprecated) connector to move data into and out of common LDAP servers, integrate any on-premise applications and legacy systems, and integrate LDAP (Deprecated) with other on-demand or SaaS-based applications such as Intacct, Salesforce, NetSuite, etc.

:::warning

This connector has been changed to Deprecated status. This connector is no longer actively maintained and will be retired and out of support as of the May 2025 Platform release. For more information about the Deprecated stage, see the [Feature release stages page](../../Platform/atm-Feature_release_stages_00d83b66-e5db-4038-8398-fcaead4be12d.md).

:::

The LDAP (Deprecated) connector connects directly to the LDAP server and browses the interfaces in real time. If any of your LDAP (Deprecated) objects are customized with additional fields, these fields automatically appear when browsing the LDAP (Deprecated) interface with Integration.

Integrating with LDAP (Deprecated) consists of Java LDAP API invocation using XML requests/responses set up over an LDAP protocol. The technical details of this connection, such as request headers, error handling, LDAP connection, etc. are all abstracted to simplify your implementation.

## Connector configuration 

To configure a connector to communicate with an LDAP server, set up these components:

-   LDAP (Deprecated) connection

-   LDAP (Deprecated) operation

-   LDAPMethods.properties


In the latest release, use the Attributes option to define the fields needed for integration.

This design provides reusable components, which contain connection settings \(such as URL, user name, password\) and operation settings \(such as Object, Action, data definitions\). After building your connection and operation, set up your connector within a process. When you have properly defined the LDAP (Deprecated) connector within your process, Integration can map to and from virtually any system using the connector to retrieve data from or send data to the LDAP server.

## Supported LDAP servers 

The LDAP (Deprecated) connector can connect to most of the common LDAP servers, including:

-   Microsoft Active Directory

-   ApacheDS

-   ADAM / AD LDS

-   OpenLDAP


## Prerequisites 
To implement a connection to your LDAP server from Integration, you must have permission to browse the Base Distinguished Name \(Base DN\) that is specified in the LDAP (Deprecated) operation.

## Supported objects 

The LDAP (Deprecated) connector supports the following objects:

-   Get user details
-   Query Users

-   Check for the existence of username in a group

-   Query Groups

-   Query Generic Object

-   Add a user to the directory

-   Add a group to the directory

-   Assign a user to a group

-   Add an object to the directory

-   Update a user in the directory

-   Remove a user from a group

-   Move or update a user/object Distinguished Name

-   Update an object in the Directory

-   Remove an object from the Directory


|Object|Get|Query|Create|Update|
|------|---|-----|------|------|
|Filter|Filter|Filter|Filter|Filter|
|Get user details|X| | | |
|Query Users| |X| | |
|Check for the existence of username in a group| |X| | |
|Query Groups| |X| | |
|Query Generic Object| |X| | |
|Add a user to the directory| | |X| |
|Add a group to the directory| | |X| |
|Assign a user to a group| | |X| |
|Add an object to the directory| | |X| |
|Update a user in the directory| | | |X|
|Remove a user from a group| | | |X|
|Move or update a user/object Distinguished Name| | | |X|
|Update an object in the Directory| | | |X|
|Remove an object from the directory| | | |X|


<TrackedProperties />