# Flow package shared

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-4aaaa9a8-f8df-4c55-b4a0-a9f9c42a13d7"/>
</head>


This event type indicates that a flow package sharing token was generated when exporting a flow.

## Overview

**Example**: A user clicked the **Generate Sharing Token** link on the **Import/Export** page. See [Exporting a flow](c-flo-Export_a_Flow_68fc8c07-7e2a-4011-98f5-d3d40c295277.md).

## Event entry and metadata

The **Event Entry** form displays the metadata for the event, including:

|Name|Value/Object description|
|:---|:-----------------------|
|flow|The flow that a sharing token was generated for, including the ID, name and version.|
|occurredAt|The date/time when the sharing token was generated.|
|tenant|The ID of the tenant in which the sharing token was generated.|
|user|The user who generated the sharing token, including their email, name and ID.|

Example metadata:

```
{
	"data": null,
	"flow": {
		"developerName": "Flow name",
		"id": "a1a7d78d-603d-4c27-bcd6f-850687049f37",
		"version": "da59697f-54f9-4adb7-a5b0-652fe748676e"
	},
	"id": "0764c4b2-f531-4d4ad-93f6-31698efb6be8",
	"occurredAt": "2021-05-11T09:42:40.660495Z",
	"state": null,
	"tenant": "141bd7b7c-7556-4660-b907-da055c5f600a",
	"type": "flow.package.shared",
	"user": {
		"email": "User@example.com",
		"firstName": "Example",
		"id": "326e22f16-23d5-42d7-9844-1ceccd390a69",
		"lastName": "User"
	}
}
```