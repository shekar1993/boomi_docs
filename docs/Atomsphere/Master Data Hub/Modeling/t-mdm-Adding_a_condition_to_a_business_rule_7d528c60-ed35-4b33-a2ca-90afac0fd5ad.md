# Adding a condition to a business rule 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-7d528c60-ed35-4b33-a2ca-90afac0fd5ad"/>
</head>


Adding a condition(s) to a business rule is part of the process of configuring a business rule, which is a required step in adding a business rule data quality step to a model and an optional step in adding another type of data quality step.

## Procedure

1.  In the Conditions section of the Configure Business Rule screen, point in the desired level in the conditions hierarchy and click **Add a Condition**.

    ![Click Add a Condition as opposed to Add a Group.](../Images/Models/main-ds-business-rule-add-condition-condition-group_6d39ea0e-60ca-49d1-a2b7-31ab6336d226.jpg)

    Selection lists for defining a condition appear at the pointer location. Proceed from left to right.

2.  In the first list, select the output to test or Static to specify a static value. Outputs are listed by alias for selection.

    If you selected Static a field will appear to the right — continue with step 3. Otherwise, skip to step 4.

    ![Field in which to type a static value](../Images/Common/main-ds-business-rule-add-edit-condition_f5c87ea2-b916-4bae-b7ef-67e2909e04a9.jpg)

3.  In the field, type the static value.

4.  In the next list, select an operator.

|          |                                        |
|------------------|----------------------------------------------------|
| `=`            | The first output to the left equals the second output to the right. |
| `!=`             | The first output is not equal to the second.        |
| `< `             | The first output is less than the second.           |
| `>`              | The first output is greater than the second.        |
| `<=`             | The first output is less than or equal to the second. |
| `>=`            | The first output is greater than or equal to the second. |
| contains       | The first output contains the second.              |
| does not contain | The first output does not contain the second.     |
| starts with    | The first output starts with the second.           |
| is empty       | The first output is null.                           |
| is not empty   | The first output is not null.                       |


If you selected “is empty” or “is not empty”, skip to step 7. Otherwise, continue with step 5.

5.  In the next list, select another output to test or Static to specify a static value.

    If you selected Static a field will appear to the right — continue with step 6. Otherwise, skip to step 7.

6.  In the field, type the static value.

7.  Click **Save**.

    The newly defined condition is listed. When you pause the pointer on the condition, links appear enabling you to edit or remove the condition.