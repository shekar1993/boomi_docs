# Tenant user role updated

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-c02255fe-00e8-43b8-838b-b1ae2772dfa8"/>
</head>


This event type indicates that the role of a user was changed by a tenant Administrator.

## Overview

**Example**: A tenant Administrator changed the role of a user from 'Adminstrator' to 'Standard User' on the **Tenant** page. See [User roles](flo-Roles_23fb386e-67d8-4d7c-a9ba-e0ba9b9e4c27.md).

## Event entry and metadata

The **Event Entry** form displays the metadata for the event, including:

|Name|Value/Object description|
|:---|:-----------------------|
|data:role:to|The new role assigned to the user.|
|data:role:from|The previous role assigned to the user before the change was made.|
|data:member:id|The ID of the user whose role was changed.|
|data:member:email|The email address of the user whose role was changed.|
|occurredAt|The date/time of the role change.|
|tenant|The ID of the tenant in which the user role change was made.|
|user|The tenant Administrator who changed the user role, including their email, name and ID.|

Example metadata:

```
{
	"data": {
		"role": {
			"to": "ADMINISTRATOR",
			"from": "STANDARD_USER"
		},
		"member": {
			"id": "326e22f16-23d5-42d7-9844-1ceccd390a69",
			"email": "user@example.com"
		}
	},
	"flow": null,
	"id": "1b17ea0d-503f1-4483-8eea-a06e1de70449",
	"occurredAt": "2021-05-05T15:03:01.575329Z",
	"state": null,
	"tenant": "141b7b7c-7f556-4660-b907-da055c5f600a",
	"type": "tenant.user.role.updated",
	"user": {
		"email": "administrator@example.com",
		"firstName": "Administrator",
		"id": "2e422fe9d-003a-4c5f-a0c3-a10c75a95272",
		"lastName": "User"
	}
}
```