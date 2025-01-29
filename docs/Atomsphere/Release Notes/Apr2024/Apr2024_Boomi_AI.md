#  Boomi AI

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-159fb0fe-3c12-445d-bde3-1743cc7b4de8"/>
</head>

**We added these features:**

- Boomi GPT now supports dark mode when you select Dark Theme in the platform Preferences screen. (BI-3262)

- Boomi GPT creates a diagram that lets you preview the components and branches in the integration design. Click **Looks good, create the process** to tell Boomi GPT to generate the integration. You can also enter any modifications you want to make to the integration in the chat window. Editing is available when you provide [detailed integration prompts](/docs/Atomsphere/Platform/atm-BoomiAI_Create_Integration_using_a_Detailed_Prompt.md) and prompts for [business processes](/docs/Atomsphere/Platform/atm-BoomiAI_Create_Integration_Based_on_a_Business_Process_4f594693-91b9-4885-9fe0-d052d114465c.md) and [automation sub-processes](/docs/Atomsphere/Platform/atm-BoomiAI_Create_Integration_for_Automation_c15e0560-4503-4637-af40-9f78219cc82f.md). (BI-4095)

- You can generate process descriptions and documentation for existing integrations and integrations designed by Boomi GPT.

  When Boomi GPT generates an integration, you'll notice a short description of the process below the process diagram. You can click **Show more** to view a detailed description that includes the steps and operations involved.

  To document an AI-generated integration, click the **Process Documentation** button in the chat after Boomi GPT designs an integration.

  You can ask Boomi GPT to document an existing integration by pasting a URL or entering a hashtag.

  The process documentation describes the integration, the integration components, metadata, and how data flows through each step and connector.  You can click the **Copy** button to paste the documentation into your preferred document management system. Read [Creating summaries and documentation for an existing process](/docs/Atomsphere/Platform/atm-BoomiAI_Create_Documentation_for_Existing_Process.md) to learn more. (BI-4160, BI-4163)

- Boomi GPT can now answer questions about the Boomi Enterprise Platform and all Boomi services, including questions about Integration, Flow, Master Data Hub, Connectors, and more. You can ask how-to and general scenario-based questions related to the Boomi Enterprise Platform. For example, you can ask “How do I require 2fa for all accounts?”. Boomi GPT provides links to source articles for its response from help.boomi.com and the Boomi community. Read [Asking Boomi GPT questions](/docs/Atomsphere/Platform/atm-BoomiAI_Asking_Questions.md) to learn more. (BI-4309)

- The PII Insights (Tech Preview) feature on the Platform home page lets you visualize the movement of Personal Identifiable Information (PII) across countries between integration connections. PII metadata statistics help your organization adhere to data security regulations and gain valuable insights about PII usage. A summary details the data fields, connectors, processes, and countries involved. You can view PII details using the map visualization or table view. Use the following filters to narrow the summary and obtain specific data:
  - Process names and data fields
  - PII category
  - Country
  - Group by (table view)

  You can click on a process link from the table view to open the integration canvas.

  PII Insights is available with the Boomi AI add-on to your account. Contact your account representative to get started. Read [PII Insights](/docs/Atomsphere/Platform/atm-BoomiAI_PII_Insights.md) to learn more. (UU-2713, BI-3598)

- You can now use arrow keys to navigate through autocomplete suggestions in Boomi GPT. (BI-4600)

**We fixed these issues:**

- Boomi GPT no longer hides lengthy conversation text behind the prompt window. (BI-3799)

- Boomi GPT no longer designs an integration when you enter only an application name in the prompt window. (BI-4355)

- After you initiate a conversation, Boomi GPT continues responding even when you start viewing another tab in your browser. (BI-4593)

- There is no longer a delay when Feedback buttons appear after a Boomi GPT response. (BI-4421)

- You can now use the tab key to move through the Platform masthead to select the AI icon. (BI-3835)

- A loading icon displays in the chat window to indicate that Boomi GPT is loading the selected process name to generate documentation. (BI-4994)

- Boomi GPT displays the correct process name in the chat window when you change the process name in your prompt to generate documentation. (BI-5032)

- The Boomi GPT chat window no longer displays an active process as ‘deleted’ after you add a new process for generating documentation. (BI-5049)

- You can scroll down to select a process when generating process documentation with a hashtag while using any zoom setting in your browser. (BI-5025)
