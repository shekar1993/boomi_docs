# Document Cache components

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-B6C8EDB8-ABB2-4B93-B3FB-72C81EFB77A9"/>
</head>


Document caching enables you to temporarily hold and index Boomi documents within the scope of an integration process.

:::note

Document caching and the Document Cache component are part of the Advanced Workflow and are available only in the Professional and Enterprise Editions of Integration. For more information, contact your account representative.

:::

Document caching lets you add documents to a cache and then reference them later in a process or in a subprocess. This means that you can look up and hold data in memory, and reference that data when you need it in the process. This helps you to avoid making multiple connector calls to an application within a single process in order to look up different types of information. You can get the documents from various sources, index and store the documents you need, and then retrieve the cached documents for use in a process execution. Document caching also allows you to persist data across branches.

Each document becomes an entry in the document cache. If a document contains multiple records that you want to retrieve separately \(as in a batch file\), you must split the document before adding it to the cache.

A document cache can be shared among parent and child processes. You can add documents to the cache in the parent process, and those documents are available in any child processes. However, the document cache is temporary. Documents remain in the cache only for a single execution of a process; either in Test mode or when deployed to production. You can also remove some or all of the documents from the cache during process execution, if you want to reuse the same document cache.

To use document caching, create a Document Cache component. Document Cache components are reusable throughout all of your processes.

Document caching is beneficial because it simplifies data synchronization and integration processes, streamlines repetitive tasks, reduces the risk of errors and inconsistencies, lowers costs in data migration projects, and saves time.

Document caching and Document Cache components are useful if you:

-   Need to combine documents from different sources, including flat file systems and cloud-based applications

-   Work with documents that are missing data or contain inaccurate data, so you have to query other documents or web sites to find the information

-   Need to find default values for an application to use when there is no corresponding data from the source system

-   Need to find industry IDs and codes from outside data sources

-   Have integration processes that repeatedly query a source

-   Are using complex integration processes with multiple Set Properties steps.

-   Need to send or receive SOAP messages with MIME attachments. The attachments are stored in a document cache.

-   Need to send MIME messages with attachments. The attachments are stored in a document cache.


However, remember the following when using a document cache:

-   A document cache can only be accessed in the scope of the current process execution.

-   You cannot persist data in a cache across multiple executions or processes. The contents of a cache are deleted upon the completion of each process execution.

:::note

The following resources provide more in-depth information about the capabilities of document caching:

-   Watch the [Document Caching video](http://bcove.me/pln9v7tt) to learn about document caching functionality and to see an integration scenario.
-   Learn about common errors and behaviors in [Document Cache Best Practices and Common Scenarios](https://community.boomi.com/s/article/document-cache-best-practices-and-common-scenarios).

:::