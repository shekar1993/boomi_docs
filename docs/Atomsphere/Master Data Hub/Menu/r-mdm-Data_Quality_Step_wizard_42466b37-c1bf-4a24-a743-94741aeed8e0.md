# Data Quality Step wizard

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-8BD0B0F8-ACD3-4119-BC26-BE27456A2A22"/>
</head>


The Data Quality Step wizard is used to add or modify a data quality step.

-   The wizard opens for the purpose of adding a step when a service is clicked in the Available Data Quality Services dialog.

-   The wizard opens for the purpose of modifying a step when that step is clicked in the **Data Quality Steps** tab.


## Data quality service - Configure Fields

This screen is used to configure the inputs and outputs for an ordinary data quality step. The wizard opens to this screen if a service other than Process Call or Business Rule is clicked in the Available Data Quality Services dialog or an ordinary data quality step is clicked in the **Data Quality Steps** tab.

Each ordinary data quality step specifies:

1.  the data quality service to which requests are sent, selected in the Available Data Quality Services dialog.

2.  for each object property supported by that service:

    1. the field, if any, in the source entity whose value will be sent in a request.

    2. the field, if any, in the source entity whose value will be updated to reflect data received in a response.


![Configure Fields screen of the Data Quality Step wizard](../Images/Models/mdm-db-model-data-quality-step-configure_7984bfac-8b6c-4112-b39e-2287b605e188.jpg)

**Name**
<br />**Description**

**Match Score Threshold**
<br />\(Loqate only\) Sets the required similarity between input data and the closest reference data match as a percentage. A value of 100 specifies complete similarity. The default is 85.

**Match Level Threshold**
<br />\(Loqate only\) Sets the level, expressed as an integer, to which the input data matches reference data after validation and enrichment. The minimum value, 0, specifies no match level. The maximum value, 5, specifies matching at the delivery point \(building or structure\) level. The default is 3.

**Incoming Entity**/**Service Input**
<br />For each object property supported by the selected service for validation, sets the field whose value in a source entity will be passed as input to the service. Hovering the pointer on the object property name shows a description of the object property. The absence of a field selection means a value will not be passed as input for that particular object property. Clicking ![](../Images/Common/main-ic-x-white-in-gray-circle-16_0abafeee-d5e7-4888-9bfb-475b11b6d00f.jpg) clears a selection.

Deleted fields are shown as “Unknown” in red.

**Service Output**/**Outgoing Entity**
<br />For each object property supported by the selected service for enrichment, sets the field whose value in a source entity will be enriched with data retrieved from the service. Hovering the pointer on the object property name shows a description of the object property. The absence of a field selection means a value will not be retrieved for that particular object property. Clicking ![](../Images/Common/main-ic-x-white-in-gray-circle-16_0abafeee-d5e7-4888-9bfb-475b11b6d00f.jpg) clears a selection.

Deleted fields are shown as “Unknown” in red.

**Cancel**
<br />Closes the wizard without adding a data quality step or modifying an existing data quality step.

**Next**
<br />Advances the wizard to the Set Step Condition - Field Changes screen.

## Integration Process Call

This screen is used to select a listener process for a process call data quality step. The wizard opens to this screen if Process Call is clicked in the Available Data Quality Services dialog or a process call data quality step is clicked in the **Data Quality Steps** tab.

![Process Call screen of the Data Quality Step wizard](../Images/Models/mdm-db-model-data-quality-step-configure-int-process_089985ac-9ed7-4203-8d4f-72136913ce58.jpg)

**Name**
<br />**Description**

**Process**
<br />Selects the process.

In order to be available for selection a process must have a Listener connector operation as its Start step. In order to be usable the selected process must be deployed to the same repository to which the model is deployed and return results as documents.

**Cancel**
<br />Closes the wizard without adding a data quality step or modifying an existing data quality step.

**Next**
<br />Advances the wizard to the Set Step Condition - Field Changes screen.

## Configure Business Rule 

This screen is used to configure the business rule for a business rule data quality step. The wizard opens to this screen if Business Rule is clicked in the Available Data Quality Services dialog or a business rule data quality step is clicked in the **Data Quality Steps** tab.

![Configure Business Rule screen of the Data Quality Step wizard](../Images/Models/mdm-db-model-data-quality-step-configure-business-rule_62860498-1816-4353-8e19-86f21f5bed2e.jpg)

**Name**
<br />**Description**

**Inputs**
<br />This section is used to define the business rule’s inputs and their corresponding outputs.

**Name**<br />**Description**

**Add**
<br />Selects the type of input to add to the business rule.

-   **Field** — Opens the Add a Field dialog, which is used to add a single field as both an input and output.

    ![Add a Field dialog](../Images/mdm-db-business-rule-add-a-field_9f715839-1761-4aa0-beba-c7ecba157b42.jpg)

    **Name**
    <br />**Description**

    Field
    <br />Sets the field to use as the input and output.

    Deleted fields are shown as “Unknown” in red.

    Clicking ![](../Images/Common/main-ic-x-white-in-gray-circle-16_0abafeee-d5e7-4888-9bfb-475b11b6d00f.jpg) clears both **Field** and **Alias**.

    **Alias**
    <br />   Sets an output alias for the selected **Field**. Outputs are referenced by alias in the Conditions and Error Message sections. **Alias** is automatically populated with the field name upon selection of a **Field** and cleared upon the clearing of **Field**.

    **OK**
     <br />Adds the input/output and closes the dialog.

    **Cancel**
     <br />Closes the dialog without adding an input/output.

-   **Function** — Opens the Add a Function dialog, the first of a series of two or more dialogs, which are used to add a function input and the corresponding output\(s\).

    ![Add a Function dialog](../Images/Models/mdm-db-model-data-quality-business-rule-add-function_a11ffd68-eab4-44d6-b2ca-bc6d077d77de.jpg)

    **Name**
      <br />**Description**

    **Category**
    <br />Selects the function category of which the function to be applied is a member. Follow the links to Integration topics for information about the functions in each category:

    - [String](/docs/Atomsphere/Integration/Process%20building/r-atm-String_functions_efef3d8f-b053-4cfd-aa5f-aa4e30ead17d.md)
    - [Numeric](/docs/Atomsphere/Integration/Process%20building/r-atm-Numeric_functions_9b70e31b-a97d-444e-b638-5a004a66b9ee.md)
    - [Date](/docs/Atomsphere/Integration/Process%20building/r-atm-Date_functions_e35e34c4-45f2-49ac-b1d7-4792114e52dc.md)

    **Functions**
    <br />Selects the function to be applied. The available selections are dependent upon the selected Category.

    **OK**
    <br />Opens a second dialog in which you define the function’s input parameters and/or output(s). The controls in the dialog are dependent upon the selected function in the Functions list. For some functions, a third dialog opens when you click OK in the second.

    **Cancel**
    <br />Closes the dialog without adding an input and output(s).


**Inputs list**
  <br />Lists the inputs defined for the business rule and provides controls for deleting them. In the list:

-   Clicking the name of an input opens the Add A Field dialog or the Add a Function dialog for the purpose of modifying the output\(s\).

-   Clicking ![](../Images/main-ic-x-white-in-red-circle-16_0d0c5dc5-1c5e-4117-8a58-92c5e050ec5b.jpg) for an input initiates a request to delete it. In the confirmation dialog:

    -   Clicking **OK** executes the request.

    -   Clicking **Cancel** cancels the request.


**Conditions**
<br />This section is used to define the conditions for the business rule.

**Name**
<br />**Description**

**Top Level Operator**<br />
Selects **AND** or **OR** as the Boolean operator defining the relationship between the top-level conditions and condition groups.

**Conditions list**
<br />Lists the conditions defined for the business rule and provides controls for adding, modifying, deleting and reordering conditions and condition groups. Indentation delineates levels in the hierarchy.

At each level of the hierarchy the following links are available:
![Links for adding a condition or condition group](../Images/Models/main-ds-business-rule-add-condition-condition-group_6d39ea0e-60ca-49d1-a2b7-31ab6336d226.jpg) 
  - **Add a Condition** — Add a list entry for a new condition at the current level in the hierarchy.
  - **Add a Group** — Add a list entry for a new condition group at the current level in the hierarchy.
  
You must save changes to individual conditions and condition groups to add them.

For each condition and condition group the following links and controls are available:

![Links and controls for each condition and condition group](https://boomi-be-prod.zoominsoftware.io/bundle/hub/page/mdm-ds-add-rule-edit-remove-expression_bdacf420-ee6e-40d6-9252-a32475a3d8d4.jpg?_LANG=enus)

  -  ![reorder icon](../Images/Common/main-ic-dots-16-gray-on-white_404b1c3f-e21a-4b67-ba76-65412d39eb70.jpg) reorder icon — Used to change the position of the condition or condition group by dragging and dropping.
   
 - **Edit** — Reveals controls used to edit the condition or condition group.
  
 - **Remove** — Removes the condition or condition group. Removing a condition group removes all of its member conditions.
  
The following links and controls are revealed when **Edit** is clicked for either a condition or a condition group:

- **Save** — Saves changes to the condition or condition group and hides the editing controls.
- **Cancel** — Discards unsaved changes to the condition or condition group and hides the editing controls. 
  
The following links and controls are additionally revealed when Edit is clicked for a condition:![Links and controls that are additionally revealed when Edit is clicked for a condition](../Images/Common/main-ds-business-rule-add-edit-condition_f5c87ea2-b916-4bae-b7ef-67e2909e04a9.jpg)
- Output selection lists — Select Static or one of the outputs. Outputs are referenced by alias. Multiple outputs for a given input are indented in the list below the input alias. Selecting Static reveals a field to the right for specifying the static value.
- Static value fields
- Operator selection list — Sets the manner in which two specified outputs are compared or a single specified output is evaluated. The operators `contains`, `does not contain`, `starts with`, `is empty`, and `is not empty` perform string comparisons. They should not be used for numeric comparisons.

|  Symbol              | Description |
| ---------------- | ---------------------------------------------------- 
| `=  `                |Output #1 to the left equals output #2 to the right.|
| `!= `              | Output #1 is not equal to output #2.                 |
| `< `               | Output #1 is less than output #2.                    |
| `> `               | Output #1 is greater than output #2.                 |
| `<= `              | Output #1 is less than or equal to output #2.        |
| `>=`               | Output #1 is greater than or equal to output #2.     |
| contains         | Output #1 contains output #2.                        |
| does not contain | Output #1 does not contain output #2.                |
| starts with      | Output #1 starts with output #2.                     |
| is empty         | Output #1 is null.                                   |
| is not empty     | Output #1 is not null.                               |


- The following control is additionally revealed when Edit is clicked for a condition group:
  
    ![Control that is additionally revealed when Edit is clicked for a condition group](../Images/Common/mdm-ds-add-rule-expression-group_a09509f2-28f8-4eab-9e76-afb145086ac9.jpg)

  - Group Level Operator — Selects AND or OR as the Boolean operator defining the relationship between the condition group’s member conditions and condition groups.

**Error Message**
<br />This section is used to specify the template for messages logged when incoming entities are quarantined as a result of failing to satisfying the business rule. Messages can contain dynamic output values along with hard-coded text.

**Name**
<br />**Description**

**Insert Value**
<br />Selects an output value to append to the template. Outputs are referenced by alias for selection. Multiple outputs for a given input are indented below the input alias.

When you insert a value, the name of the output appears below in the template editor as a numerical reference — for example, \{1\} — and a button appears in the box below.

**Template editor**
<br />Typing inserts hard-coded message text. Once you insert a value, you can move its numerical reference by cutting and pasting.

**Inserted inputs**
<br />A button appears below the template for each inserted output value. The label of a given button identifies the output by its alias and shows the number used in the template to reference the value. If the output is one of multiple outputs of an input function, the button label also identifies the input by its alias. Clicking ![](../Images/Common/main-ic-x-white-in-gray-circle-16_0abafeee-d5e7-4888-9bfb-475b11b6d00f.jpg) deletes all references to that value from the template and causes the button to disappear.

**Cancel**
<br />Closes the wizard without adding a data quality step or modifying an existing data quality step.

**Next**
<br />Advances the wizard to the Step Name screen.

## Set Step Condition - Contributing Source 

This screen applies only to ordinary and Integration process call data quality steps. It is used to set or lift a condition under which the step is applied based on the source that contributed the entity.

![mdm-db-model-data-quality-step-set-contributing-source](../Images/Models/mdm-db-model-data-quality-step-set-contributing-source_42935086-4f5a-4b60-a37d-b1fc9dae128f.jpg)

**Name**
<br />**Description**

**Apply this step for all contributing sources**
<br />If this option is selected, the step is applied regardless of the contributing source.

**Only apply this step if the record is contributed by selected sources**
<br />If this option is selected, the step is applied only to entities contributed by selected sources.

When this option is selected, check boxes appear for selecting sources.

**Cancel**
<br />Closes the wizard without adding a data quality step or modifying an existing data quality step.

**Back**
<br />Returns the wizard to the Configure Fields or Process Call screen.

**Next**
<br />Advances the wizard to the Set Step Condition - Field Changes screen.

## Set Step Condition - Field Changes

This screen applies only to ordinary and process call data quality steps. It is used to set or lift a condition under which the step is applied to an incoming source entity based on field values.

![Set Step Condition - Field Changes screen of the Data Quality Step wizard](../Images/Models/mdm-db-model-data-quality-step-set-condition-atm_032ada78-8799-49a6-9f2f-4ef8bc456f17.jpg)

**Name**
<br />**Description**

**Apply this step regardless of field changes**
<br />If this option is selected, the step is applied even if the entity does not populate or change the values of golden record fields.

**Only apply this step if any Input or Output has changed**
<br />This option is available only for ordinary steps and is selected by default. If this option is selected, the step is applied only if an entity populates or changes the values of golden record fields selected in the previous screen as **Inputs** or **Outputs**. For collections whose fields are selected as **Inputs** or **Outputs**, qualifying changes include collection items whose input and output fields fail to match any existing item.

**Only apply this step if any fields changed**
<br />This option is available only for process call steps. If this option is selected, the step is applied only if an entity populates or changes the values of golden record fields. For collections, qualifying changes include items whose fields fail to match any existing item.

**Only apply this step if selected fields changed**
<br />This option is available only for process call steps. If this option is selected, the step is applied only if a selected entity populates or changes the values of one or more golden record fields. For collections, qualifying changes include items whose fields fail to match any existing item.

When this option is selected, check boxes appear for selecting fields. Field groups are listed in bold. Turning on the check box for a field group selects all of its member fields. Clicking a field group’s **![](../Images/Common/main-ic-arrowhead-gray-down_75b41ef3-dcb0-4a4b-b69f-029989bc91d9.jpg)** icon collapses the field group, hiding its member fields. Clicking a field group’s **![](../Images/Common/main-ic-arrowhead-gray-right_856f4e52-e05d-4990-a01d-6979b2f2fad2.jpg)** icon expands the field group, revealing its member fields.

**Cancel**
<br />Closes the wizard without adding a data quality step or modifying an existing data quality step.

**Back**
<br />Returns the wizard to the Set Step Condition - Contributing Source screen.

**Next**
<br />Advances the wizard to the Set Step Condition - Custom Business Rule \(optional\) screen.

## Set Step Condition - Custom Business Rule \(optional\) 

This screen applies only to ordinary and process call data quality steps. It is used to set a condition under which the step is applied based on satisfaction of a custom business rule by an incoming entity.

![Set Step Condition - Custom Business Rule screen of the Data Quality Step wizard](../Images/Models/mdm-db-model-data-quality-step-set-condition-rule_a17cba71-1f08-4fc5-bec9-c42fb279c87f.jpg)

**Name**
<br />**Description**

**Inputs**
<br />The controls are analogous to those in the Inputs section in the Configure Business Rule screen.

**Conditions**
<br />The controls are analogous to those in the Conditions section in the Configure Business Rule screen.

**Cancel**
<br />Closes the wizard without adding a data quality step or modifying an existing data quality step.

**Back**
<br />Returns the wizard to the Set Step Condition - Field Changes screen.

**Next**
<br />Advances the wizard to the Step Name or Step Name and Connection Settings screen.

## Step Name \(and Connection Settings\) 

![Step Name and Connection Settings screen of the Data Quality Step wizard](../Images/Models/mdm-db-model-data-quality-step-name_e410abc4-a7d8-40aa-880c-141b8cddfbaf.jpg)

:::note

The suffix “and Connection Settings” appears only for an ordinary data quality step.

:::

**Name**
<br />**Description**

**Data Quality Step Name**
<br />Name of the data quality step. The default is the name of the operation — for example, Address Verification — in the case of an ordinary data quality step, Process Call in the case of a process call data quality step, or Business Rule in the case of a business rule data quality step.

**Service Connection Settings**
<br />Service connection settings are applicable only to an ordinary data quality step and are specific to the selected data quality service.

**Name**
<br />**Description**

**User Name**
<br />\(D&B only\) User name for connecting to the service.

**Password**
<br />\(D&B only\) Password for connecting to the service.

Clicking **Click to Set** or **`<Encrypted>`** reveals a dialog. In that dialog, typing the password in the **Password** field and clicking **Apply** applies the password and returns focus to the wizard.

**Key**
<br />\(Loqate only\) API key for connecting to the service.

Clicking **Click to Set** or **`<Encrypted>`** reveals a dialog. In that dialog, typing the API key in the **Password** field and clicking **Apply** applies the API key and returns focus to the wizard.

**Cancel**
<br />Closes the wizard without adding a data quality step or modifying an existing data quality step.

**Back**
<br />Returns the wizard to the Set Step Condition - Custom Business Rule \(optional\) or Configure Business Rule screen.

**Finish**
<br />Adds or modifies the data quality step.