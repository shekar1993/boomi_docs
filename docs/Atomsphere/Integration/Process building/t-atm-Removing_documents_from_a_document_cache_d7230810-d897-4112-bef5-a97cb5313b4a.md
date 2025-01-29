# Removing documents from a document cache

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-d7230810-d897-4112-bef5-a97cb5313b4a"/>
</head>


Use a Remove From Cache step to remove documents from a document cache so that they are no longer available for use in the currently executing process or subprocess.

## Procedure

1.  Drag the **Remove From Cache** step onto the process canvas.

    The Remove From Cache step dialog opens.

2.  Enter a display name for the step.

3.  Select or create a Document Cache component.

4.  Indicate which documents should be removed from the specified document cache:

    -   **All Documents** — Removes all documents from the document cache.

    -   **indexName** — Removes documents that are associated with the selected index.

    :::note

    Removing documents by index name is available only if the **Enforce one index entry per document** option is in effect for the specified Document Cache component. If that option is not in effect, all documents will be removed from the document cache.

    :::

5.  If you are removing documents by index name, specify a parameter value for each key within the selected index.

6.  Click **OK**.