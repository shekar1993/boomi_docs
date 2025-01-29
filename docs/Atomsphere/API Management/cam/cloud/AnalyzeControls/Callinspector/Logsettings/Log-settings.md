---
sidebar_position: 1
---

# Log Settings

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-ed133bae-a582-4004-8a95-02d542670815"/>
</head>


Call capturing must be enabled for the calls to appear in the **Viewer** tab for call inspection. On the **Log Settings** tab, the settings to capture calls must be set. The **Log Settings** tab is available only to the Administrator and the Call Inspector Administrator roles. 

The following table describes the fields on the **Log Settings** tab. 

|**Field or Section** |**Description** |
| ----- | ----- |
|Select a duration|<p>Duration for which, calls are captured. Call log can be enabled for: </p><p>- 15 minutes </p><p>- 30 minutes </p>|
|Allow call capture even when daily limit is met|<p>Allows capturing calls even after the daily limit of captured call data (example, 250 Mb) is used. Exceeding the daily service limit setting might cause you to incur additional charges. </p><p>The following confirmation message is displayed when the check box is selected.</p><p>![](../../../Images/callinspector_dailylimit.jpg)</p><p>Calls can be captured up to the specified limit. </p>|
|Enable Call Logging|<p>Enables call logging for the selected duration. </p><p>After call logging is enabled, a countdown timer is displayed.</p><p>A similar notification is displayed on the [Viewer](../Viewer/Viewer.md) tab.</p>|
|Service|Select a Service, which then exposes the list of Endpoints. |
|Endpoint|<p>Call log includes calls for the selected endpoint. </p><p>:::note</p><p>A single endpoint might be enabled for capture at any given time.</p><p>::: </p>|
|Status Codes|<p>Calls with selected status codes are logged. </p><p>:::note</p><p>All available status codes are considered for logging, if no status codes are selected.</p><p>::: </p>|
|Key|Calls associated with entered Package key are logged. |
|IP Address|<p>Calls made from entered IP address are logged. </p><p>:::note</p><p>All IP addresses are considered for logging, if no IP address is entered.</p><p>::: </p>|
|Logging History|<p>Displays the history of the log settings created. The Logging History section displays the following details: </p><p>- **Started By:** Name of the person that turned on the Call Capture setting. </p><p>- **Date/Time:** Date and Time when the Call Capture was turned on. </p><p>- **Duration:** Duration for which the Call Capture was turned on. </p><p>- **Call Capture allowed over limit:** Displays whether or not call capture is allowed after daily limit is reached. </p><p>- **Log Settings:** Settings used to turn on Call Capture. The Log Settings columns displays the following details: </p><p>&emsp;&emsp;- **Status Code:** Displays the status codes selected for call capturing. If none of the status check boxes are selected, all status codes are considered for call capturing. </p><p>&emsp;&emsp;- **IP Address:** An IP address can be specified. Calls made from the entered IP address are captured. </p><p>&emsp;&emsp;- **Key:** Calls associated with entered Package key are captured. </p><p>&emsp;&emsp;- **Service:** Displays the service names selected for call capturing. </p><p>&emsp;&emsp;- **Endpoint:** Displays the endpoint name for the selected call captured.</p>|

