#  Boomi AI

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-1b18d2eb-e78b-4ddb-8c68-3ec2dde64225"/>
</head>

**We added these features:**

- You can export Boomi GPT's generated process documentation as a .docx file. Click the Download button next to the response to export. When opened in a .docx-supported editor, the content includes the process diagram and appears similar to how content appears in Boomi GPT. This feature is supported in Chrome, Firefox, Edge, and Safari. Read [Creating Summaries and Documentation for an Existing Process](/docs/Atomsphere/Platform/atm-BoomiAI_Create_Documentation_for_Existing_Process.md) to learn more. (BI-4894)

- We've changed the word "shape" to "step" in Boomi GPT to reflect the language updates in the Boomi Enterprise Platform. (BI-5052)

- Boomi GPT provides map step details in process documentation, including source object, source profile component name, target object, and target profile component name, when the map step contains an XML or JSON profile. Read [Creating an Integration Using a Detailed Prompt](/docs/Atomsphere/Platform/atm-BoomiAI_Create_Integration_using_a_Detailed_Prompt.md) to learn more. (BI-4637, BI-4872, BI-5111)

- We've added help text after Boomi GPT generates a process diagram. The update improves your experience when editing and modifying designs before generating an integration. (BI-4885)

- We updated multiple error messages in Boomi GPT to improve clarity and help you resolve issues. (BI-5205)

- Summaries, long descriptions, and process documentation summaries include details about the step operations and how the data flow impacts business outcomes. (BI-4873)


**We fixed these issues:**

- Generated documentation no longer includes extra hash symbols next to headings, and sentences in long descriptions no longer automatically wrap to the following line. (BI-5053)

- Boomi GPT shows the connector image instead of the start step image in the process diagram if a connector starts a process. (BI-5119)

- If you use a hashtag in your prompt to generate documentation and press the enter key to submit, the response generates as expected. (BI-5175)

- Boomi GPT displays the correct process name in the chat window when you paste a URL to generate documentation. (BI-5136)