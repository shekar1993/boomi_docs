# Date functions

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-e35e34c4-45f2-49ac-b1d7-4792114e52dc"/>
</head>


Date functions are a type of map function.

| Name             | Parameters/Fields                                                               | Description                                                                                                                                                                                                                   |
|------------------|---------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Date Format      | • Date String: Input<br />• Input Mask: Source format<br />• Output Mask: Destination format  | Reformat the value by specifying a date format. You can avoid using a Date Format function by configuring the source and destination profile elements to be a Date/Time type and specifying the format.                      |
| Get Current Date | • None                                                                           | Retrieve the current system date/time.    <br />.                                                                                                                                                                                   |

:::note

If you require mapping to convert date and time data types, it is important to understand that when the mapping engine parses a value configured as date and time, it converts it to a special internal date format that looks like this: yyyyMMdd HHmmss.SSS. For more information, refer to the Time Zone Offsets topic linked below

:::