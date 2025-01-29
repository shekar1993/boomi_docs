---
sidebar_position: 1
---

# Managing Endpoints

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-a19ad39e-ed76-48e0-a97f-86d04f91bb71"/>
</head>

You can add or remove endpoints to a maintenance event. The API call traffic will not be routed to your system endpoints. 

## Procedure

To add endpoints to a maintenance event:

1. On the **Scheduled Maintenance Events** page, click **Add Endpoints**.

2. The **Add Endpoints** pop-up window displays.

3. Use the drop-down lists to select an **API Definition** and **Endpoint**, then click add (![](../../../../Images/delete_2.jpg)). 

4. Click **Save Changes**

   :::note
   
   The Traffic Manager will respond with a 503 Service Unavailable message for these endpoints during the time period of the Scheduled Maintenance Event.

   ::: 

   To remove an endpoint, select the endpoint, then click **Remove Endpoints**.
