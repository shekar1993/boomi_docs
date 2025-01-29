# Subscribing to an API 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-a51f1941-2ede-40f2-b7d8-479f6f24b412"/>
</head>


Subscribe to an API in the Subscriptions column of the **Configure APIs and Applications** \> **Applications** page.

## Before you begin

1.  [Add a plan to an API.](/docs/Atomsphere/API%20Management/Topics/api-Adding_a_plan_to_an_API_cbb0a60f-eb42-42e2-9dd6-5c7ad946470c.md)
2.  [Create an application.](/docs/Atomsphere/API%20Management/Topics/api-Creating_an_Application_a00f2baf-d48e-4477-9a2a-92d43719ac67.md)

## About this task

Each subscription to an Application allows you to specify a unique plan for the subscription and provides a unique API Key for that Application. Providing your API consumers the API Key allows you to set up limits to their API requests without setting up an authentication provider.

## Procedure

1.  On the Applications page, navigate to the Application that you want to add a subscription for.

2.  Click **0 Subscriptions**.

    The Subscriptions screen opens.

3.  Click **Subscribe**.

4.  Check the box next to one or more APIs and click **Next**.

5.  On the Choose a Plan screen, select a plan for the subscription. Then, click **Next**.

    The Set Subscription Details screen opens.

6.  For APIs that are deployed to an environment that does not contain an API Gateway, specify if the Subscription is enabled or disabled.

7.  For APIs that are deployed to an environment that contains an API Gateway, select a date on which the subscription should be enabled and optionally when it is to be disabled.

8.  Repeat steps 5 through 7 for the other APIs that you selected in step 4.

9.  Click **Finish**.

    The Plan name is listed in the Plan column for the API.

10. Then, click **Back to Applications** to return to the Applications page. 