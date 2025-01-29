# Stewardship 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-df83d7fb-14c5-4543-afc3-04179e6637e5"/>
</head>


During the maintenance phase of a Boomi DataHub project, data stewards perform a variety of routine and non-routine tasks.



Routine stewardship tasks:

-   View current domain data. Do this on the **Golden Records** page \(**Stewardship** \> **Golden Records**\).

-   View and resolve quarantine entries. Do this on the **Quarantine** page \(**Stewardship** \> **Quarantine**\). See “Managing quarantines” below.


Non-routine stewardship tasks:

-   Stage batches of incoming source entities.

    -   Add staging areas for domain sources on the **Sources** tab in repository pages.

    -   View staged entities on the Staged Entities page \(**Stewardship** \> **Staged Entities**\).

-   Unlink golden records from source entities. Do this on the **Golden Records** page \(**Stewardship** \> **Golden Records**\).

-   Restore end-dated \(inactive\) golden records. Do this on the Golden Records page.

-   Perform domain data cleanup tasks, such as manually end-dating active golden records or purging end-dated golden records, on the Golden Records page.

-   Export up to 10,000 of a domain’s golden records to CSV format. Do this on the Golden Records page.


Refer to the linked topics for instructions. The remainder of this topic elaborates on what can be the most demanding stewardship responsibility.

## Managing quarantines 

The possible reasons the Boomi DataHub system may quarantine incoming source entities are discussed in the linked topic about quarantines. Unless data stewards routinely resolve quarantine entries, the integrity of their master data cannot be ensured. Furthermore, the integrity of data maintained in source systems may eventually be jeopardized.

A data steward’s quarantine management burden may increase if their administrator configures sources such that entity contributions may be subject to manual approval. In that case the quarantine also functions as a pending approval queue.

