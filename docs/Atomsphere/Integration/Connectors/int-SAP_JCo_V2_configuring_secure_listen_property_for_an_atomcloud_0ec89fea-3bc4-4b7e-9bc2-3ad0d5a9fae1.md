# Configuring Secure Listen Property for an Atom Cloud 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-0ec89fea-3bc4-4b7e-9bc2-3ad0d5a9fae1"/>
</head>


To enable the SAP JCo V2 connector on a Private Atom Cloud, change its security policy to Low. If you are using a Private Atom Cloud with Atom Worker enabled, you can perform a Secure Listen operation by configuring the secure listen property in Atom Management.

## Before you begin

Verify that you have the Atom Management privilege.

## Procedure

1.  Go to **Manage** \> **Atom Management**.

2.  Do one of the following:

    1.  If you are the owner of a Private Atom Cloud, select your Cloud from the list on the left.

    2.  If you are an account owner, select your Atom from the list on the left.

3.  Do one of the following:

    1.  If you are a Private Atom Cloud Owner, open the **Properties** panel.

    2.  If you are an Account Owner, open the **Account Properties** panel.

4.  Click the **Custom** tab.

5.  To enable the Secure Listen container property for an Atom Cloud:

    1.  Click **Add A Property** in the **Container Properties** section.

    2.  In the **Property Name** field, type as com.boomi.container.listen.secure.enabled.

    3.  In the **Property Value** field, enter True.

    By default, new Atom Clouds automatically enable Secure Listen and set this property to `True`. When set to `True`, the Atom Cloud and any single tenant containers \(Atom Cloud node's main JVM or Atom worker JVM\) support single tenant connectors allowing the listeners to run. To maintain backward compatibility, Clouds having this property previously set to `True` or `False` is respected, and is not changed. If required, you must manually change the setting.

6.  Click the **Advanced** tab.

7.  In the drop-down menu, select the **Atom Workers Enabled** property from the list and click **Add a Property**.

8.  Select the check box in the **Property Value** field next to the property name. By selecting the check box for this property, the Atom Cloud can use Atom workers. Atom workers are required when the **com.boomi.container.listen.secure.enabled** container property is set to True on the **Custom** tab.

9.  Click **Save**.

## Next steps

The changes to many of these properties do not take effect until the Atom or private Atom Cloud is restarted. You have the option to restart now or restart later. Only Atom and Cloud owners can restart them. Accounts that have an Atom in a Cloud cannot restart the Cloud. To learn more, see the topic [Enabling Secure Listen for an Atom Cloud](https://developer.boomi.com/docs/Connectors/DevelopConnectors/SecureListen/Configuring_an_atom_cloud_for_secure_listen).