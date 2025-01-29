#  Master Data Hub

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-137495c2-a7d9-4266-a133-cd248a14ef06"/>
</head>

**We added these features:**

- The new Boomi DataHub connector makes building integrations for master data synchronization easier. The connector features new and familiar operations that align with the Master Data Hub Repository API operations. The connector supports the following operations:

  - **Get Golden Record** - retrieves a specified golden record
  - **Get Quarantine Entry** - retrieves a specified quarantine entry
  - **Update Golden Records** - (previously Upsert) creates and/or updates golden records
  - **Query Golden Records** - retrieves active golden records
  - **Query Quarantine Entries** - retrieves quarantine entries
  - **Fetch Channel Updates** - (previously Query) fetches batches of source record update requests
  - **Match Entities** - Lists match results for a batch of entities from a contributing source

Read [Boomi DataHub connector](/docs/Atomsphere/Integration/Connectors/int-Boomi_Data_Hub_connector.md) to learn more.

  (HUB-3549) 

- You can now set a model to require approval for field updates when the field has a base value using the Require Approval for Base Value property in the Create Model API. The Update Model API allows you to update this property. The Get Model API returns the Require Approval for Base Value property in its response. Read [mdm: sources element structure](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-mdm_sources_element_structure_8ab8a61e-f31e-4456-a2ee-01cf7225abe2.md) to learn more. (HUB-3893)

- The Statistics tab displays reference field statistics for a golden record:
  - **Resolved References Count** - the total resolved reference fields in the golden record.
  - **Distinct Resolved References Count** - the number of unique resolved reference fields in the golden record.
  - **Unresolved References Count** - the total unresolved reference fields in the golden record.
  
  You can also view reference field statistics for source entities grouped by source.
  -  **Resolved References Count** - total resolved reference field values for the specified source.
  - **Distinct Resolved References Count** - the number of unique resolved reference field values for the specified source.
  - **Unresolved References Count** - the total unresolved reference field values for the specified source.
  - **Distinct Unresolved Reference Count** - the number of unique unresolved reference field values for the specified source.

  Read [Viewing golden record statistics](/docs/Atomsphere/Master%20Data%20Hub/Stewardship/hub-Viewing_golden_record_field_statistics.md) to learn more. (HUB-4003)

**We fixed these issues:**

- The Revert button no longer displays in the deployed model's Sources tab if the deployed model is in sync with the base model's source configuration. The button also does not show for legacy models. Instead, a message displays telling the user that the source configuration is specific to this repository. (HUB-1430)

- Pagination on the Golden Record screen works as expected after enabling Accelerated Query. (HUB-3878)

- Your CORS configuration now works with the `https://platform.boomi.com/auth/jwt/generate/{account_id}` endpoint to generate a JSON Web Token (JWT). (HUB-4211)

- Master Data Hub no longer sets a model to require record update approval when you set a specific field update to require approval. (HUB-3875)

- When you send an OPTIONS request to the Repository API without credentials, the API returns CORS headers as configured in the repository. (HUB-4191)

