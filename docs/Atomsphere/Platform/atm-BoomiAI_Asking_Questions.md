# Asking questions with Boomi Answers

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-75733885-cf6d-4d89-be14-39ebf3cf2fab"/>
</head>

[Boomi Answers](/docs/Atomsphere/Platform/atm-BoomiAI_Boomi_Answers.md) can respond to questions in natural language about the Boomi Enterprise Platform and scenarios involving the platform. It answers your question and provides relevant topics from help.boomi.com and the Boomi Community. Boomi Answers is accessible through the Boomi GPT landing page. 

To ask a question, enter your prompt in the Boomi GPT chat window and click Send.

![troubleshooting example](./Images/ai-img-troubleshooting.png)

## Important considerations

- Boomi Answers cannot respond to questions:

  - About your specific Boomi account and data
  - Unrelated to the Boomi Enterprise Platform
  - About troubleshooting specific issues with your account
  - Asking for code samples

- Boomi Answers does not have context about previous responses to questions and integration design requests. Questions must contain at least three words.

- The Boomi Answers large language model's responses are dependent upon the input it receives by the user, and different inputs may return different results. 

- The model is continuously learning and responses will continue to improve as the model improves.

- The model's responses are based on the latest information the model is trained on.  

## Prompt engineering tips

- You can specify a format for the response. For example, "Return as a table." or "Provide a bullet point list."
- Include as much detail and context as possible, including which Boomi services are involved.
- Ask for examples. For example, "Give me an example of a Groovy script."
- Use open-ended questions for exploration. For example, "What are some ways I can ensure that my Hub model follows best practices?".
- Use specific constraints when needed. For example, "List five application connectors and explain what they can do."
- You can encourage step-by-step instructions. For example, "Explain the process of setting up 2FA in the Boomi Platform, step by step.

## Asking questions about the platform

You can ask questions to learn more about the Boomi Enterprise Platform, Boomi terminology, and creating integrations. Use the prompt examples as a model to help you create prompts for the ideal response.

|Prompt Example|
|--------------|
|"What is a Event Streams?" |
|"What types of connectors are there? Return as a table"|
|"Where can I find my scheduled process?"|
|"Where in the platform do I go to manage user access?"|
|"How do I deploy a process?"|
|"How do I run statistics for a deployed model in Boomi DataHub?"|

## Ask questions about general troubleshooting scenarios

You can describe your scenario and ask questions to help complete a task in the platform. Use the prompt examples as a template to help you create prompts for the ideal response.

|Prompt Example|
|--------------|
|"We would like to enforce two-factor authentication for login to the Boomi Enterprise Platform. Each user can set up 2FA. Can the administrator force all users of the account to use two-factor authentication?"|
|"What happens to golden records after I change a source configuration on a model? For example, if I change a source to only accept data instead of contributing data."|

## Ask questions about Groovy scripting

You can ask questions about basic Groovy scripting to get general guidance. Boomi Answers responses are based on content provided by the Boomi Community and Help.Boomi.com.

|Prompt Example|
|--------------|
|"How do I write a Groovy script that writes entries to the process log?"|
|"Write me an example of a Groovy script that manipulates data"|
|"Write a groovy script that will resize a base64 encoded image from an InputStream back to an InputStream"| 

![Groovy scripting example](./Images/ai-img-groovy_script_example.png)
