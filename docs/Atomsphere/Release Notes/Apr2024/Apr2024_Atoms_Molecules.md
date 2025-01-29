# Atoms, Molecules, and Atom Clouds

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-27da168f-68cf-4a5a-9f18-6712f26dcc65"/>
</head>

Runtime features and fixes are not in the runtime release, unless otherwise noted.

**We added these features:**

- **Java updates**

  - Atom, Molecules, and Atom Cloud installers and upgraders are updated to Java version 11.0.22.7.1 (RUN-6497)

- **Docker image updates - Published in [DockerHub](https://hub.docker.com/u/boomi)**

  - v5 images are updated to Java version 11.0.22.7.1

  - Alpine v5 images are updated to Alpine version 3.19.1

  - RedHat v5 image are updated to RHEL 9.3-1552
  
  (RUN-6498, RUN-6551)

- The Container Image Version on the Startup Properties panel now displays which Boomi Docker image you are using. (RUN-6429)

- The user who created a local Atom or Atom Cloud is now captured and made available in both the [Atom object API](https://help.boomi.com/docs/atomsphere/integration/atomsphere%20api/r-atm-atom_object_abe420d8-8197-4136-9066-f412ed7160f6/#structure) and Platform [Audit Log](https://help.boomi.com/docs/atomsphere/integration/atomsphere%20api/r-atm-audit_log_object_f0f9b989-fa74-4591-bea9-f841c6a7bc3c/). (RUN-6285)
  
  :::note
  This information will only be available for new runtimes created after this release.
  :::

**We fixed these issues:**

- The Atom release upgrade no longer continues to download and store multiple updated files in the event of a failure. It now deletes older updates as intended. (RUN-5276)

- The US Eastern time zone offset is now displayed correctly in the Runtime Release Scheduling panel; that is, *(UTC-04:00) Eastern Daylight Time* and *(UTC-05:00) Eastern Standard Time*. (RUN-5912)

- The **View Process Logs** icon no longer appears for pending processes on the Process Reporting page, which caused an unexpected error when attempting to view or download the process logs. It now displays only when the process execution is finished. (RUN-406)

- Addressed an issue where the runtime's `container.properties` file could become corrupted during configuration updates under certain conditions, causing the runtime to not operate correctly. (RUN-6489)
  

