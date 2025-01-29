# Deleting a field or field group 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-4ed59584-9a8b-4b6c-844c-69019a023565"/>
</head>


If you no longer need a field or field group in a model, you can delete the field or field group.

## Before you begin

To delete a field group without deleting all of its fields, first individually remove from the field group each field you want to keep.

## About this task

Following are steps for deleting a field or field group.


:::note

Deleting a field specified in a match rule or data quality step invalidates that match rule or data quality step. In the **Match Rules** tab, invalid match rules and deleted fields are shown in red and deleted fields are shown as “Unknown”. In the Data Quality Step Wizard, in field selection lists, deleted fields are shown as “Unknown” in red.

:::

## Procedure

1.  In the **Fields** tab’s list entry for the field or field group, click **![trash can icon](../Images/img-delete_icon_29151734-bc83-42b9-b115-9e227e434698.jpg) Delete this field**.

    ![Confirmation dialog for deleting a field](../Images/Models/mdm-db-delete-field_ed0e2a5f-6bd1-4b1e-b483-1df4bc3428d8.jpg) ![Confirmation dialog for deleting a field group](../Images/Models/mdm-db-delete-field-group_7f4a78ce-d363-4815-afe4-415a44743ef0.jpg)

2.  In the confirmation dialog, click **OK**.

    -   In the case of a field, the field is deleted.

    -   In the case of a field group, the field group and its member fields are deleted.