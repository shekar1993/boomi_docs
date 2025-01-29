# Scheduling Runtime Release updates for a Gateway 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-457ede94-e4f5-40d9-91fb-45615e034ced"/>
</head>


Setting up a schedule for taking Runtime Release updates is done on the Runtime Release Scheduling tab of the API Gateway.

## Before you begin

If you do not own the selected Gateway, the Runtime Release Scheduling panel is not visible to you.

If you are setting this schedule while a Runtime Release update is available, be careful when selecting the week, day, and hour. If you select a time in the Runtime Release period that has already passed, your schedule will not be applied until the next Runtime Release period.

## Procedure

1.  Go to **Configure Server** and click the **Gateways** tab.

2.  Click on a Gateway Name from the list.

    The Gateway settings page opens.

3.  Click the **Runtime Release Scheduling** panel under **Deployment**.

4.  Select a schedule type: **First Week** or **Last Week**.

5.  Select a day of the week, an hour, and a time zone.

    As you make your selections, they appear in a message that explains when the Gateway will be updated.

6.  Click **Save**. 