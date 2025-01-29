# Add to Cache step

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-AC457998-783B-4171-B72B-235C85F4FF7D"/>
</head>


The Add to Cache step is used to add documents to a document cache so that they can be referenced later in the currently executing process or subprocess. The Add to Cache step references a Document Cache component, which describes how the cache is defined.

![Add to Cache icon](../Images/step-ic-add-to-cache-32_55d42bae-ed57-4200-884a-35644bc14b01.jpg)

The documents coming into the Add to Cache step must be of the same profile type as the one defined in the document cache. If the profiles types do not match \(for example, if flat files are sent to the step but the document cache uses an XML profile\), you receive an error message when you run the process.

When the Document Cache component is used by the Add to Cache step:

-   All the values for all keys are loaded into the indexes. If any key values in the source documents are null or empty, the Add to Cache step fails and you receive an error.

-   Documents are indexed, which means they are organized by index and by key.

-   The indexes and documents are stored in the document cache.

:::note

When a document is added to a document cache, the entire document and all of the indexes for that document are stored.

:::

If you have flat file or database documents that contain many records, consider using the Data Process step's Split Documents process type to split the documents by line before adding them to the cache. Splitting documents by line enables you to map individual records from the cache.

## Add to Cache Dialog

**Name**   
**Description**

**Display Name**   
\(Optional\) User-defined name to describe the step. If you do not specify one, no label appears on the step.

**Document Cache**   
Used to choose or create the Document Cache component to which documents will be added.