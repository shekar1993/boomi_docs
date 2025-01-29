# Adding input fields and functions to a business rule

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-2ffd355e-674c-46e1-8b15-696cba1a7a1f"/>
</head>


Once you add a business rule and type its name, the next step is to add input fields and functions. It is important to define all inputs *first* so that you can properly configure the conditions and error message.

1.  In the Business Rules step dialog, add a business rule.

2.  To add a field, click the **Add** arrow and select **Field**.

    The Add a Field dialog opens.

3.  Type an alias.

    If you do not type an alias, the field that you select in the next step will appear here.

4.  Click the **Browse** icon, select a field and click **OK**.

5.  To add a function, click the **Add** arrow and select **Function**.

    The Add a Function dialog opens.

6.  Do one of the following:

-   Click the **Create New Function** icon and [create a map function](r-atm-Map_Function_components_d209f3e8-3094-42de-a504-2f2dc33ab15c.md).

-   Select a category from the list, select a function and click **OK**.

7.  A different dialog opens, depending on the type of function that you selected. In some dialogs you can enter optional aliases and select default values. In other dialogs you can set up lookups, connector calls or scripting.

8.  Repeat steps 2-4 or 5-7 to add more fields or functions.

9.  Now you can add conditions.