# JMS connection: Oracle AQ \(WebLogic\) 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-4a8381b7-4de4-42e1-a73f-66352e71248d"/>
</head>


By enabling Oracle AQ \(WebLogic\), the JMS connector can connect to the Oracle AQ \(WebLogic\) provider.

Use the JMS Oracle AQ \(WebLogic\) connection component to connect to Oracle AQ via WebLogic. Use the JMS Oracle AQ connection component to connect with Oracle AQ directly when you do not want to maintain a WebLogic instance.

To enable Oracle AQ \(WebLogic\) messaging, upload the following JAR files into your account library \(**Settings** \> **Account Information and Setup** \> **Account Libraries**\), add those files to a Custom Library component, and deploy the component to the appropriate Atom, Molecule, Atom Cloud, or environment.

-   `wljmsclient.jar`

-   `wlthint3client.jar`

>**Important:** Boomi does not recommend manually copying the wljmsclient.jar and wlthint3client.jar JAR files to the lib and userlib installation directories for Atoms, Molecules, and Atom Clouds.

## Communications Options tab 

**JMS Server Type** - 
Select Oracle AQ \(WebLogic\) to see default settings specific to Oracle AQ \(WebLogic\).

**Connection Factory JNDI Lookup** - 
Enter the JNDI name of the connection factory. For example, `jms/TestConnectionFactory`

**Initial Context Factory** - 
The default is `weblogic.jndi.WLInitialContextFactory`.

**Provider URL** - 
The default is `t3://localhost:7001`. Typically, you need to change the Provider URL to point to your Oracle AQ server.

**JMS Properties** - 
\(Optional\) Used to add JMS property names and values.