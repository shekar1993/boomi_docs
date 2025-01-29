# Atoms, Molecules, and Atom Clouds 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-cee69fbf-a719-4f10-bb52-9caa75d6685c"/>
</head>


**Features:**

-   Docker v3 and v4 images are upgraded to Java version 11.0.19.7.1. \(RUN-5528\)
-   The Alpine Linux base image for Boomi Docker v4 images is upgraded to the latest version, 3.17.3. \(RUN-5493\)
-   The Atom, Molecule, and Atom Cloud installers and upgraders are modified to use Java version 11.0.19.7.1. \(RUN-5529\)

These features are not in the Runtime Release.

-   You can use Bridge mode for integration processes that use MLLP or Flow Services Server \(FSS\) connector listeners. \(RUN-5343\)
-   For Windows multi-node containers using an external JDK or Windows multi-node containers upgrading from Java 8 to Java 11, you must use the script to manually upgrade the Java version. \(RUN-5521\)
-   Worker maintenance tasks operate as their own scheduled tasks and are logged as `internal-worker-maintenance` group in the container logs. \(RUN-4572\)
-   If your Molecule or Atom Cloud currently uses a CUSTOM security policy, a warning message displays in the container log that includes the deprecation and retirement dates of CUSTOM security policies. You should [convert to a HIGH security policy](../../Integration/Integration%20management/int-Converting_from_a_custom_to_a_high_security_policy_6e30adbc-c806-497b-9e86-47b9487aa567.md) before the retirement date. \(RUN-4882\)

These features are in the Runtime Release.

**Fixes:**

-   Resolved an issue where deploying a plugin with a process group was throwing a null pointer exception for the plugins that hadn't been loaded. \(RUN-5449\)
-   Updated our patch release process to ensure that non-MSV patches are not forcefully pushed to all runtimes. \(RUN-5712\)
-   Resolved an issue where an internal classloader became null, causing a `java.lang.ClassCastException` in process executions until the node was restarted. This error occurred primarily in processes using the Azure Service Bus connector. \(ASE-34, RUN-5438, RUN-2889\)

These fixes are in the Runtime Release.