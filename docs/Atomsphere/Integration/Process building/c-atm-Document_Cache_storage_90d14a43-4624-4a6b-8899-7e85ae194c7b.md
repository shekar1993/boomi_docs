# Document Cache storage

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-90d14a43-4624-4a6b-8899-7e85ae194c7b"/>
</head>


A document cache's documents and indexes are stored to disk within the Atom directory. The documents and indexes are loaded into memory when needed. Storing the document cache's documents and indexes to disk during the process execution reduces the amount of memory used by the process and allows the handling of large volumes of data.

There is no size limit on a document cache. However, because document caches are temporarily stored on your hard disk, they are limited to the space that you have available there.

If you use document caching and run your processes on a Molecule or Atom Cloud, the document cache is distributed within the Molecule or Atom Cloud. Therefore, parallel processing can take advantage of it. See the Flow Control step for more information on parallel processing.

Once a process either runs through Test mode or is deployed and run, the cached documents are purged from the Atom. The cache is temporary and cannot be used by another process.

## Low Latency processes and Document Caches

Any data written to disk greatly increases processing time, therefore low latency processes that use document caches are handled differently. To allow low latency processes to execute quickly, their cached documents and indexes are stored to disk only under certain conditions.

-   Cloud owners can set the Atom Working Overflow Size quota \(on the Attachment Quotas tab in Cloud Management\). For low latency processes, this quota limits the number of bytes per working datastore maintained in memory before overflowing to disk. If this quota is set, and if the low latency process’ index exceeds the quota, the index is stored to disk. If the process’ cached documents exceed the quota, they will be stored to disk.

-   If the Atom Working Overflow Size quota is not set, then there is a 1 MB limit for indexes and a 1 MB limit for cached documents. If the low latency process’ index is greater than 1 MB, it is stored to disk. If the low latency process’ cached documents are greater than 1 MB, then they are stored to disk.