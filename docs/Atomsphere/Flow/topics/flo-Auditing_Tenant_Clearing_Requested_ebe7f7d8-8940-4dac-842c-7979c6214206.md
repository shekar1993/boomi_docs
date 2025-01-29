# Tenant clearing requested

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-ebe7f7d8-8940-4dac-842c-7979c6214206"/>
</head>


This event type indicates that a request was made for deletion of data from a tenant.

## Overview

**Example**: A tenant Administrator uses the **API** tool to delete data from a tenant. When deleting data from a tenant, an email confirmation link is sent, that must be clicked in order to confirm the data deletion request.

:::note

This event type is related to the [Tenant clearing applied](flo-Auditing_Tenant_Clearing_Applied_615bb83e-bffe-4760-aa26-d368b30ade82.md) event type.

:::

## Event entry and metadata

The **Event Entry** form displays the metadata for the event, including:

|Name|Value/Object description|
|:---|:-----------------------|
|occurredAt|The date/time of the deletion request.|
|tenant|The ID of the tenant for which the deletion was requested.|
|user|The user who requested the deletion, including their email, name and ID.|

Example metadata:

```
{
	"data": null,
	"flow": null,
	"id": "15cb17f2-48f2-4d3d6-811d-78e2d1b562c5",
	"occurredAt": "2021-05-11T10:07:17.173931Z",
	"state": null,
	"tenant": "141b7b7c-755d6-4660-b907-da055c5f600a",
	"type": "tenant.clearing.requested",
	"user": {
		"email": "user@example.com",
		"firstName": "Example",
		"id": "326e2216-2d3d5-42d7-9844-1ceccd390a69",
		"lastName": "User"
	}
}
```