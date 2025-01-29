# Atoms, Molecules, and Atom Clouds 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-c853d78d-1459-4fc6-b051-c364c392d4b5"/>
</head>





## Atom management 

Fixes:

-  This fix resolves an issue where Japanese characters in a property value were being saved in an Atom, Molecule, or Atom Cloud's file system with the equivalent Unicode character instead of Japanese characters. (RUN-4122)



-   This fix resolves an issue where after an Atom, Molecule, or Atom Cloud was successfully installed on a Linux operating system, the container name was overridden with invalid characters on the Properties panel, Basic tab. (RUN-4120)




## Cloud management 

Feature:

-   Using a debug header on a Low Latency process results in the process running in Low Latency Debug execution mode, regardless of the default Workload under the Cloud's Attachment Quotas. For example, a Low Latency process set to General Workload that uses a debug header will run in Low Latency Debug execution mode. \(RUN-5351\)


To learn more about this feature, see the topic [Low latency processes](/docs/Atomsphere/Integration/Process%20building/c-atm-Low_latency_processes_af9912ba-d4c8-4754-baeb-69bd9a41c48c.md).


## Docker images 

Boomi Docker images are not released according to the Runtime Release or Platform Release schedule, but may occur at any time.

Feature:

-   Docker images are modified to use Java version 11.0.18.10.1. \(RUN-4848\)


## Java upgrades 

Features:

-  A banner displays in the Boomi Enterprise Platform on the Atom Information and Java Information panels warning that use of SHA-1 algorithms is restricted in recent Java updates. If the Atom, Molecule, or Atom Cloud is already on the latest Java version, the banner does not display. (RUN-5006, RUN-5178)

    Options to mitigate impact if you use SHA-1 algorithms:

    -   Switch to the 2021.01 [security compatibility](/docs/Atomsphere/Integration/Integration%20management/t-atm-Controlling_Java_security_compatibility_e43f0426-0537-4530-b4f9-1381588b9fa1.md) option. If you are using a custom security policy, update your security policy by using the [Atom Security Policies object](https://developer.boomi.com/api/platformapi#tag/AtomSecurityPolicies). Required changes are described in the Security policy section of this page.

    -   Upgrade any SHA-1 signed JARs to a different algorithm to upgrade to the latest Java version without issue




    To learn more about this feature, see the topics [Atom information panel](/docs/Atomsphere/Integration/Integration%20management/r-atm-Atom_information_panel_dccc9263-3610-4fb2-81ef-5ff5c98b7afd.md) and [Java information panel](/docs/Atomsphere/Integration/Integration%20management/int-Java_information_panel_f3d5ead4-d23a-4420-a649-5178a2417fdf.md).

-   The Atom, Molecule, and Atom Cloud installers and upgraders are modified to use Java version 11.0.18.10.1. \(RUN-4849\)

    To learn more about this feature, see the topics [Upgrading an Atom or Molecule to Java 11](/docs/Atomsphere/Integration/Integration%20management/int-Upgrading_an_Atom_or_Molecule_to_Java_11_d46de877-3973-4353-95f8-d3e17f435b0e.md), [Upgrading a Cloud Molecule to Java 11](/docs/Atomsphere/Integration/Integration%20management/int-Upgrading_a_Cloud_Molecule_to_Java_11_08fa8b36-f607-4dc9-b43b-c23be4d8a5d5.md), and [Upgrading an Atom, Molecule, or Atom Cloud to Java 11 directly from Atom management](/docs/Atomsphere/Integration/Integration%20management/int-Upgrading_an_atom_molecule_or_atom_cloud_to_java_11_directly_from_atom_management_bdea4653-92de-4ee7-9f42-e11684546e02.md).


Fix:

-  This fix resolves an issue where multi-node Windows Atoms, Molecules, and Atom Clouds were unable to upgrade to the latest Java version by using the Java Upgrade object, the Boomi Enterprise Platform, or the Java Scheduling feature. (RUN-4975)


## Process reporting 

Fix:

-   This fix resolves an issue on multi-node Molecules that have the custom property `com.boomi.container.enableOnlySharingDocumentsIfNeeded` enabled where, when a process ran on a non-head node, documents of Trading Partner listeners were not available to view and rerun on the Process Reporting page. \(RUN-4626\)






## Security 

:::info

As part of ongoing efforts to align with the latest compliance standards and to best safeguard data for Boomi customers, we are disabling TLS v1.1 on all Boomi Atom Clouds and Hub Clouds on March 6, 2023. The more secure encryption protocol, TLS v1.2, must be used to make a secure connection moving forward. On February 27, 2023, TLS v1.1 will be disabled on all Boomi Test Atom Cloud endpoints to provide you the opportunity to take action, if necessary, to ensure that clients making these connections support TLS v1.2 and avoid any interruption in service. \(CLOUD-843, CLOUD-1978\)

:::