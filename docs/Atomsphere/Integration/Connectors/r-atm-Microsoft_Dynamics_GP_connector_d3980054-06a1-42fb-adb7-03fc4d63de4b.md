import TrackedProperties from './_TrackedProperties.md'

# Microsoft Dynamics GP connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-a14d7b34-4982-4054-b621-d9b193e22e02"/>
</head>


Use the Microsoft Dynamics GP connector to move data into and out of the Microsoft Dynamics GP business accounting application.

The connector enables you to query, add, modify, and delete various types of records including Accounts, Customers, Sales Orders, Invoices, and more.

The connector uses an integration layer called [eConnect](http://msdn2.microsoft.com/en-us/library/aa973831.aspx) to exchange data with the Great Plains database. eConnect is a Microsoft API that facilitates the exchange of data by performing business validations and ensures data integrity. You implement it as a set of database stored procedures installed on the Great Plains database server. There is also an API component that accesses the stored procedures for all actions except the Query action. This connector invokes the API component installed as part of the eConnect runtime. It is important that you install eConnect before you attempt to connect to Great Plains.

## Connector configuration 

To configure a connector to communicate with Microsoft Dynamics GP, set up two components:

-   Microsoft Dynamics GP connection — The connection represents a specific Great Plains company database. Create one connection for each company database.

-   Microsoft Dynamics GP operation — The operation represents an action against a specific record type. Create one or more operations for each type of interaction needed for your integration scenario.


## Supported editions 

Boomi supports the following Microsoft Dynamics GP editions:

-   2010

-   2013/2015/2016/2018+


## Prerequisites 

To implement a connection to Microsoft Dynamics GP from Integration:

1.  Install Great Plains and the database.

2.  Set up a local Atom within your network to connect to the Great Plains SQL Server and eConnect. Boomi recommends that you install the Atom on the same server as eConnect and the Great Plains SQL Server to simplify the setup.

3.  Configure the connector with a Windows domain user that has access to the Great Plains SQL Server database machine. Create a SQL Server login for this domain user and grant the database user the DYNGRP role within the *DYNAMICS* database.

4.  Install the eConnect libraries.

    1.  The option to install eConnect is under the Additional Products section of the Great Plains installer. For more information, see the eConnect Documentation.

    2.  You do not need to install the full eConnect Runtime module.

    3.  Install the eConnect Integration Service to connect to the database.


The eConnect interfaces do not support every object and interaction available within Great Plains. To work with objects from other modules or more sophisticated queries, use the Database connector to connect to back-end database tables directly. Consult your eConnect documentation for more information about the table schemas. Use caution to maintain data integrity when accessing an application database table directly.

<TrackedProperties />