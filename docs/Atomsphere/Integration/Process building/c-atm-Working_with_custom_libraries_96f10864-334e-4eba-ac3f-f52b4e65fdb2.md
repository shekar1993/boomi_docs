# Working with custom libraries

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-96f10864-334e-4eba-ac3f-f52b4e65fdb2"/>
</head>


These are the general steps for using custom libraries with your integration processes:

1.  Upload custom JAR files to an account by using the [Manage Account Libraries page](/Atomsphere/Platform/r-atm-Account_Library_Management_edc37905-b4fe-4cae-8001-b62221adb872.md) \(**Settings** \> **Account Information and Setup** \> **Account Libraries**\).

    To upload files, you must have the Build Read and Write Access privilege and the Developer privilege. Typically, an administrator uploads the files for an account. Each account has access to 100 MB of space for uploaded files.

    :::note

    Uploaded or imported files pass through a virus scanner first. If the scan detects a virus, you receive an error message, and the scan rejects the file. If an error persists, contact Boomi Support.

    :::

2.  [Create a Custom Library component](t-atm-Creating_a_Custom_Library_Component_8fce64fb-4b85-4977-9876-e0d616526228.md) and add one or more of the uploaded JAR files in the account library to the component.

    You can create three types of Custom Library components, depending on your integration needs: General, Scripting, and Connector. When you create a Connector custom library, you also specify a connector type, such as Database. Once you create a Custom Library component, you cannot change its type.

3.  [Deploy the Custom Library component](c-atm-Custom_library_deployment_considerations_7fccfe31-e438-4fa6-bab0-7f395eef5fe3.md) as you would any other deployable component.

    Because Custom Library components are not explicitly referenced by a process or any other component, you must deploy them independently. You can deploy these components to any Atom, Molecule, Atom Cloud, or environment.

    When you deploy one of these components, the JAR files that it references are deployed to the appropriate /userlib folder. For example:

    -   For a Scripting type component, the JAR files are deployed to /userlib/script and those files become available for custom scripting steps or functions within a process.

    -   For a Connector type component that is to be used with a Database connector, the JAR files are deployed to /userlib/database.

    -   For a General type component containing JAR files that are required by more than one connector type, the JAR files are deployed to /userlib.

    :::note
    
    JAR files that are deployed to `/userlib/script` or `/userlib/<connType>` are available for use immediately. However, JAR files in a General type component that are deployed to /userlib are not available for use until after the next Atom, Molecule, or Atom Worker restart \(or, in the case of Atom Clouds, the next forked execution\).

    :::