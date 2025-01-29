# Analyzing PII statistics

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-e07d895e-d92d-43a4-bfd8-2bc45de0b611"/>
</head>

[Boomi DataDetective (Early Access)](/docs/Atomsphere/Platform/atm-BoomiAI_PII_Insights.md) lets you analyze Personal Identifiable Information (PII) data statistics using a detailed table view. This table allows you to filter and explore data fields, connectors, processes, and countries involved. It helps you gain insights about your PII data by allowing you to filter and explore specific details.

To start using Boomi DataDetective, contact your account representative. Once enabled, you can access it from the platform page. DataDectective displays information for up to 1000 data fields and the data is refreshed weekly from your Integration account. It does not use your processed data. Like our other AI Products, DataDetective solely uses the customer-agnostic de-identified metadata as outlined in the [Data Collection](/docs/Atomsphere/Platform/ci-Community_Intelligence_19c17ab6-b3fe-4e69-95f2-bcb438f3fa47.md).

![Boomi DataDetective table view with filters](./Images/ai-img-datadetective_table.png)

## Walkthrough


1. Select the **Table** tab.
2. **Optional**: Select a data field or an integration name from the list in the search box. You can also enter a data field or process and the search autocompletes.
3. **Optional**: Select a country from the drop-down. If PII flows through a connector, the country of the connector's IP address displays in the list.
4. **Optional**: Select a PII category to filter PII data movement related to the following 4 categories: Financial, Health, Job, and Personal, Next to each category, the number indicates the number of data fields that contain that PII category.
5. **Optional**: Select an option in the **Group By** toggle to view the table arranged by PII data fields or processes.
6. In the table, you can click the process name to open a panel and view metadata about the data fields. From the panel you can click **View Process** to open integration in the process canvas.
