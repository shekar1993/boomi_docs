---
sidebar_position: 1
---

# Scheduled Maintenance Events

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-3a9da483-fd51-4443-9607-acf2589d80d0"/>
</head>

You can create scheduled maintenance events in the Dashboard. After creating the event, you can select endpoints for maintenance. Any calls that are made to an API during the maintenance duration will not be directed to the selected endpoints and API users will get error messages with 503 Service Unavailable. The error message returned is customizable via the Error Sets feature. 

The following table describes the fields on the Scheduled Maintenance Events page. To create a new event, click [New Scheduled Maintenance Event](Creatingscheduledmaintenanceevents/Creating_scheduled_maintenance_events.md). 

|**Field** |**Description** |
| ------------ | ----------- |
|Name|Name of the scheduled maintenance event. |
|Created|Date and time when the event was created. |
|Updated|Date and time when the event was last updated. |
|Edit|Navigates to the Scheduled Maintenance and Related Endpoints page where the event details and associated endpoints can be modified. |

