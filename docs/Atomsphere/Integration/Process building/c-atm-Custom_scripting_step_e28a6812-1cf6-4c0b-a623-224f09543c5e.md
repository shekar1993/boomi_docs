# Custom scripting step

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-e28a6812-1cf6-4c0b-a623-224f09543c5e"/>
</head>


The Data Process step’s custom scripting step allows you to perform custom manipulations and logic on the document data by using the JavaScript or Groovy scripting language. Through scripting you have direct access to the raw data and can operate on individual documents or the entire group of documents at that step in the process.

The need for a custom scripting step is rare given the power and flexibility of the standard process steps. However, some integration use cases and data formats simply cannot be accommodated by the standard functionality. From a testing and maintenance perspective, we recommend trying to use standard functionality whenever possible and consider custom scripting as a last resort.

A few scenarios that typically require custom scripting include:

-   Massaging proprietary data formats and looping structures before mapping to align repeating elements with standard profile looping

-   Proprietary or very sophisticated logic to split, group, and/or aggregate data

-   Parsing unstructured data files such as legacy application ASCII reports \(similar to screen scraping\)


Before using custom scripting, consider the following:

-   You should be very familiar with the document concept and how documents are executed through a process.

-   You should be familiar with Groovy, Java, or a similar programming language.

-   You will be working with the data in its raw form, specifically reading and writing \{\{InputStream\}\}s.

-   You are responsible for reading, parsing, modifying, and outputting the data.

-   You are responsible for parsing the data "by hand". You cannot use a profile component to parse specific elements.

-   You cannot reference other components such as connections, profiles or maps.


You can implement a custom scripting processing step in one of two ways:

-   Insert an inline script for one-time use.

-   Reference a Process Scripting component that is available for reuse.