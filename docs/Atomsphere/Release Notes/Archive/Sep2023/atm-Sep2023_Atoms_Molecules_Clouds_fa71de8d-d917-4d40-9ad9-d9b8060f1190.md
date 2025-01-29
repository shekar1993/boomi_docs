# Atoms, Molecules, and Atom Clouds

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-fa71de8d-d917-4d40-9ad9-d9b8060f1190"/>
</head>


**We added these features:**

-   Upgraded the Alpine Linux base image for Boomi Docker v4 images to version 3.18.2. \(RUN-5889\)
-   Upgraded Boomi Docker v3 and v4 images to Java version 11.0.20.8.1. \(RUN-5884\)
-   Upgraded the Atom, Molecule, and Atom Cloud installers and upgraders to Java version 11.0.20.8.1. \(RUN-5885\)
-   Following the August 2023 release patch, we reintroduced the new Atom classloading framework to provide more flexibility and reduce dependencies and conflicts when adding or upgrading new libraries within Atoms, scripts, plugins, and connectors. Classloaders default to RELAXED mode, which has the same functionality as the legacy framework, with no restrictions on access to core libraries. We will introduce additional modes in future releases.

    **Note:** If you use a custom PROC script, you must update to the latest version of the Boomi-managed scripts located in the bin folder of the container's install directory or add the `-Dcom.boomi.container.legacyClassLoader=${BOOMI_LEGACY_CLASS_LOADING}` environment variable to your existing script files.

    \(RUN-5977\)


**We fixed this issue:**

-   The Edit Process Property dialog loads correctly on the **Deployed Processes** page in the Boomi Enterprise Platform. \(RUN-195\)