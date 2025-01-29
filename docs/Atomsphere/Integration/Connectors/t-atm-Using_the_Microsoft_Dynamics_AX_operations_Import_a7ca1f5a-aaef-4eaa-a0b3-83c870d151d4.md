# Using the Microsoft Dynamics AX operation's Import Wizard

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-a7ca1f5a-aaef-4eaa-a0b3-83c870d151d4"/>
</head>


By using the Microsoft Dynamics AX Import Wizard, you define the web service object you are integrating based on the action you specified.

## Procedure

1.  Create or open a Microsoft Dynamics AX Operation component.

    In the **Connector Action** field, **Execute** is selected by default.

2.  Click the **Import** button.

    The Microsoft Dynamics AX Import Wizard opens.

3.  In the **Browse In** field, select **Atom**.

4.  Select an Atom from the list that has network access to the IIS server.

5.  Select the Microsoft Dynamics AX Connection component that is configured to the instance you are working with.

6.  In the **WS Object** field, type the name of the service that you want to access.

    For example: **salesorderservice.svc**. Ensure that this service is exposed through AX and is available on the IIS server.

7.  Click **Next**.

8.  Select an operation type.

    Typical operations in AX include: Create, Delete, Find, FindKeys, Read, and Update.

9.  Click **Next**.

    The request XML profiles are loaded and saved.

10. Review the results and click **Finish**.