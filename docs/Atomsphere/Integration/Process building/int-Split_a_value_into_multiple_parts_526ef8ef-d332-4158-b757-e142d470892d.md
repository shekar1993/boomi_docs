# Split a value into multiple parts

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-526ef8ef-d332-4158-b757-e142d470892d"/>
</head>


This sample JavaScript or Groovy custom scripting function splits a single address street "block" into individual lines \(up to five\) based on a line break. This can also be accomplished with the standard String Split function.

| | |
| ---- | --- |
|**Inputs**|-   street \(Character\)|
|**Outputs**|-   line1<br />-   line2<br />-   line3<br />-   line4<br />-   line5|

**Script**

```java
lines = street.split("\n");

line1 = lines[0];

if (lines.length > 1) {
line2 = lines[1];
}

if (lines.length > 2) {
line3 = lines[2];
}

if (lines.length > 3) {
line4 = lines[3];
}

if (lines.length > 4) {
line5 = lines[4];
}
```