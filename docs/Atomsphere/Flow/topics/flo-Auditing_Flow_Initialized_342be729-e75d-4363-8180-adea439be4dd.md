# Flow initialized

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-342be729-e75d-4363-8180-adea439be4dd"/>
</head>


This event type indicates that a flow was initalized, i.e. a runtime instance of the flow was launched/started by a user.

## Overview

**Example**: A flow was launched and run in a browser by a user for the first time, creating a new state in the process \(unless an initialization error occurred\).

## Event Entry and metadata

The **Event Entry** form displays the metadata for the event, including:

|Name|Value/Object description|
|:---|:-----------------------|
|flow|The flow that was initialized, including the flow ID, name and version ID.|
|occurredAt|The date/time when the flow was initialized.|
|tenant|The ID of the tenant that the flow belongs to.|
|user|The user who initialized the flow, including their email, name and ID.|

Example metadata:

```
{
	"data": null,
	"flow": {
		"developerName": "Flow name",
		"id": "ccbafb93-f7a6-4cf9-850a-30854c5996de2",
		"version": "70fda7a7-5414-4a57-91ba-4d334d2f624fd"
	},
	"id": "85293b5e-2ddb-4010-b9ddb-6b4879f22035",
	"occurredAt": "2021-05-06T13:04:15.318015Z",
	"state": null,
	"tenant": "141b7b7cd-7556-4660-b907-da055c5f600a",
	"type": "flow.initialized",
	"user": {
		"email": null,
		"firstName": "Public",
		"id": "52df1a90-3826-4508-b7c2-cdde8aa5b72cf",
		"lastName": "user"
	}
}
```