# Boomi Master Data Hub connector golden records


<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-9a459fed-c850-4d9d-b727-04c5eb7d4090"/>
</head>


This topic provides a worked example of using a flow to retrieve, display and work with golden records.

## Show golden records

![Show golden records](../Images/img-flo-Hub_Example_GR_c5b65da4-b5a4-441f-95a5-47d89d75b663.png)

The example flow is configured to display golden records as follows:

1.  A data action on the 'Load Employee GR' database load map element loads the golden records into a list object \('Employee list GR'\), using the employee golden record binding as the data source.

    ![load golden records into an list value](../Images/img-flo-Hub_Example_GRload_57261b90-2a46-4763-a0cf-55a951ea0fca.png)

2.  The 'Show all employee GR' page map element and associated page layout then loads the golden records from this list object into a table. Two data columns are added to the table to show the employee badge id and the golden record id.

    ![load golden records into a table](../Images/img-flo-Hub_Example_GRloadtable_e1c2433d-f2a4-41e2-8f15-02344f00a642.png)

3.  There are three outcomes set to display on each golden record row in the table - the 'employee details' outcome allows the user to view the full details for the golden record, the 'edit details' outcome allows the user to edit/update the golden record, and the 'delete employee GR' outcome allows the user to delete the golden record.
4.  The 'employee details' outcome leads to an operator map element containing an operation to set the value of the selected employee to a selected person object, so that in the 'employee details' page map element the details for the specific employee can be retrieved and presented in a table.

    ![load golden records into a table](../Images/img-flo-Hub_Example_GRoperator_c9e69b1c-51f6-4f60-8165-37c577380a1d.png)

5.  The 'employee details' page map element and associated page layout then loads the employee details for this list object into the page, using a table to display the repeatable 'equipment' field values.

    ![load details into a table](../Images/img-flo-Hub_Example_GRloaddetails_bb7cea1e-80b0-4757-bfbd-952a86026f01.png)


When the flow is run in a web browser, navigating to the 'Show golden records' menu option will display the table of golden records from . The two outcomes are converted into clickable buttons to allow a user to create or delete the selected golden record.

![Show golden records in a table](../Images/img-flo-Hub_Example_GRshow_ae3ff793-ea53-487a-a6c6-833356d637a7.png)

Clicking on the 'View employee details' button will then display the details for the selected golden record.

![Show golden records in a table](../Images/img-flo-Hub_Example_GRdetails_86df47e8-fbec-4fd9-ab1c-9c8c1f168a95.png)

## Create a golden record

![Create golden records](../Images/img-flo-Hub_Example_GRcreate_e6af28fe-5fba-4f88-b037-47a957fb6d74.png)

The example flow is configured to create golden records as follows:

1.  The 'Empty Input Values' operator map element first empties any previous user input details, so that when a user creates a new golden record the input field values are empty to begin with.

    ![Create golden records](../Images/img-flo-Hub_Example_GRcreate_empty_a085daad-f3cc-47c1-852f-ba04178c5cf1.png)

2.  The 'Create Employee GR' page map element and associated page layout provides a form with input fields to allow a user to enter details for the new golden record. These values are stored appropriately in the flow, for example the equipment repeatable fields are stored in a string value.

    ![Create golden records](../Images/img-flo-Hub_Example_GRcreate_page_cb6aeb73-d8c9-42d4-97bc-5c1f5c0a2c51.png)

3.  The 'Assign GR' operator map element then updates the necessary values with the user input via a series of operations.

    ![Assign input values](../Images/img-flo-Hub_Example_GRcreate_operations_938973f3-a698-48a8-a10c-890bb75ac82d.png)

4.  A data action on the 'save' database save map element saves the new employee into using the Golden Record binding.

    ![Database save](../Images/img-flo-Hub_Example_GRcreate_save_2904035a-3357-42d4-a3db-da59fed64440.png)


When the flow is run in a web browser, navigating to the 'Create golden record' menu option will display the user input page that allows a user to create a new golden record. Clicking on the **Create golden** record button will initiate the operator and subsequent database save map elements, creating the new golden record in .

![Create golden record user input](../Images/img-flo-Hub_Example_GRcreate_input_4b9b7766-e657-4c10-9902-339c2d52d967.png)

## Update a golden record

:::caution

To edit/update a golden record from within a flow, the entity id needs to be provided for the record.

:::

The example flow is configured to update golden records as follows:

![Update golden record](../Images/img-flo-Hub_ExampleGR_Update_cb747ecd-efb5-4594-b0aa-4c8a8aaee5d7.png)

1.  The 'get entity id' operator map element is used to specify the golden record entity id to be updated; to edit/update a golden record from within a flow, the entity id needs to be provided for the record. In the example flow, a series of operations are used to retrieve the entity id from the employee that is selected on the employee details page; in this example, the retrieved entity id is stored in the 'Golden Record: Links' list 'Entity ID' parameter \(rather than 'Golden Record: Entity ID'\).

    ![Update golden record entity id](../Images/img-flo-Hub_ExampleGR_Update_entityid_e8f5ed20-ac25-4f02-9eea-eecefcc8f5c2.png)

2.  The 'Single employee' page map element and associated page layout provides a form with an input field to allow a user to view and edit/update the existing details for the selected golden record \(just the Badge ID in this example\).

    ![Update golden record input page](../Images/img-flo-Hub_ExampleGR_Update_input_ec27820f-24b8-483b-ab4c-aa16060b6f33.png)

3.  A data action on the 'save' database save map element updates the edited employee details into using the Golden Record binding.

    ![Update golden record save](../Images/img-flo-Hub_ExampleGR_Update_save_9fba7aa7-ebdc-475c-9d6f-fa0815309e3a.png)


When the flow is run in a web browser, navigating to the 'Show golden records' menu option and clicking on the **Edit details** button will display the 'Single employee' page.

![Update golden record web page](../Images/img-flo-Hub_ExampleGR_Update_page_9d77205e-3512-47f9-96e8-350a0b59d415.png)

This page retrieves the current golden record data for the selected employee, which can then be edited as required. Clicking **Save** will update the golden record in .

![Update golden record web page](../Images/img-flo-Hub_ExampleGR_Update_editpage_02eac297-d116-4b78-aeab-a509c6e6ee49.png)

## Delete a golden record

![Delete golden record](../Images/img-flo-Hub_Example_GR_delete_eaa82315-33a5-470c-8779-eb901ef7afd5.png)

The example flow is configured to delete golden records as follows:

1.  The 'Assign entity id' operator map element is used to specify the golden record entity id to be deleted.

    ![Database delete](../Images/img-flo-Hub_Example_GR_delete_assign_ecc4a748-141f-4034-9359-3670cd3bbb7c.png)

2.  A data action on the 'Delete employee' database delete map element deletes the employee golden record from using the Golden Record binding.

    ![Database delete](../Images/img-flo-Hub_Example_GR_delete_delete_943ee320-6fdd-4e45-b640-0871ac0b187b.png)

3.  A step map element is added to inform the user that the employee golden record has been deleted.