# Tenant exported

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-119a8113-69f4-47df-ad21-3d0771c19529"/>
</head>


This event type indicates that a tenant data file was exported.

## Overview

**Example**: A tenant data file was exported on the **Tenant** page. See [Exporting and importing tenant data](flo-tenant_export_import_8f733b18-2d03-4695-bcff-70d0280874b0.md).

## Event Entry and metadata

The **Event Entry** form displays the metadata for the event, including:

|Name|Value/Object description|
|:---|:-----------------------|
|data|Information about the tenant export itself, including the ID, the user who performed the export, the tenant exported, and the date/time the export occurred.|
|occurredAt|The date/time when the tenant was exported.|
|tenantId|The ID of the tenant that was exported.|
|user|The user who exported the tenant, including their email, name and ID.|

Example metadata:

```
{
	"data": {
		"id": "61578feb-8042-4ff2-888a-ebbc4d099c3623",
		"data": null,
		"type": "tenant.exported",
		"user": "63794672-3832-4c5f-b2d9-ad038380a06733",
		"tenant": "92d47383-f427-4d3f-9961-23097364e00744",
		"occurredAt": "2022-08-23T10:18:22.3195324+00:00"
	},
	"flow": {
		"developerName": null,
		"id": "00000000-0000-0000-0000-000000000000",
		"version": "00000000-0000-0000-0000-000000000000"
	},
	"id": "61578feb-8042-4ff2-888a-ebbc4d099c3623",
	"occurredAt": "2022-08-23T10:18:22.319532+00:00",
	"stateId": null,
	"tenantId": "92d47383-f427-4d3f-9961-23097364e00744",
	"type": "tenant.exported",
	"user": {
		"email": "user@example.com",
		"firstName": "Example",
		"id": "63794672-3832-4c5f-b2d9-ad038380a06733",
		"lastName": "User"
	},
	"userId": "63794672-3832-4c5f-b2d9-ad038380a06733"
}
```