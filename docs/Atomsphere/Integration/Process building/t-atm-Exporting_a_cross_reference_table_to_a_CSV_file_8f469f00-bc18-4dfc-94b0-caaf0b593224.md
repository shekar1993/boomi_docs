# Exporting a cross reference table to a CSV file

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-8f469f00-bc18-4dfc-94b0-caaf0b593224"/>
</head>


You can export a cross reference table to a CSV file.

## About this task

You can export a cross reference table of any size and with any content. However, if you plan to import the same CSV file back into a cross reference table, consider the following:

-   The size of a CSV file to be imported is limited to 1 MB.

-   If the file to be imported contains commas or double quotes in unexpected positions, the data might not be parsed correctly.

## Procedure

1.  Create or open a Cross Reference Table component.

2.  Click **![](../Images/main-bt-export-csv_eeef3192-1229-471e-85e7-428325bf6032.jpg) Export to CSV**.

    Depending on your browser and its download settings, one of the following occurs:

    -   If your browser is set to ask for a location when downloading, you are prompted for a destination folder and file name.

    -   If your browser is set to not ask, the cross reference table is exported to your default location as a CSV file called `<crossReferenceComponent>_<accountId>_<timeStamp>.csv`. For example, `MyCrossRefTable_boomi-internal_20181016110809.csv`.

:::note

If you export a cross reference table from the Extensions dialog \(rather than from the component itself\), the default file name is `CrossReferenceExport_<accountId>_<timeStamp>.csv`.

:::