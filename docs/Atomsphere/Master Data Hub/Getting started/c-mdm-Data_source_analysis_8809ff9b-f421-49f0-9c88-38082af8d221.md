# Data source analysis 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-8809ff9b-f421-49f0-9c88-38082af8d221"/>
</head>


These are your major goals in analyzing data sources during the planning phase of a Boomi DataHub project:

1. The preferred method is through the deployment, for each contributing source, of an integration process that queries or listens for recently updated records and propagates them to Boomi DataHub.

    The preferred method is through the deployment, for each contributing source, of an integration process that queries or listens for recently updated records and propagates them to .

    :::note
    
    Only while Initial Load mode is enabled for a source should its full set of source records be loaded.

    :::

2.  Identify the fields to be mastered and their corresponding domains.

3.  Of those fields of interest, identify which are to be contributed by each source.

    Each inbound integration process controls the mapping of fields between its originating source and a domain.

4.  Specify reference fields and identify the domains to which these fields will refer. Reference fields are used to represent relationships between objects, such as employee-manager or contact-account.

    -  Managers are themselves employees. Therefore, to represent employee-manager relationships, an employees domain would need to reference itself.

    -   Accounts and contacts are different types of objects. Therefore, to represent contact-account relationships, a contacts domain would need to reference an accounts domain.
  
    If reference fields refer to reference data mastered in other domains, such as geographical locations, identify the source of record for that reference data,

5.  Specify match rules — the rules by which records are to be matched between sources. Match rules are applied sequentially.

6.  Determine any validation and enrichment processing to be applied to incoming data. This processing will be initiated via requests to third party data services such as [Loqate](https://loqate.com/address-verification/).

    A data quality step may specify validation or enrichment processing or both. Data quality steps are additive: the output of one is input to the next.

7.  Determine how updates will flow from domains back to sources.

    The flow of data from a domain is enabled through the deployment, for each target source, of an integration process that fetches batches of source record update requests, originated by the repository hosting the domain, through the channel configured for that source.

    Depending upon the channel configuration, update requests will be propagated as either differentials — that is, only those fields whose values were changed — or full records. The API for a given source system specifies whether it requires differential or full updates.

-   [Salesforce](http://www.salesforce.com/) and [NetSuite](http://www.netsuite.com/) are examples of systems requiring differential updates.

-   [Taleo](http://www.taleo.com/) is an example of a system requiring full updates.

    Obviously, differential updates require less bandwidth.

8.  Identify the fields to flow to each source.

    Each outbound integration process controls the mapping of fields between a domain and its target source.

9.  Rank each domain’s sources from most trusted to least. The rankings can be either at the record level, if applicable, or otherwise at the field level. If ranking is applicable at the record level, the top-ranked source is the domain’s source of record. The source of record is important to identify because it can influence not only domain modeling but also the order in which sources are initially loaded to the domain and the design of the master synchronization process.