# Creating a complex page condition

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-6dd00a39-da3a-454d-ae20-535045971f89"/>
</head>


Create a complex page condition on a page layout.

-   Add any page layout components and values that you will use when adding the page condition to a page layout.

-   Plan your page conditions to avoid any conflicts between page conditions on the page.


Create a complex page condition to change the state of components in a page layout. This requires you to set up [Page Rules](flo-Conditions_rules_c2625ff4-12fa-40da-b277-b48e9530eb86.md) and [Page Operations](flo-Conditions_operations_6bca370d-9dd9-401e-822c-956bfe78c977.md).

1.  Open the page layout for the page that you wish to apply the page condition to.

2.  Select **Complex Conditions** from the right-hand menu.

3.  Click **New Page Condition**.

4.  Add [Page Rules](flo-Conditions_rules_c2625ff4-12fa-40da-b277-b48e9530eb86.md) to the page condition to form the IF- part of the IF-THEN conditional logic for a page condition. This is how you define the scenario in which the page condition should be applied.

5.  Add [Page Operations](flo-Conditions_operations_6bca370d-9dd9-401e-822c-956bfe78c977.md) to the page condition to form the -THEN part of the IF-THEN conditional logic for a page condition. This is how you define what operation\(s\) should be performed if the rules for the page condition are met.

6.  Click **Apply Condition** to save and apply the page condition.


-   Run the flow and test your page condition works as expected.

-   View and edit the page condition on the **Page Conditions** panel. See [Editing page conditions](flo-Conditions_editing_44cf6656-d04f-47b0-ae9b-4a7fd47bc744.md).