import OperationEnd from './_operationEnd.md'
import TrackingDir from './_TrackObject.md'
import ReturnErrRes from './_ReturnResponse.md'

# Google G Suite operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-4e40828f-40dd-4d30-afab-1cf73d259f93"/>
</head>


The Google G Suite operation defines how to interact with your Google account and represents a specific action, such as Query and Create, to perform against a Google G Suite service and object types, such as Contact, Calendar, and Spreadsheet.

You must create a separate operation component for each object required for your integration. The Google G Suite operation supports the following actions:

-   Inbound: Get, Query

-   Outbound: Create, Delete, Update, and Upsert


## Options tab 

Click **Import Operation**, then use the Import wizard to select the object with which you want to integrate. You can use Google Data Extended Properties with Google Contacts and Google Contact Groups by adding the custom fields to the XML profile. The following information describes the default field definitions for each action type:

**Attention:** In recognition of [Google's end of support](https://developers.google.com/contacts/v3/announcement) for the Contacts and Spreadsheets APIs, the connector identifies both services as deprecated. When browsing and selecting the Google service to interact with \(**Service** field\), the Contacts service’s label appears as **Google Contacts \(Deprecated\)** and the Spreadsheet service's as **Google Spreadsheets \(Deprecated\)**.

-   **Google Contacts \(Deprecated\)** — Google strongly recommends that you migrate your apps to the People API. Rather than select the deprecated contacts service, we encourage you to use the new Google People service.

-   **Google Spreadsheets \(Deprecated\)** — recommends that you use the **Google Sheets** connector, which uses a newer API version, to interact with Google Spreadsheets. To learn more, see the topic [Google Sheets connector](r-atm-Google_Sheets_connector_5e7fbf2e-fe00-4556-ae9c-894d3561066e.md).





<TrackingDir />

**Request/Response Profile**   
The XML profile definition that represents the structure sent or received by the connector.

<ReturnErrRes />

**Service** - 
Select a Google service to interact with.

  -   Google Contacts \(Deprecated\)

        **Note:** Google strongly recommends that you migrate your apps to the People API. Rather than select the deprecated contacts service, we encourage you to use the new Google People service.

-   Google Calendar V2

 -   Google Calendar V3

        **Note:** For Execute, this is the only available service.

 -   Google Spreadsheets \(Deprecated\)

        **Note:** For Upsert, this is the only available service. Additionally, recommends that you use the **Google Sheets** connector, which uses a newer API version, to interact with Google Spreadsheets. To learn more, see the topic [Google Sheets connector](r-atm-Google_Sheets_connector_5e7fbf2e-fe00-4556-ae9c-894d3561066e.md).

 -   Google People


**Spreadsheet Title** \(Upsert only\)  
The title or name of the spreadsheet. Leave this blank if you are creating a spreadsheet.

## Get 

Get is an inbound action for which you supply a single internal ID for the object record that you want to retrieve for contacts, contact groups, calendars, calendar events, spreadsheets, worksheets, or worksheet rows. You can use Get to retrieve V3 calendar objects with multiple parameter IDs using the format `{parameter1}:{parameter2}`. For example, the ID for event is `{calendarId}:{eventId}`.

How to find Google G Suite internal IDs in the Google services

-   Contact IDs — Log into GMail, click the **Contacts** link, then click a contact. With the People service, the URL can appear as follows:

    https://contacts.google.com/u/0/person/c1078566562863268603?hl=en

    In this URL, identification of the person can be either of the following:

    -   The person's full ID: `person/c1078566562863268603`

    -   Just their ID: `c1078566562863268603`

-   Contact Group IDs \(user-created groups, not system groups\) — Log into GMail, click the **Contacts** link, then click a label. With the People service, the URL may appear as follows:

    https://contacts.google.com/u/0/label/792926dd8b3133bc?hl=en

    In this URL, the label can be identified by either of the following:

    -   The label's full ID: `contactGroups/792926dd8b3133bc`

    -   Just the ID: `792926dd8b3133bc`

-   Calendar IDs — Log into Google Calendar, click the **Calendars** link, click the **Settings** icon, and then select **Settings**. Click the **Calendars** link and click a calendar. The ID is in the **Calendar Address** section.

-   Spreadsheet IDs — Log into Google Docs, then click a spreadsheet. The `key=` parameter in the URL is the ID.

-   Calendar Event IDs, Worksheet IDs and Worksheet Row IDs are not available from the UI in the Google services.


## Query 

Query is an inbound action in which you query Google G Suite contacts, contact groups, other contacts, calendars, calendar events, spreadsheets, worksheets, or worksheet rows. The bottom half of the **Operation** component page contains configuration options so that you can choose the fields to return. The Query action returns zero-to-many object records from a single request based on zero or more filters that you add using the **Import Wizard**. You can also create sophisticated query logic by defining multiple expressions and putting them into logical subgroups. The operator at the logical group level defines how to evaluate the multiple expressions and logical subgroups within that logical group.

Guidelines to Query objects

-   Calendars — There is no filtering for calendars.

-   Calendar events — Include a `calendarId` filter parameter so the connector knows which calendar to query. You might get many results unless you use `start-min` or `start-max`because it returns every event created in the calendar. The date format for `start-min` and `start-max` is `yyyy-MM-dd'T'HH:mm:ss'Z'`.

    Optional parameters for filtering

    -   `start-min` — Retrieves only events that have a start date after this date.

    -   `start-max` — Retrieves only events that have a start date before this date.

    -   `q` — Full text query operator that searches the title and content of all events for any matches.

-   Contacts — Optionally filter by the content field \(`content`\) and the operator named `Matches Prefix Query`.

    -   If you apply this filter, the operation returns a maximum of 30 records.

    -   If you do not apply this filter, the operation returns all available records.
-   Contacts groups— There is no filtering for Contact groups. The operation returns all available records.

-   Other contacts — Optionally filter by the content field \(`content`\) and the operator named `Matches Prefix Query`.

    -   If you apply this filter, the operation returns a maximum of 30 records.

    -   If you do not apply this filter, the operation returns all available records.
-   **Spreadsheets** — Use the title and exact-match filters together to refine your queries. Queries do not return deleted spreadsheets.

    -   `title` — The title of the spreadsheet you want to query.

    -   `exact—match` — A true or false value that indicates if it requires an exact match when filtering on `title`.

    -   `q` — Full text query operator that searches the spreadsheet for any matches.

-   **Worksheets** — You can query all worksheets in a spreadsheet. Include a spreadsheetId filter parameter so that the connector knows which spreadsheet to query.

-   **Worksheet rows** — Include a worksheetId filter parameter so the connector knows which spreadsheet and worksheet to query and returns all rows in the specified worksheet. To be more selective, use the structured query parameter \(`sq`\) and provide an expression to filter the rows. For example, when `columnB` is equal to `cell-1B,` you can get all rows by setting the `sq` filter parameter equal to `columnB=cell-1B`.


## Create 

Create is an outbound action that creates one or more Google G Suite contacts, contact groups, calendars, calendar events, empty spreadsheets, empty worksheets, or worksheet rows following these rules:

-   When creating contacts, the connector uses batches. When the batch is greater than 200 records, the operation makes multiple requests, with a maximum size of 200 records.
-   When creating contact groups, the connector performs one request against the service for each input document.
-   When creating a calendar event, the ID field must contain the calendar's ID to which to add the event. Pass the calendar ID as the value of the calendar event’s ID element. The response from the Create action returns the calendar event with a new ID.
-   When creating a spreadsheet, supply the title from the title field on the request profile. Google creates an empty worksheet named “Sheet1” in the spreadsheet.

-   When creating a worksheet, the ID field must contain the ID of the spreadsheet to which to add the worksheet. You can also specify a title \(in the title field on the request profile\) for the worksheet and the number of columns and rows that the worksheet is to have.

-   When creating a worksheet row, the ID field must contain the ID of the worksheet to which to append the row. Enter the data for the row as elements whose names are the column names and text content is the cell data. For example, to add the following:

    |columnA|columnB|
    |cell–1A|cell–1B|

    Supply XML like this where `gsx` maps to https://schemas.google.com/spreadsheets/2006/extended:

    ```
    <gsx:columnA>cell-1A<gsx:columnA>
    <gsx:columnB>cell-1B<gsx:columnB>
    ```


## Delete 

Delete is an outbound action requiring a single internal ID for the object record that you want to delete. You can delete Google G Suite contacts, contact groups, calendars, calendar events, spreadsheets, worksheets, and worksheet rows following these rules:

-   When deleting contacts, the connector uses batches. When the batch is greater than 500 records, the operation makes multiple requests, with a maximum size of 500 records.
-   When deleting contact groups, the connector performs one request against the service for each contact group you want to delete.
-   Separate each parameter in the ID with a colon when deleting calendar V3 objects. For example, the ID for event is `{calendarID}:{eventID}`. If it requires an etag, add it to the end of the ID in square brackets.
-   You cannot delete system groups when deleting contact groups.

-   You cannot delete the last worksheet in a spreadsheet when deleting worksheets.


## Update 

Update is an outbound action where you supply a single internal ID for the object record that you want to update. You can update Google G Suite contacts, contact groups, calendars, calendar events, spreadsheets, worksheets, or worksheet rows. The update is a full update, so it deletes any fields that are blank or omitted. The following are limitations and guidelines for updating objects:

-   The connector updates contacts by performing one request against the service for each input document.
-   You cannot update a contact group’s membership. You can add contacts to or remove them from a group by updating group membership in the individual contact records.
-   When updating contact groups, the connector performs one request against the service for each input document.
-   For spreadsheets, you can update the title field only.

-   For worksheets, you can update title, rows, and columns.


## Upsert 

Upsert is an outbound action \(spreadsheets only\) where you can upsert a spreadsheet, worksheet, and worksheet rows in one step. First, supply a single internal ID for the object record — the spreadsheet, worksheet, or worksheet row — that you want to update. The Upsert operation determines if the spreadsheet, worksheet, or worksheet row that you specify exists, then either creates or updates the object record as needed. When Upsert creates a spreadsheet and worksheet, it overwrites the *Sheet1* default. The Upsert action can check for spreadsheets and worksheets by ID or title. If you update based on the title, leave the spreadsheet ID and worksheet ID fields blank because that is the primary way of finding either object.

<OperationEnd />