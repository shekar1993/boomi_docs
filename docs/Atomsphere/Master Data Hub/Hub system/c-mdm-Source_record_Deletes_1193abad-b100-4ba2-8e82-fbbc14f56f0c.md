# Source record Deletes

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-1193abad-b100-4ba2-8e82-fbbc14f56f0c"/>
</head>




This topic outlines a scenario that illustrates Boomi DataHub processing in response to the deletion of a source record.

Consider a domain named Contact whose sources are NetSuite and Salesforce. Assume:

- Both sources contribute data to Contact and initial loading of their data has been completed.

- For each source an incremental synchronization process is deployed that batches source record updates and routes them to the repository on which Contact is hosted.

- For each source a channel is configured for propagating source record update requests necessitated by golden record updates. Requests propagated on these channels are not restricted.

- Neither source is configured to allow multiple links from individual golden records to entities in the source system.

- Source rankings are not configured.

- A default source is not designated.

- For each source a synchronization process is deployed that routes batches on the source’s channel to the source.

- Neither source is configured such that their entity submissions that would end-date matching golden records are subject to manual approval.

The following scenario illustrates processing in response to the deletion of Salesforce record SF1:

1. Salesforce record SF1 is deleted.

2. Linked golden record GR1 is marked with an end date timestamp:

     1. The Salesforce to Boomi DataHub process detects that Salesforce record SF1 has just been deleted.
  
     2. The process sends a golden record delete request specifying SF1 to the repository.
  
     3. The repository receives the request, checks whether a golden record is linked to SF1 and finds golden record GR1 is linked to SF1.
  
     4. The repository marks GR1 with an end date timestamp specifying the time the delete request was received.
  
        :::note
      
        The history of GR1 remains intact and views of GR1 as of a specified point in time are served as long as that point in time is after the golden record came into existence and before it was marked with an end date timestamp.

        :::

     5. The repository extracts the ID of the linked NetSuite record (NS1) from GR1.
  
     6. The repository sends an update request on the NetSuite channel specifying a delete operation on NS1.

3. Linked NetSuite record NS1 is deleted:
     1. The Boomi DataHub to NetSuite process receives the update request.
  
     2. The process maps GR1’s profile to the applicable NetSuite record profile.
  
     3. The process routes the update request to NetSuite.
  
     4. NetSuite deletes NS1.
  
4. The NetSuite to Boomi DataHub process detects that NetSuite record NS1 has just been deleted.
  
5. The process sends a golden record delete request specifying NS1 to the repository.
  
6. The repository receives the request, checks whether a golden record is linked to NS1, and finds GR1 is linked to NS1.
  
7. The repository compares the timestamp of the delete request with the GR1 end date timestamp and finds the end date timestamp is earlier than the timestamp of the delete request, and therefore, no further processing is necessary.

    :::note
    
    When a golden record is end-dated, its source value agreement tracking data is discarded.

    :::

