# Tenant user added

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-9a0dd3fd-c247-4930-aa4b-655a17ed0042"/>
</head>


This event type indicates that a user was added to a tenant.

## Overview

**Example**: A tenant Administrator added a user to a tenant on the **Tenant** page.

## Event entry and metadata

The **Event Entry** form displays the metadata for the event, including:

|Name|Value/Object description|
|:---|:-----------------------|
|data:role|The user role assigned to the user. See [User roles](flo-Roles_23fb386e-67d8-4d7c-a9ba-e0ba9b9e4c27.md).|
|data:addedUser|The ID of the user that was added to the tenant.|
|occurredAt|The date/time when the user was added to the tenant.|
|tenant|The ID of the tenant that the user was added to.|
|user|The Administrator user who added the user into the tenant, including their email, name and ID.|

Example metadata:

```
{
	"data": {
		"role": "STANDARD_USER",
		"addedUser": "326es2216-23d5-42d7-9844-1ceccd390a69"
	},
	"flow": null,
	"id": "53762e18-c31e-49d31-8e85-eac894f2da46",
	"occurredAt": "2021-05-05T14:56:05.829367Z",
	"state": null,
	"tenant": "141b7b7c-75d56-4660-b907-da055c5f600a",
	"type": "tenant.user.added",
	"user": {
		"email": "Administrator@example.com",
		"firstName": "Administrator",
		"id": "2e422e9d-00d3a-4c5f-a0c3-a10c75ad95272",
		"lastName": "User"
	}
}
```