# JSON profiles

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-1d50ca0e-e022-4f45-aa62-32212442fffe"/>
</head>

Learn about JSON profiles so you can more easily import data elements, objects, and/or arrays from a JSON schema or document.

## JSON overview

[JSON](http://www.json.org/) (JavaScript Object Notation) is a text-based data interchange format. It is easy for humans to read and write and for machines to parse and generate. The JSON format is often used to transmit structured data over a network connection. It is similar to XML and is often used as an alternative to XML.

JSON is based on a subset of the JavaScript Programming Language, [Standard ECMA-262 3rd Edition - December 1999](http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf). The JSON format is language independent. The JSON filename extension is .json.

A JSON profile describes a file that represents simple data structures and associative arrays. When you create JSON profiles, you can use the following data types:

- Simple (with a data type of Boolean, Character, Number, or Date/Time)

- Array — Repeating (contains a repeating element) or Absolute (contains a set of different elements)

- Object

Instance identifiers are placeholders in a JSON profile that identify specific data sets. At the repeating array element level, they categorize these data sets based on the numeric occurrence (for example, the first occurrence or last occurrence) and/or qualifier value within a given JSON file. Instance identifiers can be used in maps to map specific data values for an occurrence or qualifier.

A JSON profile can have a maximum of 200 instance identifiers, which can be nested.

For example, consider a repeating array element, `assembly`, for which there are instance identifiers; `assembly` has a child repeating array element, `part`. If you define an instance identifier for `part`, the same child instance identifiers would be automatically added to each of the `assembly` instance identifiers. All of these instance identifiers, including those automatically added, would count toward the limit of 200.

## The JSON import wizard

The Import Wizard in helps you to quickly create a JSON profile by importing data elements, objects, and/or arrays from a JSON schema definition or a sample JSON document. You can use JSON profiles wherever you select a profile type, such as in the Parameter Values dialog. When working with JSON profiles you can use Suggest to provide mapping suggestions. For more information, see the topics under **Related tasks** for importing JSON schemas and documents into a JSON profile.

If you use the Import Wizard to update an existing profile, matching profile elements maintain the same key and instance identifiers are maintained. You can import JSON data that uses a version 3 or version 4 schema. By default, a version 4 schema validator is used when you import from a JSON document. However, if a version 3 schema declaration is found at the schema root, a version 3 schema validator is used.
