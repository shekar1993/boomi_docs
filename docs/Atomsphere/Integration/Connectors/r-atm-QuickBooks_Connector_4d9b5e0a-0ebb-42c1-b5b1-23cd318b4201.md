import TrackedProperties from './_TrackedProperties.md'

# QuickBooks connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-1559b7ca-80fd-4902-863d-663b43ee464e"/>
</head>


The QuickBooks connector enables you to move data into and out of QuickBooks financial software.

The connector connects directly to the QuickBooks company data file \(`*.QBW`\) or online account. The connector enables you to query, add, modify, and delete various types of records, including accounts, customers, sales orders, and invoices.

The QuickBooks connector creates a folder in the `${atom_installation_directory}/work/quickbooks_host` directory where it writes a temporary registry file. This file allows the connector to make a single modification in the Windows registry to set up the connection.

## Connector configuration 

To configure a connector to communicate with QuickBooks, set up two components:

-   QuickBooks connection
-   QuickBooks operation

This design provides reusable components, which contain connection settings such as user name and password. After building your connection and operation, set up your connector within a process. When you configure your connector correctly within your process, Integration can map to and from virtually any system using the QuickBooks connector to retrieve or send data to QuickBooks.

## Supported editions and versions 

Boomi supports the following editions and versions:

-   Local QuickBooks Desktop Edition
    -   Pro, Premier, and Enterprise Editions
    -   General Business, Contractor, Manufacturing and Wholesale, Nonprofit, Professional Services, and Retail editions
    -   Global, US, Canada, and UK Editions
    -   Connectivity to the 2002 edition and later
    -   QuickBooks 2002 \(R1\) and \(R2\), 2003 \(prior to R7 and R7 and above\), 2004, 2005 \(prior to R5 and R5 and above\), 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014 and later \(2017\)
-   QuickBooks Online Edition \(This legacy edition is not available to new users after the May 2014 release.\)
    -   Simple Start and Plus Editions
    -   QB SDK versions 2.0–8.0 and 10.0–13.0. This corresponds to QuickBooks 2002–2014.
-   QuickBooks Online REST API
    -   Intuit’s QuickBooks Online edition supports V3 API version 7.

## Unsupported editions 

Boomi does not support the following editions:

-   QuickBooks for Mac \(all editions\)
-   QuickBooks Desktop Simple Start Edition
-   QuickBooks Point of Sale
-   QuickBooks Desktop Australia Editions

## Prerequisites 

General prerequisites:

-   You must have QuickBooks administrator rights.


Prerequisites for Desktop editions:

-   You must have an Atom deployed to the machine where you install a QuickBooks client application.

-   You must configure QuickBooks to authorize Integration to connect to your company file. You can find instructions in the connection configuration.

-   The Atom *must be a 32–bit Atom* if you are using Windows. The Windows COM libraries used to establish the connection support only 32 bit.

-   The Atom *must run* in desktop mode, rather than as a Windows service. In addition, Windows users must always sign into the machine.

-   The Windows user who is running the Atom must have network access with permissions to read and write the company data file \(`*.QBW` file\) if the data file resides on a different machine than the client.

-   Allow the QuickBooks company file to use integrated applications by going into the QuickBooks company file \(**Edit** \> **Preferences** \> **Integrated Applications** \> **Company Preferences**\) and ensuring that **Don't allow any applications to access this company file** is clear.


Steps to set up Desktop editions in a distributed or multiple-user environment. If you have multiple users accessing a single QuickBooks company file in a shared location or server:

1.  Authorize the Atom to connect as the Admin user.
2.  Install a QuickBooks client on the central server, even if not used by users. The Atom needs certain libraries contained within the client installation.

3.  Sign into QuickBooks on the same machine where you install the Atom; it does the one-time authorization for the Atom to connect to QuickBooks.

4.  Create a separate Windows user to run the Atom. The Atom must run as a desktop application under a specific Windows user, which can be a Local user.

5.  Ensure that the Windows user is always signed into the server. You can lock the user session but not sign out. Signing out of the server causes the Atom to stop running. If the user signs onto the server twice, it causes two Atom instances to run. It can result in conflicts as both Atoms try to access QuickBooks simultaneously.

6.  Prevent others from signing into QuickBooks as the Admin user, which can cause conflicts.

7.  Have users log into QuickBooks in multiple-user mode for normal business. If a user logs in under single-user mode, the Atom is prevented from connecting to the company file. Some administrative functions can be performed only in single-user mode so be aware that the integration stops during those times. When the administrative work is complete, switch back to multiple-user mode. The integration picks up where it left off.

8.  Close the QuickBooks client on the server when users switch to single-user mode.


Prerequisites for QuickBooks Online Edition:

-   You must have a QuickBooks Online account.

-   You must obtain an Application Connection Ticket to authorize Integration to connect to your account. See the topic about generating a QuickBooks Application Connection Ticket.


Prerequisites for the QuickBooks Online REST API 2013 Edition:

-   You must have a QuickBooks Online account.

-   You must create an Intuit developer account to access the QuickBooks Online REST API’s service endpoint and authorize Integration as a QuickBooks REST API application. See the help topics Intuit Partner Platform, Authorizing Integration with QuickBooks, and Adding a QuickBooks connection that uses the Online REST API.


<TrackedProperties />
