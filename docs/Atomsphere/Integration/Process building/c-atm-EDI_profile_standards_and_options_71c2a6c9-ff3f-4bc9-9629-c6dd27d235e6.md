# EDI profile standards and options

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-71c2a6c9-ff3f-4bc9-9629-c6dd27d235e6"/>
</head>


Integration provides EDI profile types for a number of common EDI standards, each with pre-loaded business document definitions that serve as a starting point to facilitate building profiles and customize your EDI document definitions.

EDI documents have a hierarchical, looping, segment/element structure. An EDI document consists of segments, data elements, and values that are either delimited with a specific value or data-positioned. Different EDI standards handle data differently but automatically handle basic EDI functions, such as enveloping and segment counts.

The following standard EDI profile types are available:

-   X12, the standard primarily used for EDI, defines specific standards for many EDI document types and subsets, which serve particular vertical markets.

-   EDIFACT is an international standard that was developed by the United Nations to provide syntax rules, an interactive exchange protocol, and a set of standard messages so that countries and industries can exchange electronic business documents.

-   HL7 is a standard for facilitating interoperability of health information technology. HL7 supports clinical practice and the management, delivery, and evaluation of health services.

-   ODETTE, a standard based on EDIFACT, is primarily used in the European automotive sector.

-   Tradacoms is a standard primarily used in the UK retail sector.

:::note

Integration also supports the RosettaNet standard. RosettaNet is an XML-based document standard that defines message guidelines, business processes interfaces, and frameworks for interactions between major computer, consumer electronics, semi-conductor manufacturers, telecommunications, and logistics companies.

:::

## User-defined profiles

To accommodate integrations handling EDI document types that do not conform to any of the supported standards, you can build profiles for these document types using the User-Defined profile type. This profile type provides flexibility in handling proprietary file formats.