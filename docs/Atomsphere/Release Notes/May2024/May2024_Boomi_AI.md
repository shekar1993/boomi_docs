# Boomi AI

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-c62c258e-996d-45bf-86b8-6e9f979b2e22"/>
</head>

**We added these features:**

- Boomi GPT has improved error handling when your browser remains idle for more than 30 minutes and you start a new conversation. (BI-4230, BI-3407)

- Boomi GPT adds a diagram when it generates process documentation. Read [Creating documentation for an existing process](/docs/Atomsphere/Platform/atm-BoomiAI_Create_Documentation_for_Existing_Process.md) to learn more. (BI-4893)

- Boomi GPT provides details in process documentation about the connector step, including the object name and operation type. The details are available when the process contains this type of information. Read [Creating documentation for an existing process](/docs/Atomsphere/Platform/atm-BoomiAI_Create_Documentation_for_Existing_Process.md) to learn more. (BI-4889, BI-5135)

**We fixed these issues:**

- The conversation window contains help text that is more visible and accessible while in dark mode. (BI-5023)

- Boomi GPT generates consistent documentation for subprocess details. (BI-5057)

- Boomi GPT responds as expected when prompting it to create a process to query SAP PO data. (BI-5068)

- If you use a hashtag in your prompt to generate documentation and press the enter key to submit, the response generates as expected. (BI-5175)
