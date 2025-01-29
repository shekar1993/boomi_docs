# Domain modeling 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-243f7875-363f-45d3-bbe5-d4985c6b6ae1"/>
</head>


Your goal in modeling a domain is to identify commonalities in requirements across sources and define fields that reflect those commonalities.

Consider first whether there is a source system of record — that is, a most trusted source — across all fields in the domain, or the source system of record varies from field to field.

-   If there is a source system of record across all fields in the domain, evaluate that system’s fields of interest first. Determine which fields are required and specify data format requirements. Then do the same for each remaining source system in succession, beginning with the second most trusted and ending with the least trusted.

-   If the source system of record varies from field to field, consider each field of interest in turn. Typically it makes sense to model a field in a manner consistent with its properties in its most trusted source, with respect to both required presence and data format.


Where relationships exist between objects, identify requirements for reference fields.

-   Inter-domain references define relationships between objects of different types, such as contacts and accounts.

-  Intra-domain references define relationships between objects of the same type, such as employees and their managers.


Once you have listed all the fields, designated required fields and specified data formats, you may then need to fine-tune the match rules and data quality steps you specified during analysis.

## Reference data domains 

Reference data domain modeling is a special case. Reference data domains contain reference data, which is typically static. Reference data is not directly associated with the “nouns” of a business, but rather serve as valid metadata values for those nouns. These are examples of reference data:

-   geographical locations — lists of municipalities, states, provinces, countries and/or their corresponding abbreviations

-  calendar elements — lists of days of the week or months of the year

-  Stock ticker symbols for a market


If you will use reference data in your project, master that reference data in domains separate from the domains in which you master data for the nouns of your business. This architecture helps ensure references from master data to reference data are consistent across master data domains and across the source systems that contribute to individual master data domains.