#  Boomi AI November 2024 Release Notes

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-c8828202-14cd-4c0a-ad47-4c66b2809e44"/>
</head>

## Boomi DesignGen

**We fixed these issues:**

- Diagrams for processes containing an Intacct connector now include the Intacct connector icon instead of a generic start shape. (BI-6157)

## Boomi Hub DesignGen

**We added these features:**

- We’ve updated the name of HubGen to Hub DesignGen to better reflect the agent’s functionality. Review [Boomi Hub DesignGen](/docs/Atomsphere/Platform/atm-BoomiAI_Boomi_HubGen.md) to learn more. (BI-6720)

- Hub DesignGen no longer generates models that exceed Hub’s model size limit. (BI-6203)

**We fixed these issues:**

- When creating a model with Hub DesignGen, you can choose at least one source for data synchronization. Previously, you were required to select at least two sources. (BI-6364)

- Hub DesignGen no longer generates models with multiple duplicate fields. (BI-6201)

## Boomi Scribe

**We added these features:**

- Boomi Scribe can now generate complete process documentation directly in the integration canvas. You can generate process documentation for a process using the AI button in the bottom right corner of the canvas. Review [Process canvas: Documenting integrations](/docs/Atomsphere/Platform/atm-BoomiAI_Generating_documentation_in_the_canvas.md) to learn more. (BI-6018)

  ![looping image showing how to click the AI icon to open Scribe in the process canvas](https://files.help.boomi.com/gifs/scribe-integration-canvas.gif)

- Boomi Scribe’s complete process documentation now includes a Process Schedule section for deployed processes scheduled to run automatically. This section presents the schedule in a table format, detailing the day, time, and frequency of process executions. This feature is only available in Boomi GPT. Review [Documenting existing integrations in Boomi GPT](/docs/Atomsphere/Platform/atm-BoomiAI_Create_Documentation_for_Existing_Process.md) to learn more. (BI-6132)

- We've enhanced Boomi Scribe's description summary response to contain more details about the process. (BI-6194)

- Boomi Scribe’s complete process documentation now includes more detailed summaries of subprocesses associated with process call steps, found in the “Process Steps and Functions” section. Review [Documenting existing integrations in Boomi GPT](/docs/Atomsphere/Platform/atm-BoomiAI_Create_Documentation_for_Existing_Process.md) to learn more. (BI-6456)

- We’ve improved Boomi Scribe error messages within the platform with more detail and help documentation links so that you can review important considerations about functionality and limitations that cause errors. (BI-6714) (BI-6757)

**We fixed these issues:**

- Boomi Scribe no longer responds with an incorrect diagram when documenting the Coupa Requisition to NetSuite Purchase order integration. (BI-6155)

- When you export documentation that compares two component versions, the exported file name now includes the component name. (BI-6360)

- Boomi Scribe now consistently returns summaries that reflect the correct process when comparing two versions. This fix addresses specific scenarios where the response was inaccurate. (BI-6955)

