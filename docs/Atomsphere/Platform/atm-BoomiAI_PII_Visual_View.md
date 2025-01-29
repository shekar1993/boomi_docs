# Visualizing PII statistics

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-ee7a32bf-44fe-4126-aad4-8150a44f99c1"/>
</head>

[Boomi DataDetective (Early Access)](/docs/Atomsphere/Platform/atm-BoomiAI_PII_Insights.md) offers an interactive globe visual to explore the movement of PII data across regions. It lets you view how sensitive data flows between connections and countries using a detailed map. This visualization highlights data fields, connectors, processes, and the countries involved.

To start using Boomi DataDetective, contact your account representative. Once enabled, you can access it from the platform page. DataDectective displays information for up to 1000 data fields and the data is refreshed weekly from your Integration account. It does not use your processed data. Like our other AI Products, DataDetective solely uses the customer-agnostic de-identified metadata as outlined in the [Data Collection](/docs/Atomsphere/Platform/ci-Community_Intelligence_19c17ab6-b3fe-4e69-95f2-bcb438f3fa47.md).


<iframe width="700px" height="400px" src="https://embed.app.guidde.com/playbooks/vnXDJyo3Nz6NBwD7ohHKhC" title="Visualizing PII data statistics with Boomi DataDetective " frameborder="0" referrerpolicy="unsafe-url" allowfullscreen="true" allow="clipboard-write" sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"></iframe>

## Walkthrough


1. Select the **Visual** tab.
2. You can select one or all of the following filters to see specific information about PII. The globe visualization shows processes, connector locations, and how data flows from different source connections to the target connections. The connections are color-coded and correspond with the following PII categories:
    - **Financial** - information related to financing, such as salary, account balances, and credit card numbers.
    - **Health** - information related to health care, such as medical records, biometric data, and lab test results.
    - **Job** - business information about a person or company, such as employee ID, business email, office phone number, and office address.
    - **Personal** - information about a person, such as name, age, address, and email.

    The top summary shows a summary of the processes, connectors, data fields, countries, and PII categories involved based on the filter.

3. **Optional**: Select a data field or an integration name from the list in the search box. You can also enter a data field or process and the search auto-completes.
4. **Optional**: Select a country from the drop-down. If PII flows through a connector, the country of the connector's IP address displays in the list.
5. **Optional**: Select a PII category to filter PII data movement related to the following 4 categories: Financial, Health, Job, and Personal. Next to each category, the number indicates the amount of data fields that contain that PII category.