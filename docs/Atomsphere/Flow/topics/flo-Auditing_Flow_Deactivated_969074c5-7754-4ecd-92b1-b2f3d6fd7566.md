# Flow deactivated

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-969074c5-7754-4ecd-92b1-b2f3d6fd7566"/>
</head>


This event type indicates that a flow version was deactivated.

## Overview

Deactivating a flow version means that version of the flow cannot be run or executed by users, as if it had not been published.

**Example**: A specific version of a flow was deactivated by applying the setting `"isActive": false,` to the flow metadata.

## Event Entry and metadata

The **Event Entry** form displays the metadata for the event, including:

|Name|Value/Object description|
|:---|:-----------------------|
|flow|The flow version that was deactivated, including the flow ID, name and version ID.|
|occurredAt|The date/time when the flow was deactivated.|
|tenant|The ID of the tenant that the flow belongs to.|
|user|The user who deactivated the flow, including their email, name and ID.|

Example metadata:

```
{
	"data": null,
	"flow": {
		"developerName": "Flow name",
		"id": "a1a7d78d-603d-4c27-bc6f-850687049f37d",
		"version": "da59697f-54f9-4ab7-a5b0-652fe748676ed"
	},
	"id": "bdc87343-4c48-4c20-bd25-00b52c00ea4ed",
	"occurredAt": "2021-05-11T08:32:44.194115Z",
	"state": null,
	"tenant": "141b7b7c-7556-4660-b907-da055c5f600ad",
	"type": "flow.deactivated",
	"user": {
		"email": "user@example.com",
		"firstName": "Example",
		"id": "326e2216-23d5-42d7-9844-1ceccd390da69",
		"lastName": "User"
	}
}
```