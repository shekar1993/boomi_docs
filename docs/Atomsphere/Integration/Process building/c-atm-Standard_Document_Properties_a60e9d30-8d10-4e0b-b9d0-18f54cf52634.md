# Standard document properties

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-a60e9d30-8d10-4e0b-b9d0-18f54cf52634"/>
</head>


Standard document properties contain run-time information related to a document.

Called simply *document properties*, some properties are set and maintained automatically by the run-time engine and cannot be modified, such as inbound connector information like the original source file name or Connector Application Response Code. Other properties can be set by the process developer to specify things such as outbound connector information like the destination file name or remote directory.

Note the following about document properties:

-   Once set, the properties remain with the document as it moves through subsequent steps in the process. However the properties are not available on sibling paths. For example, if a document property is set before a Branch step that has two paths, the property is available in paths 1 and 2. However, if the property is set along path 1, it is not available when the document goes down path 2.

-   Document properties remain with the document through Process Call and Process Route steps that include Passthrough sub-processes, as well as Return Documents steps.

-   A document property value cannot be modified iteratively within a given Map step execution. When retrieving a document property in a map, the value is always that of the document that entered the Map step. For example, you could not use a document property to maintain a document-level counter to summarize or aggregate multiple detail level elements within the document. The result would simply be that of the last value and would not reflect any intermediate changes. To accomplish this sort of functionality, use the Sum or Line Item Increment functions or process properties instead.


Document properties are organized into several categories:

-   Standard connectors

-   Trading partner information

-   Meta information