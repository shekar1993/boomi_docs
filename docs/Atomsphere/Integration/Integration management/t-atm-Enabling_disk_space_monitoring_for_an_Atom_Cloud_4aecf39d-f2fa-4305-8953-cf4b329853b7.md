# Enabling disk space monitoring for an Atom Cloud 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-4aecf39d-f2fa-4305-8953-cf4b329853b7"/>
</head>


You can enable disk space monitoring for your private Atom Cloud.

## Before you begin

You must have the Atom Management privilege to perform this task. If you have the Atom Management Read Access privilege, you cannot perform the task.

1.  In the **Manage** menu, select **Atom Management**.

2.  Select the Cloud Molecule from the list on the left.

3.  In Settings & Configuration, click **Properties**.

4.  In the Cloud Properties panel, click the **Advanced** tab.

5.  In the Properties list, select the **Disk Space Monitoring** property and click **Add Property**.

6.  Add true in the **Property Value** field.

7.  Select the **Disk Space Monitoring Frequency** property, click **Add Property**, and add a whole number in milliseconds in the **Property Value** field.

8.  To receive a message on the server when an account is reaching a certain percentage of its disk quota, select the **Disk Space Warning Limit** property, click **Add Property**, and add a percentage represented by whole number from 0 to 100 in the **Property Value** field.

9.  Click **Save**.

    Because changes to these properties do not take effect until the Cloud is restarted, you are prompted to restart. You have the option to restart now or restart later.

10. To set a global size limit for all accounts in your private Atom Cloud:

    1.  Go to **Manage** \> **Cloud Management**.

    2.  Select the Atom Cloud.

    3.  On the **Attachment Quotas** tab, select the Cloud Molecule.

    4.  Enter a value in the **Account Disk Usage** field.

        You can enter a value in bytes or a value followed by KB, MB, GB or TB. For example, 30 GB or 30GB.

    5.  Click **Save**.

        The changes take effect immediately.

11. To set a size limit for an individual account in your private Atom Cloud:

    1.  Go to **Manage** \> **Cloud Management**.

    2.  Select the Atom Cloud.

    3.  On the **Attachment Quotas** tab, select the account’s Atom.

    4.  Enter a value in the **Account Disk Usage** field.

        You can enter a value in bytes or a value followed by KB, MB, GB or TB. For example, 30 GB or 30GB.

    5.  Click **Save**.

        The changes take effect immediately.

## Results

When an account exceeds its quota, a new directory named `accounts-suspended` is created in the directory where your Atom Cloud is installed. There a file named after the account ID contains information about why the account has been suspended.