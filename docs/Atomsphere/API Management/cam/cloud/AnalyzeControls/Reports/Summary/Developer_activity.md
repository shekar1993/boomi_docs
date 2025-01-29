---
sidebar_position: 8
---

# Developer Activity

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-4829226e-440d-450c-b164-6531aa1fa411"/>
</head>


The **Developer Activity** page displays the user activity log. The log can be filtered by date or Plan. For more information, see [Report Filters](../Report_filters.md). The number of active developers is displayed above the list of users. By clicking a user name, you can view the detailed activity report for that user. For more information, see the [Developer Activity: Developer Name](Developer_activity_developer_name.md) page. 

The following table describes the fields in the Developer Activity report. 

|**Field** |**Description** |
| --------- | ------ |
|Username|User or developer name. |
|Application|Registered application that utilizes the Plan or an API. |
|Plan/ Company|The plan that contains the utilized API service (on the **Services** sub-tab, the **Company** field is displayed and not the **Plan** field). |
|Successful Calls|Number of successful calls. |
|Percent|Percentage of successful calls. |
|Other|<p>Calls that neither pass through the Traffic Manager nor return the 403 error. They include responses such as: </p><p>- Timeout </p><p>- Invalid key </p><p>- Invalid signatures </p><p>- Resource not found </p><p>- HTTP 3xx series errors </p>|
|Blocked Calls |<p>Calls that return 403 error for any of the following reasons: </p><p>- Quota or throttle limit is crossed. </p><p>- Developer is inactive. </p><p>- Developer is not authorized. </p><p>- The referrer is unknown. </p>|
|Quota |The total number of calls allowed for a specified time. The value displayed in the Quota column is a cumulative number. If the quota for the selected API is 2000 per day and the number of days selected is 70, the number displayed in the Quota column is 140,000. |
|Data Served|Data served (in bytes) for the application. |

