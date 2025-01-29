# Configuring a Flow Client operation to invoke a flow \(no inputs\) 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-a4548085-0bf3-43a3-8b34-918c62ea2bd9"/>
</head>


In a **Connector** step that invokes a flow without inputs, configure the Flow Clientoperation to use the generic profile that specifies the structure of the outbound JSON document that identifies the flow to invoke by ID and version.

## Procedure

1.  Create the Flow Client operation component.

2.  In the operation, click **Import**.

    The **Flow Client Import Wizard** opens.

3.  Do one of the following:

    -   To browse for available object types in an Atom Cloud, click **Browse** in **Cloud**.

    -   To browse for available object types in an Atom, click **Browse** in **Atom**.

4.  If you selected **Browse** in **Atom**, in the **Atom** list, select the Atom in which to browse for available object types.

5.  Select or create the Flow Client **Connection** for the flow user.

6.  Click **Next**.

    The wizard advances to the next screen.

7.  In the **Object Type** list, select **Run - Initialize and Invoke Flow**.

8.  Click **Next**.

    The wizard advances to the next screen.

    In that screen, the **Request Profile** shows the name of the generated request profile. The profile name is *Flow Client Run - Initialize and Invoke Flow EXECUTE Request* unless a profile with that name already exists in the account. In that case a unique number appends to the profile name — for example, *Flow Client Run - Initialize and Invoke Flow EXECUTE Request 2*.

9.  Click **Finish**.

    The wizard closes and generates the profile. In the operation, **Object** and **Request Profile** update to reflect the object type you selected in the wizard and the generated profile. You might want to change the name of the profile to one that is more descriptive.

10. **Optional:** To enable processing to continue if the operation returns an error, turn on **Return Application Error Responses**.

11. Save the operation.