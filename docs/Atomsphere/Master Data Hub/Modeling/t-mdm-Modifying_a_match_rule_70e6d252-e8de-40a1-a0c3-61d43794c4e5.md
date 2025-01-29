# Modifying a match rule 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-70e6d252-e8de-40a1-a0c3-61d43794c4e5"/>
</head>


You can modify a match rule in a model in reaction to changes in requirements.

## About this task

Following is the general procedure for modifying a match rule. For details about step 2 refer to the linked task topics.

## Procedure

1.  In the **Match Rules** tab, click the match rule.

    The Match Rule dialog appears and takes focus.

    ![Match Rule dialog](../Images/Models/mdm-db-add-rule_d5925fc9-b4da-4a12-9377-292a2dc21cb4.jpg)

2.  Do any of the following:

    1.  To remove an expression, pause on it and click **Remove**.

        ![Remove link in an expression in a match rule](../Images/Common/mdm-ds-add-rule-edit-remove-expression_bdacf420-ee6e-40d6-9252-a32475a3d8d4.jpg)

    2.  To remove an expression group, pause on its top delimiter and click **Remove**.

        When you remove an expression group, its member expressions are also removed.

    3.  To edit a simple expression, pause on it and click **Edit**. Then in the **Match on** list select the field in the model to which to match.

        ![Fields in the model are available for selection in the Match on list. In this example the field First Name is selected.](../Images/Common/mdm-ds-add-rule-simple-expression_30b35e2d-5933-46e0-ab85-5ddecd743b8f.jpg)

    4.  To edit an advanced expression, pause on it and click **Edit**. Then follow the steps in the Related task about adding an advanced expression to a match rule.

        ![Configure Advanced Expression dialog](../Images/Models/mdm-db-add-rule-advanced-expression_66dd70ba-bb4a-41af-b37b-e8016cc9c0c1.jpg)

    5.  To change a simple expression to an advanced expression, pause the pointer on it and click **Edit**. Then click **Advanced Configuration** and follow the steps in Related task about adding an advanced expression to a match rule.

    6.  To edit an expression group, pause on its top delimiter and click **Edit**. Then make changes and click **Save**.

        ![Controls for editing an expression group](../Images/Common/mdm-ds-add-rule-expression-group_a09509f2-28f8-4eab-9e76-afb145086ac9.jpg)

    7.  To change the Boolean operator relating root-level grouped expressions, click the desired **Top Level Operator** — **AND**, **OR** or **NOT**.

    8.  To add an expression or expression group \(simple or advanced\), follow the steps in the corresponding Related task.

    9.  To reorder expressions and expression groups, drag and drop their reorder icons ![](../Images/Common/main-ic-dots-16-gray-on-white_404b1c3f-e21a-4b67-ba76-65412d39eb70.jpg).

        As you drag a reorder icon, a dashed horizontal line dynamically shows the position into which the expression or expression group would be moved if you were to drop the icon at the current pointer location.

        ![Reordering expressions and expression groups are drag-and-drop operations.](../Images/Models/mdm-ds-match-rule-expression-reorder_366e1cdc-c4ce-479d-a135-27255ad43cb0.jpg)

        When you change the position of an expression group, its member expressions move along with it.

3.  Click **Save**.

    The Match Rule dialog closes, and the newly modified match rule is shown in the Match Rules tab.