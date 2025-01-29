# Atoms, Molecules, and Atom Clouds

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-c541e699-711b-45b2-a1c3-c66994d5bbea"/>
</head>


:::important
## Runtime Docker image versions 3 and 4 deprecation notice: 
As of August 10, 2024 the version 3 and version 4 Docker images for Atoms, Molecules, and Clouds are deprecated. Customers still using these versions should plan to upgrade to the latest version (version 5) at your earliest convenience. The versions will be retired February 2025, after which they will no longer be supported or maintained. For details on this deprecation and how to upgrade, refer to this [Knowledge article](https://community.boomi.com/s/article/Runtime-Docker-image-version-3-and-version-4-deprecation).
:::

**We added these features:**

- The Persisted Process Properties API object is now available to the Boomi AtomSphere API connector. Using the Get and Update operations, you can update and retrieve the Persisted Process properties of a specified Atom via the Boomi AtomSphere API connector. (RUN-163)
- The Atom Counters API object is now available to the Boomi AtomSphere API connector. Using the Get and Update operations, you can update and retrieve the counters of a specified Atom via the Boomi AtomSphere API connector.  (RUN-164)
- The Certificates Usage panel view is enhanced by introducing pagination within the table. You can view the list of processes associated with the certificate and navigate the list using the Previous and Next buttons. (RUN-7302)



**We fixed this issue:**

- The **Save** button will be grayed out on the Account Properties and Properties panels until the changes made to the Atom, Molecule, or Atom Cloud properties are saved successfully, preventing multiple clicks on the Save button. (RUN-6741)




<!-- - Queue messages are no longer lost after a pod is offboarded. RUN-6620--> 