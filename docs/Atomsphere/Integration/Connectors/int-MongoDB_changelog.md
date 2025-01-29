# MongoDB changelog

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-6d4b480b-8736-4cef-b97a-9c4868732469"/>
</head>


## Changelog

**2024-07 (Version 9, Current)**

- The connector has improved exception handling.

- Memory usage optimization for Get and Query operations.

- Enhancement to support Azure CosmosDB MongoDB variant for Get and Query operation by addressing the default 1MB document size limit restriction. Maximum document size can be controlled via new container property - `com.boomi.connector.mongodb.maxDocumentSize`.

- For Cosmos DB, `com.boomi.connector.mongodb.maxDocumentSize` should be set to less than 1, in this case the size limit restriction of the document will be removed.

**2024-01 (Version 8)**

- Necessary runtime packages are now packaged with the connector.
- Vulnerability issue of type Denial of Service was resolved to make the Connector more secure.
- The connector supports the latest driver version 6.0.

**2023-11 (Version 7)**

- The connector now successfully creates structured and unstructured JSON profiles for MongoDB collections (including Blank Array(s)) without throwing an exception.

- The Query operation successfully executes without throwing an Arithmetic Exception when the Batch size is set to 0.