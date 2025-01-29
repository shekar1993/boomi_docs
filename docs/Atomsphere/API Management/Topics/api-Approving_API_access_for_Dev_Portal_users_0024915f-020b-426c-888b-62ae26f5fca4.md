# Approving API subscription requests 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-0024915f-020b-426c-888b-62ae26f5fca4"/>
</head>


When users request access to an API through the Developer Portal, you need to grant them access before they can use the API.

## Before you begin

[Add a plan](/docs/Atomsphere/API%20Management/Topics/api-Adding_a_plan_to_an_API_cbb0a60f-eb42-42e2-9dd6-5c7ad946470c.md) on the **Configure APIs and Applications** > **Deployed APIs** page.

## Procedure

1.  In API Management, go to **Approve**.

2.  Expand the Gateway to see the users who requested access to APIs on that Gateway.

3.  From the correct row in the table for the user and API, click **Pending Approval** in the **Status** column.

4.  Click **Approve**.

5.  In the Approve dialog, select the appropriate Plan from the drop-down list.

6.  Specify a date on which the API access is granted. The current date is selected by default.

7.  **Optional:** Specify a date to disable the subscription.

    The option to **Do not automatically disable** the subscription is selected by default.

8.  **Optional:** Type a message to the requester.

9.  Click **Approve**.

10. If there are additional requests, the next request automatically opens. You can optionally click **Next** to navigate through the entries that needs to be approved. Or, if there are no additional requests, click **Return to List** to return to the main Approvals page.

## Next steps

Notify your user that you approved their Subscription request. The user will see that the subscription is enabled.