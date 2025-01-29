# JMS (Legacy) connection: WebSphere MQ 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-d9d2db61-9c9e-4052-b2d2-97dffe6270a4"/>
</head>


By enabling WebSphere MQ, the JMS (Legacy) connector can connect to the WebSphere MQ provider.

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

4.  In the **Communications Options** tab, select **Use SSL?**.

5.  Select the appropriate option from the **SSL Cipher Suite** list.


## Communication Options tab 

The JMS WebSphere MQ connection supports single- and multi-instance QM connections. A multi-instance connection, which was introduced in WebSphere MQ V7 to provide failover, is a single queue manager identifier \(QMID\) for a queue manager running on one server and for another queue manager in standby on a different server. If the connection to the first host fails, the connector looks for the same queue manager on the standby server.

**JMS Server Type** - 
Select WebSphere MQ.

**Connection Type** - 
Set to single or multiple:

-   Single QM Connection — Used to connect to a single WebSphere MQ instance.

-   Multi-instance QM Connection — Used to connect to a multiple-instance WebSphere MQ queue manager.


**Hostname** \(Single QM Connection only\) - 
The name of the host where the queue manager is installed.

**Port** \(Single QM Connection only\) - 
Port used by the queue manager.

**Connection Name List** \(Multi-instance QM Connection only\) - 
A comma-separated list containing the IP addresses and ports of active and standby queue managers. For example: `ipaddress1(port1),ipddress2(port2)`

**Queue Manager** - 
The name of the queue manager to which you want to connect.

**Channel** - 
The name of the WebSphere MQ channel to use to connect to the queue manager.

**Use SSL** - 
If selected, a list of SSL cipher suites is available for selection.

**SSL Cipher Suite** - 
The JMS WebSphere MQ connection supports the following SSL cipher suites:

-   TLS\_ECDHE\_RSA\_WITH\_3DES\_EDE\_CBC\_SHA

-   TLS\_ECDHE\_RSA\_WITH\_AES\_128\_CBC\_SHA256

-   TLS\_ECDHE\_RSA\_WITH\_AES\_128\_GCM\_SHA256

-   TLS\_ECDHE\_RSA\_WITH\_AES\_256\_CBC\_SHA384

 -   TLS\_ECDHE\_RSA\_WITH\_AES\_256\_GCM\_SHA384

-   TLS\_RSA\_WITH\_AES\_128\_CBC\_SHA

-   TLS\_RSA\_WITH\_AES\_128\_CBC\_SHA256

-   TLS\_RSA\_WITH\_AES\_128\_GCM\_SHA256

-   TLS\_RSA\_WITH\_AES\_256\_CBC\_SHA

-   TLS\_RSA\_WITH\_AES\_256\_CBC\_SHA256

-   TLS\_RSA\_WITH\_AES\_256\_GCM\_SHA384

**Time to Live** - 
A field to set the length of time in milliseconds from its dispatch time that a produced message should be retained by the message system. The value has to be greater or equal to zero. Zero indicates that the message does not expire. 

**Tracking Direction** - 
A read-only setting to display the document tracking direction for write and execute operations, the options are **Input Documents** or **Output Documents**. The configuration of this read-only setting affects which document appears in **Process Reporting**.