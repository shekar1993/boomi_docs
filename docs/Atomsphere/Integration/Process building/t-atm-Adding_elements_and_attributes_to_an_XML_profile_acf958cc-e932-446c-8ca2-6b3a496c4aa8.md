# Adding elements and attributes to an XML profile

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-acf958cc-e932-446c-8ca2-6b3a496c4aa8"/>
</head>


Use the Data Elements tab to add elements and attributes to an XML profile.

## Procedure

1.  Create or open an XML profile then go to the **Data Elements** tab.

2.  Click the blue arrow ![icon](../Images/main-ic-arrow-blue-down-16=GUID-CA79043B-869E-4C8B-A46E-5D4D4FA1DBEE=1=en-us=Low_ee257e3c-4362-486e-b1f1-4d613b679c4c.jpg) next to the root element, then select one of the actions from the list:

    -   **Add Child Element**

    -   **Add Attribute**

    The child element or attribute appears in the tree.

3.  Click the blue arrow ![icon](../Images/main-ic-arrow-blue-down-16=GUID-CA79043B-869E-4C8B-A46E-5D4D4FA1DBEE=1=en-us=Low_ee257e3c-4362-486e-b1f1-4d613b679c4c.jpg) next to the root element, then select one of the actions from the list:

    -   **Add Multiple Child Elements**

    -   **Add Multiple Attributes**

    The How Many dialog opens.

4.  Select the number of elements or attributes that you want to add and click **OK**.

    The child elements or attributes appear in the tree.

5.  After you have added an element you can do any of the following:

    -   Change the element’s name.

    -   Select a namespace.

        The namespaces from the **Types** tab appear in the list. You also can select **None**.

    -   Reference a type or complex type by selecting one from the **Type** list.

        If the element references a complex type, you cannot set Field Size options, set Data Format options, add qualifiers, add child elements, or add attributes.

        If the element references a regular type, you cannot complete the actions above and you also cannot change the element’s name.

        If you change an element’s type, all existing child elements and attributes are deleted. The element inherits the child elements and attributes of the referenced type.

    -   Add comments and/or set the **Min Occurs**, **Max Occurs** and/or **Looping Options** fields.

    -   Set Field Size options and/or set Data Format options.

    -   Add qualifiers.

    -   Add namespace declarations.

        The namespaces from the **Types** tab appear in the chooser dialog.

    -   Add one or more child elements.

    -   Add one or more sibling elements.

    -   Delete the element.

    -   Add attributes.

    -   Add instance identifiers.

        Instance identifiers cannot be added to root elements or attributes. Nor can instance identifiers be duplicated.

        Changes to element names may not display properly until you close and re-open the profile.

6.  After you have added an attribute you can do any of the following:

    -   Add more attributes.

    -   Delete the attribute.

7.  Click **Save**.