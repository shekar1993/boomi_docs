import TrackedProperties from './_TrackedProperties.md'

# Zuora REST connector

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-e6853d3d-76df-4f07-93ed-d1b5de3b77f3"/>
</head>


The Zuora REST connector enables you to connect to your Zuora’s automated operations like Z-Billing, Z-Payments, and Z-Tax.

## Connector configuration 

To configure the connector to communicate with Zuora, set up two components:

-   Zuora REST connection

-   Zuora REST operation


This design provides reusable components containing connection settings and operation settings \(such as Object, Action, data definitions\). After building your connection and operation, set up your connector within a process. When the Zuora REST connector is configured properly within your process, Integration can map to and from virtually any system using the connector to retrieve data from or send data to the Zuora environment. The linked Zuora API documentation contains valuable information about common scenarios, such as Customer Account creation, Payment creation, and Subscription creation.

## Prerequisites 

-   To use the connector and implement a connection to Zuora from Integration, have the following:
    -   Base URL
    -   Access Token URL
    -   API Access Key ID
    -   API Secret Access Key
    -   Entity ID or Entity Name for Zuora Multi-entity
-   UTF-8 encode input JSON documents to preserve special characters and ensure the operations work properly.

## Supported editions 

The connector supports the Zuora v1 API major version.

## Supported objects 

The following objects are supported by one or more of the Zuora REST operation actions. The connector does not currently support the POST\_Attachments, POST\_MassUpdater, POST\_Usage, and Object\_POSTImport operations.

:::note

You can add any field that you want to an input profile. By doing so, you can also include Zuora platform custom fields. All fields, including custom fields, are sent to the related Zuora endpoint.

:::

| **Object** | **Create** | **Delete** | **Execute** | **Get** | **Query** | **Update** |
|----------------------------|:--------:|:--------:|:---------:|:-----:|:-------:|:--------:|
| AcceptUserAccess | | | X | | | |
| Account | X | | | X | | X |
| AccountingCode | X | X | | X | | X |
| AccountingPeriod | X | X | | X | | |
| AccountSummary | | | | X | | |
| Actionamend | | | X | | | |
| Actioncreate | | | X | | | |
| Actiondelete | | | X | | | |
| Actionexecute | | | X | | | |
| Actiongenerate | | | X | | | |
| Actionquery | | | X | | | |
| ActionqueryMore | | | X | | | |
| Actionsubscribe | | | X | | | |
| Actionupdate | | | X | | | |
| ActivateAccountingCode | | | X | | | |
| AllAccountingCodes | | | | | X | |
| AllAccountingPeriods | | | | | X | |
| AllOrders | | | | | X | |
| AllSummaryJournalEntries | | | | | X | |
| AmendmentsByKey | | | | X | | |
| AmendmentsBySubscriptionID | | | | X | | |
| ApplyCreditMemo | | | | | | X |
| ApplyPayment | | | | | | X |
| Attachments, AttachmentsList | | X | | X | X | X |
| BasicSummaryJournalEntry | | | | | | X |
| BatchUpdateDebitMemos | | | | | | X |
| BatchUpdateInvoices | | | | | | X |
| BillingDocuments | | | | | X | |
| BillingPreview | X | | | | | |
| BillingPreviewRun | X | | | | | |
| BreakdownCreditMemoByOrder | | | | X | | |
| BreakdownInvoiceByOrder | | | | X | | |
| CalloutHistory | | | | | X | |
| CancelAuthorization | | | X | | | |
| CancelCreditMemo | | | | | | X |
| CancelDebitMemo | | | | | | X |
| CancelPayment | | | | | | X |
| CancelRefund | | | | | | X |
| CancelSubscription | | | X | | | |
| Catalog | | | X | | X | |
| CloseAccountingPeriod | | | X | | | |
| CM_TaxationItems | X | | | | | |
| Connections | | | X | | | |
| createToken | X | | | | | |
| CreateAndRetrieveExport | | | X | | | |

<TrackedProperties />