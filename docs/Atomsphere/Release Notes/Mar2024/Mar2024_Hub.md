#  Master Data Hub

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-248367bf-8f99-4345-8ed5-169e58b234d7"/>
</head>

**Deferred**: Subsequent to the March 2024 Runtime release, features and fixes for the March platform release are postponed and will be rescheduled.

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

  Administrators can allow team members to view sensitive data by applying one of the following user permissions:

  - **MDM - Privileged Data Steward** role or **MDM - Administrator** role
  - **MDM - Reveal Masked Data** privilege
  - **Reveal Masked Data** Hub role entitlement (available with the Advanced Security feature)
<br></br>
  :::note

  For the March release, you can remove access to the Repositories page to prevent unauthorized users from seeing sensitive statistics data in the Statistics tab. You can prevent access by removing the **View Repositories** privilege.

  :::

  (HUB-2001)

- Accelerated Query (Tech Preview) improves performance when querying a universe with a large amount of golden records. You’ll notice faster search results on the **Stewardship** > **Golden Records** screen and when querying golden records using the Repository API.

  You can activate Accelerated Query on the **Configure** tab of the repository screen when a universe contains 100,000 or more records. The feature is available for the following Hub clouds:
  - Boomi USA East Hub cloud
  - Boomi DEU Hub cloud
  - Boomi ANZ Hub cloud
  - Boomi ANZ Local Hub cloud 

  (HUB-3558)

- We’ve improved security for Hub repositories. Master Data Hub leverages the Shared Web Server user properties for Hub clouds in Atom Management to support IP filtering and CORS configuration. Select **Advanced** as the API Type on the **Shared Web Server** screen to display the IP filtering and CORS settings. (HUB-3081)

**We fixed these issues:**

- We removed the source entity ID from the column count in statistics for a deployed Hub model. (HUB-3674)
- Model deployment now fails as expected when you attempt to delete the only contributing source linked to a golden record. (HUB-3596)
- The Get Golden Record History API endpoint no longer sends a 404 Not Found error response if your request contains only space characters for the Universe ID parameter. (HUB-3617)
- Master Data Hub now correctly applies your model’s source configuration changes so that channel update requests for new records appear in the Outbound Activity screen. (HUB-3204)
- Master Data Hub now correctly quarantines records with an Incorporation error when you attempt to swap an entity ID that is linked to another golden record. (HUB-2217)