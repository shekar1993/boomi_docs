# Dynamic document properties

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-89d2f7a0-a490-4f35-a8b1-96af364f0211"/>
</head>


Dynamic document properties are properties that the process developer can define and use to temporarily store additional pieces of information about a given document.

They are essential arbitrary name/value pairs that follow the document through its execution, through map transformations, and outbound connector calls. These properties are highly flexible and can be used to improve performance, robustness, and sophistication of your processes.

**Common uses**

Here are some common uses for dynamic document properties:

-   Maintaining source record context — This is the most common use case, enabling better logging/error reporting and facilitating "write backs" to the source application for synchronization scenarios.

-   Augmenting current document data — A variation of the previous scenario, you can capture values that are not defined in the current document data or profile. These values can be used for routing, decisions, logging, etc. The use of document properties to capture additional temporary values not contained in the source data is a simpler approach than having to map the document to an intermediate proprietary profile format.

-   Abstracting data from profiles — Pass documents with different data formats \(i.e., different profiles\) through the same series of steps or a subprocess. By setting and referencing a property, you can avoid replicating the same process step configuration for each profile format encountered.


To read some examples about how dynamic document properties are commonly used, see the topic [Dynamic document property examples](c-atm-Dynamic_Document_Property_Examples_64f74c98-7490-4b78-b0a4-266db66a5f5d.md).

**Considerations**

Consider the following information when using dynamic document properties:

-   The retrieved value must exactly match the set property name. It is helpful to establish a naming convention to reduce typos, such as using all caps with underscores or dashes for spaces.

-   Property names are case-sensitive.

-   Property values are always stored as characters. This is important if you plan to store numeric- or date-type values because you may need to cast or reformat when retrieving or mapping them later.

-   There is no limit to the number of dynamic document properties you can set.

-   There is no maximum size limit for a dynamic document property’s value. However, because document properties are managed as simple strings and not as streams, their entire contents are held in memory when they are in use. As a result, using large values can cause memory issues with your process execution.