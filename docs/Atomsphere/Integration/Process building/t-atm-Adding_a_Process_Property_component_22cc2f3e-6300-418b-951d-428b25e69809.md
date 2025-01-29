# Adding a Process Property component

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-22cc2f3e-6300-418b-951d-428b25e69809"/>
</head>


You can create Process Property components in the same way that you create othe types of components: from the **Build** menu's **Create New** button, **Start** tab, or Component Explorer; or from any process step that contains an icon for creating a new component ![+](../Images/main-ic-plus-sign-white-in-green-circle-16_4dc8c5f3-e893-4aef-ade2-0b7afe9476c1.jpg).

1.  Go to the **Build** page.

2.  Do one of the following:

    -   Click the **Create New** button and select **Process Property** from the list.

    -   In the Component Explorer, click the blue arrow icon next to the desired folder, and select **New Component**.

    -   Next to **Type**, under **All Components**, select **Process Property**, and click **Create**.

    The **New Process Property** dialog opens.

3.  Type a name for the Process Property.

    The maximum length for a component name is 255 characters.

4.  Click **![+](../Images/main-ic-plus-sign-white-in-green-circle-16_4dc8c5f3-e893-4aef-ade2-0b7afe9476c1.jpg) Add Property**.

    A property, named Process Property \#1 by default, appears in the list. Its unique ID appears in the **Key** field.

5.  Select a **Data Type**.

6.  To persist the property value across subsequent runs, select **Select to persist the value across subsequent executions**.

7. Type a new name for the property in the **Label** field.

8. To supply information about how to use the property, type it in the **Help Text** field.

9. Do one of the following:

    -   If **Data Type** is set to **Boolean**, select **Default Value** to set it to True or leave it cleared to set it to False.

    -   If you set **Data Type** to **Date** or **Hidden**, enter a date or string value in the **Default Value** field.

    Hidden process property values are not visible in the user interface.

10. If **Data Type** is set to **Number** or **String** and if you want to build a list of allowed values for this property, click **![](../Images/main-ic-plus-sign-white-in-green-circle-16_4dc8c5f3-e893-4aef-ade2-0b7afe9476c1.jpg) Add Allowed Value**.

    1.  Type a value and a label, then click **OK**.

    2.  Repeat the previous step to add more allowed values.

    3.  In the **Default Value** field select one of the allowed values that you added.

11. To add another property to the Process Property component, repeat steps 4–10.

12. Click **Save and Close**.
