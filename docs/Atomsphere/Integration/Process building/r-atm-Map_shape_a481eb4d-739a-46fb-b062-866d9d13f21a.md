# Map step

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-9B5D3D7E-0DBB-46BB-BE3D-41C3021753A1"/>
</head>


Use maps to transform data from one format to another, or more specifically, from one profile to another.

![Map icon](../Images/step-ic-map-32_6c9d1742-59f2-4cf5-9a5f-0e6e0d488f14.jpg)

The Map step references a predefined Map component. When you configure a Map step the Map step dialog opens. It contains the following fields.

**Name**
**Description**

**Label**
\(Optional\) User-defined name to describe the step. If one is not entered, no label appears on the step.

**Map**
Used to choose, edit or create a Map component.

:::note

The Map step trims leading and trailing spaces from XML document data elements.

:::

:::note

Invalid date and time data element values in documents using EDI profiles cause a process run error. Invalid date and time data element values in documents using other profile types transform without error using Java default “lenient” date and time parsing. For example, a date value of 20211417 in the format yyyyddMM is transformed to 20221405 — the month value of 05 is calculated by subtracting the number of months in a year (12) from the month value in the input document (17), and calculates the year value of 2022 by adding one to the year value in the input document (2021).

You can optionally apply lenient parsing to documents using EDI profiles by setting the Atom property *com.boomi.container.useLenientEDIDateParsing* to `true` in the Properties panel’s **Custom** tab in Atom Management (**Manage > Atom Management**).

:::