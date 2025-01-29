# Adding fields using Boomi Suggest 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-a3f2bfb5-805a-48c1-9d8c-0ec5bad84c26"/>
</head>


To add fields to a model by leveraging the collective intelligence of the community, use the Boomi Suggest wizard.

## Procedure

1.  In the **Fields** tab, click **Suggest Fields** or **Start Hub Suggest**.

2.  Click the domain that most closely aligns with the object type you are modeling — **Account**, **Customer**, **Employee**, **Location**, **Product** or **Vendor**.

    ![Available Domains dialog](../Images/Models/mdm-db-available-domains_ed6465f0-a08b-4394-96ca-aceb3cc5af2b.jpg)

    The wizard’s **Introduction** screen shows counts of high-, medium- and low-confidence field suggestions.

    ![Boomi Suggest wizard: Introduction screen](../Images/Models/mdm-db-suggest-introduction_6cbff4e6-5637-4385-95cc-bb01a6d799d2.jpg)

:::note

The wizard will suggest fields for high, medium, and low confidence levels based on your selected domain, only if suggestions are available.

:::

3.  Click **Next**.

    The wizard shows high-confidence suggestions.

    ![Boomi Suggest wizard: High Confidence Suggestions screen](../Images/Models/mdm-db-suggest-high-confidence_8ca4aab9-1577-45e9-af68-329e893feefb.jpg)

4.  Select the check box for each suggested field you want to add to the model. All suggestions are accepted by default, except those marked with an ![warning](../Images/main-ic-triangle-warning-yellow-16_a265c92a-c628-4a9a-a310-8f3d568c9a25.jpg) icon, which indicates that a field with the same name already exists in your model, either in an active or deleted state.

    Clear the checkbox next to the column heading labeled **Suggested Field Name** to remove all selections.

5.  Repeat steps 3–4 for medium-confidence suggestions, if any.

    ![Boomi Suggest wizard: Medium Confidence Suggestions screen](../Images/Models/mdm-db-suggest-medium-confidence_38e9df6f-3ec5-4829-88df-470c61abf233.jpg)

6.  Repeat steps 3–4 for low-confidence suggestions, if any.

    ![Boomi Suggest wizard: Low Confidence Suggestions screen](../Images/Models/mdm-db-suggest-low-confidence_d231df18-0bfa-4c5c-9674-1dc38d1f685b.jpg)

7.  When you are done selecting fields to add, click **Next**.

    The wizard advances to the **Suggestions Complete** screen. The field suggestions you accepted are listed.

    ![Click Finish to update the model with the fields you selected.](../Images/Models/mdm-db-suggest-complete_f5a6b872-a346-4ac3-b56a-b92ee71d9ec0.jpg)

8.  Click **Finish**.

    -   If none of the selected fields have the same name as that of a deleted field, the fields are added to the list in the **Fields** tab.

    -   Otherwise, for each selected field having the same name as that of a deleted field, a dialog appears enabling you to add a new field with that name or restore the deleted field. Read [Viewing and restoring deleted fields](../Modeling/t-mdm-Viewing_and_restoring_deleted_fields_e644c019-edce-4c4d-b2d4-b3001d71b93d.md) to learn more.
