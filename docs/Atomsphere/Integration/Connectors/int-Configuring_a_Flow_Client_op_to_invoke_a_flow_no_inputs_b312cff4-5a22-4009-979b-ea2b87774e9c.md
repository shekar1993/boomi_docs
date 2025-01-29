# Configuring a Flow Client operation to invoke a flow \(no inputs\) 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-b312cff4-5a22-4009-979b-ea2b87774e9c"/>
</head>


Configure the Boomi Flow Client operation to use the generic profile in a **Connector** step that invokes a flow that does not have inputs. The profile specifies the structure of the outbound JSON document that identifies the flow to invoke by ID and version.

## Procedure

1. Create the Boomi Flow Client operation component.

2.  In the operation, click **Import**.

    The **Flow Client Import Wizard** opens.

3.  Do one of the following:

    -   To browse for available object types in an Atom Cloud, select **Browse** in **Cloud**.

    -   To browse for available object types in an Atom, select **Browse** in **Atom**.

4.  If you selected **Browse** in **Atom**, in the **Atom** list, select the Atom in which to browse for available object types.

5.  Select or create the Flow Client **Connection** for the flow user.

6.  Click **Next**.

    The wizard advances to the next screen.

7.  In the **Object Type** list, select **Run - Initialize and Invoke Flow**.

8.  Click **Next**.

    The wizard advances to the next screen.

    In that screen, **Request Profile** shows the name of the generated request profile. The profile name *Flow Client Run - Initialize and Invoke Flow EXECUTE Request* unless a profile with that name already exists in the account. In that case, it appends a unique number to the profile name — for example, *Flow Client Run - Initialize and Invoke Flow EXECUTE Request 2*.

9.  Click **Finish**.

    The wizard closes and creates the profile. In the operation, **Object** and **Request Profile** update to reflect the object type you selected in the wizard and the generated profile. You might want at some point to change the name of the profile to one that is more descriptive.

10. **Optional:** To enable processing to continue if the operation returns an error, turn on **Return Application Error Responses**.

11. Save the operation.