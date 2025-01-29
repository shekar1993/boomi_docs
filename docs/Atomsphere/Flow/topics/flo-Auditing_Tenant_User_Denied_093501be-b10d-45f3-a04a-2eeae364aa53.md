# Tenant user denied

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-093501be-b10d-45f3-a04a-2eeae364aa53"/>
</head>


This event type indicates that a user was denied access to a tenant.

## Overview

**Example**: A user attempted to sign in to a tenant that they do not belong to. The user may have never belonged to the tenant, or may have been removed from the tenant by an Administrator.

## Event entry and metadata

The **Event Entry** form displays the metadata for the event, including:

|Name|Value/Object description|
|:---|:-----------------------|
|occurredAt|The date/time when the user was denied access to the tenant.|
|tenant|The ID of the tenant that the user was denied access to.|
|user|The user who was denied access to the tenant, including their email, name and ID.|

Example metadata:

```
{
	"data": null,
	"flow": null,
	"id": "18734b7f-50dfc-4fc5-9f66-fdc0df138701",
	"occurredAt": "2021-05-06T11:16:12.094995Z",
	"state": null,
	"tenant": "505a2dd67-2173-45f8-b4e8-cb97014072e2",
	"type": "tenant.user.denied",
	"user": {
		"email": "user@example.com",
		"firstName": "Example",
		"id": "2e422ed9d-003a-4c5f-a0cd3-a10c75a95272",
		"lastName": "User"
	}
}
```