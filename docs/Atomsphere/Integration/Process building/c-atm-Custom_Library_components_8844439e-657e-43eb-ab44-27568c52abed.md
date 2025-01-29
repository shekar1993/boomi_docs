# Custom Library components

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-5FCAB93C-22C7-48CF-AFE5-D6B00DA3FA70"/>
</head>


Certain integrations might require the use of custom files, such as third-party custom script libraries for custom scripting or specific driver files for connectors. Custom Library components are collections of Java Archive \(JAR\) files that you can use to support those integration processes.

Creating and deploying Custom Library components enables you to manage JAR files through the UI. You can deploy Custom Library components to any Atom, Molecule, Atom Cloud, or environment, including Atom Clouds. Using these components eliminates the need to load JAR files into the Atom installation directory manually. So you can manage JAR files independently, without access to the machine or the installation directory, and without help from the Atom, Molecule, or Cloud owner or your operations team.

:::note

To include custom JAR files in a Custom Library component, you must first upload those files by using the **Manage Account Libraries** page (**Settings > Account Information and Setup > Account Libraries**). Custom libraries are not supported for some legacy listeners (Atom Queue, SAP, MQTT, JMS, Web Services Server, and AS2 Server) that are in the Atom Cloud. If your integration requires custom JAR files and listeners in the Atom Cloud, the Cloud owner needs to manually place the JAR in the `[AtomRoot]/userlib` folder or appropriate sub-folder. After the JAR files are loaded, a restart is required.

:::

Once you create a Custom Library component, you cannot change its type.

## Types of Custom Library Components

You can create three types of Custom Library components:

- Scripting - For JAR files that support custom scripting. The files deploy to `/userlib/script` and the classes load immediately; you do not need to restart.
- Connector - For JAR files that support a connector. When you create a Connector custom library, you receive a prompt to select the connector type. The files deploy to `/userlib/<connType> `and the classes load immediately; you do not need to restart.
- General - For JAR files that support multiple functions. The files are in the `/userlib`. The Java class loader loads the classes associated with this type of JAR file after the next Atom, Molecule, or Atom Worker restart; classes load for Atom Clouds on the next forked execution.

  :::warning
  It is recommended to always use either Scripting or Connector custom library components respectively and avoid General components unless specifically needed.
  :::