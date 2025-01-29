# Enabling verbose SSL logging in an Atom 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-2afc5bce-a6fc-42a4-851a-6bcf229b941c"/>
</head>


To enable debugging for troubleshooting issues with secure contexts, set the **Enable SSL Debug Logging** property on the **Properties** panel.

## Before you begin

You must have the Atom Management privilege to perform this task. If you have the Atom Management Read Access privilege, you cannot perform the task.


## About this task

The effect of setting this Atom property is equivalent to the effect of setting the property `javax.net.debug=all` in \<atom\_installation\_directory\>/bin/atom.vmoptions.

:::note

Enable this debug option only if you are working with Support and they recommend it for troubleshooting tricky SSL problems such as SSL handshakes, SSL/TLS packet transmissions, etc. Disable verbose SSL logging immediately after completing troubleshooting. Leaving verbose SSL logging on during general operations can adversely affect the Atom’s performance.

:::

## Procedure

1.  Go to **Manage** \> **Atom Management**.

2.  Select the Atom, Molecule, or Cloud Molecule from the list.

3.  In Settings & Configuration, click **Properties**.

    The Atom Properties panel opens.

4.  Click the **Advanced** tab.

5.  Select the **Enable SSL Debug Logging** property \(`com.boomi.container.debug.ssl`\), click **![](../Images/main-ic-plus-sign-white-in-blue-circle-16_98f7af60-dd5f-4037-90cd-05cc9dfc5502.jpg) Add a Property**, and select its Property Value check box.

6.  Click **Save**.

    Because changes to this property do not take effect until the Atom, Molecule, or Cloud is restarted, you are prompted to restart. You have the option to restart now or restart later.

## Next steps

Refer to this [Oracle article](http://docs.oracle.com/javase/7/docs/technotes/guides/security/jsse/ReadDebug.html) for more information about debugging SSL/TLS connections.