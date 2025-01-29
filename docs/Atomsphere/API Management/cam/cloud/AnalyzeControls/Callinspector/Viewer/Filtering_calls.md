---
sidebar_position: 2
---

# Filtering Calls

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-39245687-977d-4c16-8338-a5b6bb7766db"/>
</head>


Filters panel can be used to apply filters and view data about specific calls. Based on the filters set, calls are listed under the **Service Calls** section. 

The following table describes the filters that can be used in Call Inspector. 

|**Field or Section** |**Description** |
| ----- | ---- |
|<p>Start (date, time)</p><p>End (date, time)</p>|<p>The logged API calls in the range of selected Start (date, time) and End (date, time) are displayed.</p><p>:::note</p><p>The date and time are in GMT. A 7 day maximum historical window is supported.</p><p>::: </p>|
|Service|Calls for the selected service are displayed. Specific services or all services can be selected from the list. |
|Key|Package Key used to make API calls. |
|Message ID|The unique message ID assigned to request-response pair. |
|IP Address|IP address of the client that calls the API. |
|Status Code|<p>Calls are displayed as per the selected status. The status options are: </p><p>- Any </p><p>- Successful (200 series) </p><p>- Redirection (300 series) </p><p>- Backend errors (400 and 500 series) </p><p>- Throttled (403s) </p>|

:::note

Click **Apply** after selecting the filters to view the filtered calls. 

:::
