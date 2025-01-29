# Creating a process or sub-process 

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-4f594693-91b9-4885-9fe0-d052d114465c"/>
</head>

You can ask [Boomi DesignGen](/docs/Atomsphere/Platform/atm-BoomiAI_Boomi_DesignGen.md) to design an integration by describing a process or a sub-process. For example, you can request an integration to load Salesforce Opportunity objects into Amazon S3. As you type the prompt, it auto-completes to indicate that it is a common design pattern.

Boomi DesignGen lets you to edit the process before creating it in the process canvas. After creating the integration, you can ask [Boomi Scribe](/docs/Atomsphere/Platform/atm-BoomiAI_Boomi_Scribe.md) to generate process documentation.

To generate integrations that simply connect two systems together, read [Creating an Integration Connecting Systems](/docs/Atomsphere/Platform/atm-BoomiAI_Create_Integration_Connecting_Systems_f8ae5b2d-d514-4d4a-8f22-90e18412c0bb.md).

<iframe width="700px" height="400px" src="https://embed.app.guidde.com/playbooks/ggTjCL5S7ozC5p7BLbNuhZ" title="Creating a process with Boomi DesignGen" frameborder="0" referrerpolicy="unsafe-url" allowfullscreen="true" allow="clipboard-write" sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"></iframe>


## Prerequisites

To use Boomi DesignGen, you must have the following:

-   Integration Build Read Write access. Read [User roles and privileges](c-atm-User_roles_and_privileges_5a1c8a1a-4d58-4e7d-a6b6-b684a0c6d672.md) to learn more about default Boomi Enterprise Platform roles and permissions.
-   Create Component API feature enabled on your account.
-   Agreement to the Boomi AI terms and conditions. Administrators can select the AI icon > Get Started to view and accept terms and conditions.  
-   Connectors enabled on your account. Many connectors are enabled by default. However, certain connectors may not be available due to licensing or your subscription. Read [Connector licenses and classes](../Integration/Connectors/c-atm-Connectors_bb305b35-0f13-4937-a918-f85dbbe1b27b.md) to learn more about connection licenses and your subscription.

## Important considerations

-   Boomi DesignGen currently supports the English language.
-   The Component Create API is used to generate integrations. These API calls count towards your API usage. Read [API usage](c-atm-API_Usage_tab_49e6a2e4-90c8-44ae-8a2b-d151913367b9.md) to learn more.
-   The Boomi AI large language model's responses are dependent upon the input it receives by the user, and different inputs may return different results.
- The model is continuously learning and responses will continue to improve as the model improves.
- Boomi DesignGen is only focused on responding to prompts related to generating integration designs.
- It has no knowledge of previous integration conversations and designs. You cannot refer to a previous prompt or response. To make adjustments to your prompt, copy and paste the previous prompt with your edits in the chat window.  
- If you mention an unsupported connector in your Boomi GPT prompt, Boomi DesignGen replaces it with the HTTP connector step. Read [Boomi GPT Supported Connectors](/docs/Atomsphere/Platform/atm-BoomiAI_Connectors_9f8a52e4-5ef2-49ec-bb15-bba51d58fb59.md) for more information.

## Walkthrough

1.  Enter a prompt in the Boomi GPT chat window. For example, “Create a process to read from Google Sheets." Prompts have a 750 character limit. Boomi DesignGen may take approximately up to one minute to respond. Boomi DesignGen displays a diagram of the process design, outlining the flow and steps involved. Read [Prompt examples for processes](#prompt-examples-for-processes) and [Prompt examples for sub-processes](#prompt-examples-for-sub-processes) for assistance.
2. **Optional**: Edit the integration design by entering a prompt in the chat window. Describe the changes you want to make. For example, "Add a try/catch step before the Map step." Include the step name and the action to take in your prompt, such as add or remove.
3. Click **Looks good, create the process** to tell Boomi DesignGen to generate the process in the Integration process canvas. Boomi Scribe generates a high-level description of the process. Click the **Copy** icon to copy and paste the high-level description into the process canvas or your content management system. The text is in [Markdown](https://en.wikipedia.org/wiki/Markdown).

:::note 

  Boomi DesignGen uses the Component Create API to generate integrations. These API calls count towards your API usage. Read [API usage](c-atm-API_Usage_tab_49e6a2e4-90c8-44ae-8a2b-d151913367b9.md) to learn more.

:::

4. If Boomi DesignGen finds that you have an existing connection for a connector in the design, you can:
    - Select **Create new connection** to generate a new connection configuration for the connector. 
    - Select **Choose existing connection** to use a current connection you've already configured in Integration.

:::note

    Boomi DesignGen currently supports reusing existing connections if there are five or less connection component options. If more than five options exists, it creates a new connection.
    
:::

5. **Optional**: Click **Show more**. Boomi Scribe generates a detailed process summary that includes information about each step and its operation. You can click the **Copy** icon to copy and paste the summary into your content management system. The text is in Markdown. 
6. **Optional**: Click **Process Documentation**. Documentation includes a summary, process metadata, business context, process steps, profile names, and functions of each step. When this information is available, it describes object names and operation types for connectors. Connector steps also include information about the operation name, request profile, and response profile.
   
   The documentation includes details about the source and target objects for mapping components with XML or JSON profile types. When documentation includes a Map components or subprocess, it contains a link that opens the object in the Integration build canvas to provide more context. Boomi Scribe also generates a process diagram.
7. **Optional**: You can click the **Copy** icon to copy and paste the documentation into your content management system. The text is in Markdown.
8. **Optional**: Click the **Download** icon to export documentation as a .docx file. When opened in a .docx-supported editor, the content includes the process diagram and appears similar to how content appears in Boomi GPT. Layout and spacing may differ depending on the editor.
9. Select **Take a look** to open the process canvas so you can view the integration.
10.  Configure, test, and deploy your integration. Read [Process Building](../Integration/Process%20building/c-atm-Process_building_b422a00a-b17b-4ea8-ae01-d04adaf97e16.md#GUID-AD96C1C0-CC92-45CD-BC9F-C3D2553A39CA) and [Deployment](../Integration/Deployment/c-atm-Deployment_4e723d20-3e2b-41b7-8d57-010dccb940b8.md) for assistance.

## Prompt examples for processes

Use the following prompt examples to explore common process patterns. Read [Boomi GPT](/docs/Atomsphere/Platform/atm-BoomiAI_BoomiGPT.md) to learn more about prompt examples and creating prompts.

|Prompt Example|
|--------------|
|"Create a process to read from Google Sheets"|
|"Create a process to load Salesforce opportunity from S3"|
|"Create a trading partner process"|
|"Create a process for SAP account creation"|
|"Create a process to extract SuccessFactors employee data"|
|"Create a process to query SAP PO data"|
|"Create a process to upsert suppliers to Salesforce"|
|"Create a process to retrieve NetSuite customer"|

## Prompt examples for sub-processes

Use the following prompt examples to explore common sub-process patterns. Read [Boomi GPT](/docs/Atomsphere/Platform/atm-BoomiAI_BoomiGPT.md) to learn more about prompt examples and creating prompts.

Prompt Example|
|--------------|
|"Create a process to send exceptions to a queue"|
|"Create a process for integrating JMS with the message send process"|
|"Create a process for writing files to disk"|
|"Create a process to write a file to SFTP"|
|"Create a process to make an API request"|
|"Create a process for Try/catch error handling"|
|"Create a process for error notification handling"|
|"Create a process for warning notifications"|
