# JMS v2 connection: ActiveMQ Artemis 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-5bd0f70f-e0ed-4d1b-8743-61489a2edb2a"/>
</head>


By enabling ActiveMQ Artemis, the JMS connector can connect to the ActiveMQ Artemis provider.

To enable ActiveMQ Artemis, upload the following JAR files into your account library \(**Settings** \> **Account Information and Setup** \> **Account Libraries**\), add those files to a Custom Library component, and deploy the component to the appropriate Atom, Molecule, Atom Cloud, or environment.

-   `activemq-core-5.4.1.jar` — located in the `<activemq_home>/lib` directory. Your version might be different.

-   `geronimo-j2ee-management_1.1_spec-1.0.1.jar` — located in the `<activemq_home>/lib` directory.

Upload the JAR files into your Integration account library (**Settings > Account Information** and **Setup > Account Libraries**). For more information, see the topics [Creating a Custom Library component](../../Integration/Process%20building/t-atm-Creating_a_Custom_Library_Component_8fce64fb-4b85-4977-9876-e0d616526228.md), and [Custom library deployment considerations](../../Integration/Process%20building/c-atm-Custom_library_deployment_considerations_7fccfe31-e438-4fa6-bab0-7f395eef5fe3.md) to deploy the appropriate Atom, Molecule, Atom Cloud, or environment. Uploaded or imported files first pass through a virus scanner. The upload or import results in an error if it detects a virus, and then rejects the file. If an error persists, contact Boomi Support.

:::note

Uploaded or imported files pass through a virus scanner first. If the scan detects a virus, you receive an error message, and the scan rejects the file. If an error persists, contact Boomi Support.

:::


## Communication Options tab 

**JMS Server Type** - 
Select ActiveMQ Artemis to see default settings specific to ActiveMQ Artemis are available.

**Connection Factory JNDI Lookup** - 
 Set to `ConnectionFactory`.

**Initial Context Factory** - 
A text field where users can input their JNDI initial context factory object into.

**Provider URL** - 
A text field where users can input the URL to point to your ActiveMQ Artemis server to.

**JMS Properties** - 
\(Optional\) Used to add JMS property names and values.