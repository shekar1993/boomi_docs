# Setting up user accounts and access 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-5f47b2da-d5cc-4c88-bdfd-0a255d69323a"/>
</head>

Administrators give a Boomi Enterprise Platform user access to one or more Boomi accounts using their unique email address. User management is performed in Integration. Administrators assign a role to a user to control their access to areas in Master Data Hub.

Administrators can control general account and user settings for all Boomi Enterprise Platform services by navigating to **User Information** \> **Account Information and Setup**. Administrators can configure user access in **User Information** \> **Account Information and Setup** \> **User Management**. Read [User management settings](/docs/Atomsphere/Platform/r-atm-User_management_baf961e2-b480-4fca-a3f5-8262aed6c031.md) to learn more about general settings for the platform.

Administrators can assign a role to a user for a specific account. Roles contain a list of privileges. A privilege is an allowable action or access to a specific area of platform.

There are several default Boomi DataHub roles with a predefined list of privileges.

-  MDM Administrator
-  MDM Standard User
-  MDM Data Steward
-  MDM Developer
-  MDM View Only
-  MDM Privileged Data Steward

Instead of assigning a predefined role, you can [create custom roles](/docs/Atomsphere/Master%20Data%20Hub/Getting%20started/t-hub-Creating_custom_roles_10e7d3e0-11fc-11ee-be56-0242ac120002.md) for users and restrict access to specific objects or areas in Master Data Hub using [Hub role entitlements](docs/Atomsphere/Master%20Data%20Hub/Getting%20started/t-hub-Creating_Hub_Role_Entitlements_06d21275-b0c6-4854-abef-5782326aa85b.md). This option is available with the Advanced User Security feature, which is available in the Enterprise and Enterprise Plus Editions, and as an add-on to the Professional and Professional Plus Editions.

The table below shows the predefined standard roles for users, the privileges assigned to each role, and descriptions of the privileges.

|Privilege|Description|MDM Administrator|MDM Standard User|MDM Data Steward|MDM Developer|MDM View Only| MDM Privileged Data Steward|
|---------|-----------|-----------------|-----------------|----------------|-------------|-------------|--------|
|MDM - Activity Reporting|View inbound and outbound activity reports.|Included|Included|Excluded|Included|Excluded|Excluded|
|MDM - Batch Management|Resubmit batches.|Included|Excluded|Excluded|Excluded|Excluded|Excluded|
|MDM - Dashboard|Access the Dashboard page.|Included|Excluded|Excluded|Excluded|Excluded|Excluded|
|MDM - Edit Models|Add, update, delete, and publish models.|Included|Included|Excluded|Included|Excluded|Excluded|
|MDM - Historical Reporting|Build and view historical reports.|Included|Included|Excluded|Included|Excluded|Excluded|
|MDM - Model Deployment|Deploy models or newer or older versions of previously deployed models. View authentication tokens.|Included|Included|Excluded|Included|Excluded|Excluded|
|MDM - Model Removal|Undeploy models. Clear data for deployed models.|Included|Excluded|Excluded|Excluded|Excluded|Excluded|
|MDM - Repository Management|Create and delete repositories. Modify repository properties. View and generate authentication tokens. Monitor repository activity.|Included|Excluded|Excluded|Excluded|Excluded|Excluded|
|MDM - Source Attachment|Attach/remove sources to/from deployed models, modify the channel configuration of attached sources, and add and manage staging areas for attached sources.|Included|Included|Excluded|Included|Excluded|Excluded
|MDM - Source Management|Create and delete sources, manually propagate channel updates, propagate channel updates in bulk, delete pending channel updates, and unlink golden records from sources.|Included|Excluded|Excluded|Excluded|Excluded|Excluded|
|MDM - Stewardship|Access the Stewardship menu.|Included|Included|Included|Excluded|Excluded|Included|
|MDM - Stewardship Management|View and assign entitlements to account users.|Included|Excluded|Excluded|Excluded|Excluded|Excluded|
|MDM - View Data|View domain data, quarantine entries, batch reporting, delivery reporting, and pending channel update requests.|Included|Included|Included|Excluded|Excluded|Included|
|MDM - View Logs|View and download repository logs.|Included|Included|Excluded|Included|Excluded|Excluded|
|MDM - View Models|View model definitions on the Models page.|Included|Included|Included|Included|Included|Included|
|MDM - View Repositories|View summary information about repositories. View summary information for deployed models, including their sources.|Included|Included|Included|Included|Included|Included|
|MDM - Reveal Masked Data | View masked field values in golden records, quarantine entries, staged entities, and on the inbound/outbound activity pages. |Included|Excluded|Excluded|Excluded|Excluded|Included

## Assigning a predefined role 

1.  In the Boomi Enterprise platform, navigate to **Settings** \> **Account Information and Setup** \> **User Management**.
2.  Do one of the following:
    -   For existing users:
        1.  Select the user and click the **Edit** icon.
        2.  Select the Boomi DataHub role or roles.
        3.  Click **OK**.
    -   For new users:
        1.  Click the plus icon to create a new user.
        2.  Enter the new user’s email address and name.
        3.  Select the Boomi DataHub role or roles.
        4.  Click **OK**. The new user will receive a registration email.