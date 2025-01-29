# Removing a source from a model 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-702b80b2-b20c-406d-8aa5-ab462763e259"/>
</head>


Remove a source from a model if the source system will neither contribute data to, nor accept updates of data from, domains that were created as a result of deployment of the model.

##  About this task

-   Once you deploy a version of a model with embedded sources, if you deploy a subsequent version without embedded sources, all sources attached to the domain are removed. If you then want to reattach sources, you either need to manually reattach the sources from the domain’s **Sources** tab or deploy a new or previous version with embedded sources.

-  Golden records need at least one contributing source linked. If a source is the only contributing source linked to a golden record, you need to add another contributing source before you can delete it or switch its setting to accept channel updates.

## Procedure

1.  In the model page, click the model from which you want to remove the source and select the **Sources** tab.

2.  In the summary list entry for the source you want to delete, click **![icon](../Images/main-ic-trashcan-blue-16_5dacea85-d1df-4acd-b965-58dc202cd388.jpg) Remove Source**.

    The dialog closes, and the source is removed from the summary list. The source is not actually removed from the model until the model is subsequently saved. If the model is then published and deployed to a repository, if the removed source was attached to the domain, it is automatically removed from the domain, along with its staging areas and staged entities. The effect of automatic removal is the same as manual removal.