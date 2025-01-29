# Adding an Atom Cloud 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-7dafe690-45e5-4da7-ba3d-f167592db954"/>
</head>


Add Atom Clouds to an account from the **Cloud Management** page.

## Before you begin

To see this page, you must have the Cloud Management privilege and enable Atom Clouds in your account.

## Procedure

1. Click the **Manage** menu and select **Cloud Management**.

2. On the **Clouds** tab, click **![Plus sign icon.](../Images/main-ic-plus-sign-white-in-green-circle-16_4dc8c5f3-e893-4aef-ade2-0b7afe9476c1.jpg) Add Cloud**.

    The **Cloud Properties** tab opens.

3. Type a name for the Cloud.

4. To deploy processes to this Atom Cloud, select the **Allow Deployments** check box.

5. To allow connector operations to browse and import objects, select the **Allow Browsing** check box.

6. To allow processes to run in Test mode, select the **Allow Test Executions** check box.

7. In the **Max. Atom Attachments per Account** field, enter the default number of Atoms that each account can set up. The default is 1.

8. In the **Classification** field, select **Production** or **Test** to indicate the type of Cloud.

    You can set the classification only when you add a Cloud. You cannot change it later.

9. Click **Save**.

10. (Optional) If you want to allocate a different number of Atoms for an account in this Atom Cloud, do the following:

    1. Select the Cloud on the **Clouds** tab and click **![Plus sign icon.](../Images/main-ic-plus-sign-white-in-green-circle-16_4dc8c5f3-e893-4aef-ade2-0b7afe9476c1.jpg) Add Quota** in the **Cloud Quotas** section.

        The **Cloud Quotas** dialog opens.

    2. Click the **Choose** icon and choose an account.

        To choose an account, you must share the Cloud with that account. You share Clouds on the **Resources** tab of the **Account Groups** page.

    3. In the **Max. Atom Attachments** field, enter the maximum number of Atoms for this account.

        This number overrides the default number entered for all of your accounts in the **Max. Atom Attachments per Account** field.

    4. Click **OK**.

## Next steps

After adding an Atom Cloud, you must download the Cloud Molecule installer.