# HubSpot CRM (Tech Preview) connector

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-df1914f0-9911-4ebb-aa8f-0a79aa1355db"/>
</head>


The HubSpot CRM connector allows you to connect other systems or applications with HubSpot CRM's Customer Relationship Management (CRM) platform. 

This connector enables seamless data synchronization between HubSpot CRM and other business systems, facilitating the create, retrieve, archive, update and search for  contacts and companies objects.. 

## Connector configuration​

To configure the connector to communicate with HubSpot CRM, set up two components:

- HubSpot CRM connection
- HubSpot CRM operation

This design offers reusable components featuring connection settings and operation settings, including objects, actions, and data definitions. Once you've configured your connection and operations, integrate the HubSpot CRM connector into your process workflow. With the HubSpot CRM connector properly configured within your process, integration becomes seamless, allowing mapping to and from virtually any system to retrieve or send data to the HubSpot CRM environment. The linked [HubSpot CRM API](https://developers.hubspot.com/docs/guides/api/crm/understanding-the-crm) documentation provides valuable insights into common scenarios.

## Prerequisites​

To use the connector and implement a connection to HubSpot CRM from Integration, have the following:

- **Sign up**: Sign up Hubspot CRM account.
- **Login**: Login to Hubspot CRM account using username and password with sufficient permissions to **Create**, **Update**, **Search**, **Retrieve** and **Archive** various types of records.
- Create HubSpot CRM connector configuration. 
    - Update the Re-direct URLin HubSpot CRM if using Oauth2, example: `https://platform.boomi.com/account/<your__account_ID>/oauth2/callback`.

## Supported objects​

The following objects are supported by one or more of the HubSpot CRM operation actions.

| Object &darr; Action &rarr;  | Create         | Update     | Search   |  Retrieve  |  Archive  |  
|---------------|-------------|------------|----------|----------|--------|  
| Contacts     | ![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|
| Company     | ![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|![Supported](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg)|
