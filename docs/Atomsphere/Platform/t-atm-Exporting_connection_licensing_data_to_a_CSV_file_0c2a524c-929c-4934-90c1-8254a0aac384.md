# Exporting connection licensing data to a CSV file 

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-0c2a524c-929c-4934-90c1-8254a0aac384"/>
</head>


You can export two types of connection licensing data to CSV files: Connectors Deployed in Class and Deployments.

## Procedure

1. Go to the **Licensing** tab on the Settings page.

2. Select a connector class in the Connections by Class table.

   The Connectors Deployed in Class table is populated with a list of deployed connectors. The Deployments table shows all connections for connectors of the selected class.

3. **Optional:** Select a specific connector from the Connectors Deployed in Class table.

   The Deployments table shows the connections for the selected connector.

4. Depending on the type of connection licensing data that you want to export, do one of the following:

    - To export a list of all connectors deployed in a given class, click **![](./Images/main-bt-export-csv_eeef3192-1229-471e-85e7-428325bf6032.jpg) Export to CSV** in the Connectors Deployed in Class table.

    - To export a list of connections deployed per process and Atom, click **![](./Images/main-bt-export-csv_eeef3192-1229-471e-85e7-428325bf6032.jpg) Export to CSV** in the Deployments table.

    Depending on your browser and its download settings, one of the following occurs:

    - If your browser is set to ask for a location when downloading, you are prompted for a destination folder and file name.

    - If your browser is set to not ask, the connection licensing data is exported to your default location as a CSV file with the appropriate file name:

        - `LicenseByClass_<class>_<accountId>_<timeStamp>.csv`

        - `LicenseDeployments_<class>_<accountId>_<timeStamp>.csv`

        For example, `LicenseByClass_Standard_boomi-internal_20181016110809.csv` or `LicenseDeployments_Standard_boomi-internal_20181016110809.csv`.

   :::note

   The **Deployed** count and the CSV report count may or may not match as the same connection might be used in multiple processes. Therefore, the report contains an entry for each deployed process where the connection has been used.

   :::