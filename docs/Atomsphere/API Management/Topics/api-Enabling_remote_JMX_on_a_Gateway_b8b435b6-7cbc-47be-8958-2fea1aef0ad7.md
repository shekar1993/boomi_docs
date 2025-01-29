# Enabling remote JMX on an API Gateway 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-b8b435b6-7cbc-47be-8958-2fea1aef0ad7"/>
</head>


To monitor the status of an API Gateway, use the **Properties** panel to enable Remote JMX \(Java Management Extensions\) for the Atom.

## Before you begin

If you are monitoring the status of a Molecule or Atom Cloud, setting the Remote JMX properties enables JMX on each node in the cluster. To read more about monitoring and managing using JMX technology go to [Java 7 JMX enablement options](http://docs.oracle.com/javase/7/docs/technotes/guides/management/agent.html) or [Java 8 JMX enablement options](http://docs.oracle.com/javase/8/docs/technotes/guides/management/agent.html).

## Procedure

1.  Go to **Manage** \> **Atom Management**.

2.  Select the Atom from the list.

3.  In Settings & Configuration, click **Properties**.

    The Atom Properties panel opens.

4.  Click the **Advanced** tab.

5.  Select the **JMX Remote Port** property \(`-Dcom.sun.management.jmxremote.port`\), click **![](../Images/main-ic-plus-sign-white-in-blue-circle-16_98f7af60-dd5f-4037-90cd-05cc9dfc5502.jpg) Add a Property**, and type a port number in the Property Value field.

    The recommended port is 5002. If port 5002 is not available, you can specify a different port. Make sure the port is open in the firewall and that no two Atom containers use the same port number.

6.  Select the **JMX Remote RMI Port** property \(`-Dcom.sun.management.jmxremote.rmi.port`\), click **![](../Images/main-ic-plus-sign-white-in-blue-circle-16_98f7af60-dd5f-4037-90cd-05cc9dfc5502.jpg) Add a Property**, and type a port number in the Property Value field.

    The recommended port is 5002. If port 5002 is not available, you can specify a different port. Make sure the port is open in the firewall and that no two Atom containers use the same port number.

7.  Select the **JMX Remote SSL** property \(`-Dcom.sun.management.jmxremote.ssl`\) and click **![](../Images/main-ic-plus-sign-white-in-blue-circle-16_98f7af60-dd5f-4037-90cd-05cc9dfc5502.jpg) Add a Property**.

    The Property Value check box is cleared by default, which means the property is set to false and the SSL security protocol is not used.

    To enable SSL security, select the check box. The property is set to true.

8.  Select the **JMX Remote Authentication** property \(`-Dcom.sun.management.jmxremote.authenticate`\) and click **![](../Images/main-ic-plus-sign-white-in-blue-circle-16_98f7af60-dd5f-4037-90cd-05cc9dfc5502.jpg) Add a Property**.

    The Property Value check box is cleared by default, which means the property is set to false and password authentication is not used.

    To enable authentication, select the check box. The property is set to true. A jmxremote.password file is required.

9.  Click **Save**.

    Because changes to these properties do not take effect until the Atom or Molecule is restarted, you are prompted to restart. You have the option to restart now or restart later.

After you have enabled Remote JMX on the Atom, configure a Java monitoring tool such as JVisualVM for JMX management, connect to the Atom, and then restart the Atom.
