import TrackingDir from './_TrackObject.md'
import ReturnErrRes from './_ReturnResponse.md'
import OperationEnd from './_operationEnd.md'

# Taleo REST operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-acac7cfd-35e7-4dc1-bcaf-bc079dd27eb9"/>
</head>


The Taleo REST operation defines how to interact with your Taleo account instance and represents a specific action \(Query, Create, etc.\) performed against a specific Taleo object type \(Requisition, Candidate, Employee, etc.\).

Not all objects are available for each action. Create a separate operation component for each action/object combination required for your integration.

:::note

Contact your Taleo representative to learn more about the API requirements for Taleo and how to access other resources in the user community for field definitions.

:::

The Taleo REST operation supports the following actions:

-   Inbound: Get, Query

    Configure the Taleo REST operation to retrieve object records from a Taleo account. For all inbound operations, unique parameters are required at runtime to request data. Review the linked topic about parameter values to understand how to statically or dynamically define these values in a process for runtime.

    To use the Get or Query action with the `Status` object, add to the connector’s Parameters tab the entityCode and ID in this format: `entityCode/ID,` for example: `CAND/5002`. You cannot use the entityType with the `Status` object.

-   Outbound: Create, Update, Upsert, Delete

    Configure the Taleo REST operation to send data to a Taleo account. For all outbound operations, send request XML data into the connector that corresponds with the defined XML profile. Request documents are typically the destination output of a map. However, you can also set parameters on the outbound connector's Parameter tab within the process to supply static or dynamic request values.


## Fields and objects 

The Taleo REST operation supports custom fields. The Taleo REST operation does not support the following objects:

-   `parseresume`

-   `resumetocandidate`


Taleo’s XML-based REST API does not support some characters. When defining custom field external names within Taleo, names can contain only:

-   lowercase \(a-z\)
-   uppercase \(A-Z\)
-   numbers \(0–9\)


Custom field names **cannot** start with a number.

## Attachments 

You can use the Get, Query, Create, Delete, and Update actions with attachment objects. These characteristics apply to the different actions:

-   **Get** — the response profile is set to “Unstructured”. The output documents consist of the contents of the attachment. Provide the ID in the following format: `<entityID>:<attachmentID>`.
-   **Delete** — provide the ID in the following format: `<entityID>:<attachmentID>`

-   **Create and Update** — the request profile is set to “Unstructured”. Each input document consists of the content of the attachment that is being created or updated. and must have the following dynamic document properties set on it:

    -   **attachmentId** — For the Create action, set to the ID of the entity that the attachment is being attached to. For the Update action, set to the attachment ID. The format is `<entityID>:<attachmentID>`.

    -   **fileName** — The name of the attachment.

    -   **contentType** — The content type of the attachment, for example “application/pdf” if you are attaching a PDF.

    -   \(Optional\) **description** — A description of the file.


## Options tab 

Click **Import Operation**, then use the Import wizard to select the object with which you want to integrate.

The following table describes the default field definitions for each action type:

<TrackingDir />

**Request/Response Profile** - 
The XML profile definition that represents the XML structure that is being sent or received by the connector. When you use the Get, Create, or Update action with an attachment object, the request or response profile is set to “Unstructured”.

<ReturnErrRes />

## Get 

Get is an inbound action that retrieves from Taleo Business Edition a single record of the object type defined in the Get operation.

The Get action requires a different ID format for these objects:

-   **Employee and Candidate Rolling Entities** — `<employeeID>:<rollingEntityID>` or `<candidateID>:<rollingEntityID>`, for example: `41:2112`. This format applies to employee and candidate rolling entities objects: employee work history, employee education, employee certification, employee reference, employee residence, candidate work history, candidate education, candidate certification, candidate reference, and candidate residence.
-   **Entity Link** — `<entityType1>/<entityID1>/<entityType2>/<entityID2>`, for example: `account/2/candidate/468`.


## Query 

Query is an inbound action that returns zero to many object record documents from a single Query request based on zero or more filters. After selecting the Query action and using the Import Wizard, you can add a "Like" or "Between" query filter where:

-   "Like" filters character data for a string contained anywhere within the field.
-   "Like" filters numeric data equal to the field value.
-   "Between" filters objects added or updated within a specified number of days. The values are returned in the response profile’s `AddedWithin` and `UpdatedWithin` fields.

## Create 

Create is an outbound action that creates new records in the Taleo object defined in the operation. You cannot use the Create action to create offer letters nor can you use it with the `display field` object.

## Update 

Update is an outbound action that updates existing records in the Taleo object defined in the operation. You cannot use the Update action with the `display field` object; use the Upsert action instead.

The Update action requires a different ID format `<employeeID>:<rollingEntityID>` or `<candidateID>:<rollingEntityID>`, for example: `41:2112` This format applies to employee and candidate rolling entities objects: employee work history, employee education, employee certification, employee reference, employee residence, candidate work history, candidate education, candidate certification, candidate reference, and candidate residence.

## Upsert 

Upsert is an outbound action that either creates a new record if one does not exist or updates a record if it does.

## Delete 

Delete is an outbound action that deletes an existing record from the Taleo object defined in the operation. You cannot use the Delete action with the `display field` object.

The Delete action requires a different ID format for these objects:

-   **Employee and Candidate Rolling Entities objects** — `<employeeID>:<rollingEntityID>` or `<candidateID>:<rollingEntityID>`, for example: `41:2112`. This format applies to employee and candidate rolling entities objects: employee work history, employee education, employee certification, employee reference, employee residence, candidate work history, candidate education, candidate certification, candidate reference, and candidate residence.
-   **Entity Link** — `<entityType1>/<entityID1>/<entityType2>/<entityID2>`. For example: `account/2/candidate/468`.

<OperationEnd />