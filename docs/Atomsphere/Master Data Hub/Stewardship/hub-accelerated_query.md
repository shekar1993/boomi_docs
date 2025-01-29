# Activating accelerated query for golden records

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-83a48dad-9be5-475c-b928-ea75efebd194"/>
</head>

Accelerated Query provides faster search results and improved performance when querying golden records on the **Stewardship** > **Golden Records** screen and when [querying golden records using the Repository API](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/r-mdm-Query_Golden_Records_dad5ed08-37ae-47e7-b431-7394cf591aa1.md). This feature does not apply to quarantine entries and staged entities.

### Prerequisites

You can activate this feature when:

- a universe contains 100,000 or more records.
- the repository is hosted on one of the following Hub clouds:
  - Boomi USA East Hub cloud
  - Boomi DEU Hub cloud
  - Boomi ANZ Hub cloud
  - Boomi ANZ Local Hub cloud
  - Boomi GBR Hub cloud

The Repository screen shows the label **ACCELERATED QUERY ELIGIBLE** next to repositories that meet the prerequisites.

### Before you begin

After you request to activate accelerated query, you'll see a loading indicator while the activation is in progress. You can continue to query records during this time.

When Boomi DataHub completes the process, the **Activate** button disappears and the **Deactivate** button appears.

### Procedure

1. Navigate to Repositories.
2. Select the eligible repository.
3. Select the **Configure** tab.
4. Click **Request Activation**.
5. Review the Boomi technology preview agreement. Click **Activate** to continue.

## Deactivating accelerated query

During tech preview, you have the option to deactivate accelerated query. However, it's important to understand that if you want to reactivate accelerated query, it may take several hours to process.

1. Navigate to Repositories.
2. Select the repository.
3. Select the **Configure** tab. 
4. Click **Deactivate**. 
5. Click **Deactivate** to confirm. Deactivation occurs immediately.