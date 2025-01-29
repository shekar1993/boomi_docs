# Creating an Operation

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-bc324fb1-3e09-481c-9151-dd828b77125d"/>
</head>


Creating any Pricefx operation \(Query, Get, Fetch, Upsert, Delete, Truncate, Datamart Refresh, ...\) follows the same general steps.

1.  In the **Process** screen go to the step library and search for "pfx-connector". Drag & drop it to the work area.

2.  The configuration window of the Connector step opens. Fill in the following:

    1.  Display Name — Any name of your choice.

    2.  Connector — Already pre-filled by the previous step.

    3.  Action — The options are:

        For Master Data, Price Parameters — Query, Get, Fetch, Upsert, Delete, Bulk Data Load, Metadata

        For PriceAnalyzer — Upload Data, Get, Fetch, Datamart Refresh, Truncate, Bulk Data Load, PA Data Upload

        For Quotes — Create, Get, Fetch, Delete, Update, Quote Operations

        For Product Images — Product Image Operations

        For Users — Get, Fetch, Upsert, Delete

        for User Access \(Business Roles, Roles, User Groups\) — User Access Operation, Metadata

        For Price List, Live Price Grid, Manual Price List and Items — Get, Fetch, Query, Metadata

    4.  Connection — Described in the previous section.

    5.  Operation — Click the "+" icon to import the object type and specify its parameters.

3.  Click **Import**to launch the**Import Wizard**.

4.  In the **Import Wizard**set up the following:

    Which Atom to use

    Which Connection to use

5.  Select the type:

    -   Product
    -   Customer
    -   Product Extension
    -   Customer Extension
    -   Price Parameters
    -   Data Feed
    -   Data Load
    -   Data Source
    -   Datamart
    -   Quote
    -   Submit/Withdraw Quote
    -   Duplicate/Revise Quote
    -   Manual Price List
    -   Price Grid
    -   Price List
    -   Manual Price List Item
    -   Price Grid Item
    -   Price List Item
    -   User
    -   Business Role
    -   User Group
    -   Update Business Roles
    -   Update Roles
    -   Update User Groups
    -   Log out
    -   Get Token
    -   Product Image Upload
    -   Product Image Exist
    -   Product Image Delete
    -   Upload Status Check
    -   Get by TypedId
6.  For Product and Customer Extensions, the table has to be selected in the same screen.

7.  Click **Next**and import the required operation interface. Its configuration screen opens.



:::note

Metadata fields imported to the interface are "readonly" and are just for reference. Price Parameters - Metadata fields are only supported for Matrix Price Parameters. Field names are not allowed to be modified for Simple and Range Price Parameters.

:::