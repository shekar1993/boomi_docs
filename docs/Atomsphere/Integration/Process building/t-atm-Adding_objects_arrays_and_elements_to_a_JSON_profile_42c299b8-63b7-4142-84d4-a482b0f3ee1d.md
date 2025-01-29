# Adding objects, arrays, and elements to a JSON profile

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-42c299b8-63b7-4142-84d4-a482b0f3ee1d"/>
</head>


You can set field size, data format options, and qualifiers for data objects in a JSON profile.

## Procedure

1.  Create or open a JSON profile and go to the **Data Elements** tab.

2.  Click the root element, then on the right side of the page, select one of the following **Value Types**:

    -   **Simple**

    -   **Array \(Repeating\)**

    -   **Array \(Absolute\)**

    -   **Object**

    The value type that you select for the root element \(or for *any* array element or object entry\) determines whether you can add arrays, array elements, objects, object entries and/or instance identifiers to it. If you change the value type later, all existing child nodes will be deleted.

3.  After you have added a **Simple** element, you can do any of the following:

    -   Change the simple element’s name.

    -   Set Field Size options, set Data Format options and add qualifiers.

4.  After you have added an **Array \(Repeating\)** element, an array with one array element is added to it. You can do any of the following:

    -   Change the repeating array element’s name.

    -   Change the repeating array’s name.

    -   Change the repeating array element’s name.

    -   Change the repeating array element’s value type.

    -   Set the **Min Occurs** and/or **Max Occurs** fields for the repeating array element.

    -   If you change the repeating array element’s value type to **Simple**, you can set Field Size options, set Data Format options and add qualifiers.

    -   Add an instance identifier to a repeating array element by clicking its blue arrow ![icon](../Images/main-ic-arrow-blue-down-16=GUID-CA79043B-869E-4C8B-A46E-5D4D4FA1DBEE=1=en-us=Low_ee257e3c-4362-486e-b1f1-4d613b679c4c.jpg) and selecting **Add Instance Identifier**.

5.  After you have added an **Array \(Absolute\)** element, an array is added to it. You can do any of the following:

    -   Change the absolute array element’s name.

    -   Change the absolute array’s name.

    -   Add an array element to an absolute array by clicking its blue arrow ![icon](../Images/main-ic-arrow-blue-down-16=GUID-CA79043B-869E-4C8B-A46E-5D4D4FA1DBEE=1=en-us=Low_ee257e3c-4362-486e-b1f1-4d613b679c4c.jpg) and selecting **Add Array Element**.

    -   Change an absolute array element’s name.

    -   Change an absolute array element’s value type.

    -   Select or clear the absolute array element’s **Required** check box.

        If an absolute array contains a sequence of elements and you select **Required** for one of its elements, **Required** is cleared for all other elements that precede it in the array sequence.

        If you clear **Required** for one of the elements in the sequence, **Required** is cleared for any elements for which **Required** is selected that follow that element in the sequence.

    -   If you change the absolute array element’s value type to **Simple**, you can set Field Size options, set Data Format options and add qualifiers.

    -   Delete an absolute array element by clicking its blue arrow ![icon](../Images/main-ic-arrow-blue-down-16=GUID-CA79043B-869E-4C8B-A46E-5D4D4FA1DBEE=1=en-us=Low_ee257e3c-4362-486e-b1f1-4d613b679c4c.jpg) and selecting **Delete Array Element**.

6.  After you have added an **Object** element, an object is added to it. You can do any of the following:

    -   Change the object element’s name.

    -   Change the object’s name.

    -   Delete the object.

    -   Add an object entry to an object by clicking its blue arrow ![icon](../Images/main-ic-arrow-blue-down-16=GUID-CA79043B-869E-4C8B-A46E-5D4D4FA1DBEE=1=en-us=Low_ee257e3c-4362-486e-b1f1-4d613b679c4c.jpg) and selecting **Add Object Entry**.

    -   Change an object entry’s value type.

    -   If you change the object entry’s value type to **Simple**, you can set Field Size options, set Data Format options and add qualifiers.

    -   Delete an object entry by clicking its blue arrow ![icon](../Images/main-ic-arrow-blue-down-16=GUID-CA79043B-869E-4C8B-A46E-5D4D4FA1DBEE=1=en-us=Low_ee257e3c-4362-486e-b1f1-4d613b679c4c.jpg) and selecting **Delete Object**.

7.  Click **Save**.