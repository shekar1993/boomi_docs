#  Boomi DataHub (Master Data Hub)

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-a578d1da-3a0b-4814-b807-daa02f0ac38c"/>
</head>

**We’ve updated the name of Master Data Hub to Boomi DataHub to better reflect the service’s capabilities.** You’ll notice the name update throughout the Boomi DataHub user interface and documentation. 

Boomi DataHub builds on Master Data Hub by adding features from Integration, Boomi AI, and other services. It automates data cleansing, supports bi-directional synchronization, and ensures reliable governance for operational, analytical, and AI purposes. (HUB-4513)

**We added these features:**

- Boomi DataHub's staging area lets you preview how data updates will impact your golden records and identify potential conflicts before sending data to the repository. The following new Repository API endpoints allow you to manage staged entities with the option for advanced security through JWT authentication:

  - [Delete staged entities](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-Delete_Staged_Entities.md)
  - [Commit staged entities](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-Commit_Staged_Entities.md)
  - [Resubmit staged entities](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-Resubmit_Staged_Entities.md)
  - [Get single staged entity](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-Get_Staged_Entity.md) 
  - [Query multiple staged entities](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-Query_Staged_Entities.md)

  (HUB-4245, HUB-4243, HUB-4244, HUB-4242, HUB-4235)

- Accelerated Query (Tech Preview) now supports sorting field names in ascending and descending order when querying golden records through the API and UI. (HUB-2435)

**We fixed these issues:**

- Boomi DataHub now correctly quarantines an entity with an “Other Incorporation Error” reason if you edit and submit a duplicate quarantined entity. (HUB-2543)

- Boomi DataHub now accurately determines the record count of the deployed model and lets you activate Accelerated Query as expected. (HUB-4254)

- The Boomi DataHub connector no longer shows a “Not Found” error when fetching large batches of channel updates with the Fetch Channel Updates operation. (HUB-1655)
  
  :::note

  This fix is deferred to a future release.

  :::

- Golden record references auto-resolve as expected for linked sources when another source changes the entity ID for a reference field value. (HUB-4593)
