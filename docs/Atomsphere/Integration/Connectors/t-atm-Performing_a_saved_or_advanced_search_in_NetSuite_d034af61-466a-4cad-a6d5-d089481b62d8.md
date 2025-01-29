# Performing a saved or advanced search in NetSuite 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-d034af61-466a-4cad-a6d5-d089481b62d8"/>
</head>


The NetSuite connector uses NetSuite's Basic and Advanced searches.

## About this task

The NetSuite connector requires the internal ID or script ID of the saved search defined in NetSuite. You can augment the search criteria by adding filters in the operation. You can also select the result columns you want returned in the document.

**Note:** In the October 2015 release, custom fields are supported in saved searches for all NetSuite versions supported by the connector.

## Procedure

1.  Create or open a **NetSuite Operation**.

2.  Set the **Connector Action** to **Query**.

    You do not need to check **Use Advanced Search** on this page.

    ![NetSuite connector QUERY action.](../Images/build-Netsuite-adv-query.jpg)

3.  Click the **Import** button.

4.  In the **Import Wizard**, turn on **Use Advanced Search**.

    This restricts the list of objects to those that support the Advanced Search option. The names of your saved searches do not appear in the list during the browse. Instead of selecting a search name, choose the record type for which your saved search was created and then reference your search by filtering on its internalID or scriptID.

    ![NetSuite Import Wizard.](../Images/Netsuite2-import_wizard-100_b158fa86-6b3b-40f6-a65a-e029c5cd7eec.jpg)

5.  Select the object type to import and then click **Next**.

    ![NetSuite Import Wizard with Object Type drop-down list.](../Images/Netsuite3-import_wizard_f6999dd7-8178-4442-b3bf-e4d7cbb704b9.jpg)

6.  Click **Finish** to complete and close the **Import Wizard**. When the **Import Wizard** finishes, it creates the profile.

    ![NetSuite Import Wizard creating the profile.](../Images/Netsuite4_import_wizard_32f316a1-0514-419b-b3e2-783b35e4f852.jpg)

7.  By default, it selects all fields. In the **Operation**, on the **Fields** tab, toggle the parent on and off to clear the check boxes for the children.

    ![NetSuite operation with Fields tab selected.](../Images/Netsuite_fields_unchecks_4d5ddbc2-3aba-4645-9db6-eb4fa6028810.jpg)

8.  Select the fields to return. If you select too many fields, the process can time out.

    ![NetSuite operation with field selection.](../Images/Netsuite_fields_after_check_1f2af47b-9718-4ebc-81c9-5d40cb518ac7.jpg)

    OPTIONAL — Depending on the size of the object profile, some element values can be hidden from the response profile. Open the newly-created profile to confirm that you can expand the fields you selected in step 8. If the selected fields do not contain a searchValue element, proceed with steps 9 and 10.

9.  On the **Data Elements** tab, under the `<Object>SearchRow` root element, expand the **basic** object node by clicking on the plus sign.

    For each field you select to return in the operation, expand the XML element definition in the profile to expose the element containing the actual response value.

    ![NetSuite fields selected to return in the operation.](../Images/Netsuite_data_elements_searchrow_ca445ed7-77a8-4f4d-a440-c9c8e491408d.jpg)

10. Click the blue arrow next to the secondary element and select **Expand Element**.

    ![Secondary element drop-down with Expand Element selected.](../Images/Netsuite_expand_element_fc1747d7-3450-4a5f-8f16-e92b64dd4246.jpg)

    This action adds a secondary searchValue element containing the value. The search values vary depending on the element type.

    ![searchValue secondary element selected.](../Images/Netsuite_searchvalue_child_element_18559261-72c6-413a-a0fa-51ed3c591bd1.jpg)

    The following steps apply only to Saved Searches.

11. On the Operation’s **Filters** tab, click the blue down arrow ![](../Images/main-ic-arrow-blue-down-16=GUID-CA79043B-869E-4C8B-A46E-5D4D4FA1DBEE=1=en-us=Low_ee257e3c-4362-486e-b1f1-4d613b679c4c.jpg) next to **Filter**, then select **Add Logical Sub-Group**.

    ![Add Logical Sub-Group option selected.](../Images/Netsuite_logical_subgroup_72eb29a4-8add-4967-8cbb-dac7e4bf0071.jpg)

12. On the **Logical-And** filter, click the blue down arrow ![](../Images/main-ic-arrow-blue-down-16=GUID-CA79043B-869E-4C8B-A46E-5D4D4FA1DBEE=1=en-us=Low_ee257e3c-4362-486e-b1f1-4d613b679c4c.jpg) then select **Add Expression**.

    ![Add Expression option selected.](../Images/Netsuite_add_expression_210e8322-0c0c-4ae1-97e5-24bcd052fdc9.jpg)

    The window expands showing Filter Name and Field.

13. Click the search icon ![Search icon.](../Images/main-ic-magnifying-glass-16_cd0f3352-63b0-4d15-af6d-86e11b9d14eb.jpg).

14. In the **Choose a field** window, select either the `<Object>|savedSearchId` or `<Object>|savedSearchScriptID` then enter a **Filter Name**

    You can add other filters but you must add at least one of the two savedSearch filters. For more information see Changing a NetSuite saved search linked below.

    ![Filters dialog showing savedSearch filters.](../Images/Netsuite_account_savedsearch_92cc1927-f92e-4850-bd10-00e81e252490.jpg)

15. In the process, on the Connector’s **Parameters** tab, select the filters by clicking the plus button and choosing an input.

    ![Parameter Value dialog.](../Images/Netsuite_filter_selection_364ec618-de7a-4f7f-81a7-0dc2fb189a64.jpg)

16. In the process, on the **Connector step**dialog, on the **Parameters** tab, edit the filters by highlighting a parameter and then clicking the pencil icon.

    ![Connector step dialog.](../Images/Netsuite_process_parameter_fae7a7e7-6929-4cf1-b8b2-bfc35ab653ce.jpg)

17. In the **Parameter Value** window, enter the internal ID or script ID for the saved search as a **Static** value. To obtain the ID value, in NetSuite edit the saved search and note the numeric internal ID in the browser URL or the script ID below the name, such as customersearch88.

    ![Parameter Value window.](../Images/Netsuite_process_static_value_ea1bdd6d-28ea-40db-bb15-3b575b5c6d03.jpg)

    When the search runs, it returns each row as a separate document.