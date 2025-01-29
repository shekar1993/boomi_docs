# Boomi HubGen 

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-320aece3-9f9d-487e-ad98-2f2dbff186db"/>
</head>

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-320aece3-9f9d-487e-ad98-2f2dbff186db"/>
</head>

Boomi HubGen accelerates model creation by generating data model drafts in Boomi DataHub tailored to your data synchronization needs. It intelligently designs the model based on your specified contributing sources and domain. It creates fields using de-identified metadata from common integration patterns. 

After HubGen generates the draft, you can open the link to edit the model in Boomi DataHub. You can access HubGen by entering a prompt on the Boomi GPT landing page.

<iframe width="700px" height="400px" src="https://embed.app.guidde.com/playbooks/hcmDj6wr2JpG9wdxZqG9Dx" title="HubGen" frameborder="0" referrerpolicy="unsafe-url" allowfullscreen="true" allow="clipboard-write" sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"></iframe>

## Benefits

HubGen benefits your business by:

- Reducing the time it takes to build models
- Enhancing the model design process
- Streamlining data synchronization

## Get started with Boomi HubGen

You can prompt [Boomi GPT](/docs/Atomsphere/Platform/atm-BoomiAI_BoomiGPT.md) to orchestrate HubGen to create a model. For example, enter the prompt **"Create a model in datahub."** HubGen asks which sources you want to synchronize and the type of domain you want to use for the model. After it generates the model, you can open it as a draft in Hub.

You must have Boomi DataHub enabled on your account and have the following Hub privileges:

- **MDM - View Models**
- **MDM - Edit Models**

Read [Creating Hub models](/docs/Atomsphere/Platform/atm-BoomiAI_Create_hub_models) for detailed instructions and prompt examples.  

<!-- ## Prerequisites

You must have Boomi DataHub enabled on your account and have the following Hub privileges:

- **MDM - View Models**
- **MDM - Edit Models** -->

<!-- ## Important Considerations

- Boomi HubGen currently supports the English language
- HubGen source suggestions are based on Boomi GPT's supported application connectors. It does not access source information from your Platform account.
- HubGen suggests domains for sources based on common integration patterns from de-identified metadata.
- It has no knowledge of previous model design responses. You cannot refer to a previous model design prompt or response. To make adjustments, copy and paste the previous prompt with your edits in the chat window.
- You can access HubGen within the Boomi GPT landing page. -->