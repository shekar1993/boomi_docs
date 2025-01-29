---
sidebar_position: 3
---

# Historical API Usage Limit Enforcement Trends

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-dd9746dd-19c0-43d6-9412-24fe6574edbc"/>
</head>


This report displays the number of days when a developer has encountered the API usage limit enforcement within the specified historical time period expressed as an integer for the selected service, package, and/or plans. 

The following table describes the fields in the Historical API Usage Limit Enforcement Trends report. 

|**Field** |**Description** |
| --- | ---- |
|Username|User or developer name. |
|Application|Registered application that utilizes the Plan or service. |
|Plan/Company|The Plan that contains the utilized API Service (on the Services sub-tab, the Company field is displayed and not the Plan field). |
|Throttled Calls Yesterday|Number of calls that exceeded the Plan access limit on the previous day. |
|Days Throttle past 3 days|Number of days when the throttle limit was exceeded in the last three days. |
|Days Throttled past 14 days|Number of days when the throttle limit was exceeded in the last fourteen days. |
|Days Throttled past 30 days|Number of days when the throttle limit was exceeded in the last thirty days. |

:::note

The report can be filtered by API Usage Limit types, such as throttle (query per second) limit enforcement, quota limit enforcement, or both by selecting the appropriate option from the list. 

:::
