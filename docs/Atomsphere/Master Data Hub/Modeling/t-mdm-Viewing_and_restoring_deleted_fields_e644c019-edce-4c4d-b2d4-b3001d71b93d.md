# Viewing and restoring deleted fields 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-e644c019-edce-4c4d-b2d4-b3001d71b93d"/>
</head>


If you delete a field from a model, you can view the field and, optionally, restore it as an active field.


## About this task

As an alternative to these steps, you can restore a field by requesting to add a field having the same name — see the note following these steps.

## Procedure

1.  In the **Fields** tab, click **Deleted**.

    Deleted fields are listed.

2.  Select the check box for each field to be restored.

3.  Click **Restore Deleted Fields**.

4.  In the confirmation dialog, click **OK**.

    ![Are you sure you want to restore the 2 selected field(s)?](../Images/Models/mdm-db-confirm-restore-fields_870d11e1-c4bf-4359-a0d2-1bf9cf43bab5.jpg)

    The dialog closes, and the selected fields are restored to the golden record structure. The fields summary list automatically switches to the Active fields view. The fields are restored below the last existing active field regardless of their relative positions at time of deletion. You can then change their relative positions if you like.

    :::note
    
    If you request to add a field having the same name as that of a deleted field, you are given the option to restore the deleted field.


    -   If you are adding a single field, this dialog appears:

        ![Do you want to create a new field or restore the old field?](../Images/Models/mdm-db-add-field-deleted_27afc79f-6928-4627-abe0-fbdc95869820.jpg)

        Click **Restore Old Field** to proceed with that option.

        ![Choosing Restore Old Field.](../Images/Models/mdm-db-add-field-deleted-restore_ee30144c-64f9-4167-bd16-dadfbb40abd5.jpg)

    -   If you are using the Import Fields wizard or the Boomi Suggest wizard to add fields, this dialog appears in succession for each field you selected to add having the same name as a deleted field:

        ![Repeating instance of the dialog asking if you want to create a new field or restore the old field](../Images/Models/mdm-db-suggest-field-deleted_0a649560-c157-4c44-b5ce-41f4de25f2df.jpg)

        Click **Restore Old Field** to designate a given field for restoration. Restoration occurs after you determine the disposition of the last such field.

    :::