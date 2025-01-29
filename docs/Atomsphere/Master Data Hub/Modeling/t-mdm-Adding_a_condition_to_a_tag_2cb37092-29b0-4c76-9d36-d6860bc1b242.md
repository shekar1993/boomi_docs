# Adding a condition to a tag 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-2cb37092-29b0-4c76-9d36-d6860bc1b242"/>
</head>

Adding a condition\(s\) is part of the process of adding a tag.

## Procedure

1.  In the Conditions section of the dialog used to add a tag, point in the desired level in the conditions hierarchy and click **Add a Condition**.

    ![Click Add a Condition as opposed to Add a Group.](../Images/Models/main-ds-business-rule-add-condition-condition-group_6d39ea0e-60ca-49d1-a2b7-31ab6336d226.jpg)

    Selection lists for defining a condition appear at the pointer location. Proceed from left to right.

2.  In the first list, select the output to test or Static to specify a static value. Outputs are listed by alias for selection.

    If you selected Static a field will appear to the right — continue with step 3. Otherwise, skip to step 4.

3.  In the field, type the static value.

4.  In the next list, select an operator.

 |        |                                      |
|------------------|----------------------------------------------------|
| `=`             | The first output to the left equals the second output to the right. |
| `!=`             | The first output is not equal to the second.        |
| `<`              | The first output is less than the second.           |
| `> `             | The first output is greater than the second.        |
| `<=`             | The first output is less than or equal to the second. |
| `>= `            | The first output is greater than or equal to the second. |
| contains       | The first output contains the second.              |
| does not contain | The first output does not contain the second.     |
| starts with    | The first output starts with the second.           |
| is empty       | The first output is null.                           |
| is not empty   | The first output is not null.                       |


If you selected “is empty” or “is not empty”, skip to step 7. Otherwise, continue with step 5.

5.  In the next list, select another output to test or Static to specify a static value.

    If you selected Static a field will appear to the right — continue with step 6. Otherwise, skip to step 7.

6.  In the field, type the static value.

    ![Field in which to type a static value](../Images/Common/main-ds-business-rule-add-edit-condition_f5c87ea2-b916-4bae-b7ef-67e2909e04a9.jpg)

7.  Click the adjacent **Save** button \(not the Save button at the bottom of the dialog\).

    The newly defined condition is listed. When you pause the pointer on the condition, links appear enabling you to edit or remove the condition.