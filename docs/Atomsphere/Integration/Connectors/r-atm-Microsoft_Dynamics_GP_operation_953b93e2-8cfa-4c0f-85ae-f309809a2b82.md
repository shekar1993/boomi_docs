import OperationEnd from './_operationEnd.md'
import TrackingDir from './_TrackObject.md'
import ReturnErrRes from './_ReturnResponse.md'
import ReqRes from './_ReqRes.md'

# Microsoft Dynamics GP operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-953b93e2-8cfa-4c0f-85ae-f309809a2b82"/>
</head>


The Microsoft Dynamics GP operation defines how to interact with Great Plains data.

The operation represents an action \(Create, Query, Execute, Upsert\) performed against a Great Plains record type or object \(such as Customers, Sales Transactions, Purchase Orders\). Not all actions are available for every object. Create a separate operation component for each action and object combination required for your integration.

## Query 

The inbound Query action allows to look up object records based on specific search criteria. You supply static or dynamic request parameters \(filters\) to control selecting the object records. A single Query request can return zero or more object record documents. After selecting the Query connector action and using the **Import Wizard**, you can add query filters.

## Create 

Use the outbound Create action to insert data into your Microsoft Dynamics GP account.

## Execute 

For Microsoft Dynamics GP 2010 and 2013, the outbound Execute action exposes the following eConnect web service functions:

-   Create Entity
-   Create Transaction Entity
-   Delete Entity
-   Delete Transaction Entity
-   Dispose
-   Get Entity
-   Get Next GL Entry Journal Number
-   Get Next IV Number
-   Get Next PO Number
-   Get Next PO Receipt Number
-   Get Next RM Number
-   Get Next SOP Number
-   Get PM Next Voucher Number
-   Roll Back Documents
-   Update Entity
-   Update Transaction Entity

## Upsert 

The outbound Upsert action creates a new record if one does not exist; otherwise it updates the existing record.

## **Options** tab 

Click **Import Operation**, then use the Import wizard to select the object with which you want to integrate. The following table describes the default field definitions for each action type:



<TrackingDir />
<ReqRes />
<ReturnErrRes />

<OperationEnd />