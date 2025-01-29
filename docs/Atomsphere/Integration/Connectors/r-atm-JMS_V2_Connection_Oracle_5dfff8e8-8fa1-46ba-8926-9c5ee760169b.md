# JMS v2 connection: Oracle AQ 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-5dfff8e8-8fa1-46ba-8926-9c5ee760169b"/>
</head>


By enabling Oracle AQ, the JMS v2 connector can connect to the Oracle AQ provider.

Use the JMS v2 Oracle AQ connection component to connect to Oracle AQ.



To enable Oracle AQ messaging, upload the following JAR files into your Integration account library (**Setup > Account Libraries**). For more information, see the topics [Creating a Custom Library component](../../Integration/Process%20building/t-atm-Creating_a_Custom_Library_Component_8fce64fb-4b85-4977-9876-e0d616526228.md), and [Custom library deployment considerations](../../Integration/Process%20building/c-atm-Custom_library_deployment_considerations_7fccfe31-e438-4fa6-bab0-7f395eef5fe3.md) to deploy the appropriate Atom, Molecule, Atom Cloud, or environment. Uploaded or imported files first pass through a virus scanner. The upload or import results in an error if it detects a virus, and then rejects the file. If an error persists, contact Boomi Support.

-   `wljmsclient.jar`

-   `wlthint3client.jar`

:::caution

Boomi does not recommend manually copying the `wljmsclient.jar` and `wlthint3client.jar` JAR files to the lib and userlib [installation directories for Atoms, Molecules, and Atom Clouds](../Atom,%20Molecule,%20and%20Atom%20Cloud%20setup/r-atm-Installation_directories_fec3863c-e459-439a-91c3-da8bea9b4fb8.md).

:::

## Communications Options tab 

**Server Type** - 
Select Oracle AQ to see default settings specific to Oracle AQ.

**Connection Factory JNDI Lookup** - 
The default is blank.

**Initial Context Factory** - 
A text field where users can input their JNDI initial context factory object into.

**Provider URL** - 
A text field where users can input the URL to point to your Oracle AQ server to.

**JDBC URL** - 
A conditional text field that is visible when **Server Type** is Oracle AQ.

**JMS Properties** - 
\(Optional\) Used to add JMS property names and values.