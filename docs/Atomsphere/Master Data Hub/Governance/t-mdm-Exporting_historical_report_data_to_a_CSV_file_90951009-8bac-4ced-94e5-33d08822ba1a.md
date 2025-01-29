# Exporting historical report data to a CSV file

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-90951009-8bac-4ced-94e5-33d08822ba1a"/>
</head>


If, as a data governance specialist, you require a portable capture of historical metadata, you can export displayed historical report data to a comma-separated value (CSV) file.

## Procedure

1.  In the Historical Reporting page \(**Reporting** \> **Historical**\), build a report for the data you want to export.

2.  Click **![](../Images/Reporting/main-bt-arrow-blue-down-to-computer_a12a7650-c6de-4ec5-9d1f-50163cc0f349.jpg) Download CSV**.

    Depending on your browser and its download settings, you may be prompted to specify the destination path and filename to complete the download request.

    The default CSV filename is mdm-report-timestamp.csv, where timestamp is the date and time of the download request in the format YYYYMMDDHHMMSS.

    In the CSV file, breakdowns are represented as follows: Header rows — for example, Date, Account, Repository, etc. — are in row #2, and breakdown information — for example, Golden Record, Quarantine Entry — are in row #1.