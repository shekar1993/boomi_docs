# JMS connection: Oracle AQ (WebLogic) 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-48b4015f-cadd-4a3e-8427-d1873e2991d0"/>
</head>


By enabling Oracle AQ (WebLogic), the JMS connector can connect to the Oracle AQ (WebLogic) provider.

Use the JMS Oracle AQ \(WebLogic\) connection component to connect to Oracle AQ via WebLogic. Use the JMS Oracle AQ connection component to connect with Oracle AQ directly when you do not want to maintain a WebLogic instance.



To enable Oracle AQ \(WebLogic\) messaging, upload the JAR files into your Integration account library (**Setup > Account Libraries**). For more information, see the topics [Creating a Custom Library component](../../Integration/Process%20building/t-atm-Creating_a_Custom_Library_Component_8fce64fb-4b85-4977-9876-e0d616526228.md), and [Custom library deployment considerations](../../Integration/Process%20building/c-atm-Custom_library_deployment_considerations_7fccfe31-e438-4fa6-bab0-7f395eef5fe3.md) to deploy the appropriate Atom, Molecule, Atom Cloud, or environment. Uploaded or imported files first pass through a virus scanner. The upload or import results in an error if it detects a virus, and then rejects the file. If an error persists, contact Boomi Support.

-   `wljmsclient.jar`

-   `wlthint3client.jar`

:::caution

Boomi does not recommend manually copying the `wljmsclient.jar` and `wlthint3client.jar` JAR files to the lib and userlib [installation directories for Atoms, Molecules, and Atom Clouds](../Atom,%20Molecule,%20and%20Atom%20Cloud%20setup/r-atm-Installation_directories_fec3863c-e459-439a-91c3-da8bea9b4fb8.md).

:::

## Communications Options tab 

**JMS Server Type** - 
Select Oracle AQ \(WebLogic\) to see default settings specific to Oracle AQ \(WebLogic\).

**Connection Factory JNDI Lookup** - 
The default is blank.

**Initial Context Factory** - 
The default is `weblogic.jndi.WLInitialContextFactory`.

**Provider URL** - 
The default is `t3://localhost:7001`. Typically, you need to change the Provider URL to point to your Oracle AQ server.

**JMS Properties** - 
\(Optional\) Used to add JMS property names and values.