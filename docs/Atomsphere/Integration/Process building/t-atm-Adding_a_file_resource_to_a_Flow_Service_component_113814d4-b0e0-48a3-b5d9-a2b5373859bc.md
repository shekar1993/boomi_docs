# Adding a file resource to a Flow Service component

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-113814d4-b0e0-48a3-b5d9-a2b5373859bc"/>
</head>


A file resource must be defined for each file provider used with a service. Each file resource must be linked to two Flow Services Server listener processes, one for handling List Files requests and the other for handling Upload File requests.

## Procedure

1.  In the Flow Service component, select the **File Resources** tab.

2.  Click ![+](../Images/main-ic-plus-sign-white-in-blue-circle-16_98f7af60-dd5f-4037-90cd-05cc9dfc5502.jpg) **Add File Resource**.

    The Add File Resource dialog opens.

3.  Type a unique file resource **Path**.   

4.  For **List Files Process**, specify the Flow Services Server listener process to handle List Files requests for this file resource. Do one of the following:

    -   To choose an existing **Process**, click the field.

    -   To create a **Process**, click **![+](../Images/main-ic-plus-sign-white-in-green-circle-16_4dc8c5f3-e893-4aef-ade2-0b7afe9476c1.jpg) Create**.

    If you created a process, the process opens — continue with step 5. Otherwise, skip to step 16.

5.  Change the name of the newly linked process from its default of the flow service’s External Name plus “ - New List Files Process” to a name that is more descriptive.

6.  In the process, click **Configure** to open the Start step dialog.

    Setting the **Display Name** is optional.

    The **Connector** is Flow Services Server.

    The **Action** is Listen.

    The **Connection** is managed for you.

7.  Choose an existing **Operation** or click **![+](../Images/main-ic-plus-sign-white-in-green-circle-16_4dc8c5f3-e893-4aef-ade2-0b7afe9476c1.jpg) Create**.

8.  In the Flow Services Server operation, in the **Service Type** list, select File Resource.

9.  Select **List Files** as the **File Resource Operation**.

10. Click **Import**.

    The File Service Operation Import wizard opens. In the first screen, List Files is the selected **File Resource Operation**.

11. Click **Next**.

    In the next screen the name of the **Request Profile** and **Response Profile** that will be generated are shown.

12. Click **Finish**.

13. Save the Flow Services Server operation.

14. In the Start step dialog, click **OK**.

15. Save the process.

16. In the Add File Resource dialog, for **Upload File Process**, specify the listener process to handle Upload File requests for this file resource. Do one of the following:

    -   To choose an existing **Process**, click the field.

    -   To create a **Process**, click **![+](../Images/main-ic-plus-sign-white-in-green-circle-16_4dc8c5f3-e893-4aef-ade2-0b7afe9476c1.jpg) Create**.

    If you created a process, the process opens — continue with step 17. Otherwise, skip to step 18.

17. Repeat steps 5–15 to configure the Start step in the newly linked process and optionally rename the process, with the following differences:

    -   With regard to step 5, the default name of the newly linked process is the flow service’s external name plus “ - New Upload File Process”.

    -   In the first screen of the import wizard \(step 10\), Upload File is selected as the **File Resource Operation**.

    -   The wizard generates only a **Response Profile** \(step 12\). A request profile is not applicable to the **File Resource Operation** Upload File.

18. In the Add File Resource dialog, click **Add**.

## Next steps

The file resource is not saved until you save the Flow Service component.