#  Master Data Hub

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-d1d5ec66-a7ed-4a07-9240-a361b6d18ce7"/>
</head>

<!-- **We added this feature:**

- The new Master Data Hub version 2 connector makes building integrations for master data synchronization easier. The connector features new and familiar operations that align with the Master Data Hub Repository API operations. 

  The connector supports the following operations:
  - **Get Golden Record** - retrieves a specified golden record
  - **Get Quarantine Entry** - retrieves a specified quarantine entry
  - **Update Golden Records** - (previously Upsert) creates and/or updates golden records
  - **Query Golden Records** - retrieves active golden records
  - **Query Quarantine Entries** - retrieves quarantine entries
  - **Fetch Channel Updates** - fetches batches of source record update requests

  (HUB-3084) -->

**We fixed these issues:**

- When you configure a source to **Allow Multiple Links**, staged records that are similar to each other are linked as expected. New and updated staged records are no longer quarantined. (HUB-2102)
- When you select the OR filter operator and filter by date on the Golden Records page, Master Data Hub shows only records matching the exact dates you entered in the **Date Range** field. (HUB-3001)
- Models correctly fail to publish when they contain a long text field in match rules. An error message explains the reason for the failure. (HUB-3394)
- We've increased the size limit of batch entities to 64 MB. (HUB-3287)
- Master Data Hub now links staged entities to source entities correctly. Patch 24.01.4 is relevant to public Boomi Hub clouds only. (HUB-3600)
