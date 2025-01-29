---
sidebar_position: 2
---

# Technical Summary

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-58b5c987-ec3a-44ec-905b-800583e8de23"/>
</head>


This Insight group displays information that is used by technically-oriented API administrators. This information is related to the following six signals: 

|**Technical Summary Signals** |**Description** |
| ----- | --- |
|API Platform Status|Ratio of the summation of API calls with a status code of either 503 or 504 and the total number of API calls for the selected period. Predefined thresholds determine the API platform status either as Healthy (green), Performance Issues (yellow), or Service Disruption (red). |
|Platform availability|Defined as one minus the API platform status metric displayed as a percentage for the selected period expressed as a percentage. |
|Platform Latency (95th)|Defined as the ninety-fifth percentile of the platform latency for the selected period. |
|Platform QPS (max)|Maximum calls per second rate for the API platform for the selected period. |
|Data Served|Quantity of data served through the API platform for the selected period. |
|Cache Hit Rate|Ratio of the number of API calls served from cache and the total number of API calls for the selected time period expressed as percentage. |

