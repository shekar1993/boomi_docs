# Atoms, Molecules, and Atom Clouds January 2025 Release Notes

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-22ef9233-97a4-4f01-81d1-2baff7f04d46"/>
</head>

:::important
## Runtime Docker image versions 3 and 4 deprecation notice: 
As of August 10, 2024 the version 3 and version 4 Docker images for Atoms, Molecules, and Clouds are deprecated. Customers still using these versions should plan to upgrade to the latest version (version 5) at your earliest convenience. The versions will be retired February 2025, after which they will no longer be supported or maintained. For details on this deprecation and how to upgrade, refer to this [Knowledge article](https://community.boomi.com/s/article/Runtime-Docker-image-version-3-and-version-4-deprecation).
:::

**We added these features:**

- The `jre_backup` directory is now renamed to `jre_a` within the runtime installation directory, without overwriting custom `java.library.path` settings. (RUN-8193)
 

- Improved the resiliency and scalability of the internal logging framework for the runtime, including container and worker logs. These enhancements also monitor the health of the logging framework. (RUN-7988)



- **Java and Docker Image updates - Published in [DockerHub](https://hub.docker.com/u/boomi)**: 
  - Atom, Molecules, and Atom Cloud  
    installers and upgraders are updated to
    Java version 11.0.25.9.1
  - V3 and v5 images are updated to Java
    version 11.0.25.9.1 
  - Alpine images are updated to version
    3.20.3 
  - Redhat v5 images are updated to
    version 9.5-1731604394 
    
    (RUN-7791)
    Java and Docker Image updates are not in the runtime release.

- **Account Properties and Properties Panels Improvements**

    Provided more explicit information in the UI, making it easier for users to interact with UI elements such as:
    
  - Added the **Cancel** button on the loading spinner.
  - Displays information to inform users about platform values when the runtime is offline.
  - Returns an error message when loading Atom properties fails while the runtime is online.
  - Improved alert banner and messages when saving property values was successful or unsuccessful and when refreshing the  Account Properties page. 
  
     (RUN-7311)
 
**We fixed these issues:**

- Tooltip texts wrap up properly, improving readability in the Properties panel's Advanced tab. (RUN-7858)
-  The Account Properties panel now waits until all values are retrieved from the runtime before displaying information for Cloud Attachments. (RUN-5356)



