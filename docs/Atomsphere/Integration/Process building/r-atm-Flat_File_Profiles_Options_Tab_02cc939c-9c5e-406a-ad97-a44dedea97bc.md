# Flat file profile’s Options tab

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-02cc939c-9c5e-406a-ad97-a44dedea97bc"/>
</head>


Use the flat file profile's Options tab to specify the general characteristics of the data set's formatting.

**Name**   
**Description**

**Use Column Headers**   
When selected, the first row of the document is assumed to contain column labels and it is ignored.

**File Type**   
Defines the basic structure of the data file. The options are: Delimited or Data Positioned

**File Delimiter**   
\(Delimited files only\) Defines the character that delimits the data elements. The options are:

-   Star Delimited

-   Comma Delimited

-   Tab Delimited

-   Tick Mark \( \` \) Delimited

-   Bar \( \| \) Delimited

-   Other Character — Sets the delimiter to the character typed in the adjacent field.

-   Byte Character — Sets the delimiter to the formatted byte character typed in the adjacent field. For example, 0XFF. The format should be parsable by the method described in this [Oracle doc](https://docs.oracle.com/javase/7/docs/api/java/lang/Integer.html#decode(java.lang.String)).


**Text Qualifier**   
\(Delimited files only\) Used with flat files that use single or double quotation marks around data elements to identify the element as being text- or character-based data.

When interpreting the file, if a text qualifier field has been defined, the system removes the specified quotation marks \(single or double\) from the beginning and end of any applicable data element. Conversely, when generating the file, the system places the appropriate quotation marks around any data element defined as being character data.

The text qualifier options are:  N/A \(not applicable\), Double Quote, or Single Quote.

**Text Qualifier Escape**   
\(Delimited files only\) Used when interpreting a file to indicate that the appearance of the specified text qualifier character is actually part of the data, rather than being a text qualifier.

If any values in the file contain the specified text qualifier, you need to tell the parser to treat that character as data rather than as a qualifier. For example, if the text qualifier is a single quote and the file contains the value `o'clock`, you need to use an escape character. Without an escape character, the value would be interpreted as `o clock`. With an escape character of a single quote, you would specify `o''clock` and the value would be interpreted as `o'clock`.

The text qualifier escape character can be the same as the text qualifier character \(single or double quote\).

If you do not specify a text qualifier escape character, the delimiter escape character is used for both delimiters and text qualifiers.

**Delimiter Escape**   
\(Delimited files only\) Used when interpreting a file to indicate that the appearance of the delimiter character is actually part of the data, rather than being a delimiter.

If the specified escape character appears immediately before the delimiter, the delimiter is ignored. When generating the file, if the delimiter appears in any of the data elements used to generate the file, the escape character is inserted immediately before the associated delimiter.

If any values in the file contain the specified delimiter, you might need to tell the parser to treat that character as data rather than as a delimiter. CSV-formatted files should not require a delimiter escape. With other flat file formats, however, you might need an escape character. For example, if the file contains values in the format `city,state`, you could use a backslash \(\\\) as the escape character and specify `city\,state`.

The delimiter escape character can be the same as the escape for escape character.

**Escape for Escape**   
\(Delimited files only\) Used in conjunction with the delimiter escape character.

When interpreting a file, if a delimiter appears to have been escaped within a row, the appearance of the escape for escape character cancels the delimiter escape. When generating a file, if an element in the file ends with the delimiter escape character, the system inserts the escape for escape character immediately before the associated character.

If any values in the file contain the specified delimiter escape, you need to tell the parser to treat that character as data rather than as a special character that escapes delimiters. For example, if the delimiter escape is a backslash \(\\\) and the file contains values in the format `dir\subdir`, you could use a backslash \(\\\) as the escape for escape character and specify `dir\\subdir`.

:::note

The escape for escape character applies only to the delimiter escape, not to the text qualifier escape.

:::

**Remove Escape**   
\(Delimited files only\) Used in conjunction with all of the other escape characters. When interpreting a file, the system uses this field to determine if any escape characters found when reading any row of data should be removed.

**Pad Character**   
\(Data Positioned files only\) Defines the character that separates positioned data sets.