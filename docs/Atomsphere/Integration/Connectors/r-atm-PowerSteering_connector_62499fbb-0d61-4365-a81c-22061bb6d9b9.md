import TrackedProperties from './_TrackedProperties.md'
import PartnerSupport from './_PartnerSupport.md'

# PowerSteering – Partner connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-c7ba8c34-feff-45e7-bf39-7f0dea1e0c40"/>
</head>

<PartnerSupport />

The PowerSteering – Partner connector is built on top of the PowerSteering REST API interface to provide simplified access to its data for users.

:::info Important

As of the Feb 2021 release, the PowerSteering – Partner connector is no longer available for use by customers who have not previously used it. If you utilized this connector prior to the date, you can continue to do so.

:::

PowerSteering is a highly configurable top-down cloud-based Project Portfolio Management \(PPM\) solution that enables business leaders and PMOs to optimize project portfolios, balance capacity against demand, improve financial-based decision making, and align the progress of projects to strategy and objectives across large organizations.

You can use this connector and integrate PowerSteering with other ERP and financial systems, such as SAP, Oracle, Microsoft Dynamics, Sage, NetSuite, JDEdwards, Exact, and QuickBooks to allow complete end-to-end project accounting.

**Note:** The documentation for this connector is provided by a Boomi partner. The last update of the documentation is May 2018.

You must sign in to PowerSteering to view these resources:

-   PowerSteering API Reference: \[your-powersteering-instance-url\]/rest/documentation/v1/main
-   PowerSteering Documentation: \[your-powersteering-instance-url\]/help/help.jsp

## Connector configuration 

To configure the connector to communicate with PowerSteering, set up two components:

-   PowerSteering – Partner connection. This connector uses Basic access authentication `<username>:<password>` for authentication and authorization.

-   PowerSteering – Partner operation \(Get, Query\)


This design provides reusable components that contain connection settings and operation settings. After building your connection and operation, set up your connector within a process. When you configure the PowerSteering – Partner connector properly within your process, Integration can map to and from virtually any system using the PowerSteering – Partner connector to retrieve data from PowerSteering.

## Supported editions 

The connector supports the PowerSteering API v1 and product versions 18.1 and greater. For more information, see the linked resources.

## Prerequisites 

To use the connector and implement a connection to your PowerSteering account from Integration, have the following:

-   The URL for the PowerSteering API service \(\[your\_powersteering\_instance\_url\]/rest/\).
-   A PowerSteering user with Administrator permissions.
-   The PowerSteering API v1.

## Supported objects 

The PowerSteering –Partner operation actions support the following objects:

|Object|Get|Query|
|------|---|-----|
|Project|X| |
|Projects| |X|
|Project Children|X| |
|Project Children ID|X| |
|Project Download| |X|
|Project Download All Works| |X|
|Organization|X| |
|Organizations|X| |
|Download Organizations| |X|
|Discussion|X| |
|Discussions|X| |
|Issue|X| |
|Issues|X| |
|Issue Item Thread|X| |
|Timesheet|X| |
|Timesheets| |X|
|User|X| |
|Current User|X| |
|Active Users|X| |
|Users| |X|
|Online Users|X| |
|Download Users| |X|
|Person Rates|X| |
|All Rate Tables|X| |
|Rate Codes|X| |
|Rate Table By ID|X| |
|Rate List by Rate Table|X| |
|Rates History| |X|
|Action Item By ID|X| |
|Action Items By Work ID|X| |
|Costs by Project ID|X| |
|Actual costs by Project ID|X| |
|Estimated costs by Project ID|X| |
|Template|X| |
|Template By Name|X| |
|Templates|X| |
|Portfolio|X| |
|Portfolio Work Items|X| |
|Group Members| |X|
|Group Members By Group ID|X| |
|Group|X| |
|Groups|X| |
|Task|X| |
|Tasks| |X|
|Tasks By Project ID|X| |
|Download Tasks| |X|
|Metric|X| |
|Metric Data| |X|
|Metrics| |X|
|Metric Template|X| |
|Metric Template By Name|X| |
|Metric Templates|X| |
|Resource Pool|X| |
|Resource Pool Managers|X| |
|Resource Pool Members|X| |
|Resource Pools|X| |
|Resource Assignment|X| |
|Resource Allocations| |X|
|Resource Demands| |X|
|Events|X| |
|Role|X| |
|Roles|X| |
|Reports|X| |
|Run Report| |X|
|Report Status|X| |


<TrackedProperties />