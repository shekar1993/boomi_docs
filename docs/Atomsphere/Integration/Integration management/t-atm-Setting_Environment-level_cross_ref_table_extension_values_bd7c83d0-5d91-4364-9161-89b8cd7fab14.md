# Setting Environment-level cross reference table extension values

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-bd7c83d0-5d91-4364-9161-89b8cd7fab14"/>
</head>


Set extension values for cross reference tables for an Environment.

## Before you begin

You must have the Environment Management privilege or Environment Management Full Access custom role to perform this task. You are unable to perform this task if your user is assigned with the Environment Management Read Access custom role.

## Procedure

1.  Select **Manage** \> **Atom Management**.

2.  Select an environment from the list on the left.

3.  From the Environment Management screen, click **Environment Extensions**.

4.  Do one of the following:

    -   To filter the controls below to show only extensions defined for a particular process:

        1.  Click **![](../Images/main-ic-magnifying-glass-16_cd0f3352-63b0-4d15-af6d-86e11b9d14eb.jpg) Choose the desired component** adjacent to **Process Filter**.

        2.  Select the process in the component chooser.

    -   To set extension values for a particular process in an installed, attached multi-install integration pack:
    
        1.  In the **Process Type** list, select Multi Installation Integration Packs.

            :::note

            This list option displays only if your multi-installation integration packs are installed on your account.

            :::

        2.  Click **![](../Images/main-ic-magnifying-glass-16_cd0f3352-63b0-4d15-af6d-86e11b9d14eb.jpg) Choose the desired component** adjacent to **Process**.

        3.  Select the process in the component chooser.

5.  Select the **Cross Reference** tab.

6.  In the **Cross Reference** list, select a Cross Reference Table component for which an extension is defined.

7.  Select the **Override** check box. If **Override** is cleared, the values in the underlying Cross-Reference Table component will be used at run-time.

8.  Modify the Cross Reference Table values.

    The controls for modifying values are identical to those used in the Build page to create and edit a cross reference table component. You can import a cross-reference table or directly edit values in the table grid. However, you cannot insert or delete columns or modify column headings.

9.  For each additional Cross Reference Table for which an extension is defined, repeat steps 6–8.

10. When you are finished setting extension values, click **OK**.