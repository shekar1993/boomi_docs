# Tenant clearing applied

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-615bb83e-bffe-4760-aa26-d368b30ade82"/>
</head>


This event type indicates that a tenant Administrator performed deletion of data from a tenant.

## Overview

**Example**: An Administrator clicked the confirmation link in the email that is required to confirm and perform deletion of data from a tenant.

:::note

This event type is related to the [Tenant clearing requested](flo-Auditing_Tenant_Clearing_Requested_ebe7f7d8-8940-4dac-842c-7979c6214206.md) event type.

:::

## Event entry and metadata

The **Event Entry** form displays the metadata for the event, including:

|Name|Value/Object description|
|:---|:-----------------------|
|occurredAt|The date/time when the deletion was applied.|
|tenant|The ID of the tenant for which the deletion was applied.|
|user|The user who confirmed the deletion, including their email, name and ID.|

Example metadata:

```
{
	"data": null,
	"flow": null,
	"id": "11181d4dc-e041-429c-9eb2-dd0c628472c6",
	"occurredAt": "2021-05-11T10:08:39.537322Z",
	"state": null,
	"tenant": "141b7db7c-7556-4660-b907-da055c5f600a",
	"type": "tenant.clearing.applied",
	"user": {
		"email": "user@example.com",
		"firstName": "Example",
		"id": "326e22f16-23d5-42d7-9844-1ceccd390a69",
		"lastName": "User"
	}
}
```