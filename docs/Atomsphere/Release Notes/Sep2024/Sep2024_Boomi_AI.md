#  Boomi AI

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-493136ce-ba65-4bf8-aca6-5e0a8f277f1f"/>
</head>

## HubGen

**We added this feature:**

- The HubGen agent streamlines data model creation, accelerating data synchronization across your enterprise. HubGen generates models based on the type of domain you want (such as customer data) and the sources involved in data synchronization. After model creation, you can open the draft model in Boomi DataHub to manage, publish, and deploy it to a Hub repository.

  Access the HubGen agent by navigating to the Boomi Platform > AI icon > Boomi GPT interface. Enter the prompt "Create a model in DataHub" to get started. Read [HubGen](/docs/Atomsphere/Platform/atm-BoomiAI_Boomi_HubGen.md) and [Creating Hub models with HubGen](/docs/Atomsphere/Platform/atm-BoomiAI_Create_hub_models.md) to learn more. (BI-4105)

## Boomi Scribe

**We added this feature:**

- Boomi Scribe can now use the Component Diff API to provide a natural language summary of the differences between two versions of an integration. Enter a prompt in Boomi GPT to generate a summary of the integration and the additions, modifications, and deletions of the newer version. Read [Documenting version differences](/docs/Atomsphere/Platform/atm-BoomiAI_Documenting_version_differences.md). (BI-5539)

**We fixed this issue:**

- Boomi Scribe generates documentation even when the Start step does not have a configured connector. (BI-5280)
