# Enabling remote JMX on an Atom 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-1a1625d0-330d-43c6-a765-42502d7768ec"/>
</head>


To monitor the status of an Atom, use the **Properties** panel to enable Remote JMX \(Java Management Extensions\) for the Atom.

## Before you begin
You must have the Atom Management privilege to perform this task. If you have the Atom Management Read Access privilege, you cannot perform the task.

## About this task

If you are monitoring the status of a Molecule or Atom Cloud, setting the Remote JMX properties enables JMX on each node in the cluster. To read more about monitoring and managing using JMX technology, see the articles [Java 8 JMX enablement options](http://docs.oracle.com/javase/8/docs/technotes/guides/management/agent.html) or [Java 11 JMX enablement](https://cr.openjdk.java.net/~iris/se/11/latestSpec/api/java.base/java/net/doc-files/net-properties.html) options depending on which version of Java you use.

## Procedure

1.  Go to **Manage** \> **Atom Management**.

2.  Select the Atom from the list.

3.  In Settings & Configuration, click **Properties**.

    The Atom Properties panel opens.

4.  Click the **Advanced** tab.

5.  Select the **JMX Remote Port** property \(`-Dcom.sun.management.jmxremote.port`\), click **![](../Images/main-ic-plus-sign-white-in-blue-circle-16_98f7af60-dd5f-4037-90cd-05cc9dfc5502.jpg) Add a Property**, and type a port number in the Property Value field.

    The recommended port is 5002. If port 5002 is not available, you can specify a different port. Make sure the port is open in the firewall and that no two Atom containers use the same port number.

    **Note:** In order to specify the JMX Remote Port and JMX RMI Port properties, you must also set the JMX Remote SSL and JMX Remote Authentication properties to false even if you do not intend to use them in your configuration. If you do not intend to use them, set both properties to FALSE, otherwise see the following options.

6.  Select the **JMX Remote RMI Port** property \(`-Dcom.sun.management.jmxremote.rmi.port`\), click **![](../Images/main-ic-plus-sign-white-in-blue-circle-16_98f7af60-dd5f-4037-90cd-05cc9dfc5502.jpg) Add a Property**, and type a port number in the Property Value field.

    The recommended port is 5002. If port 5002 is not available, you can specify a different port. Make sure the port is open in the firewall and that no two Atom containers use the same port number.

    **Note:** In order to specify the JMX Remote Port and JMX RMI Port properties, you must also set the JMX Remote SSL and JMX Remote Authentication properties to false even if you do not intend to use them in your configuration.

7.  Select the **JMX Remote SSL** property \(`-Dcom.sun.management.jmxremote.ssl`\) and click **![](../Images/main-ic-plus-sign-white-in-blue-circle-16_98f7af60-dd5f-4037-90cd-05cc9dfc5502.jpg) Add a Property**.

    The Property Value check box is cleared by default, which means the property is set to false and the SSL security protocol is not used.

    To enable SSL security, select the check box. The property is set to true.

8.  Select the **JMX Remote Authentication** property \(`-Dcom.sun.management.jmxremote.authenticate`\) and click **![](../Images/main-ic-plus-sign-white-in-blue-circle-16_98f7af60-dd5f-4037-90cd-05cc9dfc5502.jpg) Add a Property**.

    The Property Value check box is cleared by default, which means the property is set to false and password authentication is not used.

    To enable authentication, select the check box. The property is set to true. A jmxremote.password file is required.

9.  Click **Save**.

    Because changes to these properties do not take effect until the Atom or Molecule is restarted, you are prompted to restart. You have the option to restart now or restart later.

## Next steps

After you have enabled Remote JMX on the Atom, configure a Java monitoring tool such as JVisualVM for JMX management, connect to the Atom, and then restart the Atom.