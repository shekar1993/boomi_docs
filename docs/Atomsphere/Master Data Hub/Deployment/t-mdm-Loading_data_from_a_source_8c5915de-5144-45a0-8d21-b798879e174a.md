# Loading data from a source 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-8c5915de-5144-45a0-8d21-b798879e174a"/>
</head>


Load data from a contributing source system into a master data domain by executing the process you built to load records from that source into the domain. If there is a source system of record across all fields in the domain model, load the data from that source first.

To load data, Initial Load mode is enabled in the deployed model's Source tab for the corresponding source.

Load the data from additional contributing sources, one at a time. Each time you load data from a new source, execute the processes that route record updates in both directions between the domain and each loaded source. Also execute the processes that route update requests from the domain to non-contributing sources. Each time you execute a process, examine the master data and the target data store to determine whether the updates propagated as expected and records were properly matched.

The objective of this iterative testing process is to ensure master data remains synchronized across sources. Along the way you may need to fine-tune match rules in the model. Each time you change match rules or other components of the model, you will need to publish a new version of the model and deploy it.

## Before you begin

Before you can load data from a source into a domain, you must first attach the source to the domain.

## Procedure

1. Enable Initial Load mode for the source:

    1. In the repository page, click the domain into which you want to load data and select the **Sources** tab.

    2. In the source’s gear icon **![icon](../Images/main-ic-gear-gray_54d864eb-b5de-4ee6-9b31-975dae0a5762.jpg)** menu, select **Enable Initial Load**.

   When the Initial Load mode is enabled, the status indicator turns blue ![icon](../Images/main-ic-dot-blue-12_947211c8-281d-4c03-95eb-3e7951d56f3e.jpg). This indicates that data from the source needs to be loaded into the domain. While in this mode, update requests for source records are not sent through the source's channel. Instead, update requests required by newly loaded data from the source are immediately sent through the channels of previously loaded sources.

    The colored dot icon next to the source indicates the Initial Load mode status :
    
    - ![Gray dot icon](../Images/Common/main-ic-dot-gray-12_44f63a1e-aae0-4810-86e9-99fd1258c0ab.jpg) — Initial Load mode is not enabled (for contributing sources only)
    
    - ![Blue dot icon](../Images/main-ic-dot-blue-12_947211c8-281d-4c03-95eb-3e7951d56f3e.jpg) — Initial Load mode is enabled (for contributing sources only)
    
    - ![Green dot icon](../Images/Common/main-ic-dot-green-12_2f68f523-a6b0-4691-831c-1dbdf0f6ef2e.jpg) — Initial Load mode is disabled and source record update requests are propagated on the source's channel as a result of changes to the deployed model's golden records (for contributing and non-contributing sources).
    
    - ![Red dot icon](../Images/Common/main-ic-dot-red-12_4112ea3b-21ef-4820-8981-786df001c59f.jpg) — Initial load mode was enabled and loaded, but an error occurred when processing a source record update or updating a source record request on the channel.


2. **Optional**: Stage the loading of all or a representative subset of source records as a batch into the target domain:

    1. In the **Sources** tab, add a staging area for the source.

    2. Deploy a process for staging records from that source system into the target domain.

    3. Execute the process.

    4. Verify the results of staging in the **Staged Entities** page.

    See the Related concept about staging batches.

3. Deploy a process for loading source records as a batch into the target domain. See the Related task for building this type of process.

4. Execute the process to load source records into the domain.

5. Verify the completion of loading by viewing the count of golden records and spot-checking their contents in the Golden Records page.

    :::note
    
    This step is critical because the next step will result in an error if you perform it before loading completes.

    :::

6. In the **Sources** tab, in the source’s gear icon **![icon](../Images/main-ic-gear-gray_54d864eb-b5de-4ee6-9b31-975dae0a5762.jpg)** menu, select **Finish Initial Load**.

    The status indicator changes to green ![icon](../Images/Common/main-ic-dot-green-12_2f68f523-a6b0-4691-831c-1dbdf0f6ef2e.jpg) to indicate source record update requests will propagate on the source’s channel. If, on the other hand, an error is returned, go back to step 4.

7. Deploy a process to check for source record update requests on the source’s channel and route the update requests to the source system.