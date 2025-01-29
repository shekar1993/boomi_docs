import TrackedProperties from './_TrackedProperties.md'

# QuickBooks Online connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-06f8ef69-f80a-49d2-a467-73ab5990a21e"/>
</head>


The QuickBooks Online connector enables you to move data into and out of the QuickBooks Online financial software.

The connector connects directly to your Online account so you can create, retrieve, return, update, and delete various types of objects such as accounts, customers, departments, purchase orders, sales orders, invoices, and more. You can also query the Trial Balance Report.

## Connector configuration 

To configure the connector to communicate with QuickBooks Online, set up two components:

-   QuickBooks connection. The connector uses the OAuth 2.0 protocol for authentication and authorization.

-   QuickBooks operation.


This design provides reusable components that contain connection settings and operation settings. After building your connection and operation, set up your connector within a process. When you correctly configure the QuickBooks Online connector within your process, Integration can map to and from virtually any system using the QuickBooks Online connector to move data into and out of QuickBooks Online.

## Supported editions 

The connector supports the QuickBooks Online REST API v3 minor version 14. For more information, see [this topic](https://developer.intuit.com/app/developer/qbo/docs/learn/explore-the-quickbooks-online-api/minor-versions).

## Prerequisites 

To use the connector and implement a connection to your QuickBooks Online account from Integration, have the following:

-   A local Atom or an Atom Cloud.
-   The base URL for the QuickBooks Online API service.
-   The QuickBooks Online company ID \(also called the Realm ID\) assigned by Intuit.
-   QuickBooks administrator rights.
-   A QuickBooks Online account.
-   An Intuit developer account to access the QuickBooks Online REST API’s service endpoint. For more information about creating an Intuit developer account, see [this topic](https://developer.intuit.com/app/developer/qbo/docs/get-started/start-developing-your-app).

## Supported objects 

The following objects are supported by one or more of the QuickBooks Online operation actions:

| Object           | Create | Get | Delete | Update | Query, Advanced Query | Report |
|------------------|--------|-----|--------|--------|----------------------|--------|
| Account          | X      | X   | X      | X      | X                    |        |
| Attachable       | X      | X   | X      | X      | X                    |        |
| Bill             | X      | X   | X      | X      | X                    |        |
| Bill Payment     | X      | X   | X      | X      | X                    |        |
| Budget           |        |     |        |        | X                    |        |
| Class            | X      | X   | X      | X      | X                    |        |
| Company          |        | X   |        | X      | X                    |        |
| Company Currency | X      | X   | X      | X      | X                    |        |
| Company Info     |        | X   |        | X      | X                    |        |
| Credit Memo      | X      | X   | X      | X      | X                    |        |
| Customer         | X      | X   |        | X      | X                    |        |
| Department       | X      | X   | X      | X      | X                    |        |
| Deposit          | X      | X   | X      | X      | X                    |        |
| Employee         | X      | X   |        | X      | X                    |        |
| Estimate         | X      | X   | X      | X      | X                    |        |
| Exchange Rate    |        | X   |        | X      | X                    |        |
| Invoice          | X      | X   | X      | X      | X                    |        |
| Item             | X      | X   |        | X      | X                    |        |
| Journal Entry    | X      | X   | X      | X      | X                    |        |
| Journal Code     | X      | X   | X      | X      | X                    |        |
| Payment          | X      | X   | X      | X      | X                    |        |
| Payment Method   | X      | X   |        | X      | X                    |        |
| Preferences      |        |     |        | X      | X                    |        |
| Purchase         | X      | X   | X      | X      | X                    |        |
| Purchase Order   | X      | X   | X      | X      | X                    |        |
| Refund Receipt   | X      | X   | X      | X      | X                    |        |
| Sales Receipt    | X      | X   | X      | X      | X                    |        |
| Tax Agency       | X      | X   |        |        | X                    |        |
| Tax Code         | X      | X   |        |        | X                    |        |
| Tax Rate         | X      | X   |        |        | X                    |        |
| Tax Return       |        | X   |        | X      | X                    |        |
| Term             | X      | X   |        | X      | X                    |        |
| Time Activity    | X      | X   | X      | X      | X                    |        |
| Transfer         | X      | X   | X      | X      | X                    |        |
| TrialBalance     |        |     |        |        |                      | X      |
| Vendor           | X      | X   |        | X      | X                    |        |
| Vendor Credit    | X      | X   | X      | X      | X                    |        |


<TrackedProperties />