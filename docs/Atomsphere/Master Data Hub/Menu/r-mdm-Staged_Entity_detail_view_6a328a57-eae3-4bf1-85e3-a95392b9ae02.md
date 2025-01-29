# Staged Entity detail view 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-E609144F-F1A4-417A-BD8F-D77CE25C0C94"/>
</head>


Clicking the Created Date link for a staged entity in the Staged Entities page opens the detail view for that entity.

![Staged Entity detail view](../Images/Stewardship/mdm-ps-domain-staging-entity-detail_e315c60f-2dfa-45a6-82ba-66750b047463.jpg)

:::note

Masked values are visible if you have one of the following user permissions:

- **MDM - Privileged Data Steward** role
- **MDM - Administrator** role
- **MDM - Reveal Masked Data** privilege
- **MDM - Data Steward** role (or **MDM - Stewardship** privilege) and the **Reveal Masked Data** Hub entitlement (available with the Advanced Security feature)

:::

The view header shows the following details:

**Name**  
**Description**  
**View title**

-   If a golden record title format is specified in the domain model, the view title is derived from the values of the same fields in the entity as those specified in the title format.

-   Otherwise, the view title is “Staged Entity”.


**Repository**  
Repository on which the target domain for the staged batch that included the entity is hosted.

**Model**  
Target domain for the staged batch that included the entity.

**Staging Area**  
Name of the staging area in which the batch that included the entity was staged.

**Created**  
Date and time at which the entity was staged.

**Result**  
The result of staging the entity — in other words, the entity processing result that would have occurred had the entity actually been contributed when it was staged:

-   Create Record — creation of a golden record.

-   Update Record — updating of a golden record.

 -   End-date Record — end-dating of a golden record.

-   Link Record — linking of a golden record to the source entity.

-   Link and Update Record — linking of a golden record to the source entity and updating of that golden record.

 -   No Change to Record — no impact on a golden record.

 -   Quarantine — quarantining of the entity. The reason for quarantining is also shown.


**message**  
If the entity would have been quarantined, the reason for quarantining is shown on a yellow background.

Clicking and dragging the **![](../Images/main-ic-dots-8-gray-on-white_cabceea1-ba32-41cf-8eca-a6a3d43cf2f8.jpg)** icon in the view border adjusts the width of the view.

## ![](../Images/main-ic-gear-gray_54d864eb-b5de-4ee6-9b31-975dae0a5762.jpg) Actions 

Clicking this button opens a menu of actions applicable to the entity:

![Actions on a staged entity](../Images/Stewardship/mdm-mn-staged-entity_e74c784a-fcb8-4660-b865-947173672901.jpg)

-   **Delete** — Initiates a request to delete the staged entity. In the confirmation dialog:

    -   Clicking **OK** executes the operation and closes the view.

    -   Clicking **Cancel** cancels the request.

    :::note
    
    This action is available only to administrators and users having a role with the Delete Staged Data entitlement.

    :::

-   **Resubmit** — Initiates a request to resubmit the staged entity to the staging area. In the confirmation dialog:

    -   Clicking **OK** executes the operation and closes the view.

    -   Clicking **Cancel** cancels the request.

    :::note
    
    This action is available only to administrators and users having a role with the Resubmit Staged Data entitlement.

    :::

-   **Commit** — Initiates a request to commit the staged entity for transaction processing. In the confirmation dialog:

    -   Clicking **OK** executes the operation and closes the view.

    -   Clicking **Cancel** cancels the request.

    :::note
    
    This action is available only to administrators and users having a role with the Commit Staged Data entitlement.

    :::


## Tabs 

Below the header are two or three tabs:

-   The **Entity Fields** tab lists the entity’s fields and their corresponding values. Collections are collapsed by default. The view opens with this tab selected.

    -   Long Text field values are represented by the **![icon](../Images/main-ic-document-with-magnifying-glass-16_36098f7c-7a65-41a5-8392-a2e729d3de91.jpg) View value** icon. Clicking that icon for a represented value opens a dialog in which the value is shown.

    -   If a golden record title format is specified in a referenced domain’s model, the values of title format fields in referenced golden records are shown as reference field values instead of golden record IDs.

-   The **Full Record** tab, which is present for all types of staging results except End-date Record and Quarantine, shows the resulting full golden record had the entity actually been contributed when it was staged.

-   The **Original XML** tab shows the entity data in the native XML format of the staged batch.

    ![Original XML tab in the staged entity details view](../Images/Stewardship/mdm-ps-domain-staging-tab-entity-detail-xml_2179a248-555b-45e1-a203-0d284042a7e1.jpg)


## Navigation bar 

The following navigation controls are in the bar at the bottom of the view:

**Name**  
**Description**

**![](../Images/main-ic-arrow-gray-up_3394c903-2719-4d4b-82cc-ec8cd74d99d2.jpg) Previous**  
Navigates to detail for the next entity \(previous entry in the staged entities list\). Keyboard shortcut: **Up arrow**.

**Next ![](../Images/main-ic-arrow-gray-down_c4b5bff8-7fde-4200-b305-68bff70fecf0.jpg)**  
Navigates to detail for the previous entity \(next entry in the staged entities list\). Keyboard shortcut: **Down arrow**.

**Close**  
Closes the view. Keyboard shortcut: **Esc**.

:::note

You can also close the view by clicking elsewhere in the Staged Entities page.

:::