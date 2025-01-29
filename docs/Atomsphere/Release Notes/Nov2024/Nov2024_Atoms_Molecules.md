# Atoms, Molecules, and Atom Clouds November 2024 Release Notes

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-02a217b0-f62d-4ac4-bd57-d0f820eeca61"/>
</head>


:::important
## Runtime Docker image versions 3 and 4 deprecation notice: 
As of August 10, 2024 the version 3 and version 4 Docker images for Atoms, Molecules, and Clouds are deprecated. Customers still using these versions should plan to upgrade to the latest version (version 5) at your earliest convenience. The versions will be retired February 2025, after which they will no longer be supported or maintained. For details on this deprecation and how to upgrade, refer to this [Knowledge article](https://community.boomi.com/s/article/Runtime-Docker-image-version-3-and-version-4-deprecation).
:::

**We added these features:**

 - **Resiliency Improvements**

   - Made several internal improvements to monitor the health and status of Atom workers. These improvements ensure that workers are healthy before proceeding with executions and adds a “Atom Worker Heartbeat Timeout” property in the Advanced tab. (RUN-7777) 

   - Improved the resiliency of the internal logging framework for the runtime, ensuring the Async Logger is up and running. (RUN-7772)


- **Java updates**

  - Atom, Molecules, and Atom Cloud installers and upgraders are updated to Java version 11.0.24.8.1 
  (RUN-7287)

- **Docker image updates - Published in [DockerHub](https://hub.docker.com/u/boomi)**

  - V3 and v5 images are updated to Java version 11.0.24.8.1 

  - Alpine images are updated to version 3.20.0

  - Redhat v5 images are updated to version 9.4-1194
  
  (RUN-7662, RUN-7663, RUN-7288, RUN-7291) 

- **Java Changes for new Runtime Installs**

  - Updated the default behavior for Java 11.0.24.8.1, which disables DTLSv1.0 and adds new security compatibility for containers and new installations using JVM_DEFINED. Older versions need to re-enable this property. (RUN-7582, RUN-7583)

- **Runtime File System**

  :::note
  Addressed an issue where custom `java.library.path` settings were unintentionally overwritten due to the JRE directory naming improvements introduced in the November 2024 Runtime release (RUN-6441 below). To resolve the issue, we released patch version 24.11.5 that disables the JRE directory renaming feature.
  If you took the Runtime release with these JRE directory renaming changes, you will face issues with `java.library.path` getting overwritten and java updates not working as expected. To resolve this, you will need to manually apply this patch  and follow the steps in [this article](https://community.boomi.com/s/article/How-to-fix-accessing-your-JRE-after-taking-the-November-2024-runtime-release) to restore your custom JVM settings.
  For Runtimes that have not yet taken the November release, no action is needed.
  :::

  - Within the runtime installation directory, the `jre_backup` directory is renamed to `jre-a` to avoid potential confusion. As a reminder, the current Java alternates between the `jre` and `jre-a` directories with each Java update; there is not a static “backup” directory. For clustered runtimes, if the “Use Local Storage for Runtime Assets” property is enabled, the `jre-a` directory is also copied to local nodes. (RUN-6441)

  - Runtime property validation added to ensure the “Working Data Local Storage Directory” path does not reside within the runtime’s installation directory when “Use Local Storage for Runtime Assets” is enabled. (RUN-7309)
 

**We fixed these issues:**

- Runtimes no longer need to be restarted after new or updated Custom Library components are deployed. However, if you are using runtime version 24.11.4 or later, you will need to restart your runtimes. This will be fixed in a future release. (RUN-6370)

- Runtimes no longer fill up and leave connections open. Connections are now finalized properly. (RUN-6893)

- In an integration process, the **Execution Property ”Atom Name”** now correctly returns the name of the Cloud Attachment instead of the Cloud Molecule for newly created Cloud Attachments. (RUN-4347)

- We resolved an error where executions using JavaScript custom scripting with Custom Library components were unexpectedly failing after the November runtime release. You can now successfully run JavaScript custom scripting processes with Custom Library components. (RUN-8056)
