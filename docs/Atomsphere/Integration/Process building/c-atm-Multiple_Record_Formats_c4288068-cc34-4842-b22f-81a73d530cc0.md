# Multiple record formats

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-c4288068-cc34-4842-b22f-81a73d530cc0"/>
</head>


You can model file-based data structures that contain different types of records within the same file by using a single flat file profile with multiple record formats.

Identify the individual records by either a unique "Identity Value" within each record or by the number of columns.

-   Record formats within a profile typically use the same format detection method: Identify Value or number of columns.

-   Data sets with multiple record formats typically do not have column headers but configure the profile to match your actual data.

-   Multiple formats can be used to model simple EDI-like structures. Consider using an EDI profile for more complex data sets.


To import the elements for a data set with multiple record formats, use the Import Wizard for each record format individually. Modify your sample file to isolate the record format you want to import.