# Profile components

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-054AEAE8-B869-4B34-BCA5-177F3191F1A5"/>
</head>


Profiles describe the layout or format of documents read into or sent out of processes. To describe a flat file, for example, the profile contains field names, delimiters or column positions, data types, min/max lengths, etc.

Profiles are used in maps. To map an XML document to a flat file, set up one profile that matches the layout of the XML file and another profile that matches the flat file. You can also use profiles whenever the document data must be inspected. Individual profile elements are commonly referenced as parameters for the Decision, Cleanse, Program Command, Message, Route, Document Properties, and Exception steps.

You can import a profile from an existing file such as a database table or an XML file. When you re-import a profile to incorporate updates, the connections in any map that the profile uses may be affected. An attempt is made to match profile elements in the new profile to profile elements in the old profile based on the full name path from the root node. Any change to the name of a profile element or any part of the element's path name causes a mismatch. For example, if the original profile element was `Root/account/company/name` and the new profile is `Root/acct/company/name`, all elements under the original `account` element no longer match. Because the existing map connections for those profile elements are discarded, you need to remap the connections for the updated profile elements.

These are the profile types:

| Name      | Description                                                                                                                                                                                                                                                |
|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Database  | Database profiles can be Read and Write. A Read database profile can execute SELECT statements or stored procedures against a target database. A Write database profile can execute an INSERT, UPDATE, DELETE or stored procedure against a database.         |
| EDI       | An EDI profile describes a delimited or positional file that meets ASC X12, HL7, EDIFACT, TRADACOMS, ODETTE, or User Defined standards.                                                                                                                      |
| Flat File | A flat file profile describes a file that contains either delimited or positional data. An example of a flat file is a comma separated (CSV) file.                                                                                                          |
| XML       | An XML profile describes a file that meets the [W3C Standard for eXtensible Markup Language](http://www.w3.org/XML/).                                                                                                                                      |
| JSON      | A JSON (JavaScript Object Notation) profile describes a file that represents simple data structures and associative arrays. JSON files are based on a subset of the JavaScript Programming Language, [Standard ECMA-262 3rd Edition - December 1999](http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf). |