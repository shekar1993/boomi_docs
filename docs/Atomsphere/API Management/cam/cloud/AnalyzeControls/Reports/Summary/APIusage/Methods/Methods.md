---
sidebar_position: 1
---

# Methods

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-0ae6e308-5d67-405f-aaa9-03b004f43c16"/>
</head>

This report displays average latency and other call details for all methods of the selected API or the Plan for a selected date range. 

The following table describes the fields in the Methods section. 

|**Field** |**Description** |
| ----- | --- |
|Method|The method name. |
|Endpoint|The endpoint for which the method is defined. |
|Service|The API Service in a Plan that contains this endpoint. |
|Plan|<p>The Plan that contains the Service. </p><p>:::note</p><p>If you select a Plan from the All Plans filter, you can view the methods associated with that Plan.</p><p>::: </p>|
|Average Latency (ms)|Total time taken to respond to an API call (sum of total time through the Traffic Manager to or from the back-end server) divided by the total volume of API calls. For more information, see System Status > [Latency Reports](../../Systemstatus/Latencyreports/Latency_reports.md). |
|Successful|Number of successful method calls. |
|Blocked|Number of blocked calls. |
|Error|Number of method calls that return errors. |
|Total|Number of total number of calls. |
|Percent|Percentage of a particular method calls out of total method calls. |

