# Configuring Secure Listen Property for an Atom Cloud

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-6bd1e2d6-4f4d-485e-a672-7511fe6ec429"/>
</head>


To enable the connector on a Private Atom Cloud, change its security policy to Low. If you are using Private Atom Cloud with Atom Worker enabled, you can perform Secure Listen operation by configuring the secure listen property in the Atom Management.

Note: Make sure you have the Atom Management privilege to set the properties

## Before you begin

Verify that you have the Atom Management privilege.


**Procedure**

1.  Go to **Manage** \> **Atom Management**.

2.  Do one of the following:

    1.  If you are the owner of a Private Atom Cloud, select your Cloud from the list on the left.

    2.  If you are an account owner, select your Atom from the list on the left.

3.  Do one of the following:

    1.  **Private Atom Cloud Owner**: Open the **Properties** panel.

    2.  **Account Owner**: Open the **Account Properties** panel.

4.  Click the **Custom** tab.

5.  To enable the Secure Listen container property for an Atom Cloud:

    1.  Click **Add A Property** in the **Container Properties** section.

    2.  In the **Property Name** field, type as com.boomi.container.listen.secure.enabled.

    3.  In the **Property Value** field, enter True.

    By default, this property is set to False and the Atom Cloud and listener functionality does not change. When set to True, the Atom Cloud and any single tenant containers \(Atom Cloud node's main JVM or Atom worker JVM\) support single tenant connectors allowing the listeners to run.

6.  Click the **Advanced** tab.

7.  In the dropdown box, select the **Atom Workers Enabled** property from the list and click **Add a Property**.

8.  Select the check box in the **Property Value** field next to the property name. By selecting the check box for this property, the Atom Cloud can use Atom workers. Atom workers are required when the **com.boomi.container.listen.secure.enabled** container property is set to True on the **Custom** tab.

9.  Click **Save**.

## Next Steps


The changes to many of these properties do not take effect until the Atom or private Atom Cloud is restarted, you are prompted to restart. You have the option to restart now or restart later. Only Atom and Cloud owners can restart them. Accounts that have an Atom in a Cloud cannot restart the Cloud. For more details, refer to [Enabling Secure Listen for an AtomCloud](https://developer.boomi.com/docs/Connectors/DevelopConnectors/SecureListen/Configuring_an_atom_cloud_for_secure_listen) topic.

