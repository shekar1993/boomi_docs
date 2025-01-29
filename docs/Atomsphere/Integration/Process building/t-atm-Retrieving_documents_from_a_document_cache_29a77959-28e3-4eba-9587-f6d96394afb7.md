# Retrieving documents from a document cache

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-29a77959-28e3-4eba-9587-f6d96394afb7"/>
</head>

Use a Retrieve From Cache step to retrieve documents from a document cache so that they can be used in the currently executing process or subprocess.

1. Drag the **Retrieve From Cache** step onto the process canvas.

   The Retrieve From Cache step dialog opens.

2. Enter a display name for the step.

3. Select or create a Document Cache component.

4. Indicate which documents should be retrieved from the specified document cache:

   - **All Documents** — Retrieves all documents from the document cache.

   - **indexName** — Retrieves documents that are associated with the selected index.

   :::note

   Retrieving all documents from the document cache is available only if the **Enforce one index entry per document** option is in effect for the specified Document Cache component. If that option is not in effect, documents can be retrieved only by index name.

   :::

5. **Optional:** If you are retrieving documents by index name, specify a parameter value for each key within the selected index.

6. Click **OK**.
