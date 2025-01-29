# Creating Components

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-37d5c3ee-f315-41de-98fb-e28840e289c1"/>
</head>

You can create components on the Build page or by copying them from published processes you install from the process library.

- To create a component, use the **Create New** button, or the [Component Explorer](/docs/Atomsphere/Integration/Process%20building/c-atm-Component_Explorer_b293eeb3-9616-4aa0-ba2d-60cf2d1f37fd.md), or the process canvas.

- When you install a published process from the process library, the process component and all of the components used in the process are copied into your account. The process library is accessible from the **Build** page.

:::tip

- Use a consistent naming convention for components.

- Organize! Think about folder hierarchy, common components, connections, etc. before digging in.

- Avoid saving components in the root folder. Use sub-folders to manage integration projects. You can easily move a component to a different folder by dragging and dropping it.

- Give meaningful, self-describing names to components. For example, name a process "Salesforce Won Opportunities to NetSuite Sales Orders" rather than "My Salesforce Process".

- Delete or rename components that are no longer used to avoid confusion later.

:::

<details>
<summary> Using the Create New button</summary>

To create new Integration processes, you must have Build Write Access. With Build Read Access, you can only view recently opened items on the Start tab, as the Create New button and component creation options are unavailable.

1. On the Build page, click Create New.

2. Select a component type from the list, like Process or Connection.

    :::note
    - Components appear in alphabetical order; hovering on a component type shows a short description to help you understand your choices. You can also use the search field to filter for a specific component type.
    - Some component types (Connector, Operation, Trading Partner, Communication Channels, and EDI Profiles) require additional information before you can start configuring it for your process.
    - This extra information designates things like an application or profile type, communication method, or technical standards.
    :::

3. If you did not make configuration changes, save your new component by clicking Save or Save and Close.

    :::note
    - Closing the component tab without saving changes at any point after its initial creation deletes it.
    - Optional: New components in Component Explorer save and go into the correct group according to their type. You can change the component's folder location by dragging and dropping it to a new place in Component Explorer or clicking the Folder link on the opened component.
    :::

</details>

<details>
<summary> Using the Component Explorer</summary>

If a folder has write restrictions and you do not have write access, then the folder icon has a gray lock, ![icon](../Images/main-ic-folder-yellow-with-lock_f6a422b9-3994-4569-87ee-bc5c81c81d9a.jpg) or the **New Component** option is unavailable from the blue arrow ![icon](../Images/main-ic-arrow-blue-down-16=GUID-CA79043B-869E-4C8B-A46E-5D4D4FA1DBEE=1=en-us=Low_ee257e3c-4362-486e-b1f1-4d613b679c4c.jpg) next to the folder.

1.  On the **Build** page in Component Explorer, navigate to the folder in which you want to create the component.

2.  Click the ![icon](../Images/main-ic-arrow-blue-down-16=GUID-CA79043B-869E-4C8B-A46E-5D4D4FA1DBEE=1=en-us=Low_ee257e3c-4362-486e-b1f1-4d613b679c4c.jpg) blue arrow next to the folder.

3.  Click **New Component**.

    The Create Component dialog opens.

4.  In **Type**, select a component from the list.

    Depending on the type of component that you select, additional options appear in the **Create Component** dialog. For example, if you create a connection you must select a connector type.

5.  Click **Create**.

    A new tab opens where you can configure additional settings.

6.  On the tab, type a name for the component.

    The maximum length is 255 characters.

7.  Configure the other fields on the tab as needed for the component.

8.  Click **Save** or **Save and Close**.

</details>

<details>
<summary>Using the Process Canvas</summary>

1.  On the **Build** page, open a process.

2.  Do one of the following:

    -   Drag a step from the steps palette onto the canvas.

    -   Click an existing step in the process to display its configuration window.

3.  At various points you may see an icon for creating a new component. Click **Create a new component**.

    :::note

    Not all steps reference components.

    :::

    The component opens on a new tab.

4.  Type a name for the component.

    The maximum length is 255 characters.

5.  Type a description.

6.  Configure the other fields as needed for the component.

7.  Click **Save** or **Save and Close** to save the process containing the new component.

#### Next Steps

1. After creating a process or deployable component, click **Save**.
2. Click the **Create Packaged Component** button to open the wizard.
3. Follow the steps in the wizard to package your component and click the **Deploy** button on the final confirmation message.<br/>
The deployed component appears in the list of packaged components on the:
    - Deploy > Packaged Components page.
    - Deploy > Deployments page.
</details>


