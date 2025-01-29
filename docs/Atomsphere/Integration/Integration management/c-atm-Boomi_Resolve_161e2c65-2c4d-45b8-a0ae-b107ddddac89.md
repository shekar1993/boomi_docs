# Boomi Resolve 

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-34911C87-8370-4D6B-BA6E-F3AC17BF7448"/>
</head>

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-34911C87-8370-4D6B-BA6E-F3AC17BF7448"/>
</head>

Similar to Boomi Answers, the Resolve agent harnesses the power of Retrieval Augmented Generation (RAG) to help you quickly troubleshoot process or document errors upon request. This AI-powered agent offers more effective and accurate solutions than the legacy Resolve feature. The Resolve agent analyses the process error details, recommends the next steps to troubleshoot, and provides relevant articles by leveraging knowledge from Help.boomi.com and the Boomi Community. 

<iframe width="700px" height="400px" src="https://embed.app.guidde.com/playbooks/1aNoMaumXtJrDdNanf5rti" title="Resolve" frameborder="0" referrerpolicy="unsafe-url" allowfullscreen="true" allow="clipboard-write" sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"></iframe>

## Prerequisites​

To use the Resolve agent, you must have the following: 

- Agreement to the Boomi AI terms and conditions. Administrators can select the **AI icon** > **Get Started** to view and accept terms and conditions.
- Access to View Results for Process Reporting. Read [User roles and privileges](/docs/Atomsphere/Platform/c-atm-User_roles_and_privileges_5a1c8a1a-4d58-4e7d-a6b6-b684a0c6d672.md) to learn more about default Boomi Enterprise Platform roles and permissions.

## Benefits

Resolve benefits your business by:

- Providing automated solutions to resolve issues faster.
- Reducing manual effort in detecting integration failures, speeding up response time.
- Enhancing overall operational efficiency and reducing downtime from integration failures.

## Important Considerations

- The Resolve agent currently supports the English language.
- Resolve is only focused on troubleshooting integration failures that occur during process execution. 
- Resolve is available when your admin enables AI for your platform account. Contact your Boomi Administrator if you do not see the **Generate Solution with Boomi Resolve** button on the error details page.
- You can access the Resolve agent within Process Reporting.

## Generate solutions in Integration

1. Navigate to **Manage** > **Process Reporting** in Integration. By default, you will see all the processes that have been executed in the past hour. 
2. **Optional:** Apply filters to refine the list of executed processes based on specific criteria. 
3. Click on the **Error** tab to view processes that have encountered errors. 
4. Select the timestamp of the process from the list to which you want to generate a solution.
5. Click on the error message to view the **Error Details**. 
6. After reviewing the Error Details, click on **Generate Solution with Boomi Resolve**. The Resolve agent generates a solution and provides relevant topics from Help.boomi.com and the Boomi Community for further exploration.
7. **Optional:** You can click the Copy icon to copy and paste the solution into your content management system. The text is in Markdown.



<!-- **Boomi Resolve** shows possible solutions to document or process errors.

When you view details about a document or process error in the **Manage** menu’s **Process Reporting** page, the **Boomi Resolve** tab in the Error Details lists possible solutions to the error. These solutions are retrieved from the Boomi Resolve database. This database relates unique error messages to articles in the [Community Knowledge Base](https://community.boomi.com/s/knowledge-base) and this documentation. A single article may be related to multiple error messages and a single error message may be related to multiple articles. The **Boomi Resolve** tab lists possible solutions in descending order of relevancy based on assigned relevancy scores and includes links to the full articles.

![Boomi Resolve](../Images/manage-ps-process-reporting-resolve_9d0c94e9-9603-4455-89e0-e2d21fb4f27a.jpg)

The Boomi Resolve database grows over time as processes run, errors occur, and more error messages are associated with articles.

The database currently is exclusively populated by , however users can contribute resolutions similar to field mappings to the Boomi Suggest database. -->