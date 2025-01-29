# Tenant loaded

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-ac4a9068-a5c5-4ca2-b13d-cce1bdb84452"/>
</head>


This event type indicates that a tenant was loaded in .

## Overview

**Example**: A user signed in to and selected a tenant to load from the **Select a Tenant** screen.

## Event entry and metadata

The **Event Entry** form displays the metadata for the event, including:

|Name|Value/Object description|
|:---|:-----------------------|
|occurredAt|The date/time when the tenant was loaded.|
|tenant|The ID of the tenant that was loaded.|
|user|The user who loaded the tenant, including their email, name and ID.|

Example metadata:

```
{
	"data": null,
	"flow": null,
	"id": "cb885d5e-089db-4235-96c5-6478da2d62a0",
	"occurredAt": "2021-05-11T10:49:54.844294Z",
	"state": null,
	"tenant": "141b7b7c-7d556-4660-b907-da055c5f600a",
	"type": "tenant.loaded",
	"user": {
		"email": "user@example.com",
		"firstName": "Example",
		"id": "326e2216-2d3d5-42d7-9844-1ceccd390a69",
		"lastName": "User"
	}
}
```