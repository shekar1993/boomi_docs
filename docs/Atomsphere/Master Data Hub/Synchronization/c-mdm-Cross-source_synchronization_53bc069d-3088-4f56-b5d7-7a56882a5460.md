# Cross-source synchronization

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-53bc069d-3088-4f56-b5d7-7a56882a5460"/>
</head>


Use to synchronize a domain’s master data across its source systems.

Synchronization relies on the deployment of the following types of integration processes:

- Contributing source to — incremental synchronization processes that batch source record updates and route them to the repository on which a domain is hosted.

- to source — synchronization processes that route source record update requests, which originate in batches from the repository, to source systems.

The recommended execution sequence is as follows in cases where there exists a domain-wide source of record — that is, a source whose data across all fields is more trusted than data from all other sources:

1. Execute the contributing source-to- processes.
   - Execute first the process that routes updates from the least trusted source.

   - Execute last the process that routes updates from the source of record.

2. Execute the -to-source processes.
   - Execute first the process that routes updates to the least trusted source.

   - Execute last the process that routes updates to the source of record.

For example, consider a domain, Contacts, whose attached sources (all contributing data) are Google Contacts, NetSuite and Salesforce, where NetSuite is the source of record and Google Contacts is the least trusted source. The recommended order of execution is as follows:

1. Source to Boomi DataHub
   
   1. Google Contacts

   2. Salesforce

   3. NetSuite

2. Boomi DataHub to source
   
   1. Google Contacts

   2. Salesforce

   3. NetSuite

These processes are typically executed as sub-processes of a regularly scheduled master synchronization process.

Consider the following factors when determining the optimal frequency of execution:

- anticipated volume of source record updates

- degree to which having timely master and source data is critical

- throughput and capacity of the relevant computing and storage resources

Intervals of 5, 15 and 60 minutes are common.