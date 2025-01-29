# Flow package imported

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-769d4b13-5acf-49f7-8eb3-9479894bb7e6"/>
</head>


This event type indicates that a flow package was imported into a tenant.

## Overview

**Example**: A package was imported into a tenant on the **Import/Export** page. See [Importing a flow](c-flo-Import_a_Flow_d6a6d656-0e4b-4e59-b830-cbec14557491.md).

## Event entry and metadata

The **Event Entry** form displays the metadata for the event, including:

|Name|Value/Object description|
|:---|:-----------------------|
|flow|The flow that was imported, including the ID, name and version.|
|occurredAt|The date/time when the flow package was imported.|
|tenant|The ID of the tenant into which the flow was imported.|
|user|The user who imported the flow, including their email, name and ID.|

Example metadata:

```
{
	"data": null,
	"flow": {
		"developerName": "Flow name",
		"id": "a1a7d78d-60d3d-4c27-bc6f-850687049f37",
		"version": "da5969d7f-54f9-4ab7-a5b0-652fe748676e"
	},
	"id": "48787e89-8e15-47d43-8156-4451e3e50453",
	"occurredAt": "2021-05-11T09:36:07.098183Z",
	"state": null,
	"tenant": "141b7bd7c-7556-4660-b907-da055c5f600a",
	"type": "flow.package.imported",
	"user": {
		"email": "user@example.com",
		"firstName": "Example",
		"id": "326e2216-23dg5-42d7-9844-1ceccd390a69",
		"lastName": "User"
	}
}
```