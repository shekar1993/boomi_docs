---
sidebar_position: 2
---

# Chart.yaml File

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-2b58e394-5496-46a1-a248-ba7e3520d3be"/>
</head>

The `Chart.yaml` defines the application metadata and optional dependencies.

:::note

Do not edit the `Chart.yaml` file.

:::

|||||
| :-------: | :------: | :------: | :-------: |
|**Key (full path in dot notation)**|**Notes**|**Data type**|**Default value**|
|apiVersion|The version of the Helm Chart API|String|v2|
|name|Name of the chart. |String|`APIM-LE`|
|version|A [SemVer2](https://semver.org/) notation of the Chart version|SemVer notation  x.y.z <p></p>Do not use quotes|6.0.0|
|appVersion|Version of an application being deployed. Need not be SemVer|String|6\.0.0|
|type|An optional value describing the type of the chart|Enum (application, library)|application|
|description|A text describing the chart and the application that is encapsulated in the chart. You can optionally modify this value.|String|A Helm Chart for Local Edition.|

