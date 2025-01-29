# Resubmitting an entity quarantined due to a data quality step failure 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-5ba11fe5-5e19-4483-949b-cad3401db24b"/>
</head>


It is possible to resubmit an entity quarantined due to a data quality step failure only if the currently deployed version of the domain model is the same as the version deployed at the time the entity was quarantined.

## Procedure

1.  Select **Stewardship** \> **Quarantine**.

2.  In the repository/domain list, select the domain.

    The quarantine entry list appears.

3.  In the list, click the Quarantined Date for the quarantined entity you want to resubmit.

    The quarantine entry detail appears.

4.  In the **![](../Images/main-ic-gear-gray_54d864eb-b5de-4ee6-9b31-975dae0a5762.jpg) Actions** menu, select one of the following:

    -   To resubmit the entity, reapplying the failed data quality step and applying all subsequent steps, select **Retry Enrichment Step**.

    -   To resubmit the entity, applying all data quality steps subsequent to the failed step, select **Ignore Enrichment Failure**.

    The repository attempts to incorporate the entity.


## Next Steps

:::note

The quarantine entry remains in the list, even if the entity is successfully incorporated, until you close the detail view by clicking Close or clicking elsewhere in the Quarantine page. The list is then updated. If the entity was not incorporated, there will be a new quarantine entry for it. 

Before you close the detail view, though, you can click ![](../Images/main-ic-arrow-gray-up_3394c903-2719-4d4b-82cc-ec8cd74d99d2.jpg) **Previous** and **Next** ![](../Images/main-ic-arrow-gray-down_c4b5bff8-7fde-4200-b305-68bff70fecf0.jpg) to navigate to detail for other entries and individually resolve them.

:::