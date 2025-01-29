# Installation directories for Atoms, Molecules, and Atom Clouds

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-fec3863c-e459-439a-91c3-da8bea9b4fb8"/>
</head>


In this topic, you can find information about the installation directories for local Atoms, Molecules, and private Atom Clouds.

:::note
Some assets for clustered runtimes can and should be configured to use local node storage. Refer to [Molecule and Atom Cloud local storage](../Integration%20management/c-atm-Molecule_and_Atom_Cloud_working_data_storage_b18ef1af-1e37-4a33-8712-d600f4e7b29d.md) for further details. 
:::

Boomi Support can use the directories noted in the Description column in the following table for troubleshooting.

:::caution

Unless specifically instructed to do so by documentation or Support, do not modify files in these directories.

:::

| Directory | Description | Life span | How created | Contains customer data? |
| --- | --- | --- | --- | --- |
| `<root>` | Runtime installation root directory. <br />Includes uninstall.exe. | Permanent | Upon install | No |
| accounts | (Atom Cloud only)<br /> List of tenant subdirectories for multi-tenant, Atom Cloud runtimes. Each tenant has its own copy of data, process run history, process configuration, and related directories. <br /> Important for troubleshooting. | Permanent | Upon account attachment | Yes |
| accounts-deleted | (Atom Cloud only)<br /> List of recently deleted Atom Cloud account attachments. | Purged periodically | Upon deleting account attachments | No |
| as2-mdn | Staging area for AS2 asynchronous MDN messages. | Momentary (consumed immediately) | Upon AS2 process run with asynchronous MDN enabled | Yes |
| auth | Cache for OAuth 2.0 tokens. | Permanent | Upon token generation | Yes |
| bin | Runtime executables and JVM configuration files, including:<br />- atom.exe (Windows)<br />- atomdesktop.exe (Windows desktop mode)<br />- atom.sh (Linux)<br />- `restart.<ps1 \| sh>` <br />• vmoptions (JVM settings)<br />- error.log<br />- output.log<br /><br />Additional Molecule and Atom Cloud files include:<br />- `node-install.<ps1 \| sh><br />`- `procrunner*.<bat \| ps1 \| sh> `(vmoptions for forked execution)<br />- `procbrowser*.<bat \| ps1 \| sh>` (vmoptions for launching the browse of connector operations that run in forked executions)<br />- `procworker*.<bat \| ps1 \| sh> `(vmoptions for Atom worker JVMs)<br />**Important for troubleshooting.** | Permanent | Upon install | No |
bounds | (Atoms, Molecules, Multi-tenant Clouds)<br />Lock file for Singleton Listen operations.<br />- File locks for multi-tenant Clouds appear in an account subdirectory. The account identifier deploying the listener identifies the subdirectory.<br />- File locks for single-tenant Atoms and Molecules appear in the root bounds directory and do not create an account subdirectory.<br />- A unique number identifies the lock file. For example, e3d5531c-40fb-44c9-b813-0e11399660cf_275.1.lck | Purged automatically | Upon the bounded service manager starting|No |
| component | Transient XML metadata for components that ran in test mode or deployed to the Atom. | Atom Purge Schedule | When test mode runs or deployment | Yes (encrypted passwords) |
| conf | Additional application configuration files, including: <br />- container.properties,<br />- /limits (attachment quotas for Atom Clouds). The user interface is the preferred method for updating [Properties Panel](../Integration%20management/r-atm-Properties_panel_6dcdbe36-55bc-4e39-acad-c938d6b653b0.md) and [Attachment Quotas Tab](../Integration%20management/r-atm-Attachment_Quotas_tab_4fbc3fff-7aaf-4bbd-a2dc-25d0edb5189c.md).<br />**Important for troubleshooting.** | Permanent | Upon install | No |
| connector | Connector libraries<br /> It contains only those connectors required by processes that ran on this Atom, Molecule, or Atom Cloud. When needed, new connectors download automatically.<br />**Important for troubleshooting.**  | Permanent | Upon the first process run requiring a given connector | No |
| counter | Property files containing the next values for custom counters and trading partners. <br />Modify counter values through the [Atom Management](../Integration%20management/c-atm-Atom_Management_b38a3a90-d7f6-4df0-8c00-e75a178dfdfa.md) user interface only. | Permanent | Upon first use of a counter parameter or trading partner | No |
| data | Document data files used during process runs and subsequent document data viewing.<br />You can change the [directory structure](../Integration%20management/c-atm-Atom_data_directory_structure_69a64ba7-502e-4c5f-b662-7bdfc36471f9.md) of /data to accommodate more files.<br />If you enable [processed document archiving](../Integration%20management/c-atm-Processed_document_archiving_1e1fedc4-b844-4dde-988a-875b4980cce9.md), when purging processed documents from /data, they are stored in a designated archive directory. | Atom purge schedule | When running every process | Yes |
| doc | (Windows installation only) <br /> Start menu links to documentation. | Permanent | Upon install | No |
| doccache | Temporary directory for the Document Cache component.<br /> Typically empty except when running processes. | Single execution | When running processes that use the document cache | Yes (temporarily) |
| endorsed | Additional runtime library files. | Permanent | Upon install | No |
| execution | Run artifacts such as process and document logs, in the following subdirectories:<br />- `/<root> `(persisted process properties by component ID)<br />- `/current` (artifacts for in-progress runs; moved to /history upon completion)<br />- /error (metadata regarding failed process runs; internal use only)<br />- /history (historical run artifacts by date)<br />- /recovery (temporary state of abnormally terminated process runs; used for cleanup) | Atom purge schedule | When every process runs | Yes (run history) |
| .install4j | Installation artifacts. Includes inst_jre.cfg.<br />**Important for troubleshooting.** | Permanent | Upon install | No |
| jre | (Optional)<br /> Local copy of the Java runtime if you had the installer or upgrader install its own copy of Java. | Permanent | Upon install | No |
| lib | Core runtime libraries. | Permanent | Upon install | No |
| logs | Daily logs, including:<br />- container log<br />- HTTP shared server log (including all inbound web services requests)<br />- local user logs<br />**Important for troubleshooting.** | Atom purge schedule | Daily while Atom is running | No |
| message | Staging area for messages being exchanged with the platform, including:<br />- Atom status<br />- run metadata<br />- test mode results<br />- UI-related information | Momentary (consumed immediately) | Upon every process run | No |
| plugins | Additional configuration and deployment artifacts for optional functionality such as the shared web server, API components, and Master Data Hub universes. | Permanent | Upon deployment of given functionality | No |
| process | List of processes attached or deployed to the Atom. | Permanent | Upon process attachment or deployment | No |
| processes | Deployment versions of component XML for processes and their dependent components. | Permanent | Upon process attachment or deployment | Yes (encrypted passwords) |
| queue | Persisted Atom queue contents.<br />Contains pointers to document data that resides in the /data directory (not the data itself). | Atom purge schedule (not affected by Purge Immediately) | Upon the first process run requiring the Atom Queue connector | Yes (for low latency executions) |
| resources | Independently deployed components, such as certificates and process routes. | Permanent | Upon deployment | No |
| settings | Extension values for deployed processes.<br /> Configure [Process Extensions](../Process%20building/c-atm-Process_extensions_75b3842c-67d8-4baa-9884-1e62e829052a.md) in the user interface. | Permanent | When configuring Atom or environment extensions | Yes (encrypted passwords) |
| settings-test | Extension values for test-mode processes.<br /> [Setting Extension Values for Use in Test Mode](../Process%20building/c-atm-Setting_Extension_Values_for_Use_in_Test_Mode_a3aa3a4a-03b7-488c-b70c-f145af642897.md) are set in the user interface. | Permanent | Upon configuring test-mode extensions | Yes (encrypted passwords) |
| tmp | Temporary files for the Atom, including artifacts from when the process runs. | Atom purge schedule | Upon every process run | Yes |
| tmpdata | Temporary files for process runs when **Purge Data Immediately** is turned on. | Single run | Upon every process run | Yes (but purged immediately) |
| update | Temporary space for applying Atom executable updates. | Temporary (during update only) | Upon Atom executable updates | No |
| userlib | (Optional)<br /><br />Additional libraries (such as third-party JAR files) for custom scripting and certain types of connectors. <br /><br />You can create [Custom Library components](../Process%20building/c-atm-Custom_Library_components_8844439e-657e-43eb-ab44-27568c52abed.md) that reference JAR files. When you deploy those components, Integration deploys the JAR files to `/userlib` or an appropriate subdirectory, such as `/script` or `/database`. Integration creates the directory if it does not exist.<br /><br />Important for troubleshooting. | Permanent | Created as needed for custom scripting libraries and connector drivers | No |
| work | Working copies of libraries loaded into memory at runtime, as well as some history run artifacts, including:<br /><br />- `/as2` (AS2 artifacts, including inbound and outbound raw MIME messages and synchronous MDNs)<br />- `/cdc` (change data capture, which are snapshots of the Find Changes step) | Permanent (except for `/as2`, which is subject to the Atom purge schedule) | Upon Atom startup and process runs | Yes |