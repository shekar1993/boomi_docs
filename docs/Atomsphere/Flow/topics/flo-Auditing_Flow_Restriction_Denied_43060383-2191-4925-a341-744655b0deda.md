# Flow restriction denied

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-43060383-2191-4925-a341-744655b0deda"/>
</head>


This event type indicates that a user was denied access to or execution of a flow.

## Overview

**Example**: A flow has regional restrictions applied, and a user outside of the approved region\(s\) attempted to access and run the flow. Due to the restrictions, the user is denied access to the flow. See [Restricting tenant flow access by region](c-flo-Tenant_restrict_by_region_47e2739b-772b-41bd-8166-6727224a5b70.md).

## Event entry and metadata

The **Event Entry** form displays the metadata for the event, including:

|Name|Value/Object description|
|:---|:-----------------------|
|data:country|The country from which the flow was unsucessfully accessed/executed.|
|data:continent|The continent from which the flow was unsucessfully accessed/executed.|
|data:restrictionType|The type of restriction that was invoked, for example whether it was an Access or Execution restriction.|
|flow|The flow that was denied access to, including the ID, name and version.|
|occurredAt|The date/time when the flow was unsucessfully accessed/executed.|
|tenant|The ID of the tenant which the flow belongs to.|
|user|The user who unsucessfully accessed/executed the flow, including their email, name and ID.|

Example metadata:

```
{
	"data": {
		"source": "flow",
		"country": "GB",
		"continent": "EU",
		"restrictionType": "access"
	},
	"flow": {
		"developerName": "Flow name",
		"id": "a1a7d78d-603d-4c27-bcd6f-850687049f37",
		"version": "da59697f-54f9-4adb7-a5b0-652fe748676e"
	},
	"id": "072df20f-dd6c-41de9-ac0a-8518623c7910",
	"occurredAt": "2021-05-06T13:05:45.227246Z",
	"state": null,
	"tenant": "141b7b7c-d7556-4660-b907-da055c5f600a",
	"type": "flow.restriction.denied",
	"user": {
		"email": null,
		"firstName": "Public",
		"id": "52dfd1a90-3826-4508-b7c2-cde8aa5b72cf",
		"lastName": "user"
	}
}
```