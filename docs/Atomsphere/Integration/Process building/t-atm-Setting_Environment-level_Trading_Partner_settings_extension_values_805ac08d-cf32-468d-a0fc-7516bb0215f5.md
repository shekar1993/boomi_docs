# Setting Environment-level Trading Partner settings extension values

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-805ac08d-cf32-468d-a0fc-7516bb0215f5"/>
</head>


Set trading partner and communication channel extension values for an Environment.

You must have the Environment Management privilege or Environment Management Full Access custom role to perform this task. You are unable to perform this task if your user is assigned with the Environment Management Read Access custom role.

1.  Select **Manage** \> **Atom Management**.

2.  Select an environment from the list on the left.

3.  From the Environment Management screen, click **Environment Extensions**.

4.  Do one of the following:

-   To filter the controls below to show only extensions defined for a particular process:
1.  Click **![](../Images/main-ic-magnifying-glass-16_cd0f3352-63b0-4d15-af6d-86e11b9d14eb.jpg) Choose the desired component** adjacent to **Process Filter**.
2.  Select the process in the component chooser.
-   To set extension values for a particular process in an installed, attached multi-install integration pack:
1.  In the **Process Type** list, select Multi Installation Integration Packs.

**Note:** This list option displays only if your multi-installation integration packs are installed on your account.

2.  Click **![](../Images/main-ic-magnifying-glass-16_cd0f3352-63b0-4d15-af6d-86e11b9d14eb.jpg) Choose the desired component** adjacent to **Process**.
3.  Select the process in the component chooser.
5.  Select the **Partner Settings** tab.

6.  Do one of the following:

-   To set extension values for a Trading Partner for which settings extensions are defined, in the **Component Type** list, select Trading Partner, and then in the **Component Name** list, select the Trading Partner.

-   To set extension values for a Communication Channel for which settings extensions are defined, in the **Component Type** list, select Communication Channel, and then in the **Component Name** list, select the Communication Channel.

7.  In the **Extension Set** list, select an extension set \(settings category\).

8.  For each extension for which you want to set an a value, clear the **Use Default?** check box and enter a value. If **Use Default?** is on, the value configured in the underlying component will be used at run-time.

9.  For each additional extension set applicable to the selected Trading Partner or Communication Channel, repeat steps 8–9.

10. For each additional Trading Partner or Communication Channel for which settings extensions are defined, repeat steps 7–10.

11. When you are finished setting extension values, click **OK**.