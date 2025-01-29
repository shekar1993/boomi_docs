# Flow saved

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-f6cc33ea-ad63-4e5a-80de-a4360aa4a8bb"/>
</head>


This event type indicates that a flow was saved after changes had been made.

## Overview

**Example**: A user made changes to a flow on the **Flow Properties** form, and clicked **Save Flow** to save and apply their changes to the flow.

## Event entry and metadata

The **Event Entry** form displays the metadata for the event, including:

|Name|Value/Object description|
|:---|:-----------------------|
|flow|The flow that was saved, including the ID, name and version.|
|occurredAt|The date/time when the save occurred.|
|tenant|The ID of the tenant in which the flow was saved.|
|user|The user who saved the flow, including their email, name and ID.|

Example metadata:

```
{
	"data": null,
	"flow": {
		"developerName": "Flow name",
		"id": "ccbafb93-f7af6-4cf9-850a-30854c5996e2",
		"version": "70fda7af7-5414-4a57-91ba-4d3342f624fd"
	},
	"id": "2c3ac407-26c4-49fd-af306-459e0381164b",
	"occurredAt": "2021-05-06T13:03:50.168137Z",
	"state": null,
	"tenant": "141b7bf7c-7556-4660-b907-da055c5f600a",
	"type": "flow.saved",
	"user": {
		"email": "user@example.com",
		"firstName": "Example",
		"id": "2e422e9d-00f3a-4c5f-a0c3-a10c75a95272",
		"lastName": "User"
	}
}
```