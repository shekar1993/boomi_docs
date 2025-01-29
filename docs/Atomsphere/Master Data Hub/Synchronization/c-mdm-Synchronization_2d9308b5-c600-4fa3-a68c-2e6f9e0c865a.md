# Synchronization 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-2d9308b5-c600-4fa3-a68c-2e6f9e0c865a"/>
</head>


You can integrate the source systems that contribute master data with master data domains hosted on Boomi DataHub repositories in two ways:

-   Build and deploy integrations using [ Integration](/docs/Atomsphere/Integration/Getting%20started/c-atm-Integration_and_iPaaS_257fcf2c-7e93-48d0-be67-bd53fb444930.md).

-   Build and deploy custom-developed integrations that make calls to the Boomi DataHub Repository API and the APIs of the contributing source systems.

We recommend building integrations using Integration because

-   It lets you securely build, deploy, and manage source-master data integrations using only a web browser.

-   It provides the [ Boomi DataHub connector](/docs/Atomsphere/Integration/Connectors/int-Boomi_Data_Hub_connector.md) which abstracts the technical details of the Boomi DataHub Repository API.

-   It provides connectors for many popular source systems, including [Salesforce](http://www.salesforce.com) and [NetSuite](http://www.netsuite.com).


There are two types of source-master data integrations:

-   Source to Boomi DataHub — incremental synchronization processes that query individual contributing sources for recently created and updated records, and then route updates in batches to a Boomi DataHub repository on which a domain is hosted. These processes can be scheduled or event-driven.

-   Boomi DataHub to source — scheduled synchronization processes that check channels configured for individual sources of a domain hosted in a Boomi DataHub repository, and then route batches of source record update requests issued on those channels to the respective sources.


In each process you build with Integration, regardless of direction of the data flow, you will need to include at least one map step. Each map step references a map component with which you map the fields in a source system to fields in a Boomi DataHub domain and optionally apply transformations. You can exclude source fields from having their data contributed or from having their values updated to reflect changes in master data simply by not mapping those fields in the applicable map.

If all of your processes are scheduled, once you test and deploy them, consider building and deploying a primary synchronization process which calls each of your source-specific synchronization processes. This simplifies scheduling, in that you need only schedule the primary process, and enables you to control the sequence in which your synchronization processes execute.

## Event-driven integrations 

Event-driven source-to-Boomi DataHub incremental synchronization processes are compatible only with source systems that support the triggering of outbound messages in the event of record updates. Many source systems support outbound messaging, including [Salesforce](http://www.salesforce.com) and [Workday](http://www.workday.com). With these sources you can build and deploy event-driven synchronization processes that may enable master data to be updated in a more timely and efficient fashion than scheduled processes.

Integration provides the [Web Services Server connector](/docs/Atomsphere/Integration/Connectors/r-atm-Web_Services_Server_connector_b478c2c9-c309-456c-98e8-12ec189e5790.mdx) which can be used in deployed processes to listen for outbound messages from sources. For performance reasons, you would typically configure a source to send messages that contain only the ID of a newly created or updated source record.

## Initial load integrations 

The integration process used to perform the initial load of data into a domain from a particular source system needs to be successfully executed only once.

Consider building initial load processes to use a static data set such as a CSV file as the source rather than loading data directly from the source system. Many systems provide the capability to export data to a CSV file. Using a static data set is helpful for preventing data integrity issues caused by changes occurring to source data while the initial load is in progress. Furthermore, having a static data set enables you to more easily repeat an initial load if that were to become necessary.

provides standard connectors, such as the [Disk connector](/docs/Atomsphere/Integration/Connectors/r-atm-Disk_connector_277ab5b3-4715-45e3-a4af-6e42563c4b65.md) and the [FTP connector](/docs/Atomsphere/Integration/Connectors/r-atm-FTP_connector_44e22a54-d5ae-48f8-bfda-4905b7b0014d.md), to enable the usage of CSV files as input to processes.

## Integrations with contribute-only sources 

Boomi DataHub to source integrations are not needed for contribute-only sources. In fact, it is not possible to configure a channel for routing source record update requests to a contribute-only source.

## Integrations with non-contributing sources 

Although non-contributing domain sources, such as data warehouses, do not contribute updates to master data, links from golden records to such sources are required to enable synchronization. These links are automatically established for sources designated as non-contributing upon attachment. Golden record IDs serve as entity IDs in these links.

Source to Boomi DataHub integrations are not needed for non-contributing sources. In fact, the repository does not accept batches from non-contributing sources.