# Adding a default value to a map

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-f779d730-7590-49c6-a5de-67e90553d020"/>
</head>


Default values can be used in maps in two ways. If a source element is mapped to a destination element with a default value, the default value is used only when the source value is null or blank. If no source element is mapped to a destination element with a default value, the default value is always used. This is how you can "hard code" static values.

## Procedure

1.  Create or open a map that has source and destination profiles selected.

2.  Click the blue arrow **![icon](../Images/main-ic-arrow-blue-down-16=GUID-CA79043B-869E-4C8B-A46E-5D4D4FA1DBEE=1=en-us=Low_ee257e3c-4362-486e-b1f1-4d613b679c4c.jpg)** next to the desired destination element and select **Set Default Value**.

    The Set Default dialog opens.

    :::note

    When entering a default date/time value, it must match the chosen Date Format configured on your map component. The Map step produces an error if the formats do not match. When the mapping engine parses a value configured as date/time, the value is converted to the internal parsing engine format \(yyyyMMdd HHmmss.SSS\).

    :::

    :::note

    It is not possible to add a default value to a segment in a destination EDI profile because segment IDs are always used to populate segments in Map step output.

    :::

3.  Enter a value and click **OK**.

    The default value appears in parentheses next to the element name.

4.  Click **Save**.