# JavaScript: Split a value into multiple parts

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-4771e241-999d-456a-8c01-a7ca833a01f0"/>
</head>


This sample JavaScript custom scripting function splits a single address street "block" into individual lines \(up to five\) based on a line break. This can also be accomplished with the standard String Split function.

| Category | Details                                             |
|----------|-----------------------------------------------------|
| Inputs   | • street (Character)                                |
| Outputs  | • line1 <br />• line2 <br />• line3 <br />• line4 <br />• line5 |
| Script   | ```java <br />lines = street.split("\n"); <br /><br />line1 = lines[0]; <br /><br />if (lines.length > 1) { <br />line2 = lines[1]; <br />} <br /><br />if (lines.length > 2) { <br />line3 = lines[2]; <br />} <br /><br />if (lines.length > 3) { <br />line4 = lines[3]; <br />} <br /><br />if (lines.length > 4) { <br />line5 = lines[4]; <br />} <br />``` |