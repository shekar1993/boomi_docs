#  Master Data Hub

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-cf8bb1cc-6d55-456d-ac73-571ac7b99d51"/>
</head>

**We added these features:**

<!-- #### Boomi Data Hub connector (Tech Preview)

The new Boomi Data Hub connector makes building integrations for master data synchronization easier. The connector features new and familiar operations that align with the Master Data Hub Repository API operations. The connector supports the following operations:

- **Get Golden Record** - retrieves a specified golden record
- **Get Quarantine Record** - retrieves a specified quarantine entry
- **Update Golden Records** - (previously Upsert) creates and/or updates golden records
- **Query Golden Records** - retrieves active golden records
- **Query Quarantine Entries** - retrieves quarantine entries
- **Fetch Channel Updates** - (previously Query) fetches batches of source record update requests
- **Match Entities** - Lists match results for a batch of entities from a contributing source

(HUB-3549) -->

- Data masking lets you control the visibility of sensitive data within golden records. It helps your organization adhere to data security and privacy policies and regulations. 

  You can configure the following data masking options when you create or edit model fields:

  - **All** - hides entire data
  - **Partial Mask** - hides a portion of the data
  - **Partial Show** - reveals a portion of the data
  - **None** - reveals entire data

  Field data masking is applied when you view golden records, quarantine entries, and staged entities. Master Data Hub applies masking configurations in the Platform API and Repository API responses based on the authenticated user’s privileges and Hub entitlements, except when using a Hub authentication token to access the Repository API. 
  
  Masking is also applied when viewing golden record metadata in the Statistics tab. The Values tab shows an empty histogram for masked fields if the user does not have permission to view masked data.

  Administrators can allow team members to view sensitive data by applying one of the following user permissions:

  - **MDM - Privileged Data Steward** role or **MDM - Administrator** role
  - **MDM - Reveal Masked Data** privilege
  - **Reveal Masked Data** Hub role entitlement (available with the Advanced Security feature)

  Read [Data masking examples](/docs/Atomsphere/Master%20Data%20Hub/Modeling/hub-Data_masking_examples.md) and [Adding a field](/docs/Atomsphere/Master%20Data%20Hub/Modeling/t-mdm-Adding_a_field_b0e3b851-2b02-4624-b74f-f8625dfc9c41.md) to learn more.

  (HUB-2001)

- If a golden record has many collection fields with data masking applied, a message displays informing you that you can find field information in the History tab. In this situation, the Original XML view won't be available. (HUB-3572)

- Accelerated Query (Tech Preview) improves performance when querying a universe with a large amount of golden records. You’ll notice faster search results on the **Stewardship** > **Golden Records** screen and when querying golden records using the Repository API.

  You can activate Accelerated Query on the **Configure** tab of the repository screen when a universe contains 100,000 or more records. The feature is available for the following Hub clouds:
  - Boomi USA East Hub cloud
  - Boomi DEU Hub cloud
  - Boomi ANZ Hub cloud
  - Boomi ANZ Local Hub cloud

  Read [Accelerated Query](/docs/Atomsphere/Master%20Data%20Hub/Stewardship/hub-accelerated_query.md) to learn more. 

  (HUB-3558)

- Improved security for Hub repositories. Master Data Hub leverages the Shared Web Server user properties for Hub clouds in Atom Management to support IP filtering and CORS configuration. Select **Advanced** as the API Type on the **Shared Web Server** screen to display the IP filtering and CORS settings. Read [Repositories overview](/docs/Atomsphere/Master%20Data%20Hub/Getting%20started/hub-Repositories_overview_7b1dc32c-13a7-42a8-9716-0bbd76406e70.md) to learn more. (HUB-3081)

- The new Cancel Pending Batches endpoint in the Repository API lets you cancel all pending batches for a given universe and source. The POST request sets pending batches in an ENRICHED or PARSED status to CANCELED. Read [Cancel pending batches](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-Cancel_Pending_Batches.md) to learn more. (HUB-3869)

**We fixed these issues:**

- Removed the source entity ID from the column count in statistics for a deployed Hub model. (HUB-3674)
- Model deployment now fails as expected when you attempt to delete the only contributing source linked to a golden record. (HUB-3596)
- The Get Golden Record History API endpoint no longer sends a 404 Not Found error response if your request contains only space characters for the Universe ID parameter. (HUB-3617)
- Master Data Hub now correctly applies your model’s source configuration changes so that channel update requests for new records appear in the Outbound Activity screen. (HUB-3204)
- Master Data Hub now correctly quarantines records with an Incorporation error when you attempt to swap an entity ID that is linked to another golden record. (HUB-2217)
- Float field values no longer display in scientific notation. (HUB-3442)
- The response for the Get Model endpoint in the Platform API now includes correct business rule condition operators. (HUB-3726)
- Failed model deployments due to source deletion restriction no longer cause a stuck deployment status, retries, and audit logging of every retry. (HUB-3344, HUB-3599)
- Master Data Hub now accurately recognizes that you are linking a source entity ID to a golden record for the first time. It no longer quarantines it with a message that the source entity ID has already established a link to another record. (HUB-4082)