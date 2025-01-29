# Setting Environment-level PGP certificate extension values

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-8c51d203-c0b9-423c-b89e-59abdc8e61bc"/>
</head>


Set extension values for PGP certificates for an Environment.

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

:::note

This list option displays only if your multi-installation integration packs are installed on your account.

:::

2.  Click **![](../Images/main-ic-magnifying-glass-16_cd0f3352-63b0-4d15-af6d-86e11b9d14eb.jpg) Choose the desired component** adjacent to **Process**.
3.  Select the process in the component chooser.
5.  Select the **PGP** tab.

6.  In the **PGP** list, select a PGP Certificate component for which an extension is defined.

7.  Clear the **Use Default?** check box. If **Use Default?** is on, the certificate configured in the underlying PGP Certificate component will be used at run-time.

8.  Click **![](../Images/main-ic-magnifying-glass-16_cd0f3352-63b0-4d15-af6d-86e11b9d14eb.jpg)**.

9.  In the component chooser, select the PGP Certificate to use at run-time.

10. For each additional PGP Certificate for which an extension is defined, repeat steps 6–9.

11. When you are finished setting extension values, click **OK**.