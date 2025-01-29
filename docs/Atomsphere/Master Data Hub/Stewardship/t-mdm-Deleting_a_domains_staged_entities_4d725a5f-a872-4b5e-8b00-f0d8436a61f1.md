# Deleting a domain’s staged entities 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-4d725a5f-a872-4b5e-8b00-f0d8436a61f1"/>
</head>


You may find yourself repeatedly staging the same set of entities until you achieve the desired results. Between some or all attempts you way want to “clean up” the staging area by deleting some or all of its entities.


## About this task

If you deploy a new version of a domain model, the staging areas for the domain’s attached sources are automatically disabled. In this case you can re-enable the staging areas only by deleting all of theirs entities.

## Procedure

1.  Select **Stewardship** \> **Staged Entities**.

2.  In the repository/domain list, select the domain.

3.  If the staging area that contains the entities you want to delete is not selected, select the staging area:

    1.  Click **![](../Images/main-ic-arrow-gray-down_c4b5bff8-7fde-4200-b305-68bff70fecf0.jpg) Select Staging Area**

        A dialog appears.

        ![Dialog used to select the source and staging area](../Images/Stewardship/mdm-db-domain-staging-select-area_bcfadfad-e7da-4ebd-b04a-b76ec5ddaee7.jpg)

    2.  In the **Source** list, select the source for which was desired staging area was added.

    3.  In the **Staging Area** list, select the staging area.

    4.  Click **Apply**.

    The list of entities in the selected staging area appears.

4.  Filter the entities list. See steps 4–6 in the Related task for viewing a domain’s staged entities.

5.  Do one of the following:

    ![Menu of Delete actions](../Images/Stewardship/mdm-mn-staging-area-delete_cb5a5815-d0d1-4060-8338-d928a1733e84.jpg)

    -   To delete selected entities, select their check boxes, click **Delete** and in the drop-down menu, select **Selected**.

    -   To delete only entities in the filter results — click **Delete** and in the drop-down menu, select **Filter Results**.

    -   To delete all of the entities in the staging area, including those not listed due to filtering, click **Delete** and in the drop-down menu, select **All**.

    A confirmation dialog appears.

6.  Click **OK**.

7.  For each additional staging area that contains entities you want to delete, repeat steps 3–6.

    :::note
    
    You can also delete all of a staging area’s entities as follows:

    1.  Go to the repository page for the repository on which the domain is hosted.

    2.  Select the domain.

    3.  Select the **Sources** tab.

    4.  In the staging area’s gear icon ![](../Images/main-ic-gear-gray_54d864eb-b5de-4ee6-9b31-975dae0a5762.jpg) menu, select **Clear Data**.

    5.  In the confirmation dialog, click **OK**.

    Another way to delete a single staged entity is to select **Delete** in the **![](../Images/main-ic-gear-gray_54d864eb-b5de-4ee6-9b31-975dae0a5762.jpg) Actions** menu in its detail view. This too requires confirmation.

    :::