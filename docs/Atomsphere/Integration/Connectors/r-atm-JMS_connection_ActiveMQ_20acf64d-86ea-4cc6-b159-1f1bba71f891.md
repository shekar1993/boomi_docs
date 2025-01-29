# JMS (Legacy) connection: ActiveMQ Classic 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-20acf64d-86ea-4cc6-b159-1f1bba71f891"/>
</head>


By enabling ActiveMQ, the JMS (Legacy) connector can connect to the ActiveMQ provider.

To enable ActiveMQ, upload the following JAR files into your Integration account library \(**Settings** \> **Account Information and Setup** \> **Account Libraries**\), add those files to a a JMS type Custom Library component, and deploy the component to the appropriate Atom, Molecule, Atom Cloud, or environment.

-   `activemq-broker.jar` — located in the `<activemq_home>/lib` directory. 

-   `activemq-client.jar` — located in the `<activemq_home>/lib` directory. 

-   `geronimo-spec-j2ee-management.jar` — located in the `<activemq_home>/lib` directory.

Upload the JAR files into your Integration account library (**Settings > Account Information** and **Setup > Account Libraries**). For more information, see the topics [Creating a Custom Library component](../../Integration/Process%20building/t-atm-Creating_a_Custom_Library_Component_8fce64fb-4b85-4977-9876-e0d616526228.md), and [Custom library deployment considerations](../../Integration/Process%20building/c-atm-Custom_library_deployment_considerations_7fccfe31-e438-4fa6-bab0-7f395eef5fe3.md) to deploy the appropriate Atom, Molecule, Atom Cloud, or environment. Uploaded or imported files first pass through a virus scanner. The upload or import results in an error if it detects a virus, and then rejects the file. If an error persists, contact Boomi Support.

:::note

Uploaded or imported files pass through a virus scanner first. If the scan detects a virus, you receive an error message, and the scan rejects the file. If an error persists, contact Boomi Support.

:::


## Communication Options tab 

**JMS Server Type** - 
Select ActiveMQ to see default settings specific to ActiveMQ are available.

**Connection Factory JNDI Lookup** - 
Set to `ConnectionFactory`.

**Initial Context Factory** - 
A text field where users can input their JDNI initial context factory object into .

**Provider URL** - 
A text field where users can input the URL to point to your ActiveMQ Classic server into.

**JMS Properties** - 
\(Optional\) Used to add JMS property names and values. Properties are case-sensitive. 