import OperationEnd from './_operationEnd.md'
import TrackingDir from './_TrackObject.md'
import ReturnErrRes from './_ReturnResponse.md'
import ReqRes from './_ReqRes.md'


# Oracle CRM On Demand operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-fbab6803-34ce-4b7e-9f65-00031c196508"/>
</head>


The Oracle CRM On Demand operation defines how to interact with your Oracle CRM On Demand account.

Each operation represents a specific action performed against a specific Oracle CRM On Demand object type \(such as Core::Account, Partner::Accreditation\). Create a separate operation component for each object required for your integration.

The following services and objects are available when you use the inbound \(Get or Query\) actions and most outbound \(Create, Delete, or Update\) actions:

**Service Name** - 
 **Object Names**

**Webservice\_V2 \(core edition\)** - 
 Account, Activity, Asset, Book, Campaign, Category, Contact, Group, Lead, Note, Opportunity, Product, Service Request, Solution, Territory, and User. You can also access up to 15 custom objects, named Custom Object 01 through 15.

**Webservice\_V2 \(partner edition\)** - 
 Accreditation, Accreditation Request, Application, Certification, Certification Request, Course, Course Enrollment, Deal Registration, Exam, Exam Registration, Fund, MDF Request, Partner, Price List, Price List Line Item, Special Pricing Request, and Special Pricing Request Line Item.

**Webservice\_V2 \(life sciences edition\)** - 
 Allocation, Business Plan, Contact Best Time, Contact State License, Inventory Audit Report, Inventory Period, MedEd, Message Response, Messaging Plan, Messaging Plan Item, Messaging Plan Item Relation, Modification Tracking, Objective, Plan Account, Plan Contact, Plan Opportunity, Sample Disclaimer, Sample Inventory, Sample Lot, Sample Transaction, Signature, and Transaction Item.

**Webservice\_V2 \(financial services edition\)** - 
Claim, Coverage, Damage, Financial Account, Financial Account Holder, Financial Account Holding, Financial Plan, Financial Product, Financial Transaction, Household, Insurance Property, Involved Party, Policy, Policy Holder, and Portfolio.

**Webservice\_V2 \(automotive edition\)** - 
  Dealer and Vehicle.

## Get 

The inbound Get action retrieves a single record from the Oracle CRM On Demand object defined in the Get operation. The bottom half of the operation component page contains configuration options to choose the fields to return.

## Query 

The inbound Query action retrieves zero to many records from the Oracle CRM On Demand object defined in the Query operation based on zero or more filters. Use the **Child Object List Size** field in the Query operation to set the maximum number of records in a child object to return. If this is left blank, it uses the Oracle default of 10.

The bottom half of the **Operation** component page contains configuration options that allow you to choose the fields to return and add filters to limit the results.

## Create 

The outbound Create action generates new records in the Oracle CRM On Demand object defined in the Create operation.

## Delete 

The outbound Delete action removes existing records from the Oracle CRM On Demand object defined in the Delete operation.

## Execute 

The following services and objects are available when you use the outbound Execute action:

**Service Name** - 
 **Object Names**

**Administrative** - 
 Access Profile, Cascading Picklist, Custom Record Type, Custom Web Tab, Field Management, and Picklist.

**Service** - 
Deleted Item, Integration Event, Login History, Mapping Service, Merge, Metadata Change Summary, Picklist, Sales Process, Time, and User Usage.

## **Options** tab 

Click **Import Operation**, then use the Import wizard to select the object with which you want to integrate. The following table describes the default field definitions for each action type:


  

<TrackingDir />
<ReqRes />
<ReturnErrRes />

**Child Object List Size** \(Query only\)  
 The maximum number of records to return in a secondary object. If this is left blank, it uses the Oracle default of 10.

<OperationEnd />