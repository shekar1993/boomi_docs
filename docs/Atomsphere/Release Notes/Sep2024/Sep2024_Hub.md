#  DataHub

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-ca4e80d8-19da-4903-9020-89f64d38957c"/>
</head>

**We added these features:**

- The HubGen agent uses the power of Boomi AI to streamline data model creation, accelerating data synchronization across your enterprise. HubGen generates models based on the type of domain you want (such as customer data) and the sources involved in data synchronization. After model creation, you can open the draft model in Boomi DataHub to manage, publish, and deploy it to a Hub repository.

  Access the HubGen agent by navigating to the Boomi Platform > AI icon > Boomi GPT interface. Enter the prompt "Create a model in DataHub" to get started. Read [HubGen](/docs/Atomsphere/Platform/atm-BoomiAI_Boomi_HubGen.md) and [Creating Hub models with HubGen](/docs/Atomsphere/Platform/atm-BoomiAI_Create_hub_models.md) to learn more. (BI-4105)


- We’ve added the following endpoints to the Repository API to manage quarantine entries with the option for advanced security through JWT authentication:

  - Query Transactions - Query all transactions in a deployed model by filter criteria. Read [Query Transactions](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-Query_Transactions.md) to learn more.

  - Approve Quarantined Entry - Approve quarantine entries by transaction ID. Read [Approve Quarantined Entity](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-Approve_Quarantined_Entity.md) to learn more.

  (HUB-4576)

- Accelerated Query is now in General Availability (GA). You can now activate Accelerated Query in repositories hosted by the Boomi GBR Hub cloud. (HUB-4568)

**We fixed these issues:**

- If channel updates to outbound sources exceed the outbound limit (by default, 200 entities), only the records up to the limit are processed and delivered. If the source entities linked to a single record exceed the outbound limit, it will be marked as HELD in the UI until the number of linked source entities falls below the outbound limit. (HUB-4612)

- Switching tabs within the golden record detail view no longer results in a blank screen while details load. (HUB-374)

- When you end-date a record, DataHub no longer sends a delete record update request to unlinked sources. This fix prevents a 'CriticalViolationException' error. (HUB-4564)

- Jobs displayed in the bulk processing request screen are now limited to types End-date, Purge and Send Updates. (HUB-4647)

- The Boomi DataHub connector no longer shows a “Not Found” error when fetching large batches of channel updates with the Fetch Channel Updates operation. (HUB-1655)

- An unexpected error no longer occurs when you enter credentials to unlock the ability to clear model data or undeploy a model in the Boomi DataHub user interface. (PS-5473)