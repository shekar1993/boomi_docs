# Molecule and Atom Cloud local storage 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-b18ef1af-1e37-4a33-8712-d600f4e7b29d"/>
</head>


You can improve performance and resiliency for clustered Molecule and Atom Cloud runtimes by using local storage for working data and runtime assets. When enabled, certain files are stored or copied to a local directory within each cluster node instead of reading and writing to the shared files system. 

Boomi highly recommends using local storage for clustered runtimes. You can enable  this within the Atom Management screen by selecting the *Use Local Storage for Runtime Assets* setting on the [Properties panel’s Basic tab](../Integration%20management/r-atm-Properties_panel_Basic_tab_8eb9b9cf-e371-44ba-897f-4232ce22f122.md). Refer to the topic [Enabling Local Storage for a Molecule or Atom Cloud](../Integration%20management/t-atm-Enabling_local_storage_for_a_Molecule_or_Atom_Cloud_8861cfb6-79fa-46bc-a957-a4a3cfa45d5f.md). Alternatively, you can set the *Working Data Local Storage Directory* during the runtime or node installation. 

:::note
Currently the installer setting applies only to the working data. Support for the additional runtime assets will be added in a future release.
:::

The types of assets eligible for local storage are:

- Working data - Temporary files used during integration process executions. Long-term execution history is still stored on the shared file system.
- Boomi runtime libraries - Core JAR libraries included in the runtime installation.
- Connectors - Connector artifacts.
- Custom libraries - User-deployed custom JAR files.
- Java JRE/JDK - Java runtime if using the Boomi-supplied Java installation.

## Considerations for working data 

- By default, working data is stored in the shared file system within the runtime installation directory as follows.
  - Molecules and Atom Clouds store working data in their `data` and `tempdata` directories.
  - Multi-tenant Atom Clouds store attachment-specific working data in an account-specific directory. For example: `\<Atom\_Cloud\_installation\_directory\>/accounts/account-123456.890ABC`
- When local storage is enabled, the `data, tmpdata` and attachment-specific working data will be restored in subdirectories, under the configuration Working Data Local Storage Directory.
- In rare situations, you can set a different working data storage location for each node in a Molecule or Atom Cloud within a node-specific container.properties file. Refer to the topic [Add a Node-Specific container.properties file](../Integration%20management/t-atm-Adding_node-specific_container_properties_file_87133ce8-ed21-463b-a7ed-01c3b81a5d0f.md).
- A sub directory of the Shared File System (SFS) cannot be used as Working Data Local Storage Directory. 
- Do not use the system’s /temp directory as the local working data storage location because this directory may be purged by the operating system in a way that can interfere with process execution. 


<!--## Local storage for Molecules and Atom Clouds 

Configuring Molecules and Atom Clouds to use local storage for working data reduces unnecessary network traffic to the shared working data storage. 

The installers provide an option to select local directories for storing working data and temporary data when you install the Molecule or Atom Cloud node. Boomi recommend that you select local directories. If you select local directories, be sure that these directories exist before you run the installer. The installer does not create the directories for you.

If you did not select a local directory for working data when you ran the installer, you can set the directory later. To enable and configure local working data storage for a Molecule or Atom Cloud, set the Working Data Local Storage Directory property \(`com.boomi.container.localDir`\) in the Molecule or Atom Cloud’s Properties dialog. For example, set the Working Data Local Storage Directory property to `=C://Boomi//local` \(for Windows\) or to `=/opt/Boomi/local` \(for Linux\). Refer to the topic [ Enabling Local Storage for a Molecule or Atom Cloud](../Integration%20management/t-atm-Enabling_local_storage_for_a_Molecule_or_Atom_Cloud_8861cfb6-79fa-46bc-a957-a4a3cfa45d5f.md).

Boomi strongly recommends storing runtime assets in the local directory. You can do this by selecting the *Use Local Storage for Runtime Assets* setting on the Properties panel's Basic tab.

To set a different working data storage location for each node in a Molecule or Atom Cloud, specify them in node-specific container.properties files. Refer to the topic [Add a Node-Specific container.properties file](../Integration%20management/t-atm-Adding_node-specific_container_properties_file_87133ce8-ed21-463b-a7ed-01c3b81a5d0f.md).

:::note

Boomi recommends *not using* the system’s /temp directory as the local working data storage location because this directory may be cleaned out in a way that would interfere with process execution.

:::
-->
### Partitioned storage for multi-tenant Atom Clouds for working data  

You can configure multi-tenant Atom Clouds to use partitioned storage for account-specific working data. With partitioned storage, account directories are spread among multiple shared network directories instead of all residing in the Atom Cloud installation directory. This spreads network I/O load across multiple file servers and allows independent backups and restores of smaller subsets of accounts. If configured, this will override the Working Data Local Storage Directory.

To enable and configure partitioned storage for an Atom Cloud, set the Account Working Data Directories property \(`com.boomi.container.accountsDirs`\) in the Atom Cloud’s Properties dialog to specify multiple shared network directories, separated with a semicolon. For example `com.boomi.container.accountsDirs=\\\\fileserver1\\Cloud\\accounts;\\\\fileserver2\\Cloud\\accounts`. Refer to the [Enabling Partitioned Storage for an Atom](../Integration%20management/t-atm-Enabling_partitioned_storage_for_an_Atom_Cloud_97e78d1c-3823-4bb1-9277-6225005e15cd.md) Cloud topic.

When partitioned storage is enabled, account directories are spread between the specified locations for load balancing that is based primarily on the amount of free disk space and secondarily on the count of previously assigned accounts. As new accounts are added to the Atom Cloud, they are assigned to the specified locations based on the same criteria.