# OData API query passthrough

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-19dcdfab-ac7e-40aa-98de-4cb188d6225d"/>
</head>


If a Get Entity action with the **Query Passthrough** option is specified for an entity, query filtering is applied within the listener process linked to the action.

Architecting an OData service action to allow query passthrough is recommended for use with large data sets. A service otherwise incurs the overhead of initially retrieving all documents when servicing a Get Entity action request, which can affect the service’s performance.

If the $filter component is present in the request URI for the action, the Web Services Server operation in the linked listener process transforms the specified filter to a document that specifies an XML-formatted connector query filter with the root element `<QueryFilter>`. This document is passed through the process, and the query is executed. OData native filtering is then applied to the result set.

If filter transformation fails, the document passed through the process contains an empty `<QueryFilter/>`. The result set in this case consists of all documents, as would be case for the action without query passthrough.

Complex types are supported for query passthrough. To filter by a field in a complex type, use the “/” character to delimit levels. For example, to filter Contact entities by their Street field value, where Street is a field in an address object represented in the entity by the Address field, you would specify the field in the filter as Contact/Address/Street.

The following OData operators are supported for query passthrough:

-   AND

-   EQ

-   GE

-   GT

-   LE

-   LT

-   NE

-   OR


The following OData operators are not supported for query passthrough:

-   ADD

-   SUB

-   MUL

-   DIV

-   MODULO

-   unary operators, such as ++, ––

OData functions, such as substringof, day, and round, are also not supported for query passthrough. 