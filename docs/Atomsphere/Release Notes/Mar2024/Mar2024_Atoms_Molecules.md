# Atoms, Molecules, and Atom Clouds

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-91c0350e-687a-496c-8a1d-5faceebba98a"/>
</head>

**Deferred**: Subsequent to the March 2024 Runtime release, features and fixes for the March platform release are postponed and will be rescheduled.

**We added these features:**

- The Container Image Version on the Startup Properties panel now display which Boomi Docker image you are using: Alpine or Red Hat Enterprise Linux. (RUN-6429)

**We fixed these issues:**

- The US Eastern time zone offset is now displayed correctly in the Runtime Release Scheduling panel; that is, *(UTC-04:00) Eastern Daylight Time* and *(UTC-05:00) Eastern Standard Time*. (RUN-5912)

- The **View Process Logs** icon no longer appears for pending processes on the Process Reporting page, which caused an unexpected error when attempting to view or download the process logs. It now displays only when the process execution is finished. (RUN-406)

- Addressed an issue where the runtime's `container.properties` file could become corrupted during configuration updates under certain conditions, causing the runtime to not operate correctly. (RUN-6489)
  
  This fix is in the Runtime Release. 

- Runtime Docker images were [published](https://hub.docker.com/u/boomi) for Alpine and RedHat OS on January 31st. This update includes internal-only changes. Additionally, the source code for the V5 images is now available in our [BitBucket repository](https://bitbucket.org/officialboomi/docker-images/src/main/) to enable customizations.(RUN-5987)
