# Atoms, Molecules, and Atom Clouds

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-3dfcd8f9-f532-441c-9654-4d65faeaa1a0"/>
</head>


## Runtime Docker image versions 3 and 4 deprecation notice: 
As of August 10, 2024 the version 3 and version 4 Docker images for Atoms, Molecules, and Clouds are deprecated. Customers still using these versions should plan to upgrade to the latest version (version 5) at your earliest convenience. The versions will be retired February 2025, after which they will no longer be supported or maintained. For details on this deprecation and how to upgrade, refer to this [Knowledge article](https://community.boomi.com/s/article/Runtime-Docker-image-version-3-and-version-4-deprecation).

## Atom Management page 

**We added these features:**

- We made the following changes within the **Atom Management** page to better clarify and differentiate Atom Cloud-related runtimes:

  - In the *Atom Information* panel, Atoms attached to an Atom Cloud now indicate the specific Cloud Molecule within that Atom Cloud it is running on. This determines the specific inbound/outbound IP addresses when connecting to [Boomi-hosted Atom Clouds](https://help.boomi.com/docs/Atomsphere/Platform/r-boo-Hostnames_and_IP_addresses_for_Atom_Clouds__0d150522-9457-4c37-b5a9-a8ad664490bd). (RUN-6745)

  - The Atom now also has **Type** `Cloud Attachment` to differentiate from Molecules used with private Atom Clouds. Previously, both of these types of runtimes had **Type** `Cloud`. (RUN-6745)

  - For private Atom Cloud owners, Cloud Molecules now has the **Type** `Cloud Molecule` in the Atom Information panel to distinguish it from Cloud Attachments. (RUN-6745)

  - Additionally, Cloud Molecules are now displayed in the format ***Atom Name*** (***Cloud Name***) to identify their associated Atom Cloud more easily. Previously, the display name included the Host Name. This new naming is displayed in the Atom Management runtime selection pane, in Test Mode execution in the Build page, and in Execute Process dialog in the Process Reporting page. (RUN-7191)

  - The Cloud Molecule installer now consistently sets the user-entered name as the container name across the Atom Management page and local runtime configuration (`container.properties` file). Previously, the installer used the associated Atom Cloud’s name for the container name and set the user-entered name as the Host Name. (RUN-6748)

  - The **Atom ID** field on the Atom Information panel now has a **Copy** button. This allows you to copy the ID for reference or troubleshooting. (RUN-6746)

  To learn more about these features, see [Atom Information panel](/docs/Atomsphere/Integration/Integration%20management/r-atm-Atom_information_panel_dccc9263-3610-4fb2-81ef-5ff5c98b7afd.md).

## Atom Management

**We added these features:**

- Introduced a new container property, *Enable Persisted Connector Cache* (`com.boomi.container.connector.persistence.enabled`), that allows connector container owners to opt-in to enabling property persistence on their runtime. If enabled, all connectors that use the SDK Connector Property Persistence API will be able to persist, retrieve, and remove properties on the Atom’s shared file system. (CON-9104)

- If connector property persistence is enabled on a container, the container owner can filter out and allow only a specific set of connectorType values to use property persistence on that runtime. This filtering is accomplished by the creation of a comma-separated allow list, `com.boomi.container.connector.persistence.allowList`. (CON-9105)

- Undeploying a process will delete any connector properties file associated with that process. A re-deploy of an already deployed process does not affect the connector properties file. Similarly, a version change in a connector that is part of an already deployed process does not affect the connector properties file. (CON-9103)

**We fixed these issues:**

- Updated the procworker, procrunner, procbrowser, and Atom start script files (.sh and .ps1) to capture the log entries of JVM startup, including when it fails to start, in the `runner.log` file. To capture the log entries of JVM startup failure, add the custom container property `com.boomi.container.enableRunnerLogIfJVMFails`. This property is set to true by default. (RUN-2994)


  :::note 
  Following the August 2024 Runtime Release, release of this fix was postponed and will be rescheduled.
  :::

- Installing an Atom Cloud or Molecule using Docker no longer creates readiness files. (RUN-6976)
  
