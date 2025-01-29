# Flat file profile's Data Elements tab, Record View

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-72081e3f-2e7a-49f2-8f87-1140693b31e6"/>
</head>


The Data Elements tab contains a tree-like representation of the record formats and elements that define the structure of the data set.

Most flat file profiles only contain a single record format, but it is possible to configure multiple record formats to accommodate more sophisticated data structures. See Working with multiple record formats for more information.

The Record View contains configuration options for the record format.

**Name**   
**Description**

**Record Name**   
User-defined alias name of the record format. This value is arbitrary.

**Position** 
Number that indicates the record's location in relation to its parent.

**Detect This File Format By**   
Determines how to detect the given record format. This is always "Number of columns" except when working with multiple record formats. The available values are:

-   Number of columns \(default\)

-   Specified unique values