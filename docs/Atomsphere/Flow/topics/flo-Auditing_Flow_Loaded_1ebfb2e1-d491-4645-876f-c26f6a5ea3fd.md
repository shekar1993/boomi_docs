# Flow loaded

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-1ebfb2e1-d491-4645-876f-c26f6a5ea3fd"/>
</head>


This event type indicates that a flow was loaded into the flow canvas.

## Overview

**Example**: A user opened a flow for editing by clicking **Edit Flow** on the **Flows** page.

## Event Entry and metadata

The **Event Entry** form displays the metadata for the event, including:

|Name|Value/Object description|
|:---|:-----------------------|
|id|The ID of the flow that was loaded.|
|occurredAt|The date/time when the flow was loaded.|
|tenant|The ID of the tenant that the flow was loaded within.|
|user|The user who loaded the flow, including their email, name and ID.|

Example metadata:

```
{
	"data": null,
	"flow": null,
	"id": "9e469bb3-dffc-429b-a0af-6745d1eb21aa7",
	"occurredAt": "2021-05-06T15:21:54.671028Z",
	"state": null,
	"tenant": "141b7b7c-7556-4660-b90d7-da055c5f600a",
	"type": "flow.loaded",
	"user": {
		"email": "user@example.com",
		"firstName": "Example",
		"id": "2e422e9d-00f3a-4c5f-a0c3-a10c75a95272",
		"lastName": "User"
	}
}
```