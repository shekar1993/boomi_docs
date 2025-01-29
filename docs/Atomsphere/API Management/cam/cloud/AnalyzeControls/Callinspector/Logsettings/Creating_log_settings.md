---
sidebar_position: 2
---

# Creating Log Settings

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-63ffcbf5-10ab-4b2b-b290-8b81c2ee1744"/>
</head>

## Procedure

To create log settings: 

1. On the **Log Settings** tab under **Call Inspector**, select a duration option from the list. 

2. Select a Service (Required). 

3. Select an Endpoint (Required). 

4. Enter the Package key in the **Key** box to log calls (Required). 

5. Select the status codes. By default, all status codes are considered for call capture. 

6. Enter the IP Address to log calls. 

   :::note
   
   Leave the Log an **IP or CIDR block** field blank to consider all IP addresses to log API calls. 

   :::

7. Click **Enable Call Logging**. 

   The countdown timer is displayed below **Current Call Log Settings** based on the duration option selected in step 1. The API calls matching the selected criteria are captured while the call capture is enabled. The call capture stops when the countdown timer returns to zero. The captured calls are displayed in the **Viewer** tab.
