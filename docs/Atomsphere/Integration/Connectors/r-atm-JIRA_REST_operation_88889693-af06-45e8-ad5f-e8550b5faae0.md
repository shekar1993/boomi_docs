import OperationEnd from './_operationEnd.md'
import TrackingDir from './_TrackObject.md'
import ReturnErrRes from './_ReturnResponse.md'

# JIRA REST operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-88889693-af06-45e8-ad5f-e8550b5faae0"/>
</head>


The JIRA REST operation defines how to interact with your JIRA service.

An operation represents a specific action, such as Create or Query, performed against a JIRA object type.

You must create a separate operation component for each action and object combination required for your integration.

The JIRA REST operation supports the following actions:

-   **Query** \(inbound\)

-   **Create** \(outbound\)

-   **Delete** \(outbound\)

-   **Update** \(outbound\)


You can avoid some operation errors by being aware of the following:

-   \[500\] Internal Server Error — occurs when updating an Issue Transition with an invalid transition ID.
-   Attachment content is in Base64 format — the connector expects attachments to be in base64 format. When inserting an attachment into an issue, supply the content to the attachBodyBase64 field.

-   Simple expression support — Project, Issue Attachment, Issue Link, and Issue Transition support only simple expression queries.


## **Options** tab 

Click **Import Operation**, then use the Import wizard to select the object you want to integrate. The following table describes the field definitions for each action type:



<TrackingDir />

<ReturnErrRes />

**Batch Size** \(Query only\) -  
 Used to specify the number of documents to include per batch. The default is 200; the maximum number of documents allowed in batch is 1000.

<OperationEnd />