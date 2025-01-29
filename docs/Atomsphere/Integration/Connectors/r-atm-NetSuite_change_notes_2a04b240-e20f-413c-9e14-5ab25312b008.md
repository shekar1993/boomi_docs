# NetSuite change notes 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-2a04b240-e20f-413c-9e14-5ab25312b008"/>
</head>


These notes describe the supported NetSuite edition changes affecting the NetSuite connector and the integration.


## Changes with NetSuite 2023.2

For more information, see the [NetSuite 2023.2 Release Notes](https://system.netsuite.com/app/login/secure/enterpriselogin.nl?redirect=%2Fapp%2Fhelp%2Fhelpcenter.nl%3Ffid%3DReleaseNotes_2023.2.0.pdf&whence=) in the NetSuite Help Center, which requires sign-in credentials.

## Changes with NetSuite 2023.1

For more information, see the [NetSuite 2023.1 Release Notes](https://system.netsuite.com/app/login/secure/enterpriselogin.nl?redirect=%2Fapp%2Fhelp%2Fhelpcenter.nl%3Ffid%3DReleaseNotes_2023.1.0.pdf&whence=) in the NetSuite Help Center, which requires sign-in credentials.

## Changes with NetSuite 2022.1

For more information, see the [NetSuite 2022.1 Release Notes](https://system.netsuite.com/app/login/secure/enterpriselogin.nl?redirect=%2Fapp%2Fhelp%2Fhelpcenter.nl%3Ffid%3DReleaseNotes_2022.1.0.pdf&whence=) in the NetSuite Help Center, which requires sign-in credentials.


## Changes with NetSuite 2021.2

There are no new objects for NetSuite 2021.2.

For more information, see the [NetSuite 2021.2 Release Notes](https://nlcorp.app.netsuite.com/help/helpcenter/shared_resources/PDF/releasenotes_2021.2.0.pdf?whence=) in the NetSuite Help Center, which requires sign-in credentials.

## Changes with NetSuite 2021.1 

The following are available new NetSuite 2021.1 features:

-   **New Default Value of Available Without Login Field for File Cabinet Uploads** — As of the 2021.1 endpoint, the default value for the **Available Without Login** field when uploading images and web site hosting files to the File Cabinet is set to false.

-   **Changes for Name and Display Name Fields on Account Record** — This change impacts versions 2021.1 and 2020.2. The impacted fields and their expected behavior are as follows:

    |SOAP Endpoint Version|Name field|DisplayName field|
    |---------------------|----------|-----------------|
    |2021.1|Account Name|Account Number + Account Name|
    |2020.2|Account Name|Account Number + Account Name|
    |2020.1 and earlier|Account Number + Account Name|Not applicable|


## Changes with NetSuite 2020.2 

The following are new NetSuite 2020.2 features:

Deprecation of SOAP Web Services Authentication Through User Credentials

-   As of the 2020.2 SOAP web services endpoint, NetSuite does not support authentication using request-level credentials. The change does not affect web services integrations using 2020.1 and earlier endpoints. You can still use request-level credentials in those versions. However, Boomi encourages you to use token-based authentication.

New field for the currencyRate record

-   The currencyRateType field is available for the currencyRate record.

New subrecord for the Inbound Shipment record

-   The inventoryDetail subrecord is available for the Inbound Shipment record.

## Changes with NetSuite 2020.1 

The following are new NetSuite 2020.1 features:

Field Type Change in the Project Task Record

-   As of 2020.1, the field type of the remainingWork and actualWork fields in the project task record changes from double to duration type.

## Changes with NetSuite 2019.2 

The following are new NetSuite 2019.2 features:

Field Type Change for Two Fields Affecting Multiple Record Types

-   As of 2019.2, the fields laborResources and machineResources changed from long type to double type. These fields can now contain fractional values. Affected record types are: Entity Group, Manufacturing Operation Task, Manufacturing Routing, and Work Order Completion. Affected sublists are Routing Steps in the Manufacturing Routing record type and Operations in the Work Order Completion record type.

    **Note:** In , enter these fields as a Number in a profile, there are no profile changes.


Merchandise Hierarchy Versions Sublist Available Through SOAP Web Services for Multiple Record Types

-   As of 2019.2, the Merchandise Hierarchy Versions sublist is available for the following records types:
    -   AssemblyItem
    -   LotNumberedAssemblyItem
    -   SerializedAssemblyItem
    -   ServicePurchaseItem
    -   ServiceResaleItem
    -   ServiceSaleItem
    -   NonInventoryPurchaseItem
    -   NonInventoryResaleItem
    -   NonInventorySaleItem
    -   OtherChargePurchaseItem
    -   OtherChargeResaleItem
    -   OtherChargeSaleItem
    -   KitItem
    -   ItemGroup
-   The sublist contains the fields: hierarchyVersion, hierarchyNode, and isIncluded. The hierarchyVersion field is the sublist key.

New Fields and Sublist Available Through SOAP Web Services in Term Records

-   New fields and sublist is available for Term records:
    -   Installment
    -   recurrenceFrequency
    -   recurrenceCount
    -   splitEvenly
    -   repeatEvery
    -   percentages, percentage

Installment Sublist Available for Vendor Bill Records Through SOAP Web Services

-   As of 2019.2, the installment sublist and overrideInstallments body field are available for Vendor Bill records.

TaxDetails Sublist Available for Expense Reports Through SOAP Web Services

-   As of 2019.2, the taxDetails sublist is available for Expense Report records.

## Changes with NetSuite 2019.1 

These new NetSuite 2019.1 objects and supporting operations are available:

-   Customer Segment — Get
-   Customer-Subsidiary Relationship — Get, Query, Create, Update, Upsert, and Delete
-   Vendor-Subsidiary Relationship — Get, Query, Create, Update, Upsert, and Delete
-   Merchandise Hierarchy Node — Get, Query, Create, Update, Upsert, and Delete
-   Period End Journal Entry — Get, Query, Update

The NetSuite 2019.1 endpoint exposes the taxPointDate field in SuiteTax and is available for the following records:

-   Invoice
-   Cash Sale
-   Estimate
-   Opportunity
-   Cash Refund
-   Return Authorization
-   Purchase Order
-   Vendor Bill
-   Credit Memo
-   Journal Entry
-   Vendor Return Authorization
-   Vendor Credit
-   Sales Order
-   Expense Report

These new fields are available for the Customer Payment, Sales Order, Customer Deposit, Cash Refund, Customer Refund, and Cash Sale records:

-   paymentOption
-   paymentCardCsc
-   inputAuthCode
-   dynamicDescriptor
-   outputAuthCode
-   paymentProcessingProfile
-   handlingMode
-   paymentOperation
-   checkNumber
-   inputReferenceCode
-   outputReferenceCode

These new additions are available to the Execute operation:

-   Attach File to Intercompany Transfer Order
-   Attach Contact to Intercompany Transfer Order
-   Detach File to Intercompany Transfer Order
-   Detach Contact to Intercompany Transfer Order
-   Attach File to Transfer Order
-   Attach Contact to Transfer Order
-   Detach File to Transfer Order
-   Detach Contact to Transfer Order

## Changes with NetSuite 2018.2 

These new NetSuite 2018.2 objects are supported by the Get, Create, Update, Upsert, and Delete operations:

-   General Token
-   Payment Card
-   Payment Card Token

These new fields are available on the Vendor Payment record:

-   Available Balance
-   In-Transit
-   Approval Status
-   Next Approver

The Landed Cost sublist is available in the Inbound Shipment object.

The Tax Registration sublist is available in the Customer, Partner, and Vendor objects.

## Changes with NetSuite 2018.1 

Support for these new NetSuite 2018.1 objects include Create, Delete, Get, Query, Advanced Query, Update, and Upsert operations:

-   Bom
-   Bom Revision

## Changes with NetSuite 2017.2 

These new NetSuite 2017.2 objects are supported by selective operations:

-   Paycheck
-   Advanced Intercompany Journal Entry \(One World only\)
-   Inbound Shipment
-   HCM Job \(requires SuitePeople\)

These are new additions to the Execute operation:

-   Attach File to Purchase Requisition
-   Attach Contact to Purchase Requisition
-   Initialize Purchase Order from Purchase Requisition

## Changes with NetSuite 2016.2 

In the operation, you can override the Run Server SuiteScript and Trigger Workflows setting in NetSuite. However, support for this feature is only by using connections 2016.2 and higher. Because of the modularity of , where you can pair an operation with different connections, you can set an override that does not work if you use a connection earlier than 2016.2. In NetSuite, this setting enables server SuiteScripts and triggers workflows \(the default\) and is applied to the entire company.

## Changes with NetSuite 2016.1 

NetSuite 2016.1 did not add any new objects.

These improvements in the NetSuite connector 2016.1 release are compatible with previous versions:

-   Vendor Credit is available for the Upsert operation.
-   Enhanced Custom fields so that:

    -   Note and Expense Category import custom fields.
    -   Supports address custom fields, although NetSuite API the limits their visibility.

    -   In basic Query operations Location supports custom fields.

    -   In advanced Query operations many more secondary \(joined\) objects import custom fields.

    -   It imports company objects \(including Vendor, Partner, and Customer\) with their custom fields.


## Changes in NetSuite 2015.2 

For requests that use 2015.2 WSDL, it requires a new Application ID. It permits old Application IDs in requests that use the 2015.1 WSDL or earlier but are denied in requests that use the 2015.2 WSDL. See the NetSuite Connection help topic for more details.

The following elements are available in NetSuite 2015.2:

-   `tokenPassport` is added to message headers and to each operation’s input.

-   Addes `InvalidCredentialsFault` to the searchMore operation’s portType and binding objects.


In NetSuite 2015.2, you can define custom transactions after you enable this feature. For more information about custom transactions and how to enable this feature, see [Getting Started with Custom Transaction Types](https://system.na1.netsuite.com/app/help/helpcenter.nl?fid=section_4172853747.html) in the NetSuite Help Center. The NetSuite connector operations supports custom transactions and custom fields, for all Inbound actions \(Get, Query, and advanced searches\) and most Outbound actions \(Create, Delete, Update, and Upsert\). It supports custom fields only at the root element level, not in line items. It does not support the internal ID lookup \(GetSelectValue\) for Custom Transaction objects that are part of other objects.

For more information about changes in NetSuite, see the [NetSuite 2015.2 Release Notes](https://system.na1.netsuite.com/app/help/helpcenter.nl?fid=chapter_N3944673.html) in the NetSuite Help Center, to which you must have sign-in credentials.

## Changes in NetSuite 2015.1 

NetSuite 2015.1 did not add new objects.

Supports NetSuite’s Requisition object iin 2015.1.

For more information, see the [NetSuite 2015.1 Release Notes](https://system.netsuite.com/pages/login.jsp?rdt=/app/help/helpcenter.nl) in the NetSuite Help Center, to which you must have login credentials.

## Changes in NetSuite 2014.2 

NetSuite 2014.2 did not add new objects.

Some sub records changed, such as location and address.

For more information, see the NetSuite 2014.2 Release Notes.

## Changes in NetSuite 2014.1 

The following objects are available in NetSuite 2014.1 and supported by this connector in the Create, Delete, Get, Query, Update and Upsert actions:

-   Billing Schedule

-   Deposit

-   Global Account Mapping

-   Item Account Mapping

-   Resource Allocation

-   Statistical Journal Entry

-   Time Sheet — a new feature that requires enabling by NetSuite Customer Support. After enabling Time Sheet, it replaces the Time Tracking feature.


For more information, see the [NetSuite 2014.1 Release Notes and Web Services updates for version 2014.1](https://system.netsuite.com/pages/login.jsp?rdt=/app/help/helpcenter.nl) in the NetSuite Help Center, to which you must have sign-in credentials.

For more information, see the [NetSuite 2014.1 Release Notes](https://system.netsuite.com/pages/login.jsp?rdt=/app/help/helpcenter.nl) in the NetSuite Help Center, to which you must have sign-in credentials.

## Changes in NetSuite 2013.2 

The following objects are available in NetSuite 2013.2 and are supported by this connector in the following actions:

-   Charge — Create, Delete, Get, Query, Update and Upsert.

-   Inventory Cost Revaluation — Create, Delete, Get, Query, Update and Upsert.

-   Tax Control Account — Create, Get, Update and Upsert.


For more information, see the NetSuite 2013.2 Release Notes in the NetSuite Help Center.

NetSuite added the ability to specify search criteria for objects referenced through custom fields. The NetSuite connector supports *custom search joins* by exposing filters for objects referenced by customizations in the query filter list. See the NetSuite Operation’s Inbound Actions topic for more information.

For more information, see the [NetSuite 2013.2 Release Notes](https://system.netsuite.com/pages/login.jsp?rdt=/app/help/helpcenter.nl) in the NetSuite Help Center, to which you must have sign-in credentials.

## Changes in NetSuite 2013.1 

The following Manufacturing objects are available in NetSuite 2013.1 and are supported by this connector in the Create, Delete, Get, Query, Update, and Upsert actions:

-   Manufacturing Cost Template \(ManufacturingCostTemplate\)

-   Manufacturing Operation Task \(ManufacturingOperationTask\)

-   Manufacturing Routing \(ManufacturingRouting\)


The following Work Order objects are available in NetSuite 2013.1 and are supported by this connector’s Create, Delete, Execute, Get, Query, Update, and Upsert actions:

-   Work Order Close \(WorkOrderClose\)

-   Work Order Completion \(WorkOrderCompletion\)

-   Work Order Issue \(WorkOrderIssue\)


To work with the new Manufacturing objects, you need to [enable the Routing and Work Center feature](https://system.na1.netsuite.com/help/helpcenter/en_US/Output/Help/chapter_N2341076.html).

To work with the new Work Order objects, you need to have [Manufacturing WIP](https://system.na1.netsuite.com/help/helpcenter/en_US/Output/Help/section_N2335392.html) enabled and set up.

In NetSuite 2013.1 and later releases, the Execute action supports attaching Contacts to many types of transactions. For more information, see the linked NetSuite operation’s outbound actions topic.

For more information, see the [NetSuite 2013.1 Release Notes](https://system.netsuite.com/pages/login.jsp?rdt=/app/help/helpcenter.nl) in the NetSuite Help Center, to which you must have sign-in credentials.

## Changes in NetSuite 2012.2 

The following objects are available in NetSuite 2012.2 and later releases and are supported in the following actions:

-   Coupon Code \(couponCode\) — Create, Delete, Get, Query, Update and Upsert.

-   Currency Rate \(currencyRate\) — Create, Delete, Get, and Query.

-   Item Group \(itemGroup\) — Create, Delete, Get, Query, Update and Upsert.

-   Item Revision \(itemRevision\) — Create, Delete, Get, Query, Update and Upsert.

-   Item Supply Plan \(itemSupplyPlan\) — Create, Delete, Get, Query, Update and Upsert.

-   Paycheck Journal \(paycheckJournal\) — Create, Delete, Get, Query, Update and Upsert.

-   Payroll Item \(payrollItem\) — Create, Delete, Get, Query, Update and Upsert.


For more information, see the [NetSuite 2012.2 Release Notes](https://system.netsuite.com/pages/login.jsp?rdt=/app/help/helpcenter.nl) in the NetSuite Help Center, to which you must have login credentials.

## Changes in NetSuite 2012.1 

The Demand Planning object \(ItemDemandPlan\) is available in NetSuite 2012.1 and later releases. The Demand Planning object is supported in the following actions: Create, Get, Query, Update and Upsert.

This version added the following elements to existing objects:

-   Currency to Invoice and Purchase Order.

-   Allocation Type \(vsoeSopGroup\) to the Assembly Item, Download Item, Cash Refund, and Sales Orders objects.

-   Estimate \(vsoeIsEstimate\) to the Cash Refund and Sales Orders objects.

-   Standard Cost \(cost\) to the Locations element on the Assembly Item and Inventory Item objects.

-   Default ATP Method \(atpmethod\) and ATP Lead Time \(atpleadtime\) to the Locations element for the Assembly Item and Inventory Item objects.


For more information, see the [NetSuite 2012.1 Release Notes](https://system.netsuite.com/pages/login.jsp?rdt=/app/help/helpcenter.nl) in the NetSuite Help Center, to which you must have sign-in credentials.