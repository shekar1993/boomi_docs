# Tenant user loaded

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-7123b1ce-0bff-40c7-9c13-2893e1705e05"/>
</head>


This event type indicates that a user was loaded into a tenant.

## Overview

**Example**: A user signed in to a tenant or selected a tenant to load from the **Select a Tenant** screen.

## Event entry and metadata

The **Event Entry** form displays the metadata for the event, including:

|Name|Value/Object description|
|:---|:-----------------------|
|data:loadedUser|The ID of the user that was loaded into the tenant.|
|occurredAt|The date/time when the user was loaded into the tenant.|
|tenant|The ID of the tenant that the user was loaded into.|
|user|The user who was loaded into the tenant, including their email, name and ID.|

Example metadata:

```
{
	"data": {
		"loadedUser": "2e422fe9d-003a-4c5f-a0c3-a10c75a95272"
	},
	"flow": null,
	"id": "7b137069-8d41-4f0ce-a417-286015f1421b",
	"occurredAt": "2021-05-11T13:25:58.321606Z",
	"state": null,
	"tenant": "9ad4f2368-6c3f-4d00-a4a7-bf386b642758",
	"type": "tenant.user.loaded",
	"user": {
		"email": "user@example.com",
		"firstName": "Example",
		"id": "2e422e9d-0f03a-4c5f-a0c3-a10c75a95272",
		"lastName": "User"
	}
}
```