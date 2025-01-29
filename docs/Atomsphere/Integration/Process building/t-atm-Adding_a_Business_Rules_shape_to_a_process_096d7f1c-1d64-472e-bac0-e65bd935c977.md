# Adding a Business Rules step to a process

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-096d7f1c-1d64-472e-bac0-e65bd935c977"/>
</head>


You can add a Business Rules step to a process to check multiple business rules to determine if a document should be accepted or rejected.

## Procedure

1.  Drag the **Business Rules** step onto the process canvas.

The Business Rules step Options dialog opens.

2.  Type a custom **Display Name** for the step.

3.  In the **Profile Type** list, select the profile type that represents the format of the document coming into the Business Rules step. These profile types are available for selection:

    -   Database

    -   EDI

    -   Flat File

    -   XML

    -   JSON

4.  Select or create a **Profile** that represents the structure of the document coming into the Business Rule step.

5.  Click **OK**.

    The Business Rules step dialog opens.

6.  Click **Create a New Rule** or the ![+](../Images/main-ic-plus-sign-white-in-green-circle-16_4dc8c5f3-e893-4aef-ade2-0b7afe9476c1.jpg) **Add Rule** icon.

A new business rule appears in the list on the left and its properties can be entered on the right.

7.  Select the words **New Business Rule** on the right and type a more meaningful name for the rule.

8.  Now you can add inputs, conditions, and error messages.

    :::note
    
    It is important to define all inputs *first* so that you can properly configure your conditions and error messages.

    :::

9.  To add each additional business rule to the step, repeat steps 6–8.

10. When you are done adding business rules, click **OK**.