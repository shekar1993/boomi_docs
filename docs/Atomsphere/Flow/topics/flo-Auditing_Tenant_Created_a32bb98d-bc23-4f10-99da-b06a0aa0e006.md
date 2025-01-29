# Tenant created

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-a32bb98d-bc23-4f10-99da-b06a0aa0e006"/>
</head>


This event type indicates that a new tenant/subtenant was created.

## Overview

**Example**: An Organization Administrator added a new tenant to an Organization, or a new subtenant was added to an existing tenant on the **Tenant** page by a tenant Administrator.

## Event entry and metadata

The **Event Entry** form displays the metadata for the event, including:

|Name|Value/Object description|
|:---|:-----------------------|
|data:createdTenant|The ID of the new tenant/subtenant that was created.|
|occurredAt|The date/time when the new tenant/subtenant was created.|
|tenant|The ID of the parent tenant that a subtenant was created in.|
|user|The user who created the tenant, including their email, name and ID.|

Example metadata:

```
{
	"data": {
		"createdTenant": "abea281dd-2bcf-43a1-8d14-5ba888a9ad98"
	},
	"flow": null,
	"id": "b96f9155-40d3a-41d4-bf16-0767750a68e3",
	"occurredAt": "2021-05-11T10:30:43.511634Z",
	"state": null,
	"tenant": "141b7db7c-7556-4660-b907-da055c5f600a",
	"type": "tenant.created",
	"user": {
		"email": "user@example.com",
		"firstName": "Example",
		"id": "326ef2216-23d5-42d7-9844-1ceccd390a69",
		"lastName": "User"
	}
}
```