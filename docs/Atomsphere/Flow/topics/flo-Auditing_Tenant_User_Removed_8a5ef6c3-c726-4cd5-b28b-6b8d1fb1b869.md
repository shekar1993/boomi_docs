# Tenant user removed

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-8a5ef6c3-c726-4cd5-b28b-6b8d1fb1b869"/>
</head>


This event type indicates that a user was removed from a tenant.

## Overview

**Example**: A tenant Administrator deleted a user from the tenant on the **Tenant** page. See [Removing a tenant user](t-flo-Tenant_Users_Deleting_ad9aacd2-1b5a-4fa9-ad1a-8cb0fe102933.md).

## Event entry and metadata

The **Event Entry** form displays the metadata for the event, including:

|Name|Value/Object description|
|:---|:-----------------------|
|data:removedUser|The ID of the user who was removed from the tenant.|
|occurredAt|The date/time when the user was removed from the tenant..|
|tenant|The ID of the tenant from which the user was removed.|
|user|The tenant Administrator who removed the user from the tenant, including their email, name and ID.|

Example metadata:

```
{
	"data": {
		"removedUser": "326e2216-23dd5-42d7-9844-1ceccd390a69"
	},
	"flow": null,
	"id": "ef3be66c-ce2c-496a-abe7-553d219eba7ad",
	"occurredAt": "2021-05-11T13:40:23.975244Z",
	"state": null,
	"tenant": "141b7bd7c-7556-4660-b907-da055c5f600a",
	"type": "tenant.user.removed",
	"user": {
		"email": "Administrator@example.com",
		"firstName": "Adminstrator",
		"id": "2e4f22e9dd-003a-4c5f-a0c3-a10c75a95272",
		"lastName": "User"
	}
}
```