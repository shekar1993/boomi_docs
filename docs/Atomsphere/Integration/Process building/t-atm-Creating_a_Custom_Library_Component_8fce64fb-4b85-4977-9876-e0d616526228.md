# Creating a Custom Library component

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-8fce64fb-4b85-4977-9876-e0d616526228"/>
</head>


When you create a Custom Library component, you need to select its type and the JAR files to include.

## Before you begin

Before creating a Custom Library component use the **Manage Account Libraries** page \(**Settings** \> **Account Information and Setup** \> **Account Libraries**\) to upload one or more custom JAR files.

:::note

Listeners do not support custom libraries that are in the Atom Cloud. Suppose your integration requires custom JAR files and listeners in the Atom Cloud. In that case, the Cloud owner must manually place the JAR in the \[AtomRoot\]/userlib folder or appropriate sub-folder. Restart after loading the JAR files.

:::

## Procedure

1.  On the **Build** page, do one of the following:

    -   Click **Create New** and select **Custom Library** from the list. Skip to step 3.

    -   In the Component Explorer, click the blue arrow icon next to the desired folder, select **New Component** and select **Custom Library**.

2.  Type a name for the Custom Library component and click **Create**.

    The maximum length for a component name is 255 characters.

3.  From the **Custom Library Type** drop-down list, select the type of library that you want to create:

    |Custom Library Type|Description|
    |-------------------|-----------|
    |**General**|For JAR files that support multiple functions. The files are in the `/userlib` folder. The Java class loader loads the classes associated with this type of JAR file after the next Atom, Molecule, or Atom Worker restart. For Atom Clouds, the classes load on the next forked execution.|
    |**Scripting**|For JAR files that support custom scripting. The files are in the `/userlib/script` folder and the classes load immediately. A restart is not required.|
    |**Connector**|For JAR files that support a connector. Select a connector and deploy the files to `/userlib/<connector_type>` folder. For example, selecting the Database connector places the JAR files into the userlib/database folder. The classes load immediately and a restart is not required.|

    :::note

    After you create a Custom Library component, you cannot change its type.

    :::

4.  If you select **Connector** as the custom library type, select the type of connector from the **Connector Type** drop-down list.

5.  Click **Select JAR files to add** and select from the list of previously uploaded custom JAR files.

    To search for a JAR file by name, type all or part of the file name in the search box.

    When you click a JAR file name, it adds the file to the **Included JAR Files** list and removed from the selection list.

6.  After you select the JAR files that you want to include in the Custom Library component, click **Save**.

## Next Steps

After creating a Custom Library component, you can deploy the component to any Atom, Molecule, Atom Cloud, or environment, including the Atom Clouds. Once successfully deployed, the JAR files residing in the `/lib` and `/userlib` folders appear in the Atom's **Installed Libraries** panel. Their location corresponds with the selected **Custom Library Type** and reflects the path.

:::note

Atoms and molecules place copies of the JAR files in the corresponding locations. Tenants deploying a custom library place the JAR files in the accounts folder of the cloud directory, `<cloud_installation_directory>/accounts/account_id/userlib`. Deploying a custom library directly to a cloud does not place the JAR files anywhere in the installation directory.

:::