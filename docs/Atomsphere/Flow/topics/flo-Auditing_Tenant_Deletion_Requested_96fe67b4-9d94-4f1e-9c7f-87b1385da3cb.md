# Tenant deletion requested

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-96fe67b4-9d94-4f1e-9c7f-87b1385da3cb"/>
</head>


This event type indicates that a request was made to delete a tenant.

## Overview

**Example**: An Organization Administrator began the process for deleting a tenant from an Organization by clicking on the **Delete** icon for a tenant on the **Organization Settings** page.

Once a deletion request is made, an email link is sent, which must be clicked to confirm and action the tenant deletion. See [Deleting a tenant](t-flo-Tenant_Deleting_a76a13d5-8816-4a8b-9938-dcd1d295da31.md).

## Event entry and metadata

The **Event Entry** form displays the metadata for the event, including:

|Name|Value/Object description|
|:---|:-----------------------|
|occurredAt|The date/time of the deletion request.|
|tenant|The ID of the tenant that the deletion request was made for.|
|user|The user who requested the tenant deletion, including their email, name and ID.|

Example metadata:

```
{
	"flow": null,
	"id": "b96f9d155-40d3a-41d4-bf16-0767750a68e3",
	"occurredAt": "2021-05-11T10:30:43.511634Z",
	"state": null,
	"tenant": "141bd7db7c-7556-4660-b907-da055c5f600a",
	"type": "tenant.deleted",
	"user": {
		"email": "user@example.com",
		"firstName": "Example",
		"id": "326ef2216-23d5-42d7-9844-1ceccd390a69",
		"lastName": "User"
	}
}
```