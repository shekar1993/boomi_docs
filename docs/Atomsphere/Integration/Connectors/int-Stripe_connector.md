# Stripe connector

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-aace94c1-0f09-4d27-829d-57fa69827009"/>
</head>

The Stripe connector enables you to integrate with Stripe, where Stripe is a payment processing platform that enables businesses to accept online payments and handle global transactions.  

You can use the Stripe connector to Create, Delete, Get, List, Execute, Retrieve, Query, List Line Items, Update and Update Lines objects in Stripe. You can integrate Stripe and an ERP (for example, NetSuite) to synchronize online payment transactions  with your financial records in real-time.

## Connector configuration​

To configure a connector to communicate with Stripe, set-up these components:

- Stripe connection
- Stripe operation

## Supported editions​

The connector supports the following version of the Stripe API: Version v1

## Supported objects​

The following parent objects are supported by one or more of the Stripe operation actions:

| Object &darr; Action &rarr;        | Get         | Delete     | Create   |  Update  |  List  |  Query |  Retrieve |
|---------------|-------------|------------|----------|----------|--------|--------|-----------|
| Customers     | ![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Not Supported](../Images/img-atm-not_supported_api_88d3bc76-0a84-4175-b675-18dda09affba.svg)|
| Payment Links |![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Not Supported](../Images/img-atm-not_supported_api_88d3bc76-0a84-4175-b675-18dda09affba.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Not Supported](../Images/img-atm-not_supported_api_88d3bc76-0a84-4175-b675-18dda09affba.svg)|![Not Supported](../Images/img-atm-not_supported_api_88d3bc76-0a84-4175-b675-18dda09affba.svg)|
| Prices        | ![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Not Supported](../Images/img-atm-not_supported_api_88d3bc76-0a84-4175-b675-18dda09affba.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Not Supported](../Images/img-atm-not_supported_api_88d3bc76-0a84-4175-b675-18dda09affba.svg)|
| Products      |![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Not Supported](../Images/img-atm-not_supported_api_88d3bc76-0a84-4175-b675-18dda09affba.svg)|
| Invoices     | ![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Not Supported](../Images/img-atm-not_supported_api_88d3bc76-0a84-4175-b675-18dda09affba.svg)|
| Invoice Items     | ![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Not Supported](../Images/img-atm-not_supported_api_88d3bc76-0a84-4175-b675-18dda09affba.svg)|![Not Supported](../Images/img-atm-not_supported_api_88d3bc76-0a84-4175-b675-18dda09affba.svg)|
| Payment Intents |![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Not Supported](../Images/img-atm-not_supported_api_88d3bc76-0a84-4175-b675-18dda09affba.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Not Supported](../Images/img-atm-not_supported_api_88d3bc76-0a84-4175-b675-18dda09affba.svg)|
| Charges |![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Not Supported](../Images/img-atm-not_supported_api_88d3bc76-0a84-4175-b675-18dda09affba.svg)|![Not Supported](../Images/img-atm-not_supported_api_88d3bc76-0a84-4175-b675-18dda09affba.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Not Supported](../Images/img-atm-not_supported_api_88d3bc76-0a84-4175-b675-18dda09affba.svg)|
| Upcoming Invoice |![Not Supported](../Images/img-atm-not_supported_api_88d3bc76-0a84-4175-b675-18dda09affba.svg)|![Not Supported](../Images/img-atm-not_supported_api_88d3bc76-0a84-4175-b675-18dda09affba.svg)|![Not Supported](../Images/img-atm-not_supported_api_88d3bc76-0a84-4175-b675-18dda09affba.svg)|![Not Supported](../Images/img-atm-not_supported_api_88d3bc76-0a84-4175-b675-18dda09affba.svg)|![Not Supported](../Images/img-atm-not_supported_api_88d3bc76-0a84-4175-b675-18dda09affba.svg)|![Not Supported](../Images/img-atm-not_supported_api_88d3bc76-0a84-4175-b675-18dda09affba.svg)|![Not Supported](../Images/img-atm-not_supported_api_88d3bc76-0a84-4175-b675-18dda09affba.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|
| Upcoming Invoice Lines |![Not Supported](../Images/img-atm-not_supported_api_88d3bc76-0a84-4175-b675-18dda09affba.svg)|![Not Supported](../Images/img-atm-not_supported_api_88d3bc76-0a84-4175-b675-18dda09affba.svg)|![Not Supported](../Images/img-atm-not_supported_api_88d3bc76-0a84-4175-b675-18dda09affba.svg)|![Not Supported](../Images/img-atm-not_supported_api_88d3bc76-0a84-4175-b675-18dda09affba.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Not Supported](../Images/img-atm-not_supported_api_88d3bc76-0a84-4175-b675-18dda09affba.svg)|![Not Supported](../Images/img-atm-not_supported_api_88d3bc76-0a84-4175-b675-18dda09affba.svg)|
| Balance Transactions |![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Not Supported](../Images/img-atm-not_supported_api_88d3bc76-0a84-4175-b675-18dda09affba.svg)|![Not Supported](../Images/img-atm-not_supported_api_88d3bc76-0a84-4175-b675-18dda09affba.svg)|![Not Supported](../Images/img-atm-not_supported_api_88d3bc76-0a84-4175-b675-18dda09affba.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Not Supported](../Images/img-atm-not_supported_api_88d3bc76-0a84-4175-b675-18dda09affba.svg)|![Not Supported](../Images/img-atm-not_supported_api_88d3bc76-0a84-4175-b675-18dda09affba.svg)|

The following parent objects are supported by one or more of the Stripe operation actions:

| Object &darr; Action &rarr;| List Line Items         | Update Lines     |
|----------------------------|-------------|------------|
|Invoices|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|
|Payment Links|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Not Supported](../Images/img-atm-not_supported_api_88d3bc76-0a84-4175-b675-18dda09affba.svg)|

The following Business Actions are supported by the **Execute** action:

- Reconcile Customer Balance for Payment Intent
- Verify Microdeposits for Payment Intent
- Authorize Increment for Payment Intent
- Capture Charges
- Capture Payment Intent
- Confirm Payment Intent
- Cancel Payment Intent
- Send Invoice
- Void Invoice
- Pay Invoice
- Finalize Invoice
- Mark Invoice as Uncollectible



## Tracked properties​

This connector has no predefined tracked properties. See the topic [Adding tracked fields to a connector operation](../Process%20building/t-atm-Adding_tracked_fields_to_a_connector_operation_f71821dd-95ee-4ebd-bfc9-3333262f56f6) to learn how to add a custom tracked field.