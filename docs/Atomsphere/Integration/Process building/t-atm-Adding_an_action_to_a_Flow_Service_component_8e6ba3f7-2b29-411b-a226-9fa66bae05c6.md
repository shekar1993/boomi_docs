# Adding a message action to a Flow Service component

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-8e6ba3f7-2b29-411b-a226-9fa66bae05c6"/>
</head>


In a Flow Service component, a message action defines a means by which a service interacts with processes. You can define multiple message actions for a Flow Service component. These steps describe adding an action to a Flow Service component.

## Procedure

1.  In the Flow Service component, select the **Message Actions** tab.

2.  Click **![+](../Images/main-ic-plus-sign-white-in-blue-circle-16_98f7af60-dd5f-4037-90cd-05cc9dfc5502.jpg) Add Message Action**.

    The Add Message Action dialog opens.
    
3.  Type a **Name**.

4.  Specify the Flow Services Server listener process to link to the action. Do one of the following:

    -   To choose an existing **Process**, click the field.

    -   To create a **Process**, click **![+](../Images/main-ic-plus-sign-white-in-green-circle-16_4dc8c5f3-e893-4aef-ade2-0b7afe9476c1.jpg) Create**.

    If you created a process, the process opens — continue with step 6. Otherwise, skip to step 14.

5.  Type a **Description**.

6.  Change the name of the newly linked process from its default of the flow service’s External Name plus “ - New Action Process” to a name that is more descriptive.

7.  In the process, click **Configure** to open the Start step dialog.

    Setting the **Display Name** is optional.

    The **Connector** is Flow Services Server.

    The **Action** is Listen.

    The **Connection** is managed for you.

8.  Choose an existing **Operation** or click **![+](../Images/main-ic-plus-sign-white-in-green-circle-16_4dc8c5f3-e893-4aef-ade2-0b7afe9476c1.jpg) Create**.

9.  In the Flow Services Server operation, in the **Service Type** list, select Message Action.

10. Choose or create a **Request Profile** and a **Response Profile**.

11. Save the operation.

12. In the Start step dialog, click **OK**.

13. Save the process.

14. In the Add Action dialog, click **Add**.

## Next steps

The message action is not saved until you save the Flow Service component.