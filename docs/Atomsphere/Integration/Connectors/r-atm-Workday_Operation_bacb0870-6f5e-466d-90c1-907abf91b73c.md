import OperationEnd from './_operationEnd.md'
import TrackingDirection from './_TrackingDirection.md'
import ReturnErrRes from './_ReturnResponse.md'
import ReqRes from './_ReqRes.md'

# Workday operation

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-bacb0870-6f5e-466d-90c1-907abf91b73c"/>
</head>


The Workday operation defines how to interact with your Workday account and represents a specific action to be performed against a specific Workday object type \(`Adjust\_Time\_Off`, `Add\_Dependent`, `Add\_Stock\_Grant, etc.`\).

The Workday connector operation supports the Execute action. You must create a separate operation component for each object required for your integration.

When importing profiles, date and dateTime fields should be in one of two formats that are supported: date `yyyy-MM-ddZZ` and dateTime `yyyy-MM-dd'T'HH:mm:ss.SSSZZ`.

:::note

During an import, if you choose to filter by Workday operation, filters must be entered exactly as they appear in Workday.

:::

## Options tab 

When you create a new operation or want to change the service specified, use the **Options** tab. Click **Import Operation** to use the Import wizard and select the object you want to integrate with. An import is always required to change the **Service Name**, **Custom Service Name**, and to re-import objects. Otherwise, the component XML is not updated.

The following fields appear on the **Options** tab:

**Connector Action** - 
The **Connector Action** field is set to **Execute** and is not configurable.

**Object** - 
An object defines what you want to integrate or the action to run, which you select in the **Import Operation** wizard.

<TrackingDirection />

<ReqRes />

<ReturnErrRes />

**Return All Pages** - 
If selected, the connector makes repeated calls to the endpoint so that all pages are returned as separate documents.

If cleared, the maximum number of documents returned is the default of 100.

:::note 

Paging works only when Response\_Filter is present in the request and Response\_Results is present in the response.

:::

**Service Name** -
The name of the Workday service you want to interact with. For new operations or to change the service, click **Import** and select the Workday service you want to use.

:::note

You must select **Custom** to specify a Workday service that is available to your account, but not displayed in the drop-down list. The **Service Name** field always takes precedence over **Custom Service Name**.

:::

  The Workday connector supports the following services:

 -   Custom

  -   Absence Management

 -   Academic Advising

 -   Academic Foundation

 -   Admissions

  -   Benefits Administration

 -   Campus Engagement

-   Cash Management
  
  -   Compensation

 -   Compensation Review

 -   Delegated Authentication
  
 -   Dynamic Document Generation

 -   External Integrations

 -   Financial Aid

 -   Financial Management

 -   Human Resources

 -   Identity Management

 -   Integrations

  -   Inventory

  -   Notification

 -   Payroll
  
 -   Payroll CAN

  -   Payroll FRA

 -   Payroll GBR

  -   Payroll Interface

 -   Performance Management

 -   Professional Services Automation

  -   Recruiting

 -   Resource Management

 -   Revenue Management

  -   Settlement Services

 -   Staffing

 -   Student Finance

 -   Student Records

  -   Student Recruiting
 -   Talent

 -   Tenant Data Translation

   -   Time Tracking

 -   Workday Connect

 -   Workday Planning


**Custom Service Name**   
 The name of the custom Workday service you want to interact with. Use this field to specify a Workday service that is not included in **Service Name**. For new operations or to change the service, click **Import**, set the **Service Name** to **Custom**, and enter a valid Workday service. The Workday service should match exactly how it appears in Workday \(name and format\).

:::note

Your processes using a custom Workday service are still supported even if that service is added to the **Service Name** drop-down list.

:::


<OperationEnd />