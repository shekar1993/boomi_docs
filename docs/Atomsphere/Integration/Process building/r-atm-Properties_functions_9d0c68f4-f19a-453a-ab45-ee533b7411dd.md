# Properties functions

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-9d0c68f4-f19a-453a-ab45-ee533b7411dd"/>
</head>


Properties functions are a type of custom scripting function.

| Name                   | Parameters/Fields                                                                                                            | Description                                                                                                       |
|------------------------|-----------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| Get Process Property   | • Property Name: Name of property<br />• Default Value: Optional value if property is blank                                  | Retrieve the value of a process property.                                                                        |
| Set Process Property   | • Property Name: Name of property<br />• Value: Value to store in property                                                   | Set the value of a process property.                                                                             |
| Get Document Property  | • Property: Choose the specific document property                                                                           | Retrieve the value of a document property.                                                                       |
| Set Document Property  | • Property: Choose the specific document property                                                                           | Set the value of a document property.                                                                            |
| Set Trading Partner    | • **Standard**: Choose the EDI standard (e.g., X12, EDIFACT, HL7, etc.)<br />• **Input Type**: Identifier or Control Info    | Sets the trading partner for the outbound message based on trading partners in Trading Partner steps in process. |