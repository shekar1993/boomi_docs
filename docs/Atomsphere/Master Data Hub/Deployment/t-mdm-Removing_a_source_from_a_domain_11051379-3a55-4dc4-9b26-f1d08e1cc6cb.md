# Removing a source attachment from a domain 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-11051379-3a55-4dc4-9b26-f1d08e1cc6cb"/>
</head>


Removing a source attachment from a master data domain makes the system represented by that source ineligible to contribute data to that domain and/or accept updates of data from that domain.

## About this task

If you remove source attachments and subsequently want to remove the sources from the domain model, you will need to import the source configuration from the domain into the model. This is done in the **Sources** tab in the model page. Importing the source configuration overwrites the model’s source configuration.

## Procedure

1.  In the repository page, click the domain from which you want to remove the source and select the **Sources** tab.

2.  Do one of the following:

    -   In the summary list entry for the source you want to delete, click **![icon](../Images/main-ic-trashcan-blue-16_5dacea85-d1df-4acd-b965-58dc202cd388.jpg) Remove Source**.

    -   In the source’s gear icon ![icon](../Images/main-ic-gear-gray_54d864eb-b5de-4ee6-9b31-975dae0a5762.jpg) menu, select **Remove Source**.

3.  In the confirmation dialog, click **OK**.

    The dialog closes. The source and its configured channel are removed. Master data previously contributed by the source is not affected. Staged data and staging areas, however, are deleted.

    If the removed source is either the default source or the only source for which the value of a reference field in other domains is resolved, the references from those domains to this domain are designated as pending. If the removed source is neither the default source nor the only source for which the value of a reference field in other domains is resolved, the references from those domains to this domain are discarded.

    :::note
    
    The remove operation will fail and an error message will be displayed if the source you are removing is attached to one or more referenced domains and referential integrity for channel update requests is enforced for any of the corresponding reference fields in this domain.

    :::