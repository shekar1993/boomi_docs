# Google G Suite connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-5796460e-4744-4ae2-b136-2ea98520525b"/>
</head>


The Google G Suite connector enables you to integrate with the Google G Suite platform’s Contacts, Calendar, and Spreadsheets services.

You can use this connector to do the following:

-   Create, edit, delete, and search for Google contacts and contact groups.

-   Create, edit, delete, and search for calendars and events in Google Calendar.

-   Read and modify the data in Google Spreadsheets.


You can use Google Data Extended Properties with Google Contacts and Google Contact Groups by adding custom fields to the XML profile.

## Connector configuration 

To configure a connector to communicate with Google G Suite, set up two components:

-   Google G Suite connection

-   Google G Suite operation


You can create one Google G Suite connection for each Google account with one or more Google G Suite operations, one for each type of interaction required by your integration scenario.

You can reuse components, containing connection settings \(such as user name and password\) and operation settings \(such as Object, Action, data definitions\). After building your connection and operation, set up your connector within a process. When you define the Google G Suite connector correctly within your process, Boomi Integration can map to and from virtually any system using the connector to retrieve data from or send data to Google G Suite.

## Processing special characters

To process special characters in the Google G Suite connector, the data must be UTF-8 encoded. You can do this when running a local Atom on Windows by doing one of the following:

-   Adding the line `-Dfile.encoding=utf-8` to the `atom.vmoptions` file.

-   Converting special characters in a **Data Process** step setting **Character Encode** to UTF-8.

-   Converting the data source.


## Supported editions 

Boomi Integration supports the following editions:

-   Google People API version 1.0

    :::note 
    Boomi strongly recommends that you migrate your apps from the deprecated Google Contact API to the People API. For more information about the deprecation, what's changing, and the steps you need to complete, see [Google's announcement](https://developers.google.com/contacts/v3/announcement).

    :::

-   Google Calendar API version 3.0

-   Google Sheets API version 3.0

    :::note 

    Boomi recommends using the Google Sheets connector, which uses a newer API version, instead of Google Spreadsheets. To learn more, see the topic [Google Sheets connector](r-atm-Google_Sheets_connector_5e7fbf2e-fe00-4556-ae9c-894d3561066e.md).

    :::


Spreadsheet file management operations use the Google Drive API. The Google Drive API does not have an exact match property filter as did the older and no longer available Google Docs API. As a result, filters by title uses the CONTAINS operator instead of the EQUAL operator. Operations on worksheets and worksheet rows still use the Google Sheets API.

## Prerequisites 

The Google G Suite connector requires that you have a Google account.

## Tracked properties

This connector has no predefined tracked properties. See the topic [Adding tracked fields to a connector operation](../Process%20building/t-atm-Adding_tracked_fields_to_a_connector_operation_f71821dd-95ee-4ebd-bfc9-3333262f56f6.md) to learn how to add a custom tracked field.

