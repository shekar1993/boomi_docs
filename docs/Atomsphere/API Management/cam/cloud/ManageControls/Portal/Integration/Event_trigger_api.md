---
sidebar_position: 2
---

# Event Trigger API

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-ec830755-16a1-4735-8de3-73073e2ac809"/>
</head>

Event Triggers are a way for a customer to integrate their own systems with the API Management service. They enable a customer to receive data when particular events happen in the API Management service, such as a developer registering, an application being created, or the limits changed on a developer's key. 

The Event Trigger API consists of HTTP-based calls that the API Management service will make to a designated, customer-hosted endpoint, for example: `http://mycustomerdomain.com/masherycallbacks`. These calls are made after executing administration operations, such as create, update and delete, for the following API Management objects: **Member, Application, Key** and **Package Key**. In other words, event trigger API calls are made after the data is saved in the API Management database. 

:::note

The customer-hosted endpoint must support additional path elements as well as query parameters, both of which are documented on each object's detail documentation page. The entry for the customer-hosted endpoint, as entered into the API Management API Admin Console, is simply the root of the API that will be called. An example of what call would be produced when generating an event trigger for updating a API Management member object is shown below. 

:::

`http://mycustomerdomain.com/masherycallbacks/v1/member/123456 `

The following table summarizes the event triggers supported by API Management. 

:::note

Event Triggers are setup and managed by API Management Support. For assistance, please contact [Boomi Support](https://community.boomi.com/s/support). 

:::

| Object | Event | HTTP Request Type of Call made to Customer-hosted Endpoint | Data Sent to Customer-hosted Endpoint | Data Returned from Customer-hosted Endpoint |
| --- | --- | --- | --- | --- |
| Member | Create | PUT | Member JSON or application/x-www-form-urlencoded data | Member JSON |
|| Update | PUT |
|| Delete | DELETE |
| Application | Create | PUT | Application JSON or application/x-www-form-urlencoded data | Application JSON |
|| Update | PUT |
|| Delete | DELETE |
| Key | Create | PUT | Key JSON or application/x-www-form-urlencoded data | Key JSON |
|| Update | PUT |
| |Delete | DELETE |
| Package Key | Create | PUT | Package Key JSON or application/x-www-form-urlencoded data | Package Key JSON |
| |Update | PUT |
| |Delete | DELETE |

