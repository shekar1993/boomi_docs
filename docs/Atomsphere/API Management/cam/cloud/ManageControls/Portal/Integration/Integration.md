---
sidebar_position: 1
---

# Integration

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-8283eb11-1bde-47a8-bb28-3ec5b31d01fc"/>
</head>

API Management provides system event triggers and an [Event Trigger API](event-trigger-api.htm) so that you can easily integrate API Management into your own system. Event triggers make an API call to your system whenever certain events occur. The Event Trigger API gives you read/write access to most API Management objects. The Integration page allows you to configure event triggers, as well as allow you to view all recently triggered events.

The following table describes the Event Trigger fields on the **Integration** page. 

|**Field** |**Description** |
| ------- | -------- |
|Endpoint URL|The URL setting for the event recorder (for example: http://mycustomerdomain.com/masherycallbacks) which will allow you to view all recently triggered events here. |
|Encoding|Select JSON Body or Form Encoded Body. |
|Use X-HTTP-Method-Override Header with POST instead of PUT or DELETE HTTP Methods checkbox |Enable or disable. |
|Event Triggers (`Users/Keys/Package Keys/Applications`)|<p>Enable any of the following checkboxes as needed: </p><p>- Before `creating/updating/deleting a user/key/package key/application`. </p><p>- After `creating/updating/deleting a user/key/package key/application`. </p>|

