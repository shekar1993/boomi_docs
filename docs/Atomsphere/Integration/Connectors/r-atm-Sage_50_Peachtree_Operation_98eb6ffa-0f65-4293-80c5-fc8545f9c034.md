import TrackingDirection from './_TrackingDirection.md'
import ReturnErrRes from './_ReturnResponse.md'
import OperationEnd from './_operationEnd.md'

# Sage 50/Peachtree operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-98eb6ffa-0f65-4293-80c5-fc8545f9c034"/>
</head>


The Sage 50/Peachtree operation defines how to interact with your Sage 50 \(formerly, Peachtree\) data file.

The operation represents a specific action \(Add, Modify, etc.\) performed against a specific Sage 50 record type or object \(GL Entries, Customers, Sales Orders, etc.\). Not all actions are available for every object. You must create a separate operation component for each action/object combination required for your integration.

Sage 50 Upsert operation differs slightly from many other connectors' operations because the action is not explicitly defined. Instead, it is determined dynamically by Sage 50 based on the data contained in the request. If the request contains an ID and the ID exists, the record is updated. If the request does not contain an ID \(or if the one provided does not exist\), the record is added.

The operation supports the following actions:

-   Delete

-   Query

-   Upsert


## Options tab 

Click **Import Operation**, then use the Import wizard to select the object with which you want to integrate. The following table describes the default field definitions for each action type:

  


<TrackingDirection />

**Request Profile** \(Delete and Upsert only\)   
The XML profile definition that represents the XML structure that is being sent by the connector.

**Response Profile** \(Query only\)   
 The XML profile definition that represents the XML structure that is being received by the connector.

**Identifier Type** \(Delete only\)    
 The type of identifier that is used to delete records. The options are:

 -   Default Object Type \(may be compound\) — Can be a compound value \(separated by a “:”\) or a single value, depending on the object type.

-   Vendor ID and Object ID — Objects that can be referenced by a Vendor ID must use this type. They have a default ID like “vendorId:objectId”.

 -   Customer ID and Object ID — Objects that can be referenced by a Customer ID must use this type. They have a default ID like “customerId:objectId”.

 -   GUID — Use a globally unique identifier.

<ReturnErrRes />


## Filtering queries 

In Sage 50/Peachtree, queries are filtered, by default, by the current period in which data is processing. You can change this behavior in one of two ways:

-   In Sage50/Peachtree, change the current period.
-   In the Sage50/Peachtree connector Query operation, add a filter. For example, Field \*DateFilter\(MM-DD-YYYY\), and Operator "This Year". You can also enter custom date ranges.

## Changes in Peachtree 2012 and Sage 50 2013 

In the Peachtree 2012 and 2013 editions the `EmployeeList` object profile has new definitions for `EmployeeFields/EmployeeField` and `EmployerFields/EmployerField`.

## Changes in Sage 50 2014 

In the Sage 50 2014 edition the following fields were added to the XML profile.

These payment fields were added to the `VendorList` object:

-   `UsePaymentDefaults`

-   `DefaultPaymentMethod`

-   `DefCashAcct_RecNum`


The `DefaultPaymentMethod` field was added to the `PaymentsJournal` object.

## Changes in Sage 50 2016 

A new field, JournalKey, is available on the CashReceiptsJournal object.

## Changes in Sage 50 2018-2022 

In the Sage 50 2022 edition the following additional fields of the `EmployeeList` object are available:

-   `Special3Allowance`

-   `Special4Allowance`

-   `Special5Allowance`

-   `Special3_Number`

-   `Special4_Number`

-   `Special5_Number`

-   `UsesW4PriorTo2020`

-   `MultipleJobs`

-   `FederalDependentAmount`

-   `FederalOtherIncomeAmount`

-   `FederalDeductionAmount`

-   `RateNumber` fields from `PayInfo1RateNum` to `PayInfo20RateNum`

<OperationEnd />