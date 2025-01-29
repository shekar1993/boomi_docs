# JavaScript: Substring

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-384a7143-6bae-447f-a2cb-7c1b66219755"/>
</head>


This sample JavaScript custom scripting function maps the first three characters of the location code as the region ID and the last five characters as the postal code.

# JavaScript example

| Inputs | • locationCode (Character) |
| --- | --- |
| Outputs | • regionId<br />• postalCode |
| Script | `region = locationCode.substring(0, 3);`<br />`postalCode = locationCode.substring(locationCode.length-5, locationCode.length);` |

# Groovy example

| Inputs | • locationCode (Character) |
| --- | --- |
| Outputs | • regionId<br />• postalCode |
| Script | `region = locationCode.substring(0, 3);`<br /> `postalCode = locationCode.substring(locationCode.length()-5, locationCode.length());` |