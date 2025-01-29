# Using attributes to style components 

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-ed09909d-5c7e-48c2-be21-138f6490760e"/>
</head>


You can use attributes to apply CSS classes to page components.

## Default player runtime 
Attributes are not used to apply CSS classes when running flows with the default player.

Instead, you can add multiple space-delimited CSS classes to a component using the **CSS Class** field on the component configuration panel. To learn more about applying CSS to your flow players, see [CSS reference](r-flo-CSS_Reference_d32122b8-0f11-47be-91c6-6986575f933e.md).

## Default legacy player runtime 
When running flows with the default legacy player, you can add a generic 'classes' attribute to components, allowing you to apply CSS classes directly.

These styles can then be applied at runtime, either directly in the player or by linking to a stylesheet, in order to modify the appearance/behaviour of the component.

The string value for the attribute can consist of multiple entries separated by a space character to build up the CSS class selector. To learn more about applying CSS to your flow players, see [CSS reference](r-flo-CSS_Reference_d32122b8-0f11-47be-91c6-6986575f933e.md).

:::note 

Full stop characters should be removed from the attribute value. For example, to reference a .bluetext style, only the text 'bluetext' would be entered as the value for the attribute, i.e. the full stop character has been removed.

:::

Applying a single CSS class:

![Example attribute CSS](../Images/img-flo-Players_CSS_Attributes_b65d6d8c-43d9-4c5a-af32-e0962de06c2f.png)

-   A `classes` attribute is added to a component on a page layout with a value of 'bluetext'. ![Step 1](../Images/img-flo-Step1_ed936f88-97de-4cc1-98ac-9f351a84a1bb.png)


-   In a custom player, a `.bluetext` style is added to show text as blue and increase the font size.![Step 2](../Images/img-flo-Step2_c61b5577-5d61-4de6-9cfd-7eb5f4587ce0.png)

-   When the flow is run using the custom player, the CSS in the player is applied to the component.![Step 3](../Images/img-flo-Step3_80c92964-4950-401a-b366-9af635fc20e7.png) 


Applying multiple CSS classes:

A `classes` attribute is added to an outcome button component on a page layout with a value of 'btn-lg btn-outline CustomButton'. This applies three CSS classes to the outcome button:

-   The `btn-lg` part of the value makes the outcome button large \(applying the Bootstrap `btn-lg` CSS class\).

-   The `btn-outline` part of the value makes the outcome button outlined \(applying the Bootstrap `btn-outline` CSS class\).

-   The `CustomButton` part of the value applies a `CustomButton` CSS class that has been added to the player.