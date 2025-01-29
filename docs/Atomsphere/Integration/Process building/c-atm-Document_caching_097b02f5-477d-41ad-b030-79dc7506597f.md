# Document caching

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-097b02f5-477d-41ad-b030-79dc7506597f"/>
</head>


These are the general steps for using document caching:

1.  Create a Document Cache component, which determines which documents are cached and how they are indexed.

2.  Add documents to the document cache so that they can be used in a process or subprocess. There are two ways to add documents to a cache:

    1.  You can bring data into a process and then use the Add to Cache step to add documents to the document cache. The Add to Cache step references a Document Cache component.

    2.  You can specify on a connector operation that documents returned by the connector call should be added to the selected document cache. This is set up on the connector operation's Caching tab. If you use this method, it is in effect combining a connector call and an Add to Cache step.


After documents have been added to the cache, there are several ways to retrieve data from those documents:

-   You can join multiple sources in a map by adding documents from document caches. After adding the document caches to the source profile, you can map elements from the document caches and source profile to the destination profile's elements.

-   You can query a Document Cache component in every place that you can use a parameter value. You can use parameter values in the following steps: Connector \(on the Parameters tab\), Decision, Exception, Message, Notify, Program Command, and Set Properties. You can output a single field from a single document.

-   You can use the Retrieve From Cache step in your process, which retrieves documents from the selected Document Cache component. You can output multiple documents from a single document.

-   You can select a document cache lookup function in maps to retrieve particular fields from a document.

:::note

When documents are retrieved from a document cache for use in a process, they replace the current document data and its document properties with those from the cache.

:::