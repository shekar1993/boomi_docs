# Configuring a Flow Client operation to invoke a flow with inputs 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-16c48173-59fc-4679-98e9-a72943d28a48"/>
</head>


In a **Connector** step that invokes a flow with inputs, configure the Flow Client operation to use a profile specific to the flow that outlines the structure of the outbound JSON document in which there are particular inputs.

## Procedure

1.  Create the Flow Client operation component.

2.  In the operation, click **Import**.

    The **Flow Client Import Wizard** opens.

3.  Do one of the following:

    -   To browse for available object types in an Atom Cloud, click **Browse** in **Cloud**.

    -   To browse for available object types in an Atom, click **Browse** in **Atom**.

4.  If you selected **Browse** in **Atom**, in the list, select the Atom in which to browse for available object types.

5.  Select or create the Flow Client **Connection** for the flow user.

6.  Click **Next**.

    The wizard advances to the next screen.

7.  In the **Object Type** list, select the object type derived from the most recently published version of the flow.

8.  Click **Next**.

    The wizard advances to the next screen.

    In that screen, **Request Profile** shows the name of the generated request profile. The profile name is **Object Type**, with the prefix *Flow Client* and the suffix *EXECUTE Request* — for example, *Flow Client My Flow with Inputs EXECUTE Request*— unless a profile with that name already exists in the account. In that case a unique number is appended to the profile name — for example, *Flow Client My Flow with Inputs EXECUTE Request 2*.

9.  Click **Finish**.

    The wizard closes and generates the profile. In the operation, **Object** and **Request Profile** update to reflect the object type you selected in the wizard and the generated profile.

10. **Optional:** To enable processing to continue if the operation returns an error, select **Return Application Error Responses**.

11. Save the operation.