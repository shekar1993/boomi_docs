# Account Properties panel

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-ea74b337-5b47-49d0-8664-687816c4aa2d"/>
</head>

Set properties specific to an account and view the account’s quotas in the Cloud.

The Account Properties panel appears on the Atom Management page \(**Manage** \> **Atom Management**\). This panel is available if an Atom Cloud is selected or if the selected Atom is attached to an Atom Cloud.

:::note

You must have the Atom Management privilege to perform actions on the Account Properties panel. If you have the Atom Management Read Access privilege, you can view properties but not add, change, or delete them.

:::

The account properties shown on the Basic and Advanced tabs are a subset of the properties of the Atom Cloud’s properties. The Atom Cloud owner can set the Cloud’s properties and all of its accounts’ properties. An individual account can set only its own account properties.

The account properties that you see on the Basic and Advanced tabs are stored in the account’s `<installation\_directory\>/accounts/<accountID/conf/account.properties` file. Although you can edit these properties with a text editor, recommends editing the properties in the Account Properties dialog.

:::note

The property names that you see in the `<installation\_directory\>/accounts/<accountID/conf/account.properties` file are noted in the Property Description list below.

:::

![Information](Images/main-ic-information-in-blue-circle_fdc36265-a56b-4d11-bdfe-2183ae92e7b3.jpg) - On the Advanced tab, pointing your cursor at this icon displays the container property name as it appears in the account.properties file.

On the Cloud Attachment Quotas tab, pointing your cursor at this icon displays a description of the property.

![Delete](Images/main-ic-x-white-in-red-circle-16_0d0c5dc5-1c5e-4117-8a58-92c5e050ec5b.jpg) - Used on the Advanced tab to delete a property.

**Cancel** - Closes the dialog without changing any settings.

**Save** - Applies settings changes made on the Basic and Advanced tabs and closes the dialog.

## Basic tab 

**Atom Name**  
(Available if an Atom attached to an Atom Cloud is selected) Used to edit the display name of the selected Atom that is attached to an Atom Cloud.

`com.boomi.container.name`

**Purge History After X Days**  
See the topic about [purging logs and data](../Integration/Integration%20management/c-atm-Purging_of_Atom_Molecule_or_Cloud_logs_and_data_c3d9858e-c3de-4817-b08a-d8d6a5ac1e9a.md).

`com.boomi.container.purgeDays`

**Purge Data Immediately**  
See the topic about [purging logs and data](../Integration/Integration%20management/c-atm-Purging_of_Atom_Molecule_or_Cloud_logs_and_data_c3d9858e-c3de-4817-b08a-d8d6a5ac1e9a.md).

`com.boomi.container.purgeImmediately`

## Advanced tab 

**Archive Processed Documents**  
If selected, [processed document archiving](../Integration/Integration%20management/c-atm-Processed_document_archiving_1e1fedc4-b844-4dde-988a-875b4980cce9.md) is enabled for the selected Atom that is attached to a private Atom Cloud, provided the Atom Cloud owner has enabled archiving on the Atom Cloud and allowed archiving to be enabled for the selected Atom.

`com.boomi.container.account.archive.data`

**Default Time Zone for Account Schedules**  
Specify the time zone that an account’s process schedules run on. When adding a schedule to a process, the schedule uses the time zone of the machine in which the Atom, Molecule, or Atom Cloud is installed by default. However, setting this property overrides the time zones of process schedules across the account, so that all process schedules abide by the time zone set in the property.

This property accepts values that follow TZ Database Name conventions \(for example, America/New\_York or Europe/London\). Use the "TZ Database name column" within the [List of TZ database time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) Wikipedia article to view all accepted values.

`com.boomi.container.account.schedule.defaultTimeZone`

**Low Latency Warning Threshold**  
The amount of time after which an otherwise successful low latency process is flagged as a "warning". The value is in milliseconds. If you set it to a value less than or equal to zero, the warning is disabled. The Cloud does not have to be restarted after setting this property if you change it through the Properties dialog.

If this value exists in the `account.properties` file, then it is used. If the value does not exist in the `account.properties` file or if the `account.properties` file does not exist, then this value is read from the `container.properties` file.

`com.boomi.container.account.lowLatency.processElapsedWarnThreshold`

**Purge Schedule for Components**  
The number of days to wait before purging test execution and browse component data held on your Atom, Molecule, or private Atom Cloud. The default is set to 0, meaning the property is disabled until a user configures the property with a positive integer, enabling the purge.

Shared HTTP Server SSL Certificates and Certificate Authorization components are not purged as a result of enabling this property. See the topic about [purging logs and data](../Integration/Integration%20management/c-atm-Purging_of_Atom_Molecule_or_Cloud_logs_and_data_c3d9858e-c3de-4817-b08a-d8d6a5ac1e9a.md).

`com.boomi.container.component.purgeDay`

**Purge Schedule for Logs**  
See the topic about [purging logs and data](../Integration/Integration%20management/c-atm-Purging_of_Atom_Molecule_or_Cloud_logs_and_data_c3d9858e-c3de-4817-b08a-d8d6a5ac1e9a.md).

`com.boomi.container.logs.PurgeDays`

**Purge Schedule for Processed Documents**  
See the topic about [purging logs and data](../Integration/Integration%20management/c-atm-Purging_of_Atom_Molecule_or_Cloud_logs_and_data_c3d9858e-c3de-4817-b08a-d8d6a5ac1e9a.md).

`com.boomi.container.data.PurgeDays`

**Purge Schedule for Temporary Data**  
See the topic about [purging logs and data](../Integration/Integration%20management/c-atm-Purging_of_Atom_Molecule_or_Cloud_logs_and_data_c3d9858e-c3de-4817-b08a-d8d6a5ac1e9a.md).

`com.boomi.container.temp.PurgeDays`

## Cloud Attachment Quotas tab

Cloud owners and accounts that have an Atom attached to the Cloud can use this tab to view the account’s quotas \(also called properties\) in the Cloud. Account owners cannot change their quotas in the Cloud. Only Cloud owners can change an account’s quotas in the Cloud, and that must be done on the Cloud’s Attachment Quotas tab.

A link at the top of the tab takes Cloud owners to the Cloud Management page. For more information, see the Attachment Quotas Tab topic.
