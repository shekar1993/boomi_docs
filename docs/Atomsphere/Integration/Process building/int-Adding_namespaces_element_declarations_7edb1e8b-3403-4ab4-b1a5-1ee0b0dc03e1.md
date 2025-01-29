# Adding namespaces, element declarations, and complex types to an XML profile

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-7edb1e8b-3403-4ab4-b1a5-1ee0b0dc03e1"/>
</head>


Use the namespace pane on the Types tab to add namespaces, element declarations, and complex types to an XML profile.

1.  Create or open an XML profile and go to the **Types** tab.

2.  Click the **Add Namespace** button.

3.  Select the namespace in the left pane.

4.  **Optional**: In the right pane change the namespace’s name, add a prefix and/or add comments.

5.  Click the blue arrow ![icon](../Images/main-ic-arrow-blue-down-16=GUID-CA79043B-869E-4C8B-A46E-5D4D4FA1DBEE=1=en-us=Low_ee257e3c-4362-486e-b1f1-4d613b679c4c.jpg) next to the namespace, then select one of the actions from the list:

    -   **Add Element Declaration**.

    -   **Add Complex Type**.

    -   **Delete Namespace**.

    The element declaration or complex type appears in the tree.

6.  After you have added an element declaration you can do any of the following:

    The element declaration’s default name is “type” plus a sequence number, indicating its place within the namespace. It has a blue building block icon ![](../Images/main-ic-box-blue-16_fafcab14-ca59-4937-b547-a4c8b9faa987.jpg).

    -   Change the name and/or add comments.

    -   Reference a complex type by selecting one from the **Type** list.

        If the element declaration references a complex type, you cannot set Field Size options, set Data Format options, add qualifiers, add child elements or add attributes.

    -   Set Field Size options, set Data Format options, and/or add qualifiers.

    -   Add one or more child elements.

    -   Add one or more attributes.

    -   Delete the element declaration.

7.  After you have added a complex type you can do any of the following:

    The complex type’s default name is “type” plus a sequence number, indicating its place within the namespace. It has a yellow building block icon ![](../Images/main-ic-box-yellow-16_88f32def-be6c-47d6-aa43-f2aef572647e.jpg).

    -   Change the name and/or add comments.

    -   Set Field Size options, set Data Format options, and/or add qualifiers.

    -   Add one or more child elements.

    -   Add one or more attributes.

    -   Delete the complex type.

8.  Click **Save**.