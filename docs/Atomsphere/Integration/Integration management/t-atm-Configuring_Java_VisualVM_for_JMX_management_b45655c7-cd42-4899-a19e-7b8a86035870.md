# Configuring Java VisualVM for JMX management 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-b45655c7-cd42-4899-a19e-7b8a86035870"/>
</head>


Configure Java VisualVM to manage resources.

## Before you begin

To monitor the status of an Atom, first enable Remote JMX (Java Management Extensions) on the Atom.

## About this task

Next configure a Java monitoring tool for JMX management, connect to the Atom, and restart the Atom. In this task, Java VisualVM is used, but you can configure and use any Java monitoring tool that enables you to invoke JMX operations remotely. Java VisualVM is not packaged as part of the Boomi-provided JDK during the Atom installation. You can manually download the JDK manually to use Java VisualVM [here](https://visualvm.github.io/). If you are using an Atom, you must install a JDK to use this tool. If you are running a Molecule or Atom Cloud, you should already have a JDK installed because it was required to install the Molecule or Atom Cloud.

The Java VisualVM tool does not come with JMX Management installed by default. You can install it by using the plug-in that is available in Java VisualVM.

## Procedure


1.  Locate and run `jvisualvm.exe`. This file is located in the `<JDK_Home>\bin` directory.

    Java VisualVM starts.

2.  Select **Tools** \> **Plugins**.

    The Plugins dialog opens.

3.  Click the **Available Plugins** tab.

4.  In the **Install** column, turn on the check box next to the **VisualVM-MBeans** plug-in.

5.  Click the **Install** button.

6.  Follow the on-screen prompts to complete the installation.

7. **Optional:** You may need to restart Java VisualVM.

    After Java VisualVM is restarted, you can connect to the Atom that is running on port 5002 \(or the port that you selected when you enabled Remote JMX on the Atom\).

8.  Select **File** \> **Add JMX Connection**.

    The Add JMX Connection dialog opens.

9.  In the Connection field enter the host name of the Atom, a colon, and the port number.

    For example, if the Atom host name is “atoms6” and you used port 5002, you would enter **atoms6:5002**.

10. Click **OK**.

    The host name and port are added to the Applications list.

11. In the Application list, double-click the **atoms6:5002** entry that you just added.

    A new tab named **atoms6:5002** opens in the right pane.

12. On the new tab, click the **MBeans** tab.

    A categorized list of MBeans appears. You can browse the MBeans in the Atom. Any MBean that begins with “com.boomi” controls the Atom.

13. To use an MBean to restart the Atom, click the plus sign \(+\) next to **com.boomi.container.services** to expand the list, then click **ContainerController**.

14. Click the **Operations** tab in the right pane.

15. Click the **restart** button.

    A message dialog opens, indicating that the method was successfully invoked.

## Results


Now you are set up to monitor the status of the Atom.