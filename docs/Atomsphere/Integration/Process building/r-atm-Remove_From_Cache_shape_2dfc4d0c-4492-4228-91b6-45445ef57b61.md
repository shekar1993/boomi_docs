# Remove From Cache step 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-44071B8D-EA1B-4079-8708-371034BF15E1"/>
</head>


The Remove From Cache step is used to remove documents from a document cache so that they are no longer available for use in the currently executing process or subprocess. The Remove From Cache step references a Document Cache component, which describes how the cache is defined.

![Remove from cache icon](../Images/step-ic-remove-from-cache-32_c5b8e1c7-760c-4dc7-9fc5-e08609771a8a.jpg)

:::note

This step is part of the Advanced Workflow and is available only in the Professional, Professional Plus, Enterprise, and Enterprise Plus Editions of Integration. Contact your Boomi account representative for more information.

:::

:::note

When documents are retrieved from a document cache for use in a process, they replace the current document data and its document properties with those from the cache.

:::

## Remove From Cache step dialog 

**Name**  
**Description**

**Display Name**  
 \(Optional\) User-defined name to describe the step. If you do not specify one, no label appears on the step.

**Document Cache**  
Used to select or create the Document Cache component from which documents will be removed.

**Retrieve**  
Used to indicate which documents should be removed from the specified Document Cache component.

 -   **All Documents** — Retrieves all documents from the document cache.

 -   **indexName** — Retrieves documents that are associated with the selected index.

:::note

Retrieving all documents from the document cache is available only if the **Enforce one index entry per document** option is in effect for the specified Document Cache component. If that option is not in effect, documents can be retrieved only by index name.

:::

**Empty Cache Behavior**

When retrieving All Documents, this option allows you to define how the Retrieve From Cache step behaves in the event it receives an empty document cache:

- **Stop document execution (recommended)** (Default) - Ends document processing without returning errors in Test Mode, Process Reporting, event logs, etc.

  :::note

  This option is recommended because an empty document cache is typically not considered a process failure. The 'Fail documents with errors' option is offered for backward compatibility.

  :::

- **Fail document with errors** - Fails the document and returns an error in Test Mode, Process Reporting, event logs, etc.

**Keys**  
When removing documents by index name, the keys within the selected index are displayed. Each key corresponds to an element in the source profile.

Documents that contain these elements and that have parameter values will be removed from the document cache.

**Parameter Value**  
When removing documents by index name, used to select a parameter value for each key. For more information, see the Parameter Values topic.