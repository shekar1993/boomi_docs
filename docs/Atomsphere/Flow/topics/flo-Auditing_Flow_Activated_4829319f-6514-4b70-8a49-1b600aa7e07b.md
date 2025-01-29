# Flow activated

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-4829319f-6514-4b70-8a49-1b600aa7e07b"/>
</head>


This event type indicates that a flow version was activated.

## Overview

Activating a flow version means that it will be used as the default version of the flow.

**Example**: A specific version of a flow was activated by applying the setting `"isDefault": true,` to the flow metadata.

## Event Entry and metadata

The **Event Entry** form displays the metadata for the event, including:

|Name|Value/Object description|
|:---|:-----------------------|
|flow|The flow version that was activated, including the flow ID, name and version ID.|
|occurredAt|The date/time when the flow was activated.|
|tenant|The ID of the tenant that the flow belongs to.|
|user|The user who activated the flow, including their email, name and ID.|

Example metadata:

```
{
	"data": null,
	"flow": {
		"developerName": "Flow name",
		"id": "a1a7d78d-603d-4c27-bc6f-850687049f37e",
		"version": "da59697f-54f9-4ab7-a5b0-652fe748676ee"
	},
	"id": "9c095130-138f-4f9e-ae49-22d8fff55e84f",
	"occurredAt": "2021-05-11T08:30:10.045564Z",
	"state": null,
	"tenant": "141b7b7c-7556-4660-b907-da055c5f600af",
	"type": "flow.activated",
	"user": {
		"email": "user@example.com",
		"firstName": "Example",
		"id": "326e2216-23d5-42d7-9844-1ceccd390a69e",
		"lastName": "User"
	}
}
```