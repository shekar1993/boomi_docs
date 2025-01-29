# Google Sheets connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-aa4fbd55-c8ee-424c-9c96-230fe08cf63d"/>
</head>


With the Google Sheets connector, you can create, delete, get, query, and update objects in Google Sheets.

Google Sheets is a web-based application that enables you to create, update, and modify spreadsheets and share data live online. Independent from the Google G Suite connector, this connector uses OAuth 2.0 for authentication and retrieves information in JSON format.

:::note

This is an open source connector and you can access the code in the [Google Sheets](https://bitbucket.org/officialboomi/google-sheets-openapi) connector repository.

:::

## Connector configuration 

To configure a connector to communicate with Google Sheets, set up these components:

-   Google Sheets connection

-   Google Sheets operation


## Supported objects 

The Google Sheets operations supports the following objects:

-   Spreadsheets
-   Sheets

-   RecordData


## Prerequisites

The Google Sheets connector requires the following:

-   A Google Client ID
-   The Client Secret for the account


This table lists additional prerequisite data that you might need to configure connector operations for the supported objects:

| Key                           | Spreadsheets | Sheets  | RecordData | Where to find                                                                                                                                                                 |
|-------------------------------|--------------|---------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Spreadsheet ID                | ✅           | ✅      | ✅          | The value in the spreadsheet URL between /d/ and /edit.                                                                                                                  |
| Spreadsheet Title             | ✅           | -       | -          | The name of the sheet or spreadsheet.                                                                                                                                     |
| Sheet Title                   | -            | ✅      | ✅          | The label of the active sheet.                                                                                                                                           |
| Index                         | -            | ✅      | -          | The sheet index, indicating the first and last columns (A:ZZZ), is the number Google assigns to the URL following gid=. For example, in the https://docs.google.com/spreadsheets/d/1z5jyhZtowx189HXqCDX1x2ApQT3-OTqIZ/edit#gid=1472184083, index is 1472184083. |
| Dynamically-generated field values | -       | -       | ✅          | -                                                                                                                                                                           |


## Tracked properties

This connector has no predefined tracked properties. See the topic [Adding tracked fields to a connector operation](../Process%20building/t-atm-Adding_tracked_fields_to_a_connector_operation_f71821dd-95ee-4ebd-bfc9-3333262f56f6.md) to learn how to add a custom tracked field.

