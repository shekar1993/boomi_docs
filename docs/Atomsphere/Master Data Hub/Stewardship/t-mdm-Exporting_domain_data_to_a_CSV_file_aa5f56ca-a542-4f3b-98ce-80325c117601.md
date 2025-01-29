# Exporting domain data to a CSV file 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-aa5f56ca-a542-4f3b-98ce-80325c117601"/>
</head>


Export domain data to a CSV file if you wish to import the data into a spreadsheet application for analysis.

## Before you begin

Masked field values are hidden with asterisks when exported to a CSV file. Masked values display in the CSV if you have one of the following user permissions: 

  - **MDM - Privileged Data Steward** role
  - **MDM - Administrator** role
  - **MDM - Reveal Masked Data** privilege
  - **MDM - Data Steward** role (or **MDM - Stewardship** privilege) and the **Reveal Masked Data** Hub entitlement (available with the Advanced Security feature)

:::note

Exporting Hub data is an optional account feature. The Export Records entitlement is valid only in accounts for which the feature is available. If you would like to have this feature enabled in your account, contact your Boomi account representative.

:::

## Procedure

1.  Select **Stewardship** \> **Golden Records**.

2.  In the repository/domain list, select the domain.

3.  **Optional:** Apply filtering to the data grid. The export operation includes only filter results, maximum 10,000.

4.  Click **![icon](../Images/Reporting/main-bt-arrow-blue-down-to-computer_a12a7650-c6de-4ec5-9d1f-50163cc0f349.jpg) Download CSV**.

    Depending on your browser and its download settings, you may be prompted to specify the destination path and filename to complete the download request.

    The download is a Zip file containing the CSV file.

    -   The default Zip filename is *model\_name\_data.zip*.

    -   The default CSV filename is *model\_name.csv*.

    In these filenames, *model\_name* is the domain model name with an underscore character substituted for each instance of the following special characters: < \> : " / \\ \| ? \*.

    In the CSV file, each exported golden record is represented by a line of comma-separated field values. Collection data, due to its nature, cannot be represented in CSV format and is therefore omitted. For more information about the exported data, see the Related reference for the Golden Records page.