import TrackingDirection from './_TrackingDirection.md'
import ReturnErrRes from './_ReturnResponse.md'


# ServiceNow operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-61b197a1-ff42-4230-9d15-292ffe162cf9"/>
</head>


The ServiceNow operation defines how to interact with your ServiceNow data.

The operation represents a specific action \(Create, Delete, Get, etc.\) to be performed against a specific ServiceNow record type or object \(Project, Account, Resource, etc.\). Make a separate Operation component for each action/object combination required for your integration.

The ServiceNow operation supports the following actions:

-   Inbound

    -   Get
    -   Query

-   Outbound

    -   Create
    -   Delete

    -   Update


The operation browses your object definitions in real time to get any fields you have defined. It is recommended that you use the Import Wizard to limit the number of tables that are returned. The connector returns a maximum of 500 tables. If you do not add a filter, every response up to the 500 table limit is returned. Wildcards are not enabled in filters.

Some actions have limitations or requirements:

-   Get/Delete — ID is a required parameter.
-   Create — You cannot add fields to the profile.

-   Query — The only available logical operator is AND.

-   Update — sysid is a required parameter.


## Options tab 

Click **Import Operation**, then use the Import wizard to select the object with which you want to integrate. The following table describes the default field definitions:




**Object** - 
 An object defines what you want to integrate.

<TrackingDirection />

<ReturnErrRes />


## Caching tab

See the topic [Connector operation’s Caching tab](../Process%20building/r-atm-Connector_operations_Caching_tab_f46b49d6-25bc-4337-ade1-9c67817b8d74.md) for more information.