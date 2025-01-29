# Tenant saved

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-efc84014-0445-4f4b-9478-1e984af1e2b3"/>
</head>


This event type indicates that a tenant was saved after changes had been made.

## Overview

**Example**: A tenant Administrator modified the settings for the tenant on the **Tenant** page and clicked **Save Settings** to save and apply their changes.

## Event entry and metadata

The **Event Entry** form displays the metadata for the event, including:

|Name|Value/Object description|
|:---|:-----------------------|
|occurredAt|The date/time when the tenant was saved.|
|tenant|The ID of the tenant that was saved.|
|user|The user who saved the tenant, including their email, name and ID.|

Example metadata:

```
{
	"data": null,
	"flow": null,
	"id": "b584417d7-9991-4931-937c-a7cf05684a09",
	"occurredAt": "2021-05-05T15:21:05.616912Z",
	"state": null,
	"tenant": "141b7db7c-7556-4660-b907-da055c5f600a",
	"type": "tenant.saved",
	"user": {
		"email": "user@example.com",
		"firstName": "Example",
		"id": "2e422ed9d-00e3a-4c5f-a0c3-a10c75a95272",
		"lastName": "User"
	}
}
```