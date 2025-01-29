# JMS v2 connection: WebSphere MQ 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-08218f66-b793-483e-90c5-72a22039c02d"/>
</head>


By enabling WebSphere MQ, the JMS v2 connector can connect to the WebSphere MQ provider.

To enable WebSphere MQ messaging, upload the following JAR files into your Integration account library \(**Setup \> Account Libraries**\), add those files to a Custom Library component, and deploy the component to the appropriate Atom, Molecule, Atom Cloud, or environment.

**WebSphere MQ 9.x**

-   com.ibm.mq.headers.jar
-   com.ibm.mq.jmqi.jar
-   com.ibm.mqjms.jar
-   com.ibm.mq.jar
-   com.ibm.mq.pcf.jar
-   connector.jar
-   dhbcore.jar
-   fscontext.jar
-   jms.jar
-   jndi.jar
-   providerutil.jar

**WebSphere MQ 8.0**

-   com.ibm.mq.headers.jar
-   com.ibm.mq.jmqi.jar
-   com.ibm.mqjms.jar
-   dhbcore.jar
-   fscontext.jar
-   jndi.jar
-   providerutil.jar

**WebSphere MQ 7.x**

-   com.ibm.mq.headers.jar
-   com.ibm.mq.jmqi.jar
-   com.ibm.mqjms.jar
-   dhbcore.jar
-   fscontext.jar
-   jndi.jar
-   providerutil.jar

Upload the JAR files into your Integration account library (**Settings > Account Information** and **Setup > Account Libraries**). For more information, see the topics [Creating a Custom Library component](../../Integration/Process%20building/t-atm-Creating_a_Custom_Library_Component_8fce64fb-4b85-4977-9876-e0d616526228.md), and [Custom library deployment considerations](../../Integration/Process%20building/c-atm-Custom_library_deployment_considerations_7fccfe31-e438-4fa6-bab0-7f395eef5fe3.md) to deploy the appropriate Atom, Molecule, Atom Cloud, or environment. Uploaded or imported files first pass through a virus scanner. The upload or import results in an error if it detects a virus, and then rejects the file. If an error persists, contact Boomi Support.

:::note

Uploaded or imported files pass through a virus scanner first. If the scan detects a virus, you receive an error message, and the scan rejects the file. If an error persists, contact Boomi Support.

:::

**Secure Sockets Layer \(SSL\) connection**

Perform these steps to connect using SSL for secure data transmission:

1.  Add this statement to the vmoptions.properties file:
 `-Dcom.ibm.mq.cfg.useIBMCipherMappings=false`
2.  Install unlimited strength policy jars on the Atom.

3.  Import the certificate specified in WebSphere MQ into the running Atom's Java keystore.

4.  In the **Connection tab**, select **Use SSL**.

5.  Select the appropriate option from the **SSL Cipher Suite** list.


## Connection tab

The JMS WebSphere MQ connection supports single- and multi-instance QM connections. A multi-instance connection, which was introduced in WebSphere MQ V7 to provide failover, is a single queue manager identifier \(QMID\) for a queue manager running on one server and for another queue manager in standby on a different server. If the connection to the first host fails, the connector looks for the same queue manager on the standby server.

- **Use Authentication** - A checkbox to indicate whether authentication is required to establish the connection to the service or not. Selecting this checkbox will display the **Username** and **Password** fields. 

- **Username** - A text field to enter your username to log into your service account. This is a conditional field that appears when **Use Authentication** is selected.

- **Password** - A text field to enter your password to log into your service account. This is a conditional field that appears when **Use Authentication** is selected.

- **Host Name** - A text field to enter the Service URL. This is a conditional field that appears when **WebSphere MQ - Single QM** is selected.

- **JMS Version** - A dropdown where you can choose to use JMS v.1.1 or 2.0.

- **Server Type** - A dropdown listing all the services supported by the connector. Generic JNDI is the default option. 

- **Port** - An integer field to enter the port number used by the **Queue Manager**. This is a conditional field that appears when **WebSphere MQ - Single QM** is selected.

- **Queue Manager** - A text field to enter the name of the **Queue Manager** for the connection. This is a conditional field that appears when **WebSphere MQ - Single QM** is selected.

- **Channel** - A text field to enter the name of the WebSphere MQ channel used for connecting to the **Queue Manager**. This is a conditional field that appears when **WebSphere MQ - Single QM** is selected.

- **Use SSL** - A checkbox to display a list of SSL cipher suites you can use to establish the connection. This is a conditional field that appears when **WebSphere MQ - Single QM** or **WebSphere MQ - Multi-Instance QM** is selected.

- **SSL Cipher Suite** - A dropdown field to indicate the SSL Cipher Suite. If the desired suite is not listed, select **Custom SSL Cipher Suite**. This is a conditional field that appears when **WebSphere MQ - Single QM** or **WebSphere MQ - Multi-Instance QM** is selected.

- **Custom Cipher Suite** - A text field to indicates the name of the custom SSL Cipher Suite. This value is ignored if **Custom SSL Cipher Suite** is not selected in the previous dropdown. This is a conditional field that appears when **WebSphere MQ - Single QM** or **WebSphere MQ - Multi-Instance QM** is selected.

- **Connection Name List** - A text field to list the URLs and ports where the servers of the cluster are hosted. Enter a comma-separated list containing the IP addresses and ports of active and standby queue managers using the following format: ip-address1(port1),ip-address(port2). For example: `127.0.0.1(5555),127.0.0.2(5555)`. This is a conditional field that appears when **WebSphere MQ - Multi-instance QM** is selected.

- **Use Connection Pool** - A checkbox to configure connection pooling. See the topic [JMS V2 Connection](../Connectors/JMS_V2_connection_01a7d7ed-a131-42f8-9b62-9460e6a90558.md) to learn more. 