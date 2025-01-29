# Flow package exported

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-9c5a5e60-38ae-456d-9b5a-a4bfbb461b3f"/>
</head>


This event type indicates that a flow package was exported.

## Overview

**Example**: A package was downloaded on the **Import/Export** page. See [Exporting a flow](c-flo-Export_a_Flow_68fc8c07-7e2a-4011-98f5-d3d40c295277.md).

## Event Entry and metadata

The **Event Entry** form displays the metadata for the event, including:

|Name|Value/Object description|
|:---|:-----------------------|
|flow|The flow that was exported, including the ID, name and version.|
|occurredAt|The date/time when the flow package was exported.|
|tenant|The ID of the tenant from which the flow was exported.|
|user|The user who exported the flow, including their email, name and ID.|

Example metadata:

```
{
	"data": null,
	"flow": {
		"developerName": "Flow name",
		"id": "a1a7d78d-603d-4c27-bc6f-850687d049f37",
		"version": "da59697f-54f9-4ab7-a5b0-652dfe748676e"
	},
	"id": "4dc6f34a-09d4a-4237-a80d-276976bc30ca",
	"occurredAt": "2021-05-11T09:32:44.793128Z",
	"state": null,
	"tenant": "141bd7b7c-7556-4660-b907-da055c5f600a",
	"type": "flow.package.exported",
	"user": {
		"email": "user@example.com",
		"firstName": "Example",
		"id": "326e2216-23fd5-42d7-9844-1ceccd390a69",
		"lastName": "User"
	}
}
```