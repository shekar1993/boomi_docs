# Creating Hub models with HubGen  

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-e1b14167-7504-4dca-882f-b4e63043bc2d"/>
</head>

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-e1b14167-7504-4dca-882f-b4e63043bc2d"/>
</head>

[Boomi HubGen](/docs/Atomsphere/Platform/atm-BoomiAI_Boomi_HubGen.md) can generate models in Hub to reduce the time it takes to synchronize data between your organization's systems. You can prompt Boomi GPT to orchestrate HubGen to create model drafts. For example, enter the prompt "Create a model in DataHub." HubGen generates models based on the sources you want to synchronize and the type of domain(s) you want to use for the model(s). After it generates the model, you can open it as a draft in Hub.

## Prerequisites

You must have Boomi DataHub enabled on your account and have the following Hub privileges:

- **MDM - View Models**
- **MDM - Edit Models**

## Important Considerations

- Boomi HubGen currently supports the English language
- HubGen source suggestions are based on Boomi GPT's supported application connectors. It does not access source information from your Platform account.
- HubGen suggests domains for sources based on common integration patterns from de-identified metadata.
- It has no knowledge of previous model design responses. You cannot refer to a previous model design prompt or response. To make adjustments, copy and paste the previous prompt with your edits in the chat window.
- You can access HubGen within the Boomi GPT landing page.


## Creating Hub models 

1. On the Platform home page, click the AI icon. 
2. In the Boomi GPT landing page chat window, enter a prompt to generate a data model. For example, “**Create a model in datahub**”. Refer to [Prompt examples](#prompt-examples) for assistance. 
3. Select one or more source systems that will contribute data to golden records in the Hub repository. The list of source systems aligns with connectors Boomi GPT supports. They are not pulled from your Platform account. 
4. Click **Looks good** to continue. 
5. Select the domain or domains you want to generate. Domains represent the type of data you want to synchronize. The model name will default to the domain name. For example, you can select **Customer** to create a Customer model to synchronize all your data across customer records in Salesforce and Shopify. 
6. For each domain you want to create, select the source or sources that are contributing data.
7. Click **Looks good, proceed to next step** to continue. 
8. Review the model or models HubGen will create. Click **Create Models** to continue. 
9. Click the link to open the model draft in Hub. You can make edits to the draft, including editing the model name and [match rules](/docs/Atomsphere/Master%20Data%20Hub/Modeling/t-mdm-Adding_a_match_rule_3bd6884b-c6a5-49ff-b3dc-2ac536aba1b4.md). Read [Modifying a model](/docs/Atomsphere/Master%20Data%20Hub/Modeling/t-mdm-Modifying_a_model_41eeab47-1198-4e42-aa85-bb0622162d97.md) to learn more about editing models. When ready, [publish your model](/docs/Atomsphere/Master%20Data%20Hub/Modeling/t-mdm-Publishing_a_model_eb005b41-9581-4887-8b16-1dbff5069544.md) and [deploy it to a repository](/docs/Atomsphere/Master%20Data%20Hub/Deployment/t-mdm-Deploying_a_model_to_a_repository_4e36910d-ac80-4a04-b600-7dd9ed621444.md).

## Prompt examples

Instruct HubGen to create a Boomi DataHub model. Use the prompt examples as a template to help you create prompts for the ideal response.  

Prompt Example|
|--------------|
|"Create a model in datahub"|
|"Create a synchronization in Boomi Master Data Hub"|
|"I need to create a Hub synchronization for data integration"|
|"Develop a model in datahub"|
|"Develop a Hub synchronization solution"|
|"Generate a Hub synchronization"|
|"Generate a model for Hub"|
|"I want to create a Hub synchronization for my data integration needs"|
|"Craft a model for Hub"|
|"Craft a canonical model in Hub"|
