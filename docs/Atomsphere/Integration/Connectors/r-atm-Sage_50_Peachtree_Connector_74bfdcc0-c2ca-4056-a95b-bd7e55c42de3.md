import TrackedProperties from './_TrackedProperties.md'


# Sage 50/Peachtree connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-d42e2468-5b89-4de0-b503-7edc86d97e94"/>
</head>


The Sage 50/Peachtree connector lets you move data into and out of the Sage 50 financial application \(formerly, “Peachtree Accounting”\).

When connected directly to the Sage 50 data files, you can query, add, modify, and delete various types of records, such as Address, PayInfo, EmployerFields, Custom Fields, etc.

## Connector configuration 

To configure a connector to communicate with Sage 50, set up two components:

-   [Sage 50/Peachtree connection](r-atm-Sage_50_Peachtree_Connection_4eff9f55-646d-40bd-b2df-dc7d5b005990.md)

-   [Sage 50/Peachtree operation](r-atm-Sage_50_Peachtree_Operation_98eb6ffa-0f65-4293-80c5-fc8545f9c034.md)


This design provides reusable components, which contain connection settings such as user name, password, etc. After you build a connection and connector operation, set up your connector within a process. When your connector is configured properly within a process, Integration can map to and from virtually any system using the Sage 50/Peachtree connector to retrieve data from or send data to the Sage 50 application.

## Supported editions 

The following editions of Sage 50 are supported:

-   2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2018, 2022

-   Single and multiple user installations


All editions \(Quantum, Premium, etc.\) are supported for a given year of Sage 50.

## Prerequisites 

The Sage 50/Peachtree connector is supported on Windows only. The connector runs only on local Atoms — not in Atom Clouds. To implement a connection to Sage 50 from Integration, do the following:

-   Install a local Atom on a server running Sage 50. In client/server installations, install the Atom on a server. Also install a copy of the Sage 50 client application on the server.

-   Ensure the Atom is a 32–bit Atom. Windows COM libraries used to establish the connection support only 32 bit.

-   Run the Atom as a desktop application rather than as a Windows service. After installing the Atom, stop the Atom’s Windows service and disable it in the Windows Services Management Console. The Windows user under whom the Atom is running must always be logged in. For more information, see To Start or Configure an Atom to Run as a Desktop Application.

-   Dedicate a desktop user session to Integration. Even though the Sage 50 session stays open, do not use it.

-   Use the identical user name and password in the connector settings as in the Sage 50 product. Also use the Sage 50 company file in the connection settings to avoid access conflicts to the Sage 50 product operating through the connector.


Sage 50 is a desktop client-only application which does not support multiple concurrent sessions. To integrate with multiple company files in one Sage 50 installation, stop and then restart the Atom to initiate the connection to the new company file.

## Security 

When you create users for the Peachtree/Sage 50 connector, make sure that they are dedicated users. Do not share an Atom user on desktop or remote sessions. In Sage 50, on the main menu select **Maintain** \> **Users** \> **Setup Security...** Open the **User List** tab and click on **Edit User’s Rights** to see a list of authorized users. Set user rights to provide the right level of access \(Administrator, Full access, Selected access, or None\). To troubleshoot integration process startup problems, use the highest access level \(Admin\). If the integration process runs, lower the security level until the process fails, then go back to the lowest successful level. This ensures that you have configured security to the highest successful execution level.

Leave all **Password Options** blank.

There are some important things to know about Sage 50 installations with multi-user security enabled. These directions apply only to installations with user security configured. The Sage 50/Peachtree connector must use an active Sage 50 user session. The first time a process runs, it tries to connect to Sage 50. Then one of these scenarios occurs:

-   If Sage 50 is not running, the Atom starts Sage 50 with a login dialog from within the Sage 50 application.

-   If Sage 50 is running and a user is not logged in, Sage 50 opens a user dialog.

-   If Sage 50 is running and a user is already logged in, Sage 50 opens a user dialog. The Atom *cannot* use an existing session even if the session is for the desired company file. The Sage 50/Peachtree connector must initiate a new session.


Log in using the Sage 50/Peachtree connector account credentials and the company files assigned to the Atom. You do not need to log in again while both the Atom and Sage 50 are running.

*Stop the Atom before closing the Sage 50 session.* Check Task Manager to ensure `peachtree.exe` has completely shut down. If you attempt to shut down Sage 50 while the Atom is still connected, it invalidates the session and prevents Sage 50 from shutting down completely.

If you shut down Sage 50 and then reopen it manually, the Atom produces errors, such as `com.boomi.process.ProcessException: com.boomi.connector.ConnectorException: Error when execute PT GET:Error opening company:com4j.ComException: 80080005 CoCreateInstance failed : Server execution failed : ./com4j.cpp:135`. If this error occurs, restart the Atom. The Atom attempts to connect to a newly-opened Sage 50 application.

<TrackedProperties />