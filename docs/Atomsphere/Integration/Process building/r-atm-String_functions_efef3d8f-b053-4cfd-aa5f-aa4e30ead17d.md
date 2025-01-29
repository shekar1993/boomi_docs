# String functions

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-efef3d8f-b053-4cfd-aa5f-aa4e30ead17d"/>
</head>


String functions are a type of map function.

| Name                  | Parameters/Fields                                                                                                                                      | Description                                                                         |
|-----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| Left Character Trim   | • String to Trim: Input<br />• Fix To Length: Length of output value                                                                                   | Removes characters from the left side of the value                                   |
| Right Character Trim  | • String to Trim: Input<br />• Fix To Length: Length of output value                                                                                   | Removes characters from the right side of the value                                  |
| Whitespace Trim       | • Original String: Input                                                                                                                               | Removes all white spaces from the beginning and the end of the string value.         |
| String Append         | • Original String: Input<br />• Fix To Length: Length of output value<br />• Char to Append                                                             | Add characters to the end of the value.                                              |
| String Prepend        | • Original String: Input<br />• Fix To Length: Length of output value<br />• Char to Prepend                                                            | Add characters to the beginning of the value.                                        |
| String Concat         | • Delimiter: Character between inputs<br />• Fix to Length: Numeric length limit for characters<br />• Inputs: Input values to concatenate in order     | Concatenates string values in order                                                  |
| String Replace        | • Original String: Input<br />• String to Search: Search pattern<br />• String to Replace                                                              | Replace a given character or string with another. This can use syntax.               |
| String Remove         | • Original String: Input<br />• String to Remove: Search pattern                                                                                       | Remove a given character or string from the value. This can use regular expression syntax. |
| String To Lower       | • Original String: Input                                                                                                                               | Converts the value to lowercase.                                                     |
| String To Upper       | • Original String: Input                                                                                                                               | Converts the value to uppercase.                                                     |
| String Split          | • Split By: Method to split input value<br />• Value: Delimiter or Field Length number to split by<br />• Outputs: Output values of the split         | Splits string input value into multiple, defined output values.                      |