# Atoms, Molecules, and Atom Clouds 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-ba90e0da-b4a9-4fa8-80e3-d11c89a74a69"/>
</head>





## Atom management 

Features:

-   You can use the property **Set Local Working Directory** in the Properties panel's Advanced tab to set a local working directory to which custom libraries are copied for each node in a cluster when they are downloaded or updated. \(RUN-2432\)


To learn more about this feature, see the topic [Properties panel, Advanced tab](/docs/Atomsphere/Integration/Integration%20management/r-atm-Properties_panel_Advanced_tab_c39737e8-1b16-4fdd-b414-152694364c14.md).

-   When custom libraries are undeployed, they are also deleted from the local work node specified in the **Set Local Working Directory** property for all nodes in a cluster. \(RUN-4156\)





 To learn more about this feature, see the topic [Properties panel, Advanced tab](/docs/Atomsphere/Integration/Integration%20management/r-atm-Properties_panel_Advanced_tab_c39737e8-1b16-4fdd-b414-152694364c14.md).

-   To properly scale down runtimes that use queues without data loss, all queue messages from the node being offboarded are transferred to the node that is performing the offboarding logic. \(RUN-3994\)

    **Warning:** The scale down will not work as expected when the listener of the queue is paused. This issue can be resolved by applying patch v23.02.2 to your runtimes. \(RUN-4821\)


-   You can use the property **Disk Space Monitoring Account Auto Suspension** in the Properties panel's Advanced tab to set whether an account is automatically suspended when it exceeds its disk space allotment. By default, this property is enabled. \(RUN-4715\)


 To learn more about this feature, see the topic [Properties panel, Advanced tab](/docs/Atomsphere/Integration/Integration%20management/r-atm-Properties_panel_Advanced_tab_c39737e8-1b16-4fdd-b414-152694364c14.md).


Fixes:

-   This fix resolves an issue when the **Consume from Dead Letter Queue \(Point-to-Point Only\)** option was checked in the Queue Operation for an Atom Queue Listener process, the Queue Management page would stop loading. \(RUN-2632\)


-   This fix resolves an issue where aborted executions continued to show as **Pending** in the after an Atom, Molecule, or Atom Cloud was restarted. \(RUN-4538\)

-   This fix resolves an issue where Unicode characters in the name of an Atom, Molecule, or Atom Cloud were converting to underscores when the container was installed on a Linux system. \(RUN-4045\)


## Docker images 

Docker images are not released according to the or schedule, but may occur at any time.

Feature:

-   Docker images are modified to use Java version 11.0.17.8.1. \(RUN-4551\)


## Java upgrades 

Features:

-   The Atom, Molecule, and Atom Cloud installers and upgraders are modified to use Java version 11.0.17.8.1. \(RUN-4552\)

-   The security policy for Java version 11.0.17.8.1 includes properties that provide security compatibility for the previous version of Java. \(RUN-4555, RUN-4556\)

    To learn more about this feature, see the topic [Atom Security Policies object](https://developer.boomi.com/api/platformapi#tag/AtomSecurityPolicies).


Known Issues:

-   Recent [Java updates](https://www.oracle.com/java/technologies/javase/11-0-17-relnotes.html#JDK-8269039.) restrict the use of SHA-1 signed JARs in your Atoms, Molecules, or Atom Clouds, you will experience issues if you upgrade to Java version 11.0.17.8.1.

    Options to mitigate impact:

    -   Switch to the 2021.01 [security compatibility](/docs/Atomsphere/Integration/Integration%20management/t-atm-Controlling_Java_security_compatibility_e43f0426-0537-4530-b4f9-1381588b9fa1.md) option. If you are using a custom security policy, update your security policy by using the [Atom Security Policies object](https://developer.boomi.com/api/platformapi#tag/AtomSecurityPolicies). Required changes are described in the Security policy section of this page.

    -   Upgrade any SHA-1 signed JARs to a different algorithm to upgrade to the latest Java version without issue

-   The Java version for Windows multi-node Molecules and Atom Clouds can be upgraded only by using the upgrader script when all nodes are offline. You cannot use the Java schedule feature, the AtomSphere platform, or the Java upgrade object to upgrade the Java version. If any of the nodes are online when you use the script, the upgrade will fail. If a node fails to upgrade, you must manually restart the node to bring it back online. Because the Molecule or Atom Cloud has multiple nodes, upgrade failures on individual nodes will not cause any downtime. This issue will be resolved in RUN-4975.

    For more information about using the script to upgrade the Java version, see the topics [Upgrading an Atom or Molecule to Java 11](/docs/Atomsphere/Integration/Integration%20management/int-Upgrading_an_Atom_or_Molecule_to_Java_11_d46de877-3973-4353-95f8-d3e17f435b0e.md) and [Upgrading a Cloud Molecule to Java 11](/docs/Atomsphere/Integration/Integration%20management/int-Upgrading_a_Cloud_Molecule_to_Java_11_08fa8b36-f607-4dc9-b43b-c23be4d8a5d5.md).


## Security policy 

Feature:

-   For security compatibility, the following lines are added to the procrunner-HIGH.policy, procworker-HIGH.policy, and procbrowser-HIGH.policy files:

    -   `permission java.net.SocketPermission "${com.boomi.container.launchingHostAddr}:1380", "connect,resolve";`
    -   `permission java.security.SecurityPermission "getProperty.jdk.*";`
    
:::note  

If you use a custom security policy, these lines must be added under the codeBase `"file:${com.boomi.container.libDir}/-"`.

:::

\(RUN-4599, RUN-4556\)

This feature is in the Runtime Release.



To learn more about this feature, see the topic [Customizing a security policy file](/docs/Atomsphere/Integration/Integration%20management/t-atm-Customizing_a_security_policy_file_cda3e507-c7e5-44ff-882d-c568e5d718c4.md).


