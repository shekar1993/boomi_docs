# Adding a simple expression to a match rule 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-4274e002-3998-4947-b9e3-38087f34dfaa"/>
</head>


A match rule must have at least one expression. Simple expressions are easiest to configure. However, simple expressions can be used with text fields only to apply case-insensitive matching. Use advanced expressions to apply case-sensitive or fuzzy matching.

## Procedure

1.  In the Match Rule dialog, point in the desired level in the match rule definition hierarchy and click **Add an Expression**.

    ![Click Add an Expression as opposed to Add a Group.](../Images/Common/mdm-ds-add-rule-add-expression-expression-group_b72b2b31-6f03-4d12-b401-8728f46a503c.jpg)

    Links and controls for defining an expression appear at the pointer location.

    ![Fields in the model are available for selection in the Match on list. In this example the field First Name is selected.](../Images/Common/mdm-ds-add-rule-simple-expression_30b35e2d-5933-46e0-ab85-5ddecd743b8f.jpg)

2.  In the **Match on** list select the field in the model to which to match.

    The newly defined expression is listed. When you pause the pointer on the expression, links appear enabling you to edit or remove the expression.

    :::note
    
    Long Text and intra-domain reference fields and collections and their fields are not available for selection.

    :::