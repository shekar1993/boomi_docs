# Enabling partitioned storage for an Atom Cloud 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-97e78d1c-3823-4bb1-9277-6225005e15cd"/>
</head>


You can configure a multi-tenant Atom Cloud to partition its accounts’ working data in multiple shared network directories.

## Before you begin

You must have the Atom Management privilege to perform this task. If you have the Atom Management Read Access privilege, you cannot perform the task.

## Procedure

1.  In the **Manage** menu, select **Atom Management**.

2.  Select the Cloud Molecule from the list on the left.

3.  In Settings & Configuration, click **Properties**.

4.  Click the **Advanced** tab.

5.  Select the **Account Working Data Directories** property and click **Add Property**.

6.  In the **Property Value** field, add one or more directory paths separated by semi-colons \(;\).

    For example: `com.boomi.container.accountsDirs=\\\\fileserver1\\Cloud\\accounts;\\\\fileserver2\\Cloud\\accounts`.

7.  Click **Save**.

    Changes to this property do not take effect until the Cloud is restarted. You have the option to restart now or restart later.